import{_ as n,c as a}from"./app.40df414d.js";var s="/doc/assets/README-1630846884920.6b4a1800.png",e="/doc/assets/README-1630665392427.fcac3df6.png",p="/doc/assets/README-1630665800504.a60e1b13.png",t="/doc/assets/README-1630896478068.ca75c698.png";const c={},l=a('<h1 id="gateway-\u7F51\u5173\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#gateway-\u7F51\u5173\u7EC4\u4EF6" aria-hidden="true">#</a> Gateway \u7F51\u5173\u7EC4\u4EF6</h1><p>\u7F51\u5173: \u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Spring Cloud GateWay \u662FSpring Cloud\u7684\u4E00\u4E2A\u5168\u65B0\u9879\u76EE\uFF0C\u76EE\u6807\u662F\u53D6\u4EE3Netflix Zuul\uFF0C \u5B83\u57FA\u4E8ESpring5.0 + SpringBoot2.0 + WebFlux(\u57FA\u4E8E\u9AD8\u6027\u80FD\u7684Reactor\u6A21\u5F0F\u54CD\u5E94\u5F0F\u901A\u4FE1\u6846\u67B6Netty\uFF0C\u5F02\u6B65\u975E\u963B\u585E\u6A21\u578B)\u7B49\u6280\u672F\u5F00\u53D1\uFF0C\u6027\u80FD\u9AD8\u4E8EZuul\u3002 \u5B98\u65B9\u6D4B\u8BD5\uFF0CGateWay\u662F Zuul\u76841.6\u500D\uFF0C\u65E8\u5728\u4E3A\u5FAE\u670D\u52A1\u67B6\u6784\u63D0\u4F9B\u4E00\u79CD\u7B80\u5355\u6709\u6548\u7684\u7EDF\u4E00\u7684API\u8DEF\u7531\u7BA1\u7406\u65B9\u5F0F\u3002</p><p>Spring Cloud GateWay \u4E0D\u4EC5\u63D0\u4F9B\u7EDF\u4E00\u7684\u8DEF\u7531\u65B9\u5F0F(\u53CD\u5411\u4EE3\u7406)\u5E76\u4E14\u57FA\u4E8E Filter\u94FE(\u5B9A\u4E49\u8FC7\u6EE4\u5668\u5BF9\u8BF7\u6C42\u8FC7\u6EE4\uFF0C\u5B8C\u6210\u4E00\u4E9B\u529F\u80FD)\u7684\u65B9\u5F0F\u63D0\u4F9B\u4E86\u7F51\u5173\u57FA\u672C\u7684\u529F\u80FD\uFF0C \u4F8B\u5982:\u9274\u6743\u3001 \u6D41\u91CF\u63A7\u5236\u3001\u7194\u65AD\u3001\u8DEF\u5F84\u91CD\u5199\u3001\u65E5\u5FD7\u76D1\u63A7\u7B49\u3002</p><p><img src="'+s+'" alt="\u7F51\u5173\u5728\u67B6\u6784\u4E2D\u7684\u4F4D\u7F6E"></p><h2 id="gateway-\u7F51\u5173\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#gateway-\u7F51\u5173\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> Gateway \u7F51\u5173\u6838\u5FC3\u6982\u5FF5</h2><ul><li>\u8DEF\u7531(route)</li></ul><p>\u7F51\u5173\u6700\u57FA\u7840\u7684\u90E8\u5206\uFF0C\u4E5F\u662F\u7F51\u5173\u6BD4\u8F83\u57FA\u7840\u7684\u5DE5\u4F5C\u5355\u5143\u3002\u8DEF\u7531\u7531\u4E00\u4E2AID\u3001\u4E00\u4E2A\u76EE\u6807URL(\u6700\u7EC8\u8DEF\u7531\u5230\u7684\u5730\u5740)\u3001\u4E00\u7CFB\u5217\u7684\u65AD\u8A00(\u5339\u914D\u6761\u4EF6\u5224\u65AD)\u548C Filter\u8FC7\u6EE4\u5668(\u7CBE\u7EC6\u5316\u63A7\u5236)\u7EC4\u6210\u3002 \u5982\u679C\u65AD\u8A00\u4E3Atrue\uFF0C\u5219\u5339\u914D\u8BE5\u8DEF\u7531\u3002</p><ul><li>\u65AD\u8A00(predicates)</li></ul><p>\u53C2\u8003\u4E86Java8\u4E2D\u7684\u65AD\u8A00 <code>java.util.function.Predicate</code>\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5339\u914DHttp\u8BF7\u6C42\u4E2D\u7684\u6240\u6709\u5185\u5BB9 (\u5305\u62EC\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u53C2\u6570\u7B49)(\u7C7B\u4F3C\u4E8Enginx\u4E2D\u7684location\u5339\u914D\u4E00\u6837)\uFF0C\u5982\u679C\u65AD\u8A00\u4E0E\u8BF7\u6C42\u76F8\u5339\u914D\u5219\u8DEF\u7531\u3002</p><ul><li>\u8FC7\u6EE4\u5668(filter)</li></ul><p>\u4E00\u4E2A\u6807\u51C6\u7684 Spring webFilter\uFF0C\u4F7F\u7528\u8FC7\u6EE4\u5668\uFF0C\u53EF\u4EE5\u5728\u8BF7\u6C42\u4E4B\u524D\u6216\u8005\u4E4B\u540E\u6267\u884C\u4E1A\u52A1\u903B\u8F91\u3002</p><p><img src="'+e+'" alt="Gateway\u67B6\u6784"></p><p>\u5176\u4E2D\uFF0CPredicates\u65AD\u8A00\u5C31\u662F\u6211\u4EEC\u7684\u5339\u914D\u6761\u4EF6\uFF0C\u800CFilter\u5C31\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u65E0\u6240\u4E0D\u80FD\u7684\u62E6\u622A\u5668\u3002 \u6709\u4E86\u8FD9\u4E24\u4E2A\u5143\u7D20\uFF0C\u7ED3\u5408\u76EE\u6807URL\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u5177\u4F53\u7684\u8DEF\u7531\u8F6C\u53D1\u3002</p><h2 id="gateway-\u5DE5\u4F5C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#gateway-\u5DE5\u4F5C\u8FC7\u7A0B" aria-hidden="true">#</a> Gateway \u5DE5\u4F5C\u8FC7\u7A0B</h2><p><img src="'+p+`" alt="Gateway\u5DE5\u4F5C\u8FC7\u7A0B"></p><p>\u5BA2\u6237\u7AEF\u5411Spring Cloud GateWay\u53D1\u51FA\u8BF7\u6C42\uFF0C\u7136\u540E\u5728GateWay Handler Mapping\u4E2D\u627E\u5230\u4E0E\u8BF7\u6C42\u76F8\u5339\u914D\u7684\u8DEF\u7531\uFF0C\u5C06\u5176\u53D1\u9001\u5230GateWay Web Handler; Handler\u518D\u901A\u8FC7\u6307\u5B9A\u7684\u8FC7\u6EE4\u5668\u94FE\u6765\u5C06\u8BF7\u6C42\u53D1\u9001\u5230\u6211\u4EEC\u5B9E\u9645\u7684\u670D\u52A1\u6267\u884C\u4E1A\u52A1\u903B\u8F91\uFF0C\u7136\u540E\u8FD4\u56DE\u3002</p><p>\u8FC7\u6EE4\u5668\u4E4B\u95F4\u7528\u865A\u7EBF\u5206\u5F00\u662F\u56E0\u4E3A\u8FC7\u6EE4\u5668\u53EF\u80FD\u4F1A\u5728\u53D1\u9001\u4EE3\u7406\u8BF7\u6C42\u4E4B\u524D(pre)\u6216\u8005\u4E4B\u540E(post)\u6267\u884C\u4E1A\u52A1\u903B\u8F91\u3002</p><p>Filter\u5728\u201Cpre\u201D\u7C7B\u578B\u8FC7\u6EE4\u5668\u4E2D\u53EF\u4EE5\u505A\u53C2\u6570\u6821\u9A8C\u3001\u6743\u9650\u6821\u9A8C\u3001\u6D41\u91CF\u76D1\u63A7\u3001\u65E5\u5FD7\u8F93\u51FA\u3001\u534F\u8BAE\u8F6C\u6362\u7B49\uFF0C \u5728\u201Cpost\u201D\u7C7B\u578B\u7684\u8FC7\u6EE4\u5668\u4E2D\u53EF\u4EE5\u505A\u54CD\u5E94\u5185\u5BB9\u3001\u54CD\u5E94\u5934\u7684\u4FEE\u6539\u3001\u65E5\u5FD7\u7684\u8F93\u51FA\u3001\u6D41\u91CF\u76D1\u63A7\u7B49\u3002</p><blockquote><p>GateWay\u6838\u5FC3\u903B\u8F91: \u8DEF\u7531\u8F6C\u53D1 + \u6267\u884C\u8FC7\u6EE4\u5668\u94FE</p></blockquote><h2 id="gateway-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#gateway-\u5E94\u7528" aria-hidden="true">#</a> Gateway \u5E94\u7528</h2><p>\u4F7F\u7528\u7F51\u5173\u5BF9\u81EA\u52A8\u6295\u9012\u5FAE\u670D\u52A1\u8FDB\u884C\u4EE3\u7406(\u6DFB\u52A0\u5728\u5B83\u7684\u4E0A\u6E38\uFF0C\u76F8\u5F53\u4E8E\u9690\u85CF\u4E86\u5177\u4F53\u5FAE\u670D\u52A1\u7684\u4FE1\u606F\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u662F\u7F51\u5173)</p><h3 id="\u7F16\u7801\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u6848\u4F8B" aria-hidden="true">#</a> \u7F16\u7801\u6848\u4F8B</h3><ol><li>\u521B\u5EFA\u5DE5\u7A0Bcloud-gateway-server-9002\u5BFC\u5165\u4F9D\u8D56</li></ol><blockquote><p>GateWay\u4E0D\u9700\u8981\u4F7F\u7528web\u6A21\u5757\uFF0C\u5B83\u5F15\u5165\u7684\u662FWebFlux</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--GateWay \u7F51\u5173--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u5F15\u5165webflux--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-webflux<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>\u6DFB\u52A0\u8DEF\u7531\u89C4\u5219</li></ol><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.gateway.routes[0].id</span><span class="token punctuation">=</span><span class="token value attr-value">service-base-auto-deliver-router</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].uri</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:8090</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].predicates[0]</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/auto/deliver/**</span>

<span class="token key attr-name">spring.cloud.gateway.routes[1].id</span><span class="token punctuation">=</span><span class="token value attr-value">service-base-resume-router</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].uri</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:8080</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].predicates[0]</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/resume/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>\u6DFB\u52A0\u4E3B\u542F\u52A8\u7C7B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GatewayApplication9002</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">GatewayApplication9002</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u8FD9\u6BB5\u914D\u7F6E\u7684\u610F\u601D\u662F\uFF0C\u914D\u7F6E\u4E86\u4E00\u4E2A id \u4E3A service-base-auto-deliver-router \u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u5F53\u5411\u7F51\u5173\u53D1\u8D77\u8BF7\u6C42 http://localhost:9002/auto/deliver/checkAndBegin/1545132\uFF0C\u8BF7\u6C42\u4F1A\u88AB\u5206\u53D1\u8DEF\u7531\u5230\u5BF9\u5E94\u7684\u5FAE\u670D\u52A1\u4E0A</p><h2 id="gateway-\u8DEF\u7531\u89C4\u5219\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#gateway-\u8DEF\u7531\u89C4\u5219\u8BE6\u89E3" aria-hidden="true">#</a> Gateway \u8DEF\u7531\u89C4\u5219\u8BE6\u89E3</h2><p>Spring Cloud GateWay \u5E2E\u6211\u4EEC\u5185\u7F6E\u4E86\u5F88\u591APredicates\u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u5404\u79CD\u8DEF\u7531\u5339\u914D\u89C4\u5219(\u901A\u8FC7Header\u3001\u8BF7\u6C42\u53C2\u6570\u7B49\u4F5C\u4E3A\u6761\u4EF6)\u5339\u914D\u5230\u5BF9\u5E94\u7684\u8DEF\u7531\u3002</p><p><img src="`+t+`" alt="Gateway\u8DEF\u7531\u65AD\u8A00\u5DE5\u5382"></p><ul><li>\u65F6\u95F4\u70B9\u540E\u5339\u914D</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> after_route
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.org
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> After=2017<span class="token punctuation">-</span>01<span class="token punctuation">-</span>20T17<span class="token punctuation">:</span>42<span class="token punctuation">:</span>47.789<span class="token punctuation">-</span>07<span class="token punctuation">:</span>00<span class="token punctuation">[</span>America/Denver<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u65F6\u95F4\u70B9\u524D\u5339\u914D</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> before_route
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.org
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> Before=2017<span class="token punctuation">-</span>01<span class="token punctuation">-</span>20T17<span class="token punctuation">:</span>42<span class="token punctuation">:</span>47.789<span class="token punctuation">-</span>07<span class="token punctuation">:</span>00<span class="token punctuation">[</span>America/Denver<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u65F6\u95F4\u533A\u95F4\u65AD\u8A00</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> between_route
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.org
        <span class="token key atrule">predicates</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> Between=2017<span class="token punctuation">-</span>01<span class="token punctuation">-</span>20T17<span class="token punctuation">:</span>42<span class="token punctuation">:</span>47.789<span class="token punctuation">-</span>07<span class="token punctuation">:</span>00<span class="token punctuation">[</span>America/Denver<span class="token punctuation">]</span><span class="token punctuation">,</span> 2017<span class="token punctuation">-</span>01<span class="token punctuation">-</span>21T17<span class="token punctuation">:</span>42<span class="token punctuation">:</span>47.789<span class="token punctuation">-</span>07<span class="token punctuation">:</span>00<span class="token punctuation">[</span>America/Denver<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u8BE6\u7EC6\u89C1\u5B98\u7F51\uFF1A https://docs.spring.io/spring-cloud-gateway/docs/2.2.9.RELEASE/reference/html/#gateway-request-predicates-factories</p></blockquote><h2 id="gateway-\u52A8\u6001\u8DEF\u7531\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#gateway-\u52A8\u6001\u8DEF\u7531\u8BE6\u89E3" aria-hidden="true">#</a> Gateway \u52A8\u6001\u8DEF\u7531\u8BE6\u89E3</h2><p>GateWay\u652F\u6301\u81EA\u52A8\u4ECE\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5E76\u8BBF\u95EE\uFF0C\u5373\u6240\u8C13\u7684\u52A8\u6001\u8DEF\u7531\u3002</p><blockquote><p>\u5728\u524D\u9762\u7684\u914D\u7F6E\u4E2D\uFF0Crouter \u7684 URI \u5199\u4E86\u56FA\u5B9A\u7684IP\u548C\u7AEF\u53E3\uFF0C\u8FD9\u662F\u4E0D\u5408\u7406\u7684\u3002 \u56E0\u4E3A\u76EE\u6807\u5FAE\u670D\u52A1\u53EF\u80FD\u90E8\u7F72\u591A\u53F0\u3002\u56E0\u6B64\uFF0CURI\u7684\u914D\u7F6E\u5E94\u8BE5\u662F\u4E00\u4E2A\u670D\u52A1\u540D\u79F0\u800C\u4E0D\u5E94\u8BE5\u662F\u4E00\u4E2A\u5177\u4F53\u7684\u5FAE\u670D\u52A1\u5B9E\u4F8B\u7684\u5730\u5740\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u52A8\u6001\u8DEF\u7531\u3002</p><p>Gateway\u7F51\u5173\u4ECE\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\u83B7\u53D6\u670D\u52A1\u5B9E\u4F8B\u4FE1\u606F\uFF0C\u7136\u540E\u8D1F\u8F7D\u5747\u8861\u540E\u518D\u8DEF\u7531\u3002</p></blockquote><ol><li>pom.xml \u4E2D\u6DFB\u52A0\u6CE8\u518C\u4E2D\u5FC3\u5BA2\u6237\u7AEF\u4F9D\u8D56(\u56E0\u4E3A\u8981\u83B7\u53D6\u6CE8\u518C\u4E2D\u5FC3\u670D\u52A1\u5217\u8868\uFF0Ceureka \u5BA2\u6237\u7AEF\u5DF2\u7ECF\u5F15\u5165)</li><li>\u52A8\u6001\u8DEF\u7531\u914D\u7F6E</li></ol><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.gateway.routes[0].id</span><span class="token punctuation">=</span><span class="token value attr-value">service-base-auto-deliver-router</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://service-base-auto-deliver</span>
<span class="token key attr-name">spring.cloud.gateway.routes[0].predicates[0]</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/auto/deliver/**</span>

<span class="token key attr-name">spring.cloud.gateway.routes[1].id</span><span class="token punctuation">=</span><span class="token value attr-value">service-base-resume-router</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].uri</span><span class="token punctuation">=</span><span class="token value attr-value">lb://service-base-resume</span>
<span class="token key attr-name">spring.cloud.gateway.routes[1].predicates[0]</span><span class="token punctuation">=</span><span class="token value attr-value">Path=/resume/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u6CE8\u610F: \u52A8\u6001\u8DEF\u7531\u8BBE\u7F6E\u65F6\uFF0Curi\u4EE5 lb:// \u5F00\u5934(lb\u4EE3\u8868\u4ECE\u6CE8\u518C\u4E2D\u5FC3\u83B7\u53D6\u670D\u52A1)\uFF0C\u540E\u9762\u662F\u9700\u8981\u8F6C\u53D1\u5230\u7684\u670D\u52A1\u540D\u79F0</p></blockquote><h2 id="gateway\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#gateway\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> GateWay\u8FC7\u6EE4\u5668</h2><h3 id="gateway\u8FC7\u6EE4\u5668\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#gateway\u8FC7\u6EE4\u5668\u7B80\u4ECB" aria-hidden="true">#</a> GateWay\u8FC7\u6EE4\u5668\u7B80\u4ECB</h3><p>\u4ECE\u8FC7\u6EE4\u5668\u751F\u547D\u5468\u671F(\u5F71\u54CD\u65F6\u673A\u70B9)\u7684\u2EC6\u5EA6\u8BF4\uFF0C\u4E3B\u8981\u6709\u4E24\u4E2A: pre\u548Cpost</p><table><thead><tr><th>\u751F\u547D\u5468\u671F\u65F6\u673A\u70B9</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>pre</td><td>\u8FD9\u79CD\u8FC7\u6EE4\u5668\u5728\u8BF7\u6C42\u88AB\u8DEF\u7531\u4E4B\u524D\u8C03\u7528\u3002\u6211\u4EEC\u53EF\u5229\u7528\u8FD9\u79CD\u8FC7\u6EE4\u5668\u5B9E\u73B0\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u5728\u96C6\u7FA4\u4E2D\u9009\u62E9\u8BF7\u6C42\u7684\u5FAE\u670D\u52A1\u3001\u8BB0\u5F55\u8C03\u8BD5\u4FE1\u606F\u7B49\u3002</td></tr><tr><td>post</td><td>\u8FD9\u79CD\u8FC7\u6EE4\u5668\u5728\u8DEF\u7531\u5230\u5FAE\u670D\u52A1\u4EE5\u540E\u6267\u884C\u3002\u8FD9\u79CD\u8FC7\u6EE4\u5668\u53EF\u7528\u6765\u4E3A\u54CD\u5E94\u6DFB\u52A0\u6807\u51C6\u7684 HTTP Header\u3001\u6536\u96C6\u7EDF\u8BA1\u4FE1\u606F\u548C\u6307\u6807\u3001\u5C06\u54CD\u5E94\u4ECE\u5FAE\u670D\u52A1\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7B49\u3002</td></tr></tbody></table><p>\u4ECE\u8FC7\u6EE4\u5668\u7C7B\u578B\u7684\u2EC6\u5EA6\uFF0CSpring Cloud GateWay\u7684\u8FC7\u6EE4\u5668\u5206\u4E3A GateWayFilter\u548C GlobalFilter \u4E24\u79CD</p><table><thead><tr><th>\u8FC7\u6EE4\u5668\u7C7B\u578B</th><th>\u5F71\u54CD\u8303\u56F4</th></tr></thead><tbody><tr><td>GateWayFilter</td><td>\u5E94\u7528\u5230\u5355\u4E2A\u8DEF\u7531\u8DEF\u7531\u4E0A</td></tr><tr><td>GlobalFilter</td><td>\u5E94\u7528\u5230\u6240\u6709\u7684\u8DEF\u7531\u4E0A</td></tr></tbody></table><p>\u6BD4\u5982\uFF0CGateway Filter\u53EF\u4EE5\u53BB\u6389url\u4E2D\u7684\u5360\u4F4D\u540E\u8F6C\u53D1\u8DEF\u7531\uFF0C\u6BD4\u5982</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">predicates</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Path=/resume/<span class="token important">**</span>
<span class="token key atrule">filters</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> StripPrefix=1 <span class="token comment"># \u53EF\u4EE5\u53BB\u6389resume\u4E4B\u540E\u8F6C\u53D1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u6CE8\u610F: GlobalFilter\u5168\u5C40\u8FC7\u6EE4\u5668\u662F\u7A0B\u5E8F\u5458\u4F7F\u7528\u6BD4\u8F83\u591A\u7684\u8FC7\u6EE4\u5668\uFF0C\u6211\u4EEC\u4E3B\u8981\u8BB2\u89E3\u8FD9\u79CD\u7C7B\u578B</p></blockquote><h3 id="\u81EA\u5B9A\u4E49\u5168\u5C40\u8FC7\u6EE4\u5668\u5B9E\u73B0ip\u8BBF\u95EE\u9650\u5236-\u9ED1\u767D\u540D\u5355" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5168\u5C40\u8FC7\u6EE4\u5668\u5B9E\u73B0ip\u8BBF\u95EE\u9650\u5236-\u9ED1\u767D\u540D\u5355" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5168\u5C40\u8FC7\u6EE4\u5668\u5B9E\u73B0IP\u8BBF\u95EE\u9650\u5236(\u9ED1\u767D\u540D\u5355)</h3><p>\u8BF7\u6C42\u8FC7\u6765\u65F6\uFF0C\u5224\u65AD\u53D1\u9001\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u7684IP\uFF0C\u5982\u679C\u5728\u9ED1\u540D\u5355\u4E2D\uFF0C\u62D2\u7EDD\u8BBF\u95EE\u3002</p><p>\u81EA\u5B9A\u4E49GateWay\u5168\u5C40\u8FC7\u6EE4\u5668\u65F6\uFF0C\u6211\u4EEC\u5B9E\u73B0Global Filter\u63A5\u53E3\u5373\u53EF\uFF0C\u901A\u8FC7\u5168\u5C40\u8FC7\u6EE4\u5668\u53EF\u4EE5\u5B9E\u73B0\u9ED1\u767D\u540D\u5355\u3001\u9650\u6D41\u7B49\u529F\u80FD\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u7C7B\u63CF\u8FF0\uFF1A\u5B9A\u4E49\u5168\u5C40\u8FC7\u6EE4\u5668\uFF0C\u5BF9\u6240\u6709\u8DEF\u7531\u751F\u6548
 *
 * <span class="token keyword">@author</span> mujunlin
 * <span class="token keyword">@since</span> 2021/09/07 09:13
 */</span>
<span class="token annotation punctuation">@Component</span>  <span class="token comment">// \u8BA9\u5BB9\u5668\u626B\u63CF\u5230\uFF0C\u5C31\u7B49\u540C\u4E8E\u6CE8\u518C\u4E86</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlackListFilter</span> <span class="token keyword">implements</span> <span class="token class-name">GlobalFilter</span><span class="token punctuation">,</span> <span class="token class-name">Ordered</span> <span class="token punctuation">{</span>

    <span class="token comment">/* \u6A21\u62DF\u9ED1\u540D\u5355\uFF0C\u5B9E\u9645\u53EF\u4EE5\u4ECE\u6570\u636E\u5E93\u4E2D\u83B7\u53D6 */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> blackList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        blackList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;0:0:0:0:0:0:0:1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// \u6A21\u62DF\u672C\u673A\u5730\u5740</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8FC7\u6EE4\u5668\u6838\u5FC3\u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span> \u5C01\u88C5\u4E86 Request \u548C Response \u5BF9\u8C61\u7684\u4E0A\u4E0B\u6587
     * <span class="token keyword">@param</span> <span class="token parameter">chain</span>    \u7F51\u5173\u8FC7\u6EE4\u5668\u94FE\uFF0C\u5305\u542B\u5168\u5C40\u8FC7\u6EE4\u5668\u548C\u5355\u8DEF\u7531\u8FC7\u6EE4\u5668
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Mono</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">ServerWebExchange</span> exchange<span class="token punctuation">,</span> <span class="token class-name">GatewayFilterChain</span> chain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u5BA2\u6237\u7AEFIP\uFF0C\u5224\u65AD\u662F\u5426\u5728\u9ED1\u540D\u5355\u4E2D\uFF0C\u5982\u679C\u5728\u7684\u8BDD\u5C31\u62D2\u7EDD\u8BBF\u95EE\uFF1B\u4E0D\u5728\u7684\u8BDD\u5C31\u653E\u884C</span>
        <span class="token comment">// 1.\u4ECE\u4E0A\u4E0B\u6587\u4E2D\u53D6\u51FA Request \u548C Response \u5BF9\u8C61</span>
        <span class="token class-name">ServerHttpRequest</span> request <span class="token operator">=</span> exchange<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServerHttpResponse</span> response <span class="token operator">=</span> exchange<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.\u4ECERequest\u5BF9\u8C61\u4E2D\u83B7\u53D6\u5BA2\u6237\u7AEFIP</span>
        <span class="token class-name">String</span> clientIp <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRemoteAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.\u67E5\u8BE2 clientIp \u662F\u5426\u5B58\u5728\u4E8E\u9ED1\u540D\u5355\u4E2D\uFF0C\u5982\u679C\u5B58\u5728\u7684\u8BDD\u5C31\u62D2\u7EDD\u8BBF\u95EE</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>blackList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>clientIp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u62D2\u7EDD\u8BBF\u95EE\uFF0C\u8FD4\u56DE</span>
            response<span class="token punctuation">.</span><span class="token function">setStatusCode</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span>UNAUTHORIZED<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u72B6\u6001\u7801</span>
            <span class="token class-name">DataBuffer</span> wrap <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">bufferFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token string">&quot;Request be denied!&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">writeWith</span><span class="token punctuation">(</span><span class="token class-name">Mono</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>wrap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5408\u6CD5\u8BF7\u6C42\uFF0C\u653E\u884C\u3002\u7EE7\u7EED\u6267\u884C\u8FC7\u6EE4\u5668\u94FE</span>
        <span class="token keyword">return</span> chain<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u524D\u8FC7\u6EE4\u5668\u7684\u987A\u5E8F(\u4F18\u5148\u7EA7\uFF0C\u6570\u503C\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8)
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="gateway\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#gateway\u9AD8\u53EF\u7528" aria-hidden="true">#</a> GateWay\u9AD8\u53EF\u7528</h2><p>\u7F51\u5173\u4F5C\u4E3A\u975E\u5E38\u6838\u5FC3\u7684\u4E00\u4E2A\u90E8\u4EF6\uFF0C\u5982\u679C\u6302\u6389\uFF0C\u6240\u6709\u8BF7\u6C42\u53EF\u80FD\u90FD\u65E0\u6CD5\u8DEF\u7531\u5904\u7406\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u505AGateWay\u7684\u9AD8\u53EF\u7528\u3002</p><p>GateWay\u7684\u9AD8\u53EF\u7528\u5F88\u7B80\u5355: \u53EF\u4EE5\u542F\u52A8\u591A\u4E2AGateWay\u5B9E\u4F8B\u6765\u5B9E\u73B0\u9AD8\u53EF\u7528\u3002</p><p>\u5728GateWay\u7684\u4E0A\u6E38\u4F7F\u7528Nginx\u7B49\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u8FDB\u884C\u8D1F\u8F7D\u8F6C\u53D1\u4EE5\u8FBE\u5230\u9AD8\u53EF\u7528\u7684\u76EE\u7684\u3002</p><p>\u542F\u52A8\u591A\u4E2AGateWay\u5B9E\u4F8B(\u5047\u5982\u8BF4\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u7AEF\u53E39002\uFF0C\u4E00\u4E2A\u7AEF\u53E39003)\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u4F7F\u7528Nginx\u7B49\u5B8C\u6210\u8D1F\u8F7D\u4EE3\u7406\u5373\u53EF\u3002\u793A\u4F8B\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u914D\u7F6E\u591A\u4E2AGateWay\u5B9E\u4F8B </span>
upstream gateway <span class="token punctuation">{</span>
  server <span class="token number">127.0</span>.0.1:9002<span class="token punctuation">;</span>
  server <span class="token number">127.0</span>.0.1:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location / <span class="token punctuation">{</span>
  proxy_pass http://gateway<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,67);function o(u,r){return l}var k=n(c,[["render",o],["__file","index.html.vue"]]);export{k as default};
