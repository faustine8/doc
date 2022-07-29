import{_ as n,c as s}from"./app.86f19023.js";const a={},e=s(`<p>\u73AF\u5883\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm \u914D\u7F6E\u6DD8\u5B9D\u4EE3\u7406</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
<span class="token comment"># \u53D6\u6D88\u4EE3\u7406</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org
<span class="token comment"># \u67E5\u770B npm \u4EE3\u7406</span>
<span class="token function">npm</span> info underscore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B89\u88C5 Less</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">less</span>
<span class="token comment"># \u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F</span>
lessc -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B89\u88C5 yarn</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
<span class="token comment"># \u914D\u7F6E\u4E0B\u8F7D\u6E90</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u62A5\u9519\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>This is a problem related to network connectivity.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD0\u884C <code>npm config set proxy null</code></p>`,9);function p(c,l){return e}var i=n(a,[["render",p],["__file","index.html.vue"]]);export{i as default};
