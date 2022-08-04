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

#### 2.2 插件定义体系

##### 插件定义： `XxxInstrumentation` 

- 拦截实例方法/构造器，继承 `ClassInstanceMethodsEnhancePluginDefine`
- 拦截静态方法，继承 `ClassStaticMethodsEnhancePluginDefine`

> 其实这两个类是适配器类，都继承了 `ClassEnhancePluginDefine` 类，只是默认实现了不同的方法，减少子类的代码编写。

`AbstractClassEnhancePluginDefine` 是所有插件定义的顶级父类

- 要拦截的类使用 `XxxInstrumentation#enhanceClass` 方法指定
- 要拦截的方法使用 `XxxInstrumentation#getXxxInterceptPoints` 方法指定

##### 目标类匹配

通过 `ClassMatch` 接口实现

- 按类名匹配 `NameMatch`
- 间接匹配(模糊匹配) `IndirectMatch`, 其中两个典型实现 `PrefixMatch`(or), `MethodAnnotationMatch`(and 需要所有注解都匹配)

##### 拦截器定义

- beforeMethod
- afterMethod
- handleMethodException

操作字节码本身是比较复杂的，但是 SkyWalking 将整个逻辑抽象成了类似 AOP 的模式。

##### 插件声明

在 `resources/skywalking-plugin.def` 中定义 `插件名称=插件定义的全限定类名`，如：`dubbo=org.apache.skywalking.apm.plugin.asf.dubbo.DubboInstrumentation`

#### 2.3 插件加载流程

##### 1.PluginBootstrap 实例化所有插件

- `PluginResourcesResolver` 查找 `skywalking-plugin.def` (定义了插件名称和实现的全限定类名)
- `PluginCfg` 封装 `PluginDefine`
- `DynamicPluginLoader` 加载基于 XML 配置的插件

##### 2.PluginFinder 分类插件(根据ClassMatch)

- 命名匹配插件 (`NameMatch`)
- 间接匹配插件 (`NameMatch`)
- JDK 类库插件

### 3. 定制化 Agent

- 创建 ByteBuddy 实例
- 指定 ByteBuddy 要忽略的类


## LTS 插件开发

LTS GitHub 地址 <https://github.com/ltsopensource/light-task-scheduler>

已知 LTS 整体执行流程，问题：

1. LTS 任务执行(TaskTracker)的执行流程, 源代码分析。 (为了找出需要 SkyWalking 写增强的切入点，按照目前的理解可以直接增强 业务代码上的任务执行方法)
2. LTS 支持 Quartz，可不可以直接使用 quartz 的插件 (他增强的是 org.quartz.core.JobRunShell 类的 run 方法)？ 答：没有使用到
3. LTS 监控要实现的效果是什么？  答：主要是在任务执行时开启链路端点
















