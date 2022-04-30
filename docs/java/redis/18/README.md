---
lang: zh-CN
title: 阿里 Redis 使用手册
description: 阿里 Redis 使用手册
prev: /java/redis/17/
next: /java/redis/19/
---

# 阿里 Redis 使用手册

本文主要介绍在使用阿里云Redis的开发规范，从下面几个方面进行说明。

- 键值设计
- 命令使用
- 客户端使用
- 相关工具

通过本文的介绍可以减少使用 Redis 过程带来的问题。

## 1. 键值设计

### 1.1 key 名设计

**可读性和可管理性**

以业务名(或数据库名)为前缀(防止key冲突)，用冒号分隔，比如 `业务名:表名:id`

```text
ugc:video:1
```

**简洁性**

保证语义的前提下，控制 key 的长度，当 key 较多时，内存占用也不容忽视，例如:

```text
user:{uid}:friends:messages:{mid}
// 简化为
u:{uid}:fr:m:{mid}
```

不要包含特殊字符

反例: 包含空格、换行、单双引号以及其他转义字符

### 1.2 value 设计

拒绝 BigKey

防止网卡流量、慢查询，string 类型控制在 10KB 以内，hash、list、set、zset 元素个数不要超过 5000。

反例: 一个包含 200 万个元素的list。 (拆解)

非字符串的 BigKey，不要使用 `del` 删除，使用 `hscan`、`sscan`、`zscan` 方式渐进式删除，同时要注意防止 BigKey 过期时间自动删除问题
(例如一个 200 万的 zset 设置 1 小时过期，会触发 `del` 操作，造成阻塞，而且 该操作不会不出现在慢查询中(latency可查))，查找方法和删除方法

选择适合的数据类型

例如: 实体类型(要合理控制和使用数据结构内存编码优化配置,例如 ziplist，但也要注意节省内存和性能之间的平衡)

反例:

```shell
set user:1:name tom
set user:1:age 19
set user:1:favor football
```

正例：

```shell
hmset user:1 name tom age 19 favor football
```

控制key的生命周期

Redis 不是垃圾桶，建议使用 `expire` 设置过期时间(条件允许可以打散过期时间，防止集中过期)，不过期的数据重点关注 `idletime`。

## 2. 命令使用

1. O(N) 命令关注 N 的数量

例如 `hgetall`、`lrange`、`smembers`、`zrange`、`sinter` 等并非不能使用，但是需要明确 N 的值。
有遍历的需求可以使用 `hscan`、`sscan`、`zscan` 代替。

2. 禁用命令

禁止线上使用 `keys`、`flushall`、`flushdb` 等，通过 Redis 的 `rename` 机制禁掉命令，或者使用 scan 的方式渐进式处理。

3. 合理使用 select

Redis 的多数据库较弱，使用数字进行区分，很多客户端支持较差，同时多业务用多数据库实际还是单线程处理，会有干扰。

4. 使用批量操作提高效率
    1. 原生命令: 例如 mget、mset。
    2. 非原生命令:可以使用 `pipeline` 提高效率。

但要注意控制一次批量操作的元素个数(例如 500 以内，实际也和元素字节数有关)。

注意两者不同:

- 原生是原子操作，pipeline是非原子操作。
- pipeline可以打包不同的命令，原生做不到
- pipeline需要客户端和服务端同时支持。

5. 不建议过多使用 Redis 事务功能

Redis 的事务功能较弱(不支持回滚)，而且集群版本(自研和官方)要求一次事务操作的 key 必须在一个 slot 上(可以使用 `hashtag` 功能解决)

6. Redis 集群版本在使用 Lua 上有特殊要求
    1. 所有 key 都应该由 KEYS 数组来传递，`redis.call/pcall` 里面调用的 Redis 命令，key 的位置，必须是 KEYS array, 否则直接返回 `error，"-ERR bad lua script for redis cluster, all the keys that the script uses should be passed using the KEYS arrayrn"`
    2. 所有 key，必须在 1 个 slot 上，否则直接返回 `error, "-ERR eval/evalsha command keys must in same slotrn"`

7. `monitor`命令

必要情况下使用 `monitor` 命令时，要注意不要长时间使用。

## 3. 客户端使用

1. 避免多个应用使用一个 Redis 实例

不相干的业务拆分，公共数据做服务化。

2. 使用连接池

可以有效控制连接，同时提高效率，标准使用方式:

```java
class PoolDemo {
    public static void main(String[] args) {
        Jedis jedis = null;
        try {
            jedis = jedisPool.getResource();
            // 具体的命令
            jedis.executeCommand();
        } catch (Exception e) {
            logger.error("op key {} error: " + e.getMessage(), key, e);
        } finally {
            // 注意：这里不是关闭连接，在 JedisPool 模式下，Jedis 会被归还给资源池。
            if (jedis != null) jedis.close;
        }
    }
}
```

3. 熔断功能

高并发下建议客户端添加熔断功能(例如 Netflix hystrix)

4. 合理的加密

设置合理的密码，如有必要可以使用 SSL 加密访问(阿里云 Redis 支持)

5. 淘汰策略

根据自身业务类型，选好 `maxmemory-policy`(最大内存淘汰策略)，设置好过期时间。

默认策略是 `volatile-lru`，即超过最大内存后，在过期键中使用 LRU 算法进行 key 的剔除，保证不过期数据不被删除，但是可能会出现OOM问题。

其他策略如下:

- `allkeys-lru`: 根据 LRU 算法删除键，不管数据有没有设置超时属性，直到腾出足够空间为止。
- `allkeys-random`: 随机删除所有键，直到腾出足够空间为止。
- `volatile-random`: 随机删除过期键，直到腾出足够空间为止。
- `volatile-ttl`: 根据键值对象的 `ttl` 属性，删除最近将要过期数据。如果没有，回退到 `noeviction` 策略。
- `noeviction`: 不会剔除任何数据，拒绝所有写入操作并返回客户端错误信息 `"(error) OOM command not allowed when used memory"`，此时 Redis 只响应读操作。

## 4. 相关工具

1. 数据同步

Redis 间数据同步可以使用: `redis-port`

2. Big Key 搜索

Redis 大 Key 搜索工具

3. 热点 Key 寻找

内部实现使用 `monitor`，所以建议短时间使用 facebook 的 `redis-faina`

阿里云 Redis 已经在内核层面解决热点 Key 问题。

## 5. 删除 BigKey

1. 下面操作可以使用 pipeline 加速。

2. Redis 4.0 已经支持 key 的异步删除，欢迎使用。

---

1. Hash删除: hscan + hdel
2. List删除: ltrim
3. Set删除: sscan + srem
4. SortedSet删除: zscan + zrem
