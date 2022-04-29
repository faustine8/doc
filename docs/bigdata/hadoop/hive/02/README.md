# 2. Hive安装与配置

## 2.1 Hive安装配置

Hive官网: <http://hive.apache.org>

下载网址: <http://archive.apache.org/dist/hive/>

文档网址: <https://cwiki.apache.org/confluence/display/Hive/LanguageManual>

安装前提: 3台虚拟机，安装了Hadoop

安装软件: Hive(2.3.7) + MySQL (5.7.26)

> 备注: Hive 的元数据默认存储在自带的 derby 数据库中，生产中多采用MySQL

> derby: Java语言开发占用资源少，单进程，单用户。仅仅适用于个人的测试。

| 软件     | linux121 | linux122 | linux123 |
|--------|----------|----------|----------|
| Hadoop | √        | √        | √        |
| MySQL  |          |          | √        |
| Hive   |          |          | √        |

整体的安装步骤:

1. 安装MySQL
2. 安装配置Hive
3. Hive添加常用配置

### 2.1.1 MySQL安装

Hive中使用MySQL存储元数据，MySQL的版本 5.7.26。

安装步骤:

1. 环境准备(删除有冲突的依赖包、安装必须的依赖包)
2. 安装MySQL
3. 修改root口令(找到系统给定的随机口令、修改口令)
4. 在数据库中创建hive用户

1、删除MariaDB

centos7.6 自带的MariaDB(MariaDB是MySQL的一个分支)，与要安装的MySQL有冲突，需要删除。

```shell
# 查询是否安装了mariadb 
rpm -aq | grep mariadb
# 删除mariadb。
# -e 删除指定的套件; --nodeps 不验证套件的相互关联性 
rpm -e --nodeps mariadb-libs
```

2、安装依赖

```shell
yum install perl -y
yum install net-tools -y
```

3、安装MySQL

```shell
# 解压缩
tar xvf mysql-5.7.26-1.el7.x86_64.rpm-bundle.tar
# 依次运行以下命令
rpm -ivh mysql-community-common-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.26-1.el7.x86_64.rpm
```

4、启动数据库

```shell
systemctl start mysqld
```

5、查找root密码

```shell
grep password /var/log/mysqld.log
```

6、修改 root 密码

```shell
# 进入MySQL，使用前面查询到的口令 
mysql -u root -p

# 设置密码强度; 将root口令设置为12345678; 刷新
set global validate_password_policy=0;
set password for 'root'@'localhost' = password('12345678');
flush privileges;
```

`validate_password_policy` 密码策略(默认是1)，可配置的值有以下:

- `0 or LOW` 仅需需符合密码长度(由参数 `validate_password_length`【默认为8】 指定)
- `1 or MEDIUM` 满足 LOW 策略，同时还需满足至少有1个数字，小写字母，大写字母和特殊字符
- `2 or STRONG` 满足 MEDIUM 策略，同时密码不能存在字典文件(dictionary file)中

> 备注: 个人开发环境，出于方便的目的设比较简单的密码; 生产环境一定要设复杂密码!

7、创建 hive 用户

```sql
# 创建用户设置密码、授权、刷新
CREATE USER 'hive'@'%' IDENTIFIED BY '12345678'; 
GRANT ALL ON *.* TO 'hive'@'%';
FLUSH PRIVILEGES;
```

### 2.1.2 Hive 安装

安装步骤:

1. 下载、上传、解压缩
2. 修改环境变量
3. 修改hive配置
4. 拷贝JDBC的驱动程序
5. 初始化元数据库

#### 1. 下载 Hive 软件，并解压缩

```shell
cd /opt/zmn/software
tar zxvf apache-hive-2.3.7-bin.tar.gz -C ../servers/
cd ../servers
mv apache-hive-2.3.7-bin hive-2.3.7
```

#### 2. 修改环境变量

```shell
# 在 /etc/profile 文件中增加环境变量
export HIVE_HOME=/opt/zmn/servers/hive-2.3.7
export PATH=$PATH:$HIVE_HOME/bin
# 执行并生效
source /etc/profile
```

#### 3. 修改 Hive 配置

```shell
cd $HIVE_HOME/conf
vi hive-site.xml
```

增加以下内容:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- hive元数据的存储位置 --> 
    <property>
        <name>javax.jdo.option.ConnectionURL</name>
        <value>jdbc:mysql://linux123:3306/hivemetadata?createDatabaseIfNotExist=true&amp;useSSL=false</value>
        <description>JDBC connect string for a JDBC metastore</description>
    </property>
    <!-- 指定驱动程序 --> 
    <property>
        <name>javax.jdo.option.ConnectionDriverName</name>
        <value>com.mysql.jdbc.Driver</value>
        <description>Driver class name for a JDBC metastore</description>
    </property>
    <!-- 连接数据库的用户名 --> 
    <property>
        <name>javax.jdo.option.ConnectionUserName</name>
        <value>hive</value>
        <description>username to use against metastore database</description>
    </property>
    <!-- 连接数据库的密码 --> 
    <property>
        <name>javax.jdo.option.ConnectionPassword</name>
        <value>12345678</value>
        <description>password to use against metastore database</description>
    </property>
</configuration>
```

> 备注: 注意jdbc的连接串，如果没有 `useSSL=false` 会有大量警告。在xml文件中 `&amp;` 表示 &

#### 4. 拷贝 MySQL JDBC 驱动程序

将 `mysql-connector-java-5.1.46.jar` 拷贝到 `$HIVE_HOME/lib`

#### 5. 初始化元数据库

```shell
schematool -dbType mysql -initSchema
```

#### 6. 启动Hive，执行命令

```shell
# 启动hive服务之前，请先启动hdfs、yarn的服务 
[root@linux123 ~]$ hive
hive> show functions;
```

### 2.1.3 Hive 属性配置

可在 `hive-site.xml` 中增加以下常用配置，方便使用。

数据存储位置

```xml
<property>
    <!-- 数据默认的存储位置(HDFS) --> 
    <name>hive.metastore.warehouse.dir</name>
    <value>/user/hive/warehouse</value> 
    <description>location of default database for the warehouse</description>
</property>
```

显示当前库

```xml
<property>
    <!-- 在命令行中，显示当前操作的数据库 --> 
    <name>hive.cli.print.current.db</name>
    <value>true</value>
    <description>Whether to include the current database in the Hive prompt.</description>
</property>
```

显示表头属性

```xml
<property>
    <!-- 在命令行中，显示数据的表头 --> 
    <name>hive.cli.print.header</name>
    <value>true</value>
</property>
```

本地模式

```xml
<property>
    <!-- 操作小规模数据时，使用本地模式，提高效率 --> 
    <name>hive.exec.mode.local.auto</name>
    <value>true</value>
    <description>Let Hive determine whether to run in local mode automatically</description>
</property>
```

> 备注: 当 Hive 的输入数据量非常小时，Hive 通过本地模式在单台机器上处理所有的任务。

对于小数据集，执行时间会明显被缩短。当一个 job 满足如下条件才能真正使用本地模式:

- job 的输入数据量必须小于参数: `hive.exec.mode.local.auto.inputbytes.max` (默认128MB)
- job 的 map 数必须小于参数: `hive.exec.mode.local.auto.tasks.max` (默认4)
- job 的 reduce`数必须为 0 或者 1

**Hive的日志文件**

Hive 的 log 默认存放在 `/tmp/root` 目录下(root为当前用户名); 这个位置可以修改。

```shell
vi $HIVE_HOME/conf/hive-log4j2.properties
# 添加以下内容:
property.hive.log.dir = /opt/zmn/servers/hive-2.3.7/logs
```

> 可以不修改，但是要知道位置。

Hadoop 2.x 中 NameNode RPC缺省的端口号: 8020。(对端口号要敏感)

**附录: 添加第三方用户(Hadoop)**

```shell
groupadd hadoop

# -m:自动建立用户的登入目录
# -g:指定用户所属的起始群组
# -G<群组>:指定用户所属的附加群组
# -s:指定用户登入后所使用的shell
useradd -m hadoop -g hadoop -s /bin/bash

passwd hadoop

visudo
# 在100行后添加。允许用户执行sudo，免密 
hadoop ALL=(ALL) NOPASSWD:ALL
```

> 建议: 现阶段使用root用户

小结:

1. 添加了配置，使用 Hive 更方便;
2. 删除了有冲突的软件包(hive)
3. Hive 的日志在哪里( `/tmp/root` )
4. 第三方用户使用 Hive。建议使用 root 用户。
5. NameNode 默认的RPC(远程过程调用)端口号 8020，经常使用的端口号 9000。

### 2.1.4 参数配置方式

查看参数配置信息:

```shell
# 查看全部参数 
hive> set;
# 查看某个参数
hive> set hive.exec.mode.local.auto; 

hive.exec.mode.local.auto=false
```


参数配置的三种方式:

1. 用户自定义配置文件(hive-site.xml)
2. 启动hive时指定参数(`-hiveconf`)
3. hive命令行指定参数(`set`命令)

> 配置信息的优先级: `set`命令 > `-hiveconf` > hive-site.xml > hive-default.xml

#### 1. 配置文件方式

- 默认配置文件: hive-default.xml
- 用户自定义配置文件: hive-site.xml
- 配置优先级: hive-site.xml > hive-default.xml

配置文件的设定对*本机启动*的所有Hive进程有效;

配置文件的设定对本机*所有*启动的Hive进程有效;

#### 2. 启动时指定参数值

启动Hive时，可以在命令行添加 `-hiveconf param=value` 来设定参数，这些设定仅对本次启动有效。

```shell
# 启动时指定参数
hive -hiveconf hive.exec.mode.local.auto=true

# 在命令行检查参数是否生效
hive> set hive.exec.mode.local.auto; 

hive.exec.mode.local.auto=true
```

#### 3. 命令行修改参数

可在 Hive 命令行中使用 `SET` 关键字设定参数，同样仅对本次启动有效

```shell
hive> set hive.exec.mode.local.auto=false;
hive> set hive.exec.mode.local.auto;

hive.exec.mode.local.auto=false
```

> set > `-hiveconf` > hive-site.xml > hive-default.xml

## 2.2 Hive命令

### 2.2.1 Hive

```shell
hive -help

usage: hive
 -d,--define <key=value>          Variable substitution to apply to Hive commands. e.g. -d A=B or --define A=B
    --database <databasename>     Specify the database to use
 -e <quoted-query-string>         SQL from command line
 -f <filename>                    SQL from files
 -H,--help                        Print help information
    --hiveconf <property=value>   Use value for given property
    --hivevar <key=value>         Variable substitution to apply to Hive commands. e.g. --hivevar A=B
 -i <filename>                    Initialization SQL file
 -S,--silent                      Silent mode in interactive shell
 -v,--verbose                     Verbose mode (echo executed SQL to the console)
```

`-e`: 不进入hive交互窗口，执行sql语句

```shell
hive -e "select * from users"
```

`-f`: 执行脚本中sql语句

```shell
# 创建文件hqlfile1.sql，内容:select * from users # 执行文件中的SQL语句
hive -f hqlfile1.sql
# 执行文件中的SQL语句，将结果写入文件 
hive -f hqlfile1.sql >> result1.log
```

### 2.2.2 退出Hive命令行

```shell
exit;
quit;
```

### 2.2.3 在命令行执行 shell/dfs 命令

```shell
# SHELL 命令
hive> ! ls;
hive> ! clear;
# HDFS 命令
hive> dfs -ls / ;
```
