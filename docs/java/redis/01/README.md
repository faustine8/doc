---
lang: zh-CN
title: Redis 简介和安装
description: Redis 简介和安装
prev: /java/redis/
next: /java/redis/02/
---

# Redis 简介和安装

## 1. Redis 简介

### 1.1 什么是 Redis

Redis (Remote Dictionary Server)远程字典服务器，是用 C 语言开发的一个开源的高性能键值对(key-value)内存数据库。

它提供了五种数据类型来存储值: 字符串类型、散列类型、列表类型、集合类型、有序集合类型。

它是一种 NoSQL 数据存储。

### 1.2 Redis 发展历史

2008年，意大利的一家创业公司 Merzia 推出了一款基于 MySQL 的网站实时统计系统 LLOOGG ，然而没过多久该公司的创始人 Salvatore Sanfilippo (antirez)便对MySQL的性能感到失望，
于是他决定亲自为 LLOOGG 量身定做一个数据库，并于 2009 年开发完成，这个数据库就是 Redis。

#### Redis 2.6

Redis 2.6 在 2012 年正式发布，主要特性如下: 服务端支持 Lua 脚本、去掉虚拟内存相关功能、键的过期时间支持毫秒、从节点提供只读功能、
两个新的位图命令: `bitcount` 和 `bitop`、重构了大量的核心代码、优化了大量的命令。

#### Redis 2.8

Redis 2.8 在 2013 年 11 月 22 日正式发布，主要特性如下:

添加部分主从复制(增量复制)的功能、可以用 `bind` 命令绑定多个 IP 地址、Redis 设置了明显的进程名、发布订阅添加了 `pubsub` 命令、Redis Sentinel 生产可用

#### Redis 3.0

Redis 3.0 在 2015 年 4 月 1 日正式发布，相比于 Redis 2.8 主要特性如下:

Redis Cluster: Redis 的官方分布式实现(Ruby)、全新的对象编码结果、LRU 算法大幅提升、部分命令的性能提升

#### Redis 3.2

Redis 3.2 在 2016 年 5 月 6 日正式发布，相比于 Redis 3.0 主要特征如下: 

添加 GEO 相关功能、SDS 在速度和节省空间上都做了优化、新的 List 编码类型: quicklist、从节点读取过期数据保证一致性、Lua 脚本功能增强等

#### Redis 4.0

Redis 4.0 在 2017 年 7 月发布，主要特性如下:

提供了模块系统，方便第三方开发者拓展 Redis 的功能、PSYNC 2.0 优化了之前版本中，主从节点切换必然引起全量复制的问题、提供了新的缓存剔除算法 LFU(Last Frequently Used)，
并对已有算法 进行了优化、提供了 RDB-AOF 混合持久化格式等

### 1.3 Redis 应用场景

- 缓存使用，减轻DB压力 
- DB使用，用于临时存储数据(字典表，购买记录)
- 解决分布式场景下Session分离问题(登录信息)
- 任务队列(秒杀、抢红包等等)、乐观锁
- 应用排行榜 (zset)
- 签到 (bitmap)
- 分布式锁
- 冷热数据交换

## 2. Redis 单机版安装和使用

### 2.1 Redis 安装

1. 安装 C 语言需要的 GCC 环境

```shell
yum  install -y gcc-c++
yum install -y wget
```

2. 下载并解压缩 Redis 源码压缩包

```shell
wget http://download.redis.io/releases/redis-5.0.5.tar.gz
tar -zxf redis-5.0.5.tar.gz
```

3. 编译 Redis 源码，进入 redis-5.0.5 目录，执行编译命令

```shell
cd redis-5.0.5/src
make
```

4. 安装 Redis ，需要通过 `PREFIX` 指定安装路径

```shell
mkdir /opt/zmn/servers/redis -p
make install PREFIX=/opt/zmn/servers/redis
```

### 2.2 Redis 启动

#### 前端启动

启动命令: `redis-server`，直接运行 `bin/redis-server` 将以前端模式启动

关闭命令: `ctrl+c`

启动缺点: 客户端窗口关闭则 `redis-server` 程序结束，不推荐使用此方法

#### 后端启动

1. 拷贝 `redis-5.0.5/redis.conf` 配置文件到 Redis 安装目录的 `bin` 目录

```shell
cp redis.conf /opt/zmn/servers/redis/bin/
```

2. 修改 `redis.conf`

 ```text
# 将`daemonize`由`no`改为`yes`
daemonize yes
# 默认绑定的是回环地址，默认不能被其他机器访问 
# bind 127.0.0.1
# 是否开启保护模式，由yes该为no
protected-mode no
```

启动服务

```shell
./redis-server redis.conf
```

后端启动的关闭方式

```shell
./redis-cli shutdown
```

命令说明

| 命令                 | 说明            |
|--------------------|---------------|
| `redis-benchmark`  | 性能测试的工具       |
| `redis-check-aof`  | aof 文件进行检查的工具 |
| `redis-check-dump` | rdb 文件进行检查的工具 |
| `redis-cli`        | 进入redis命令客户端  |
| `redis-sentinel`   | 启动哨兵监控服务      |
| `redis-server`     | 启动redis服务     |

### 2.3 Redis 命令行客户端

命令格式

```shell
./redis-cli -h 127.0.0.1 -p 6379
```

参数说明

```shell
-h: redis 服务器的ip地址
-p: redis 实例的端口号
```

默认方式

```shell
./redis-cli
```

- 如果不指定主机和端口也可以
- 默认主机地址是127.0.0.1 
- 默认端口是6379
