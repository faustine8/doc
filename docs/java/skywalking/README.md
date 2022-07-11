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

grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-24-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-25-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-26-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-27-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-05-29-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-30-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-01-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-02-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-03-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-04-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-05-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-06-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-07-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-08-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-09-1.log
grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-10-1.log

grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
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

目前指标数据保留 7 天，近 6 天各个指标的数据量及平均数

| index                                    | 0628    | 0629    | 0630    | 0701    | 0702    | 0703    | avg       |
|------------------------------------------|---------|---------|---------|---------|---------|---------|-----------|
| sw_tag_autocomplete                      | 79.6kb  | 60kb    | 67.8kb  | 54.6kb  | 94.4kb  | 45.6kb  | 67kb      |
| sw_service_traffic                       | 162.5kb | 22.8kb  | 113.8kb | 57kb    | 10.6kb  | 0       | 61kb      |
| sw_service_relation_server_side          | 71.9mb  | 91.4mb  | 95.8mb  | 160.9mb | 157.5mb | 159mb   | 122.75 mb |
| sw_service_relation_client_side          | 183.6mb | 212.4mb | 217.4mb | 288.7mb | 291.3mb | 292mb   | 247 mb    |
| sw_service_label                         | 0       | 0       | 0       | 0       | 0       | 0       | 0         |
| sw_service_instance_relation_server_side | 381.6mb | 496.5mb | 518.1mb | 996.2mb | 996.2mb | 992.2mb | 730 mb    |
| sw_service_instance_relation_client_side | 575.4mb | 654.9mb | 672.4mb | 909.5mb | 911.7mb | 908.2mb | 772 mb    |
| sw_process_traffic                       | 0       | 0       | 0       | 0       | 0       | 0       | 0         |
| sw_network_address_alias                 | 31.5mb  | 4mb     | 41.5mb  | 3.7mb   | 0       | 0.275mb | 13 mb     |
| sw_metrics-sum                           | 144.1mb | 176.7mb | 179.4mb | 219.5mb | 227.5mb | 228.1mb | 195 mb    |
| sw_metrics-rate                          | 0       | 0       | 0       | 0       | 0       | 0       | 0         |
| sw_metrics-percentile                    | 5.1gb   | 6.2gb   | 6.5gb   | 9.6gb   | 9.5gb   | 9.2gb   | 7.68 gb   |
| sw_metrics-percent                       | 5.1gb   | 6.1gb   | 6.5gb   | 9.4gb   | 9.4gb   | 9.3gb   | 7.63 gb   |
| sw_metrics-max                           | 0       | 0       | 0       | 0       | 0       | 0       | 0         |
| sw_metrics-longavg                       | 6.5gb   | 7.7gb   | 8gb     | 11.1gb  | 10.7gb  | 11gb    | 9.16 gb   |
| sw_metrics-doubleavg                     | 200.8mb | 233.8mb | 243.1mb | 343.5mb | 343.5mb | 341.3mb | 284 mb    |
| sw_metrics-cpm                           | 4.8gb   | 5.9gb   | 6.1gb   | 9.3gb   | 9.1gb   | 9.1gb   | 7.38 gb   |
| sw_metrics-count                         | 1.4mb   | 3mb     | 3.1mb   | 3mb     | 3mb     | 2.9mb   | 2.7 mb    |
| sw_metrics-apdex                         | 30.6mb  | 33.8mb  | 34.1mb  | 42.3mb  | 42.9mb  | 43.2mb  | 37 mb     |
| sw_meter-avglabeled                      | 565.4mb | 618.5mb | 591.8mb | 785mb   | 795.7mb | 767mb   | 687 mb    |
| sw_meter-avghistogrampercentile          | 17.6mb  | 17.5mb  | 17.4mb  | 16.9mb  | 17mb    | 17mb    | 17 mb     |
| sw_meter-avg                             | 37.5mb  | 37.2mb  | 37mb    | 35mb    | 34.9mb  | 35mb    | 36.1 mb   |
| sw_instance_traffic                      | 373.9mb | 318.5mb | 535.2mb | 455.6mb | 0       | 40mb    | 287.2 mb  |
| sw_events                                | 7.3mb   | 7.2mb   | 8mb     | 10mb    | 9.1mb   | 9.3mb   | 8.4 mb    |
| sw_endpoint_traffic                      | 5.2mb   | 5.9mb   | 5.6mb   | 6.8mb   | 5.3mb   | 4.9mb   | 5.61 MB   |
| sw_endpoint_relation_server_side         | 1.4gb   | 1.8gb   | 1.9gb   | 3.3gb   | 3.2gb   | 3.2gb   | 2.46GB    |
| sw_ebpf_profiling_schedule               | 0       | 0       | 0       | 0       | 0       | 0       | 0         |


每日指标数据为 38578.2 MB，约等于 37.67 GB

一年的数据量为 13751 GB，约等于 13.42 TB





















