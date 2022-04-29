# 服务启动手册

## Hadoop 核心

- HDFS(linux121)

```shell
start-dfs.sh
```

WEB 访问地址: 

> NameNode 在 linux121 服务器


- YARN(linux123)

```shell
start-yarn.sh
```

> ResourceManager 在 linux123 服务器

- 历史日志服务器

```shell
mr-jobhistory-daemon.sh start historyserver
```

## Hive

### Metastore

> linux121、linux123

```shell
# 启动 metastore 服务
nohup hive --service metastore &
# 查询9083端口(metastore服务占用的端口) 
lsof -i:9083
```

### HiveServer2

> linux123

```shell
# 启动 hiveserver2 服务
nohup hiveserver2 &

# 检查 hiveserver2 端口
lsof -i:10000
```

> 浏览器检查 HiveServer2 的启动情况。<http://linux123:10002/>

## Zookeeper

> 高可用集群必备

```shell
sh /root/shells/zk.sh start
```

> 任意服务器, 使用群起脚本启动

## HBase

```shell
start-hbase.sh
stop-hbase.sh
```

> 任意服务器, 使用群起脚本启动

WEB管理地址: <http://linux121:16010>


## Azkaban

```shell
#启动exec-server (linux121, linux123)
cd /opt/zmn/servers/azkaban/azkaban-exec-server-0.1.0-SNAPSHOT
bin/start-exec.sh
# 停止
bin/shutdown-exec.sh
```

⼿动激活executor(linux121, linux123)

```shell
cd /opt/zmn/servers/azkaban/azkaban-exec-server-0.1.0-SNAPSHOT
curl -G "linux121:$(<./executor.port)/executor?action=activate" && echo
curl -G "linux123:$(<./executor.port)/executor?action=activate" && echo
```

```shell
#启动web-server (linux122)
cd /opt/zmn/servers/azkaban/azkaban-web-server-0.1.0-SNAPSHOT
bin/start-web.sh
# 停止
bin/shutdown-web.sh
```

## Spark

```shell
# linux121
start-all.sh
stop-all.sh
```

History Server

```shell
# linux121
start-history-server.sh
stop-history-server.sh
```


