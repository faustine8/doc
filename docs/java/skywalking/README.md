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

grep "ERROR" /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
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





















