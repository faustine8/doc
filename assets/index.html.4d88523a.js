import{_ as e,r as t,o as p,a as c,b as a,d as o,F as r,e as s,c as l}from"./app.40df414d.js";var i="/doc/assets/README-1657007745552.dca0bf8f.png",d="/doc/assets/README-1657007927445.58dbf21f.png";const u={},g=a("p",null,"\u5B89\u88C5 Protocol Buffers \u7F16\u8BD1\u73AF\u5883",-1),h=s("\u4E0B\u8F7D\u5730\u5740\uFF1A"),k={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},b=s("https://github.com/protocolbuffers/protobuf"),m=l(`<p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Protobuf</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PROTOCBUF_HOME</span><span class="token operator">=</span>/opt/zmn/servers/protoc-21.2-osx-aarch_64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$PROTOCBUF_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6D4B\u8BD5\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>protoc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u751F\u6210\u4EE3\u7801\u8BE6\u89E3</p><p><img src="`+i+'" alt="proto"></p><p>NewsProto \u6D88\u606F\u4F53\u7684\u5927\u7C7B</p><ul><li><code>NewsOrBuilder</code>/<code>NewsRequestOrBuilder</code>/<code>NewsResponseOrBuilder</code> \u6D88\u606F\u7C7B\u4E0E\u6784\u9020\u5668\u63A5\u53E3</li><li><code>News</code>/<code>NewsRequest</code>/<code>NewsResponse</code> \u5177\u4F53\u7684\u6D88\u606F\u7C7B\u5B9E\u73B0</li></ul><p><img src="'+d+`" alt="grpc"></p><p>NewServiceGrpc gRPC \u901A\u4FE1\u7C7B\u7684\u96C6\u5408</p><ul><li><code>XxxDescriptorSupplier</code> gRPC \u901A\u4FE1\u7528\u7684\u63CF\u8FF0\u7B26\u6587\u4EF6 (\u5143\u6570\u636E)</li><li><code>NewServiceBlockingStub</code> \u540C\u6B65\u901A\u4FE1\u5BA2\u6237\u7AEF\u5B58\u6839\uFF0C\u4EA7\u751F\u963B\u585E\uFF1B\u652F\u6301\u4E00\u5143\u4E0E\u670D\u52A1\u7AEF\u6D41\u6570\u636E\u901A\u4FE1</li><li><code>NewServiceFutureStub</code> \u5F02\u6B65\u901A\u4FE1\u5BA2\u6237\u7AEF\u5B58\u6839\uFF0C\u57FA\u4E8E Guava Future \u5B9E\u73B0\uFF0C\u4E0D\u652F\u6301\u6D41\u5F0F\u5904\u7406</li><li><code>NewServiceStub</code> \u5F02\u6B65\u901A\u4FE1\u5BA2\u6237\u7AEF\u5B58\u6839\uFF0C\u652F\u6301\u53CC\u5411\u6D41\u5F0F\u4F20\u8F93</li><li><code>NewServiceImplBase</code> \u670D\u52A1\u5668\u7AEF\u7684\u9AA8\u67B6\u7C7B\uFF0C\u7EE7\u627F\u8FD9\u4E2A\u7C7B\u5B9E\u73B0\u4E1A\u52A1\u903B\u8F91</li></ul><blockquote><p><code>XxxxStub</code> \u8FD9\u79CD\u7684\u7C7B\u90FD\u662F\u4F9B\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684</p></blockquote><h2 id="grpc-\u901A\u4FE1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#grpc-\u901A\u4FE1\u6A21\u5F0F" aria-hidden="true">#</a> gRPC \u901A\u4FE1\u6A21\u5F0F</h2><h3 id="\u4E00\u5143-rpc-\u901A\u4FE1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5143-rpc-\u901A\u4FE1\u6A21\u5F0F" aria-hidden="true">#</a> \u4E00\u5143 RPC \u901A\u4FE1\u6A21\u5F0F</h3><p>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u5355\u4E2A\u8BF7\u6C42\u5E76\u83B7\u5F97\u5355\u4E2A\u54CD\u5E94\u3002</p><h3 id="\u670D\u52A1\u7AEF\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6D41\u5F0F RPC \u901A\u4FE1\u6A21\u5F0F</h3><p>\u4ECE\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\uFF0C\u4F1A\u4EA7\u751F\u4ECE\u670D\u52A1\u5668\u7684\u591A\u6B21\u54CD\u5E94\u3002</p><h3 id="\u5BA2\u6237\u7AEF\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u6D41\u5F0F RPC \u901A\u4FE1\u6A21\u5F0F</h3><p>\u4ECE\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E0D\u5B9A\u6B21\u8BF7\u6C42\uFF0C\u4EA7\u751F\u4ECE\u670D\u52A1\u5668\u7684\u4E00\u6B21\u54CD\u5E94\u3002</p><p><code>requestObserver.onNext(request); </code> =&gt; Server \u7AEF <code>onNext()</code> =&gt; ... =&gt; <code>requestObserver.onCompleted()</code> =&gt; Server \u7AEF <code>onCompleted()</code> =&gt; <code>responseObserver.onCompleted();</code></p><h3 id="\u53CC\u5411\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u6D41\u5F0F-rpc-\u901A\u4FE1\u6A21\u5F0F" aria-hidden="true">#</a> \u53CC\u5411\u6D41\u5F0F RPC \u901A\u4FE1\u6A21\u5F0F</h3><h2 id="grpc-\u4E0E\u5FAE\u670D\u52A1\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#grpc-\u4E0E\u5FAE\u670D\u52A1\u67B6\u6784" aria-hidden="true">#</a> gRPC \u4E0E\u5FAE\u670D\u52A1\u67B6\u6784</h2><h3 id="springboot-\u96C6\u6210-grpc" tabindex="-1"><a class="header-anchor" href="#springboot-\u96C6\u6210-grpc" aria-hidden="true">#</a> SpringBoot \u96C6\u6210 gRPC</h3><h4 id="\u57FA\u4E8E-starter-\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-starter-\u96C6\u6210" aria-hidden="true">#</a> \u57FA\u4E8E starter \u96C6\u6210</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/net.devh/grpc-server-spring-boot-starter --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.devh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>grpc-server-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.13.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/net.devh/grpc-client-spring-boot-starter --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.devh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>grpc-client-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.13.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="grpc-\u63A5\u5165-eureka" tabindex="-1"><a class="header-anchor" href="#grpc-\u63A5\u5165-eureka" aria-hidden="true">#</a> gRPC \u63A5\u5165 Eureka</h3><h3 id="\u57FA\u4E8E-jwt-\u7684-grpc-\u5B89\u5168\u8BA4\u8BC1\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-jwt-\u7684-grpc-\u5B89\u5168\u8BA4\u8BC1\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> \u57FA\u4E8E JWT \u7684 gRPC \u5B89\u5168\u8BA4\u8BC1\u5B9E\u73B0\u65B9\u6848</h3>`,28);function v(f,x){const n=t("ExternalLinkIcon");return p(),c(r,null,[g,a("p",null,[h,a("a",k,[b,o(n)])]),m],64)}var R=e(u,[["render",v],["__file","index.html.vue"]]);export{R as default};
