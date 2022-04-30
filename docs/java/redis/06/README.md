---
lang: zh-CN
title: Lua 脚本
description: Lua 脚本
prev: /java/redis/05/
next: /java/redis/07/
---

# Lua 脚本

Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放，其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。

Lua应用场景: 游戏开发、独立应用脚本、Web应用脚本、扩展和数据库插件。

> nginx 上使用 Lua 实现高并发

OpenRestry: 一个可伸缩的基于 Nginx 的 Web 平台，是在 nginx 之上集成了 Lua 模块的第三方服务器

OpenRestry 是一个通过 Lua 扩展 Nginx 实现的可伸缩的 Web 平台，内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。
用于方便地搭建能够处理超高并发(日活千万级别)、扩展性极高的动态 Web 应用、Web 服务和动态网关。

功能和 nginx 类似，就是由于支持 Lua 动态脚本，所以更加灵活。

OpenRestry 通过 Lua 脚本扩展 nginx 功能，可提供负载均衡、请求路由、安全认证、服务鉴权、流量控制与日志监控等服务。

类似的还有 Kong(Api Gateway)、Tengine(阿里)

## 1. 创建并修改 Lua 环境

> Redis 中自带了，可以不用安装。

下载地址: <http://www.lua.org/download.html>

可以本地下载上传到 Linux，也可以使用 curl 命令在 Linux 系统中进行在线下载

```shell
curl -R -O http://www.lua.org/ftp/lua-5.3.5.tar.gz
```

安装

```shell
yum -y install readline-devel ncurses-devel
tar -zxvf lua-5.3.5.tar.gz
#在src目录下
make linux # 或 make install
```

如果报错，说找不到 `readline/readline.h`, 可以通过 yum 命令安装

```shell
yum -y install readline-devel ncurses-devel
```

最后，直接输入 lua 命令即可进入lua的控制台

## 2. Lua 环境协作组件

从 Redis 2.6.0 版本开始，通过内置的 Lua 编译/解释器，可以使用 EVAL 命令对 Lua 脚本进行求值。

- 脚本的命令是原子的，RedisServer 在执行脚本命令中，不允许插入新的命令 「这点非常重要」
- 脚本的命令可以复制，RedisServer 在获得脚本后不执行，生成标识返回，Client 根据标识就可以随时执行

## 3. EVAL/EVALSHA 命令实现

### 3.1 EVAL 命令

通过执行 Redis 的 eval 命令，可以运行一段 Lua 脚本。

```shell
eval script numkeys key [key ...] arg [arg ...]
```

命令说明:

- `script` 参数: 是一段Lua脚本程序，它会被运行在 Redis 服务器上下文中，这段脚本不必(也不应该)定义为一个 Lua 函数。
- `numkeys` 参数: 用于指定键名参数的个数。
- `key [key ...]` 参数: 从 EVAL 的第三个参数开始算起，使用了 `numkeys` 个键(key)，表示在脚本中所用到的那些 Redis 键(key)，这些键名参数可以在 Lua 中通过全局变量 KEYS 数组，用 1 为基址的形式访问(`KEYS[1], KEYS[2]`，以此类推)。
- `arg [arg ...]` 参数: 可以在 Lua 中通过全局变量 `ARGV` 数组访问，访问的形式和 KEYS 变量类似(`ARGV[1], ARGV[2]`，诸如此类)。

```shell
eval "return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}" 2 key1 key2 first second
```

#### Lua 脚本中调用 Redis 命令

- `redis.call()`

返回值就是 Redis 命令执行的返回值

如果出错，则*返回错误信息，不继续执行*

- `redis.pcall()`

返回值就是 Redis 命令执行的返回值

如果出错，则*记录错误信息，继续执行*

> `redis.call()` 更加常用。

> 注意事项: 在脚本中，使用 `return` 语句将返回值返回给客户端，如果没有 `return`，则返回 `nil`

```shell
eval "return redis.call('set',KEYS[1],ARGV[1])" 1 n1 jack
```

### 3.2 EVALSHA 命令

EVAL 命令要求你在每次执行脚本的时候都发送一次脚本主体(script body)。

Redis 有一个内部的缓存机制，因此它不会每次都重新编译脚本，不过在很多场合，付出无谓的带宽来传送脚本主体并不是最佳选择。

为了减少带宽的消耗， Redis 实现了 `evalsha` 命令，它的作用和 `eval` 一样，都用于对脚本求值，但它接受的第一个参数不是脚本，而是脚本的 SHA1 校验和(sum)

## 4. SCRIPT 命令

- `SCRIPT FLUSH`: 清除所有脚本缓存
- `SCRIPT EXISTS`: 根据给定的脚本校验和，检查指定的脚本是否存在于脚本缓存
- `SCRIPT LOAD`: 将一个脚本装入脚本缓存，返回 SHA1 摘要，但并不立即运行它
- `SCRIPT KILL`: 杀死当前正在运行的脚本

```shell
script load "return redis.call('set',KEYS[1],ARGV[1])"

evalsha c686f316aaf1eb01d5a4de1b0b63cd233010e63d 1 n2 john

get n2
```

## 5. 脚本管理命令实现

使用 Redis-cli 直接执行 Lua 脚本。

test.lua

```lua
return redis.call('set',KEYS[1],ARGV[1])
```

```shell
./redis-cli -h 127.0.0.1 -p 6379 --eval test.lua name:6 , john #，两边有空格
```

> 如果两边没有空格，会报 `Lua redis() command arguments must be strings or integers` 错误

list.lua

```lua
local key=KEYS[1]

local list=redis.call("lrange",key,0,-1);

return list;
```

```shell
./redis-cli --eval list.lua list:1
```

利用 Redis 整合Lua，主要是为了性能以及事务的原子性。因为 Redis 提供的事务功能太差。

## 6 脚本复制

Redis 传播 Lua 脚本，在使用主从模式和开启 AOF 持久化的前提下:

当执行 Lua 脚本时，Redis 服务器有两种模式: 脚本传播模式和命令传播模式。

### 6.1 脚本传播模式

脚本传播模式是 Redis 复制脚本时默认使用的模式。

Redis 会将被执行的脚本及其参数复制到 AOF 文件以及从服务器里。

执行以下命令:

```shell
eval "redis.call('set',KEYS[1],ARGV[1]);redis.call('set',KEYS[2],ARGV[2])" 2 n1 n2 john1 john2
```

那么主服务器将会向从服务器发送完全相同的 `eval` 命令:

```shell
eval "redis.call('set',KEYS[1],ARGV[1]);redis.call('set',KEYS[2],ARGV[2])" 2 n1 n2 john1 john2
```

注意: 在这一模式下执行的脚本不能有时间、内部状态、随机函数(`spop`)等。执行相同的脚本以及参数必须产生相同的效果。在 Redis5 中，也是处于同一个事务中。

### 6.2 命令传播模式

处于命令传播模式的主服务器会将执行脚本产生的所有写命令用事务包裹起来，然后将事务复制到 AOF 文件以及从服务器里面。

因为命令传播模式复制的是写命令而不是脚本本身，所以即使脚本本身包含时间、内部状态、随机函数等，主服务器给所有从服务器复制的写命令仍然是相同的。

为了开启命令传播模式，用户在使用脚本执行任何写操作之前，需要先在脚本里面调用以下函数:

```shell
redis.replicate_commands()
```

> `redis.replicate_commands()` 只对调用该函数的脚本有效: 在使用命令传播模式执行完当前脚本之后，服务器将自动切换回默认的脚本传播模式。

```shell
eval "redis.replicate_commands();redis.call('set',KEYS[1],ARGV[1]);redis.call('set',KEYS[2],ARGV[2])" 2 n1 n2 john1 john2
```

## 7. 管道(pipeline),事务和脚本(lua)三者的区别

三者都可以批量执行命令

管道无原子性，命令都是独立的，属于无状态的操作

事务和脚本是有原子性的，其区别在于脚本可借助Lua语言，可利用服务器端存储的便利性定制和简化操作

脚本的原子性要强于事务，脚本执行期间，另外的客户端其它任何脚本或者命令都无法执行，脚本的执行时间应该尽量短，不能太耗时的脚本
