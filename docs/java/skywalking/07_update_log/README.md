# 升级记录

## 9.2.0 升级记录

1. OAP Server 配置文件迁移
2. UI Template 修改迁移

### 配置文件调整

#### 启动参数调整

`${apm}/bin/oapService.sh`

```shell
JAVA_OPTS="${JAVA_OPTS:-  -Xms4G -Xmx4G}"
```

`${apm}/bin/webappService.sh`

```shell
JAVA_OPTS="${JAVA_OPTS:-  -Xms2G -Xmx2G}"
```

#### 插件支持

`${apm}/config/component-libraries.yml` (自定义 LTS 插件需要用到)

```yaml
light-task-scheduler:
  id: 1001
  languages: Java
```

#### 扩展指标配置

`${apm}/config/oal/core.oal`

```text
// Service scope metrics
service_error_count = from(Service.*).filter(status == false).count(); // Service 级别的错误请求数

// Service Instance Scope metrics
// 微服务实例级别的 MQ 相关指标
service_instance_mq_consume_count = from(ServiceInstance.*).filter(type == RequestType.MQ).count();
service_instance_mq_consume_latency = from((str->long)ServiceInstance.tag["transmission.latency"]).filter(type == RequestType.MQ).filter(tag["transmission.latency"] != null).longAvg();

// Endpoint scope metrics
endpoint_error_count = from(Endpoint.*).filter(status == false).count(); // 端点级别的错误请求数
```

`${apm}/config/oal/java-agent.oal` (JVM 内存相关指标)

```text
// JVM instance memory pool metrics
instance_jvm_memory_newgen = from(ServiceInstanceJVMMemoryPool.used).filter(poolType == MemoryPoolType.NEWGEN_USAGE).longAvg();
instance_jvm_memory_oldgen = from(ServiceInstanceJVMMemoryPool.used).filter(poolType == MemoryPoolType.OLDGEN_USAGE).longAvg();
instance_jvm_memory_survivor = from(ServiceInstanceJVMMemoryPool.used).filter(poolType == MemoryPoolType.SURVIVOR_USAGE).longAvg();
instance_jvm_memory_metaspace = from(ServiceInstanceJVMMemoryPool.used).filter(poolType == MemoryPoolType.METASPACE_USAGE).longAvg();
// JVM instance memory pool metrics end
```

#### 服务端日志收集

`${apm}/config/log4j2.xml` OAP Server 日志收集策略添加「按天收集」。

```xml
<Policies>
    <TimeBasedTriggeringPolicy/>
    <SizeBasedTriggeringPolicy size="102400KB"/>
</Policies>
```

#### 核心配置

应用于 `${apm}/config/application.yml`

> 开发环境

```shell
# OAP 集群相关
export SW_CLUSTER=nacos
export SW_SERVICE_NAME=SkyWalking_OAP_Cluster
export SW_CLUSTER_NACOS_HOST_PORT=http://local-nacos.xiujiadian.com:8848
export SW_CLUSTER_NACOS_NAMESPACE=e9fc0dda-5fce-42d2-94a0-b9fe516dbab3
export SW_CLUSTER_NACOS_USERNAME=nacos
export SW_CLUSTER_NACOS_PASSWORD=E4tNr26hGNY4
export SW_CLUSTER_INTERNAL_COM_HOST=192.168.99.23
export SW_CLUSTER_INTERNAL_COM_PORT=11901

# OAP 核心配置
export SW_CORE_REST_PORT=12801
export SW_CORE_GRPC_PORT=11901
export SW_CORE_GRPC_POOL_QUEUE_SIZE=20000 # default 10000
export SW_CORE_GRPC_THREAD_POOL_SIZE=48 # default CPU core * 4
export SW_CORE_RECORD_DATA_TTL=2
export SW_CORE_METRICS_DATA_TTL=3
export SW_CORE_ACTIVE_EXTRA_MODEL_COLUMNS=true
export SW_SERVICE_NAME_MAX_LENGTH=60 # 避免 id 过长报错
export SW_INSTANCE_NAME_MAX_LENGTH=60
export SW_ENDPOINT_NAME_MAX_LENGTH=120

# 存储相关配置
export SW_STORAGE=elasticsearch
export SW_STORAGE_ES_CLUSTER_NODES=192.168.99.23:9200
export SW_STORAGE_ES_LOGIC_SHARDING=false

# 日志分析
export SW_LOG_ANALYZER=default
export SW_LOG_LAL_FILES=my-lal-config
export SW_LOG_MAL_FILES=my-lal-mal-config

export SW_RECEIVER_GRPC_PORT=11801

export SW_RECEIVER_GRPC_POOL_QUEUE_SIZE=20000
export SW_RECEIVER_GRPC_THREAD_POOL_SIZE=96

# 自监控
export SW_PROMETHEUS_FETCHER=default
export SW_TELEMETRY=prometheus
export SW_TELEMETRY_PROMETHEUS_PORT=1543


export SW_QUERY_GRAPHQL_ENABLE_LOG_TEST_TOOL=true
export SW_ENABLE_UPDATE_UI_TEMPLATE=true


# 配置中心
export SW_CONFIGURATION=nacos
export SW_CONFIG_NACOS_SERVER_ADDR=http://local-nacos.xiujiadian.com
export SW_CONFIG_NACOS_SERVER_NAMESPACE=e9fc0dda-5fce-42d2-94a0-b9fe516dbab3
export SW_CONFIG_NACOS_USERNAME=nacos
export SW_CONFIG_NACOS_PASSWORD=E4tNr26hGNY4
```

> 自监控要保持 `SW_TELEMETRY_PROMETHEUS_PORT` 配置的值与 `${apm}/config/fetcher-prom-rules/self.yaml` 中的 `targets.url` 的端口保持一致.

#### WebApp 启动参数

`${apm}/webapp/webapp.yml`

```yaml
discovery:
  client:
    simple:
      instances:
        oap-service:
          - uri: http://127.0.0.1:12801
          - uri: http://127.0.0.1:12802
```

### 源代码扩展

#### 扩展 JVM 数据 (未在生产环境使用)

添加 JVM 指标的内存使用率指标, 源代码的调整主要在 `agent-analyzer` 模块.

`org.apache.skywalking.oap.server.analyzer.provider.jvm.JVMSourceDispatcher#sendToMemoryMetricProcess`

```java
BigDecimal memUsed = new BigDecimal(memory.getUsed());
BigDecimal memMax = new BigDecimal(memory.getMax());
double usage = memUsed.divide(memMax, 4, RoundingMode.HALF_UP).multiply(new BigDecimal(100)).doubleValue();
serviceInstanceJVMMemory.setUsage(usage);
```

数据模型添加成员变量: `org.apache.skywalking.oap.server.core.source.ServiceInstanceJVMMemory`

```java
@Getter
@Setter
private double usage;
```

然后在 `${apm)/config/oal/java-agent.oal` 添加如下指标:

```text
instance_jvm_memory_heap_used_percent = from(ServiceInstanceJVMMemory.usage).filter(heapStatus == true).doubleAvg();
instance_jvm_memory_noheap_used_percent = from(ServiceInstanceJVMMemory.usage).filter(heapStatus == false).doubleAvg();
```

#### 修复 Span 详情展示页面内容溢出

web-app 模块, 官方在 9.2.0 版本已修复, 忽略.









### 开发环境升级测试



