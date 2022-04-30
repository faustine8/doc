---
lang: zh-CN
title: 分布式集群架构中的 session 分离
description: 分布式集群架构中的 session 分离
prev: /java/redis/16/
next: /java/redis/18/
---

# 分布式集群架构中的 session 分离

传统的 Session 是由 Tomcat 自己进行维护和管理，但是对于集群或分布式环境，不同的 Tomcat 管理各自的 Session，很难进行 Session 共享，
通过传统的模式进行 Session 共享，会造成 Session 对象在各个 Tomcat 之间，通过网络和 IO 进行复制，极大的影响了系统的性能。

可以将登录成功后的 Session 信息，存放在 Redis 中，这样多个服务器(Tomcat)可以共享 Session 信息。

利用 spring-session-data-redis(SpringSession)，可以实现基于 Redis 来实现的 Session 分离。

> 这个知识点在讲 Spring 的时候讲过了，这里就不再赘述了。
