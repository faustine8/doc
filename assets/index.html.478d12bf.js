import{_ as s,c as n}from"./app.40df414d.js";const a={},e=n(`<h1 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> GoLang</h1><p>\u73AF\u5883\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Go\u6E90\u4EE3\u7801\u7684\u5B89\u88C5\u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go
<span class="token comment"># \u9879\u76EE\u7A0B\u5E8F\u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/Users/faustine/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOBIN</span><span class="token operator">=</span><span class="token variable">$GOPATH</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/go/bin

<span class="token comment"># \u4F7F\u7528 GOPATH \u5C31\u591F\u4E86\uFF0C\u4E0D\u518D\u9700\u8981 GOROOT</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOPATH</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u56FD\u5185\u4EE3\u7406</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
<span class="token comment"># \u5F00\u542F\u65B0\u7248\u6A21\u5757\u5316</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0B\u8F7D\u5B89\u88C5 Swag-go</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/swaggo/swag/cmd/swag@latest
swag -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4EE3\u7801\u683C\u5F0F\u5316</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u589E\u5F3A\u7248\u7684 go fmt</span>
go <span class="token function">install</span> golang.org/x/tools/cmd/goimports@latest

go <span class="token function">install</span> golang.org/x/lint/golint@latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7EC8\u6781\u7248</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> golangci-lint
brew upgrade golangci-lint

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10);function l(p,t){return e}var r=s(a,[["render",l],["__file","index.html.vue"]]);export{r as default};
