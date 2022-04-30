---
lang: zh-CN
title: Redis 分布式锁
description: Redis 分布式锁
prev: /java/redis/15/
next: /java/redis/17/
---

# Redis 分布式锁

## 1. 利用 Watch 实现 Redis 乐观锁

乐观锁基于CAS(Compare And Swap)思想(比较并替换)，是不具有互斥性，不会产生锁等待而消耗资源，但是需要反复的重试，但也是因为重试的机制，
能比较快的响应。因此我们可以利用 Redis 来实现乐观锁。

具体思路如下:

1. 利用 Redis 的 watch 功能，监控这个 redisKey 的状态值
2. 获取 RedisKey 的值
3. 创建 Redis 事务
4. 给这个 Key 的值 +1
5. 然后去执行这个事务，如果 Key 的值被修改过则回滚，Key 不 +1

Redis乐观锁实现秒杀

> 代码 略...

## 2. SETNX

实现原理

- 共享资源互斥
- 共享资源串行化

单应用中使用锁: (单进程多线程) synchronized、ReentrantLock
分布式应用中使用锁:(多进程多线程) 分布式锁是控制分布式系统之间同步访问共享资源的一种方式。

利用 Redis 的单线程特性对共享资源进行串行化处理

### 2.1 实现方式

#### 获取锁

方式1: 使用 `set` 命令实现 (推荐)

```java{12}
/**
 * 使用redis的set命令实现获取分布式锁
 * 
 * @param lockKey    可以就是锁
 * @param requestId  请求ID，保证同一性 uuid + threadID
 * @param expireTime 过期时间，避免死锁 
 * @return
 */
public boolean getLock(String lockKey,String requestId,int expireTime) {
    //NX:保证互斥性
    // hset 原子性操作 只要lockKey有效 则说明有进程在使用分布式锁
    String result = jedis.set(lockKey, requestId, "NX", "EX", expireTime);
    if("OK".equals(result)) {
        return true;
    }
    return false;
}
```

方式2: 使用 `setnx` 命令实现 (并发会产生问题)

```java{2}
public  boolean getLock(String lockKey,String requestId,int expireTime) {
    Long result = jedis.setnx(lockKey, requestId);
    if(result == 1) {
    //成功设置 进程down 永久有效 别的进程就无法获得锁 jedis.expire(lockKey, expireTime);
    return true;
    }
    return false;
}
```

#### 释放锁

方式1: `del` 命令实现 (并发)

```java
/**
 * 释放分布式锁
 * 
 * @param lockKey * @param requestId
 */
public static void releaseLock(String lockKey,String requestId) {
    if (requestId.equals(jedis.get(lockKey))) {
        jedis.del(lockKey);
    } 
}
```

问题在于如果调用 `jedis.del()` 方法的时候，这把锁已经不属于当前客户端的时候，会解除他人加的锁。
那么是否真的有这种场景? 答案是肯定的，比如客户端 A 加锁，一段时间之后客户端 A 解锁，在执行 `jedis.del()` 之前，锁突然过期了，
此时客户端 B 尝试加锁成功，然后客户端 A 再执行 `del()` 方法，则将客户端 B 的锁给解除了。

方式2: Redis + Lua脚本实现 (推荐)

```java{2}
public static boolean releaseLock(String lockKey, String requestId) {
    String script = "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end";
    Object result = jedis.eval(script, Collections.singletonList(lockKey), Collections.singletonList(requestId));
    if (result.equals(1L)) {
        return true;
    }
    return false;
}
```

### 2.2 存在问题

- 单机: 无法保证高可用
- 主从: 无法保证数据的强一致性，在主机宕机时会造成锁的重复获得。

无法续租: 超过 expireTime 后，不能继续使用

### 2.3 本质分析

CAP 模型分析

在分布式环境下不可能满足三者共存，只能满足其中的两者共存，在分布式下 P 不能舍弃(舍弃 P 就是单机了)。
所以只能是 CP(强一致性模型)和 AP(高可用模型)。

分布式锁是 CP 模型，Redis 集群是 AP 模型。(base)

*Redis 集群不能保证数据的实时一致性，只能保证数据的最终一致性*。

为什么还可以用 Redis 实现分布式锁?

与业务有关

- 当业务不需要数据强一致性时，比如: 社交场景，就可以使用 Redis 实现分布式锁
- 当业务必须要数据的强一致性，即不允许重复获得锁，比如金融场景(重复下单，重复转账)就不要使用

可以使用CP模型实现，比如: zookeeper 和 etcd。

## 3. Redisson 分布式锁的使用

Redisson 是架设在 Redis 基础上的一个 Java 驻内存数据网格(In-Memory Data Grid)。

Redisson 在基于 NIO 的 Netty 框架上，生产环境使用分布式锁。

### 3.1 使用步骤

1. 加入 jar 包的依赖

```xml
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson</artifactId>
    <version>2.7.0</version>
</dependency>
```

2. 配置 Redisson

```java
public class RedissonManager {
    private static Config config = new Config();

    // 声明 Redisson 对象
    private static Redisson redisson = null;

    // 实例化 Redisson
    static {
        config.useClusterServers()
                // 集群状态扫描间隔时间，单位是毫秒
                .setScanInterval(2000)
                // cluster 方式至少 6 个节点(3主3从，3主做sharding，3从用来保证主宕机后可以高可用) 
                .addNodeAddress("redis://127.0.0.1:6379")
                .addNodeAddress("redis://127.0.0.1:6380")
                .addNodeAddress("redis://127.0.0.1:6381")
                .addNodeAddress("redis://127.0.0.1:6382")
                .addNodeAddress("redis://127.0.0.1:6383")
                .addNodeAddress("redis://127.0.0.1:6384");
        //得到redisson对象
        redisson = (Redisson) Redisson.create(config);
    }

    //获取redisson对象的方法
    public static Redisson getRedisson() {
        return redisson;
    }
}
```

3. 锁的获取和释放

```java
public class DistributedRedisLock {
    
    // 从配置类中获取 Redisson 对象
    private static Redisson redisson = RedissonManager.getRedisson();
    
    private static final String LOCK_TITLE = "redisLock_"; 
    
    // 加锁
    public static boolean acquire(String lockName) {
        // 声明 key 对象
        String key = LOCK_TITLE + lockName;
        // 获取锁对象
        RLock mylock = redisson.getLock(key);
        // 加锁，并且设置锁过期时间3秒，防止死锁的产生 uuid+threadId
        mylock.lock(2, 3, TimeUtil.SECOND);
        // 加锁成功
        return true;
    }

    //锁的释放
    public static void release(String lockName) {
        //必须是和加锁时的同一个key
        String key = LOCK_TITLE + lockName;
        //获取所对象
        RLock mylock = redisson.getLock(key);
        //释放锁(解锁) 
        mylock.unlock();
    }
}
```

4. 业务逻辑中使用分布式锁

```java{}
public String discount() throws IOException{
    String key = "lock001";
    // 加锁
    DistributedRedisLock.acquire(key); 
    // 执行具体业务逻辑
    dosoming()
    // 释放锁 
    DistributedRedisLock.release(key);
    //返回结果 
    return soming;
}
```

### 3.2 Redisson 分布式锁的实现原理

#### 加锁机制

如果该客户端面对的是一个 Redis Cluster 集群，他首先会根据 Hash 节点选择一台机器。发送 Lua 脚本到 Redis 服务器上，脚本如下:

```lua
if (redis.call('exists', KEYS[1]) == 0) then --看有没有锁
    redis.call('hset', KEYS[1], ARGV[2], 1); --无锁 加锁
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end ;
if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then --我加的锁 
    redis.call('hincrby', KEYS[1], ARGV[2], 1); --重入锁 
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end ;
return redis.call('pttl', KEYS[1]); --不能加锁，返回锁的时间
```

Lua的作用: 保证这段复杂业务逻辑执行的原子性。

Lua的解释:

- `KEYS[1])`: 加锁的 key
- `ARGV[1]`: key 的生存时间，默认为 30 秒
- `ARGV[2]`: 加锁的客户端ID `(UUID.randomUUID()) + ":" + threadId)`

第一段 if 判断语句，就是用 `exists myLock` 命令判断一下，如果要加锁的那个锁 key 不存在的话，就进行加锁。

如何加锁呢? 很简单，用下面的命令:

```shell
hset myLock 8743c9c0-0795-4907-87fd-6c719a6b4586:1 1
```

通过这个命令设置一个 Hash 数据结构，这行命令执行后，会出现一个类似下面的数据结构:

```text
myLock :{"8743c9c0-0795-4907-87fd-6c719a6b4586:1":1 }
```

上述就代表 `8743c9c0-0795-4907-87fd-6c719a6b4586:1` 这个客户端对 `myLock` 这个锁 key 完成了加锁。

接着会执行 `pexpire myLock 30000` 命令，设置 myLock 这个锁 key 的生存时间是 30 秒。

#### 锁互斥机制

在这个时候，如果客户端 2 来尝试加锁，执行了同样的一段 Lua 脚本，会怎么样呢?

很简单，第一个 `if` 判断会执行 `exists myLock`，发现 `myLock` 这个锁 key 已经存在了。

接着第二个 `if` 判断，判断一下，`myLock` 锁 key 的 Hash 数据结构中，是否包含客户端 2 的 ID，但是明显不是的，因为那里包含的是客户端 1 的 ID。

所以，客户端 2 会获取到 `pttl myLock` 返回的一个数字，这个数字代表了 `myLock` 这个锁 key 的剩余生存时间。比如还剩 15_000 毫秒的生存时间。

此时客户端 2 会进入一个 `while` 循环，不停的尝试加锁。

#### 自动延时机制

只要客户端 1 一旦加锁成功，就会启动一个 `watch dog` 看门狗，他是一个后台线程，会每隔 10 秒检查一 下，
如果客户端 1 还持有锁 key，那么就会不断的延长锁 key 的生存时间。

#### 可重入锁机制

第一个 `if` 判断肯定不成立，`exists myLock` 会显示锁 key 已经存在了。

第二个 `if` 判断会成立，因为 `myLock` 的 `Hash` 数据结构中包含的那个 ID，就是客户端 1 的那个ID，也就是 `8743c9c0-0795-4907-87fd-6c719a6b4586:1`

此时就会执行可重入加锁的逻辑，他会用:

```shell
incrby myLock 8743c9c0-0795-4907-87fd-6c71a6b4586:1 1
```

通过这个命令，对客户端 1 的加锁次数，累加 1。数据结构会变成:

```text
myLock :{"8743c9c0-0795-4907-87fd-6c719a6b4586:1":2 }
```

#### 释放锁机制

执行 Lua 脚本如下:

```lua
-- 如果key已经不存在，说明已经被解锁，直接发布(publish) Redis 消息
if (redis.call('exists', KEYS[1]) == 0) then
    redis.call('publish', KEYS[2], ARGV[1]);
    return 1;
end ;
-- key 和 field 不匹配，说明当前客户端线程没有持有锁，不能主动解锁。 
-- 不是我加的锁 不能解锁
if (redis.call('hexists', KEYS[1], ARGV[3]) == 0) then
    --  将value减1
    return nil;
end ;

local counter = redis.call('hincrby', KEYS[1], ARGV[3], -1);
-- 如果 counter > 0 说明锁在重入，不能删除 key
if (counter > 0) then
    redis.call('pexpire', KEYS[1], ARGV[2]);
    return 0;
--删除key并且publish 解锁消息
else
    redis.call('del', KEYS[1]); -- 删除锁 
    redis.call('publish', KEYS[2], ARGV[1]);
    return 1;
end ;
return nil;
```

– `KEYS[1]`: 需要加锁的 key，这里需要是字符串类型。
– `KEYS[2]`: Redis 消息的 ChannelName, 一个分布式锁对应唯一的一个 channelName: `redisson_lockchannel{" + getName() + "}`
– `ARGV[1]`: Redis消息体，这里只需要一个字节的标记就可以，主要标记 Redis 的 key 已经解锁，再结合 Redis 的 Subscribe，能唤醒其他订阅解锁消息的客户端线程申请锁。
– `ARGV[2]`: 锁的超时时间，防止死锁
– `ARGV[3]`: 锁的唯一标识，也就是刚才介绍的 `id(UUID.randomUUID()) + “:” + threadId`

如果执行 `lock.unlock()`，就可以释放分布式锁，此时的业务逻辑也是非常简单的。其实说白了，就是每次都对 `myLock` 数据结构中的那个加锁次数 -1。

如果发现加锁次数是 0 了，说明这个客户端已经不再持有锁了，此时就会用: `del myLock` 命令，从 Redis 里删除这个key。
然后呢，另外的客户端 2 就可以尝试完成加锁了。

## 4. 分布式锁特性

- 互斥性

任意时刻，只能有一个客户端获取锁，不能同时有两个客户端获取到锁。

- 同一性

锁只能被持有该锁的客户端删除，不能由其它客户端删除。

- 可重入性

持有某个锁的客户端可继续对该锁加锁，实现锁的续租

- 容错性

锁失效后(超过生命周期)自动释放锁(key失效)，其他客户端可以继续获得该锁，防止死锁

## 5. 分布式锁的实际应用

- 数据并发竞争
- 利用分布式锁可以将处理串行化，前面已经讲过了。
- 防止库存超卖

订单1下单前会先查看库存，库存为10，所以下单5本可以成功; 订单2下单前会先查看库存，库存为10，所以下单8本可以成功;
订单1和订单2 同时操作，共下单13本，但库存只有10本，显然库存不够了，这种情况称为库存超卖。 可以采用分布式锁解决这个问题。

订单1和订单2都从Redis中获得分布式锁(setnx)，谁能获得锁谁进行下单操作，这样就把订单系统下单 的顺序串行化了，就不会出现超卖的情况了。伪码如下:

```java{}
//加锁并设置有效期 
if(redis.lock("RDL",200)){
    //判断库存
    if (orderNum < getCount()){
        //加锁成功 ,可以下单
        order(5);
        //释放锁 
        redis,unlock("RDL");
    }
}
```

注意此种方法会降低处理效率，这样不适合秒杀的场景，秒杀可以使用 CAS 和 Redis 队列的方式。

## 6. Zookeeper分布式锁的对比

- 基于 Redis 的 set 实现分布式锁
- 基于 zookeeper 临时节点的分布式锁
- 基于 etcd 实现

三者的对比，如下表

|       | Redis | zookeeper         | etcd        |
|-------|-------|-------------------|-------------|
| 一致性算法 | 无     | paxos(ZAB)        | raft        |
| CAP   | AP    | CP                | CP          |
| 高可用   | 主从集群  | n+1 (n至少为2)       | n+1         |
| 接口类型  | 客户端   | 客户端               | http/grpc   |
| 实现    | setNX | `createEphemeral` | restful API |

