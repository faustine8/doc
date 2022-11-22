import{_ as n,c as s}from"./app.40df414d.js";var a="/doc/assets/README-1648880218660.cb1a2038.png",e="/doc/assets/README-1648880392011.7d79e652.png",t="/doc/assets/README-1648880620646.f262a863.png",o="/doc/assets/README-1648880990797.a4e696b1.png",p="/doc/assets/README-1648881005671.aec0c1cb.png",c="/doc/assets/README-1648881199637.050cd3b2.png",l="/doc/assets/README-1648881295838.13d9e3b9.png",i="/doc/assets/README-1648881635832.16abcada.png",r="/doc/assets/README-1648881671198.3e74c726.png",u="/doc/assets/README-1648881704024.be914549.png",d="/doc/assets/README-1648881860688.53f09873.png",k="/doc/assets/README-1648881845026.aeb3db97.png";const b={},m=s('<h1 id="spark-sql-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#spark-sql-\u539F\u7406" aria-hidden="true">#</a> Spark SQL \u539F\u7406</h1><h2 id="_1-sparksql-\u4E2D\u7684-join" tabindex="-1"><a class="header-anchor" href="#_1-sparksql-\u4E2D\u7684-join" aria-hidden="true">#</a> 1. SparkSQL \u4E2D\u7684 join</h2><p>\u6570\u636E\u5206\u6790\u4E2D\u5C06\u4E24\u4E2A\u6570\u636E\u96C6\u8FDB\u884C Join \u64CD\u4F5C\u662F\u5F88\u5E38\u89C1\u7684\u573A\u666F\u3002</p><p>\u5728 Spark \u7684\u7269\u7406\u8BA1\u5212\u9636\u6BB5\uFF0CSpark \u7684 Join Selection \u7C7B\u4F1A\u6839\u636E Join hints \u7B56\u7565\u3001Join \u8868\u7684\u5927\u5C0F\u3001 Join \u662F\u7B49\u503C Join \u8FD8\u662F\u4E0D\u7B49\u503C\u4EE5\u53CA\u53C2\u4E0E Join \u7684 key \u662F\u5426\u53EF\u4EE5\u6392\u5E8F\u7B49\u6761\u4EF6\u6765\u9009\u62E9\u6700\u7EC8\u7684 Join \u7B56\u7565\uFF0C \u6700\u540E Spark \u4F1A\u5229\u7528\u9009\u62E9\u597D\u7684 Join \u7B56\u7565\u6267\u884C\u6700\u7EC8\u7684\u8BA1\u7B97\u3002</p><p>\u5F53\u524D Spark \u4E00\u5171\u652F\u6301\u4E94\u79CD Join \u7B56\u7565:</p><ul><li><strong>Broadcast hash join (BHJ)</strong></li><li>Shuffle hash join(SHJ)</li><li><strong>Shuffle sort merge join (SMJ)</strong></li><li>Shuffle-and-replicate nested loop join\uFF0C\u53C8\u79F0\u7B1B\u5361\u5C14\u79EF(Cartesian product join)</li><li>Broadcast nested loop join (BNLJ)</li></ul><p>\u5176\u4E2D BHJ \u548C SMJ \u8FD9\u4E24\u79CD Join \u7B56\u7565\u662F\u6211\u4EEC\u8FD0\u884C Spark \u4F5C\u4E1A\u6700\u5E38\u89C1\u7684\u3002</p><p>JoinSelection \u4F1A\u5148\u6839\u636E Join \u7684 Key \u4E3A\u7B49\u503C Join \u6765\u9009\u62E9 Broadcast hash join\u3001Shuffle hash join \u4EE5 \u53CA Shuffle sort merge join \u4E2D\u7684\u4E00\u4E2A; \u5982\u679C Join \u7684 Key \u4E3A\u4E0D\u7B49\u503C Join \u6216\u8005\u6CA1\u6709\u6307\u5B9A Join \u6761\u4EF6\uFF0C \u5219\u4F1A\u9009\u62E9 Broadcast nested loop join \u6216 Shuffle-and-replicate nested loop join\u3002</p><p>\u4E0D\u540C\u7684 Join \u7B56\u7565\u5728\u6267\u884C\u4E0A\u6548\u7387\u5DEE\u522B\u5F88\u5927\uFF0C\u4E86\u89E3\u6BCF\u79CD Join \u7B56\u7565\u7684\u6267\u884C\u8FC7\u7A0B\u548C\u9002\u7528\u6761\u4EF6\u662F\u5F88\u6709\u5FC5\u8981\u7684\u3002</p><h3 id="_1-1-broadcast-hash-join" tabindex="-1"><a class="header-anchor" href="#_1-1-broadcast-hash-join" aria-hidden="true">#</a> 1.1 Broadcast Hash Join</h3><p>Broadcast Hash Join \u7684\u5B9E\u73B0\u662F\u5C06\u5C0F\u8868\u7684\u6570\u636E\u5E7F\u64AD\u5230 Spark \u6240\u6709\u7684 Executor \u7AEF\uFF0C \u8FD9\u4E2A\u5E7F\u64AD\u8FC7\u7A0B\u548C\u6211\u4EEC\u81EA\u5DF1\u53BB\u5E7F\u64AD\u6570\u636E\u6CA1\u4EC0\u4E48\u533A\u522B:</p><ul><li>\u5229\u7528 <code>collect</code> \u7B97\u5B50\u5C06\u5C0F\u8868\u7684\u6570\u636E\u4ECE <code>Executor</code> \u7AEF\u62C9\u5230 <code>Driver</code> \u7AEF</li><li>\u5728 <code>Driver</code> \u7AEF\u8C03\u7528 <code>sparkContext.broadcast</code> \u5E7F\u64AD\u5230\u6240\u6709 <code>Executor</code> \u7AEF</li><li>\u5728 <code>Executor</code> \u7AEF\u4F7F\u7528\u5E7F\u64AD\u7684\u6570\u636E\u4E0E\u5927\u8868\u8FDB\u884C <code>Join</code> \u64CD\u4F5C(\u5B9E\u9645\u4E0A\u662F\u6267\u884Cmap\u64CD\u4F5C)</li></ul><p>\u8FD9\u79CD Join \u7B56\u7565\u907F\u514D\u4E86 Shuffle \u64CD\u4F5C\u3002<em>\u4E00\u822C\u800C\u8A00\uFF0CBroadcast Hash Join \u4F1A\u6BD4\u5176\u4ED6 Join \u7B56\u7565\u6267\u884C\u7684\u8981\u5FEB\u3002</em></p><p><img src="'+a+'" alt="BroadCastHashJoin\u793A\u610F\u56FE"></p><p>\u4F7F\u7528\u8FD9\u79CD Join \u7B56\u7565\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6:</p><ul><li>\u5C0F\u8868\u7684\u6570\u636E\u5FC5\u987B\u5F88\u5C0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>spark.sql.autoBroadcastJoinThreshold</code> \u53C2\u6570\u6765\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u662F 10MB</li><li>\u5982\u679C\u5185\u5B58\u6BD4\u8F83\u5927\uFF0C\u53EF\u4EE5\u5C06\u9608\u503C\u9002\u5F53\u52A0\u5927</li><li>\u5C06 <code>spark.sql.autoBroadcastJoinThreshold</code> \u53C2\u6570\u8BBE\u7F6E\u4E3A -1\uFF0C\u53EF\u4EE5\u5173\u95ED\u8FD9\u79CD\u8FDE\u63A5( Join )\u65B9\u5F0F</li><li>\u53EA\u80FD\u7528\u4E8E\u7B49\u503C Join\uFF0C\u4E0D\u8981\u6C42\u53C2\u4E0E Join \u7684 keys \u53EF\u6392\u5E8F</li></ul><h3 id="_1-2-shuffle-hash-join" tabindex="-1"><a class="header-anchor" href="#_1-2-shuffle-hash-join" aria-hidden="true">#</a> 1.2 Shuffle Hash Join</h3><p>\u5F53\u8868\u4E2D\u7684\u6570\u636E\u6BD4\u8F83\u5927\uFF0C\u53C8\u4E0D\u9002\u5408\u4F7F\u7528\u5E7F\u64AD\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 Shuffle Hash Join\u3002</p><p>Shuffle Hash Join \u540C\u6837\u662F\u5728\u5927\u8868\u548C\u5C0F\u8868\u8FDB\u884C Join \u7684\u65F6\u5019\u9009\u62E9\u7684\u4E00\u79CD\u7B56\u7565\u3002 \u5B83\u7684\u8BA1\u7B97\u601D\u60F3\u662F: \u628A\u5927\u8868\u548C\u5C0F\u8868\u6309\u7167\u76F8\u540C\u7684\u5206\u533A\u7B97\u6CD5\u548C\u5206\u533A\u6570\u8FDB\u884C\u5206\u533A(\u6839\u636E\u53C2\u4E0E Join \u7684 keys \u8FDB\u884C\u5206\u533A)\uFF0C \u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86 hash \u503C\u4E00\u6837\u7684\u6570\u636E\u90FD\u5206\u53D1\u5230\u540C\u4E00\u4E2A\u5206\u533A\u4E2D\uFF0C\u7136\u540E\u5728\u540C\u4E00\u4E2A Executor \u4E2D\uFF0C \u4E24\u5F20\u8868 hash \u503C\u4E00\u6837\u7684\u5206\u533A\u5C31\u53EF\u4EE5\u5728\u672C\u5730\u8FDB\u884C hash Join \u4E86\u3002\u5728\u8FDB\u884C Join \u4E4B\u524D\uFF0C\u8FD8\u4F1A\u5BF9\u5C0F\u8868\u7684\u5206\u533A\u6784\u5EFA Hash Map\u3002</p><p><em>Shuffle hash join \u5229\u7528\u4E86\u5206\u6CBB\u601D\u60F3\uFF0C\u628A\u5927\u95EE\u9898\u62C6\u89E3\u6210\u5C0F\u95EE\u9898\u53BB\u89E3\u51B3\u3002</em></p><p><img src="'+e+'" alt="ShuffleHashJoin"></p><p>\u8981\u542F\u7528 Shuffle Hash Join \u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6:</p><ul><li>\u4EC5\u652F\u6301\u7B49\u503C Join\uFF0C\u4E0D\u8981\u6C42\u53C2\u4E0E Join \u7684 Keys \u53EF\u6392\u5E8F</li><li><code>spark.sql.join.preferSortMergeJoin</code> \u53C2\u6570\u5FC5\u987B\u8BBE\u7F6E\u4E3A false\uFF0C\u53C2\u6570\u662F\u4ECE Spark 2.0.0 \u7248\u672C\u5F15\u5165\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u4E5F\u5C31\u662F\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u9009\u62E9 Sort Merge Join</li><li>\u5C0F\u8868\u7684\u5927\u5C0F(<code>plan.stats.sizeInBytes</code>)\u5FC5\u987B\u5C0F\u4E8E <code>spark.sql.autoBroadcastJoinThreshold * spark.sql.shuffle.partitions(\u9ED8\u8BA4\u503C 200)</code></li><li>\u800C\u4E14\u5C0F\u8868\u5927\u5C0F(<code>stats.sizeInBytes)</code>\u7684\u4E09\u500D\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u5927\u8868\u7684\u5927\u5C0F(<code>stats.sizeInBytes</code>)\uFF0C\u4E5F\u5C31\u662F <code>a.stats.sizeInBytes * 3 &lt; = b.stats.sizeInBytes</code></li></ul><h3 id="_1-3-shuffle-sort-merge-join" tabindex="-1"><a class="header-anchor" href="#_1-3-shuffle-sort-merge-join" aria-hidden="true">#</a> 1.3 Shuffle Sort Merge Join</h3><p>\u524D\u9762\u4E24\u79CD Join \u7B56\u7565\u5BF9\u8868\u7684\u5927\u5C0F\u90FD\u6709\u6761\u4EF6\u7684\uFF0C\u5982\u679C\u53C2\u4E0E Join \u7684\u8868\u90FD\u5F88\u5927\uFF0C\u8FD9\u65F6\u5019\u5C31\u5F97\u8003\u8651\u7528 Shuffle Sort Merge Join \u4E86\u3002</p><p>Shuffle Sort Merge Join \u7684\u5B9E\u73B0\u601D\u60F3:</p><ul><li>\u5C06\u4E24\u5F20\u8868\u6309\u7167 join key \u8FDB\u884Cshuffle\uFF0C\u4FDD\u8BC1join key\u503C\u76F8\u540C\u7684\u8BB0\u5F55\u4F1A\u88AB\u5206\u5728\u76F8\u5E94\u7684\u5206\u533A</li><li>\u5BF9\u6BCF\u4E2A\u5206\u533A\u5185\u7684\u6570\u636E\u8FDB\u884C\u6392\u5E8F</li><li>\u6392\u5E8F\u540E\u518D\u5BF9\u76F8\u5E94\u7684\u5206\u533A\u5185\u7684\u8BB0\u5F55\u8FDB\u884C\u8FDE\u63A5</li></ul><p>\u65E0\u8BBA\u5206\u533A\u6709\u591A\u5927\uFF0CSort Merge Join\u90FD\u4E0D\u7528\u628A\u4E00\u4FA7\u7684\u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\uFF0C\u800C\u662F\u5373\u7528\u5373\u4E22;\u56E0\u4E3A\u4E24\u4E2A\u5E8F\u5217\u90FD\u6709\u5E8F\u3002 \u4ECE\u5934\u904D\u5386\uFF0C\u78B0\u5230key\u76F8\u540C\u7684\u5C31\u8F93\u51FA\uFF0C\u5982\u679C\u4E0D\u540C\uFF0C\u5DE6\u8FB9\u5C0F\u5C31\u7EE7\u7EED\u53D6\u5DE6\u8FB9\uFF0C\u53CD\u4E4B\u53D6\u53F3\u8FB9\u3002\u4ECE\u800C\u5927\u5927\u63D0\u9AD8\u4E86\u5927\u6570\u636E\u91CF\u4E0Bsql join\u7684\u7A33\u5B9A\u6027\u3002</p><p><img src="'+t+`" alt="ShuffleSortMergeJoin\u793A\u610F\u56FE"></p><p>\u8981\u542F\u7528 Shuffle Sort Merge Join \u5FC5\u987B\u6EE1\u8DB3\u6761\u4EF6: \u4EC5\u652F\u6301\u7B49\u503C Join\uFF0C\u5E76\u4E14\u8981\u6C42\u53C2\u4E0E Join \u7684 Keys \u53EF\u6392\u5E8F</p><h3 id="_1-4-cartesian-product-join" tabindex="-1"><a class="header-anchor" href="#_1-4-cartesian-product-join" aria-hidden="true">#</a> 1.4 Cartesian product join</h3><p>\u5982\u679C Spark \u4E2D\u4E24\u5F20\u53C2\u4E0E Join \u7684\u8868\u6CA1\u6307\u5B9A\u8FDE\u63A5\u6761\u4EF6\uFF0C\u90A3\u4E48\u4F1A\u4EA7\u751F Cartesian product join\uFF0C \u8FD9\u4E2A Join \u5F97\u5230\u7684\u7ED3\u679C\u5176\u5B9E\u5C31\u662F\u4E24\u5F20\u8868\u884C\u6570\u7684\u4E58\u79EF\u3002</p><h3 id="_1-5-broadcast-nested-loop-join" tabindex="-1"><a class="header-anchor" href="#_1-5-broadcast-nested-loop-join" aria-hidden="true">#</a> 1.5 Broadcast nested loop join</h3><p>\u53EF\u4EE5\u628A Broadcast nested loop join \u7684\u6267\u884C\u770B\u505A\u4E0B\u9762\u7684\u8BA1\u7B97:</p><div class="language-scala ext-scala line-numbers-mode"><pre class="language-scala"><code><span class="token keyword">for</span> record_1 in relation_1<span class="token operator">:</span>
  <span class="token keyword">for</span> record_2 in relation_2<span class="token operator">:</span>
    # join condition is executed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA Broadcast nested loop join \u5728\u67D0\u4E9B\u60C5\u51B5\u4F1A\u5BF9\u67D0\u5F20\u8868\u91CD\u590D\u626B\u63CF\u591A\u6B21\uFF0C\u6548\u7387\u975E\u5E38\u4F4E\u4E0B\u3002 \u4ECE\u540D\u5B57\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u79CD join \u4F1A\u6839\u636E\u76F8\u5173\u6761\u4EF6\u5BF9\u5C0F\u8868\u8FDB\u884C\u5E7F\u64AD\uFF0C\u4EE5\u51CF\u5C11\u8868\u7684\u626B\u63CF\u6B21\u6570\u3002</p><p>Broadcast nested loop join \u652F\u6301\u7B49\u503C\u548C\u4E0D\u7B49\u503C Join\uFF0C\u652F\u6301\u6240\u6709\u7684 Join \u7C7B\u578B\u3002</p><h2 id="_2-sql\u89E3\u6790\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-sql\u89E3\u6790\u8FC7\u7A0B" aria-hidden="true">#</a> 2. SQL\u89E3\u6790\u8FC7\u7A0B</h2><p>Spark SQL \u53EF\u4EE5\u8BF4\u662F Spark \u4E2D\u7684\u7CBE\u534E\u90E8\u5206\u3002\u539F\u6765\u57FA\u4E8E RDD \u6784\u5EFA\u5927\u6570\u636E\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u91CD\u5FC3\u5728\u5411 DataSet \u8F6C\u79FB\uFF0C \u539F\u6765\u57FA\u4E8E RDD \u5199\u7684\u4EE3\u7801\u4E5F\u5728\u8FC1\u79FB\u3002\u4F7F\u7528 Spark SQL \u7F16\u7801\u597D\u5904 \u662F\u975E\u5E38\u5927\u7684\uFF0C\u5C24\u5176\u662F\u5728\u6027\u80FD\u65B9\u9762\uFF0C\u6709\u5F88\u5927\u63D0\u5347\u3002</p><p>Spark SQL \u4E2D\u5404\u79CD\u5185\u5D4C\u7684\u6027\u80FD\u4F18\u5316\u6BD4 \u5199 RDD \u9075\u5B88\u5404\u79CD\u6700\u4F73\u5B9E\u8DF5\u66F4\u9760\u8C31\u7684\uFF0C\u5C24\u5176\u5BF9\u65B0\u624B\u6765\u8BF4\u3002 \u5982\u5148 filter \u64CD\u4F5C\u518D map \u64CD\u4F5C\uFF0CSpark SQL \u4E2D\u4F1A\u81EA\u52A8\u8FDB\u884C\u8C13\u8BCD\u4E0B\u63A8; Spark SQL\u4E2D\u4F1A\u81EA\u52A8\u4F7F\u7528 broadcast join \u6765\u5E7F\u64AD\u5C0F\u8868\uFF0C\u628A shuffle join \u8F6C\u5316\u4E3A map join \u7B49\u7B49\u3002</p><p>Spark SQL\u5BF9SQL\u8BED\u53E5\u7684\u5904\u7406\u548C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7C7B\u4F3C\uFF0C\u5373\u8BCD\u6CD5/\u8BED\u6CD5\u89E3\u6790\u3001\u7ED1\u5B9A\u3001\u4F18\u5316\u3001\u6267\u884C\u3002 Spark SQL\u4F1A\u5148\u5C06SQL\u8BED\u53E5\u89E3\u6790\u6210\u4E00\u68F5\u6811\uFF0C\u7136\u540E\u4F7F\u7528\u89C4\u5219(Rule)\u5BF9Tree\u8FDB\u884C\u7ED1\u5B9A\u3001\u4F18\u5316\u7B49\u5904\u7406\u8FC7\u7A0B\u3002</p><p>Spark SQL\u7531Core\u3001Catalyst\u3001Hive\u3001Hive-ThriftServer\u56DB\u90E8\u5206\u6784\u6210:</p><ul><li>Core: \u8D1F\u8D23\u5904\u7406\u6570\u636E\u7684\u8F93\u5165\u548C\u8F93\u51FA\uFF0C\u5982\u83B7\u53D6\u6570\u636E\uFF0C\u67E5\u8BE2\u7ED3\u679C\u8F93\u51FA\u6210DataFrame\u7B49</li><li>Catalyst: \u8D1F\u8D23\u5904\u7406\u6574\u4E2A\u67E5\u8BE2\u8FC7\u7A0B\uFF0C\u5305\u62EC\u89E3\u6790\u3001\u7ED1\u5B9A\u3001\u4F18\u5316\u7B49</li><li>Hive: \u8D1F\u8D23\u5BF9Hive\u6570\u636E\u8FDB\u884C\u5904\u7406</li><li>Hive-ThriftServer: \u4E3B\u8981\u7528\u4E8E\u5BF9Hive\u7684\u8BBF\u95EE</li></ul><p><img src="`+o+'" alt="1"></p><p><img src="'+p+`" alt="2"></p><p>Spark SQL \u7684\u4EE3\u7801\u590D\u6742\u5EA6\u662F\u95EE\u9898\u7684\u672C\u8D28\u590D\u6742\u5EA6\u5E26\u6765\u7684\uFF0CSpark SQL\u4E2D\u7684 Catalyst \u6846\u67B6\u5927\u90E8\u5206\u903B\u8F91\u662F\u5728\u4E00\u4E2A Tree \u7C7B\u578B\u7684\u6570\u636E\u7ED3\u6784\u4E0A\u505A\u5404\u79CD\u6298\u817E\uFF0C \u57FA\u4E8E Scala \u6765\u5B9E\u73B0\u8FD8\u662F\u5F88\u4F18\u96C5\u7684\uFF0CScala \u7684\u504F\u51FD\u6570\u548C\u5F3A\u5927\u7684 Case \u6B63\u5219\u5339\u914D\uFF0C\u8BA9\u6574\u4E2A\u4EE3\u7801\u770B\u8D77\u6765\u975E\u5E38\u4F18\u96C5\u3002</p><p>SparkSession \u662F\u7F16\u5199 Spark \u5E94\u7528\u4EE3\u7801\u7684\u5165\u53E3\uFF0C\u542F\u52A8\u4E00\u4E2A <code>spark-shell</code> \u4F1A\u63D0\u4F9B\u7ED9\u4F60\u4E00\u4E2A\u521B\u5EFA <code>SparkSession</code>\uFF0C \u8FD9\u4E2A\u5BF9\u8C61\u662F\u6574\u4E2A <code>Spark</code> \u5E94\u7528\u7684\u8D77\u59CB\u70B9\u3002\u4EE5\u4E0B\u662F <code>SparkSession</code> \u7684\u4E00\u4E9B\u91CD\u8981\u7684\u53D8\u91CF\u548C\u65B9\u6CD5:</p><table><thead><tr><th>\u7C7B</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td><code>catalog</code></td><td>\u901A\u8FC7\u5BF9\u8FD9\u4E2A\u7C7B\u53EF\u4EE5\u64CD\u4F5C\u5143\u6570\u636E\uFF0C\u5BF9\u6570\u636E\u5E93\u3001\u8868\u3001\u51FD\u6570\u8FDB\u884C\u589E\u5220\u6539\u67E5\uFF0C\u5185\u90E8\u4F7F\u7528 SessionCatalog \u5B8C\u6210\u5177\u4F53\u64CD\u4F5C</td></tr><tr><td><code>table</code></td><td>\u628A\u4E00\u4E2A table \u6216 view \u5305\u88C5\u4E3A\u4E00\u4E2A DataFrame \u8FDB\u884C\u540E\u7EED\u64CD\u4F5C</td></tr><tr><td><code>emptyDataset</code>/<code>emptyDataFrame</code></td><td>\u521B\u5EFA\u7A7A\u7684 Dataset \u6216 DataFrame</td></tr><tr><td><code>sql</code></td><td>\u6267\u884C sql\uFF0C\u8FD4\u56DE\u4E00\u4E2A DataFrame</td></tr><tr><td><code>read</code> \u6216 <code>readStream</code></td><td>\u83B7\u53D6\u6570\u636E\u8BFB\u53D6\u5668\uFF0C\u8BFB\u53D6\u5404\u79CD\u683C\u5F0F\u7684\u6570\u636E</td></tr><tr><td><strong><code>sessionState</code></strong></td><td>\u7EF4\u62A4\u4E86\u5F53\u524D session \u4F7F\u7528\u7684\u6240\u6709\u72B6\u6001\u6570\u636E; \u8FD8\u5305\u62EC SQL \u89E3\u6790\u5668\u3001\u5206\u6790\u5668\u3001\u4F18\u5316\u5668\u7B49</td></tr></tbody></table><p>\u6D4B\u8BD5\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-scala ext-scala line-numbers-mode"><pre class="language-scala"><code><span class="token keyword">object</span> Plan <span class="token punctuation">{</span>
  <span class="token keyword">def</span> main<span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> spark <span class="token operator">=</span> SparkSession
      <span class="token punctuation">.</span>builder<span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>appName<span class="token punctuation">(</span><span class="token string">&quot;Plan&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>master<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>
    spark<span class="token punctuation">.</span>sparkContext<span class="token punctuation">.</span>setLogLevel<span class="token punctuation">(</span><span class="token string">&quot;warn&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">import</span> <span class="token namespace">spark<span class="token punctuation">.</span>implicits<span class="token punctuation">.</span></span>_
    Seq<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;zhansan&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toDF<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;stu&quot;</span><span class="token punctuation">)</span>

    Seq<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;chinese&quot;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;english&quot;</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;chinese&quot;</span><span class="token punctuation">,</span> <span class="token number">86</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;english&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;chinese&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;english&quot;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span>toDF<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;subject&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;score&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;score&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">val</span> df<span class="token operator">:</span> DataFrame <span class="token operator">=</span> spark<span class="token punctuation">.</span>sql<span class="token punctuation">(</span>
      <span class="token triple-quoted-string string">&quot;&quot;&quot;
        |select sum(v), name
        |from (select stu.id, 100 + 10 + score.score as v, name
        |       from stu join score
        |       where stu.id = score.id and stu.age &gt;= 11) tmp
        |group by name
        |&quot;&quot;&quot;</span><span class="token punctuation">.</span>stripMargin<span class="token punctuation">)</span>
    df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6253\u5370\u6267\u884C\u8BA1\u5212</span>
    println<span class="token punctuation">(</span>df<span class="token punctuation">.</span>queryExecution<span class="token punctuation">)</span>
    println<span class="token punctuation">(</span>df<span class="token punctuation">.</span>queryExecution<span class="token punctuation">.</span>optimizedPlan<span class="token punctuation">)</span>
    spark<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><code>queryExecution</code> \u5C31\u662F\u6574\u4E2A\u6267\u884C\u8BA1\u5212\u7684\u6267\u884C\u5F15\u64CE\uFF0C\u91CC\u9762\u6709\u6267\u884C\u8FC7\u7A0B\u4E2D\u5404\u4E2A\u4E2D\u95F4\u8FC7\u7A0B\u53D8\u91CF\uFF0C\u6574\u4E2A\u6267\u884C\u6D41\u7A0B\u5982\u4E0B:</p><p><img src="`+c+`" alt="QueryExecution\u6267\u884C\u6D41\u7A0B"></p><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\u7684 SQL \u8BED\u53E5\u7ECF\u8FC7 Parser \u89E3\u6790\u540E\u5C31\u4F1A\u53D8\u6210\u4E00\u4E2A\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u5BF9\u5E94\u89E3\u6790\u540E\u7684\u903B\u8F91\u8BA1\u5212 AST \u4E3A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>== Parsed Logical Plan ==
&#39;Aggregate [&#39;name], [unresolvedalias(&#39;sum(&#39;v), None), &#39;name]
+- &#39;SubqueryAlias \`tmp\`
   +- &#39;Project [&#39;stu.id, ((100 + 10) + &#39;score.score) AS v#26, &#39;name]
      +- &#39;Filter ((&#39;stu.id = &#39;score.id) &amp;&amp; (&#39;stu.age &gt;= 11))
         +- &#39;Join Inner
            :- &#39;UnresolvedRelation \`stu\`
            +- &#39;UnresolvedRelation \`score\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u6700\u4E0B\u9762\u7684\u6700\u65B0\u6267\u884C\u3002</p></blockquote><ul><li><code>Aggregate [&#39;name]</code> \u5BF9 <code>name</code> \u505A\u805A\u5408\uFF1B<code>[unresolvedalias(&#39;sum(&#39;v), None), &#39;name]</code> \u6CA1\u6709\u505A\u89E3\u6790\uFF0C\u5E76\u4E14\u4F7F\u7528\u7684\u662F symbol \u8868\u793A\u5217\u540D</li><li><code>&#39;SubqueryAlias tmp</code> \u5B50\u67E5\u8BE2</li><li><code>Project</code> \u6267\u884C\u8BA1\u5212\u4E2D\uFF0C\u4EE3\u8868\u6295\u5F71\u3002(\u6709\u4E9B\u65F6\u5019\u4E5F\u53EB <code>Projection</code>)</li></ul><blockquote><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u4E09\u79CD\u6700\u57FA\u672C\u7684\u64CD\u4F5C\uFF1A\u9009\u3001\u6295\u3001\u8FDE</p></blockquote><ul><li>\u9009\uFF1A\u53EA\u9009\u4E2D\u90E8\u5206<em>\u884C</em>\u6570\u636E</li><li>\u8FDE\uFF1A\u6839\u636E key \u5C06\u6570\u636E\u884C\u8FDB\u884C\u8FDE\u63A5</li><li>\u6295\uFF1A\u53EA\u9700\u8981\u90E8\u5206<em>\u5217</em>\u7684\u6570\u636E</li></ul><blockquote><p>\u4E2A\u4EBA\u611F\u60F3\uFF1A\u5176\u5B9E\u4E0A\u9762\u7684\u6267\u884C\u8BA1\u5212\u4E2D\u7B2C\u4E09\u884C\u5C31\u662F\u6295\u3001\u7B2C\u56DB\u884C\u5C31\u662F\u9009\u3001\u7B2C\u4E94\u884C\u5C31\u662F\u8FDE\u3002\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\u5427\uFF1F</p></blockquote><p><strong>\u57FA\u672C AST \u793A\u610F\u56FE</strong></p><p><img src="`+l+`" alt="\u57FA\u672C AST \u793A\u610F\u56FE"></p><p>\u5176\u4E2D\u8FC7\u6EE4\u6761\u4EF6\u53D8\u4E3A\u4E86 Filter \u8282\u70B9\uFF0C\u8FD9\u4E2A\u8282\u70B9\u662F UnaryNode(\u4E00\u5143\u8282\u70B9) \u7C7B\u578B\uFF0C\u53EA\u6709\u4E00\u4E2A\u5B69\u5B50\u3002</p><p>\u4E24\u4E2A\u8868\u4E2D\u7684\u6570\u636E\u53D8\u4E3A\u4E86 UnresolvedRelation \u8282\u70B9\uFF0C\u8282\u70B9\u7C7B\u578B\u4E3A LeafNode\uFF0C\u5373\u53F6\u5B50\u8282\u70B9\uFF0C JOIN \u64CD\u4F5C\u4E3A\u8282\u70B9\uFF0C\u8FD9\u4E2A\u662F\u4E00\u4E2A BinaryNode \u8282\u70B9\uFF0C\u6709\u4E24\u4E2A\u5B69\u5B50\u3002</p><p>\u4EE5\u4E0A\u8282\u70B9\u90FD\u662F LogicalPlan (\u903B\u8F91\u6267\u884C\u8BA1\u5212)\u7C7B\u578B\u7684\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\u7684 Operator\uFF0CSparkSQL \u5BF9\u5404\u79CD\u64CD\u4F5C\u5B9A\u4E49\u4E86\u5404\u79CD Operator\u3002</p><blockquote><p>\u8868\u683C...</p></blockquote><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>Project(projectList:Seq[NameExpression],child:LogicalPlan)</code></td><td>Select\u8BED\u53E5\u8F93\u51FA\u64CD\u4F5C\uFF0C\u5176\u4E2DprojectList\u4F5C\u4E3A\u8F93\u51FA\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u90FD\u4E3A\u4E00\u4E2AExpression\uFF0C\u53EF\u80FD\u662FStar\u6216\u8005\u590D\u6742\u7684Expression</td></tr><tr><td><code>Filter(condition:Expression,child:LogicalPlan)</code></td><td>\u6839\u636Econdition\u5BF9child\u8F93\u5165\u7684Rows\u8FDB\u884C\u8FC7\u6EE4</td></tr><tr><td><code>Join(left:LogicalPlan,right:LogicalPlan, joinType:JoinType,condition[Expression])</code></td><td>left \u548Cright\u7684\u8F93\u51FA\u7ED3\u679C\u8FDB\u884Cjoin\u64CD\u4F5C</td></tr><tr><td><code>Intersect(left:LogicalPlan,right:LogicalPlan)</code></td><td>left\u548Cright\u4E24\u4E2APlan\u8F93\u51FA\u7684rows\u8FDB\u884C\u53D6\u4EA4\u96C6\u8FD0\u7B97</td></tr><tr><td><code>Except(left:LogicalPlan,right:LogicalPlan)</code></td><td>left\u8BA1\u7B97\u7ED3\u679C\u4E2D\u5254\u9664right\u4E2D\u7684\u8BA1\u7B97\u7ED3\u679C</td></tr><tr><td><code>Union(children:Seq[LogicalPlan])</code></td><td>\u5C06\u4E00\u7EC4Childs\u7684\u8BA1\u7B97\u7ED3\u679C\u8FDB\u884CUnion\u8054\u5408</td></tr><tr><td><code>Sort(order:Seq[SortORder],global:Boolean,child:LogicalPlan)</code></td><td>\u5BF9child\u7684\u8F93\u51FA\u8FDB\u884Csort\u6392\u5E8F</td></tr><tr><td><code>Repartition (numPartitions:Int,shuffle:Boolean,child:LogicalPlan)</code></td><td>\u5BF9child\u8F93\u51FA\u7684\u6570\u636E\u8FDB\u884C\u91CD\u65B0\u5206\u533A\u64CD\u4F5C</td></tr><tr><td><code>InsertIntoTable (table:LogicalPlan,child:LogicalPlan, \u2026\u2026)</code></td><td>\u5C06child\u8F93\u51FA\u7684rows\u8F93\u51FA\u5230talbe\u4E2D</td></tr><tr><td><code>Distinct (child:LogicalPlan)</code></td><td>\u5BF9child\u8F93\u51FA\u7684rows\u53BB\u91CD\u64CD\u4F5C</td></tr><tr><td><code>GlobalLimit(limitExpr:Expression,child:LogicalPlan)</code></td><td>\u5BF9child\u8F93\u51FA\u7684\u6570\u636E\u8FDB\u884Climit\u9650\u5236</td></tr><tr><td><code>Sample(child\uFF1ALogicalPlan\uFF0C\u2026\u2026)</code></td><td>\u6839\u636E\u53C2\u6570\uFF0C\u4ECEchild\u8F93\u51FA\u7684rows\u8FDB\u884C\u4E00\u5B9A\u7684\u6BD4\u4F8B\u53D6\u6837</td></tr><tr><td><code>Aggerate (groupingExpressions:Seq[Expression] aggerateExpressions:Seq[NamedExpression], child:LogicalPlan)</code></td><td>\u5BF9child\u8F93\u51FA\u7684row\u8FDB\u884C aggregate \u64CD\u4F5C\u3002\u6BD4\u5982 groupby</td></tr></tbody></table><p>\u8FD9\u4E9B <code>Operator</code> \u7EC4\u6210\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\u5C31\u662F\u6574\u4E2A <code>Catalyst</code> \u4F18\u5316\u7684\u57FA\u7840\uFF0C<code>Catalyst</code> \u4F18\u5316\u5668\u4F1A\u5728\u8FD9\u4E2A\u6811\u4E0A\u9762\u8FDB\u884C\u5404\u79CD\u6298\u817E\uFF0C\u628A\u6811\u4E0A\u9762\u7684\u8282\u70B9\u632A\u6765\u632A\u53BB\u6765\u8FDB\u884C\u4F18\u5316\u3002</p><hr><p>\u7ECF\u8FC7 Parser \u6709\u4E86\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u4F46\u662F\u5E76\u4E0D\u77E5\u9053 score\uFF0Csum \u8FD9\u4E9B\u4E1C\u897F\u662F\u5565\uFF0C\u6240\u4EE5\u5C31\u9700\u8981 analyzer \u6765\u5B9A\u4F4D\u3002</p><p>analyzer \u4F1A\u628A AST \u4E0A\u6240\u6709 Unresolved \u7684\u4E1C\u897F\u90FD\u8F6C\u53D8\u4E3A resolved \u72B6\u6001\uFF0CSparkSQL \u6709\u5F88\u591A resolve \u89C4\u5219:</p><ul><li><code>ResolverRelations</code> \u89E3\u6790\u8868(\u5217)\u7684\u57FA\u672C\u7C7B\u578B\u7B49\u4FE1\u606F</li><li><code>ResolveFunctions</code> \u89E3\u6790\u51FA\u6765\u51FD\u6570\u7684\u57FA\u672C\u4FE1\u606F</li><li><code>ResolveReferences</code> \u89E3\u6790\u5F15\u7528\uFF0C\u901A\u5E38\u662F\u89E3\u6790\u5217\u540D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>== Analyzed Logical Plan ==
sum(v): bigint, name: string
Aggregate [name#8], [sum(cast(v#26 as bigint)) AS sum(v)#28L, name#8]
+- SubqueryAlias \`tmp\`
   +- Project [id#7, ((100 + 10) + score#22) AS v#26, name#8]
      +- Filter ((id#7 = id#20) &amp;&amp; (age#9 &gt;= 11))
         +- Join Inner
            :- SubqueryAlias \`stu\`
            :  +- Project [_1#3 AS id#7, _2#4 AS name#8, _3#5 AS age#9]
            :     +- LocalRelation [_1#3, _2#4, _3#5]
            +- SubqueryAlias \`score\`
               +- Project [_1#16 AS id#20, _2#17 AS subject#21, _3#18 AS score#22]
                  +- LocalRelation [_1#16, _2#17, _3#18]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>\u5206\u6790\u540E\u7684\u6267\u884C\u8BA1\u5212\u793A\u610F\u56FE</strong></p><p><img src="`+i+'" alt="\u903B\u8F91\u6267\u884C\u8BA1\u52122"></p><hr><p>\u4E0B\u9762\u8981\u8FDB\u884C\u903B\u8F91\u4F18\u5316\u4E86\uFF0C\u5E38\u89C1\u7684\u903B\u8F91\u4F18\u5316\u6709:</p><p><img src="'+r+'" alt="\u5E38\u89C1\u4F18\u5316\u903B\u8F911"></p><p><img src="'+u+`" alt="\u5E38\u89C1\u4F18\u5316\u903B\u8F912"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>== Optimized Logical Plan ==
Aggregate [name#8], [sum(cast(v#26 as bigint)) AS sum(v)#28L, name#8]
+- Project [(110 + score#22) AS v#26, name#8]
   +- Join Inner, (id#7 = id#20)
      :- LocalRelation [id#7, name#8]
      +- LocalRelation [id#20, score#22]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u91CC\u7528\u5230\u7684\u4F18\u5316\u6709: \u8C13\u8BCD\u4E0B\u63A8(Push Down Predicate)\u3001\u5E38\u91CF\u6298\u53E0(Constant Folding)\u3001\u5B57\u6BB5\u88C1\u526A(Columning Pruning)</p><blockquote><p>\u522B\u88AB\u8FD9\u4E9B\u9AD8\u7EA7\u7684\u8BCD\u5413\u4F4F\u4E86\uFF01\u8C13\u8BCD\u4E0B\u63A8\u4E3E\u4F8B\uFF1A\u5148 Filter \u518D Join; \u5E38\u91CF\u6298\u53E0\u4E3E\u4F8B\uFF1A\u628A 100 + 10 \u5148\u8BA1\u7B97\u597D\u7684 110\uFF1B\u5B57\u6BB5\u88C1\u526A\u4E3E\u4F8B\uFF1A\u6254\u6389\u6700\u7EC8\u7528\u4E0D\u5230\u7684\u5217.</p></blockquote><p><strong>\u4F18\u5316\u540E\u7684\u903B\u8F91\u6267\u884C\u8BA1\u5212\u793A\u610F\u56FE</strong></p><p><img src="`+d+'" alt="\u6267\u884C\u4F18\u5316"></p><hr><p>\u505A\u5B8C\u903B\u8F91\u4F18\u5316\uFF0C\u8FD8\u9700\u8981\u5148\u8F6C\u6362\u4E3A\u7269\u7406\u6267\u884C\u8BA1\u5212\uFF0C\u5C06\u903B\u8F91\u4E0A\u53EF\u884C\u7684\u6267\u884C\u8BA1\u5212\u53D8\u4E3A Spark \u53EF\u4EE5\u771F\u6B63\u6267\u884C\u7684\u8BA1\u5212:</p><p><strong>\u7269\u7406\u8BA1\u5212\u793A\u610F\u56FE</strong></p><p><img src="'+k+`" alt="\u771F\u6B63\u7684\u6267\u884C\u8BA1\u5212"></p><p>SparkSQL \u628A\u903B\u8F91\u8282\u70B9\u8F6C\u6362\u4E3A\u4E86\u76F8\u5E94\u7684\u7269\u7406\u8282\u70B9\uFF0C \u6BD4\u5982 Join \u7B97\u5B50\uFF0CSpark \u6839\u636E\u4E0D\u540C\u573A\u666F\u4E3A\u8BE5\u7B97\u5B50\u5236\u5B9A\u4E86\u4E0D\u540C\u7684\u7B97\u6CD5\u7B56\u7565\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>== Physical Plan ==
*(2) HashAggregate(keys=[name#8], functions=[sum(cast(v#26 as bigint))], output=[sum(v)#28L, name#8])
+- Exchange hashpartitioning(name#8, 200)
   +- *(1) HashAggregate(keys=[name#8], functions=[partial_sum(cast(v#26 as bigint))], output=[name#8, sum#38L])
      +- *(1) Project [(110 + score#22) AS v#26, name#8]
         +- *(1) BroadcastHashJoin [id#7], [id#20], Inner, BuildLeft
            :- BroadcastExchange HashedRelationBroadcastMode(List(cast(input[0, int, false] as bigint)))
            :  +- LocalTableScan [id#7, name#8]
            +- LocalTableScan [id#20, score#22]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6570\u636E\u5728\u4E00\u4E2A\u4E00\u4E2A\u7684 plan \u4E2D\u6D41\u8F6C\uFF0C\u7136\u540E\u6BCF\u4E2A plan \u91CC\u9762\u8868\u8FBE\u5F0F\u90FD\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u5C31\u76F8\u5F53\u4E8E\u7ECF\u8FC7\u4E86\u4E00\u4E2A\u4E2A\u5C0F\u51FD\u6570\u7684\u8C03\u7528\u5904\u7406\uFF0C \u8FD9\u91CC\u9762\u6709\u5927\u91CF\u7684\u51FD\u6570\u8C03\u7528\u5F00\u9500\u3002</p><p>\u662F\u4E0D\u662F\u53EF\u4EE5\u628A\u8FD9\u4E9B\u5C0F\u51FD\u6570\u5185\u8054\u4E00\u4E0B\uFF0C\u5F53\u6210\u4E00\u4E2A\u5927\u51FD\u6570\uFF0CWholeStageCodegen \u5C31\u662F\u5E72\u8FD9\u4E8B\u7684\u3002</p><p>\u53EF\u4EE5\u770B\u5230\u6700\u7EC8\u6267\u884C\u8BA1\u5212\u6BCF\u4E2A\u8282\u70B9\u524D\u9762\u6709\u4E2A * \u53F7\uFF0C\u8BF4\u660E\u6574\u6BB5\u4EE3\u7801\u751F\u6210\u88AB\u542F\u7528\uFF0C Project\u3001BroadcastHashJoin\u3001HashAggregate \u8FD9\u4E00\u6BB5\u90FD\u542F\u7528\u4E86\u6574\u6BB5\u4EE3\u7801\u751F\u6210\uFF0C\u7EA7\u8054\u4E3A\u4E00\u4E2A\u5927\u51FD\u6570\u3002</p>`,92);function g(h,S){return m}var q=n(b,[["render",g],["__file","index.html.vue"]]);export{q as default};
