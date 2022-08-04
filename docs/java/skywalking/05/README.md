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





























