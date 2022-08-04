---
lang: zh-CN
title: SkyWalking
description: SkyWalking 从入门到源码贡献
prev: /java/skywalking/
next: /java/skywalking/01
---

# SkyWalking

## SkyWalking 入门与实战

[SkyWalking - 简介](/doc/java/skywalking/01/)

[SkyWalking - 安装配置](/doc/java/skywalking/02/)

[SkyWalking - 使用实战](/doc/java/skywalking/03/)

## SkyWalking 源码

[(未定稿)SkyWalking - 源码 - javaagent](/doc/java/skywalking/03/)






| TIME  | docs.count | docs.deleted | store.size | pri.store.size |
|-------|------------|--------------|------------|----------------|
| 10:43 | 25,135,606 | 0            | 25gb       | 25gb           |
| 10:53 | 26,181,346 | 0            | 23.7gb     | 23.7gb         |
| 11:03 | 27,248,767 | 0            | 24.7gb     | 24.7gb         |


```shell
sudo su - zmn
sudo -s

ll -h /a/apps/apache-skywalking-apm-bin/logs/

grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-14-1.log

grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
tail -fn 200 /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
```

```shell
apm-canal-1.x-plugin-8.11.0.jar
apm-clickhouse-0.3.x-plugin-8.11.0.jar
apm-dubbo-2.7.x-plugin-8.11.0.jar
apm-dubbo-3.x-plugin-8.11.0.jar
apm-dubbo-plugin-8.11.0.jar
apm-elasticsearch-5.x-plugin-8.11.0.jar
apm-elasticsearch-6.x-plugin-8.11.0.jar
apm-elasticsearch-7.x-plugin-8.11.0.jar
apm-grpc-1.x-plugin-8.11.0.jar
apm-hbase-1.x-2.x-plugin-8.11.0.jar
apm-hikaricp-3.x-4.x-plugin-8.11.0.jar
apm-httpClient-4.x-plugin-8.11.0.jar
apm-httpasyncclient-4.x-plugin-8.11.0.jar
apm-httpclient-3.x-plugin-8.11.0.jar
apm-httpclient-5.x-plugin-8.11.0.jar
apm-httpclient-commons-8.11.0.jar
apm-jdbc-commons-8.11.0.jar
apm-jedis-2.x-plugin-8.11.0.jar
apm-jetty-client-9.0-plugin-8.11.0.jar
apm-jetty-client-9.x-plugin-8.11.0.jar
apm-jetty-server-9.x-plugin-8.11.0.jar
apm-kafka-commons-8.11.0.jar
apm-kafka-plugin-8.11.0.jar
apm-mongodb-2.x-plugin-8.11.0.jar
apm-mongodb-3.x-plugin-8.11.0.jar
apm-mongodb-4.x-plugin-8.11.0.jar
apm-mysql-5.x-plugin-8.11.0.jar
apm-mysql-6.x-plugin-8.11.0.jar
apm-mysql-8.x-plugin-8.11.0.jar
apm-mysql-commons-8.11.0.jar
apm-neo4j-4.x-plugin-8.11.0.jar
apm-netty-socketio-plugin-8.11.0.jar
apm-redisson-3.x-plugin-8.11.0.jar
apm-resttemplate-4.3.x-plugin-8.11.0.jar
apm-rocketmq-3.x-plugin-8.11.0.jar
apm-rocketmq-4.x-plugin-8.11.0.jar
apm-sharding-sphere-3.x-plugin-8.11.0.jar
apm-sharding-sphere-4.1.0-plugin-8.11.0.jar
apm-shardingsphere-4.0.x-plugin-8.11.0.jar
apm-shardingsphere-5.0.0-plugin-8.11.0.jar
apm-spring-async-annotation-plugin-8.11.0.jar
apm-spring-concurrent-util-4.x-plugin-8.11.0.jar
apm-spring-core-patch-8.11.0.jar
apm-spring-kafka-1.x-plugin-8.11.0.jar
apm-spring-kafka-2.x-plugin-8.11.0.jar
apm-spring-scheduled-annotation-plugin-8.11.0.jar
apm-spring-webflux-5.x-plugin-8.11.0.jar
apm-springmvc-annotation-3.x-plugin-8.11.0.jar
apm-springmvc-annotation-4.x-plugin-8.11.0.jar
apm-springmvc-annotation-5.x-plugin-8.11.0.jar
apm-springmvc-annotation-commons-8.11.0.jar
apm-spymemcached-2.x-plugin-8.11.0.jar
apm-tomcat-thread-pool-plugin-8.11.0.jar
dbcp-2.x-plugin-8.11.0.jar
druid-1.x-plugin-8.11.0.jar
dubbo-2.7.x-conflict-patch-8.11.0.jar
dubbo-3.x-conflict-patch-8.11.0.jar
dubbo-conflict-patch-8.11.0.jar
spring-commons-8.11.0.jar
spring-webflux-5.x-webclient-plugin-8.11.0.jar
thrift-plugin-8.11.0.jar
tomcat-7.x-8.x-plugin-8.11.0.jar
```

```shell
-rw-rw-r--@ 1 faustine  staff    21K Jun 18 11:36 apm-activemq-5.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:36 apm-armeria-0.84.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    25K Jun 18 11:36 apm-armeria-0.85.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    15K Jun 18 11:36 apm-asynchttpclient-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    25K Jun 18 11:36 apm-avro-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    24K Jun 18 11:36 apm-cassandra-java-driver-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:37 apm-cxf-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    12K Jun 18 11:36 apm-elastic-job-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    13K Jun 18 11:36 apm-elasticjob-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    23K Jun 18 11:35 apm-feign-default-http-9.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    49K Jun 18 11:36 apm-finagle-6.25.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:37 apm-guava-eventbus-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    22K Jun 18 11:36 apm-h2-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    31K Jun 18 11:36 apm-hystrix-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:36 apm-influxdb-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    31K Jun 18 11:37 apm-kylin-jdbc-2.6.x-3.x-4.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    27K Jun 18 11:36 apm-lettuce-5.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    15K Jun 18 11:36 apm-light4j-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    31K Jun 18 11:36 apm-mariadb-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    21K Jun 18 11:36 apm-mssql-commons-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:37 apm-mssql-jdbc-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    14K Jun 18 11:36 apm-mssql-jtds-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:35 apm-nutz-http-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:35 apm-nutz-mvc-annotation-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:35 apm-okhttp-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:35 apm-okhttp-4.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:35 apm-okhttp-common-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:36 apm-play-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    46K Jun 18 11:36 apm-postgresql-8.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    15K Jun 18 11:36 apm-pulsar-2.2-2.7-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:37 apm-pulsar-2.8.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    36K Jun 18 11:36 apm-pulsar-common-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    13K Jun 18 11:36 apm-quasar-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    21K Jun 18 11:36 apm-rabbitmq-5.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:36 apm-servicecomb-java-chassis-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    22K Jun 18 11:36 apm-solrj-7.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    11K Jun 18 11:35 apm-spring-cloud-feign-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    11K Jun 18 11:35 apm-spring-cloud-feign-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    13K Jun 18 11:35 apm-struts2-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    34K Jun 18 11:36 apm-undertow-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    14K Jun 18 11:37 apm-undertow-worker-thread-pool-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    84K Jun 18 11:36 apm-vertx-core-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    18K Jun 18 11:36 apm-vertx-core-4.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    21K Jun 18 11:35 apm-xmemcached-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    24K Jun 18 11:36 apm-xxl-job-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:36 baidu-brpc-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    12K Jun 18 11:36 graphql-12.x-15.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    12K Jun 18 11:36 graphql-16plus-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    13K Jun 18 11:36 graphql-8.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    12K Jun 18 11:36 graphql-9.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    24K Jun 18 11:37 jsonrpc4j-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:35 motan-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    28K Jun 18 11:37 okhttp-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:36 resteasy-server-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:36 sofa-rpc-plugin-8.11.0.jar
```

```shell
-rw-rw-r--@ 1 faustine  staff    33K Jun 18 11:37 apm-customize-enhance-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    28K Jun 18 11:37 apm-ehcache-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    23K Jun 18 11:37 apm-fastjson-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:37 apm-gson-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    15K Jun 18 11:37 apm-guava-cache-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    20K Jun 18 11:37 apm-jackson-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    13K Jun 18 11:37 apm-kotlin-coroutine-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    16K Jun 18 11:37 apm-mybatis-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:37 apm-quartz-scheduler-2.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    24K Jun 18 11:37 apm-sentinel-1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    44K Jun 18 11:37 apm-shenyu-2.4.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    18K Jun 18 11:37 apm-spring-annotation-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    37K Jun 18 11:37 apm-spring-cloud-gateway-2.0.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    43K Jun 18 11:37 apm-spring-cloud-gateway-2.1.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    40K Jun 18 11:37 apm-spring-cloud-gateway-3.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    19K Jun 18 11:37 apm-spring-tx-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    17K Jun 18 11:37 apm-trace-ignore-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    21K Jun 18 11:37 apm-zookeeper-3.4.x-plugin-8.11.0.jar
-rw-rw-r--@ 1 faustine  staff    12K Jun 18 11:37 trace-sampler-cpu-policy-plugin-8.11.0.jar
```

## 待解决问题记录

1. 请求错误数计算规则？目前认为是抛除的系统未捕获的堆栈异常，和 HTTP 响应码不是 200 的。
2. SkyWalking 错误链路上解析出了异常的类型，研究一下，看能否将系统包装过的异常也分析出来。
3. General Service 上的 MQ 板块只有三个系统有数据，为什么？
4. 【紧急但不重要】优化下 SkyWalking UI 的时间选择组件。
5. 【重要】LTS 插件开发。(进行中)





















