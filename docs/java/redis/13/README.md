---
lang: zh-CN
title: Redis 通讯协议及事件处理机制
description: Redis 通讯协议及事件处理机制
prev: /java/redis/12/
next: /java/redis/14/
---

# Redis 架构设计

## 1. 组件选择/多级

缓存的设计要分多个层次，在不同的层次上选择不同的缓存，包括 JVM 缓存、文件缓存和 Redis 缓存。

### 1.1 JVM 缓存

JVM 缓存就是本地缓存，设计在应用服务器中(Tomcat)。

通常可以采用 Ehcache 和 Guava Cache，在互联网应用中，由于要处理高并发，通常选择 Guava Cache。

适用本地( JVM )缓存的场景:

1. 对性能有非常高的要求。
2. 不经常变化。
3. 占用内存不大。
4. 有访问整个集合的需求。
5. 数据允许不实时一致。

### 1.2 文件缓存

这里的文件缓存是基于 HTTP 协议的文件缓存，一般放在 nginx 中。

因为静态文件(比如 CSS，JS，图片)中，很多都是不经常更新的。nginx 使用 proxy_cache 将用户的请求缓存到本地一个目录。
下一个相同请求可以直接调取缓存文件，就不用去请求服务器了。

```text
server {
        listen       80 default_server;
        server_name  localhost;
        root /mnt/blog/;
        location / {
        
        }
        
        #要缓存文件的后缀，可以在以下设置。
        location ~ .*\.(gif|jpg|png|css|js)(.*) {
            proxy_pass http://ip地址:90; 
            proxy_redirect off; 
            proxy_set_header Host $host; 
            proxy_cache cache_one; 
            proxy_cache_valid 200 302 24h; 
            proxy_cache_valid 301 30d; 
            proxy_cache_valid any 5m; 
            expires 90d;
            add_header wall  "hello zmn.";
        } 
}
```

### 1.3 Redis 缓存

分布式缓存，采用 *主从 + 哨兵* 或 RedisCluster 的方式缓存数据库的数据。

在实际开发中

- 作为数据库使用，数据要完整
- 作为缓存使用，作为Mybatis的二级缓存使用

## 2. 缓存大小

GuavaCache 的缓存设置方式:

```java
CacheBuilder.newBuilder().maximumSize(num) // 超过num会按照LRU算法来移除缓存
```

nginx 的缓存设置方式:

```text
http { 
    ...
    proxy_cache_path /path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;
    
    server {
        proxy_cache mycache;
        location / {
            proxy_pass http://localhost:8000;
        }
    }
}
```

Redis 缓存设置:

```text
maxmemory=num # 最大缓存量 一般为内存的3/4 
maxmemory-policy allkeys lru #
```

**缓存淘汰策略的选择**

- `allkeys-lru`: 在不确定时一般采用策略。
- `volatile-lru`: 比 `allkeys-lru` 性能差， 存:过期时间
- `allkeys-random`: 希望请求符合平均分布(每个元素以相同的概率被访问)
- 自己控制: `volatile-ttl` 缓存穿透
- 禁止驱逐 用作 DB 不设置 `maxmemory`

## 3. key 数量

官方说 Redis 单例能处理key: 2.5 亿个

一个 key 或是 value 大小最大是 512M

## 4. 读写峰值

Redis 采用的是基于内存的采用的是单进程单线程模型的 KV 数据库，由 C 语言编写，官方提供的数据是可以达到 110_000+ 的 QPS(每秒内查询次数)。80_000 的写。

## 5. 命中率

- 命中: 可以直接通过缓存获取到需要的数据。
- 不命中: 无法直接通过缓存获取到想要的数据，需要再次查询数据库或者执行其它的操作。原因可能是由于缓存中根本不存在，或者缓存已经过期。

通常来讲，缓存的命中率越高则表示使用缓存的收益越高，应用的性能越好(响应时间越短、吞吐量越高)，抗并发的能力越强。

由此可见，在高并发的互联网系统中，缓存的命中率是至关重要的指标。

通过 `info` 命令可以监控服务器状态

```shell
127.0.0.1:6379> info
# Server
redis_version:5.0.5
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:e188a39ce7a16352
redis_mode:standalone
os:Linux 3.10.0-229.el7.x86_64 x86_64 
arch_bits:64
# 缓存命中
keyspace_hits:1000
# 缓存未命中
keyspace_misses:20
used_memory:433264648
expired_keys:1333536
evicted_keys:1547380
```

> 命中率 = 1000 / 1000 + 20 = 83% ??? 我算的是 0.98

一个缓存失效机制，和过期时间设计良好的系统，命中率可以做到 95% 以上。

影响缓存命中率的因素:

1. 缓存的数量越少命中率越高，比如缓存单个对象的命中率要高于缓存集合
2. 过期时间越长命中率越高
3. 缓存越大缓存的对象越多，则命中的越多

## 6. 过期策略

Redis 的过期策略是定时删除+惰性删除，这个前面已经讲了。

## 7. 性能监控指标

利用 `info` 命令就可以了解 Redis 的状态了，主要监控指标有:

```shell
connected_clients:68 # 连接的客户端数量
used_memory_rss_human:847.62M # 系统给 Redis 分配的内存 
used_memory_peak_human:794.42M # 内存使用的峰值大小 
total_connections_received:619104 # 服务器已接受的连接请求数量 
instantaneous_ops_per_sec:1159 # 服务器每秒钟执行的命令数量 QPS 
instantaneous_input_kbps:55.85 # Redis 网络入口 kps 
instantaneous_output_kbps:3553.89 # Redis 网络出口 kps 
rejected_connections:0 # 因为最大客户端数量限制而被拒绝的连接请求数量 
expired_keys:0 # 因为过期而被自动删除的数据库键数量
evicted_keys:0 # 因为最大内存容量限制而被驱逐(evict)的键数量 
keyspace_hits:0 # 查找数据库键成功的次数
keyspace_misses:0 # 查找数据库键失败的次数
```

Redis监控平台: grafana、prometheus 以及 redis_exporter。

## 8. 缓存预热

缓存预热就是系统启动前,提前将相关的缓存数据直接加载到缓存系统。

避免在用户请求的时候,先查询数据库,然后再将数据缓存的问题! 用户直接查询实现被预热的缓存数据。

加载缓存思路:

- 数据量不大，可以在项目启动的时候自动进行加载
- 利用定时任务刷新缓存，将数据库的数据刷新到缓存中

