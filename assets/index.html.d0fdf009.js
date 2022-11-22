import{_ as s,c as a}from"./app.40df414d.js";const e={},n=a(`<h1 id="kafka-\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#kafka-\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> Kafka \u5B89\u88C5\u4E0E\u914D\u7F6E</h1><h2 id="_1-java-\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-java-\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> 1. Java \u73AF\u5883\u5B89\u88C5</h2><p>1\u3001\u4E0A\u4F20 <code>jdk-8u261-linux-x64.rpm</code> \u5230\u670D\u52A1\u5668\u5E76\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh jdk-8u261-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u8FD9\u79CD\u65B9\u5F0F\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230 <code>/usr/java/</code> \u76EE\u5F55\u4E0B</p></blockquote><ol start="2"><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vim/etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk1.8.0_261-amd64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin

<span class="token builtin class-name">source</span> /etc/profile
java -version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_2-zookeeper-\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper-\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> 2. Zookeeper \u5B89\u88C5\u914D\u7F6E</h2><ol><li>\u4E0A\u4F20 zookeeper-3.4.14.tar.gz \u5230\u670D\u52A1\u5668</li><li>\u89E3\u538B\u5230 <code>/opt/zmn/servers</code> \u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf zookeeper-3.4.14.tar.gz -C /opt/zmn/servers/
<span class="token builtin class-name">cd</span> /opt/zmn/servers/zookeeper-3.4.14/conf

<span class="token comment"># \u590D\u5236 zoo_sample.cfg \u547D\u540D\u4E3A zoo.cfg</span>
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
<span class="token comment"># \u7F16\u8F91zoo.cfg\u6587\u4EF6 </span>
<span class="token function">vim</span> zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>\u4FEE\u6539 Zookeeper \u4FDD\u5B58\u6570\u636E\u7684\u76EE\u5F55 <code>dataDir</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/var/zmn/zookeeper/data
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u7F16\u8F91 <code>/etc/profile</code></li></ol><ul><li>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF ZOO_LOG_DIR\uFF0C\u6307\u5B9AZookeeper\u4FDD\u5B58\u65E5\u5FD7\u7684\u4F4D\u7F6E;</li><li>ZOOKEEPER_PREFIX \u6307\u5411 Zookeeper \u7684\u89E3\u538B\u76EE\u5F55;</li><li>\u5C06 Zookeeper \u7684 bin \u76EE\u5F55\u6DFB\u52A0\u5230 PATH \u4E2D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_PREFIX</span><span class="token operator">=</span>/opt/zmn/servers/zookeeper-3.4.14
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ZOOKEEPER_PREFIX</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOO_LOG_DIR</span><span class="token operator">=</span>/var/zmn/zookeeper/log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5"><li>\u4F7F\u914D\u7F6E\u751F\u6548</li><li>\u9A8C\u8BC1</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-kafka-\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-kafka-\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> 3. Kafka \u5B89\u88C5\u4E0E\u914D\u7F6E</h2><p>1\u3001\u4E0A\u4F20 kafka_2.12-1.0.2.tgz \u5230\u670D\u52A1\u5668\u5E76\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxf kafka_2.12-1.0.2.tgz -C /opt/zmn/servers/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5E76\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">KAFKA_HOME</span><span class="token operator">=</span>/opt/zmn/servers/kafka_2.12-1.0.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$KAFKA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3\u3001\u914D\u7F6E <code>$KAFKA_HOME/config</code> \u4E2D\u7684 <code>server.properties</code> \u6587\u4EF6</p><p>Kafka \u8FDE\u63A5 Zookeeper \u7684\u5730\u5740\uFF0C\u6B64\u5904\u4F7F\u7528\u672C\u5730\u542F\u52A8\u7684 Zookeeper \u5B9E\u4F8B\uFF0C\u8FDE\u63A5\u5730\u5740\u662F <code>localhost:2181</code>\uFF0C\u540E\u9762\u7684 <code>myKafka</code> \u662F Kafka \u5728 Zookeeper \u4E2D\u7684\u6839\u8282\u70B9\u8DEF\u5F84</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zookeeper.connect<span class="token operator">=</span>localhost:2181/myKafka
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E kafka \u5B58\u50A8\u6301\u4E45\u5316\u6570\u636E\u7684\u76EE\u5F55 <code>log.dir=/var/zmn/kafka/kafka-logs</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /var/zmn/kafka/kafka-logs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4\u3001\u542F\u52A8Zookeeper</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zkServer.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>5\u3001\u786E\u8BA4 Zookeeper \u7684\u72B6\u6001</p><p>6\u3001\u542F\u52A8Kafka</p><p>\u8FDB\u5165 Kafka \u5B89\u88C5\u7684\u6839\u76EE\u5F55\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kafka-server-start.sh config/server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u542F\u52A8\u6210\u529F\uFF0C\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u6700\u540E\u4E00\u884C\u7684 <code>started</code> \u72B6\u6001</p></blockquote><p>7\u3001\u67E5\u770BZookeeper\u7684\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> /myKafka
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>8\u3001\u6B64\u65F6Kafka\u662F\u524D\u53F0\u6A21\u5F0F\u542F\u52A8\uFF0C\u8981\u505C\u6B62\uFF0C\u4F7F\u7528 <code>Ctrl+C</code>\u3002</p><p>\u5982\u679C\u8981\u540E\u53F0\u542F\u52A8\uFF0C\u4F7F\u7528\u547D\u4EE4: <code>kafka-server-start.sh -daemon config/server.properties</code></p><p>\u67E5\u770B Kafka \u7684\u540E\u53F0\u8FDB\u7A0B: <code>ps aux | grep kafka</code></p><p>\u505C\u6B62\u540E\u53F0\u8FD0\u884C\u7684 Kafka : <code>kafka-server-stop.sh</code></p><h2 id="_4-\u751F\u4EA7\u4E0E\u6D88\u8D39" tabindex="-1"><a class="header-anchor" href="#_4-\u751F\u4EA7\u4E0E\u6D88\u8D39" aria-hidden="true">#</a> 4. \u751F\u4EA7\u4E0E\u6D88\u8D39</h2><p>1\u3001<code>kafka-topics.sh</code> \u7528\u4E8E\u7BA1\u7406\u4E3B\u9898</p><blockquote><p>\u76F4\u63A5\u8F93\u5165 <code>kafka-topics.sh</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5E2E\u52A9; <code>--zookeeper &lt;String: urls&gt;</code> \u662F\u5FC5\u586B\u53C2\u6570</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u73B0\u6709\u7684\u4E3B\u9898</span>
kafka-topics.sh --list --zookeeper localhost:2181/myKafka

<span class="token comment"># \u521B\u5EFA\u4E3B\u9898\uFF0C\u8BE5\u4E3B\u9898\u5305\u542B\u4E00\u4E2A\u5206\u533A\uFF0C\u8BE5\u5206\u533A\u4E3A Leader \u5206\u533A\uFF0C\u5B83\u6CA1\u6709 Follower \u5206\u533A\u526F\u672C\u3002</span>
kafka-topics.sh --zookeeper localhost:2181/myKafka --create --topic topic_1 --partitions <span class="token number">1</span> --replication-factor <span class="token number">1</span>

<span class="token comment"># \u67E5\u770B\u5206\u533A\u4FE1\u606F</span>
kafka-topics.sh --zookeeper localhost:2181/myKafka --list

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u4E3B\u9898\u7684\u8BE6\u7EC6\u4FE1\u606F</span>
kafka-topics.sh --zookeeper localhost:2181/myKafka --describe --topic topic_1

<span class="token comment"># \u5220\u9664\u6307\u5B9A\u4E3B\u9898</span>
kafka-topics.sh --zookeeper localhost:2181/myKafka --delete --topic topic_1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>2\u3001<code>kafka-console-producer.sh</code> \u7528\u4E8E\u751F\u4EA7\u6D88\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542F\u751F\u4EA7\u8005</span>
kafka-console-producer.sh --topic topic_1 --broker-list localhost:9092
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3\u3001<code>kafka-console-consumer.sh</code> \u7528\u4E8E\u6D88\u8D39\u6D88\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542F\u6D88\u8D39\u8005</span>
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic_1

<span class="token comment"># \u5F00\u542F\u6D88\u8D39\u8005\u65B9\u5F0F\u4E8C\uFF0C\u4ECE\u5934\u6D88\u8D39\uFF0C\u4E0D\u6309\u7167\u504F\u79FB\u91CF\u6D88\u8D39</span>
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic_1 --from-beginning
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,48);function l(r,o){return n}var c=s(e,[["render",l],["__file","index.html.vue"]]);export{c as default};
