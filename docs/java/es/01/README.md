# ElasticSearch

版本兼容性: <https://www.elastic.co/cn/support/matrix#matrix_os>


环境准备：关闭防火墙

```shell
systemctl stop firewalld.service # 停止firewall 
systemctl disable firewalld.service #禁止firewall开机启动
firewall-cmd --state # 查看防火墙
```

下载地址：

- 最新版：<https://www.elastic.co/cn/downloads/elasticsearch>
- 指定版本：<https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-17-3>

解压安装

```shell
tar -zxvf elasticsearch-7.17.3-linux-x86_64.tar.gz

mv elasticsearch-7.17.3 /opt/zmn/servers/elasticsearch/
```

配置 Elasticsearch

1. 编辑 `/opt/zmn/servers/elasticsearch/config/elasticsearch.yml`。

单机安装请取消注释: `node.name: node-1`，否则无法正常启动。 

> 注意冒号后面有个空格

修改网络和端口，取消注释 master 节点，单机只保留一个 node。

```yaml
# ------------------------------------ Node ------------------------------------
node.name: node-1
# ---------------------------------- Network -----------------------------------
network.host: 192.168.211.136
http.port: 9200
# --------------------------------- Discovery ----------------------------------
cluster.initial_master_nodes: ["node-1"]
```

2. 按需修改 `/opt/zmn/servers/elasticsearch/config/jvm.options` 内存设置

```text
-Xms1g
-Xmx1g
```

> 根据实际情况修改占用内存，默认都是 1G，单机 1G 内存，启动会占用 700M+ 然后在安装 kibana 后，基本上无法运行了，运行了一会就挂了报内存不足。
> 内存设置超出物理内存，也会无法启动，启动报错。

3. 添加 ES 用户，ES 默认 root 用户无法启动，需要改为其他用户

```shell
# 添加用户
useradd  estest
# 设置密码
passwd   estest

# 如果已经存在了用户，可以修改密码
# sudo passwd estest
# 然后输入两次密码(可能会提示密码太短，不用管)
```

改变 ES 目录拥有者账号

```shell
chown -R estest /opt/zmn/servers/elasticsearch/
```

4. 修改 `/etc/sysctl.conf`

末尾添加: `vm.max_map_count=655360`

```shell
# vm.max_map_count=262144
vm.max_map_count=655360 # change for test es
```

执行 `sysctl -p` 让其生效

```shell
sysctl -p
```

5. 修改 `/etc/security/limits.conf`

末尾添加:

```text
* soft nofile 65536
* hard nofile 65536
* soft nproc 4096
* hard nproc 4096
```

6. 启动 ES 

```shell
# 切换刚刚新建的用户
su estest
# 启动命令
# /opt/zmn/servers/elasticsearch/bin/elasticsearch

# 后台启动
/opt/zmn/servers/elasticsearch/bin/elasticsearch -d
```

7. 配置完成

浏览器访问测试 <http://192.168.99.23:9200>

```json
{
    "name": "node-1",
    "cluster_name": "elasticsearch",
    "cluster_uuid": "rIx6hr52T4uhER9I_4ikww",
    "version": {
        "number": "7.17.3",
        "build_flavor": "default",
        "build_type": "tar",
        "build_hash": "5ad023604c8d7416c9eb6c0eadb62b14e766caff",
        "build_date": "2022-04-19T08:11:19.070913226Z",
        "build_snapshot": false,
        "lucene_version": "8.11.1",
        "minimum_wire_compatibility_version": "6.8.0",
        "minimum_index_compatibility_version": "6.0.0-beta1"
    },
    "tagline": "You Know, for Search"
}
```

Elasticsearch Head

我们可以安装 Chrome 插件 [Elasticsearch Head]<https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm>，
可以查看 Elasticsearch 的集群概要、索引、数据。


## 安装配置kibana 

1.什么是Kibana

Kibana是一个基于Node.js的Elasticsearch索引库数据统计工具，可以利用Elasticsearch的聚合功 能，生成各种图表，如柱形图，线状图，饼图等。
而且还提供了操作Elasticsearch索引数据的控制台，并且提供了一定的API提示，非常有利于我们学习 Elasticsearch 的语法。

下载Kibana

<https://www.elastic.co/cn/downloads/kibana>

安装kibana
   
root账户下操作

```shell
tar -zxvf kibana-7.17.3-linux-x86_64.tar.gz

mv /opt/zmn/software/kibana-7.17.3-linux-x86_64 /opt/zmn/servers/kibana/
```

改变es目录拥有者账号

```shell
chown -R estest /opt/zmn/servers/kibana/
```
   
还需要设置访问权限

```shell
chmod -R  777 /opt/zmn/servers/kibana/
```

修改配置文件

```shell
vim /opt/zmn/servers/kibana/config/kibana.yml
```

修改端口，访问ip,elasticsearch服务器ip

```shell
server.port: 5601
server.host: "0.0.0.0"
# The URLs of the Elasticsearch instances to use for all your queries.
elasticsearch.hosts: ["http://192.168.99.23:9200"]
```

配置完成启动:

```shell
# 切换用户
su estest 

./bin/kibana # (路径: /opt/zmn/servers/kibana)

# 后台启动
nohup /opt/zmn/servers/kibana/bin/kibana &
```

访问 ip:5601，即可看到安装成功

安装 IK 分词器

```shell
/opt/zmn/servers/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.3/elasticsearch-analysis-ik-7.17.3.zip
```

然后重启 ES 和 Kibana















