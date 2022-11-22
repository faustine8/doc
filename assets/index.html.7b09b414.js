import{_ as e,c as s}from"./app.40df414d.js";var a="/doc/assets/README-1650805750792.32a88440.png",i="/doc/assets/README-1650805853014.99613bc5.png",l="/doc/assets/README-1650852855543.5bca09c9.png",n="/doc/assets/README-1650855206572.6b7479c6.png",p="/doc/assets/README-1650855306891.11af274d.png";const d={},o=s('<h1 id="redis-\u7F13\u5B58\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#redis-\u7F13\u5B58\u95EE\u9898" aria-hidden="true">#</a> Redis \u7F13\u5B58\u95EE\u9898</h1><h2 id="_1-\u7F13\u5B58\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#_1-\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a> 1. \u7F13\u5B58\u7A7F\u900F</h2><p>\u4E00\u822C\u7684\u7F13\u5B58\u7CFB\u7EDF\uFF0C\u90FD\u662F\u6309\u7167 key \u53BB\u7F13\u5B58\u67E5\u8BE2\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5BF9\u5E94\u7684 value\uFF0C\u5C31\u5E94\u8BE5\u53BB\u540E\u7AEF\u7CFB\u7EDF\u67E5\u627E(\u6BD4\u5982 DB)\u3002</p><p>\u7F13\u5B58\u7A7F\u900F\u662F\u6307\u5728\u9AD8\u5E76\u53D1\u4E0B\u67E5\u8BE2 key \u4E0D\u5B58\u5728\u7684\u6570\u636E(\u4E0D\u5B58\u5728\u7684key)\uFF0C\u4F1A\u7A7F\u8FC7\u7F13\u5B58\u67E5\u8BE2\u6570\u636E\u5E93\u3002\u5BFC\u81F4\u6570\u636E\u5E93 \u538B\u529B\u8FC7\u5927\u800C\u5B95\u673A\u3002</p><p>\u89E3\u51B3\u65B9\u6848:</p><p>\u5BF9\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\u7684\u60C5\u51B5\u4E5F\u8FDB\u884C\u7F13\u5B58\uFF0C\u7F13\u5B58\u65F6\u95F4(ttl)\u8BBE\u7F6E\u77ED\u4E00\u70B9\uFF0C\u6216\u8005\u8BE5 key \u5BF9\u5E94\u7684\u6570\u636E insert \u4E86\u4E4B\u540E\u6E05\u7406\u7F13\u5B58\u3002</p><p>\u95EE\u9898:\u7F13\u5B58\u592A\u591A\u7A7A\u503C\u5360\u7528\u4E86\u66F4\u591A\u7684\u7A7A\u95F4</p><p>\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u3002\u5728\u7F13\u5B58\u4E4B\u524D\u5728\u52A0\u4E00\u5C42\u5E03\u9686\u8FC7\u6EE4\u5668\uFF0C\u5728\u67E5\u8BE2\u7684\u65F6\u5019\u5148\u53BB\u5E03\u9686\u8FC7\u6EE4\u5668\u67E5\u8BE2 key \u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5B58\u5728\u518D\u67E5\u7F13\u5B58\u548C DB\u3002</p><p><img src="'+a+'" alt="\u7F13\u5B58\u7A7F\u900F"></p><p>\u5E03\u9686\u8FC7\u6EE4\u5668(Bloom Filter)\u662F 1970 \u5E74\u7531\u5E03\u9686\u63D0\u51FA\u7684\u3002\u5B83\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u4E8C\u8FDB\u5236\u5411\u91CF\u548C\u4E00\u7CFB\u5217\u968F\u673A Hash \u6620\u5C04\u51FD\u6570\u3002</p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u53EF\u4EE5\u7528\u4E8E\u68C0\u7D22\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\u3002\u5B83\u7684\u4F18\u70B9\u662F\u7A7A\u95F4\u6548\u7387\u548C\u67E5\u8BE2\u65F6\u95F4\u90FD\u8FDC\u8FDC\u8D85\u8FC7\u4E00\u822C\u7684\u7B97\u6CD5\u3002</p><p><img src="'+i+'" alt="\u5E03\u9686\u8FC7\u6EE4\u5668"></p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u539F\u7406\u662F\uFF0C\u5F53\u4E00\u4E2A\u5143\u7D20\u88AB\u52A0\u5165\u96C6\u5408\u65F6\uFF0C\u901A\u8FC7 K \u4E2A Hash \u51FD\u6570\u5C06\u8FD9\u4E2A\u5143\u7D20\u6620\u5C04\u6210\u4E00\u4E2A\u6570\u7EC4\u4E2D\u7684 K \u4E2A\u70B9\uFF0C\u628A\u5B83\u4EEC\u7F6E\u4E3A 1\u3002 \u68C0\u7D22\u65F6\uFF0C\u6211\u4EEC\u53EA\u8981\u770B\u770B\u8FD9\u4E9B\u70B9\u662F\u4E0D\u662F\u90FD\u662F 1 \u5C31(\u5927\u7EA6)\u77E5\u9053\u96C6\u5408\u4E2D\u6709\u6CA1\u6709\u5B83\u4E86: \u5982\u679C\u8FD9\u4E9B\u70B9\u6709\u4EFB\u4F55\u4E00\u4E2A 0\uFF0C\u5219\u88AB\u68C0\u5143\u7D20\u4E00\u5B9A\u4E0D\u5728; \u5982\u679C\u90FD\u662F 1\uFF0C\u5219\u88AB\u68C0\u5143\u7D20\u5F88\u53EF\u80FD\u5728\u3002\u8FD9\u5C31\u662F\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u57FA\u672C\u601D\u60F3\u3002</p><h2 id="_2-\u7F13\u5B58\u96EA\u5D29" tabindex="-1"><a class="header-anchor" href="#_2-\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a> 2. \u7F13\u5B58\u96EA\u5D29</h2><p>\u5F53\u7F13\u5B58\u670D\u52A1\u5668\u91CD\u542F\u6216\u8005\u5927\u91CF\u7F13\u5B58\u96C6\u4E2D\u5728\u67D0\u4E00\u4E2A\u65F6\u95F4\u6BB5\u5931\u6548\uFF0C\u8FD9\u6837\u5728\u5931\u6548\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u7ED9\u540E\u7AEF\u7CFB\u7EDF(\u6BD4\u5982 DB)\u5E26\u6765\u5F88\u5927\u538B\u529B\u3002</p><p>\u7A81\u7136\u95F4\u5927\u91CF\u7684 key \u5931\u6548\u4E86\u6216 Redis \u91CD\u542F\uFF0C\u5927\u91CF\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5D29\u6E83\u3002</p><p>\u89E3\u51B3\u65B9\u6848:</p><ol><li>key \u7684\u5931\u6548\u671F\u5206\u6563\u5F00\uFF0C\u4E0D\u540C\u7684 key \u8BBE\u7F6E\u4E0D\u540C\u7684\u6709\u6548\u671F</li><li>\u8BBE\u7F6E\u4E8C\u7EA7\u7F13\u5B58(\u6570\u636E\u4E0D\u4E00\u5B9A\u4E00\u81F4)</li><li>\u9AD8\u53EF\u7528(\u810F\u8BFB)</li></ol><h2 id="_3-\u7F13\u5B58\u51FB\u7A7F" tabindex="-1"><a class="header-anchor" href="#_3-\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a> 3. \u7F13\u5B58\u51FB\u7A7F</h2><p>\u5BF9\u4E8E\u4E00\u4E9B\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684 key\uFF0C\u5982\u679C\u8FD9\u4E9B key \u53EF\u80FD\u4F1A\u5728\u67D0\u4E9B\u65F6\u95F4\u70B9\u88AB\u8D85\u9AD8\u5E76\u53D1\u5730\u8BBF\u95EE\uFF0C\u662F\u4E00\u79CD\u975E\u5E38 &quot;\u70ED\u70B9&quot; \u7684\u6570\u636E\u3002 \u8FD9\u4E2A\u65F6\u5019\uFF0C\u9700\u8981\u8003\u8651\u4E00\u4E2A\u95EE\u9898: \u7F13\u5B58\u88AB &quot;\u51FB\u7A7F&quot; \u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u548C\u7F13\u5B58\u96EA\u5D29\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u8FD9\u91CC\u9488\u5BF9\u67D0\u4E00 key \u7F13\u5B58\uFF0C\u524D\u8005\u5219\u662F\u5F88\u591A key\u3002</p><p>\u7F13\u5B58\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u8FC7\u671F\u7684\u65F6\u5019\uFF0C\u6070\u597D\u5728\u8FD9\u4E2A\u65F6\u95F4\u70B9\u5BF9\u8FD9\u4E2A Key \u6709\u5927\u91CF\u7684\u5E76\u53D1\u8BF7\u6C42\u8FC7\u6765\uFF0C\u8FD9\u4E9B\u8BF7\u6C42\u53D1\u73B0\u7F13\u5B58\u8FC7\u671F\u4E00\u822C\u90FD\u4F1A\u4ECE\u540E\u7AEFDB\u52A0\u8F7D\u6570\u636E\u5E76\u56DE\u8BBE\u5230\u7F13\u5B58\uFF0C \u8FD9\u4E2A\u65F6\u5019\u5927\u5E76\u53D1\u7684\u8BF7\u6C42\u53EF\u80FD\u4F1A\u77AC\u95F4\u628A\u540E\u7AEFDB\u538B\u57AE\u3002</p><p>\u89E3\u51B3\u65B9\u6848:</p><ol><li>\u7528\u5206\u5E03\u5F0F\u9501\u63A7\u5236\u8BBF\u95EE\u7684\u7EBF\u7A0B</li></ol><p>\u4F7F\u7528 Redis \u7684 <code>setnx</code> \u4E92\u65A5\u9501\u5148\u8FDB\u884C\u5224\u65AD\uFF0C\u8FD9\u6837\u5176\u4ED6\u7EBF\u7A0B\u5C31\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u4FDD\u8BC1\u4E0D\u4F1A\u6709\u5927\u5E76\u53D1\u64CD\u4F5C\u53BB\u64CD\u4F5C\u6570\u636E\u5E93\u3002</p><ol start="2"><li>\u4E0D\u8BBE\u8D85\u65F6\u65F6\u95F4\uFF0C<code>volatile-lru</code> \u4F46\u4F1A\u9020\u6210\u5199\u4E00\u81F4\u95EE\u9898</li></ol><p>\u5F53\u6570\u636E\u5E93\u6570\u636E\u53D1\u751F\u66F4\u65B0\u65F6\uFF0C\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u4E0D\u4F1A\u53CA\u65F6\u66F4\u65B0\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u4E0E\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u7684\u4E0D\u4E00\u81F4\uFF0C\u5E94\u7528\u4F1A\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u5230\u810F\u6570\u636E\u3002 \u53EF\u91C7\u7528\u5EF6\u65F6\u53CC\u5220\u7B56\u7565\u5904\u7406\uFF0C\u8FD9\u4E2A\u6211\u4EEC\u540E\u9762\u4F1A\u8BE6\u7EC6\u8BB2\u5230\u3002</p><h2 id="_4-\u6570\u636E\u4E0D\u4E00\u81F4" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u4E0D\u4E00\u81F4" aria-hidden="true">#</a> 4. \u6570\u636E\u4E0D\u4E00\u81F4</h2><p>\u7F13\u5B58\u548C DB \u7684\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u6839\u6E90: \u6570\u636E\u6E90\u4E0D\u4E00\u6837\u3002</p><p>\u5982\u4F55\u89E3\u51B3\uFF1F\u5F3A\u4E00\u81F4\u6027\u5F88\u96BE\uFF0C\u8FFD\u6C42\u6700\u7EC8\u4E00\u81F4\u6027(\u65F6\u95F4)</p><p>\u4E92\u8054\u7F51\u4E1A\u52A1\u6570\u636E\u5904\u7406\u7684\u7279\u70B9</p><ul><li>\u9AD8\u541E\u5410\u91CF</li><li>\u4F4E\u5EF6\u8FDF</li><li>\u6570\u636E\u654F\u611F\u6027\u4F4E\u4E8E\u91D1\u878D\u4E1A</li></ul><p>\u65F6\u5E8F\u63A7\u5236\u662F\u5426\u53EF\u884C?</p><p>\u5148\u66F4\u65B0\u6570\u636E\u5E93\u518D\u66F4\u65B0\u7F13\u5B58\u6216\u8005\u5148\u66F4\u65B0\u7F13\u5B58\u518D\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u672C\u8D28\u4E0A\u4E0D\u662F\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\uFF0C\u6240\u4EE5\u65F6\u5E8F\u63A7\u5236\u4E0D\u53EF\u884C\u3002\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4F1A\u4EA7\u751F\u4E0D\u4E00\u81F4\u3002</p><p><strong>\u4FDD\u8BC1\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027(\u5EF6\u65F6\u53CC\u5220)</strong></p><ol><li>\u5148\u66F4\u65B0\u6570\u636E\u5E93\u540C\u65F6\u5220\u9664\u7F13\u5B58\u9879(key)\uFF0C\u7B49\u8BFB\u7684\u65F6\u5019\u518D\u586B\u5145\u7F13\u5B58</li><li>2 \u79D2\u540E\u518D\u5220\u9664\u4E00\u6B21\u7F13\u5B58\u9879(key)</li><li>\u8BBE\u7F6E\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4 Expired Time \u6BD4\u5982 10 \u79D2\u6216 1 \u5C0F\u65F6</li><li>\u5C06\u7F13\u5B58\u5220\u9664\u5931\u8D25\u8BB0\u5F55\u5230\u65E5\u5FD7\u4E2D\uFF0C\u5229\u7528\u811A\u672C\u63D0\u53D6\u5931\u8D25\u8BB0\u5F55\u518D\u6B21\u5220\u9664(\u7F13\u5B58\u5931\u6548\u671F\u8FC7\u957F 7*24)</li></ol><p>\u5347\u7EA7\u65B9\u6848</p><p>\u901A\u8FC7\u6570\u636E\u5E93\u7684 binlog \u6765\u5F02\u6B65\u6DD8\u6C70 key\uFF0C\u5229\u7528\u5DE5\u5177(canal)\u5C06 binlog \u65E5\u5FD7\u91C7\u96C6\u53D1\u9001\u5230 MQ \u4E2D\uFF0C\u7136\u540E\u901A\u8FC7 ACK \u673A\u5236\u786E\u8BA4\u5904\u7406\u5220\u9664\u7F13\u5B58\u3002</p><h2 id="_5-\u6570\u636E\u5E76\u53D1\u7ADE\u4E89" tabindex="-1"><a class="header-anchor" href="#_5-\u6570\u636E\u5E76\u53D1\u7ADE\u4E89" aria-hidden="true">#</a> 5. \u6570\u636E\u5E76\u53D1\u7ADE\u4E89</h2><p>\u8FD9\u91CC\u7684\u5E76\u53D1\u6307\u7684\u662F\u591A\u4E2A Redis \u7684 client \u540C\u65F6 <code>set</code> \u540C\u4E00\u4E2A key \u5F15\u8D77\u7684\u5E76\u53D1\u95EE\u9898\u3002</p><p>\u591A\u5BA2\u6237\u7AEF(Jedis)\u540C\u65F6\u5E76\u53D1\u5199\u4E00\u4E2A key\uFF0C\u4E00\u4E2A key \u7684\u503C\u662F 1\uFF0C\u672C\u6765\u6309\u987A\u5E8F\u4FEE\u6539\u4E3A2,3,4\uFF0C\u6700\u540E\u662F 4\uFF0C\u4F46\u662F\u987A\u5E8F\u53D8\u6210\u4E864,3,2\uFF0C\u6700\u540E\u53D8\u6210\u4E86 2\u3002</p><h3 id="_5-1-\u5206\u5E03\u5F0F\u9501-\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5206\u5E03\u5F0F\u9501-\u65F6\u95F4\u6233" aria-hidden="true">#</a> 5.1 \u5206\u5E03\u5F0F\u9501 + \u65F6\u95F4\u6233</h3><ol><li>\u6574\u4F53\u6280\u672F\u65B9\u6848</li></ol><p>\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4E3B\u8981\u662F\u51C6\u5907\u4E00\u4E2A\u5206\u5E03\u5F0F\u9501\uFF0C\u5927\u5BB6\u53BB\u62A2\u9501\uFF0C\u62A2\u5230\u9501\u5C31\u505A <code>set</code> \u64CD\u4F5C\u3002</p><p>\u52A0\u9501\u7684\u76EE\u7684\u5B9E\u9645\u4E0A\u5C31\u662F\u628A\u5E76\u884C\u8BFB\u5199\u6539\u6210\u4E32\u884C\u8BFB\u5199\u7684\u65B9\u5F0F\uFF0C\u4ECE\u800C\u6765\u907F\u514D\u8D44\u6E90\u7ADE\u4E89\u3002</p><p><img src="'+l+`" alt="Redis\u56FE\u89E3-\u6570\u636E\u5E76\u53D1\u7ADE\u4E89-\u5206\u5E03\u5F0F\u9501\u65B9\u6848.png"></p><ul><li>\u6211\u4EEC\u5E0C\u671B\u7684 key \u66F4\u65B0\u987A\u5E8F\u662F\uFF1A<code>v1 -&gt; v2 -&gt; v3 -&gt; v4</code></li><li>\u7531\u4E8E\u5E76\u53D1\u95EE\u9898\uFF0Ckey \u66F4\u65B0\u7684\u987A\u5E8F\u53D8\u6210\u4E86\uFF1A <code>v1 -&gt; v3 -&gt; v4 -&gt; v2</code></li><li>\u5F15\u5165\u5206\u5E03\u5F0F\u9501 zookeeper\uFF0C\u8981\u66F4\u65B0\u6570\u636E\u5FC5\u987B\u8981\u83B7\u5F97\u9501</li><li><code>set mykey = v2</code> \u5148\u83B7\u5F97\u4E86\u9501\uFF0C\u8FD9\u4E2A\u6570\u636E\u4F1A\u53D8\u6210 <code>v2</code></li><li>\u63A5\u4E0B\u6765 <code>set mykey = v4</code> \u83B7\u5F97\u4E86\u9501\uFF0C\u8FD9\u4E2A\u6570\u636E\u53D8\u6210 <code>v4</code></li><li>\u7136\u540E <code>set mykey = v3</code> \u83B7\u5F97\u4E86\u9501\uFF0C\u96BE\u9053\u6570\u636E\u8981\u88AB\u6539\u6210 <code>v3</code> \u5417? \u8FD9\u6837\u7684\u6570\u636E\u4E0D\u5C31\u53C8\u9519\u4E86\uFF1F</li></ul><p>\u6240\u4EE5\u6570\u636E\u5FC5\u987B\u5E26\u6709\u65F6\u95F4\u6233\uFF0C\u5F53 <code>v3</code> \u60F3\u8981\u53BB\u66F4\u65B0\u6570\u636E\u65F6\uFF0C\u5C31\u6BD4\u8F83\u81EA\u5DF1\u7684\u65F6\u95F4\u6233\u548C <code>v4</code> \u7684\u65F6\u95F4\u6233\u8C01\u66F4\u65E9\uFF0C\u5982\u679C\u81EA\u5DF1\u66F4\u65E9\u5219\u653E\u5F03\u66F4\u65B0\uFF0C\u5426\u5219\u8986\u76D6 <code>v4</code>\u3002</p><ol start="2"><li>Redis \u5206\u5E03\u5F0F\u9501\u7684\u5B9E\u73B0</li></ol><p>\u4E3B\u8981\u7528\u5230\u7684 Redis \u51FD\u6570\u662F <code>setnx()</code>\u3002</p><p>\u7528 <code>SETNX</code> \u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u3002</p><p>\u65F6\u95F4\u6233</p><p>\u7531\u4E8E\u4E0A\u9762\u4E3E\u7684\u4F8B\u5B50\uFF0C\u8981\u6C42 key \u7684\u64CD\u4F5C\u9700\u8981\u987A\u5E8F\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u4FDD\u5B58\u4E00\u4E2A\u65F6\u95F4\u6233\u5224\u65AD <code>set</code> \u987A\u5E8F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7CFB\u7EDFA key 1 {ValueA 7:00} 
\u7CFB\u7EDFB key 1 {ValueB 7:05}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5047\u8BBE\u7CFB\u7EDF B \u5148\u62A2\u5230\u9501\uFF0C\u5C06 <code>key1</code> \u8BBE\u7F6E\u4E3A <code>{ValueB 7:05}</code>\u3002\u63A5\u4E0B\u6765\u7CFB\u7EDF A \u62A2\u5230\u9501\uFF0C\u53D1\u73B0\u81EA\u5DF1\u7684 <code>key1</code> \u7684\u65F6\u95F4\u6233\u65E9\u4E8E\u7F13\u5B58\u4E2D\u7684\u65F6\u95F4\u6233(7:00&lt;7:05)\uFF0C\u90A3\u5C31\u4E0D\u505A <code>set</code> \u64CD\u4F5C\u4E86\u3002</p><h3 id="_5-2-\u5229\u7528\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5229\u7528\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 5.2 \u5229\u7528\u6D88\u606F\u961F\u5217</h3><p>\u5728\u5E76\u53D1\u91CF\u8FC7\u5927\u7684\u60C5\u51B5\u4E0B,\u53EF\u4EE5\u901A\u8FC7\u6D88\u606F\u4E2D\u95F4\u4EF6\u8FDB\u884C\u5904\u7406,\u628A\u5E76\u884C\u8BFB\u5199\u8FDB\u884C\u4E32\u884C\u5316\u3002</p><p>\u628A Redis \u7684 <code>set</code> \u64CD\u4F5C\u653E\u5728\u961F\u5217\u4E2D\u4F7F\u5176\u4E32\u884C\u5316, \u5FC5\u987B\u7684\u4E00\u4E2A\u4E00\u4E2A\u6267\u884C\u3002</p><h2 id="_6-hot-key" tabindex="-1"><a class="header-anchor" href="#_6-hot-key" aria-hidden="true">#</a> 6. Hot Key</h2><p>\u5F53\u6709\u5927\u91CF\u7684\u8BF7\u6C42(\u51E0\u5341\u4E07)\u8BBF\u95EE\u67D0\u4E2A Redis \u67D0\u4E2A key \u65F6\uFF0C\u7531\u4E8E\u6D41\u91CF\u96C6\u4E2D\u8FBE\u5230\u7F51\u7EDC\u4E0A\u9650\uFF0C\u4ECE\u800C\u5BFC\u81F4\u8FD9\u4E2A Redis \u7684\u670D\u52A1\u5668\u5B95\u673A\u3002\u9020\u6210\u7F13\u5B58\u51FB\u7A7F\uFF0C \u63A5\u4E0B\u6765\u5BF9\u8FD9\u4E2A key \u7684\u8BBF\u95EE\u5C06\u76F4\u63A5\u8BBF\u95EE\u6570\u636E\u5E93\u9020\u6210\u6570\u636E\u5E93\u5D29\u6E83\uFF0C\u6216\u8005\u8BBF\u95EE\u6570\u636E\u5E93\u56DE\u586B Redis \u518D\u8BBF\u95EE Redis\uFF0C\u7EE7\u7EED\u5D29\u6E83\u3002</p><p><img src="`+n+'" alt="\u70ED\u70B9Key"></p><p>\u5982\u4F55\u53D1\u73B0\u70EDkey</p><ol><li>\u9884\u4F30\u70ED key\uFF0C\u6BD4\u5982\u79D2\u6740\u7684\u5546\u54C1\u3001\u706B\u7206\u7684\u65B0\u95FB\u7B49</li><li>\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u7EDF\u8BA1\uFF0C\u5B9E\u73B0\u7B80\u5355\uFF0C\u52A0\u4E00\u884C\u4EE3\u7801\u5373\u53EF</li><li>\u5982\u679C\u662F Proxy\uFF0C\u6BD4\u5982 Codis\uFF0C\u53EF\u4EE5\u5728 Proxy \u7AEF\u6536\u96C6</li><li>\u5229\u7528 Redis \u81EA\u5E26\u7684\u547D\u4EE4\uFF0C<code>monitor</code>\u3001<code>hotkeys</code>\u3002\u4F46\u662F\u6267\u884C\u7F13\u6162(\u4E0D\u8981\u7528)</li><li>\u5229\u7528\u57FA\u4E8E\u5927\u6570\u636E\u9886\u57DF\u7684\u6D41\u5F0F\u8BA1\u7B97\u6280\u672F\u6765\u8FDB\u884C\u5B9E\u65F6\u6570\u636E\u8BBF\u95EE\u6B21\u6570\u7684\u7EDF\u8BA1\uFF0C\u6BD4\u5982 Storm\u3001Spark Streaming\u3001Flink\uFF0C\u8FD9\u4E9B\u6280\u672F\u90FD\u662F\u53EF\u4EE5\u7684\u3002</li></ol><p>\u53D1\u73B0\u70ED\u70B9\u6570\u636E\u540E\u53EF\u4EE5\u5199\u5230 zookeeper \u4E2D</p><p><img src="'+p+`" alt="\u70ED\u70B9Key\u65B9\u6848"></p><p>\u5982\u4F55\u5904\u7406\u70EDKey:</p><ol><li>\u53D8\u5206\u5E03\u5F0F\u7F13\u5B58\u4E3A\u672C\u5730\u7F13\u5B58\u3002</li></ol><p>\u53D1\u73B0\u70ED key \u540E\uFF0C\u628A\u7F13\u5B58\u6570\u636E\u53D6\u51FA\u540E\uFF0C\u76F4\u63A5\u52A0\u8F7D\u5230\u672C\u5730\u7F13\u5B58\u4E2D\u3002\u91C7\u7528 Ehcache\u3001Guava Cache \u90FD\u53EF\u4EE5\uFF0C\u8FD9\u6837\u7CFB\u7EDF\u5728\u8BBF\u95EE\u70ED key \u6570\u636E\u65F6\u5C31\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u81EA\u5DF1\u7684\u7F13\u5B58\u4E86\u3002 (\u6570\u636E\u4E0D\u8981\u6C42\u65F6\u65F6\u4E00\u81F4)</p><ol start="2"><li>\u5728\u6BCF\u4E2A Redis \u4E3B\u8282\u70B9\u4E0A\u5907\u4EFD\u70ED key \u6570\u636E\uFF0C\u8FD9\u6837\u5728\u8BFB\u53D6\u65F6\u53EF\u4EE5\u91C7\u7528\u968F\u673A\u8BFB\u53D6\u7684\u65B9\u5F0F\uFF0C\u5C06\u8BBF\u95EE\u538B\u529B\u8D1F\u8F7D\u5230\u6BCF\u4E2A Redis \u4E0A\u3002</li><li>\u5229\u7528\u5BF9\u70ED\u70B9\u6570\u636E\u8BBF\u95EE\u7684\u9650\u6D41\u7194\u65AD\u4FDD\u62A4\u63AA\u65BD\u3002</li></ol><p>\u6BCF\u4E2A\u7CFB\u7EDF\u5B9E\u4F8B\u6BCF\u79D2\u6700\u591A\u8BF7\u6C42\u7F13\u5B58\u96C6\u7FA4\u8BFB\u64CD\u4F5C\u4E0D\u8D85\u8FC7 400 \u6B21\uFF0C\u4E00\u8D85\u8FC7\u5C31\u53EF\u4EE5\u7194\u65AD\u6389\uFF0C\u4E0D\u8BA9\u8BF7\u6C42\u7F13\u5B58\u96C6\u7FA4\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u767D\u4FE1\u606F\uFF0C\u7136\u540E\u7528\u6237\u7A0D\u540E\u4F1A\u81EA\u884C\u518D\u6B21\u91CD\u65B0\u5237\u65B0\u9875\u9762\u4E4B\u7C7B\u7684\u3002 (\u9996\u9875\u4E0D\u884C\uFF0C\u7CFB\u7EDF\u53CB\u597D\u6027\u5DEE)\u3002</p><p>\u901A\u8FC7\u7CFB\u7EDF\u5C42\u81EA\u5DF1\u76F4\u63A5\u52A0\u9650\u6D41\u7194\u65AD\u4FDD\u62A4\u63AA\u65BD\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u4FDD\u62A4\u540E\u9762\u7684\u7F13\u5B58\u96C6\u7FA4\u3002</p><h2 id="_7-big-key" tabindex="-1"><a class="header-anchor" href="#_7-big-key" aria-hidden="true">#</a> 7. Big Key</h2><p>Big Key \u6307\u7684\u662F\u5B58\u50A8\u7684\u503C(Value)\u975E\u5E38\u5927\uFF0C\u5E38\u89C1\u573A\u666F:</p><ul><li>\u70ED\u95E8\u8BDD\u9898\u4E0B\u7684\u8BA8\u8BBA</li><li>\u5927V\u7684\u7C89\u4E1D\u5217\u8868</li><li>\u5E8F\u5217\u5316\u540E\u7684\u56FE\u7247</li><li>\u6CA1\u6709\u53CA\u65F6\u5904\u7406\u7684\u5783\u573E\u6570\u636E</li><li>.....</li></ul><p>Big Key \u7684\u5F71\u54CD:</p><ul><li>Big Key \u4F1A\u5927\u91CF\u5360\u7528\u5185\u5B58\uFF0C\u5728\u96C6\u7FA4\u4E2D\u65E0\u6CD5\u5747\u8861</li><li>Redis\u7684\u6027\u80FD\u4E0B\u964D\uFF0C\u4E3B\u4ECE\u590D\u5236\u5F02\u5E38</li><li>\u5728\u4E3B\u52A8\u5220\u9664\u6216\u8FC7\u671F\u5220\u9664\u65F6\u4F1A\u64CD\u4F5C\u65F6\u95F4\u8FC7\u957F\u800C\u5F15\u8D77\u670D\u52A1\u963B\u585E</li></ul><p>\u5982\u4F55\u53D1\u73B0\u5927key:</p><ol><li>redis-cli <code>--bigkeys</code>\u547D\u4EE4\u3002\u53EF\u4EE5\u627E\u5230\u67D0\u4E2A\u5B9E\u4F8B5\u79CD\u6570\u636E\u7C7B\u578B(String\u3001hash\u3001list\u3001set\u3001zset)\u7684\u6700\u5927key\u3002</li></ol><blockquote><p>\u4F46\u5982\u679C Redis \u7684 key \u6BD4\u8F83\u591A\uFF0C\u6267\u884C\u8BE5\u547D\u4EE4\u4F1A\u6BD4\u8F83\u6162</p></blockquote><ol start="2"><li>\u83B7\u53D6\u751F\u4EA7 Redis \u7684 rdb \u6587\u4EF6\uFF0C\u901A\u8FC7 rdbtools \u5206\u6790 rdb \u751F\u6210 csv \u6587\u4EF6\uFF0C\u518D\u5BFC\u5165 MySQL \u6216\u5176\u4ED6\u6570\u636E\u5E93\u4E2D\u8FDB\u884C\u5206\u6790\u7EDF\u8BA1\uFF0C\u6839\u636E <code>size_in_bytes</code> \u7EDF\u8BA1 Big Key</li></ol><p>\u5927key\u7684\u5904\u7406:</p><p>\u4F18\u5316 Big Key \u7684\u539F\u5219\u5C31\u662F String \u51CF\u5C11\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0Clist\u3001hash\u3001set\u3001zset\u7B49\u51CF\u5C11\u6210\u5458\u6570\u3002</p><p>1\u3001String \u7C7B\u578B\u7684 Big key\uFF0C\u5C3D\u91CF\u4E0D\u8981\u5B58\u5165 Redis \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6587\u6863\u578B\u6570\u636E\u5E93 MongoDB \u6216\u7F13\u5B58\u5230 CDN \u4E0A\u3002</p><blockquote><p>\u5982\u679C\u5FC5\u987B\u7528 Redis \u5B58\u50A8\uFF0C\u6700\u597D\u5355\u72EC\u5B58\u50A8\uFF0C\u4E0D\u8981\u548C\u5176\u4ED6\u7684 key \u4E00\u8D77\u5B58\u50A8\u3002\u91C7\u7528\u4E00\u4E3B\u4E00\u4ECE\u6216\u591A\u4ECE\u3002</p></blockquote><ol start="2"><li><p>\u5355\u4E2A\u7B80\u5355\u7684 key \u5B58\u50A8\u7684 value \u5F88\u5927\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5C06\u5BF9\u8C61\u5206\u62C6\u6210\u51E0\u4E2A key-value\uFF0C \u4F7F\u7528 <code>mget</code> \u83B7\u53D6\u503C\uFF0C\u8FD9\u6837\u5206\u62C6\u7684\u610F\u4E49\u5728\u4E8E\u5206\u62C6\u5355\u6B21\u64CD\u4F5C\u7684\u538B\u529B\uFF0C\u5C06\u64CD\u4F5C\u538B\u529B\u5E73\u644A\u5230\u591A\u6B21\u64CD\u4F5C\u4E2D\uFF0C\u964D\u4F4E\u5BF9 Redis \u7684IO\u5F71\u54CD\u3002</p></li><li><p>hash\uFF0Cset\uFF0Czset\uFF0Clist \u4E2D\u5B58\u50A8\u8FC7\u591A\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u5143\u7D20\u5206\u62C6\u3002(\u5E38\u89C1)</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EE5 hash \u7C7B\u578B\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5BF9\u4E8E field \u8FC7\u591A\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u6839\u636E field \u8FDB\u884C hash \u53D6\u6A21\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684 key\uFF0C
\u4F8B\u5982 \u539F\u6765\u7684 hash_key:{filed1:value, filed2:value, filed3:value ...}\uFF0C\u53EF\u4EE5 hash \u53D6\u6A21\u540E\u5F62\u6210\u5982\u4E0B key:value \u5F62\u5F0F

hash_key:1:{filed1:value}
hash_key:2:{filed2:value}
hash_key:3:{filed3:value}
...

\u53D6\u6A21\u540E\uFF0C\u5C06\u539F\u5148\u5355\u4E2A key \u5206\u6210\u591A\u4E2A key\uFF0C\u6BCF\u4E2A key filed \u4E2A\u6570\u4E3A\u539F\u5148\u7684 1/N
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li><p>\u5220\u9664\u5927 key \u65F6\u4E0D\u8981\u4F7F\u7528 del,\u56E0\u4E3A del \u662F\u963B\u585E\u547D\u4EE4\uFF0C\u5220\u9664\u65F6\u4F1A\u5F71\u54CD\u6027\u80FD\u3002</p></li><li><p>\u4F7F\u7528 lazy delete (<code>unlink</code> \u547D\u4EE4)</p></li></ol><p>\u5220\u9664\u6307\u5B9A\u7684 key(s), \u82E5 key \u4E0D\u5B58\u5728\u5219\u8BE5 key \u88AB\u8DF3\u8FC7\u3002\u4F46\u662F\uFF0C\u76F8\u6BD4 DEL \u4F1A\u4EA7\u751F\u963B\u585E\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u5728\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u56DE\u6536\u5185\u5B58\uFF0C\u56E0\u6B64\u5B83\u662F\u975E\u963B\u585E\u7684\u3002 \u8FD9\u4E5F\u662F\u8BE5\u547D\u4EE4\u540D\u5B57\u7684\u7531\u6765: \u4EC5\u5C06 keys \u4ECE key \u7A7A\u95F4\u4E2D\u5220\u9664\uFF0C\u771F\u6B63\u7684\u6570\u636E\u5220\u9664\u4F1A\u5728\u540E\u7EED\u5F02\u6B65\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis<span class="token operator">&gt;</span> SET key1 <span class="token string">&quot;Hello&quot;</span>
<span class="token string">&quot;OK&quot;</span>
redis<span class="token operator">&gt;</span> SET key2 <span class="token string">&quot;World&quot;</span>
<span class="token string">&quot;OK&quot;</span>
redis<span class="token operator">&gt;</span> UNLINK key1 key2 key3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,88);function r(t,c){return o}var u=e(d,[["render",r],["__file","index.html.vue"]]);export{u as default};