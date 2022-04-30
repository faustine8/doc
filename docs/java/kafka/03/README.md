---
lang: zh-CN
title: Kafka 开发实战
description: Kafka 开发实战
prev: /java/kafka/02/
next: /java/kafka/04/
---

# Kafka 开发实战

## 1. 消息的发送与接收

![消息发送流程示意图](./assets/README-1650028663738.png)

生产者主要的对象有: `KafkaProducer`，`ProducerRecord`。

其中 `KafkaProducer` 是用于发送消息的类，`ProducerRecord` 类用于封装 Kafka 的消息。

`KafkaProducer` 的创建需要指定的参数和含义

- `bootstrap.servers`

配置生产者如何与 Broker 建立连接。该参数设置的是初始化参数。如果生产者需要连接的是 Kafka 集群，则这里配置集群中几个 Broker 的地址，而不是全部。
当生产者连接上此处指定的 Broker 之后，在通过该连接发现集群中的其他节点。

- `key.serializer`

要发送信息的 key 数据的序列化类。设置的时候可以写类名，也可以使用该类的 Class 对象。

- `value.serializer`

要发送消息的 value 数据的序列化类。设置的时候可以写类名，也可以使用该类的 Class 对象。

- `acks`

默认值: `all`

`acks=0`: 生产者不等待 Broker 对消息的确认，只要将消息放到缓冲区，就认为消息已经发送完成。该情形不能保证 Broker 是否真的收到了消息，`retries` 配置也不会生效。发送的消息的返回的消息偏移量永远是 `-1`。

`acks=1`: 表示消息只需要写到主分区即可，然后就响应客户端，而不等待副本分区的确认。在该情形下，如果主分区收到消息确认之后就宕机了，而副本分区还没来得及同步该消息，则该消息丢失。

`acks=all`: 首领分区会等待所有的 ISR 副本分区确认记录。该处理保证了只要有一个 ISR 副本分区存活，消息就不会丢失。*这是 Kafka 最强的可靠性保证，等效于 `acks=-1`*

- `retries`

`retries` 重试次数

当消息发送出现错误的时候，系统会重发消息。

跟客户端收到错误时重发一样。如果设置了重试，还想保证消息的有序性，需要设置 `MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION=1` 否则在重试此失败消息的时候，其他的消息可能发送成功了

> 其他参数可以从 `org.apache.kafka.clients.producer.ProducerConfig` 中找到。我们后面的内容会介绍到。

消费者生产消息后，需要 broker 端的确认，可以同步确认，也可以异步确认。同步确认效率低，异步确认效率高，但是需要设置回调对象。

------------------------------------------------------------------------------------------------------------------------

**测试案例**

生产者

```java

```


生产者2

```java

```


生产者3


```java

```



消息消费流程



消费者

```java

```

## 2. SpringBoot Kafka

1. `pom.xml` 文件



2. application.properties



3. Demo02SpringbootApplication.java



4. KafkaConfig.java



5. KafkaSyncProducerController.java



6. KafkaAsyncProducerController



7. MyConsumer.java

