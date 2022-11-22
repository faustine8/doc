import{_ as r,r as l,o as u,a as t,b as n,d as e,w as p,F as b,e as s,c as m}from"./app.40df414d.js";const i={},c=n("h1",{id:"skywalking",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking","aria-hidden":"true"},"#"),s(" SkyWalking")],-1),o=n("h2",{id:"skywalking-\u5165\u95E8\u4E0E\u5B9E\u6218",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking-\u5165\u95E8\u4E0E\u5B9E\u6218","aria-hidden":"true"},"#"),s(" SkyWalking \u5165\u95E8\u4E0E\u5B9E\u6218")],-1),k=s("SkyWalking - \u7B80\u4ECB"),f=s("SkyWalking - \u5B89\u88C5\u914D\u7F6E"),g=s("SkyWalking - \u4F7F\u7528\u5B9E\u6218"),w=n("h2",{id:"skywalking-\u6E90\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking-\u6E90\u7801","aria-hidden":"true"},"#"),s(" SkyWalking \u6E90\u7801")],-1),d=s("(\u672A\u5B9A\u7A3F)SkyWalking - \u6E90\u7801 - javaagent"),j=m(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -javaagent:/opt/zmn/software/skywalking-agent/skywalking-agent.jar <span class="token punctuation">\\</span>
-Dskywalking.agent.service_name<span class="token operator">=</span>zmn-owl::zmn-owl-task <span class="token punctuation">\\</span>
-Dskywalking.collector.backend_service<span class="token operator">=</span><span class="token number">192.168</span>.99.23:11800 <span class="token punctuation">\\</span>
-Dskywalking.agent.instance_name<span class="token operator">=</span>zmn-owl-task@192.168.97.59 <span class="token punctuation">\\</span>
-Dskywalking.agent.is_open_debugging_class<span class="token operator">=</span>true <span class="token punctuation">\\</span>
-Dzmn.logging.file.dir<span class="token operator">=</span>/Users/faustine/Code/logs/owl/owl-task <span class="token punctuation">\\</span>
-jar zmn-owl-task.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table><thead><tr><th>TIME</th><th>docs.count</th><th>docs.deleted</th><th>store.size</th><th>pri.store.size</th></tr></thead><tbody><tr><td>10:43</td><td>25,135,606</td><td>0</td><td>25gb</td><td>25gb</td></tr><tr><td>10:53</td><td>26,181,346</td><td>0</td><td>23.7gb</td><td>23.7gb</td></tr><tr><td>11:03</td><td>27,248,767</td><td>0</td><td>24.7gb</td><td>24.7gb</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - zmn
<span class="token function">sudo</span> -s

ll -h /a/apps/apache-skywalking-apm-bin/logs/

<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-14-1.log

<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
<span class="token function">tail</span> -fn <span class="token number">500</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apm-canal-1.x-plugin-8.11.0.jar
apm-clickhouse-0.3.x-plugin-8.11.0.jar
apm-dubbo-2.7.x-plugin-8.11.0.jar
apm-dubbo-3.x-plugin-8.11.0.jar
apm-dubbo-plugin-8.11.0.jar
apm-elasticsearch-5.x-plugin-8.11.0.jar
apm-elasticsearch-6.x-plugin-8.11.0.jar
apm-elasticsearch-7.x-plugin-8.11.0.jar
apm-grpc-1.x-plugin-8.11.0.jar
apm-hbase-1.x-2.x-plugin-8.11.0.jar
apm-hikaricp-3.x-4.x-plugin-8.11.0.jar
apm-httpClient-4.x-plugin-8.11.0.jar
apm-httpasyncclient-4.x-plugin-8.11.0.jar
apm-httpclient-3.x-plugin-8.11.0.jar
apm-httpclient-5.x-plugin-8.11.0.jar
apm-httpclient-commons-8.11.0.jar
apm-jdbc-commons-8.11.0.jar
apm-jedis-2.x-plugin-8.11.0.jar
apm-jetty-client-9.0-plugin-8.11.0.jar
apm-jetty-client-9.x-plugin-8.11.0.jar
apm-jetty-server-9.x-plugin-8.11.0.jar
apm-kafka-commons-8.11.0.jar
apm-kafka-plugin-8.11.0.jar
apm-mongodb-2.x-plugin-8.11.0.jar
apm-mongodb-3.x-plugin-8.11.0.jar
apm-mongodb-4.x-plugin-8.11.0.jar
apm-mysql-5.x-plugin-8.11.0.jar
apm-mysql-6.x-plugin-8.11.0.jar
apm-mysql-8.x-plugin-8.11.0.jar
apm-mysql-commons-8.11.0.jar
apm-neo4j-4.x-plugin-8.11.0.jar
apm-netty-socketio-plugin-8.11.0.jar
apm-redisson-3.x-plugin-8.11.0.jar
apm-resttemplate-4.3.x-plugin-8.11.0.jar
apm-rocketmq-3.x-plugin-8.11.0.jar
apm-rocketmq-4.x-plugin-8.11.0.jar
apm-sharding-sphere-3.x-plugin-8.11.0.jar
apm-sharding-sphere-4.1.0-plugin-8.11.0.jar
apm-shardingsphere-4.0.x-plugin-8.11.0.jar
apm-shardingsphere-5.0.0-plugin-8.11.0.jar
apm-spring-async-annotation-plugin-8.11.0.jar
apm-spring-concurrent-util-4.x-plugin-8.11.0.jar
apm-spring-core-patch-8.11.0.jar
apm-spring-kafka-1.x-plugin-8.11.0.jar
apm-spring-kafka-2.x-plugin-8.11.0.jar
apm-spring-scheduled-annotation-plugin-8.11.0.jar
apm-spring-webflux-5.x-plugin-8.11.0.jar
apm-springmvc-annotation-3.x-plugin-8.11.0.jar
apm-springmvc-annotation-4.x-plugin-8.11.0.jar
apm-springmvc-annotation-5.x-plugin-8.11.0.jar
apm-springmvc-annotation-commons-8.11.0.jar
apm-spymemcached-2.x-plugin-8.11.0.jar
apm-tomcat-thread-pool-plugin-8.11.0.jar
dbcp-2.x-plugin-8.11.0.jar
druid-1.x-plugin-8.11.0.jar
dubbo-2.7.x-conflict-patch-8.11.0.jar
dubbo-3.x-conflict-patch-8.11.0.jar
dubbo-conflict-patch-8.11.0.jar
spring-commons-8.11.0.jar
spring-webflux-5.x-webclient-plugin-8.11.0.jar
thrift-plugin-8.11.0.jar
tomcat-7.x-8.x-plugin-8.11.0.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-rw-rw-r--@ <span class="token number">1</span> faustine  staff    21K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-activemq-5.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-armeria-0.84.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    25K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-armeria-0.85.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    15K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-asynchttpclient-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    25K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-avro-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    24K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-cassandra-java-driver-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-cxf-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    12K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-elastic-job-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    13K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-elasticjob-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    23K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-feign-default-http-9.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    49K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-finagle-6.25.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-guava-eventbus-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    22K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-h2-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    31K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-hystrix-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-influxdb-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    31K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-kylin-jdbc-2.6.x-3.x-4.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    27K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-lettuce-5.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    15K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-light4j-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    31K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-mariadb-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    21K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-mssql-commons-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-mssql-jdbc-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    14K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-mssql-jtds-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-nutz-http-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-nutz-mvc-annotation-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-okhttp-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-okhttp-4.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-okhttp-common-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-play-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    46K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-postgresql-8.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    15K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-pulsar-2.2-2.7-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-pulsar-2.8.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    36K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-pulsar-common-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    13K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-quasar-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    21K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-rabbitmq-5.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-servicecomb-java-chassis-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    22K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-solrj-7.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    11K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-spring-cloud-feign-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    11K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-spring-cloud-feign-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    13K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-struts2-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    34K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-undertow-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    14K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-undertow-worker-thread-pool-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    84K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-vertx-core-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    18K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-vertx-core-4.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    21K Jun <span class="token number">18</span> <span class="token number">11</span>:35 apm-xmemcached-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    24K Jun <span class="token number">18</span> <span class="token number">11</span>:36 apm-xxl-job-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:36 baidu-brpc-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    12K Jun <span class="token number">18</span> <span class="token number">11</span>:36 graphql-12.x-15.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    12K Jun <span class="token number">18</span> <span class="token number">11</span>:36 graphql-16plus-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    13K Jun <span class="token number">18</span> <span class="token number">11</span>:36 graphql-8.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    12K Jun <span class="token number">18</span> <span class="token number">11</span>:36 graphql-9.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    24K Jun <span class="token number">18</span> <span class="token number">11</span>:37 jsonrpc4j-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:35 motan-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    28K Jun <span class="token number">18</span> <span class="token number">11</span>:37 okhttp-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:36 resteasy-server-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:36 sofa-rpc-plugin-8.11.0.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-rw-rw-r--@ <span class="token number">1</span> faustine  staff    33K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-customize-enhance-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    28K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-ehcache-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    23K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-fastjson-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-gson-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    15K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-guava-cache-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    20K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-jackson-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    13K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-kotlin-coroutine-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    16K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-mybatis-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-quartz-scheduler-2.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    24K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-sentinel-1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    44K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-shenyu-2.4.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    18K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-spring-annotation-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    37K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-spring-cloud-gateway-2.0.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    43K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-spring-cloud-gateway-2.1.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    40K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-spring-cloud-gateway-3.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    19K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-spring-tx-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    17K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-trace-ignore-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    21K Jun <span class="token number">18</span> <span class="token number">11</span>:37 apm-zookeeper-3.4.x-plugin-8.11.0.jar
-rw-rw-r--@ <span class="token number">1</span> faustine  staff    12K Jun <span class="token number">18</span> <span class="token number">11</span>:37 trace-sampler-cpu-policy-plugin-8.11.0.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u5F85\u89E3\u51B3\u95EE\u9898\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5F85\u89E3\u51B3\u95EE\u9898\u8BB0\u5F55" aria-hidden="true">#</a> \u5F85\u89E3\u51B3\u95EE\u9898\u8BB0\u5F55</h2><ol><li>\u8BF7\u6C42\u9519\u8BEF\u6570\u8BA1\u7B97\u89C4\u5219\uFF1F\u76EE\u524D\u8BA4\u4E3A\u662F\u629B\u9664\u7684\u7CFB\u7EDF\u672A\u6355\u83B7\u7684\u5806\u6808\u5F02\u5E38\uFF0C\u548C HTTP \u54CD\u5E94\u7801\u4E0D\u662F 200 \u7684\u3002</li><li>SkyWalking \u9519\u8BEF\u94FE\u8DEF\u4E0A\u89E3\u6790\u51FA\u4E86\u5F02\u5E38\u7684\u7C7B\u578B\uFF0C\u7814\u7A76\u4E00\u4E0B\uFF0C\u770B\u80FD\u5426\u5C06\u7CFB\u7EDF\u5305\u88C5\u8FC7\u7684\u5F02\u5E38\u4E5F\u5206\u6790\u51FA\u6765\u3002</li><li>General Service \u4E0A\u7684 MQ \u677F\u5757\u53EA\u6709\u4E09\u4E2A\u7CFB\u7EDF\u6709\u6570\u636E\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</li><li>\u3010\u7D27\u6025\u4F46\u4E0D\u91CD\u8981\u3011\u4F18\u5316\u4E0B SkyWalking UI \u7684\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6\u3002</li><li>\u3010\u91CD\u8981\u3011LTS \u63D2\u4EF6\u5F00\u53D1\u3002(\u8FDB\u884C\u4E2D)</li></ol>`,8);function x(h,J){const a=l("RouterLink");return u(),t(b,null,[c,o,n("p",null,[e(a,{to:"/java/skywalking/01/"},{default:p(()=>[k]),_:1})]),n("p",null,[e(a,{to:"/java/skywalking/02/"},{default:p(()=>[f]),_:1})]),n("p",null,[e(a,{to:"/java/skywalking/03/"},{default:p(()=>[g]),_:1})]),w,n("p",null,[e(a,{to:"/java/skywalking/03/"},{default:p(()=>[d]),_:1})]),j],64)}var y=r(i,[["render",x],["__file","index.html.vue"]]);export{y as default};
