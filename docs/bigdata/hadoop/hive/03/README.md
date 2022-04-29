# 3. 数据类型与文件格式

Hive 支持关系型数据库的绝大多数*基本数据类型*，同时也支持4种*集合数据类型*。

## 3.1 基本数据类型及转换

Hive 和 Java 语言中类似，支持多种不同长度的整型和浮点类型数据，同时也支持布尔类型、字符串类型，时间戳数据类型以及二进制数组数据类型等。

具体的如下表:

| 大类                          | 类型                                                                                           |
|-----------------------------|----------------------------------------------------------------------------------------------|
| Integers(整型)                | TINYINT: 1字节的有符号整数; <br/> SMALLINT: 2字节的有符号整数; <br/> INT: 4字节的有符号整数; <br/> BIGINT: 8字节的有符号整数 |
| Floating point numbers(浮点数) | FLOAT: 单精度浮点数; <br/> DOUBLE: 双精度浮点数                                                          |
| Fixed point numbers(定点数)    | DECIMAL: 17字节，任意精度数字。通常用户自定义decimal(12, 6)                                                   |
| String(字符串)                 | STRING: 可指定字符集的不定长字符串; <br/> VARCHAR: 1-65535长度的不定长字符串; <br/> CHAR: 1-255定长字符串               |
| Datetime(时间日期类型)            | TIMESTAMP: 时间戳(纳秒精度); <br/> DATE: 时间日期类型                                                     |
| Boolean(布尔类型)               | BOOLEAN: TRUE / FALSE                                                                        |
| Binary types(二进制类型)         | BINARY: 字节序列                                                                                 |

这些类型名称都是 Hive 中保留字。这些基本的数据类型都是 Java 中的接口进行实现的，因此与 Java 中数据类型是基本一致的:

| Hive数据类型  | Java数据类型 | 长度                     | 样例                                                    |
|-----------|----------|------------------------|-------------------------------------------------------|
| TINYINT   |          | 1byte有符号整数             | 20                                                    |
| SMALLINT  |          | 2byte有符号整数             | 30                                                    |
| INT       |          | 4byte有符号整数             | 40                                                    |
| BIGINT    |          | 8byte有符号整数             | 50                                                    |
| BOOLEAN   |          | 布尔类型                   | TURE/FALSE                                            |
| FLOAT     |          | 单精度浮点数                 | 3.14159                                               |
| DOUBLE    |          | 双精度浮点数                 | 3.14159                                               |
| STRING    |          | 字符系列，可指定字符集;可使用单引号或双引号 | 'The Apache Hive data warehouse software facilitates' |
| TIMESTAMP |          | 时间类型                   |                                                       |
| BINARY    |          | 字节数组                   |                                                       |

**数据类型的隐式转换**

Hive 的数据类型是可以进行隐式转换的，类似于 Java 的类型转换。

如用户在查询中将一种浮点类型和另一种浮点类型的值做对比，Hive 会将类型转换成两个浮点类型中值较大的那个类型，
即: 将 FLOAT 类型转换成 DOUBLE 类型; 当然如果需要的话，任意整型会转化成 DOUBLE 类型。

Hive 中基本数据类型遵循以下层次结构，按照这个层次结构，子类型到祖先类型允许隐式转换。

```text
Number -> DOUBLE -> FLOAT -> BIGINT -> INT -> SMALLINT -> TINYINT

从右到左，范围越来越广。
```

总的来说，遵循以下规律：

*任何整数类型都可以隐式转换为一个范围更广的类型*

*所有整数类型、Float、string(string的内容必须都是数字)都可以隐式转换为Double*

*Boolean类型不能转换*

```shell
hive (default)> select "1.0" + 2;
OK
_c0
3.0
Time taken: 2.468 seconds, Fetched: 1 row(s)

hive (default)> select "666" > 665;
OK
_c0
true
Time taken: 0.221 seconds, Fetched: 1 row(s)
```

**数据类型的显示转换**

使用 `cast` 函数进行强制类型转换; 如果强制类型转换失败，返回 NULL

```shell
hive (default)> select cast('666s' as int);
OK
_c0
NULL
Time taken: 0.152 seconds, Fetched: 1 row(s)

hive (default)> select cast('1111' as int);
OK
_c0
1111
Time taken: 0.129 seconds, Fetched: 1 row(s)
```

## 3.2 集合数据类型

Hive 支持集合数据类型，包括 `array`、`map`、`struct`、`union`

| 类型     | 描述                                 | 字面量示例                                                                |
|--------|------------------------------------|----------------------------------------------------------------------|
| ARRAY  | 有序的相同数据类型的集合                       | array(1,2)                                                           |
| MAP    | key-value 对。key 必须是基本数据类型，value 不限 | map('a', 1, 'b',2)                                                   |
| STRUCT | 不同类型字段的集合。类似于 C 语言的结构体             | struct('1',1,1.0), named_struct('col1', '1', 'col2', 1, 'clo3', 1.0) |
| UNION  | 不同类型的元素存储在同一字段的不同行中                | create_union(1, 'a', 63)                                             |


和基本数据类型一样，这些类型的名称同样是保留字;

`ARRAY` 和 `MAP` 与 Java 中的 `Array` 和 `Map` 类似;

`STRUCT` 与 C 语言中的 `Struct` 类似，它封装了一个命名字段集合，复杂数据类型允许任意层次的嵌套;

```shell
hive (default)> select array(1,2,3) as myarr;
OK
myarr
[1,2,3]
Time taken: 0.237 seconds, Fetched: 1 row(s)

# 使用 [] 访问数组元素
hive (default)> select arr[0] from (select array(1,2,3) arr) tmp;
OK
_c0
1
Time taken: 0.137 seconds, Fetched: 1 row(s)

hive (default)> select map('a', 1, 'b', 2, 'c', 3) as mymap;
OK
mymap
{"a":1,"b":2,"c":3}
Time taken: 0.142 seconds, Fetched: 1 row(s)

# 使用 [] 访问map元素
hive (default)> select mymap["a"] from (select map('a', 1, 'b', 2, 'c', 3) as mymap) tmp;
OK
_c0
1
Time taken: 0.152 seconds, Fetched: 1 row(s)

# 使用 [] 访问map元素。 key 不存在返回 NULL
hive (default)> select mymap["x"] from (select map('a', 1, 'b', 2, 'c', 3) as mymap) tmp;
OK
_c0
NULL
Time taken: 0.132 seconds, Fetched: 1 row(s)

hive (default)> select struct('john', 7, 1288.68) as userinfo;
OK
userinfo
{"col1":"john","col2":7,"col3":1288.68}
Time taken: 0.145 seconds, Fetched: 1 row(s)

# 给 struct 中的字段命名
hive (default)> select named_struct("name", "john", "id", 7, "salary", 12880.68) as userinfo;
OK
userinfo
{"name":"john","id":7,"salary":12880.68}
Time taken: 0.139 seconds, Fetched: 1 row(s)

# 使用 列名.字段名 访问具体信息
hive (default)> select userinfo.id, userinfo.name from (select named_struct("name", "john", "id", 7, "salary", 12880.68) userinfo) tmp;
OK
id      name
7       john
Time taken: 0.147 seconds, Fetched: 1 row(s)

# union 数据类型
hive> select create_union(0, "john", 19, 8000.88) uinfo;
```

## 3.3 文本文件数据编码

Hive表中的数据存储在文件系统上，Hive定义了默认的存储格式，也支持用户自定义文件存储格式。

Hive默认使用几个很少出现在字段值中的控制字符，来表示替换默认分隔符的字符。

Hive默认分隔符

| 分隔符  | 名称         | 说明                                                                     |
|------|------------|------------------------------------------------------------------------|
| `\n` | 换行符        | 用于分隔行。每一行是一条记录，使用换行符分割数据                                               |
| `^A` | `<Ctrl>+A` | 用于分隔字段。在 `CREATE TABLE` 语句中使用八进制编码 `\001` 表示                           |
| `^B` | `<Ctrl>+B` | 用于分隔 `ARRAY`、`MAP`、`STRUCT` 中的元素。在 `CREATE TABLE` 语句中使用八进制编码 `\002` 表示 |
| `^C` | `<Ctrl+C>` | Map 中 `key`、`value` 之间的分隔符。在 `CREATE TABLE` 语句中使用八进制编码 `\003` 表示       |


Hive 中没有定义专门的数据格式，数据格式可以由用户指定，用户定义数据格式需要指定三个属性: 列分隔符(通常为空格、"\t"、"\x001")、行分隔符("\n")以及读取文件数据的方法。

在加载数据的过程中，Hive 不会对数据本身进行任何修改，而只是将数据内容复制或者移动到相应的 HDFS 目录中。

将 Hive 数据导出到本地时，系统默认的分隔符是 `^A`、`^B`、`^C` 这些特殊字符，使用 cat 或者 vim 是看不到的;

在 vi 中输入特殊字符:

- (Ctrl + v) + (Ctrl + a) => ^A
- (Ctrl + v) + (Ctrl + b) => ^B
- (Ctrl + v) + (Ctrl + c) => ^C

`^A`/`^B`/`^C` 都是特殊的控制字符，使用 `more`、`cat` 命令是看不见的; 可以使用 `cat -A file.dat`

## 3.4 读时模式

在传统数据库中，在加载时发现数据不符合表的定义，则拒绝加载数据。
数据在*写入*数据库时对照表模式进行检查，这种模式称为"写时模式"(schema on write)。

写时模式 -> 写数据检查 -> RDBMS;

Hive中数据加载过程采用"读时模式"(schema on read)，加载数据时不进行数据格式的校验，*读取数据时如果不合法则显示NULL*。这种模式的优点是加载数据迅速。

读时模式 -> 读时检查数据 -> Hive;

- 好处: 加载数据快
- 问题: 数据显示 NULL
