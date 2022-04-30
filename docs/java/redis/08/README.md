---
lang: zh-CN
title: Redis 监视器
description: Redis 监视器
prev: /java/redis/07/
next: /java/redis/09/
---

## Redis 监视器

Redis 客户端通过执行 `MONITOR` 命令可以将自己变为一个监视器，实时地接受并打印出服务器当前处理的命令请求的相关信息。

此时，当其他客户端向服务器发送一条命令请求时，服务器除了会处理这条命令请求之外，还会将这条命令请求的信息发送给所有监视器。

![Redis监视器示意图.png](./assets/README-1649820288520.png)

Redis客户端1

```shell
127.0.0.1:6379> monitor
OK
1650163716.350486 [0 127.0.0.1:46774] "set" "name:10" "john"
1650163724.887951 [0 127.0.0.1:46774] "get" "name:10"
```

Redis客户端2

```shell
127.0.0.1:6379> set name:10 john
OK
127.0.0.1:6379> get name:10
"john"
```

## 1. 实现监视器

`redisServer` 维护一个 `monitors` 的链表，记录自己的监视器，每次收到 `MONITOR` 命令之后，将客户端追加到链表尾。

```c
void monitorCommand(redisClient *c) {
    /* ignore MONITOR if already slave or in monitor mode */
    if (c->flags & REDIS_SLAVE) return;
      c->flags |= (REDIS_SLAVE|REDIS_MONITOR); 
      listAddNodeTail(server.monitors,c); 
      addReply(c,shared.ok); //回复OK
}
```

## 2. 向监视器发送命令信息

利用 `call` 函数实现向监视器发送命令

```c
// call() 函数是执行命令的核心函数，这里只看监视器部分 
/*src/redis.c/call*/
/* Call() is the core of Redis execution of a command */ 
void call(redisClient *c, int flags) {
    long long dirty, start = ustime(), duration;
    int client_old_flags = c->flags;
    /* Sent the command to clients in MONITOR mode, only if the commands are
    * not generated from reading an AOF. */
    if (listLength(server.monitors) &&
        !server.loading &&
        !(c->cmd->flags & REDIS_CMD_SKIP_MONITOR))
        {
        replicationFeedMonitors(c,server.monitors,c->db->id,c->argv,c->argc);
    }
...... 
}
```

`call` 主要调用了 `replicationFeedMonitors`，这个函数的作用就是将命令打包为协议，发送给监视器。

## 3. Redis监控平台

Grafana、Prometheus 以及 redis_exporter。

- Grafana 是一个开箱即用的可视化工具，具有功能齐全的度量仪表盘和图形编辑器，有灵活丰富的图形化选项，可以混合多种风格，支持多个数据源特点。
- Prometheus 是一个开源的服务监控系统，它通过 HTTP 协议从远程的机器收集数据并存储在本地的时序数据库上。
- redis_exporter 为 Prometheus 提供了 Redis 指标的导出，配合 Prometheus 以及 Grafana 进行可视化及监控。
