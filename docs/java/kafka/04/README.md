---
lang: zh-CN
title: Kafka 服务端参数配置
description: Kafka 服务端参数配置
prev: /java/kafka/03/
next: /java/kafka/05/
---

# Kafka 服务端参数配置

> `$KAFKA_HOME/config/server.properties` 文件中的配置

## 1. zookeeper.connect

该参数用于配置 Kafka 要连接的 Zookeeper 集群的地址。

它的值是一个字符串，使用逗号分隔 Zookeeper 的多个地址。Zookeeper的单个地址是 `host:port` 形式的，可以在最后添加 Kafka 在 Zookeeper 中的根节点路径。

如: `zookeeper.connect=node2:2181,node3:2181,node4:2181/myKafka`

## 2. listeners

用于指定当前 Broker 向外发布服务的地址和端口。

与 `advertised.listeners` 配合，用于做内外网隔离。

内外网隔离配置:

- `listener.security.protocol.map`

监听器名称和安全协议的映射配置。

比如，可以将内外网隔离，即使它们都使用SSL。

`listener.security.protocol.map=INTERNAL:SSL,EXTERNAL:SSL`

每个监听器的名称只能在 map 中出现一次。

- `inter.broker.listener.name`

用于配置 Broker 之间通信使用的监听器名称，该名称必须在 `advertised.listeners` 列表中。

`inter.broker.listener.name=EXTERNAL`

- `listeners`

用于配置 Broker 监听的 URI 以及监听器名称列表，使用逗号隔开多个 URI 及监听器名称。

如果监听器名称代表的不是安全协议，必须配置 `listener.security.protocol.map`。

每个监听器必须使用不同的网络端口。

- `advertised.listeners`

需要将该地址发布到 zookeeper 供客户端使用，如果客户端使用的地址与 listeners 配置不同。

可以在 zookeeper 的 `get /myKafka/brokers/ids/<broker.id>` 中找到。

在 IaaS 环境，该条目的网络接口得与 Broker 绑定的网络接口不同。

如果不设置此条目，就使用 `listeners` 的配置。跟 `listeners` 不同，该条目不能使用 `0.0.0.0` 网络端口。

`advertised.listeners` 的地址必须是 `listeners` 中配置的或配置的一部分。

## 3. broker.id

该属性用于唯一标记一个 Kafka 的 Broker，它的值是一个任意 Integer 值。

当 Kafka 以分布式集群运行的时候，尤为重要。

最好该值跟该 Broker 所在的物理主机有关的，如主机名为 `host1.zmn.com`，则 `broker.id=1`，如果主机名为 `192.168.100.101` ，则 `broker.id=101` 等等。

## 4. log.dir

通过该属性的值，指定 Kafka 在磁盘上保存消息的日志片段的目录。

它是一组用逗号分隔的本地文件系统路径。

如果指定了多个路径，那么 Broker 会根据「最少使用」原则，把同一个分区的日志片段保存到同一个路径下。

Broker 会往拥有最少数目分区的路径新增分区，而不是往拥有最小磁盘空间的路径新增分区。
