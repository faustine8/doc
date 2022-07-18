---
lang: zh-CN
title: SkyWalking 源码之 javaagent
description: SkyWalking 从入门到源码贡献
prev: /java/skywalking/03/
next: /java/skywalking/05/
---

# SkyWalking 源码之 javaagent

## 环境准备

1. 下载指定版本的源代码包
2. 删除父模块的 checkstyle 插件和 webapp 模块的 node 编译插件
3. 升级 gRPC 相关的依赖到最新版本(M1 只有最新版本支持)
4. 将编译后的 apm-network 模块下的 target 目录下的 java 和 grpc-java 标记为源代码

## Agent 启动方式

1. 静态启动
2. 动态附加

- 静态启动：使用 `-javaagent` 在应用系统启动时挂载 Agent
- 动态附加：在系统运行时使用 Attach API  挂载 Agent

- 静态启动入口方法：`premain()`
- 动态附加入口方法：`agentmain()`

- 静态启动对字节码操作自由度较高，可以对字节码做任意修改，唯一要求：修改后的字节码能够通过 JVM 验证 (即符合字节码规范)
- 动态附加对字节码操作自由度极低。如：不能增减父类、不能增减接口、不能增减字段、等等。

- 静态启动应用场景：需要对字节码进行大量修改。如：APM。SkyWalking 仅支持这种方式挂载 Agent。
- 动态附加应用场景：系统诊断。如：阿里 Arthas。

## SkyWalking 原理概述

简单讲，SkyWalking 就是在我们自己的类里面插入他的监控代码。

## Agent 启动流程

> 源代码位置：`org.apache.skywalking.apm.agent.SkyWalkingAgent#premain`

1. 初始化配置
2. 加载插件
3. 定制化 Agent 行为 <Badge type="warning" text="重要" vertical="top" />
4. 启动服务 <Badge type="warning" text="重要" vertical="top" />
5. 注册「关闭钩子」

### 1. 初始化配置

#### 1.1 加载配置信息

1. `config/agent.config`
2. 系统环境变量
3. Agent 参数

> 从上往下，优先级越来越大

#### 1.2 将配置信息映射到 Config 类

通常我们加载完配置后，直接调用 Properties 即可。而 SkyWalking 并不满足于直接调用 Properties，
而是将所有的配置信息映射到了一个包含所有配置信息的类：`org.apache.skywalking.apm.agent.core.conf.Config` 中。

> 可以通过快捷键 Cmd + F12 查看 Config 类的结构

#### 1.3 配置日志

> 既然类加载的时候就配置了 LOGGER，此时为什么还要再次加载日志呢？
> 
> 因为配置文件中有一个 `Config.Logging#RESOLVER` 的配置项，可以配置日志的解析类型(JSON 和 PATTERN)。

根据配置信息重新指定日志解析器。

#### 1.4 检查 Agent 名称和 OAP Server 地址是否配置

#### 1.5 标记配置加载完成

### 2. 加载插件

#### 2.1 自定义类加载器 AgentClassLoader

调用 `registerAsParallelCapable();` 方法开启并行加载模式

> 原理就是将类加载时的锁从类加载器级别缩小到具体加载的某一个类。

类加载器的 classpath 是 `skywalking.plugin.mount` 指定的目录，默认是 `${SW_Agent}/plugins/` 目录和 `${SW_Agent}/activations/` 目录











