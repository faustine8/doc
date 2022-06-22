---
lang: zh-CN
title: Java
description: Java 技术栈积累
home: true
heroImage: https://cdn-statics.zmn.cn/_nuxt/img/logo_web.b793f2a.png
heroText: Java 编程之旅
tagline: ☕️
actions:


- text: Kafka
  link: /java/kafka/
  type: primary
- text: Redis
  link: /java/redis/
  type: primary
- text: ElasticSearch
  link: /java/es/01/
  type: primary
- text: Drools
  link: /java/drools/
  type: secondary
- text: Arthas
  link: /java/arthas/01/
  type: secondary
- text: Skywalking
  link: /java/skywalking/
  type: secondary

footer: faustine 2022

---



## Work


我还有几个问题，或者说想法：
1. 报错大盘。SkyWalking 没有现成功能。实现方案(待验证)：通过修改 SkyWalking 的 lal 配置文件，通过 Extractor 添加 ERROR 和 WARN 的 count 指标，然后在 Dashboard 上添加一个统计微服务 ERROR 日志的「报错大盘」
2. 负载均衡和高可用。客户(Agent)端负载均衡，通过 NGINX 的方式已经在开发环境测试测试过了；如果 UI 通过三个 OAPServer 负载均衡的方式访问，如果其中一个挂掉，UI 还是会访问到不可用的 OAPServer。实现方案2个(待实践)：可以尝试修改 webapp 的负载均衡方式, 或者使用 NGINX 负载均衡 webapp 与 OAPServer 的连接。
3.

Agent 异常信息：

172.17.3.12 - owl-dubbo  09:57:44:773 Collector traceSegment service doesn't response in 70 seconds.
172.17.3.12 - owl-task   09:44:06:819 Collector traceSegment service doesn't response in 70 seconds.
这两个一直报错到现在，重启后没有报错了。。。该实例的链路数据，在重启后一次性写入了，能够正常查询

172.17.4.0 - owl-admin 2022-05-31 22:57:37:888 TracingContext : More than 300 spans required to create (Agent参数 `agent.span_limit_per_segment` 限制了一个链路最大 300 个 span)


1. gRPC Server 连不上，但是重启后数据恢复了，临时数据存在哪里的呢？


## 20220602

### 1. 日志解析配置调整

正常启动自定义 LAL 脚本后面需要添加数据类型，官方文档和示例错误。

```yaml{2,3,5}
extractor {
  service log.service as String
  instance log.serviceInstance as String
  metrics {
    timestamp log.timestamp as Long
    labels level: parsed.level, service: log.service, instance: log.serviceInstance
    name "log_count"
    value 1
  }
}
```

再添加了 mal.yaml 配置文件就可以在 Dashboard 中使用这两个指标了（官方文档和示例配置错误，`expSuffix` 需要添加 `Layer` 类型，否则报错）

```yaml
expSuffix: instance(['service'], ['instance'], Layer.GENERAL)
metricPrefix: log
metricsRules:
  - name: count_info
    exp: log_count.tagEqual('level', 'INFO').sum(['service', 'instance']).increase('PT1M')
  - name: count_error
    exp: log_count.tagEqual('level', 'ERROR').sum(['service', 'instance']).increase('PT1M')
```

### 2. 解析日志

解析日志的时候，注意格式要与上报的日志的格式保持一致。(官方文档错误，日志收集示例的日志格式和日志解析示例的日志格式 「不能说完全不同，只能说一点都不一样」)

1. 测试 owl 项目，让两处格式保持一致，观察是否产生数据

