---
lang: zh-CN
title: Redis 发布与订阅
description: Redis 发布与订阅
prev: /java/redis/03/
next: /java/redis/05/
---

# Redis 发布与订阅

Redis 提供了发布订阅功能，可以用于消息的传输。

Redis 的发布订阅机制包括三个部分，Publisher，Subscriber 和 Channel。

![Redis图解-发布订阅模型示意图.png](./assets/README-1650076376923.png)

发布者和订阅者都是 Redis 客户端，Channel 则为 Redis 服务器端。

发布者将消息发送到某个的频道，订阅了这个频道的订阅者就能接收到这条消息。

## 1. 频道/模式的订阅与退订

- `subscribe`: 订阅

```shell
subscribe channel1 channel2 ...
```

```shell
# Redis 客户端 1 订阅频道 1 和频道 2
subscribe ch1  ch2
```

- `publish`: 发布消息

```shell
publish channel message
```

```shell
# Redis 客户端 2 将消息发布在频道 1 和频道 2 上
publish ch1 hello
publish ch2 world
```

- `unsubscribe`: 退订 channel

```shell
# Redis 客户端 1 退订频道 1
unsubscribe ch1
```

- `psubscribe`: 模式匹配

```shell
psubscribe 模式
```

```shell
# Redis客户端 1 订阅所有以 ch 开头的频道
psubscribe ch*
```

- `punsubscribe` 退订模式

```shell
punsubscribe ch*
```

## 2. 发布订阅机制

订阅某个频道或模式:

- 客户端(client):

属性为 `pubsub_channels`，该属性表示该客户端订阅的所有*频道*

属性为 `pubsub_patterns`，该属性表示该客户端订阅的所有*模式*

- 服务器端(RedisServer):

属性为 `pubsub_channels`，该服务器端中的所有频道以及订阅了这些频道的客户端

属性为 `pubsub_patterns`，该服务器端中的所有模式以及订阅了这些模式的客户端

```c
typedef struct redisClient {
    ...
    dict *pubsub_channels; // 该 client 订阅的 channels，以 channel 为 key 用 dict 的方式组织 
    list *pubsub_patterns; // 该 client 订阅的 pattern，以 list 的方式组织
    ...
} redisClient;

struct redisServer {
    ...
    dict *pubsub_channels; // redis server 进程中维护的 channel dict，它以 channel 为 key，订阅 channel 的 client list 为 value
    list *pubsub_patterns; // redis server 进程中维护的 pattern list
    int notify_keyspace_events;
    ...
};
```

当客户端向某个频道发送消息时，Redis 首先在 `redisServer` 中的 `pubsub_channels` 中找出键(key)为该频道的节点，遍历该节点的值，
即遍历订阅了该频道的所有客户端，将消息发送给这些客户端。

然后，遍历结构体 `redisServer` 中的 `pubsub_patterns`，找出包含该频道的模式的节点，将消息发送给订阅了该模式的客户端。

### 3. 使用场景

哨兵模式，Redisson 框架使用。

在 Redis 哨兵模式中，哨兵通过发布与订阅的方式与 Redis 主服务器和 Redis 从服务器进行通信。这个我们将在后面的章节中详细讲解。

Redisson 是一个分布式锁框架，在 Redisson 分布式锁释放的时候，是使用发布与订阅的方式通知的，这个我们将在后面的章节中详细讲解。
