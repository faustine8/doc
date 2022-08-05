---
lang: zh-CN
title: SkyWalking 源码之插件开发
description: SkyWalking 从入门到源码贡献
prev: /java/skywalking/04/
next: /java/skywalking/06/
---

# SkyWalking 源码之插件开发

## 1. 基础概念

本节主要介绍 SkyWalking 的 Java 探针插件开发过程中，所涉及核心对象的基本概念，主要包括 Span、Trace Segment、ContextCarrier 和 ContextSnapshot。
掌握这些核心对象后，就可以很容易地学习第 2 节介绍的核心对象相关的API。

### 1.1　Span

Span 是分布式追踪系统中一个非常重要的概念，可以理解为一次方法调用、一个程序块的调用、一次RPC调用或者数据库访问。
如果想更加深入地了解 Span 概念，可以学习一下论文 “Google Dapper, a Large-Scale Distributed Systems Tracing Infrastructure”（简称“Google Dapper”）和OpenTracing。

SkyWalking 的 Span 概念与 “Google Dapper” 论文和 OpenTracing 类似，但还进行了扩展，可依据是跨线程还是跨进程的链路，将Span粗略分为两类：LocalSpan 和 RemoteSpan。

LocalSpan 代表一次普通的 Java 方法调用，与跨进程无关，多用于当前进程中关键逻辑代码块的记录，或在跨线程后记录异步线程执行的链路信息。
RemoteSpan 可细分为 EntrySpan 和E xitSpan：

- EntrySpan 代表一个应用服务的提供端或服务端的入口端点，如 Web 容器的服务端的入口、RPC服务器的消费者、消息队列的消费者；
- ExitSpan（SkyWalking的早期版本中称其为LeafSpan），代表一个应用服务的客户端或消息队列的生产者，如 Redis 客户端的一次Redis调用、MySQL 客户端的一次数据库查询、RPC组件的一次请求、消息队列生产者的生产消息。

### 1.2　Trace Segment

Trace Segment 是 SkyWalking 中特有的概念，通常指在支持多线程的语言中，一个线程中归属于同一个操作的所有Span的聚合。这些Span具有相同的唯一标识 SegmentID。
Trace Segment 对应的实体类位于 `org.apache.skywalking.apm.agent.core.context.trace.TraceSegment`，其中重要的属性如下。

- TraceSegmentId：此 Trace Segment 操作的唯一标识。使用雪花算法生成，保证全局唯一。
- Refs：此 Trace Segment 的上游引用。对于大多数上游是RPC调用的情况，Refs 只有一个元素，但如果是消息队列或批处理框架，上游可能会是多个应用服务，所以就会存在多个元素。
- Spans：用于存储，从属于此 Trace Segment 的 Span 的集合。
- RelatedGlobalTraces：此 Trace Segment 的 Trace Id。大多数时候它只包含一个元素，但如果是消息队列或批处理框架，上游是多个应用服务，会存在多个元素。
- Ignore：是否忽略。如果 Ignore 为true，则此 Trace Segment 不会上传到 SkyWalking 后端。
- IsSizeLimited：从属于此 Trace Segment 的 Span 数量限制，初始化大小可以通过 `config.agent.span_limit_per_segment` 参数来配置，默认长度为 300。若超过配置值，在创建新的 Span 的时候，会变成 NoopSpan。NoopSpan表 示没有任何实际操作的 Span 实现，用于保持内存和GC成本尽可能低。
- CreateTime：此 Trace Segment 的创建时间。

### 1.3　ContextCarrier

分布式追踪要解决的一个重要问题是跨进程调用链的连接，ContextCarrier 的就是为了解决这个问题。如客户端A、服务端B两个应用服务，当发生一次 A 调用 B 的时候，跨进程传播的步骤如下。

1) 客户端 A 创建空的 ContextCarrier。
2) 通过 `ContextManager#createExitSpan` 方法创建一个 ExitSpan，或者使用 `ContextManager#inject` 在过程中传入并初始化 ContextCarrier。
3) 使用 `ContextCarrier.items()` 将 ContextCarrier 所有元素放到调用过程中的请求信息中，如 HTTP HEAD、Dubbo RPC 框架的attachments、消息队列 Kafka 消息的 header 中。
4) ContextCarrier 随请求传输到服务端。
5) 服务端 B 接收具有 ContextCarrier 的请求，并提取 ContextCarrier 相关的所有信息。
6) 通过 `ContextManager#createEntrySpan` 方法创建 EntrySpan，或者使用 `ContextManager#extract` 建立分布式调用关联，即绑定服务端 B 和客户端 A。

### 1.4　ContextSnapshot

除了跨进程，跨线程也是需要支持的，例如异步线程（内存中的消息队列）在Java中很常见。跨线程和跨进程十分相似，都需要传播上下文，唯一的区别是，跨线程不需要序列化。以下是跨线程传播的步骤。

1) 使用 `ContextManager#capture` 方法获取 ContextSnapshot 对象。
2) 让子线程以任何方式，通过方法参数或由现有参数携带来访问 ContextSnapshot。
3) 在子线程中使用 `ContextManager#continued`。


## 2. 核心对象相关API的使用

本节主要介绍 SkyWalking 的 Java 探针插件开发过程中涉及的重要 API 的使用，使读者能够掌握每个 API 的用法，进而使用正确的 API 完成 Java 探针插件的开发。

### 2.1 ContextCarrier#items

在跨进程链路追踪的案例场景中，我们使用 ContextCarrier#items 完成两个进程的链路数据管理。以 HTTP 请求为例，我们需要处理以下两个场景。

场景一，将发送进程的链路信息绑定到 header 中并通过客户端发送出去，具体代码如下：

```java{}
CarrierItem next = contextCarrier.items();
while (next.hasNext()) {
    next = next.next();    
    httpRequest.setHeader(next.getHeadKey(), next.getHeadValue());
}
```

场景二，接收服务器通过解析 header 将链路信息绑定到本次接收处理中，具体代码如下：

```java{}
CarrierItem next = contextCarrier.items();
while (next.hasNext()) {    
    next = next.next();    
    next.setHeadValue(request.getHeader(ne xt.getHeadKey()));
}
```

### 2.2 ContextManager#createEntrySpan

一个应用服务的提供端或服务端的接收端点，如 Web 容器的服务端入口、RPC 服务器或消息队列的消费者，在被调用时，都需要创建 EntrySpan，
这时需要使用 `ContextManager#createEntrySpan` 来完成，具体代码如下：

```java{}
ContextManager.createEntrySpan(operationName, contextCarrier);
```

`ContextManager#createEntrySpan` API有以下两个很关键的入参。

- operationName

定义此 EntrySpan 的操作方法名称，如 HTTP 接口的请求路径。注意，`operationName` 必须是有穷尽的，比如 RESTful 接口匹配 `/path/{id}`，
一定不要将 id 的真实值记录进来，因为 SkyWalking 在数据上报的时候，出于减少 `operationName` 长度和链路消息传输性能的考虑，
会将 `operationName` 映射在本地映射字典表中，使用 `operationName` 的映射值进行传输。因此，要保证 `operationName` 是有穷尽的，否则会造成字典表过大。

> 语音质检之类的 URL 似乎是无穷尽的，要看看怎么解决一下了。

- contextCarrier

为了绑定跨进程的追踪，需要将上游链路的追踪信息通过 `ContextCarrier#items` 绑定到本链路中，具体 API 使用见 `ContextCarrier#items`的使用。

### 2.3 ContextManager#extract

在消息队列或是批处理框架中，上游是多个应用服务，所以会存在多个元素，在这种场景下需要使用 `ContextManager#extract` 将多个上游应用的追踪信息绑定到当前链路中。

下面是消息队列 Kafka 框架在批处理情况下，将多个上游应用链路绑定到一起，具体代码如下：

```java{}
for (ConsumerRecord<?, ?> record : consumerRecords) {
    ContextCarrier contextCarrier = new ContextCarrier();    
    CarrierItem next = contextCarrier.items();    
    while (next.hasNext()) {        
        next = next.next();        
        Iterator<Header> iterator = record.headers().headers(next.getHeadKey()).iterator();
        if (iterator.hasNext()) {
            next.setHeadValue(new String(iterator.next().value()));
        }
    }
    ContextManager.extract(contextCarrier);
}
```

### 2.4 ContextManager#createExitSpan

在一个应用服务的客户端或消息队列生产者的发送端点，如 Redis 客户端的一次内存访问、MySQL 客户端的一次数据库查询或 RPC 组件的一次请求，
当发生请求时，客户端进程需要使用 `ContextManager#createExitSpan` 来创建 `ExitSpan`。具体代码如下：

```java{}
ContextManager.createExitSpan(operationName, contextCarrier, peer);
```

`ContextManager#createExitSpan` API 有以下 3 个很关键的入参。

- `operationName`：定义此 ExitSpan 的操作方法名称。注意，operationName 一定是有穷尽的，详情与 `ContextManager#createEntrySpan` 的入参 `operationName` 一致。
- `contextCarrier`：为了绑定跨进程的追踪，需要将本线程的链路的追踪信息绑定到 `header` 中，具体 API 使用见 `ContextCarrier#items` 的使用。
- `peer`：下游的地址，具体格式为 `ip:port`。若下游系统无法下探针，如 Redis、MySQL 等资源，则需要将下游所有的地址写入 peer 参数中，具体格式为 `ip:port;ip:port`。

### 2.5 ContextManager#inject

`ContextManager#inject` 是个不太常用的 API，当需要自己控制创建 ExitSpan 方法中的 `ContextManager#inject` 的调用时机时，可以使用此 API 完成。

### 2.6 ContextManager#createLocalSpan

对于进程中关键的本地逻辑代码块的链路追踪，或在跨线程后，开启对异步线程执行的链路追踪，需要使用 `ContextManager#createLocalSpan` 来创建 LocalSpan。具体代码如下：

```java{}
ContextManager.createLocalSpan(operationName)
```

`ContextManager#createLocalSpan` API有一个很关键的入参：`operationName`。`operationName` 定义此 LocalSpan 的操作方法名称。
注意，`operationName` 一定是有穷尽的，详情与 `ContextManager#createEntrySpan` 的入参 `operationName` 一致。

### 2.7 ContextManager#capture

在跨进程进行链路追踪的时候，我们需要传递父线程的链路快照，这时需要 `ContextManager#capture`来获取快照。
快照的传递，通常是由修改参数的数据或方法传递到子线程的。获取当前线程的快照的具体代码如下：

```java{}
ContextSnapshot snapshot = ContextManager.capture();
```

### 2.8 ContextManager#continued

在子线程中关联父进程快照需要使用 `ContextManager#continued`，具体代码如下：

```java{}
ContextManager.continued(contextSnapshot);
```

### 2.9 ContextManager#stopSpan

无论哪个类型的 Span，都需要通过调用 `stop` 方法来结束此 Span 的追踪，具体代码如下：

```java{}
ContextManager.stopSpan(span);
```

### 2.10 ContextManager#isActive

在不确定当前线程中是否存在未结束的 Span 的情况下，贸然调用 `stop` 方法会导致探针的异常，所以使用此 API 判断当前线程中是否有活跃的 Span。具体代码如下：

```java{}
ContextManager.isActive();
```

### 2.11 ContextManager#activeSpan

此 API 用来获取当前进程中的活跃 Span，具体代码如下：

```java{}
AbstractSpan activeSpan = ContextManager.activeSpan();
```

### 2.12 AbstractSpan#setComponent

Component 可以理解为组件，是 Span 中的重要属性，SkyWalking 支持的探针组件都定义在文件 `org.apache.skywalking.apm.network.trace.component.ComponentsDefine` 和 `/oap-server/server-core/src/test/resources/component-libraries.yml` 中，
将 Component 赋予 Span 需要使用 `AbstractSpan#setComponent` 这个 API，例如将 Tomcat 组件赋予 Span 的代码如下：

```java{}
span.setComponent(ComponentsDefine.TOMCAT);
```

### 2.13 AbstractSpan#setLayer

Layer 可以理解为 Span 的简单显示，对于页面展示有很重要的意义。目前在 SkyWalking 中 Layer 有 5 种类型，分别是：

- 代表数据库的 `SpanLayer.Database`；
- 代表 RPC 框架的 `SpanLayer.RPCFramework`；
- 代表 Web 服务器接收 HTTP 请求的 `SpanLayer.Http`；
- 代表消息队列的 `SpanLayer.MQ`；
- 代表缓存数据库的 `SpanLayer.Cache`。

比如当前 Span 的组件是数据库类型的组件，我们需要使用如下 API，对当前 Span 进行标记。

```java{}
span.setLayer(SpanLayer.Database);
SpanLayer.asDB(span);//推荐
```

### 2.14 AbstractSpan#tag

有时候，我们需要在当前 Span 中增加对应的 tag，使用 `AbstractSpan#tag` 可以进行 Span 的记录，下面这些 tag 的 key 是有特殊意义的。

- `Tags.URL`：key 为 url，记录传入请求的 URL。
- `Tags.STATUS_CODE`：key 为 status_code，记录响应的HTTP状态代码，多用于记录状态码大于等于 400 的情况。
- `Tags.DB_TYPE`：key 为 db.type，记录数据库类型，例如 SQL、Redis、Cassandra 等。
- `Tags.DB_INSTANCE`：key 为 db.instance，记录数据库实例名称。
- `Tags.DB_STATEMENT`：key 为 db.statement，记录数据库访问的 SQL 语句。
- `Tags.DB_BIND_VARIABLES`：key 为 db.bind_vars，记录 SQL 语句的绑定变量。
- `Tags.MQ_QUEUE`：key 为 mq.queue，记录消息中间件的队列名称。
- `Tags.MQ_BROKER`：key 为 mq.broker，记录消息中间件的代理地址。
- `Tags.MQ_TOPIC`：key 为 mq.topic，记录消息中间件的主题名称。
- `Tags.HTTP.METHOD`：key 为 http.method，记录 HTTP 请求的方法。

下面是两种记录 tag 的方法：

```java{}
Tags.URL.set(span, request.getURI().toString());//推荐
span.tag("key", "value");
```

### 2.15 AbstractSpan#log

log 通常是记录当前方法出现异常时，将堆栈信息存入此 Span，或者根据一个时间点记录具有多个字段的公共日志。API使用如下：

```java{}
span.log(System.currentTimeMillis(), even)
ContextManager.activeSpan().errorOccurred().log(t);
```

### 2.16 AbstractSpan#errorOccurred

在此 Span 追踪上下文的范围内，在自动检测机制中发生错误几乎意味着抛出异常，我们需要使用此 API 来标记此 Span 出现异常。

```java{}
ContextManager.activeSpan().errorOccurred();
```

### 2.17 AbstractSpan#setPeer

peer 表示对端资源，格式为 `ip:port`。若下游系统无法下探针，如 Redis、MySQL 等资源。需要将下游所有的地址写入 peer 参数中，具体格式是 `ip:port;ip:port`，具体API如下：

```java{}
span.setPeer("ip：port");
```

### 2.18 AsyncSpan

在一些场景中，当 Span 的 tag、log、结束时间等属性要在另一个线程中设置时，需要使用此 API 来完成，具体步骤如下：

1) 在原始上下文中调用 `AsyncSpan#prepareForAsync`；
2) 将该 Span 传播到其他线程，并完成相应属性的记录；
3) 在全部操作就绪之后，可在任意线程中调用 `#asyncFinish` 结束调用；
4) 当所有 Span 的 `AsyncSpan#prepareForAsync` 完成后, 追踪上下文会结束, 并一起被回传到后端服务（根据API执行次数判断）。



























