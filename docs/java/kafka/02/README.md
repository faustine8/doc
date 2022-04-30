---
lang: zh-CN
title: Kafka 安装与配置
description: Kafka 安装与配置
prev: /java/kafka/01/
next: /java/kafka/03/
---

# Kafka 安装与配置

## 1. Java 环境安装

1、上传 `jdk-8u261-linux-x64.rpm` 到服务器并安装

```shell
rpm -ivh jdk-8u261-linux-x64.rpm
```

2. 配置环境变量:

```shell
vim/etc/profile

export JAVA_HOME=/usr/java/jdk1.8.0_261_amd64
export PATH=$PATH:$JAVA_HOME/bin

source /etc/profile
java -version
```

## 2. Zookeeper 安装配置

1. 上传 zookeeper-3.4.14.tar.gz 到服务器
2. 解压到 `/opt/zmn/servers` 目录

```shell
tar -zxf zookeeper-3.4.14.tar.gz -C /opt/zmn/servers/
cd /opt/zmn/servers/zookeeper-3.4.14/conf

# 复制 zoo_sample.cfg 命名为 zoo.cfg
cp zoo_sample.cfg zoo.cfg
# 编辑zoo.cfg文件 
vim zoo.cfg
```

3. 修改 Zookeeper 保存数据的目录 `dataDir`

```shell
dataDir=/var/lagou/zookeeper/data
```

4. 编辑 `/etc/profile`

- 设置环境变量 ZOO_LOG_DIR，指定Zookeeper保存日志的位置;
- ZOOKEEPER_PREFIX 指向 Zookeeper 的解压目录;
- 将 Zookeeper 的 bin 目录添加到 PATH 中

```shell
export ZOOKEEPER_PREFIX=/opt/zmn/servers/zookeeper-3.4.14
export PATH=$PATH:ZOOKEEPER_PREFIX/bin
export ZOO_LOG_DIR=/var/zmn/zookeeper/log
```

5. 使配置生效
6. 验证

```shell
zkServer.sh status
```

### 3. Kafka 安装与配置

1、上传 kafka_2.12-1.0.2.tgz 到服务器并解压

```shell
tar -zxf kafka_2.12-1.0.2.tgz -C /opt/zmn/servers/
```

2、配置环境变量并生效

```shell
vi /etc/profile

export KAFKA_HOME=/opt/zmn/servers/kafka_2.12-1.0.2
export PATH=$PATH:KAFKA_HOME/bin
```

3、配置 `$KAFKA_HOME/config` 中的 `server.properties` 文件

Kafka 连接 Zookeeper 的地址，此处使用本地启动的 Zookeeper 实例，连接地址是 `localhost:2181`，后面的 `myKafka` 是 Kafka 在 Zookeeper 中的根节点路径

```shell
zookeeper.connect=localhost:2181/myKafka
```

配置 kafka 存储持久化数据的目录 `log.dir=/var/lagou/kafka/kafka-logs`

```shell
mkdir -p /var/zmn/kafka/kafka-logs
```

4、启动Zookeeper

```shell
zkServer.sh start
```

5、确认 Zookeeper 的状态

6、启动Kafka

进入 Kafka 安装的根目录，执行如下命令

```shell
kafka-server-start.sh config/server.properties
```

> 启动成功，可以看到控制台输出的最后一行的 `started` 状态

7、查看Zookeeper的节点

```shell
ls /myKafka
```

8、此时Kafka是前台模式启动，要停止，使用 `Ctrl+C`。

如果要后台启动，使用命令: `kafka-server-start.sh -daemon config/server.properties`

查看 Kafka 的后台进程: `ps aux | grep kafka`

停止后台运行的 Kafka : `kafka-server-stop.sh`

## 4. 生产与消费

1、`kafka-topics.sh` 用于管理主题

```shell
# 列出现有的主题
kafka-topics.sh --list --zookeeper localhost:2181/myKafka

# 创建主题，该主题包含一个分区，该分区为 Leader 分区，它没有 Follower 分区副本。
kafka-topics.sh --zookeeper localhost:2181/myKafka --create --topic topic_1 --partitions 1 --replication-factor 1

# 查看分区信息
kafka-topics.sh --zookeeper localhost:2181/myKafka --list

# 查看指定主题的详细信息
kafka-topics.sh --zookeeper localhost:2181/myKafka --describe --topic topic_1

# 删除指定主题
kafka-topics.sh --zookeeper localhost:2181/myKafka --delete --topic topic_1
```

2、`kafka-console-producer.sh` 用于生产消息

```shell
# 开启生产者
kafka-console-producer.sh --topic topic_1 --broker-list localhost:9020
```

3、`kafka-console-consumer.sh` 用于消费消息

```shell
# 开启消费者
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic_1

# 开启消费者方式二，从头消费，不按照偏移量消费
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic_1 --from-beginning
```
