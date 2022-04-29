# 8. 调优及二次开发示例 【未完成】

## 8.1 Job执行三原则

- 充分利用集群资源
- Reduce 阶段尽量放在一轮
- 每个 Task 的执行时间要合理

### 8.1.1 充分利用集群资源

Job 运行时，尽量让所有的节点都有任务处理，这样能尽量保证集群资源被充分利用，任务的并发度达到最大。可以通过调整处理的数据量大小，以及调整 map 和 reduce 个数来实现。

- Reduce 个数的控制使用 `mapreduce.job.reduces`
- Map 个数取决于使用了哪种 InputFormat，默认的 TextFileInputFormat 将根据 Block 的个数来分配 Map 数(一个 Block 一个 Map)。

### 8.1.2 ReduceTask 并发调整

努力避免出现以下场景:

- 观察 Job 如果大多数 ReduceTask 在第一轮运行完后，剩下很少甚至一个 ReduceTask 才刚开始运行。这种情况下，这个 ReduceTask 的执行时间将决定了该 Job 的运行时间。可以考虑将 Reduce 个数减少。
- 观察 Job 的执行情况如果是 MapTask 运行完成后，只有个别节点有 ReduceTask 在运行。这时候集群资源没有得到充分利用，需要增加 Reduce 的并行度以便每个节点都有任务处理。

### 8.1.3 Task 执行时间要合理

一个 Job 中，每个 MapTask 或 ReduceTask 的执行时间只有几秒钟，这就意味着这个 Job 的大部分时间都消耗在 Task 的调度和进程启停上了，因此可以考虑增加每个 Task 处理的数据大小。

建议一个 Task 处理时间为1分钟。

## 8.2 Shuffle 调优

Shuffle 阶段是 MapReduce 性能的关键部分，包括了从 MapTask 将输出数据写到磁盘一直到 ReduceTask 拷贝数据并最终合并分组之后，调用 Reduce 函数为止的全部过程。
这一块 Hadoop 提供了大量的调优参数。

### 8.2.1 Map阶段

1. 判断 Map 内存使用

判断 Map 分配的内存是否够用，可以查看运行完成的 Job 的 Counters 中(历史服务器)，对应的 Task 是否发生过多次 GC，以及 GC 时间占总 Task 运行时间之比。
通常，GC时间不应超过 Task 运行时间的 10%，即 `GC time elapsed (ms) / CPU time spent (ms) < 10%`。

> 在日志服务器的 Job 详情里面的 Map-Reduce Framework 版块可以看到这些指标数据。

- Map 需要的内存还需要随着环形缓冲区的调大而对应调整。可以通过 `mapreduce.map.memory.mb` 参数进行调整。
- Map 需要的 CPU 核数可以通过 `mapreduce.map.cpu.vcores` 参数调整。

> 内存默认是 1G，CPU 默认是 1 核。

如果集群资源充足建议调整：`mapreduce.map.memory.mb=3G`(默认1G), `mapreduce.map.cpu.vcores=1`(默认也是1)

> 环形缓冲区
> 
> Map 方法执行后首先把数据写入环形缓冲区，为什么 MR 框架选择先写内存而不是直接写磁盘？这样的目的主要是为了减少磁盘 I/O.
> 
> 环形缓冲默认 100M（`mapreduce.task.io.sort.mb`），当到达 80%（`mapreduce.map.sort.spill.percent`）时就会溢写磁盘。每达到 80% 都会重写溢写到一个新的文件。

当集群内存资源充足，考虑增大 `mapreduce.task.io.sort.mb` (环形缓冲区的大小)提高溢写的效率，而且会减少中间结果的文件数量。

**建议：**

调整 `mapreduce.task.io.sort.mb=512M`。

当文件溢写完后，会对这些文件进行合并，默认每次合并 10（`mapreduce.task.io.sort.factor`）个溢写的文件，建议调整 `mapreduce.task.io.sort.factor=64`。
这样可以提高合并的并行度，减少合并的次数，降低对磁盘操作的次数。

2. Combiner

在 Map 阶段，有一个可选过程，将同一个 key 值的中间结果合并，叫做 Combiner。(一般将 Reduce 类设置为 Combiner 即可)

通过 Combine，一般情况下可以显著减少 Map 输出的中间结果，从而减少 Shuffle 过程的网络带宽占用。

建议：不影响最终结果的情况下，加上 Combiner!!

### 2.2 Copy 阶段

对 Map 的中间结果进行压缩，当数据量大时，会显著减少网络传输的数据量，但是也因为多了压缩和解压，带来了更多的 CPU 消耗。因此需要做好权衡。

当任务属于网络瓶颈类型时，压缩 Map 中间结果效果明显。

在实际经验中 Hadoop 的运行的瓶颈一般都是 IO 而不是 CPU，压缩一般可以 10 倍的减少 IO 操作。

### 2.3 Reduce阶段

1. Reduce资源

每个Reduce资源

```properties
mapreduce.reduce.memory.mb=5G（默认1G）
mapreduce.reduce.cpu.vcores=1（默认为1）。
```

2. Copy

ReduceTask 在 Copy 的过程中默认使用5（`mapreduce.reduce.shuffle.parallelcopies` 参数控制）个并行度进行复制数据。
该值在实际服务器上比较小，建议调整为 50 - 100.

3. 溢写归并

Copy 过来的数据会先放入内存缓冲区中，然后当使用内存达到一定量的时候 spill 磁盘。
这里的缓冲区大小要比 Map 端的更为灵活，它基于 JVM 的 heap size 设置。
这个内存大小的控制是通过 `mapreduce.reduce.shuffle.input.buffer.percent(default 0.7)` 控制的。

Shuffle 在 Reduce 内存中的数据最多使用内存量为：`0.7 × maxHeap of reduce task`，内存到磁盘 Merge 的启动
可以通过 `mapreduce.reduce.shuffle.merge.percent(default0.66)`配置。

Copy 完成后，Reduce 进入归并排序阶段，合并因子默认为10(`mapreduce.task.io.sort.factor` 参数控制)，如果 Map 输出很多，则需要合并很多趟，
所以可以提高此参数来减少合并次数。

```properties
# 复制数据的并行度，默认5；建议调整为50-100
mapreduce.reduce.shuffle.parallelcopies=100
# 一次合并文件个数，默认10，建议调整为64
mapreduce.task.io.sort.factor=64
# 在shuffle的复制阶段，分配给Reduce输出缓冲区占堆内存的百分比，默认0.7
mapreduce.reduce.shuffle.input.buffer.percent=0.7
# Reduce输出缓冲区的阈值，用于启动合并输出和磁盘溢写的过程
mapreduce.reduce.shuffle.merge.percent=0.66
```

## 8.3 Job 调优

### 8.3.1 推测执行

集群规模很大时（几百上千台节点的集群），个别机器出现软硬件故障的概率就变大了，并且会因此延长整个任务的执行时间。

推测执行通过将一个 Task 分给多台机器跑，取先运行完的那个，会很好的解决这个问题。对于小集群，可以将这个功能关闭。

| Key                            | Value  |
|--------------------------------|--------|
| `mapreduce.map.speculative`    | `true` |
| `mapreduce.reduce.speculative` | `true` |

> 默认是开启的。

建议：

- 大型集群建议开启，小集群建议关闭！
- 集群的推测执行都默认关闭掉，在需要推测执行的作业执行的时候开启。

### 8.3.2 Slow Start

MapReduce 的 AM (Application Manager)在申请资源的时候，会一次性申请所有的 Map 资源，延后申请 Reduce 的资源，这样就能达到先执行完大部分 Map 再执行 Reduce 的目的。

`mapreduce.job.reduce.slowstart.completedmaps` 参数：当多少占比的 Map 执行完后开始执行 Reduce。默认 5% 的 Map 跑完后开始起 Reduce。

如果想要 Map 完全结束后执行 Reduce 调整该值为 1。

> 建议保持默认。

### 8.3.3 小文件优化

HDFS：Hadoop 的存储每个文件都会在 NameNode 上记录元数据，如果同样大小的文件，文件很小的话，就会产生很多文件，造成 NameNode 的压力。

MR：Mapreduce 中一个 Map 默认处理一个分片或者一个小文件，如果 Map 的启动时间都比数据处理的时间还要长，那么就会造成性能低，
而且在 Map 端溢写磁盘的时候每一个 Map 最终会产生 Reduce 数量个数的中间结果，如果 Map 数量特别多，就会造成临时文件很多，而且在 Reduce 拉取数据的时候增加磁盘的 IO。

如何处理小文件？

- 从源头解决，尽量在 HDFS 上不存储小文件，也就是数据上传 HDFS 的时候就合并小文件。
- 通过运行 MR 程序合并 HDFS 上已经存在的小文件。
- MR 计算的时候可以使用 `CombineTextInputFormat` 来降低 MapTask 并行度。

### 8.3.4 数据倾斜

MR 是一个并行处理的任务，整个 Job 花费的时间是作业中所有 Task 最慢的那个。

为什么会这样呢？为什么会有的 Task 快有的 Task 慢？

- 数据倾斜。每个 Reduce 处理的数据量不是同一个级别的，所有数据量少的 Task 已经跑完了，数据量大的 Task 则需要更多时间。

- 有可能就是某些作业所在的 NodeManager 有问题或者 container 有问题，导致作业执行缓慢。

那么为什么会产生数据倾斜呢？

数据本身就不平衡，所以在默认的 `HashPartition`时造成分区数据不一致问题。

那如何解决数据倾斜的问题呢？

- 默认的是 Hash 算法进行分区，我们可以尝试自定义分区，修改分区实现逻辑，结合业务特点，使得每个分区数据基本平衡。
- 可以尝试修改分区的键，让其符合Hash分区，并且使得最后的分区平衡，比如在 key 前加随机数 `n-key`。
- 抽取导致倾斜的 key 对应的数据单独处理。

如果不是数据倾斜带来的问题，而是节点服务有问题造成某些 Map 和 Reduce 执行缓慢呢？

使用推测执行找个其他的节点重启一样的任务竞争，谁快谁为准。推测执行时以空间换时间的优化。
会带来集群资源的浪费，会给集群增加压力。

## 8.4 YARN调优

### 8.4.1 NM配置

1. 可用内存

刨除分配给操作系统、其他服务的内存外，剩余的资源应尽量分配给 YARN。

默认情况下，Map 或 Reduce container 会使用 1 个虚拟 CPU 内核和 1024MB 内存，ApplicationMaster 使用 1536MB 内存。

`yarn.nodemanager.resource.memory-mb` （默认是8192）

2. CPU 虚拟核数

建议将此配置设定在逻辑核数的 1.5 ～ 2 倍之间。如果 CPU 的计算能力要求不高，可以配置为 2 倍的逻辑 CPU。

`yarn.nodemanager.resource.cpu-vcores` 该节点上 YARN 可使用的虚拟 CPU 个数，默认是 8。

目前推荐将该值设值为逻辑 CPU 核数的 1.5 ～ 2 倍之间。

### 8.4.2 Container 启动模式

YARN 的 NodeManager 提供 2 种 Container 的启动模式。

默认，YARN 为每一个 Container 启动一个 JVM，JVM 进程间不能实现资源共享，导致资源本地化的时间开销较大。
针对启动时间较长的问题，新增了基于线程资源本地化启动模式，能够有效提升 Container 启动效率。

参数：`yarn.nodemanager.container-executor.class`

- 设置为 `org.apache.hadoop.yarn.server.nodemanager.DefaultContainerExecutor`，则每次启动 Container 将会启动一个*线程*来实现资源本地化。该模式下，启动时间较短，但无法做到资源（CPU、内存）隔离。
- 设置为 `org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor` ，则每次启动 Container 都会启动一个*JVM进程*来实现资源本地化。该模式下，启动时间较长，但可以提供较好的资源（CPU、内存）隔离能力。


### 8.4.3 AM 调优

运行的一个大任务，Map 总数达到了上万的规模，这时候任务失败，原因很可能是 ApplicationMaster（以下简称 AM）反应缓慢，最终超时失败。

失败原因是 Task 数量变多时，AM管理的对象也线性增长，因此就需要更多的内存来管理。AM 默认分配的内存大小是 1.5 GB。

建议：任务数量多时增大 AM 内存，调整到 10G 左右。

参数：`yarn.app.mapreduce.am.resource.mb`

## 8.5 NameNode Full GC




## 8.6 Hadoop 二次开发环境搭建




