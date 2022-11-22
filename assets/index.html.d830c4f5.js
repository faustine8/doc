import{_ as n,c as s}from"./app.40df414d.js";const a={},e=s(`<h1 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> Vue CLI</h1><p>Vue CLI \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u8FDB\u884C\u5FEB\u901F\u5F00\u53D1\u7684\u5B8C\u6574\u7CFB\u7EDF\uFF0C\u79F0\u4E3A\u811A\u624B\u67B6\u5DE5\u5177\u3002</p><p>\u7279\u70B9\uFF1A</p><ul><li>\u63D0\u4F9B\u4E86\u7EDF\u4E00\u9879\u76EE\u7684\u67B6\u6784\u98CE\u683C\u3002</li><li>\u63D0\u4F9B\u4E86\u521D\u59CB\u5316\u914D\u7F6E\u9879\u76EE\u4F9D\u8D56\u3002</li><li>\u63D0\u4F9B\u4E86\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u652F\u6301\u3002</li></ul><blockquote><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\uFF1A\u5355\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5173\u4E8E\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u7ED3\u6784\u3001\u6837\u5F0F\u4EE5\u53CA\u903B\u8F91\u90FD\u5199\u5728\u5185\u90E8\uFF0C\u901A\u8FC7 VueCli \u7684\u5904\u7406\uFF0C\u5E2E\u6211\u4EEC\u81EA\u52A8\u7684\u5904\u7406\u4E3A\u53EF\u8FD0\u884C\u7684\u5F62\u5F0F\u3002 \u8FD9\u6837\u4E66\u5199\u65F6\u53EF\u7EF4\u62A4\u6027\u6BD4\u8F83\u9AD8\uFF0C\u5904\u7406\u4E4B\u540E\u53C8\u53D8\u6210\u4E86\u53EF\u8FD0\u884C\u7684\u6587\u4EF6\uFF0C\u8FD9\u5BF9\u6211\u4EEC\u7684\u9879\u76EE\u662F\u975E\u5E38\u6709\u5E2E\u52A9\u7684\u3002</p></blockquote><p>\u64CD\u4F5C\u65B9\u5F0F: \u547D\u4EE4\u884C\u5DE5\u5177\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> <span class="token function">npm</span> i -g @vue/cli
<span class="token comment"># \u5347\u7EA7</span>
<span class="token function">sudo</span> <span class="token function">npm</span> update -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u9879\u76EE\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u642D\u5EFA" aria-hidden="true">#</a> \u9879\u76EE\u642D\u5EFA</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u9879\u76EE</span>
vue create project-demo
<span class="token comment"># \u9009\u62E9 Preset (Default \u5373\u53EF)</span>
<span class="token comment"># \u9009\u62E9\u5305\u7BA1\u7406\u5668 (npm \u5373\u53EF)</span>
<span class="token comment"># \u521B\u5EFA\u5B8C\u6210</span>

<span class="token comment"># \u9009\u62E9\u81EA\u5B9A\u4E49\u65B9\u6848\u7684\u65F6\u5019</span>
<span class="token comment"># \u7A7A\u683C \u64CD\u4F5C\u9009\u62E9\u548C\u53D6\u6D88\u52FE\u9009; \u56DE\u8F66\u952E \u64CD\u4F5C\u8FDB\u5165\u4E0B\u4E00\u6B65</span>

<span class="token comment"># \u8FD0\u884C\u9879\u76EE</span>
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr><p>\u5982\u679C\u4FDD\u5B58\u4E3A\u9884\u8BBE\u4E4B\u540E\uFF0C\u4E0B\u4E00\u6B21\u518D\u521B\u5EFA\u9879\u76EE\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u9009\u62E9\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>? Please pick a preset: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F demo-preset <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> less, babel, router, eslint<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
  Manually <span class="token keyword">select</span> features
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9884\u8BBE\u4FE1\u606F\u4FDD\u5B58\u5728 Home \u76EE\u5F55\u4E0B\u7684 <code>.vuerc</code> \u6587\u4EF6\u4E2D.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;useTaobaoRegistry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;demo-preset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;useConfigFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@vue/cli-plugin-babel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@vue/cli-plugin-router&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;historyMode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@vue/cli-plugin-eslint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lintOn&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;save&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;vueVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cssPreprocessor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;less&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5982\u679C\u4E0D\u60F3\u518D\u8981\u8FD9\u4E2A\u9884\u8BBE\uFF0C\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u5220\u9664\u8FD9\u4E2A <code>.vuerc</code> \u6587\u4EF6\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="\u76EE\u5F55\u4E0E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u4E0E\u6587\u4EF6" aria-hidden="true">#</a> \u76EE\u5F55\u4E0E\u6587\u4EF6</h2><p>\u6587\u4EF6\u76EE\u5F55\u4ECB\u7ECD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 public           \u9884\u89C8\u6587\u4EF6\u76EE\u5F55
\u251C\u2500\u2500 src
\u2502    \u251C\u2500\u2500 App.vue     \u6839\u7EC4\u4EF6
\u2502    \u251C\u2500\u2500 assets      \u9759\u6001\u8D44\u6E90\u76EE\u5F55
\u2502    \u251C\u2500\u2500 components  \u9879\u76EE\u7EC4\u4EF6\u76EE\u5F55
\u2502    \u2514\u2500\u2500 main.js     \u5165\u53E3\u6587\u4EF6
\u2514\u2500\u2500 vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5355\u6587\u4EF6\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5355\u6587\u4EF6\u7EC4\u4EF6" aria-hidden="true">#</a> \u5355\u6587\u4EF6\u7EC4\u4EF6</h3><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u7684\u529F\u80FD\u7EDF\u4E00\u4FDD\u5B58\u5728\u4EE5 <code>.vue</code> \u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\u4E2D\u3002</p><h2 id="\u6253\u5305\u4E0E\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u4E0E\u90E8\u7F72" aria-hidden="true">#</a> \u6253\u5305\u4E0E\u90E8\u7F72</h2><h3 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h3><p>\u6253\u5305\u5C31\u662F\u5C06 Vue CLI \u9879\u76EE\u7F16\u8BD1\u4E3A\u6D4F\u89C8\u5668\u53EF\u8BC6\u522B\u7684\u6587\u4EF6\u3002</p><p>\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h3><p>\u90E8\u7F72\u6307\u7684\u662F\u5C06 Vue \u9879\u76EE dist \u76EE\u5F55\u90E8\u7F72\u5230\u670D\u52A1\u5668\u4E0A\u3002</p><p>\u5B89\u88C5\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668: <code>npm install \u2013g serve</code></p><p>\u5728 dist \u4E0B\u901A\u8FC7 <code>serve</code> \u547D\u4EE4\u90E8\u7F72</p><blockquote><p>\u8FD9\u662F\u6BD4\u8F83\u8FDC\u53E4\u7684\u65B9\u5F0F\u4E86\u3002</p></blockquote>`,31);function p(t,o){return e}var c=n(a,[["render",p],["__file","index.html.vue"]]);export{c as default};
