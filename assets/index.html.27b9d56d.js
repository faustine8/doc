import{_ as t,r,o as l,a as u,b as n,d as p,w as e,F as b,e as s,c as m}from"./app.86f19023.js";const i={},c=n("h1",{id:"skywalking",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking","aria-hidden":"true"},"#"),s(" SkyWalking")],-1),d=n("h2",{id:"skywalking-\u5165\u95E8\u4E0E\u5B9E\u6218",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking-\u5165\u95E8\u4E0E\u5B9E\u6218","aria-hidden":"true"},"#"),s(" SkyWalking \u5165\u95E8\u4E0E\u5B9E\u6218")],-1),o=s("SkyWalking - \u7B80\u4ECB"),k=s("SkyWalking - \u5B89\u88C5\u914D\u7F6E"),g=s("SkyWalking - \u4F7F\u7528\u5B9E\u6218"),f=n("h2",{id:"skywalking-\u6E90\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#skywalking-\u6E90\u7801","aria-hidden":"true"},"#"),s(" SkyWalking \u6E90\u7801")],-1),w=s("(\u672A\u5B9A\u7A3F)SkyWalking - \u6E90\u7801 - javaagent"),j=m(`<table><thead><tr><th>TIME</th><th>docs.count</th><th>docs.deleted</th><th>store.size</th><th>pri.store.size</th></tr></thead><tbody><tr><td>10:43</td><td>25,135,606</td><td>0</td><td>25gb</td><td>25gb</td></tr><tr><td>10:53</td><td>26,181,346</td><td>0</td><td>23.7gb</td><td>23.7gb</td></tr><tr><td>11:03</td><td>27,248,767</td><td>0</td><td>24.7gb</td><td>24.7gb</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - zmn
<span class="token function">sudo</span> -s

ll -h /a/apps/apache-skywalking-apm-bin/logs/

<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-24-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-25-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-26-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-27-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-05-29-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-06-30-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-01-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-02-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-03-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-04-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-05-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-06-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-07-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-08-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-09-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-10-1.log
<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server-2022-07-14-1.log

<span class="token function">grep</span> <span class="token string">&quot;ERROR&quot;</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
<span class="token function">tail</span> -fn <span class="token number">200</span> /a/apps/apache-skywalking-apm-bin/logs/skywalking-oap-server.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apm-canal-1.x-plugin-8.11.0.jar
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u76EE\u524D\u6307\u6807\u6570\u636E\u4FDD\u7559 7 \u5929\uFF0C\u8FD1 6 \u5929\u5404\u4E2A\u6307\u6807\u7684\u6570\u636E\u91CF\u53CA\u5E73\u5747\u6570</p><table><thead><tr><th>index</th><th>0628</th><th>0629</th><th>0630</th><th>0701</th><th>0702</th><th>0703</th><th>avg</th></tr></thead><tbody><tr><td>sw_tag_autocomplete</td><td>79.6kb</td><td>60kb</td><td>67.8kb</td><td>54.6kb</td><td>94.4kb</td><td>45.6kb</td><td>67kb</td></tr><tr><td>sw_service_traffic</td><td>162.5kb</td><td>22.8kb</td><td>113.8kb</td><td>57kb</td><td>10.6kb</td><td>0</td><td>61kb</td></tr><tr><td>sw_service_relation_server_side</td><td>71.9mb</td><td>91.4mb</td><td>95.8mb</td><td>160.9mb</td><td>157.5mb</td><td>159mb</td><td>122.75 mb</td></tr><tr><td>sw_service_relation_client_side</td><td>183.6mb</td><td>212.4mb</td><td>217.4mb</td><td>288.7mb</td><td>291.3mb</td><td>292mb</td><td>247 mb</td></tr><tr><td>sw_service_label</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>sw_service_instance_relation_server_side</td><td>381.6mb</td><td>496.5mb</td><td>518.1mb</td><td>996.2mb</td><td>996.2mb</td><td>992.2mb</td><td>730 mb</td></tr><tr><td>sw_service_instance_relation_client_side</td><td>575.4mb</td><td>654.9mb</td><td>672.4mb</td><td>909.5mb</td><td>911.7mb</td><td>908.2mb</td><td>772 mb</td></tr><tr><td>sw_process_traffic</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>sw_network_address_alias</td><td>31.5mb</td><td>4mb</td><td>41.5mb</td><td>3.7mb</td><td>0</td><td>0.275mb</td><td>13 mb</td></tr><tr><td>sw_metrics-sum</td><td>144.1mb</td><td>176.7mb</td><td>179.4mb</td><td>219.5mb</td><td>227.5mb</td><td>228.1mb</td><td>195 mb</td></tr><tr><td>sw_metrics-rate</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>sw_metrics-percentile</td><td>5.1gb</td><td>6.2gb</td><td>6.5gb</td><td>9.6gb</td><td>9.5gb</td><td>9.2gb</td><td>7.68 gb</td></tr><tr><td>sw_metrics-percent</td><td>5.1gb</td><td>6.1gb</td><td>6.5gb</td><td>9.4gb</td><td>9.4gb</td><td>9.3gb</td><td>7.63 gb</td></tr><tr><td>sw_metrics-max</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>sw_metrics-longavg</td><td>6.5gb</td><td>7.7gb</td><td>8gb</td><td>11.1gb</td><td>10.7gb</td><td>11gb</td><td>9.16 gb</td></tr><tr><td>sw_metrics-doubleavg</td><td>200.8mb</td><td>233.8mb</td><td>243.1mb</td><td>343.5mb</td><td>343.5mb</td><td>341.3mb</td><td>284 mb</td></tr><tr><td>sw_metrics-cpm</td><td>4.8gb</td><td>5.9gb</td><td>6.1gb</td><td>9.3gb</td><td>9.1gb</td><td>9.1gb</td><td>7.38 gb</td></tr><tr><td>sw_metrics-count</td><td>1.4mb</td><td>3mb</td><td>3.1mb</td><td>3mb</td><td>3mb</td><td>2.9mb</td><td>2.7 mb</td></tr><tr><td>sw_metrics-apdex</td><td>30.6mb</td><td>33.8mb</td><td>34.1mb</td><td>42.3mb</td><td>42.9mb</td><td>43.2mb</td><td>37 mb</td></tr><tr><td>sw_meter-avglabeled</td><td>565.4mb</td><td>618.5mb</td><td>591.8mb</td><td>785mb</td><td>795.7mb</td><td>767mb</td><td>687 mb</td></tr><tr><td>sw_meter-avghistogrampercentile</td><td>17.6mb</td><td>17.5mb</td><td>17.4mb</td><td>16.9mb</td><td>17mb</td><td>17mb</td><td>17 mb</td></tr><tr><td>sw_meter-avg</td><td>37.5mb</td><td>37.2mb</td><td>37mb</td><td>35mb</td><td>34.9mb</td><td>35mb</td><td>36.1 mb</td></tr><tr><td>sw_instance_traffic</td><td>373.9mb</td><td>318.5mb</td><td>535.2mb</td><td>455.6mb</td><td>0</td><td>40mb</td><td>287.2 mb</td></tr><tr><td>sw_events</td><td>7.3mb</td><td>7.2mb</td><td>8mb</td><td>10mb</td><td>9.1mb</td><td>9.3mb</td><td>8.4 mb</td></tr><tr><td>sw_endpoint_traffic</td><td>5.2mb</td><td>5.9mb</td><td>5.6mb</td><td>6.8mb</td><td>5.3mb</td><td>4.9mb</td><td>5.61 MB</td></tr><tr><td>sw_endpoint_relation_server_side</td><td>1.4gb</td><td>1.8gb</td><td>1.9gb</td><td>3.3gb</td><td>3.2gb</td><td>3.2gb</td><td>2.46GB</td></tr><tr><td>sw_ebpf_profiling_schedule</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table><p>\u6BCF\u65E5\u6307\u6807\u6570\u636E\u4E3A 38578.2 MB\uFF0C\u7EA6\u7B49\u4E8E 37.67 GB</p><p>\u4E00\u5E74\u7684\u6570\u636E\u91CF\u4E3A 13751 GB\uFF0C\u7EA6\u7B49\u4E8E 13.42 TB</p>`,9);function h(x,_){const a=r("RouterLink");return l(),u(b,null,[c,d,n("p",null,[p(a,{to:"/java/skywalking/01/"},{default:e(()=>[o]),_:1})]),n("p",null,[p(a,{to:"/java/skywalking/02/"},{default:e(()=>[k]),_:1})]),n("p",null,[p(a,{to:"/java/skywalking/03/"},{default:e(()=>[g]),_:1})]),f,n("p",null,[p(a,{to:"/java/skywalking/03/"},{default:e(()=>[w]),_:1})]),j],64)}var v=t(i,[["render",h],["__file","index.html.vue"]]);export{v as default};
