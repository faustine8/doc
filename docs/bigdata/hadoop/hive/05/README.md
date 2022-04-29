# 5. HQL 数据操作

### 第 1 节 数据导入

#### 装载数据(Load)

基本语法:

```sql
LOAD DATA [LOCAL] INPATH 'filepath'
    [OVERWRITE] INTO TABLE tablename [PARTITION (partcol1=val1, partcol2=val2 ...)]
```

- LOCAL:
    - LOAD DATA LOCAL ... 从本地文件系统加载数据到Hive表中。本地文件会*拷贝*到Hive表指定的位置
    - LOAD DATA ... 从HDFS加载数据到Hive表中。HDFS文件*移动*到Hive表指定的位置
- INPATH: 加载数据的路径
- OVERWRITE: 覆盖表中已有数据;否则表示追加数据
- PARTITION: 将数据加载到指定的分区

准备工作:

```sql
-- 创建表
CREATE TABLE tabA (
  id int,
  name string,
  area string
) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' ;
```
数据文件 (~/data/sourceA.txt):

```text
1,fish1,SZ
2,fish2,SH
3,fish3,HZ
4,fish4,QD
5,fish5,SR
```

拷贝文件到 HDFS

```shell
hdfs dfs -put sourceA.txt data/
```

装载数据:

```sql
-- 加载本地文件到hive(tabA)
LOAD DATA LOCAL INPATH '/home/hadoop/data/sourceA.txt' INTO TABLE tabA;
-- 检查本地文件还在

-- 加载hdfs文件到hive(tabA)
LOAD DATA INPATH '/user/root/data/sourceA.txt' INTO TABLE tabA;
-- 检查HDFS文件，已经被转移

-- 加载数据覆盖表中已有数据
LOAD DATA LOCAL INPATH '/home/hadoop/data/sourceA.txt' OVERWRITE INTO TABLE tabA;

-- 创建表时加载数据
hdfs dfs -mkdir /user/hive/tabB
hdfs dfs -put sourceA.txt /user/hive/tabB

CREATE TABLE tabB (
    id INT,
    name string,
    area string
) 
ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
Location '/user/hive/tabB';

# 查看数据
SELECT * FROM tabB;
```

#### 插入数据(Insert)

```sql
-- 创建分区表
CREATE TABLE tabC (
  id int,
  name string,
  area string
)
partitioned by (month string)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ',';

-- 插入数据
insert into table tabC partition(month='202201') values (5, 'wangwu', 'BJ'), (4, 'lishi', 'SH'), (3, 'zhangsan', 'TJ');
-- 插入查询的结果数据
insert into table tabC partition(month='202202') select id, name, area from tabC where month='202201';
-- 此处不能使用 select * from tabC, 因为结果会多一个此处并不需要的伪列：month


-- 多表(多分区)插入模式
from tabC insert overwrite table tabC partition(month='202203') select id, name, area where month='202201'
    insert overwrite table tabC partition(month='202204') select id, name, area where month='202002' or month='202201';
```

创建表并插入数据(as select)

```sql
-- 根据查询结果创建表
create table if not exists tabD as select * from tabC;
```

使用import导入数据

```sql
import table student2 partition(month='201709') from '/user/hive/warehouse/export/student';
```

### 第 2 节 数据导出

```sql
-- 将查询结果导出到本地
insert overwrite local directory '/home/hadoop/data/tabC' select * from tabC;

-- 将查询结果格式化输出到本地
insert overwrite local directory '/home/hadoop/data/tabC2' row format delimited fields terminated by ' '
select * from tabC;

-- 将查询结果导出到HDFS
insert overwrite directory '/user/hadoop/data/tabC3' row format delimited fields terminated by ' '
select * from tabC;
-- 查看hdfs导出结果
hdfs dfs -cat /user/hadoop/data/tabC3/*
```

dfs 命令导出数据到本地。(本质是执行数据文件的拷贝)

```shell
hive (mydb)> dfs -get /user/hive/warehouse/mydb.db/tabc/month=202201 /home/hadoop/data/tabC4;
```

hive 命令导出数据到本地。(本质是：执行查询将查询结果重定向到文件)

```shell
# 不需进入 Hive 命令行
hive -e "select * from mydb.tabC" > a.log
```

```shell
# export 导出数据到HDFS。
# 使用export导出数据时，不仅有数据还有表的元数据信息
hive (mydb)> export table tabC to '/user/root/data/tabC4';

[root@linux121 ~]# hdfs dfs -ls /user/root/data/tabC4/
Found 5 items
-rwxr-xr-x   3 root supergroup       6206 2022-02-16 16:51 /user/root/data/tabC4/_metadata
drwxr-xr-x   - root supergroup          0 2022-02-16 16:51 /user/root/data/tabC4/month=202201
drwxr-xr-x   - root supergroup          0 2022-02-16 16:51 /user/root/data/tabC4/month=202202
drwxr-xr-x   - root supergroup          0 2022-02-16 16:51 /user/root/data/tabC4/month=202203
drwxr-xr-x   - root supergroup          0 2022-02-16 16:51 /user/root/data/tabC4/month=202204


# export 导出的数据，可以使用 import 命令导入到 Hive 表中
# 使用 LIKE tname 创建的表结构与原表一致。create ... AS select ... 结构可能不一致.(如：丢失 partition 信息)
hive (mydb)> create table tabE like tabC;
hive (mydb)> import table tabE from '/user/root/data/tabC4';
```

```sql
-- 截断表，清空数据。(注意:仅能操作内部表)
truncate table tabE;

-- 以下语句报错，外部表不能执行 truncate 操作
hive (mydb)> alter table tabC set tblproperties("EXTERNAL"="TRUE");
OK
Time taken: 0.137 seconds

hive (mydb)> truncate table tabC;
FAILED: SemanticException [Error 10146]: Cannot truncate non-managed table tabC.
```

**小结**

- 数据导入: `load data`/`insert`/`create table .... as select .....`/`import table`
- 数据导出: `insert overwrite ... diretory ...`/`hdfs dfs -get`/`hive -e "select ..." > a.log`/`export table ...`

Hive 的数据导入与导出还可以使用其他工具，如Sqoop、DataX等。