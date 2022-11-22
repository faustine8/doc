import{_ as n,c as s}from"./app.40df414d.js";const a={},t=s(`<h1 id="_3-\u6570\u636E\u7C7B\u578B\u4E0E\u6587\u4EF6\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7C7B\u578B\u4E0E\u6587\u4EF6\u683C\u5F0F" aria-hidden="true">#</a> 3. \u6570\u636E\u7C7B\u578B\u4E0E\u6587\u4EF6\u683C\u5F0F</h1><p>Hive \u652F\u6301\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u7EDD\u5927\u591A\u6570<em>\u57FA\u672C\u6570\u636E\u7C7B\u578B</em>\uFF0C\u540C\u65F6\u4E5F\u652F\u63014\u79CD<em>\u96C6\u5408\u6570\u636E\u7C7B\u578B</em>\u3002</p><h2 id="_3-1-\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53CA\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_3-1-\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53CA\u8F6C\u6362" aria-hidden="true">#</a> 3.1 \u57FA\u672C\u6570\u636E\u7C7B\u578B\u53CA\u8F6C\u6362</h2><p>Hive \u548C Java \u8BED\u8A00\u4E2D\u7C7B\u4F3C\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u957F\u5EA6\u7684\u6574\u578B\u548C\u6D6E\u70B9\u7C7B\u578B\u6570\u636E\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5E03\u5C14\u7C7B\u578B\u3001\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u65F6\u95F4\u6233\u6570\u636E\u7C7B\u578B\u4EE5\u53CA\u4E8C\u8FDB\u5236\u6570\u7EC4\u6570\u636E\u7C7B\u578B\u7B49\u3002</p><p>\u5177\u4F53\u7684\u5982\u4E0B\u8868:</p><table><thead><tr><th>\u5927\u7C7B</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>Integers(\u6574\u578B)</td><td>TINYINT: 1\u5B57\u8282\u7684\u6709\u7B26\u53F7\u6574\u6570; <br> SMALLINT: 2\u5B57\u8282\u7684\u6709\u7B26\u53F7\u6574\u6570; <br> INT: 4\u5B57\u8282\u7684\u6709\u7B26\u53F7\u6574\u6570; <br> BIGINT: 8\u5B57\u8282\u7684\u6709\u7B26\u53F7\u6574\u6570</td></tr><tr><td>Floating point numbers(\u6D6E\u70B9\u6570)</td><td>FLOAT: \u5355\u7CBE\u5EA6\u6D6E\u70B9\u6570; <br> DOUBLE: \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570</td></tr><tr><td>Fixed point numbers(\u5B9A\u70B9\u6570)</td><td>DECIMAL: 17\u5B57\u8282\uFF0C\u4EFB\u610F\u7CBE\u5EA6\u6570\u5B57\u3002\u901A\u5E38\u7528\u6237\u81EA\u5B9A\u4E49decimal(12, 6)</td></tr><tr><td>String(\u5B57\u7B26\u4E32)</td><td>STRING: \u53EF\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u4E0D\u5B9A\u957F\u5B57\u7B26\u4E32; <br> VARCHAR: 1-65535\u957F\u5EA6\u7684\u4E0D\u5B9A\u957F\u5B57\u7B26\u4E32; <br> CHAR: 1-255\u5B9A\u957F\u5B57\u7B26\u4E32</td></tr><tr><td>Datetime(\u65F6\u95F4\u65E5\u671F\u7C7B\u578B)</td><td>TIMESTAMP: \u65F6\u95F4\u6233(\u7EB3\u79D2\u7CBE\u5EA6); <br> DATE: \u65F6\u95F4\u65E5\u671F\u7C7B\u578B</td></tr><tr><td>Boolean(\u5E03\u5C14\u7C7B\u578B)</td><td>BOOLEAN: TRUE / FALSE</td></tr><tr><td>Binary types(\u4E8C\u8FDB\u5236\u7C7B\u578B)</td><td>BINARY: \u5B57\u8282\u5E8F\u5217</td></tr></tbody></table><p>\u8FD9\u4E9B\u7C7B\u578B\u540D\u79F0\u90FD\u662F Hive \u4E2D\u4FDD\u7559\u5B57\u3002\u8FD9\u4E9B\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u90FD\u662F Java \u4E2D\u7684\u63A5\u53E3\u8FDB\u884C\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u4E0E Java \u4E2D\u6570\u636E\u7C7B\u578B\u662F\u57FA\u672C\u4E00\u81F4\u7684:</p><table><thead><tr><th>Hive\u6570\u636E\u7C7B\u578B</th><th>Java\u6570\u636E\u7C7B\u578B</th><th>\u957F\u5EA6</th><th>\u6837\u4F8B</th></tr></thead><tbody><tr><td>TINYINT</td><td></td><td>1byte\u6709\u7B26\u53F7\u6574\u6570</td><td>20</td></tr><tr><td>SMALLINT</td><td></td><td>2byte\u6709\u7B26\u53F7\u6574\u6570</td><td>30</td></tr><tr><td>INT</td><td></td><td>4byte\u6709\u7B26\u53F7\u6574\u6570</td><td>40</td></tr><tr><td>BIGINT</td><td></td><td>8byte\u6709\u7B26\u53F7\u6574\u6570</td><td>50</td></tr><tr><td>BOOLEAN</td><td></td><td>\u5E03\u5C14\u7C7B\u578B</td><td>TURE/FALSE</td></tr><tr><td>FLOAT</td><td></td><td>\u5355\u7CBE\u5EA6\u6D6E\u70B9\u6570</td><td>3.14159</td></tr><tr><td>DOUBLE</td><td></td><td>\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570</td><td>3.14159</td></tr><tr><td>STRING</td><td></td><td>\u5B57\u7B26\u7CFB\u5217\uFF0C\u53EF\u6307\u5B9A\u5B57\u7B26\u96C6;\u53EF\u4F7F\u7528\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7</td><td>&#39;The Apache Hive data warehouse software facilitates&#39;</td></tr><tr><td>TIMESTAMP</td><td></td><td>\u65F6\u95F4\u7C7B\u578B</td><td></td></tr><tr><td>BINARY</td><td></td><td>\u5B57\u8282\u6570\u7EC4</td><td></td></tr></tbody></table><p><strong>\u6570\u636E\u7C7B\u578B\u7684\u9690\u5F0F\u8F6C\u6362</strong></p><p>Hive \u7684\u6570\u636E\u7C7B\u578B\u662F\u53EF\u4EE5\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362\u7684\uFF0C\u7C7B\u4F3C\u4E8E Java \u7684\u7C7B\u578B\u8F6C\u6362\u3002</p><p>\u5982\u7528\u6237\u5728\u67E5\u8BE2\u4E2D\u5C06\u4E00\u79CD\u6D6E\u70B9\u7C7B\u578B\u548C\u53E6\u4E00\u79CD\u6D6E\u70B9\u7C7B\u578B\u7684\u503C\u505A\u5BF9\u6BD4\uFF0CHive \u4F1A\u5C06\u7C7B\u578B\u8F6C\u6362\u6210\u4E24\u4E2A\u6D6E\u70B9\u7C7B\u578B\u4E2D\u503C\u8F83\u5927\u7684\u90A3\u4E2A\u7C7B\u578B\uFF0C \u5373: \u5C06 FLOAT \u7C7B\u578B\u8F6C\u6362\u6210 DOUBLE \u7C7B\u578B; \u5F53\u7136\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u4EFB\u610F\u6574\u578B\u4F1A\u8F6C\u5316\u6210 DOUBLE \u7C7B\u578B\u3002</p><p>Hive \u4E2D\u57FA\u672C\u6570\u636E\u7C7B\u578B\u9075\u5FAA\u4EE5\u4E0B\u5C42\u6B21\u7ED3\u6784\uFF0C\u6309\u7167\u8FD9\u4E2A\u5C42\u6B21\u7ED3\u6784\uFF0C\u5B50\u7C7B\u578B\u5230\u7956\u5148\u7C7B\u578B\u5141\u8BB8\u9690\u5F0F\u8F6C\u6362\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Number -&gt; DOUBLE -&gt; FLOAT -&gt; BIGINT -&gt; INT -&gt; SMALLINT -&gt; TINYINT

\u4ECE\u53F3\u5230\u5DE6\uFF0C\u8303\u56F4\u8D8A\u6765\u8D8A\u5E7F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u603B\u7684\u6765\u8BF4\uFF0C\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5F8B\uFF1A</p><p><em>\u4EFB\u4F55\u6574\u6570\u7C7B\u578B\u90FD\u53EF\u4EE5\u9690\u5F0F\u8F6C\u6362\u4E3A\u4E00\u4E2A\u8303\u56F4\u66F4\u5E7F\u7684\u7C7B\u578B</em></p><p><em>\u6240\u6709\u6574\u6570\u7C7B\u578B\u3001Float\u3001string(string\u7684\u5185\u5BB9\u5FC5\u987B\u90FD\u662F\u6570\u5B57)\u90FD\u53EF\u4EE5\u9690\u5F0F\u8F6C\u6362\u4E3ADouble</em></p><p><em>Boolean\u7C7B\u578B\u4E0D\u80FD\u8F6C\u6362</em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token string">&quot;1.0&quot;</span> + <span class="token number">2</span><span class="token punctuation">;</span>
OK
_c0
<span class="token number">3.0</span>
Time taken: <span class="token number">2.468</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token string">&quot;666&quot;</span> <span class="token operator">&gt;</span> <span class="token number">665</span><span class="token punctuation">;</span>
OK
_c0
<span class="token boolean">true</span>
Time taken: <span class="token number">0.221</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u6570\u636E\u7C7B\u578B\u7684\u663E\u793A\u8F6C\u6362</strong></p><p>\u4F7F\u7528 <code>cast</code> \u51FD\u6570\u8FDB\u884C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362; \u5982\u679C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u5931\u8D25\uFF0C\u8FD4\u56DE NULL</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token string">&#39;666s&#39;</span> as int<span class="token punctuation">)</span><span class="token punctuation">;</span>
OK
_c0
NULL
Time taken: <span class="token number">0.152</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token string">&#39;1111&#39;</span> as int<span class="token punctuation">)</span><span class="token punctuation">;</span>
OK
_c0
<span class="token number">1111</span>
Time taken: <span class="token number">0.129</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-2-\u96C6\u5408\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u96C6\u5408\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 3.2 \u96C6\u5408\u6570\u636E\u7C7B\u578B</h2><p>Hive \u652F\u6301\u96C6\u5408\u6570\u636E\u7C7B\u578B\uFF0C\u5305\u62EC <code>array</code>\u3001<code>map</code>\u3001<code>struct</code>\u3001<code>union</code></p><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th><th>\u5B57\u9762\u91CF\u793A\u4F8B</th></tr></thead><tbody><tr><td>ARRAY</td><td>\u6709\u5E8F\u7684\u76F8\u540C\u6570\u636E\u7C7B\u578B\u7684\u96C6\u5408</td><td>array(1,2)</td></tr><tr><td>MAP</td><td>key-value \u5BF9\u3002key \u5FC5\u987B\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0Cvalue \u4E0D\u9650</td><td>map(&#39;a&#39;, 1, &#39;b&#39;,2)</td></tr><tr><td>STRUCT</td><td>\u4E0D\u540C\u7C7B\u578B\u5B57\u6BB5\u7684\u96C6\u5408\u3002\u7C7B\u4F3C\u4E8E C \u8BED\u8A00\u7684\u7ED3\u6784\u4F53</td><td>struct(&#39;1&#39;,1,1.0), named_struct(&#39;col1&#39;, &#39;1&#39;, &#39;col2&#39;, 1, &#39;clo3&#39;, 1.0)</td></tr><tr><td>UNION</td><td>\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u5B58\u50A8\u5728\u540C\u4E00\u5B57\u6BB5\u7684\u4E0D\u540C\u884C\u4E2D</td><td>create_union(1, &#39;a&#39;, 63)</td></tr></tbody></table><p>\u548C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E00\u6837\uFF0C\u8FD9\u4E9B\u7C7B\u578B\u7684\u540D\u79F0\u540C\u6837\u662F\u4FDD\u7559\u5B57;</p><p><code>ARRAY</code> \u548C <code>MAP</code> \u4E0E Java \u4E2D\u7684 <code>Array</code> \u548C <code>Map</code> \u7C7B\u4F3C;</p><p><code>STRUCT</code> \u4E0E C \u8BED\u8A00\u4E2D\u7684 <code>Struct</code> \u7C7B\u4F3C\uFF0C\u5B83\u5C01\u88C5\u4E86\u4E00\u4E2A\u547D\u540D\u5B57\u6BB5\u96C6\u5408\uFF0C\u590D\u6742\u6570\u636E\u7C7B\u578B\u5141\u8BB8\u4EFB\u610F\u5C42\u6B21\u7684\u5D4C\u5957;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> array<span class="token punctuation">(</span><span class="token number">1,2</span>,3<span class="token punctuation">)</span> as myarr<span class="token punctuation">;</span>
OK
myarr
<span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>
Time taken: <span class="token number">0.237</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 [] \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20</span>
hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> from <span class="token punctuation">(</span>select array<span class="token punctuation">(</span><span class="token number">1,2</span>,3<span class="token punctuation">)</span> arr<span class="token punctuation">)</span> tmp<span class="token punctuation">;</span>
OK
_c0
<span class="token number">1</span>
Time taken: <span class="token number">0.137</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> map<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span>, <span class="token number">1</span>, <span class="token string">&#39;b&#39;</span>, <span class="token number">2</span>, <span class="token string">&#39;c&#39;</span>, <span class="token number">3</span><span class="token punctuation">)</span> as mymap<span class="token punctuation">;</span>
OK
mymap
<span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span>:1,<span class="token string">&quot;b&quot;</span>:2,<span class="token string">&quot;c&quot;</span>:3<span class="token punctuation">}</span>
Time taken: <span class="token number">0.142</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 [] \u8BBF\u95EEmap\u5143\u7D20</span>
hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> mymap<span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span> from <span class="token punctuation">(</span>select map<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span>, <span class="token number">1</span>, <span class="token string">&#39;b&#39;</span>, <span class="token number">2</span>, <span class="token string">&#39;c&#39;</span>, <span class="token number">3</span><span class="token punctuation">)</span> as mymap<span class="token punctuation">)</span> tmp<span class="token punctuation">;</span>
OK
_c0
<span class="token number">1</span>
Time taken: <span class="token number">0.152</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 [] \u8BBF\u95EEmap\u5143\u7D20\u3002 key \u4E0D\u5B58\u5728\u8FD4\u56DE NULL</span>
hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> mymap<span class="token punctuation">[</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span> from <span class="token punctuation">(</span>select map<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span>, <span class="token number">1</span>, <span class="token string">&#39;b&#39;</span>, <span class="token number">2</span>, <span class="token string">&#39;c&#39;</span>, <span class="token number">3</span><span class="token punctuation">)</span> as mymap<span class="token punctuation">)</span> tmp<span class="token punctuation">;</span>
OK
_c0
NULL
Time taken: <span class="token number">0.132</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> struct<span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span>, <span class="token number">7</span>, <span class="token number">1288.68</span><span class="token punctuation">)</span> as userinfo<span class="token punctuation">;</span>
OK
userinfo
<span class="token punctuation">{</span><span class="token string">&quot;col1&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;john&quot;</span>,<span class="token string">&quot;col2&quot;</span>:7,<span class="token string">&quot;col3&quot;</span>:1288.68<span class="token punctuation">}</span>
Time taken: <span class="token number">0.145</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u7ED9 struct \u4E2D\u7684\u5B57\u6BB5\u547D\u540D</span>
hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> named_struct<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;john&quot;</span>, <span class="token string">&quot;id&quot;</span>, <span class="token number">7</span>, <span class="token string">&quot;salary&quot;</span>, <span class="token number">12880.68</span><span class="token punctuation">)</span> as userinfo<span class="token punctuation">;</span>
OK
userinfo
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;john&quot;</span>,<span class="token string">&quot;id&quot;</span>:7,<span class="token string">&quot;salary&quot;</span>:12880.68<span class="token punctuation">}</span>
Time taken: <span class="token number">0.139</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 \u5217\u540D.\u5B57\u6BB5\u540D \u8BBF\u95EE\u5177\u4F53\u4FE1\u606F</span>
hive <span class="token punctuation">(</span>default<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> userinfo.id, userinfo.name from <span class="token punctuation">(</span>select named_struct<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;john&quot;</span>, <span class="token string">&quot;id&quot;</span>, <span class="token number">7</span>, <span class="token string">&quot;salary&quot;</span>, <span class="token number">12880.68</span><span class="token punctuation">)</span> userinfo<span class="token punctuation">)</span> tmp<span class="token punctuation">;</span>
OK
<span class="token function">id</span>      name
<span class="token number">7</span>       john
Time taken: <span class="token number">0.147</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># union \u6570\u636E\u7C7B\u578B</span>
hive<span class="token operator">&gt;</span> <span class="token keyword">select</span> create_union<span class="token punctuation">(</span><span class="token number">0</span>, <span class="token string">&quot;john&quot;</span>, <span class="token number">19</span>, <span class="token number">8000.88</span><span class="token punctuation">)</span> uinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="_3-3-\u6587\u672C\u6587\u4EF6\u6570\u636E\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6587\u672C\u6587\u4EF6\u6570\u636E\u7F16\u7801" aria-hidden="true">#</a> 3.3 \u6587\u672C\u6587\u4EF6\u6570\u636E\u7F16\u7801</h2><p>Hive\u8868\u4E2D\u7684\u6570\u636E\u5B58\u50A8\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E0A\uFF0CHive\u5B9A\u4E49\u4E86\u9ED8\u8BA4\u7684\u5B58\u50A8\u683C\u5F0F\uFF0C\u4E5F\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\u6587\u4EF6\u5B58\u50A8\u683C\u5F0F\u3002</p><p>Hive\u9ED8\u8BA4\u4F7F\u7528\u51E0\u4E2A\u5F88\u5C11\u51FA\u73B0\u5728\u5B57\u6BB5\u503C\u4E2D\u7684\u63A7\u5236\u5B57\u7B26\uFF0C\u6765\u8868\u793A\u66FF\u6362\u9ED8\u8BA4\u5206\u9694\u7B26\u7684\u5B57\u7B26\u3002</p><p>Hive\u9ED8\u8BA4\u5206\u9694\u7B26</p><table><thead><tr><th>\u5206\u9694\u7B26</th><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>\\n</code></td><td>\u6362\u884C\u7B26</td><td>\u7528\u4E8E\u5206\u9694\u884C\u3002\u6BCF\u4E00\u884C\u662F\u4E00\u6761\u8BB0\u5F55\uFF0C\u4F7F\u7528\u6362\u884C\u7B26\u5206\u5272\u6570\u636E</td></tr><tr><td><code>^A</code></td><td><code>&lt;Ctrl&gt;+A</code></td><td>\u7528\u4E8E\u5206\u9694\u5B57\u6BB5\u3002\u5728 <code>CREATE TABLE</code> \u8BED\u53E5\u4E2D\u4F7F\u7528\u516B\u8FDB\u5236\u7F16\u7801 <code>\\001</code> \u8868\u793A</td></tr><tr><td><code>^B</code></td><td><code>&lt;Ctrl&gt;+B</code></td><td>\u7528\u4E8E\u5206\u9694 <code>ARRAY</code>\u3001<code>MAP</code>\u3001<code>STRUCT</code> \u4E2D\u7684\u5143\u7D20\u3002\u5728 <code>CREATE TABLE</code> \u8BED\u53E5\u4E2D\u4F7F\u7528\u516B\u8FDB\u5236\u7F16\u7801 <code>\\002</code> \u8868\u793A</td></tr><tr><td><code>^C</code></td><td><code>&lt;Ctrl+C&gt;</code></td><td>Map \u4E2D <code>key</code>\u3001<code>value</code> \u4E4B\u95F4\u7684\u5206\u9694\u7B26\u3002\u5728 <code>CREATE TABLE</code> \u8BED\u53E5\u4E2D\u4F7F\u7528\u516B\u8FDB\u5236\u7F16\u7801 <code>\\003</code> \u8868\u793A</td></tr></tbody></table><p>Hive \u4E2D\u6CA1\u6709\u5B9A\u4E49\u4E13\u95E8\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u6570\u636E\u683C\u5F0F\u53EF\u4EE5\u7531\u7528\u6237\u6307\u5B9A\uFF0C\u7528\u6237\u5B9A\u4E49\u6570\u636E\u683C\u5F0F\u9700\u8981\u6307\u5B9A\u4E09\u4E2A\u5C5E\u6027: \u5217\u5206\u9694\u7B26(\u901A\u5E38\u4E3A\u7A7A\u683C\u3001&quot;\\t&quot;\u3001&quot;\\x001&quot;)\u3001\u884C\u5206\u9694\u7B26(&quot;\\n&quot;)\u4EE5\u53CA\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\u7684\u65B9\u6CD5\u3002</p><p>\u5728\u52A0\u8F7D\u6570\u636E\u7684\u8FC7\u7A0B\u4E2D\uFF0CHive \u4E0D\u4F1A\u5BF9\u6570\u636E\u672C\u8EAB\u8FDB\u884C\u4EFB\u4F55\u4FEE\u6539\uFF0C\u800C\u53EA\u662F\u5C06\u6570\u636E\u5185\u5BB9\u590D\u5236\u6216\u8005\u79FB\u52A8\u5230\u76F8\u5E94\u7684 HDFS \u76EE\u5F55\u4E2D\u3002</p><p>\u5C06 Hive \u6570\u636E\u5BFC\u51FA\u5230\u672C\u5730\u65F6\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u662F <code>^A</code>\u3001<code>^B</code>\u3001<code>^C</code> \u8FD9\u4E9B\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F7F\u7528 cat \u6216\u8005 vim \u662F\u770B\u4E0D\u5230\u7684;</p><p>\u5728 vi \u4E2D\u8F93\u5165\u7279\u6B8A\u5B57\u7B26:</p><ul><li>(Ctrl + v) + (Ctrl + a) =&gt; ^A</li><li>(Ctrl + v) + (Ctrl + b) =&gt; ^B</li><li>(Ctrl + v) + (Ctrl + c) =&gt; ^C</li></ul><p><code>^A</code>/<code>^B</code>/<code>^C</code> \u90FD\u662F\u7279\u6B8A\u7684\u63A7\u5236\u5B57\u7B26\uFF0C\u4F7F\u7528 <code>more</code>\u3001<code>cat</code> \u547D\u4EE4\u662F\u770B\u4E0D\u89C1\u7684; \u53EF\u4EE5\u4F7F\u7528 <code>cat -A file.dat</code></p><h2 id="_3-4-\u8BFB\u65F6\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-4-\u8BFB\u65F6\u6A21\u5F0F" aria-hidden="true">#</a> 3.4 \u8BFB\u65F6\u6A21\u5F0F</h2><p>\u5728\u4F20\u7EDF\u6570\u636E\u5E93\u4E2D\uFF0C\u5728\u52A0\u8F7D\u65F6\u53D1\u73B0\u6570\u636E\u4E0D\u7B26\u5408\u8868\u7684\u5B9A\u4E49\uFF0C\u5219\u62D2\u7EDD\u52A0\u8F7D\u6570\u636E\u3002 \u6570\u636E\u5728<em>\u5199\u5165</em>\u6570\u636E\u5E93\u65F6\u5BF9\u7167\u8868\u6A21\u5F0F\u8FDB\u884C\u68C0\u67E5\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u79F0\u4E3A&quot;\u5199\u65F6\u6A21\u5F0F&quot;(schema on write)\u3002</p><p>\u5199\u65F6\u6A21\u5F0F -&gt; \u5199\u6570\u636E\u68C0\u67E5 -&gt; RDBMS;</p><p>Hive\u4E2D\u6570\u636E\u52A0\u8F7D\u8FC7\u7A0B\u91C7\u7528&quot;\u8BFB\u65F6\u6A21\u5F0F&quot;(schema on read)\uFF0C\u52A0\u8F7D\u6570\u636E\u65F6\u4E0D\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u7684\u6821\u9A8C\uFF0C<em>\u8BFB\u53D6\u6570\u636E\u65F6\u5982\u679C\u4E0D\u5408\u6CD5\u5219\u663E\u793ANULL</em>\u3002\u8FD9\u79CD\u6A21\u5F0F\u7684\u4F18\u70B9\u662F\u52A0\u8F7D\u6570\u636E\u8FC5\u901F\u3002</p><p>\u8BFB\u65F6\u6A21\u5F0F -&gt; \u8BFB\u65F6\u68C0\u67E5\u6570\u636E -&gt; Hive;</p><ul><li>\u597D\u5904: \u52A0\u8F7D\u6570\u636E\u5FEB</li><li>\u95EE\u9898: \u6570\u636E\u663E\u793A NULL</li></ul>`,45);function e(p,o){return t}var l=n(a,[["render",e],["__file","index.html.vue"]]);export{l as default};