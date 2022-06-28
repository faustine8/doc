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
```

