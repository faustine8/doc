import{_ as n,c as s}from"./app.40df414d.js";const a={},e=s(`<p>Cloud config</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">admingroup</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>root<span class="token punctuation">,</span>sys<span class="token punctuation">]</span>
  <span class="token punctuation">-</span> cloud<span class="token punctuation">-</span>users
<span class="token key atrule">users</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> default
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foobar
    <span class="token key atrule">gecos</span><span class="token punctuation">:</span> Foo B. Bar
    <span class="token key atrule">primary_group</span><span class="token punctuation">:</span> foobar
    <span class="token key atrule">groups</span><span class="token punctuation">:</span> users
    <span class="token key atrule">selinux_user</span><span class="token punctuation">:</span> staff_u
    <span class="token key atrule">expiredate</span><span class="token punctuation">:</span> <span class="token string">&#39;2032-09-01&#39;</span>
    <span class="token key atrule">ssh_import_id</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lp<span class="token punctuation">:</span>falcojr
      <span class="token punctuation">-</span> gh<span class="token punctuation">:</span>TheRealFalcon
    <span class="token key atrule">lock_passwd</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">passwd</span><span class="token punctuation">:</span> zmn123456

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>com.zmn.base.product.dubbo.interfaces.product.foreign.ProductForeignListRemoteService.listBaseDROByQuery(ProductBaseQuery)</p><p>com.zmn.base.product.dubbo.interfaces.channel.servcateg.ChannelServCategListRemoteService.getAvailableCategoryNumber(Integer) com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.getAvailableCategoryChannelId(Integer) com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.listByChannelIds(List)</p><p>com.zmn.base.channel.dubbo.interfaces.channel.ChannelListRemoteService.getByChannelId(Integer)</p>`,5);function p(t,c){return e}var o=n(a,[["render",p],["__file","index.html.vue"]]);export{o as default};
