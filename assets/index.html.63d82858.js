import{_ as n,c as s}from"./app.40df414d.js";const a={},e=s(`<h1 id="drools-\u57FA\u7840\u7BC7" tabindex="-1"><a class="header-anchor" href="#drools-\u57FA\u7840\u7BC7" aria-hidden="true">#</a> Drools \u57FA\u7840\u7BC7</h1><h2 id="_4-drools\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-drools\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> 4. Drools\u57FA\u7840\u8BED\u6CD5</h2><h3 id="_4-1-\u89C4\u5219\u6587\u4EF6\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#_4-1-\u89C4\u5219\u6587\u4EF6\u6784\u6210" aria-hidden="true">#</a> 4.1 \u89C4\u5219\u6587\u4EF6\u6784\u6210</h3><p>\u5728\u4F7F\u7528Drools\u65F6\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u5DE5\u4F5C\u5C31\u662F\u7F16\u5199\u89C4\u5219\u6587\u4EF6\uFF0C\u901A\u5E38\u89C4\u5219\u6587\u4EF6\u7684\u540E\u7F00\u4E3A <code>.drl</code>\u3002</p><p><strong>drl\u662FDrools Rule Language\u7684\u7F29\u5199</strong>\u3002\u5728\u89C4\u5219\u6587\u4EF6\u4E2D\u7F16\u5199\u5177\u4F53\u7684\u89C4\u5219\u5185\u5BB9\u3002</p><p>\u4E00\u5957\u5B8C\u6574\u7684\u89C4\u5219\u6587\u4EF6\u5185\u5BB9\u6784\u6210\u5982\u4E0B\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5173\u952E\u5B57</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;"><code>package</code></td><td style="text-align:left;">\u5305\u540D\uFF0C\u53EA\u9650\u4E8E\u903B\u8F91\u4E0A\u7684\u7BA1\u7406\uFF0C\u540C\u4E00\u4E2A\u5305\u540D\u4E0B\u7684\u67E5\u8BE2\u6216\u8005\u51FD\u6570\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528</td></tr><tr><td style="text-align:left;"><code>import</code></td><td style="text-align:left;">\u7528\u4E8E\u5BFC\u5165\u7C7B\u6216\u8005\u9759\u6001\u65B9\u6CD5</td></tr><tr><td style="text-align:left;"><code>global</code></td><td style="text-align:left;">\u5168\u5C40\u53D8\u91CF</td></tr><tr><td style="text-align:left;"><code>function</code></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u51FD\u6570</td></tr><tr><td style="text-align:left;"><code>query</code></td><td style="text-align:left;">\u67E5\u8BE2</td></tr><tr><td style="text-align:left;"><code>rule ... end</code></td><td style="text-align:left;">\u89C4\u5219\u4F53</td></tr></tbody></table><blockquote><p>Drools\u652F\u6301\u7684\u89C4\u5219\u6587\u4EF6\uFF0C\u9664\u4E86 <code>drl</code> \u5F62\u5F0F\uFF0C\u8FD8\u6709 <code>Excel</code> \u6587\u4EF6\u7C7B\u578B\u7684\u3002</p></blockquote><h3 id="_4-2-\u89C4\u5219\u4F53\u8BED\u6CD5\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_4-2-\u89C4\u5219\u4F53\u8BED\u6CD5\u7ED3\u6784" aria-hidden="true">#</a> 4.2 \u89C4\u5219\u4F53\u8BED\u6CD5\u7ED3\u6784</h3><p>\u89C4\u5219\u4F53\u662F\u89C4\u5219\u6587\u4EF6\u5185\u5BB9\u4E2D\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u662F\u8FDB\u884C\u4E1A\u52A1\u89C4\u5219\u5224\u65AD\u3001\u5904\u7406\u4E1A\u52A1\u7ED3\u679C\u7684\u90E8\u5206\u3002</p><p>\u89C4\u5219\u4F53\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>rule &quot;ruleName&quot;
    [attributes]
    when
        LHS 
    then
        RHS
end
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>rule</strong>\uFF1A\u5173\u952E\u5B57\uFF0C\u8868\u793A\u89C4\u5219\u5F00\u59CB\uFF0C\u53C2\u6570\u4E3A\u89C4\u5219\u7684\u552F\u4E00\u540D\u79F0\u3002</p><p><strong>attributes</strong>\uFF1A\u89C4\u5219\u5C5E\u6027\uFF0C\u662Frule\u4E0Ewhen\u4E4B\u95F4\u7684\u53C2\u6570\uFF0C\u4E3A\u53EF\u9009\u9879\u3002</p><p><strong>when</strong>\uFF1A\u5173\u952E\u5B57\uFF0C\u540E\u9762\u8DDF\u89C4\u5219\u7684\u6761\u4EF6\u90E8\u5206\u3002</p><p><strong>LHS</strong>(Left Hand Side)\uFF1A\u662F\u89C4\u5219\u7684\u6761\u4EF6\u90E8\u5206\u7684\u901A\u7528\u540D\u79F0\u3002\u5B83\u7531\u96F6\u4E2A\u6216\u591A\u4E2A\u6761\u4EF6\u5143\u7D20\u7EC4\u6210\u3002 <em>\u5982\u679CLHS\u4E3A\u7A7A\uFF0C\u5219\u5B83\u5C06\u88AB\u89C6\u4E3A\u59CB\u7EC8\u4E3Atrue\u7684\u6761\u4EF6\u5143\u7D20</em>\u3002 \uFF08\u5DE6\u624B\u8FB9\uFF09</p><p><strong>then</strong>\uFF1A\u5173\u952E\u5B57\uFF0C\u540E\u9762\u8DDF\u89C4\u5219\u7684\u7ED3\u679C\u90E8\u5206\u3002</p><p><strong>RHS</strong>(Right Hand Side)\uFF1A\u662F\u89C4\u5219\u7684\u540E\u679C\u6216\u884C\u52A8\u90E8\u5206\u7684\u901A\u7528\u540D\u79F0\u3002 \uFF08\u53F3\u624B\u8FB9\uFF09</p><p><strong>end</strong>\uFF1A\u5173\u952E\u5B57\uFF0C\u8868\u793A\u4E00\u4E2A\u89C4\u5219\u7ED3\u675F\u3002</p><h3 id="_4-3-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6CE8\u91CA" aria-hidden="true">#</a> 4.3 \u6CE8\u91CA</h3><p>\u5728drl\u5F62\u5F0F\u7684\u89C4\u5219\u6587\u4EF6\u4E2D\u4F7F\u7528\u6CE8\u91CA\u548CJava\u7C7B\u4E2D\u4F7F\u7528\u6CE8\u91CA\u4E00\u81F4\uFF0C\u5206\u4E3A\u5355\u884C\u6CE8\u91CA\u548C\u591A\u884C\u6CE8\u91CA\u3002</p><p>\u5355\u884C\u6CE8\u91CA\u7528<code>//</code> \u8FDB\u884C\u6807\u8BB0\uFF0C\u591A\u884C\u6CE8\u91CA\u4EE5 <code>/*</code> \u5F00\u59CB\uFF0C\u4EE5 <code>*/</code> \u7ED3\u675F\u3002\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u89C4\u5219rule1\u7684\u6CE8\u91CA\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5355\u884C\u6CE8\u91CA
rule &quot;rule1&quot;
    when
    then
        System.out.println(&quot;rule1\u89E6\u53D1&quot;);
end

/*
\u89C4\u5219rule2\u7684\u6CE8\u91CA\uFF0C
\u8FD9\u662F\u4E00\u4E2A\u591A\u884C\u6CE8\u91CA
*/
rule &quot;rule2&quot;
    when
    then
        System.out.println(&quot;rule2\u89E6\u53D1&quot;);
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_4-4-pattern\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_4-4-pattern\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> 4.4 Pattern\u6A21\u5F0F\u5339\u914D</h3><p>\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86Drools\u4E2D\u7684\u5339\u914D\u5668\u53EF\u4EE5\u5C06 <code>Rule Base</code> \u4E2D\u7684\u6240\u6709\u89C4\u5219\u4E0E <code>Working Memory</code> \u4E2D\u7684Fact\u5BF9\u8C61\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\uFF0C \u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u5728\u89C4\u5219\u4F53\u7684 <code>LHS</code> \u90E8\u5206\u5B9A\u4E49\u89C4\u5219\u5E76\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\u3002<code>LHS</code> \u90E8\u5206\u7531\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u6761\u4EF6\u7EC4\u6210\uFF0C\u6761\u4EF6\u53C8\u79F0\u4E3A <code>pattern</code>\u3002</p><p><strong>pattern\u7684\u8BED\u6CD5\u7ED3\u6784\u4E3A\uFF1A<code>\u7ED1\u5B9A\u53D8\u91CF\u540D:Object(Field\u7EA6\u675F)</code></strong></p><p>\u5176\u4E2D\u7ED1\u5B9A\u53D8\u91CF\u540D\u53EF\u4EE5\u7701\u7565\uFF0C\u901A\u5E38\u7ED1\u5B9A\u53D8\u91CF\u540D\u7684\u547D\u540D\u4E00\u822C\u5EFA\u8BAE\u4EE5 <code>$</code> \u5F00\u59CB\u3002 \u5982\u679C\u5B9A\u4E49\u4E86\u7ED1\u5B9A\u53D8\u91CF\u540D\uFF0C\u5C31\u53EF\u4EE5\u5728\u89C4\u5219\u4F53\u7684 <code>RHS</code> \u90E8\u5206\u4F7F\u7528\u6B64\u7ED1\u5B9A\u53D8\u91CF\u540D\u6765\u64CD\u4F5C\u76F8\u5E94\u7684Fact\u5BF9\u8C61\u3002</p><p><code>Field\u7EA6\u675F</code> \u90E8\u5206\u662F\u9700\u8981\u8FD4\u56DEtrue\u6216\u8005false\u76840\u4E2A\u6216\u591A\u4E2A\u8868\u8FBE\u5F0F\u3002</p><blockquote><p>Field \u662F\u6307 Fact \u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF</p></blockquote><p>\u4F8B\u5982\u6211\u4EEC\u7684\u5165\u95E8\u6848\u4F8B\u4E2D\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>//\u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143
rule &quot;book_discount_2&quot;
    when
        //Order\u4E3A\u7C7B\u578B\u7EA6\u675F\uFF0CoriginalPrice\u4E3A\u5C5E\u6027\u7EA6\u675F
        $order:Order(originalPrice &lt; 200 &amp;&amp; originalPrice &gt;= 100)
    then
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println(&quot;\u6210\u529F\u5339\u914D\u5230\u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u5339\u914D\u7684\u6761\u4EF6\u4E3A\uFF1A</p><ol><li><p>\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5FC5\u987B\u5B58\u5728 <code>Order</code> \u8FD9\u79CD\u7C7B\u578B\u7684Fact\u5BF9\u8C61 \u2014\u2014 \u7C7B\u578B\u7EA6\u675F</p></li><li><p>Fact\u5BF9\u8C61\u7684 <code>originalPrice</code> \u5C5E\u6027\u503C\u5FC5\u987B\u5C0F\u4E8E200 \u2014\u2014 \u5C5E\u6027\u7EA6\u675F</p></li><li><p>Fact\u5BF9\u8C61\u7684 <code>originalPrice</code> \u5C5E\u6027\u503C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E100 \u2014\u2014 \u5C5E\u6027\u7EA6\u675F</p></li></ol><p>\u4EE5\u4E0A\u6761\u4EF6\u5FC5\u987B\u540C\u65F6\u6EE1\u8DB3\u5F53\u524D\u89C4\u5219\u624D\u6709\u53EF\u80FD\u88AB\u6FC0\u6D3B\u3002</p><p><strong>\u7ED1\u5B9A\u53D8\u91CF\u65E2\u53EF\u4EE5\u7528\u5728\u5BF9\u8C61\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5728\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0A</strong>\u3002</p><p>\u4F8B\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u6539\u4E3A\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143
rule &quot;book_discount_2&quot;
    when
        $order:Order($op:originalPrice &lt; 200 &amp;&amp; originalPrice &gt;= 100)
    then
        System.out.println(&quot;$op=&quot; + $op);
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println(&quot;\u6210\u529F\u5339\u914D\u5230\u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>LHS\u90E8\u5206\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A <code>pattern</code>\uFF0C\u591A\u4E2A <code>pattern</code> \u4E4B\u95F4\u53EF\u4EE5\u4F7F\u7528 <code>and</code> \u6216\u8005 <code>or</code> \u8FDB\u884C\u8FDE\u63A5\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u8FDE\u63A5\u4E3A<code>and</code>\u3002</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143
rule &quot;book_discount_2&quot;
    when
        $order:Order($op:originalPrice &lt; 200 &amp;&amp; originalPrice &gt;= 100) and
        $customer:Customer(age &gt; 20 &amp;&amp; gender==&#39;male&#39;)
    then
        System.out.println(&quot;$op=&quot; + $op);
        $order.setRealPrice($order.getOriginalPrice() - 20);
        System.out.println(&quot;\u6210\u529F\u5339\u914D\u5230\u89C4\u5219\u4E8C\uFF1A\u6240\u8D2D\u56FE\u4E66\u603B\u4EF7\u5728100\u5230200\u5143\u7684\u4F18\u60E020\u5143&quot;);
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4-5-\u6BD4\u8F83\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-5-\u6BD4\u8F83\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 4.5 \u6BD4\u8F83\u64CD\u4F5C\u7B26</h3><p>Drools\u63D0\u4F9B\u7684\u6BD4\u8F83\u64CD\u4F5C\u7B26\uFF0C\u5982\u4E0B\u8868\uFF1A</p><table><thead><tr><th style="text-align:left;">\u7B26\u53F7</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&gt;</code></td><td style="text-align:left;">\u5927\u4E8E</td></tr><tr><td style="text-align:left;"><code>&lt;</code></td><td style="text-align:left;">\u5C0F\u4E8E</td></tr><tr><td style="text-align:left;"><code>&gt;=</code></td><td style="text-align:left;">\u5927\u4E8E\u7B49\u4E8E</td></tr><tr><td style="text-align:left;"><code>&lt;=</code></td><td style="text-align:left;">\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td style="text-align:left;"><code>==</code></td><td style="text-align:left;">\u7B49\u4E8E</td></tr><tr><td style="text-align:left;"><code>!=</code></td><td style="text-align:left;">\u4E0D\u7B49\u4E8E</td></tr><tr><td style="text-align:left;"><code>contains</code></td><td style="text-align:left;">\u68C0\u67E5\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C\u662F\u5426\u5305\u542B\u4E00\u4E2A\u6307\u5B9A\u7684\u5BF9\u8C61\u503C</td></tr><tr><td style="text-align:left;"><code>not contains</code></td><td style="text-align:left;">\u68C0\u67E5\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C\u662F\u5426\u4E0D\u5305\u542B\u4E00\u4E2A\u6307\u5B9A\u7684\u5BF9\u8C61\u503C</td></tr><tr><td style="text-align:left;"><code>memberOf</code></td><td style="text-align:left;">\u5224\u65AD\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u5728\u4E00\u4E2A\u6216\u591A\u4E2A\u96C6\u5408\u4E2D</td></tr><tr><td style="text-align:left;"><code>not memberOf</code></td><td style="text-align:left;">\u5224\u65AD\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u4E0D\u5728\u4E00\u4E2A\u6216\u591A\u4E2A\u96C6\u5408\u4E2D</td></tr><tr><td style="text-align:left;"><code>matches</code></td><td style="text-align:left;">\u5224\u65AD\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u4E0E\u63D0\u4F9B\u7684\u6807\u51C6\u7684Java\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u5339\u914D</td></tr><tr><td style="text-align:left;"><code>not matches</code></td><td style="text-align:left;">\u5224\u65AD\u4E00\u4E2AFact\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u4E0D\u4E0E\u63D0\u4F9B\u7684\u6807\u51C6\u7684Java\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u5339\u914D</td></tr></tbody></table><p>\u524D6\u4E2A\u6BD4\u8F83\u64CD\u4F5C\u7B26\u548CJava\u4E2D\u7684\u5B8C\u5168\u76F8\u540C\uFF0C\u4E0B\u9762\u6211\u4EEC\u91CD\u70B9\u5B66\u4E60\u540E6\u4E2A\u6BD4\u8F83\u64CD\u4F5C\u7B26\u3002</p><h4 id="_4-5-1-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-5-1-\u8BED\u6CD5" aria-hidden="true">#</a> 4.5.1 \u8BED\u6CD5</h4><ul><li><p><strong>contains | not contains\u8BED\u6CD5\u7ED3\u6784</strong></p><p><code>Object(Field[Collection/Array] contains value)</code></p><p><code>Object(Field[Collection/Array] not contains value)</code></p></li><li><p><strong>memberOf | not memberOf\u8BED\u6CD5\u7ED3\u6784</strong></p><p><code>Object(field memberOf value[Collection/Array])</code></p><p><code>Object(field not memberOf value[Collection/Array])</code></p></li><li><p><strong>matches | not matches\u8BED\u6CD5\u7ED3\u6784</strong></p><p><code>Object(field matches &quot;\u6B63\u5219\u8868\u8FBE\u5F0F&quot;)</code></p><p><code>Object(field not matches &quot;\u6B63\u5219\u8868\u8FBE\u5F0F&quot;)</code></p></li></ul><blockquote><p><code>contain</code> \u662F\u524D\u9762\u5305\u542B\u540E\u9762\uFF0C<code>memberOf</code> \u662F\u540E\u9762\u5305\u542B\u524D\u9762\u3002</p></blockquote><h4 id="_4-5-2-\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_4-5-2-\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> 4.5.2 \u64CD\u4F5C\u6B65\u9AA4</h4><p>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u5B9E\u4F53\u7C7B\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparisonOperatorEntity</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> names<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u5728 <code>/resources/rules</code> \u4E0B\u521B\u5EFA\u89C4\u5219\u6587\u4EF6 <code>comparisonOperator.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>package comparisonOperator
import com.zmn.drools.entity.ComparisonOperatorEntity

/*
 \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5Drools\u63D0\u4F9B\u7684\u6BD4\u8F83\u64CD\u4F5C\u7B26
*/

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26 contains
rule &quot;rule_comparison_contains&quot;
    when
        ComparisonOperatorEntity(names contains &quot;\u5F20\u4E09&quot;)
        ComparisonOperatorEntity(list contains names)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_contains\u89E6\u53D1&quot;);
end

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26not contains
rule &quot;rule_comparison_notContains&quot;
    when
        ComparisonOperatorEntity(names not contains &quot;\u5F20\u4E09&quot;)
        ComparisonOperatorEntity(list not contains names)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_notContains\u89E6\u53D1&quot;);
end

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26memberOf
rule &quot;rule_comparison_memberOf&quot;
    when
        ComparisonOperatorEntity(names memberOf list)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_memberOf\u89E6\u53D1&quot;);
end

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26not memberOf
rule &quot;rule_comparison_notMemberOf&quot;
    when
        ComparisonOperatorEntity(names not memberOf list)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_notMemberOf\u89E6\u53D1&quot;);
end

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26matches
rule &quot;rule_comparison_matches&quot;
    when
        ComparisonOperatorEntity(names matches &quot;\u5F20.*&quot;)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_matches\u89E6\u53D1&quot;);
end

// \u6D4B\u8BD5\u6BD4\u8F83\u64CD\u4F5C\u7B26not matches
rule &quot;rule_comparison_notMatches&quot;
    when
        ComparisonOperatorEntity(names not matches &quot;\u5F20.*&quot;)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_notMatches\u89E6\u53D1&quot;);
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><blockquote><p>\u6B64\u6848\u4F8B\u4E2D\uFF0C\u5728 RHS \u4E2D\u6CA1\u6709\u5BF9 Fact \u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\uFF0C\u56E0\u6B64\u7701\u7565\u4E86\u7ED1\u5B9A\u53D8\u91CF\u540D\u3002</p></blockquote><p>\u7B2C\u4E09\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test102</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
    <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
    <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Fact\u5BF9\u8C61</span>
    <span class="token class-name">ComparisonOperatorEntity</span> fact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fact<span class="token punctuation">.</span><span class="token function">setNames</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fact<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E8B\u5B9E\u5BF9\u8C61\u52A0\u5165\u5DE5\u4F5C\u5185\u5B58</span>
    session<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>fact<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6FC0\u6D3B\u89C4\u5219\uFF0C\u7531Drools\u6846\u67B6\u81EA\u52A8\u8FDB\u884C\u89C4\u5219\u5339\u914D\u3002</span>
    <span class="token comment">// \u5982\u679C\u89C4\u5219\u5339\u914D\u6210\u529F\uFF0C\u5219\u6267\u884C\u5F53\u524D\u89C4\u5219\u3002</span>
    session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
    session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="_4-6-\u6267\u884C\u6307\u5B9A\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_4-6-\u6267\u884C\u6307\u5B9A\u89C4\u5219" aria-hidden="true">#</a> 4.6 \u6267\u884C\u6307\u5B9A\u89C4\u5219</h3><p>\u901A\u8FC7\u524D\u9762\u7684\u6848\u4F8B\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5728\u8C03\u7528\u89C4\u5219\u4EE3\u7801\u65F6\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u7684\u89C4\u5219\u90FD\u4F1A\u88AB\u6267\u884C\u3002\u90A3\u4E48\u5982\u679C\u6211\u4EEC\u53EA\u60F3\u6267\u884C\u5176\u4E2D\u7684\u67D0\u4E2A\u89C4\u5219\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</p><p>Drools\u7ED9\u6211\u4EEC\u63D0\u4F9B\u7684\u65B9\u5F0F\u662F\u901A\u8FC7\u89C4\u5219\u8FC7\u6EE4\u5668\u6765\u5B9E\u73B0\u6267\u884C\u6307\u5B9A\u89C4\u5219\u3002\u5BF9\u4E8E\u89C4\u5219\u6587\u4EF6\u4E0D\u7528\u505A\u4EFB\u4F55\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u4FEE\u6539Java\u4EE3\u7801\u5373\u53EF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>
    
  <span class="token comment">// \u6D4B\u8BD5\u6267\u884C\u6307\u5B9A\u89C4\u5219</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test103</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
    <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
    <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Fact\u5BF9\u8C61</span>
    <span class="token class-name">ComparisonOperatorEntity</span> fact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fact<span class="token punctuation">.</span><span class="token function">setNames</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fact<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4E8B\u5B9E\u5BF9\u8C61\u52A0\u5165\u5DE5\u4F5C\u5185\u5B58</span>
    session<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>fact<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6FC0\u6D3B\u89C4\u5219\uFF0C\u7531Drools\u6846\u67B6\u81EA\u52A8\u8FDB\u884C\u89C4\u5219\u5339\u914D\u3002</span>
    <span class="token comment">// \u5982\u679C\u89C4\u5219\u5339\u914D\u6210\u529F\uFF0C\u5219\u6267\u884C\u5F53\u524D\u89C4\u5219\u3002</span>
    <span class="token comment">// session.fireAllRules(new RuleNameEqualsAgendaFilter(&quot;rule_comparison_contains&quot;)); // \u89C4\u5219\u540D\u7B49\u503C\u5339\u914D</span>
    session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RuleNameStartsWithAgendaFilter</span><span class="token punctuation">(</span><span class="token string">&quot;rule_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89C4\u5219\u540D \u5934\u5339\u914D</span>

    <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
    session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="_4-7-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_4-7-\u5173\u952E\u5B57" aria-hidden="true">#</a> 4.7 \u5173\u952E\u5B57</h3><p>Drools\u7684\u5173\u952E\u5B57\u5206\u4E3A\uFF1A\u786C\u5173\u952E\u5B57(Hard keywords)\u548C\u8F6F\u5173\u952E\u5B57(Soft keywords)\u3002</p><p><strong>\u786C\u5173\u952E\u5B57\u662F\u6211\u4EEC\u5728\u89C4\u5219\u6587\u4EF6\u4E2D\u5B9A\u4E49\u5305\u540D\u6216\u8005\u89C4\u5219\u540D\u65F6\u660E\u786E\u4E0D\u80FD\u4F7F\u7528\u7684\uFF0C\u5426\u5219\u7A0B\u5E8F\u4F1A\u62A5\u9519</strong>\u3002\u8F6F\u5173\u952E\u5B57\u867D\u7136\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><p>\u786C\u5173\u952E\u5B57\u5305\u62EC\uFF1A<code>true</code> <code>false</code> <code>null</code></p><blockquote><p>\u5982\u679C\u89C4\u5219\u540D\u5199\u4F5C <code>&quot;true&quot;</code> \u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\uFF0C\u662F\u4E0D\u53D7\u5F71\u54CD\u7684\u3002</p></blockquote><p>\u8F6F\u5173\u952E\u5B57\u5305\u62EC\uFF1A<code>lock-on-active</code> <code>date-effective</code> <code>date-expires</code> <code>no-loop</code> <code>auto-focus</code> <code>activation-group</code><code>agenda-group</code> <code>ruleflow-group</code> <code>entry-point</code> <code>duration</code> <code>package</code> <code>import</code> <code>dialect</code> <code>salience</code><code>enabled</code> <code>attributes</code> <code>rule</code> <code>extend</code> <code>when</code> <code>then</code> <code>template</code> <code>query</code> <code>declare</code> <code>function</code> <code>global</code><code>eval</code> <code>not</code> <code>in</code> <code>or</code> <code>and</code> <code>exists</code> <code>forall</code> <code>accumulate</code> <code>collect</code> <code>from</code> <code>action</code> <code>reverse</code> <code>result</code><code>end</code> <code>over</code> <code>init</code></p><p>\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rule true    //\u4E0D\u53EF\u4EE5
rule &quot;true&quot;  //\u53EF\u4EE5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-8-drools\u5185\u7F6E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-8-drools\u5185\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a> 4.8 Drools\u5185\u7F6E\u65B9\u6CD5</h3><p>\u89C4\u5219\u6587\u4EF6\u7684 <code>RHS</code> \u90E8\u5206\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u901A\u8FC7<strong>\u63D2\u5165\uFF0C\u5220\u9664\u6216\u4FEE\u6539\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684Fact\u6570\u636E</strong>\uFF0C\u6765\u8FBE\u5230\u63A7\u5236\u89C4\u5219\u5F15\u64CE\u6267\u884C\u7684\u76EE\u7684\u3002</p><p>Drools\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u64CD\u4F5C\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C<strong>\u64CD\u4F5C\u5B8C\u6210\u540E\u89C4\u5219\u5F15\u64CE\u4F1A\u91CD\u65B0\u8FDB\u884C\u76F8\u5173\u89C4\u5219\u7684\u5339\u914D</strong>\uFF0C \u539F\u6765\u6CA1\u6709\u5339\u914D\u6210\u529F\u7684\u89C4\u5219\u5728\u6211\u4EEC\u4FEE\u6539\u6570\u636E\u5B8C\u6210\u540E\u6709\u53EF\u80FD\u5C31\u4F1A\u5339\u914D\u6210\u529F\u4E86\u3002</p><p>\u521B\u5EFA\u5982\u4E0B\u5B9E\u4F53\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_4-8-1-update\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-8-1-update\u65B9\u6CD5" aria-hidden="true">#</a> 4.8.1 update\u65B9\u6CD5</h4><p>update\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u66F4\u65B0\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u8BA9\u76F8\u5173\u7684\u89C4\u5219\u91CD\u65B0\u5339\u914D\u3002(\u8981\u907F\u514D\u6B7B\u5FAA\u73AF)</p><p>\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u89C4\u5219\u6587\u4EF6 <code>/resources/rules/student.drl</code>\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 Drools \u7684\u5185\u7F6E\u65B9\u6CD5
package student
import com.zmn.drools.entity.Student

// \u5F53\u524D\u89C4\u5219\u7528\u4E8E\u6D4B\u8BD5 update \u5185\u7F6E\u65B9\u6CD5
rule &quot;rule_stu_age_lt_10&quot;
    when
        $student:Student(age &lt; 10)
    then
        $student.setAge(15);
        update($student); // update \u65B9\u6CD5\u7528\u4E8E\u66F4\u65B0 fact \u5BF9\u8C61\uFF0C\u4F1A\u5BFC\u81F4\u76F8\u5173\u89C4\u5219\u91CD\u65B0\u5339\u914D\u3002\u672C\u4F8B\u4E2D\u4F1A\u5339\u914D\u5230\u4E0B\u9762\u7684\u89C4\u5219
        System.out.println(&quot;rule_stu_age_lt_10 \u89C4\u5219\u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_sut_age_gt10_and_lt20&quot;
    when
        $student:Student(age &lt; 20 &amp;&amp; age &gt; 10)
    then
        $student.setAge(25);
        update($student); // \u540C\u7406\u6B64\u5904\u53EF\u4EE5\u518D\u6B21\u5339\u914D\u5230\u4E0B\u9762\u7684\u89C4\u5219\u3002
        System.out.println(&quot;rule_sut_age_gt10_and_lt20 \u89C4\u5219\u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_sut_age_gt20_and_lt30&quot;
    when
        $student:Student(age &lt; 30 &amp;&amp; age &gt; 20)
    then
        System.out.println(&quot;rule_sut_age_gt20_and_lt30 \u89C4\u5219\u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u6D4B\u8BD5\u5185\u7F6E\u65B9\u6CD5</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test104</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
        <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
        <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Fact\u5BF9\u8C61</span>
        <span class="token class-name">Student</span> fact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fact<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u4E8B\u5B9E\u5BF9\u8C61\u52A0\u5165\u5DE5\u4F5C\u5185\u5B58</span>
        session<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>fact<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6FC0\u6D3B\u89C4\u5219\uFF0C\u7531Drools\u6846\u67B6\u81EA\u52A8\u8FDB\u884C\u89C4\u5219\u5339\u914D\u3002</span>
        <span class="token comment">// \u5982\u679C\u89C4\u5219\u5339\u914D\u6210\u529F\uFF0C\u5219\u6267\u884C\u5F53\u524D\u89C4\u5219\u3002</span>
        session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
        session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u901A\u8FC7\u63A7\u5236\u53F0\u7684\u8F93\u51FA\u53EF\u4EE5\u770B\u5230\u89C4\u5219\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u4E09\u4E2A\u89C4\u5219\u90FD\u89E6\u53D1\u4E86\u3002</p><blockquote><p>\u5728\u66F4\u65B0\u6570\u636E\u65F6\u9700\u8981\u6CE8\u610F\u9632\u6B62\u53D1\u751F<strong>\u6B7B\u5FAA\u73AF</strong>\u3002</p></blockquote><h4 id="_4-8-2-insert\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-8-2-insert\u65B9\u6CD5" aria-hidden="true">#</a> 4.8.2 insert\u65B9\u6CD5</h4><p>insert\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5411\u5DE5\u4F5C\u5185\u5B58\u4E2D\u63D2\u5165\u6570\u636E\uFF0C\u5E76\u8BA9\u76F8\u5173\u7684\u89C4\u5219\u91CD\u65B0\u5339\u914D\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u4FEE\u6539 <code>student.drl</code> \u6587\u4EF6, \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u7528\u4E8E\u6D4B\u8BD5 insert \u5185\u7F6E\u65B9\u6CD5
rule &quot;rule_student_age_eq_10&quot;
    when
        $s:Student(age == 10)
    then
        Student student = new Student();
        student.setAge(5);
        insert(student); //\u63D2\u5165\u6570\u636E\uFF0C\u5BFC\u81F4\u76F8\u5173\u7684\u89C4\u5219\u4F1A\u91CD\u65B0\u5339\u914D
        System.out.println(&quot;rule_student_age_eq_10 \u89C4\u5219\u89E6\u53D1\u4E86&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u4FEE\u6539\u5355\u5143\u6D4B\u8BD5\uFF0C\u4FEE\u6539\u521D\u59CB\u8D4B\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fact.setAge(10);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA\u53EF\u4EE5\u53D1\u73B0\uFF0C\u56DB\u4E2A\u89C4\u5219\u90FD\u89E6\u53D1\u4E86\uFF0C\u8FD9\u662F\u56E0\u4E3A\u9996\u5148\u8FDB\u884C\u89C4\u5219\u5339\u914D\u65F6\u53EA\u6709\u7B2C\u4E00\u4E2A\u89C4\u5219\u53EF\u4EE5\u5339\u914D\u6210\u529F\uFF0C \u4F46\u662F\u5728\u7B2C\u4E00\u4E2A\u89C4\u5219\u4E2D\u5411\u5DE5\u4F5C\u5185\u5B58\u4E2D\u63D2\u5165\u4E86\u4E00\u4E2A\u6570\u636E\u5BFC\u81F4\u91CD\u65B0\u8FDB\u884C\u89C4\u5219\u5339\u914D\uFF0C\u6B64\u65F6\u7B2C\u4E8C\u4E2A\u89C4\u5219\u53EF\u4EE5\u5339\u914D\u6210\u529F\u3002</p><p>\u5728\u7B2C\u4E8C\u4E2A\u89C4\u5219\u4E2D\u8FDB\u884C\u4E86\u6570\u636E\u4FEE\u6539\u5BFC\u81F4\u7B2C\u4E09\u4E2A\u89C4\u5219\u4E5F\u53EF\u4EE5\u5339\u914D\u6210\u529F\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u6700\u7EC8\u56DB\u4E2A\u89C4\u5219\u90FD\u5339\u914D\u6210\u529F\u5E76\u6267\u884C\u4E86\u3002</p><h4 id="_4-8-3-retract\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-8-3-retract\u65B9\u6CD5" aria-hidden="true">#</a> 4.8.3 retract\u65B9\u6CD5</h4><p><code>retract</code> \u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5220\u9664\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u8BA9\u76F8\u5173\u7684\u89C4\u5219\u91CD\u65B0\u5339\u914D\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u4FEE\u6539 <code>student.drl</code> \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u7528\u4E8E\u6D4B\u8BD5 retract \u5185\u7F6E\u65B9\u6CD5
rule &quot;rule_student_age_eq_10_del&quot;
    when
        $s:Student(age == 10)
    then
        retract($s); // \u5220\u9664\u6570\u636E\uFF0C\u5BFC\u81F4\u76F8\u5173\u7684\u89C4\u5219\u4F1A\u91CD\u65B0\u5339\u914D
        System.out.println(&quot;rule_student_age_eq_10_del \u89C4\u5219\u89E6\u53D1\u4E86&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002</p></blockquote><p>\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA\u53EF\u4EE5\u53D1\u73B0\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u89C4\u5219\u89E6\u53D1\u4E86\uFF0C\u56E0\u4E3A\u5728\u7B2C\u4E00\u4E2A\u89C4\u5219\u4E2D\u5C06\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\u5220\u9664\u4E86\u5BFC\u81F4\u7B2C\u4E8C\u4E2A\u89C4\u5219\u5E76\u6CA1\u6709\u5339\u914D\u6210\u529F\u3002</p><h2 id="_5-\u89C4\u5219\u5C5E\u6027-attributes" tabindex="-1"><a class="header-anchor" href="#_5-\u89C4\u5219\u5C5E\u6027-attributes" aria-hidden="true">#</a> 5. \u89C4\u5219\u5C5E\u6027 attributes</h2><p>\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\u89C4\u5219\u4F53\u7684\u6784\u6210\u5982\u4E0B\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>rule &quot;ruleName&quot;
    [attributes]
    when
        LHS
    then
        RHS
end
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u672C\u7AE0\u8282\u5C31\u662F\u9488\u5BF9\u89C4\u5219\u4F53\u7684<strong>attributes</strong>\u5C5E\u6027\u90E8\u5206\u8FDB\u884C\u8BB2\u89E3\u3002Drools\u4E2D\u63D0\u4F9B\u7684\u5C5E\u6027\u5982\u4E0B\u8868(\u90E8\u5206\u5C5E\u6027)\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5C5E\u6027\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><code>salience</code></td><td style="text-align:left;">\u6307\u5B9A\u89C4\u5219\u6267\u884C\u4F18\u5148\u7EA7</td></tr><tr><td style="text-align:left;"><code>dialect</code></td><td style="text-align:left;">\u6307\u5B9A\u89C4\u5219\u4F7F\u7528\u7684\u8BED\u8A00\u7C7B\u578B\uFF0C\u53D6\u503C\u4E3Ajava\u548Cmvel</td></tr><tr><td style="text-align:left;"><code>enabled</code></td><td style="text-align:left;">\u6307\u5B9A\u89C4\u5219\u662F\u5426\u542F\u7528</td></tr><tr><td style="text-align:left;"><code>date-effective</code></td><td style="text-align:left;">\u6307\u5B9A\u89C4\u5219\u751F\u6548\u65F6\u95F4</td></tr><tr><td style="text-align:left;"><code>date-expires</code></td><td style="text-align:left;">\u6307\u5B9A\u89C4\u5219\u5931\u6548\u65F6\u95F4</td></tr><tr><td style="text-align:left;"><code>activation-group</code></td><td style="text-align:left;">\u6FC0\u6D3B\u5206\u7EC4\uFF0C\u5177\u6709\u76F8\u540C\u5206\u7EC4\u540D\u79F0\u7684\u89C4\u5219\u53EA\u80FD\u6709\u4E00\u4E2A\u89C4\u5219\u89E6\u53D1</td></tr><tr><td style="text-align:left;"><code>agenda-group</code></td><td style="text-align:left;">\u8BAE\u7A0B\u5206\u7EC4\uFF0C\u53EA\u6709\u83B7\u53D6\u7126\u70B9\u7684\u7EC4\u4E2D\u7684\u89C4\u5219\u624D\u6709\u53EF\u80FD\u89E6\u53D1</td></tr><tr><td style="text-align:left;"><code>timer</code></td><td style="text-align:left;">\u5B9A\u65F6\u5668\uFF0C\u6307\u5B9A\u89C4\u5219\u89E6\u53D1\u7684\u65F6\u95F4</td></tr><tr><td style="text-align:left;"><code>auto-focus</code></td><td style="text-align:left;">\u81EA\u52A8\u83B7\u53D6\u7126\u70B9\uFF0C\u4E00\u822C\u7ED3\u5408 <code>agenda-group</code> \u4E00\u8D77\u4F7F\u7528</td></tr><tr><td style="text-align:left;"><code>no-loop</code></td><td style="text-align:left;">\u9632\u6B62\u6B7B\u5FAA\u73AF</td></tr></tbody></table><h3 id="_5-1-enabled\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-1-enabled\u5C5E\u6027" aria-hidden="true">#</a> 5.1 enabled\u5C5E\u6027</h3><p><code>enabled</code> \u5C5E\u6027\u5BF9\u5E94\u7684\u53D6\u503C\u4E3A <code>true</code> \u548C <code>false</code>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p><p>\u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u89C4\u5219\u662F\u5426\u542F\u7528\uFF0C\u5982\u679C\u8BBE\u7F6E\u7684\u503C\u4E3Afalse\u5219\u5F53\u524D\u89C4\u5219\u65E0\u8BBA\u662F\u5426\u5339\u914D\u6210\u529F\u90FD\u4E0D\u4F1A\u89E6\u53D1</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>rule &quot;rule_comparison_notMemberOf&quot;
    //\u6307\u5B9A\u5F53\u524D\u89C4\u5219\u4E0D\u53EF\u7528\uFF0C\u5F53\u524D\u89C4\u5219\u65E0\u8BBA\u662F\u5426\u5339\u914D\u6210\u529F\u90FD\u4E0D\u4F1A\u6267\u884C
    enabled false
    when
        ComparisonOperatorEntity(names not memberOf list)
    then
        System.out.println(&quot;\u89C4\u5219rule_comparison_notMemberOf\u89E6\u53D1&quot;);
end
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-2-dialect\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-2-dialect\u5C5E\u6027" aria-hidden="true">#</a> 5.2 dialect\u5C5E\u6027</h3><p><code>dialect</code> \u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u89C4\u5219\u4F7F\u7528\u7684\u8BED\u8A00\u7C7B\u578B\uFF0C\u53D6\u503C\u4E3A <code>java</code> \u548C <code>mvel</code>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>java</code>\u3002</p><blockquote><p>\u6CE8\uFF1A<code>mvel</code> \u662F\u4E00\u79CD\u57FA\u4E8E <code>java</code> \u8BED\u6CD5\u7684\u8868\u8FBE\u5F0F\u8BED\u8A00\u3002</p></blockquote><p>mvel\u50CF\u6B63\u5219\u8868\u8FBE\u5F0F\u4E00\u6837\uFF0C\u6709\u76F4\u63A5\u652F\u6301\u96C6\u5408\u3001\u6570\u7EC4\u548C\u5B57\u7B26\u4E32\u5339\u914D\u7684\u64CD\u4F5C\u7B26\u3002</p><p>mvel\u8FD8\u63D0\u4F9B\u4E86\u7528\u6765\u914D\u7F6E\u548C\u6784\u9020\u5B57\u7B26\u4E32\u7684\u6A21\u677F\u8BED\u8A00\u3002</p><p>mvel\u8868\u8FBE\u5F0F\u5185\u5BB9\u5305\u62EC\u5C5E\u6027\u8868\u8FBE\u5F0F\uFF0C\u5E03\u5C14\u8868\u8FBE\u5F0F\uFF0C\u65B9\u6CD5\u8C03\u7528\uFF0C\u53D8\u91CF\u8D4B\u503C\uFF0C\u51FD\u6570\u5B9A\u4E49\u7B49\u3002</p><h3 id="_5-3-salience\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-3-salience\u5C5E\u6027" aria-hidden="true">#</a> 5.3 salience\u5C5E\u6027</h3><p>salience\u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u89C4\u5219\u7684\u6267\u884C\u4F18\u5148\u7EA7\uFF0C<strong>\u53D6\u503C\u7C7B\u578B\u4E3AInteger</strong>\u3002</p><p><strong>\u6570\u503C\u8D8A\u5927\u8D8A\u4F18\u5148\u6267\u884C</strong>\u3002\u6BCF\u4E2A\u89C4\u5219\u90FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E <code>salience</code> \u5C5E\u6027\uFF0C\u89C4\u5219\u4F53\u7684\u6267\u884C\u987A\u5E8F\u4E3A\u7531\u4E0A\u5230\u4E0B\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u89C4\u5219\u6587\u4EF6 <code>salience.drl</code> \u6765\u6D4B\u8BD5 <code>salience</code> \u5C5E\u6027\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 salience \u6267\u884C
package testsalience

// \u5B9A\u4E49\u7B2C\u4E00\u4E2A\u89C4\u5219
rule &quot;rule_1&quot;
    when
        eval(true) // \u660E\u786E\u8FD4\u56DE true, \u5373\u5F53\u524D\u89C4\u5219\u5339\u914D\u6210\u529F
    then
        System.out.println(&quot;\u89C4\u5219 rule_1 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_2&quot;
    when
        eval(true) // \u660E\u786E\u8FD4\u56DE true, \u5373\u5F53\u524D\u89C4\u5219\u5339\u914D\u6210\u529F
    then
        System.out.println(&quot;\u89C4\u5219 rule_2 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_3&quot;
    when
        eval(true) // \u660E\u786E\u8FD4\u56DE true, \u5373\u5F53\u524D\u89C4\u5219\u5339\u914D\u6210\u529F
    then
        System.out.println(&quot;\u89C4\u5219 rule_3 \u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\uFF0C\u7531\u4E8E\u4EE5\u4E0A\u4E09\u4E2A\u89C4\u5219\u6CA1\u6709\u8BBE\u7F6E <code>salience</code> \u5C5E\u6027\uFF0C\u6240\u4EE5\u6267\u884C\u7684\u987A\u5E8F\u662F\u6309\u7167\u89C4\u5219\u6587\u4EF6\u4E2D\u89C4\u5219\u7684\u987A\u5E8F\u7531\u4E0A\u5230\u4E0B\u6267\u884C\u7684\u3002 \u63A5\u4E0B\u6765\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>package testsalience

rule &quot;rule_1&quot;
    salience 9
    when
        eval(true)
    then
        System.out.println(&quot;\u89C4\u5219rule_1\u89E6\u53D1&quot;);
end

rule &quot;rule_2&quot;
    salience 10
    when
        eval(true)
    then
        System.out.println(&quot;\u89C4\u5219rule_2\u89E6\u53D1&quot;);
end

rule &quot;rule_3&quot;
    salience 8
    when
        eval(true)
    then
        System.out.println(&quot;\u89C4\u5219rule_3\u89E6\u53D1&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\uFF0C\u89C4\u5219\u6587\u4EF6\u6267\u884C\u7684\u987A\u5E8F\u662F\u6309\u7167\u6211\u4EEC\u8BBE\u7F6E\u7684 <code>salience</code> \u503C\u7531\u5927\u5230\u5C0F\u987A\u5E8F\u6267\u884C\u7684\u3002</p><blockquote><p>\u5EFA\u8BAE\u5728\u7F16\u5199\u89C4\u5219\u65F6\u4F7F\u7528 <code>salience</code> \u5C5E\u6027\u660E\u786E\u6307\u5B9A\u6267\u884C\u4F18\u5148\u7EA7\u3002</p></blockquote><h3 id="_5-4-no-loop\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-4-no-loop\u5C5E\u6027" aria-hidden="true">#</a> 5.4 no-loop\u5C5E\u6027</h3><p><code>no-loop</code> \u5C5E\u6027\u7528\u4E8E\u9632\u6B62\u6B7B\u5FAA\u73AF\uFF0C\u5F53\u89C4\u5219\u901A\u8FC7 <code>update</code> \u4E4B\u7C7B\u7684\u51FD\u6570\u4FEE\u6539\u4E86Fact\u5BF9\u8C61\u65F6\uFF0C\u53EF\u80FD\u4F7F\u5F53\u524D\u89C4\u5219\u518D\u6B21\u88AB\u6FC0\u6D3B\u4ECE\u800C\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u3002 \u53D6\u503C\u7C7B\u578B\u4E3A <code>Boolean</code>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002\u6D4B\u8BD5\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u89C4\u5219\u6587\u4EF6 <code>/resource/rules/noloop.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 no-loop, \u9632\u6B62\u89C4\u5219\u6267\u884C\u65F6\u6B7B\u5FAA\u73AF\u95EE\u9898
package testnoloop

import com.zmn.drools.entity.Student

rule &quot;rule_no_loop&quot;
    no-loop true // \u4F7F\u7528 no-loop \u6765\u89E3\u51B3\u6B7B\u5FAA\u73AF\u95EE\u9898
    when
        $s:Student(age == 50)
    then
        update($s); // \u8C03\u7528 update \u65B9\u6CD5\u4F1A\u5BFC\u81F4\u76F8\u5173\u89C4\u5219\u91CD\u65B0\u5339\u914D
        System.out.println(&quot;\u89C4\u5219 rule_no_loop \u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u5185\u5BB9\u540C\u4E0A</p></blockquote><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\uFF0C\u7531\u4E8E\u6211\u4EEC\u6CA1\u6709\u8BBE\u7F6E <code>no-loop</code> \u5C5E\u6027\u7684\u503C\uFF0C\u6240\u4EE5\u53D1\u751F\u4E86\u6B7B\u5FAA\u73AF\u3002 \u63A5\u4E0B\u6765\u8BBE\u7F6E <code>no-loop</code> \u7684\u503C\u4E3A <code>true</code> \u518D\u6B21\u6D4B\u8BD5\u5219\u4E0D\u4F1A\u53D1\u751F\u6B7B\u5FAA\u73AF\u3002</p><h3 id="_5-5-activation-group\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-5-activation-group\u5C5E\u6027" aria-hidden="true">#</a> 5.5 activation-group\u5C5E\u6027</h3><p>activation-group\u5C5E\u6027\u662F\u6307<strong>\u6FC0\u6D3B\u5206\u7EC4</strong>\uFF0C\u53D6\u503C\u4E3AString\u7C7B\u578B\u3002\u5177\u6709\u76F8\u540C\u5206\u7EC4\u540D\u79F0\u7684\u89C4\u5219\u53EA\u80FD\u6709\u4E00\u4E2A\u89C4\u5219\u88AB\u89E6\u53D1\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u89C4\u5219\u6587\u4EF6 <code>/resources/rules/activationgroup.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 activationgroup \u5C5E\u6027
package testactivationgroup

rule &quot;rule_activationgroup_1&quot;
    activation-group &quot;mygroup&quot; // \u5BF9\u4E8E\u540C\u4E00\u4E2A\u7EC4\u5185\u7684\u89C4\u5219\u53EA\u80FD\u6709\u4E00\u4E2A\u89E6\u53D1
    when
        // \u5982\u679C\u6761\u4EF6\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u4E3A true, \u8868\u793A\u89C4\u5219\u5339\u914D\u6210\u529F
    then
        System.out.println(&quot;\u89C4\u5219 rule_activationgroup_1 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_activationgroup_2&quot;
    activation-group &quot;mygroup&quot; // \u5BF9\u4E8E\u540C\u4E00\u4E2A\u7EC4\u5185\u7684\u89C4\u5219\u53EA\u80FD\u6709\u4E00\u4E2A\u89E6\u53D1
    when
        // \u5982\u679C\u6761\u4EF6\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u4E3A true, \u8868\u793A\u89C4\u5219\u5339\u914D\u6210\u529F
    then
        System.out.println(&quot;\u89C4\u5219 rule_activationgroup_2 \u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p>\u6B64\u6848\u4F8B\u4E2D\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u7684\u4F18\u5148\u7EA7\uFF0C\u5982\u679C\u9700\u8981\u8C03\u6574\u4E24\u4E2A\u7684\u4F18\u5148\u7EA7\u53EF\u4EE5\u4F7F\u7528 salience \u5C5E\u6027</p></blockquote><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u540C\u4E0A</p></blockquote><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4E0A\u9762\u7684\u4E24\u4E2A\u89C4\u5219\u56E0\u4E3A\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5206\u7EC4\uFF0C\u6240\u4EE5\u53EA\u6709\u4E00\u4E2A\u89E6\u53D1\u4E86\u3002 \u540C\u4E00\u4E2A\u5206\u7EC4\u4E2D\u7684\u591A\u4E2A\u89C4\u5219\u5982\u679C\u90FD\u80FD\u591F\u5339\u914D\u6210\u529F\uFF0C\u5177\u4F53\u54EA\u4E00\u4E2A\u6700\u7EC8\u80FD\u591F\u88AB\u89E6\u53D1\u53EF\u4EE5\u901A\u8FC7 <code>salience</code> \u5C5E\u6027\u786E\u5B9A\u3002</p><h3 id="_5-6-agenda-group\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-6-agenda-group\u5C5E\u6027" aria-hidden="true">#</a> 5.6 agenda-group\u5C5E\u6027</h3><p>agenda-group\u5C5E\u6027\u4E3A<strong>\u8BAE\u7A0B\u5206\u7EC4</strong>\uFF0C\u5C5E\u4E8E\u53E6\u4E00\u79CD\u53EF\u63A7\u7684\u89C4\u5219\u6267\u884C\u65B9\u5F0F\u3002</p><p>\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>agenda-group</code> \u6765\u63A7\u5236\u89C4\u5219\u7684\u6267\u884C\uFF0C\u53EA\u6709\u83B7\u53D6\u7126\u70B9\u7684\u7EC4\u4E2D\u7684\u89C4\u5219\u624D\u4F1A\u88AB\u89E6\u53D1\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u89C4\u5219\u6587\u4EF6 <code>/resources/rules/agendagroup.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 agenda-group \u5C5E\u6027
package testagendagroup

rule &quot;rule_agendagroup_group_1&quot;
    agenda-group &quot;agenda_group_1&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_1 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_agendagroup_group_2&quot;
    agenda-group &quot;agenda_group_1&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_2 \u89E6\u53D1\u4E86...&quot;);
end

// -------------------------------------------------------------------

rule &quot;rule_agendagroup_group_3&quot;
    agenda-group &quot;agenda_group_2&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_3 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_agendagroup_group_4&quot;
    agenda-group &quot;agenda_group_2&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_4 \u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6D4B\u8BD5 agenda-group \u5C5E\u6027</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test105</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
    <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
    <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6307\u5B9A agenda_group_1 \u83B7\u5F97\u7126\u70B9</span>
    session<span class="token punctuation">.</span><span class="token function">getAgenda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAgendaGroup</span><span class="token punctuation">(</span><span class="token string">&quot;agenda_group_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6FC0\u6D3B\u89C4\u5219\uFF0C\u7531Drools\u6846\u67B6\u81EA\u52A8\u8FDB\u884C\u89C4\u5219\u5339\u914D\u3002</span>
    <span class="token comment">// \u5982\u679C\u89C4\u5219\u5339\u914D\u6210\u529F\uFF0C\u5219\u6267\u884C\u5F53\u524D\u89C4\u5219\u3002</span>
    session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
    session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\uFF0C\u53EA\u6709\u83B7\u53D6\u7126\u70B9\u7684\u5206\u7EC4\u4E2D\u7684\u89C4\u5219\u624D\u4F1A\u88AB\u89E6\u53D1\u3002</p><p>\u4E0E <code>activation-group</code> \u4E0D\u540C\u7684\u662F\uFF0C<code>activation-group</code> \u5B9A\u4E49\u7684\u5206\u7EC4\u4E2D\u53EA\u80FD\u591F\u6709\u4E00\u4E2A\u89C4\u5219\u53EF\u4EE5\u88AB\u89E6\u53D1\uFF0C\u800C <code>agenda-group</code> \u5206\u7EC4\u4E2D\u7684\u591A\u4E2A\u89C4\u5219\u90FD\u53EF\u4EE5\u88AB\u89E6\u53D1\u3002</p><h3 id="_5-7-auto-focus\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-7-auto-focus\u5C5E\u6027" aria-hidden="true">#</a> 5.7 auto-focus\u5C5E\u6027</h3><p>auto-focus\u5C5E\u6027\u4E3A<strong>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</strong>\uFF0C\u53D6\u503C\u7C7B\u578B\u4E3A <code>Boolean</code>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002 \u4E00\u822C\u7ED3\u5408 <code>agenda-group</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u5F53\u4E00\u4E2A\u8BAE\u7A0B\u5206\u7EC4\u672A\u83B7\u53D6\u7126\u70B9\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>auto-focus</code> \u5C5E\u6027\u6765\u63A7\u5236\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u4FEE\u6539 <code>/resources/rules/agendagroup.drl</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 agenda-group \u5C5E\u6027
package testagendagroup

rule &quot;rule_agendagroup_group_1&quot;
    agenda-group &quot;agenda_group_1&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_1 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_agendagroup_group_2&quot;
    agenda-group &quot;agenda_group_1&quot;
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_2 \u89E6\u53D1\u4E86...&quot;);
end

// -------------------------------------------------------------------

rule &quot;rule_agendagroup_group_3&quot;
    agenda-group &quot;agenda_group_2&quot;
    auto-focus true //\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_3 \u89E6\u53D1\u4E86...&quot;);
end

rule &quot;rule_agendagroup_group_4&quot;
    agenda-group &quot;agenda_group_2&quot;
    auto-focus true //\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_agendagroup_group_4 \u89E6\u53D1\u4E86...&quot;);
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u540C\u4E0A</p></blockquote><p>\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u5230\uFF0C\u8BBE\u7F6E <code>auto-focus</code> \u5C5E\u6027\u4E3Atrue\u7684\u89C4\u5219\u90FD\u89E6\u53D1\u4E86\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u540C\u4E00\u4E2A\u7EC4\uFF0C\u53EA\u9700\u8981\u5176\u4E2D\u4E00\u4E2A\u89C4\u5219\u8BBE\u7F6E <code>auto-focus true</code> \u5176\u4ED6\u7684\u8BBE\u7F6E\u4E0D\u8BBE\u7F6E\u90FD\u65E0\u6240\u8C13\uFF0C\u90FD\u4F1A\u8D77\u4F5C\u7528\u7684\u3002\u5176\u4ED6\u7684\u89C4\u5219\u5373\u4F7F\u8BBE\u7F6E\u4E3A false \u4E5F\u4F1A\u751F\u6548.(\u56E0\u4E3A\u5176\u4ED6\u7684\u9ED8\u8BA4\u5C31\u662F false)</p></blockquote><h3 id="_5-8-timer\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-8-timer\u5C5E\u6027" aria-hidden="true">#</a> 5.8 timer\u5C5E\u6027</h3><p><code>timer</code> \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5B9A\u65F6\u5668\u7684\u65B9\u5F0F\u6307\u5B9A\u89C4\u5219\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u4F7F\u7528\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A<code>timer (int: &lt;initial delay&gt; &lt;repeat interval&gt;?)</code></li></ul><p>\u6B64\u79CD\u65B9\u5F0F\u9075\u5FAA <code>java.util.Timer</code> \u5BF9\u8C61\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u8868\u793A\u51E0\u79D2\u540E\u6267\u884C\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u6BCF\u9694\u51E0\u79D2\u6267\u884C\u4E00\u6B21\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u53EF\u9009\u3002</p><ul><li>\u65B9\u5F0F\u4E8C\uFF1A<code>timer(cron: &lt;cron expression&gt;)</code></li></ul><p>\u6B64\u79CD\u65B9\u5F0F\u4F7F\u7528\u6807\u51C6\u7684 Unix cron\u8868\u8FBE\u5F0F\u7684\u4F7F\u7528\u65B9\u5F0F\u6765\u5B9A\u4E49\u89C4\u5219\u6267\u884C\u7684\u65F6\u95F4\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u89C4\u5219\u6587\u4EF6 <code>/resources/rules/timer.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 timer \u5C5E\u6027
package testtimer
import java.util.Date
import java.text.SimpleDateFormat

// timer \u7B2C\u4E00\u79CD\u4F7F\u7528\u65B9\u5F0F
rule &quot;rule_timer_1&quot;
    timer(3s 2s) // \u5F53\u524D timer \u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u89C4\u5219\u89E6\u53D1\u7684\u65F6\u95F4\u30023s\u540E\u89E6\u53D1\uFF0C\u6BCF\u96942s\u89E6\u53D1\u4E00\u6B21\u3002
    when
    then
         System.out.println(&quot;\u89C4\u5219 rule_timer_1 \u89E6\u53D1\u4E86...&quot;);
end

// timer \u7B2C\u4E8C\u79CD\u4F7F\u7528\u65B9\u5F0F
rule &quot;rule_timer_2&quot;
    timer(cron:0/1 * * * * ?) // \u4ECE 0 \u79D2\u5F00\u59CB\uFF0C\u6BCF 1s \u89E6\u53D1\u4E00\u6B21
    when
    then
         System.out.println(&quot;\u89C4\u5219 rule_timer_2 \u89E6\u53D1\u4E86...\uFF0C\u89E6\u53D1\u65F6\u95F4\u4E3A\uFF1A&quot; +
            new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;).format(new Date()));
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6D4B\u8BD5 timer \u5C5E\u6027</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test106</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
    <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
    <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u542F\u52A8\u89C4\u5219\u5F15\u64CE\u8FDB\u884C\u89C4\u5219\u5339\u914D\uFF0C\u76F4\u5230\u8C03\u7528 halt \u65B9\u6CD5\u624D\u7ED3\u675F\u89C4\u5219\u5F15\u64CE</span>
    <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>session<span class="token operator">::</span><span class="token function">fireUntilHalt</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10s</span>
    <span class="token comment">// \u7ED3\u675F\u89C4\u5219\u5F15\u64CE</span>
    session<span class="token punctuation">.</span><span class="token function">halt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
    session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6CE8\u610F\uFF1A\u5355\u5143\u6D4B\u8BD5\u7684\u4EE3\u7801\u548C\u4EE5\u524D\u7684\u6709\u6240\u4E0D\u540C\uFF0C\u56E0\u4E3A\u6211\u4EEC\u89C4\u5219\u6587\u4EF6\u4E2D\u4F7F\u7528\u5230\u4E86 <code>timer</code> \u8FDB\u884C\u5B9A\u65F6\u6267\u884C\uFF0C\u9700\u8981\u7A0B\u5E8F\u80FD\u591F\u6301\u7EED\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u591F\u770B\u5230\u5B9A\u65F6\u5668\u89E6\u53D1\u7684\u6548\u679C\u3002</p><h3 id="_5-9-date-effective\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-9-date-effective\u5C5E\u6027" aria-hidden="true">#</a> 5.9 date-effective\u5C5E\u6027</h3><p><code>date-effective</code> \u5C5E\u6027<strong>\u7528\u4E8E\u6307\u5B9A\u89C4\u5219\u7684\u751F\u6548\u65F6\u95F4</strong>\uFF0C\u5373\u53EA\u6709\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\u5927\u4E8E\u7B49\u4E8E\u8BBE\u7F6E\u7684\u65F6\u95F4\u6216\u8005\u65E5\u671F\u89C4\u5219\u624D\u6709\u53EF\u80FD\u89E6\u53D1\u3002</p><p>\u9ED8\u8BA4\u65E5\u671F\u683C\u5F0F\u4E3A\uFF1A<code>dd-MMM-yyyy</code>\u3002\u7528\u6237\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u683C\u5F0F\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u89C4\u5219\u6587\u4EF6 <code>/resources/rules/dateeffective.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 dateeffective \u5C5E\u6027
package testdateeffective
import java.util.Date
import java.text.SimpleDateFormat

rule &quot;rule_date_effective_1&quot;
    date-effective &quot;2022-03-10 17:00&quot;  // \u6307\u5B9A\u5F53\u524D\u89C4\u5219\u751F\u6548\u65F6\u95F4
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_date_effective_1 \u89E6\u53D1\u4E86...\uFF0C\u89E6\u53D1\u65F6\u95F4\u4E3A\uFF1A&quot; +
                    new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;).format(new Date()));
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroolsTest</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6D4B\u8BD5 date-effective \u5C5E\u6027</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test107</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;drools.dateformat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyyy-MM-dd HH:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53D8\u91CF\u7684\u8BBE\u7F6E\u6700\u597D\u653E\u5230\u524D\u9762\uFF0C\u5982\u679C\u653E\u5230 session \u521B\u5EFA\u540E\uFF0C\u5219\u53D8\u91CF\u4E0D\u4F1A\u8D77\u4F5C\u7528</span>
    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u5F97 Kie \u5BB9\u5668</span>
    <span class="token class-name">KieContainer</span> kieContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">newKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE Kie \u5BB9\u5668\u5BF9\u8C61\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u5BF9\u8C61</span>
    <span class="token class-name">KieSession</span> session <span class="token operator">=</span> kieContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    session<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5173\u95ED\u4F1A\u8BDD</span>
    session<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6CE8\u610F\uFF1A\u4E0A\u9762\u7684\u4EE3\u7801\u9700\u8981\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u5426\u5219\u6211\u4EEC\u5728\u89C4\u5219\u6587\u4EF6\u4E2D\u5199\u7684\u65E5\u671F\u683C\u5F0F\u548C\u9ED8\u8BA4\u7684\u65E5\u671F\u683C\u5F0F\u4E0D\u5339\u914D\u7A0B\u5E8F\u4F1A\u62A5\u9519\u3002</p><h3 id="_5-10-date-expires\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-10-date-expires\u5C5E\u6027" aria-hidden="true">#</a> 5.10 date-expires\u5C5E\u6027</h3><p>date-expires\u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u89C4\u5219\u7684<strong>\u5931\u6548\u65F6\u95F4</strong>\uFF0C\u5373\u53EA\u6709\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\u5C0F\u4E8E\u8BBE\u7F6E\u7684\u65F6\u95F4\u6216\u8005\u65E5\u671F\u89C4\u5219\u624D\u6709\u53EF\u80FD\u89E6\u53D1\u3002</p><p>\u9ED8\u8BA4\u65E5\u671F\u683C\u5F0F\u4E3A\uFF1A<code>dd-MMM-yyyy</code>\u3002\u7528\u6237\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u683C\u5F0F\u3002</p><p>\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u89C4\u5219\u6587\u4EF6 <code>/resource/rules/dateexpires.drl</code></p><div class="language-drools ext-drools line-numbers-mode"><pre class="language-drools"><code>// \u5F53\u524D\u89C4\u5219\u6587\u4EF6\u7528\u4E8E\u6D4B\u8BD5 dateexpires \u5C5E\u6027
package testdateeffective
import java.util.Date
import java.text.SimpleDateFormat

rule &quot;rule_date_expires_1&quot;
    date-expires &quot;2022-03-10 19:00&quot;  // \u6307\u5B9A\u5F53\u524D\u89C4\u5219\u5931\u6548\u65F6\u95F4
    when
    then
        System.out.println(&quot;\u89C4\u5219 rule_date_expires_1 \u89E6\u53D1\u4E86...\uFF0C\u89E6\u53D1\u65F6\u95F4\u4E3A\uFF1A&quot; +
                    new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;).format(new Date()));
end
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u4EE3\u7801\u540C <code>date-effective</code> \u6848\u4F8B</p></blockquote><p>\u6CE8\u610F\uFF1A\u4E0A\u9762\u7684\u4EE3\u7801\u9700\u8981\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u5426\u5219\u6211\u4EEC\u5728\u89C4\u5219\u6587\u4EF6\u4E2D\u5199\u7684\u65E5\u671F\u683C\u5F0F\u548C\u9ED8\u8BA4\u7684\u65E5\u671F\u683C\u5F0F\u4E0D\u5339\u914D\u7A0B\u5E8F\u4F1A\u62A5\u9519\u3002</p>`,177);function t(p,l){return e}var o=n(a,[["render",t],["__file","index.html.vue"]]);export{o as default};
