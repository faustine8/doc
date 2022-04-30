---
lang: zh-CN
title: Redis 事务
description: Redis 事务
prev: /java/redis/04/
next: /java/redis/06/
---

# Redis 事务

所谓事务(Transaction) ，是指作为单个逻辑工作单元执行的一系列操作

## 1. ACID 回顾

- Atomicity(原子性)

构成事务的的所有操作必须是一个逻辑单元，要么全部执行，要么全部不执行。

Redis 一个队列中的命令，执行或不执行

- Consistency(一致性)

数据库在事务执行前后状态都必须是稳定的或者是一致的。

Redis 集群中不能保证实时的一致性，只能是最终一致性

- Isolation(隔离性)

事务之间不会相互影响。

Redis 命令是顺序执行的。在一个事务中，是有可能被插入执行其他客户端的命令的。

- Durability(持久性)

事务执行成功后必须全部写入磁盘。

Redis 有持久化但不保证数据的完整性

> 可见 Redis 的事务支持是比较弱的。

## 2. Redis 事务

- Redis 的事务是通过 `multi`、`exec`、`discard` 和 `watch` 这四个命令来完成的。
- Redis 的单个命令都是原子性的，所以这里需要确保事务性的对象是命令集合。
- Redis 将命令集合序列化并确保处于同一事务的命令集合连续且不被打断的执行。
- Redis 不支持回滚操作。

## 3. Redis 事务命令

- `multi`: 用于标记事务块的开始, Redis 会将后续的命令逐个放入队列中，然后使用 `exec` 原子化地执行这个命令队列
- `exec`: 执行命令队列
- `discard`: 清除命令队列
- `watch`: 监视key
- `unwatch`: 清除监视key

**watch 命令使用详解**

`watch key1` 在 `multi` 之前执行，然后开始往队列中放入命令，当使用 `exec` 开始执行队列中的命令时，如果发现 watch 的 key 发生了改变
(通常是其他线程改了 `key1` 所对应的数据)，则队列直接被清空。`exec` 命令会返回 `(nil)`。

## 4. Redis 事务机制

### 4.1 Redis 事务的执行

1. 事务开始

在 RedisClient 中，有属性 `flags`，用来表示是否在事务中

`flags=REDIS_MULTI`

2. 命令入队

RedisClient 将命令存放在事务队列中(EXEC, DISCARD, WATCH, MULTI 除外)

3. 事务队列

`multiCmd *commands` 用于存放命令

4. 执行事务

RedisClient 向服务器端发送 `exec` 命令，RedisServer 会遍历事务队列, 执行队列中的命令, 最后将执行的结果一次性返回给客户端。

如果某条命令在入队过程中发生错误，RedisClient 将 `flags` 置为 `REDIS_DIRTY_EXEC`，`exec` 命令将会失败返回。

```c
typedef struct redisClient{
    // flags
    int flags //状态
    // 事务状态 
    multiState mstate; 
    // .....
} redisClient;

// 事务状态
typedef struct multiState{
    // 事务队列,FIFO顺序
    // 是一个数组,先入队的命令在前,后入队在后 
    multiCmd *commands;
    // 已入队命令数
    int count;
} multiState;

// 事务队列
typedef struct multiCmd{
    // 参数
    robj **argv;
    // 参数数量
    int argc;
    // 命令指针
    struct redisCommand *cmd;
} multiCmd;
```

### 4.2 Watch 的执行

使用 `WATCH` 命令监视数据库键

`redisDb` 有一个 `watched_keys` 字典, key 是某个被监视的数据的 key, 值是一个链表. 记录了所有监视这个数据的客户端。

监视机制的触发

当修改数据后，监视这个数据的客户端的 `flags` 置为 `REDIS_DIRTY_CAS`

事务执行

RedisClient 向服务器端发送 `exec` 命令，服务器判断 RedisClient 的 `flags`，如果为 `REDIS_DIRTY_CAS`，则清空事务队列。

### 4.3 Redis 的弱事务性

- Redis 语法错误

整个事务的命令在队列里都清除

```shell
127.0.0.1:6379> multi
OK
127.0.0.1:6379> sets m1 44
(error) ERR unknown command `sets`, with args beginning with: `m1`, `44`,
127.0.0.1:6379> set m2 55
QUEUED
127.0.0.1:6379> exec
(error) EXECABORT Transaction discarded because of previous errors.
127.0.0.1:6379> get m1
"22"
```

`flags=REDIS_DIRTY_EXEC`

- Redis运行错误

在队列里正确的命令可以执行(弱事务性)

弱事务性:

1. 在队列里正确的命令可以执行(非原子操作)
2. 不支持回滚

```shell
127.0.0.1:6379> multi
OK
127.0.0.1:6379> set m1 55
QUEUED
127.0.0.1:6379> lpush m1 1 2 3 # 不能是语法错误
QUEUED
127.0.0.1:6379> exec
1) OK
2) (error) WRONGTYPE Operation against a key holding the wrong kind of value
127.0.0.1:6379> get m1
"55"
```

- Redis不支持事务回滚(为什么呢?)

1. 大多数事务失败是因为语法错误或者类型错误，这两种错误，在开发阶段都是可以预见的
2. Redis 为了性能方面就忽略了事务回滚。(回滚记录历史版本)
