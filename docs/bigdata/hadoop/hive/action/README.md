# Hive 实战

## 第十一部分 Hive案例

> 综合Hive知识，复习巩固。

### 第 1 节 需求描述


针对销售数据，完成统计：

1. 按年统计销售额
2. 销售金额在 10W 以上的订单
3. 每年销售额的差值
4. 年度订单金额前10位（年度、订单号、订单金额、排名）
5. 季度订单金额前10位（年度、季度、订单id、订单金额、排名）
6. 求所有交易日中订单金额最高的前10位
7. 每年度销售额最大的交易日
8. 年度最畅销的商品(即每年销售金额最大的商品)

### 第 2 节 数据说明

日期表(dimdate)

| name      | type     | desc |
|-----------|----------|------|
| dt        | date     | 日期   |
| yearmonth | int      | 年月   |
| year      | smallint | 年    |
| month     | tinyint  | 月    |
| day       | tinyint  | 日    |
| week      | tinyint  | 周几   |
| weeks     | tinyint  | 第几周  |
| quat      | tinyint  | 季度   |
| tendays   | tinyint  | 旬    |
| halfmonth | tinyint  | 半月   |

订单表(sale)

| name       | type   | desc |
|------------|--------|------|
| orderid    | string | 订单号  |
| locationid | string | 交易位置 |
| dt         | date   | 交易日期 |

订单销售明细表(saledetail)

| name    | type   | desc |
|---------|--------|------|
| orderid | string | 订单号  |
| rownum  | int    | 行号   |
| itemid  | string | 货品   |
| num     | int    | 数量   |
| price   | double | 单价   |
| amount  | double | 金额   |

### 第 3 节 实现

#### 步骤一：创建表

创建 `createtable.hql` 文件，将数据放到 OCR 文件中

```sql
drop database sale cascade;
create database if not exists sale;

create table sale.dimdate_ori
(
    dt        date,
    yearmonth int,
    year      smallint,
    month     tinyint,
    day       tinyint,
    week      tinyint,
    weeks     tinyint,
    quat      tinyint,
    tendays   tinyint,
    halfmonth tinyint
)
    row format delimited
        fields terminated by ",";

create table sale.sale_ori
(
    orderid    string,
    locationid string,
    dt         date
)
    row format delimited
        fields terminated by ",";

create table sale.saledetail_ori
(
    orderid string,
    rownum  int,
    goods   string,
    num     int,
    price   double,
    amount  double
)
    row format delimited
        fields terminated by ",";

create table sale.dimdate
(
    dt        date,
    yearmonth int,
    year      smallint,
    month     tinyint,
    day       tinyint,
    week      tinyint,
    weeks     tinyint,
    quat      tinyint,
    tendays   tinyint,
    halfmonth tinyint
) stored as orc;

create table sale.sale
(
    orderid    string,
    locationid string,
    dt         date
) stored as orc;

create table sale.saledetail
(
    orderid string,
    rownum  int,
    goods   string,
    num     int,
    price   double,
    amount  double
) stored as orc;
```

```shell
hive -f createtable.hql
```

#### 步骤二：导入数据

```sql
-- 加载数据
use sale;
load data local inpath '/root/data/tbDate.txt' overwrite into table dimdate_ori;
load data local inpath '/root/data/tbSale.txt' overwrite into table sale_ori;
load data local inpath '/root/data/tbSaleDetail.txt' overwrite into table saledetail_ori;

-- 导入数据
insert into table dimdate select * from dimdate_ori;
insert into table sale select * from sale_ori;
insert into table saledetail select * from saledetail_ori;
```

```shell
hive -f loaddata.hql
```

#### 步骤三：SQL实现

1. 按年统计销售额

```sql
SELECT year(b.dt) year, round(sum(a.amount)/10000, 2) amount
FROM saledetail a JOIN sale b ON a.orderid = b.orderid
GROUP BY year(b.dt);
```

2. 销售金额在 10W 以上的订单

```sql
SELECT orderid, round(sum(amount)/10000, 2) total
FROM saledetail
GROUP BY orderid
HAVING sum(amount) > 100000;
```

3. 每年销售额的差值

```sql
SELECT year(b.dt) year, sum(a.amount) total, lag(sum(a.amount)) OVER(ORDER BY year(b.dt)) prioramount, 
  nvl(sum(a.amount) - lag(sum(a.amount)) OVER(ORDER BY year(b.dt)), 0) diff 
FROM saledetail a JOIN sale b ON a.orderid = b.orderid
GROUP BY year(b.dt);
```

参考答案：

```sql
SELECT year, round(amount, 2) amount, round(lag(amount) over (ORDER BY year), 2) prioramount, 
  round(amount - lag(amount) over (ORDER BY year), 2) diff
from (SELECT year(B.dt) year, sum(A.amount) amount
        from saledetail A join sale B on A.orderid=B.orderid
        group by year(B.dt)
) tmp;
```

4. 年度订单金额前10位（年度、订单号、订单金额、排名）

```hiveql
SELECT year(dt), orderid, sum(amount), dense_rank() over (ORDER BY sum(amount) DESC) rank
FROM saledetail
GROUP BY year(dt), orderid 
HAVING rank <= 10;
```

5. 季度订单金额前10位（年度、季度、订单id、订单金额、排名）

```sql

```

6. 求所有交易日中订单金额最高的前10位

```sql

```

7. 每年度销售额最大的交易日

```sql

```

8. 年度最畅销的商品(即每年销售金额最大的商品)

```sql

```


