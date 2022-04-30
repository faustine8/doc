---
lang: zh-CN
title: Redis 慢查询日志
description: Redis 慢查询日志
prev: /java/redis/06/
next: /java/redis/08/
---

# Redis 慢查询日志

我们都知道 MySQL 有慢查询日志，Redis 也有慢查询日志，可用于监视和优化查询

## 1. 慢查询设置

在 `redis.conf` 中可以配置和慢查询日志相关的选项:

```shell
# 执行时间超过多少微秒的命令请求会被记录到日志上 0 :全记录 <0 不记录 
slowlog-log-slower-than 10000
# slowlog-max-len 存储慢查询日志条数
slowlog-max-len 128
```

Redis 使用列表存储慢查询日志，采用队列方式(FIFO)

`config set` 的方式可以临时设置，Redis 重启后就无效

```shell
config set slowlog-log-slower-than 微秒
config set slowlog-max-len 条数 
# 查看日志
slowlog get [n]
```

```shell
127.0.0.1:6379> config set slowlog-log-slower-than 0
OK
127.0.0.1:6379> config set slowlog-max-len 2
OK
127.0.0.1:6379> set name:001 john
OK
127.0.0.1:6379> set name:002 jack
OK
127.0.0.1:6379> get name:002
"jack"
127.0.0.1:6379> slowlog get
1) 1) (integer) 4             # 日志的唯一标识符(uid)
   2) (integer) 1649814537    # 命令执行时的UNIX时间戳
   3) (integer) 4             # 命令执行的时长(微秒)
   4) 1) "get"                # 执行命令及参数
      2) "name:002"
   5) "127.0.0.1:46752"
   6) ""
2) 1) (integer) 3
   2) (integer) 1649814528
   3) (integer) 8
   4) 1) "set"
      2) "name:002"
      3) "jack"
   5) "127.0.0.1:46752"
   6) ""
```

## 2. 慢查询记录的保存

在 `redisServer` 中保存和慢查询日志相关的信息

```c
struct redisServer {
    // ...
    
    // 下一条慢查询日志的 ID
    long long slowlog_entry_id;
    
    // 保存了所有慢查询日志的链表 FIFO 
    list *slowlog;
    
    // 服务器配置 slowlog-log-slower-than 选项的值 
    long long slowlog_log_slower_than;
    
    // 服务器配置 slowlog-max-len 选项的值 
    unsigned long slowlog_max_len;
    
    // ...
```

`slowlog` 链表保存了服务器中的所有慢查询日志，链表中的每个节点都保存了一个 `slowlogEntry` 结构， 每个 `slowlogEntry` 结构代表一条慢查询日志。

```c
typedef struct slowlogEntry {
    // 唯一标识符
    long long id;
    
    // 命令执行时的时间，格式为 UNIX 时间戳
    time_t time;
    
    // 执行命令消耗的时间，以微秒为单位
    long long duration; 
    
    // 命令与命令参数
    robj **argv;
    
    // 命令与命令参数的数量
    int argc;
} slowlogEntry;
```

## 3. 慢查询日志的阅览&删除

初始化日志列表

```c
void slowlogInit(void) {
    server.slowlog = listCreate(); /* 创建一个list列表 */ 
    server.slowlog_entry_id = 0; /* 日志ID从0开始 */ 
    listSetFreeMethod(server.slowlog,slowlogFreeEntry); /* 指定慢查询日志list空间的释放方法 */ 
}
```

获得慢查询日志记录

```shell
slowlog get [n]
```

```c
def SLOWLOG_GET(number=None):
    # 用户没有给定 number 参数
    # 那么打印服务器包含的全部慢查询日志 
    if number is None:
      number = SLOWLOG_LEN() 
      
    # 遍历服务器中的慢查询日志
    for log in redisServer.slowlog:
      if number <= 0:
        # 打印的日志数量已经足够，跳出循环
        break 
      else:
        # 继续打印，将计数器的值减一 
        number -= 1
        # 打印日志 
      printLog(log)
```

查看日志数量的 `slowlog len`

```c
def SLOWLOG_LEN():
    # slowlog 链表的长度就是慢查询日志的条目数量 
    return len(redisServer.slowlog)
```

清除日志 `slowlog reset`

```c
def SLOWLOG_RESET():

    # 遍历服务器中的所有慢查询日志
    for log in redisServer.slowlog:
    
        # 删除日志 
        deleteLog(log)
```

## 4. 添加日志实现

在每次执行命令的之前和之后，程序都会记录微秒格式的当前 UNIX 时间戳，这两个时间戳之间的差就是服务器执行命令所耗费的时长，
服务器会将这个时长作为参数之一传给 `slowlogPushEntryIfNeeded` 函数， 而 `slowlogPushEntryIfNeeded` 函数则负责检查是否需要为这次执行的命令创建慢查询日志

```c{2,8,11,15}
// 记录执行命令前的时间
before = unixtime_now_in_us()

//执行命令
execute_command(argv, argc, client)

//记录执行命令后的时间
after = unixtime_now_in_us()

// 检查是否需要创建新的慢查询日志 
slowlogPushEntryIfNeeded(argv, argc, before-after)

void slowlogPushEntryIfNeeded(robj **argv, int argc, long long duration) {
    if (server.slowlog_log_slower_than < 0) return; /* Slowlog disabled */ /* 负数表示禁用 */
    if (duration >= server.slowlog_log_slower_than) /* 如果执行时间 > 指定阈值*/
        listAddNodeHead(server.slowlog,slowlogCreateEntry(argv,argc,duration)); /* 创建一个slowlogEntry对象,添加到列表首部*/
    while (listLength(server.slowlog) > server.slowlog_max_len) /* 如果列表长度 > 指定长度 */
        listDelNode(server.slowlog,listLast(server.slowlog)); /* 移除列表尾部元素 */
}
```

`slowlogPushEntryIfNeeded` 函数的作用有两个:

1. 检查命令的执行时长是否超过 `slowlog-log-slower-than` 选项所设置的时间。如果是的话，就为命令创建一个新的日志，并将新日志添加到 `slowlog` 链表的表头。
2. 检查慢查询日志的长度是否超过 `slowlog-max-len` 选项所设置的长度。如果是的话，那么将多出来的日志从 `slowlog` 链表中删除掉。

## 5. 慢查询定位&处理

使用 `slowlog get` 可以获得执行较慢的 Redis 命令，针对该命令可以进行优化:

1. 尽量使用短的 key，对于 value 有些也可精简，能使用 int 就 int。
2. 避免使用 `keys *`、`hgetall` 等全量操作。
3. 减少大 key 的存取，打散为小 key (100K以上)
4. 将 RDB 改为 AOF 模式

> RDB fork 子进程, 数据量过大, 主进程阻塞, Redis 性能大幅下降
>
> 关闭持久化 (适合于数据量较小，有固定数据源)

5. 想要一次添加多条数据的时候可以使用管道
6. 尽可能地使用哈希存储
7. 尽量限制下 Redis 使用的内存大小，这样可以避免 Redis 使用 swap 分区或者出现 OOM 错误

> 内存与硬盘的 swap
