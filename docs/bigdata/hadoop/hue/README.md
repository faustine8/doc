# HUE

> 数据交互工具

## 第一部分 Hue概述

Hue(Hadoop User Experience)是一个开源的 Apache Hadoop UI 系统，最早是由 Cloudera Desktop 演化而来，由 Cloudera 贡献给开源社区，它是基于 Python Web 框架 Django 实现的。

通过使用 Hue 可以在浏览器端的 Web 控制台上与 Hadoop 集群进行交互来分析处理数据，例如操作 HDFS 上的数据，运行 MapReduce Job 等等。

Hue所支持的功能特性集合：

- 默认基于轻量级sqlite数据库管理会话数据，用户认证和授权，可以自定义为 MySQL、Postgresql，以及Oracle
- 基于文件浏览器（File Browser）访问HDFS
- 基于Hive编辑器来开发和运行Hive查询
- 支持基于Solr进行搜索的应用，并提供可视化的数据视图，以及仪表板（Dashboard）
- 支持基于Impala的应用进行交互式查询
- 支持Spark编辑器和仪表板（Dashboard）
- 支持Pig编辑器，并能够提交脚本任务
- 支持Oozie编辑器，可以通过仪表板提交和监控Workflow、Coordinator和Bundle
- 支持HBase浏览器，能够可视化数据、查询数据、修改HBase表
- 支持Metastore浏览器，可以访问Hive的元数据，以及HCatalog
- 支持Job浏览器，能够访问MapReduce Job（MR1/MR2-YARN）
- 支持Job设计器，能够创建MapReduce/Streaming/Java Job
- 支持Sqoop 2编辑器和仪表板（Dashboard）
- 支持ZooKeeper浏览器和编辑器
- 支持MySql、PostGresql、Sqlite和Oracle数据库查询编辑器

一句话总结：Hue是一个友好的界面集成框架，可以集成我们各种学习过的以及将要学习的框架，一个界面就可以做到查看以及执行所有的框架。

![Hue架构图](./assets/README-1642844398570.png)

> 类似的产品还有 Apache Zeppelin。

## 第二部分 Hue编译安装

- Hue官方网站：<https://gethue.com/>
- HUE官方用户手册：<https://docs.gethue.com/>
- 官方安装文档：<https://docs.gethue.com/administrator/installation/install/>
- HUE下载地址：<https://docs.gethue.com/releases/>

Hue的安装并不是那么简单，官方并没有编译好的软件包，需要从github上下载源码、安装依赖、编译安装。以下详细讲解Hue下载、编译、安装的操作过程。

安装Hue的节点上最好没有安装过MySQL，否则可能有版本冲突，这里选择将Hue安装在 linux122 上。

### 2.1.下载软件包

到官方网站下载 hue-release-4.3.0.zip 上传至服务器，并解压缩

```shell
yum install -y unzip
unzip hue-release-4.3.0.zip
```

### 2.2.安装依赖

```shell
# 需要Python支持(Python 2.7+/Python 3.5+)
python --version
# 在 CentOS 系统中安装编译 Hue 需要的依赖库
yum install ant asciidoc cyrus-sasl-devel cyrus-sasl-gssapi cyrus-sasl-plain gcc gcc-c++ krb5-devel libffi-devel libxml2-devel libxslt-devel make mysql mysql-devel openldap-devel python-devel sqlite-devel gmp-devel
yum install -y rsync
```

> 备注：以上依赖仅适用CentOS/RHEL 7.X，其他情况请参考 <https://docs.gethue.com/administrator/installation/dependencies/>
>
> 安装Hue的节点上最好没有安装过MySQL，否则可能有版本冲突
> 
> 安装过程中需要联网，网络不好会有各种奇怪的问题

### 2.3.安装Maven

编译 Hue 还需要 Maven 环境，因此在编译前需要安装 Maven。

下载 apache-maven-3.6.3-bin.tar.gz 上传虚拟机解压缩，添加环境变量

```shell
# 解压
tar zxvf apache-maven-3.6.3-bin.tar.gz
# 移动文件
mv apache-maven-3.6.3/ ../servers/
mv apache-maven-3.6.3/ maven-3.6.3/

# 修改环境变量
vi /etc/profile

# 添加环境变量
export MAVEN_HOME=/opt/zmn/servers/maven-3.6.3
export PATH=$PATH:$MAVEN_HOME/bin

source /etc/profile

# 验证安装
mvn --version
```

### 2.4.编译

```shell
# 进入 hue 源码目录，进行编译。 使用 PREFIX 指定安装 Hue 的路径
cd /opt/zmn/software/hue-release-4.3.0
# 下面这两个命令不知道用哪一个，实测过第二个
# PREFIX=/opt/zmn/servers make install
# 这个命令不行！ 会安装到 /usr/local/ 目录下
make PREFIX=/opt/zmn/servers install

cd /opt/zmn/servers
# 如果想把HUE移动到另外一个地方，由于HUE使用了Python包的一些绝对路径,移动之后则必须执行以下命令：
# 这里不要执行
rm app.reg
rm -r build
make apps
```

> 备注：这一步持续的时间比较长，还会从网上下载 jar；需要联网

### 2.5.修改 Hadoop 配置文件

> 先停止 HDFS 服务：stop-dfs.sh

在 `hdfs-site.xml` 中增加配置

```xml
<configuration>
    <!-- HUE -->
    <property>
        <name>dfs.webhdfs.enabled</name>
        <value>true</value>
    </property>
    <property>
        <name>dfs.permissions.enabled</name>
        <value>false</value>
    </property>
</configuration>
```

在 core-site.xml 中增加配置

```xml
<configuration>
    <!-- HUE -->
    <property>
        <name>hadoop.proxyuser.hue.hosts</name>
        <value>*</value>
    </property>
    <property>
        <name>hadoop.proxyuser.hue.groups</name>
        <value>*</value>
    </property>
    <property>
        <name>hadoop.proxyuser.hdfs.hosts</name>
        <value>*</value>
    </property>
    <property>
        <name>hadoop.proxyuser.hdfs.groups</name>
        <value>*</value>
    </property>
</configuration>
```

在 `httpfs-site.xml` 文件，添加如下内容

```xml

<configuration>
    <!-- HUE -->
    <property>
        <name>httpfs.proxyuser.hue.hosts</name>
        <value>*</value>
    </property>
    <property>
        <name>httpfs.proxyuser.hue.groups</name>
        <value>*</value>
    </property>
</configuration>
```

> 备注：修改完HDFS相关配置后，需要把配置scp给集群中每台机器，重启hdfs服务。

```shell
scp core-site.xml linux122:$PWD
scp core-site.xml linux123:$PWD

scp hdfs-site.xml linux122:$PWD
scp hdfs-site.xml linux123:$PWD

scp httpfs-site.xml linux122:$PWD
scp httpfs-site.xml linux123:$PWD

# 重启 HDFS
start-dfs.sh
```

### 2.6.Hue配置

```shell
# 进入 Hue 安装目录
cd /opt/zmn/servers/hue
# 进入配置目录
cd desktop/conf
# 复制一份HUE的配置文件，并修改复制的配置文件
cp pseudo-distributed.ini.tmpl pseudo-distributed.ini
vi pseudo-distributed.ini
```

内容如下

```text
# [desktop]
http_host=linux122
http_port=8000

is_hue_4=true

time_zone=Asia/Shanghai

dev=true

server_user=hue
server_group=hue

default_user=hue

# 211行左右。禁用solr，规避报错
app_blacklist=search

# [[database]]。Hue默认使用SQLite数据库记录相关元数据，替换为mysql [631行左右]
engine=mysql
host=linux123
port=3306
user=hive
password=12345678
name=hue

# 1003行左右，Hadoop配置文件的路径
hadoop_conf_dir=/opt/zmn/servers/hadoop-2.9.2/etc/hadoop
```

```shell
# 在mysql中创建数据库hue，用来存放元数据 (linux123)
mysql -u hive -p 12345678

mysql> create database hue;

# 初始化数据库
cd /opt/zmn/servers/hue/build/env/bin

./hue syncdb
./hue migrate
# 检查数据
```

2.7.启动 Hue 服务

```shell
# 增加 hue 用户和用户组
groupadd hue
useradd -g hue hue

# 启动HUE服务
cd /opt/zmn/servers/hue/build/env/bin

./supervisor
```

在浏览器中输入：<http://linux122:8000>，可以看见以下画面，说明安装成功。

![Hue登录页面](./assets/README-1645431803294.png)

> 第一次访问的时候，需要设置超级管理员用户和密码。记住它(hue/123456)


## 第三部分 Hue整合Hadoop、Hive

> 修改参数文件 `/opt/zmn/servers/hue/desktop/conf/pseudo-distributed.ini`

### 3.1.集成HDFS、YARN

```properties
# 211 行。 没有安装 Solr，禁用，否则一直报错
app_blacklist=search

# [hadoop] -- [[hdfs_clusters]] -- [[[default]]]
# 注意端口号。下面语句只要一个
# fs_defaultfs=hdfs://linux121:8020
fs_defaultfs=hdfs://linux121:9000

webhdfs_url=http://linux121:50070/webhdfs/v1

# 211 行
hadoop_conf_dir=/opt/zmn/servers/hadoop-2.9.2/etc/hadoop


# [hadoop] -- [[yarn_clusters]] -- [[[default]]]
resourcemanager_host=linux123

resourcemanager_port=8032

submit_to=True

resourcemanager_api_url=http://linux123:8088

proxy_api_url=http://linux123:8088

history_server_api_url=http://linux123:19888
```

### 3.2.集成Hive

集成Hive需要启动 Hiveserver2 服务，在linux123节点上启动 Hiveserver2

```text
# [beeswax]
hive_server_host=linux123

hive_server_port=10000

hive_conf_dir=/opt/zmn/servers/hive-2.3.7/conf
```

### 3.3.集成MySQL

```text
# [librdbms] -- [[databases]] -- [[[mysql]]]；1639行
# 注意：1639行原文： ##[[mysql]] => [[mysql]]；两个##要去掉!
[[[mysql]]]

nice_name="My SQL DB"

name=hue

engine=mysql

host=linux123

port=3306

user=hive

password=12345678
```

> 备注：name是数据库名，即 database 的名称

### 3.4.重启Hue服务



