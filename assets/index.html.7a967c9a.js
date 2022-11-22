import{_ as e,c as o}from"./app.40df414d.js";const r={},a=o(`<h1 id="kafka-\u670D\u52A1\u7AEF\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#kafka-\u670D\u52A1\u7AEF\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> Kafka \u670D\u52A1\u7AEF\u53C2\u6570\u914D\u7F6E</h1><blockquote><p><code>$KAFKA_HOME/config/server.properties</code> \u6587\u4EF6\u4E2D\u7684\u914D\u7F6E</p></blockquote><h2 id="_1-zookeeper-connect" tabindex="-1"><a class="header-anchor" href="#_1-zookeeper-connect" aria-hidden="true">#</a> 1. zookeeper.connect</h2><p>\u8BE5\u53C2\u6570\u7528\u4E8E\u914D\u7F6E Kafka \u8981\u8FDE\u63A5\u7684 Zookeeper \u96C6\u7FA4\u7684\u5730\u5740\u3002</p><p>\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694 Zookeeper \u7684\u591A\u4E2A\u5730\u5740\u3002Zookeeper\u7684\u5355\u4E2A\u5730\u5740\u662F <code>host:port</code> \u5F62\u5F0F\u7684\uFF0C\u53EF\u4EE5\u5728\u6700\u540E\u6DFB\u52A0 Kafka \u5728 Zookeeper \u4E2D\u7684\u6839\u8282\u70B9\u8DEF\u5F84\u3002</p><p>\u5982: <code>zookeeper.connect=node2:2181,node3:2181,node4:2181/myKafka</code></p><h2 id="_2-listeners" tabindex="-1"><a class="header-anchor" href="#_2-listeners" aria-hidden="true">#</a> 2. listeners</h2><p>\u7528\u4E8E\u6307\u5B9A\u5F53\u524D Broker \u5411\u5916\u53D1\u5E03\u670D\u52A1\u7684\u5730\u5740\u548C\u7AEF\u53E3\u3002</p><p>\u4E0E <code>advertised.listeners</code> \u914D\u5408\uFF0C\u7528\u4E8E\u505A\u5185\u5916\u7F51\u9694\u79BB\u3002</p><p>\u5185\u5916\u7F51\u9694\u79BB\u914D\u7F6E:</p><ul><li><code>listener.security.protocol.map</code></li></ul><p>\u76D1\u542C\u5668\u540D\u79F0\u548C\u5B89\u5168\u534F\u8BAE\u7684\u6620\u5C04\u914D\u7F6E\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8FD9\u79CD\u6620\u5C04\uFF1F\u56E0\u4E3A <code>listeners</code> \u7684\u914D\u7F6E\u5982\u679C\u9700\u8981\u4E24\u4E2A\u76F8\u540C\u7684\u534F\u8BAE\u7684 Listener\uFF0C\u4F46\u662F Listener \u7684\u540D\u5B57\u53C8\u4E0D\u80FD\u76F8\u540C\u3002 \u6B64\u65F6\u5C31\u53EF\u4EE5\u5728\u8FD9\u91CC\u5C06\u5176\u4E2D\u4E00\u4E2A\u6620\u5C04\u4E00\u4E2A\u522B\u540D\uFF0C\u7136\u540E\u5199\u5728 <code>listeners</code> \u4E2D\u5C31\u4E0D\u4F1A\u6709\u95EE\u9898\u4E86\u3002</p></blockquote><p>\u6BD4\u5982\uFF0C\u53EF\u4EE5\u5C06\u5185\u5916\u7F51\u9694\u79BB\uFF0C\u5373\u8BA9\u5B83\u4EEC\u90FD\u4F7F\u7528SSL\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>listener.security.protocol.map<span class="token operator">=</span>INTERNAL:SSL,EXTERNAL:SSL
<span class="token comment"># : \u524D\u9762\u4EE3\u8868\u76D1\u542C\u5668\u7684\u540D\u79F0</span>
<span class="token comment"># : \u540E\u9762\u4EE3\u8868\u4F7F\u7528\u7684\u534F\u8BAE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u6BCF\u4E2A\u76D1\u542C\u5668\u7684\u540D\u79F0\u53EA\u80FD\u5728 map \u4E2D\u51FA\u73B0\u4E00\u6B21\u3002</p></blockquote><ul><li><code>inter.broker.listener.name</code></li></ul><p>\u7528\u4E8E\u914D\u7F6E Broker \u4E4B\u95F4\u901A\u4FE1\u4F7F\u7528\u7684\u76D1\u542C\u5668\u540D\u79F0\uFF0C\u8BE5\u540D\u79F0\u5FC5\u987B\u5728 <code>advertised.listeners</code> \u5217\u8868\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inter.broker.listener.name<span class="token operator">=</span>EXTERNAL
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>advertised.listeners</code></li></ul><p>\u9700\u8981\u5C06\u8BE5\u5730\u5740\u53D1\u5E03\u5230 zookeeper \u4F9B\u5BA2\u6237\u7AEF\u4F7F\u7528\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u5730\u5740\u4E0E listeners \u914D\u7F6E\u4E0D\u540C\u3002</p><blockquote><p>\u53EF\u4EE5\u5728 zookeeper \u7684 <code>get /myKafka/brokers/ids/&lt;broker.id&gt;</code> \u4E2D\u627E\u5230\u3002</p></blockquote><p>\u5728 IaaS \u73AF\u5883\uFF0C\u8BE5\u6761\u76EE\u7684\u7F51\u7EDC\u63A5\u53E3\u5F97\u4E0E Broker \u7ED1\u5B9A\u7684\u7F51\u7EDC\u63A5\u53E3\u4E0D\u540C\u3002</p><p>\u5982\u679C\u4E0D\u8BBE\u7F6E\u6B64\u6761\u76EE\uFF0C\u5C31\u4F7F\u7528 <code>listeners</code> \u7684\u914D\u7F6E\u3002\u8DDF <code>listeners</code> \u4E0D\u540C\uFF0C\u8BE5\u6761\u76EE\u4E0D\u80FD\u4F7F\u7528 <code>0.0.0.0</code> \u7F51\u7EDC\u7AEF\u53E3\u3002</p><p><code>advertised.listeners</code> \u7684\u5730\u5740\u5FC5\u987B\u662F <code>listeners</code> \u4E2D\u914D\u7F6E\u7684\u6216\u914D\u7F6E\u7684\u4E00\u90E8\u5206\u3002</p><blockquote><p>\u603B\u7ED3\u4E00\u4E0B\uFF1A<code>listeners</code> &gt; <code>advertised.listeners</code> &gt; <code>inter.broker.listener.name</code>. <br> (\u5C0F\u7684\u662F\u5927\u7684\u7684\u5B50\u96C6)</p></blockquote><ul><li><code>listeners</code></li></ul><p>\u7528\u4E8E\u914D\u7F6E Broker \u76D1\u542C\u7684 URI \u4EE5\u53CA\u76D1\u542C\u5668\u540D\u79F0\u5217\u8868\uFF0C\u4F7F\u7528\u9017\u53F7\u9694\u5F00\u591A\u4E2A URI \u53CA\u76D1\u542C\u5668\u540D\u79F0\u3002</p><p>\u5982\u679C\u76D1\u542C\u5668\u540D\u79F0\u4EE3\u8868\u7684\u4E0D\u662F\u5B89\u5168\u534F\u8BAE\uFF0C\u5FC5\u987B\u914D\u7F6E <code>listener.security.protocol.map</code>\u3002</p><p>\u6BCF\u4E2A\u76D1\u542C\u5668\u5FC5\u987B\u4F7F\u7528\u4E0D\u540C\u7684\u7F51\u7EDC\u7AEF\u53E3\u3002</p><h2 id="_3-broker-id" tabindex="-1"><a class="header-anchor" href="#_3-broker-id" aria-hidden="true">#</a> 3. broker.id</h2><p>\u8BE5\u5C5E\u6027\u7528\u4E8E\u552F\u4E00\u6807\u8BB0\u4E00\u4E2A Kafka \u7684 Broker\uFF0C\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u4EFB\u610F Integer \u503C\u3002</p><p>\u5F53 Kafka \u4EE5\u5206\u5E03\u5F0F\u96C6\u7FA4\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u5C24\u4E3A\u91CD\u8981\u3002</p><p>\u6700\u597D\u8BE5\u503C\u8DDF\u8BE5 Broker \u6240\u5728\u7684\u7269\u7406\u4E3B\u673A\u6709\u5173\u7684\uFF0C\u5982\u4E3B\u673A\u540D\u4E3A <code>host1.zmn.com</code>\uFF0C\u5219 <code>broker.id=1</code>\uFF0C\u5982\u679C\u4E3B\u673A\u540D\u4E3A <code>192.168.100.101</code> \uFF0C\u5219 <code>broker.id=101</code> \u7B49\u7B49\u3002</p><h2 id="_4-log-dir" tabindex="-1"><a class="header-anchor" href="#_4-log-dir" aria-hidden="true">#</a> 4. log.dir</h2><p>\u901A\u8FC7\u8BE5\u5C5E\u6027\u7684\u503C\uFF0C\u6307\u5B9A Kafka \u5728\u78C1\u76D8\u4E0A\u4FDD\u5B58\u6D88\u606F\u7684\u65E5\u5FD7\u7247\u6BB5\u7684\u76EE\u5F55\u3002</p><p>\u5B83\u662F\u4E00\u7EC4\u7528\u9017\u53F7\u5206\u9694\u7684\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u5F84\u3002</p><p>\u5982\u679C\u6307\u5B9A\u4E86\u591A\u4E2A\u8DEF\u5F84\uFF0C\u90A3\u4E48 Broker \u4F1A\u6839\u636E\u300C\u6700\u5C11\u4F7F\u7528\u300D\u539F\u5219\uFF0C\u628A\u540C\u4E00\u4E2A\u5206\u533A\u7684\u65E5\u5FD7\u7247\u6BB5\u4FDD\u5B58\u5230\u540C\u4E00\u4E2A\u8DEF\u5F84\u4E0B\u3002</p><p>Broker \u4F1A\u5F80\u62E5\u6709\u6700\u5C11\u6570\u76EE\u5206\u533A\u7684\u8DEF\u5F84\u65B0\u589E\u5206\u533A\uFF0C\u800C\u4E0D\u662F\u5F80\u62E5\u6709\u6700\u5C0F\u78C1\u76D8\u7A7A\u95F4\u7684\u8DEF\u5F84\u65B0\u589E\u5206\u533A\u3002</p>`,39);function s(d,c){return a}var i=e(r,[["render",s],["__file","index.html.vue"]]);export{i as default};
