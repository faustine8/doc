## 20220901

完成拓扑关系导出, 并在开发和测试环境完成测试.

> 已经支持了显示关联节点类型(如: MySQL/Dubbo/Tomcat 等), 但是有些时候因为上报的数据不准确, 明明是 Dubbo 但是上报的数据却是 Tomcat, 
> 蒋希亮决定放弃展示这个属性.

## 20220902

### 新网关 (ratel) 的链路问题

#### 任务

1. 链路
2. 健康检查 actuator 

#### 实践

1. 测试环境已经添加了 `apm-spring-webflux-5.x-plugin-8.10.0.jar` 插件 (已确认)
2. 生产环境也已经添加了 `apm-spring-webflux-5.x-plugin-8.10.0.jar` 插件 (已确认)
3. 现在的情况是 概览页面的指标数据 已经有了(之前概览页面空白); 但是链路上 url 和 dubbo 调用没有连接起来.

将链路连起来的思路: 侵入式的, 直接在 Ratel 项目中的业务代码上添加链路追踪的注解.

ratel 泛化调用 Dubbo 的流程: 

`RatelHandlerMapping` 实现了 `AbstractHandlerMapping` 接口, 其中的 `getHandlerInternal()` 会被 webflux 调用, 获取所有的 Handler;

`RatelHandler` 实现了 `WebHandler` 接口, 所以 `RatelHandler` 中的 `handle()` 方法是入口; 
由 `handle()` 方法中的 `DefaultRatelFilterChain(globalFilters).filter(exchange);` 可知业务核心在 `DefaultRatelFilterChain.filter()` 方法中;

在 `filter()` 方法中, 将所有的 `com.zmn.ratel.api.filter` 目录下的 `Filter` 组织起来.

其中的 `ProcessorDispatcherFilter` 最终返回了 `forwardProcessor.process(exchange, chain)` 调用; 
`ForwardProcessor` 有一个实现 `com.zmn.ratel.api.process.DubboForwardProcessor#process`, 在这个方法中对参数进行一系列校验, 然后进行 Dubbo 的泛化调用.

---

通过查看测试环境的 SkyWalking 的 Ratel 的链路, 发现 webflux span 节点的 "跨度类型" 是 Entry. Entry 代表的已经是 LocalThread 了, 感觉很难能够连起来了.

而且有一些 Dubbo 调用的 span 节点的 "跨度类型" 是 Exit, 这个是 "生产者" 的类型, 后面没有 Dubbo 接口的调用详情, 如: `com.zmn.mcc.dubbo.interfaces.permit.PermitListRemoteService.$invoke(String,String[],Object[])`; 
有一些 Dubbo 调用的 span 节点的 "跨度类型" 是 Entry, 这些就有 Dubbo 接口的调用详情, 如: `com.zmn.biz.ocs.dubbo.interfaces.session.ChatSessionExtListRemoteService.findBySessionId`

经确认, 两个都是 泛化调用 的, 但是为什么呈现出来的结果却不一样呢?

### 待办事项

测试环境:

1. 启动参数没有指定 sw 日志目录: `-Dskywalking.logging.dir=/a/logs/oms/oms-dubbo`
2. 添加限制 span 数量的参数, 以 oms-dubbo 为例. `-Dskywalking.agent.span_limit_per_segment=100`

(已更改, 等待 oms-dubbo 重启以观后效)

测试环境发现没用, 还是报错: 

```text
WARN 2022-09-02 18:31:21:394 DubboServerHandler-10.10.15.104:20880-thread-197 TracingContext : More than 100 spans required to create 
java.lang.RuntimeException: Shadow tracing context. Thread dump
```

生产环境:

1. 所有的 lts 插件替换为最新版本, 如果没有的则添加. (目前发现有的服务器替换了最新的, 有些服务器用的老版本)
2. 测试环境测试完成后, 下次给 oms-dubbo 添加上限制 span 数量的参数.

### 新的探索

1. 研究下新的 ES 索引规则. (索引的组织形式发生变更, 可能导致我们自定义开发的扩展功能需要修改)
2. 开发环境部署 SW 9.2
3. 重新测试日志分析

## 20220905

1. SW_ENABLE_UPDATE_UI_TEMPLATE=false 能够导入模板?  
2. 直接升级 OAP Server 和 WebApp 不修改 ui_template 索引页面会不会乱?  答: 不会, 只是新功能没有展示, 需要自己添加.

```shell
cd /opt/zmn/servers/

./apm/bin/oapService.sh
./apm2/bin/oapService.sh

tail -fn 200 apm/logs/skywalking-oap-server.log
tail -fn 200 apm2/logs/skywalking-oap-server.log

./apm/bin/webappService.sh
```

```json
{
  "error": {
    "root_cause": [
      {
        "type": "resource_already_exists_exception",
        "reason": "index [sw_records-all-20220905/tBvz7zGXRFG-PoBvdnYwWw] already exists",
        "index_uuid": "tBvz7zGXRFG-PoBvdnYwWw",
        "index": "sw_records-all-20220905"
      }
    ],
    "type": "resource_already_exists_exception",
    "reason": "index [sw_records-all-20220905/tBvz7zGXRFG-PoBvdnYwWw] already exists",
    "index_uuid": "tBvz7zGXRFG-PoBvdnYwWw",
    "index": "sw_records-all-20220905"
  },
  "status": 400
}
```

升级后, 除了菜单变化, 功能上和现实面板上, 无明显变化.

















