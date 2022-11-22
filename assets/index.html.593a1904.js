import{_ as a,c as e}from"./app.40df414d.js";var r="/doc/assets/README-1649987173669.06b2e5ea.png",i="/doc/assets/README-1649988470740.65b0b3be.png",o="/doc/assets/README-1649988566641.e281234e.png",l="/doc/assets/README-1649988962680.d712a293.png",p="/doc/assets/README-1649989456698.3a111e7d.png",t="/doc/assets/README-1649989840034.e4bdd2cb.png",d="/doc/assets/README-1649989981576.ac6f7084.png",h="/doc/assets/README-1649990149306.d1494529.png",s="/doc/assets/README-1649990198911.0e9c126c.png",c="/doc/assets/README-1649991466631.9622198d.png";const k={},n=e('<h1 id="kafka-\u6982\u5FF5\u548C\u57FA\u672C\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#kafka-\u6982\u5FF5\u548C\u57FA\u672C\u67B6\u6784" aria-hidden="true">#</a> Kafka \u6982\u5FF5\u548C\u57FA\u672C\u67B6\u6784</h1><h2 id="_1-kafka-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-kafka-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. Kafka \u4ECB\u7ECD</h2><p>Kafka \u662F\u6700\u521D\u7531 Linkedin \u516C\u53F8\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u3001\u5206\u533A\u7684\u3001\u591A\u526F\u672C\u7684\u3001\u591A\u751F\u4EA7\u8005\u3001\u591A\u8BA2\u9605\u8005\uFF0C\u57FA\u4E8E Zookeeper \u534F\u8C03\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u7CFB\u7EDF(\u4E5F\u53EF\u4EE5\u5F53\u505AMQ\u7CFB\u7EDF)\u3002 \u5E38\u89C1\u53EF\u4EE5\u7528\u4E8E web/nginx \u65E5\u5FD7\u3001\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u6D88\u606F\u670D\u52A1\u7B49\u7B49\u3002Linkedin \u4E8E 2010 \u5E74\u8D21\u732E\u7ED9\u4E86 Apache \u57FA\u91D1\u4F1A\u5E76\u6210\u4E3A\u9876\u7EA7\u5F00\u6E90\u9879\u76EE\u3002</p><p>\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F: \u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u548C\u6D88\u606F\u7CFB\u7EDF\u3002</p><p>Kafka\u4E3B\u8981\u8BBE\u8BA1\u76EE\u6807\u5982\u4E0B:</p><ul><li>\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1) \u7684\u65B9\u5F0F\u63D0\u4F9B\u6D88\u606F\u6301\u4E45\u5316\u80FD\u529B\uFF0C\u5373\u4F7F\u5BF9 TB \u7EA7\u4EE5\u4E0A\u6570\u636E\u4E5F\u80FD\u4FDD\u8BC1\u5E38\u6570\u65F6\u95F4\u7684\u8BBF\u95EE\u6027\u80FD\u3002</li><li>\u9AD8\u541E\u5410\u7387\u3002\u5373\u4F7F\u5728\u975E\u5E38\u5EC9\u4EF7\u7684\u5546\u7528\u673A\u5668\u4E0A\u4E5F\u80FD\u505A\u5230\u5355\u673A\u652F\u6301\u6BCF\u79D2100K\u6761\u6D88\u606F\u7684\u4F20\u8F93\u3002</li><li>\u652F\u6301 Kafka Server \u95F4\u7684\u6D88\u606F\u5206\u533A\uFF0C\u53CA\u5206\u5E03\u5F0F\u6D88\u8D39\uFF0C\u540C\u65F6\u4FDD\u8BC1\u6BCF\u4E2A partition \u5185\u7684\u6D88\u606F\u987A\u5E8F\u4F20\u8F93\u3002</li><li>\u540C\u65F6\u652F\u6301\u79BB\u7EBF\u6570\u636E\u5904\u7406\u548C\u5B9E\u65F6\u6570\u636E\u5904\u7406\u3002</li><li>\u652F\u6301\u5728\u7EBF\u6C34\u5E73\u6269\u5C55(\u670D\u52A1\u4E0D\u505C)\u3002</li></ul><p><img src="'+r+'" alt="Kafka\u57FA\u672C\u67B6\u6784\u793A\u610F\u56FE"></p><p>\u6D88\u606F\u7CFB\u7EDF\u6709\u4E24\u79CD\u4E3B\u8981\u7684\u6D88\u606F\u4F20\u9012\u6A21\u5F0F: \u70B9\u5BF9\u70B9\u4F20\u9012\u6A21\u5F0F\u3001\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002\u5927\u90E8\u5206\u7684\u6D88\u606F\u7CFB\u7EDF\u9009\u7528\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002Kafka\u5C31\u662F\u4E00\u79CD\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002</p><p>\u5BF9\u4E8E\u6D88\u606F\u4E2D\u95F4\u4EF6\uFF0C\u6D88\u606F\u5206\u63A8\u62C9\u4E24\u79CD\u6A21\u5F0F\u3002Kafka\u53EA\u6709\u6D88\u606F\u7684\u62C9\u53D6\uFF0C\u6CA1\u6709\u63A8\u9001\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8F6E\u8BE2\u5B9E\u73B0\u6D88\u606F\u7684\u63A8\u9001\u3002</p><ol><li>Kafka \u5728\u4E00\u4E2A\u6216\u591A\u4E2A\u53EF\u4EE5\u8DE8\u8D8A\u591A\u4E2A\u6570\u636E\u4E2D\u5FC3\u7684\u670D\u52A1\u5668\u4E0A\u4F5C\u4E3A\u96C6\u7FA4\u8FD0\u884C\u3002</li><li>Kafka \u96C6\u7FA4\u4E2D\u6309\u7167\u4E3B\u9898\u5206\u7C7B\u7BA1\u7406\uFF0C\u4E00\u4E2A\u4E3B\u9898\u53EF\u4EE5\u6709\u591A\u4E2A\u5206\u533A\uFF0C\u4E00\u4E2A\u5206\u533A\u53EF\u4EE5\u6709\u591A\u4E2A\u526F\u672C\u5206\u533A\u3002</li><li>\u6BCF\u4E2A\u8BB0\u5F55\u7531\u4E00\u4E2A\u952E\uFF0C\u4E00\u4E2A\u503C\u548C\u4E00\u4E2A\u65F6\u95F4\u6233\u7EC4\u6210\u3002</li></ol><p>Kafka\u5177\u6709\u56DB\u4E2A\u6838\u5FC3API:</p><ol><li>Producer API: \u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u5C06\u8BB0\u5F55\u6D41\u53D1\u5E03\u5230\u4E00\u4E2A\u6216\u591A\u4E2A Kafka \u4E3B\u9898\u3002</li><li>Consumer API: \u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u8BA2\u9605\u4E00\u4E2A\u6216\u591A\u4E2A\u4E3B\u9898\u5E76\u5904\u7406\u4E3A\u5176\u751F\u6210\u7684\u8BB0\u5F55\u6D41\u3002</li><li>Streams API: \u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u5145\u5F53\u6D41\u5904\u7406\u5668\uFF0C\u4F7F\u7528\u4E00\u4E2A\u6216\u591A\u4E2A\u4E3B\u9898\u7684\u8F93\u5165\u6D41\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\u8F93\u51FA\u4E3B\u9898\u7684\u8F93\u51FA\u6D41\uFF0C\u4ECE\u800C\u6709\u6548\u5730<em>\u5C06\u8F93\u5165\u6D41\u8F6C\u6362\u4E3A\u8F93\u51FA\u6D41</em>\u3002</li><li>Connector API: \u5141\u8BB8\u6784\u5EFA\u548C\u8FD0\u884C\u5C06 Kafka \u4E3B\u9898\uFF0C\u8FDE\u63A5\u5230\u73B0\u6709\u5E94\u7528\u7A0B\u5E8F\u6216\u6570\u636E\u7CFB\u7EDF\u7684\u53EF\u91CD\u7528\u751F\u4EA7\u8005\u6216\u4F7F\u7528\u8005\u3002\u4F8B\u5982\uFF0C\u5173\u7CFB\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u5668\u53EF\u80FD\u4F1A\u6355\u83B7\u5BF9\u8868\u7684\u6240\u6709\u66F4\u6539\u3002</li></ol><h2 id="_2-kafka-\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-kafka-\u4F18\u52BF" aria-hidden="true">#</a> 2. Kafka \u4F18\u52BF</h2><ol><li>\u9AD8\u541E\u5410\u91CF\u3002\u5355\u673A\u6BCF\u79D2\u5904\u7406\u51E0\u5341\u4E0A\u767E\u4E07\u7684\u6D88\u606F\u91CF\u3002\u5373\u4F7F\u5B58\u50A8\u4E86\u8BB8\u591A TB \u7684\u6D88\u606F\uFF0C\u5B83\u4E5F\u4FDD\u6301\u7A33\u5B9A\u7684\u6027\u80FD\u3002</li><li>\u9AD8\u6027\u80FD\u3002\u5355\u8282\u70B9\u652F\u6301\u4E0A\u5343\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u5E76\u4FDD\u8BC1\u96F6\u505C\u673A\u548C\u96F6\u6570\u636E\u4E22\u5931\u3002</li><li>\u6301\u4E45\u5316\u6570\u636E\u5B58\u50A8\u3002\u5C06\u6D88\u606F\u6301\u4E45\u5316\u5230\u78C1\u76D8\u3002\u901A\u8FC7\u5C06\u6570\u636E\u6301\u4E45\u5316\u5230\u786C\u76D8\u4EE5\u53CA replication \u9632\u6B62\u6570\u636E\u4E22\u5931\u3002</li></ol><ul><li>\u96F6\u62F7\u8D1D</li><li>\u987A\u5E8F\u8BFB\uFF0C\u987A\u5E8F\u5199</li><li>\u5229\u7528 Linux \u7684\u9875\u7F13\u5B58</li></ul><ol start="4"><li>\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u6613\u4E8E\u5411\u5916\u6269\u5C55\u3002\u6240\u6709\u7684 Producer\u3001Broker \u548C Consumer \u90FD\u4F1A\u6709\u591A\u4E2A\uFF0C\u5747\u4E3A\u5206\u5E03\u5F0F\u7684\u3002\u65E0\u9700\u505C\u673A\u5373\u53EF\u6269\u5C55\u673A\u5668\u3002\u591A\u4E2A Producer\u3001Consumer \u53EF\u80FD\u662F\u4E0D\u540C\u7684\u5E94\u7528\u3002</li><li>\u53EF\u9760\u6027\u3002Kafka \u662F\u5206\u5E03\u5F0F\uFF0C\u5206\u533A\uFF0C\u590D\u5236\u548C\u5BB9\u9519\u7684\u3002</li><li>\u5BA2\u6237\u7AEF\u72B6\u6001\u7EF4\u62A4\u3002\u6D88\u606F\u88AB\u5904\u7406\u7684\u72B6\u6001\u662F\u5728 Consumer \u7AEF\u7EF4\u62A4\uFF0C\u800C\u4E0D\u662F\u7531 Server \u7AEF\u7EF4\u62A4\u3002\u5F53\u5931\u8D25\u65F6\u80FD\u81EA\u52A8\u5E73\u8861\u3002</li><li>\u652F\u6301 online \u548C offline \u7684\u573A\u666F\u3002</li><li>\u652F\u6301\u591A\u79CD\u5BA2\u6237\u7AEF\u8BED\u8A00\u3002Kafka\u652F\u6301 Java\u3001.NET\u3001PHP\u3001Python \u7B49\u591A\u79CD\u8BED\u8A00\u3002</li></ol><h2 id="_3-kafka-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-kafka-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3. Kafka \u5E94\u7528\u573A\u666F</h2><ul><li>\u65E5\u5FD7\u6536\u96C6: \u4E00\u4E2A\u516C\u53F8\u53EF\u4EE5\u7528 Kafka \u6536\u96C6\u5404\u79CD\u670D\u52A1\u7684 Log\uFF0C\u901A\u8FC7 Kafka \u4EE5\u7EDF\u4E00\u63A5\u53E3\u670D\u52A1\u7684\u65B9\u5F0F\u5F00\u653E\u7ED9\u5404\u79CD Consumer;</li><li>\u6D88\u606F\u7CFB\u7EDF: \u89E3\u8026\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u3001\u7F13\u5B58\u6D88\u606F\u7B49;</li><li>\u7528\u6237\u6D3B\u52A8\u8DDF\u8E2A: Kafka \u7ECF\u5E38\u88AB\u7528\u6765\u8BB0\u5F55 Web \u7528\u6237\u6216\u8005 App \u7528\u6237\u7684\u5404\u79CD\u6D3B\u52A8\uFF0C\u5982\u6D4F\u89C8\u7F51\u9875\u3001\u641C\u7D22\u3001\u70B9\u51FB\u7B49\u6D3B\u52A8\uFF0C\u8FD9\u4E9B\u6D3B\u52A8\u4FE1\u606F\u88AB\u5404\u4E2A\u670D\u52A1\u5668\u53D1\u5E03\u5230 Kafka \u7684 Topic \u4E2D\uFF0C\u7136\u540E\u6D88\u8D39\u8005\u901A\u8FC7\u8BA2\u9605\u8FD9\u4E9B Topic \u6765\u505A\u5B9E\u65F6\u7684\u76D1\u63A7\u5206\u6790\uFF0C\u4EA6\u53EF\u4FDD\u5B58\u5230\u6570\u636E\u5E93;</li><li>\u8FD0\u8425\u6307\u6807: Kafka \u4E5F\u7ECF\u5E38\u7528\u6765\u8BB0\u5F55\u8FD0\u8425\u76D1\u63A7\u6570\u636E\u3002\u5305\u62EC\u6536\u96C6\u5404\u79CD\u5206\u5E03\u5F0F\u5E94\u7528\u7684\u6570\u636E\uFF0C\u751F\u4EA7\u5404\u79CD\u64CD\u4F5C\u7684\u96C6\u4E2D\u53CD\u9988\uFF0C\u6BD4\u5982\u62A5\u8B66\u548C\u62A5\u544A;</li><li>\u6D41\u5F0F\u5904\u7406: \u6BD4\u5982 Spark Streaming \u548C Storm\u3002</li></ul><h2 id="_4-kafka-\u57FA\u672C\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_4-kafka-\u57FA\u672C\u67B6\u6784" aria-hidden="true">#</a> 4. Kafka \u57FA\u672C\u67B6\u6784</h2><h3 id="_4-1-\u6D88\u606F\u548C\u6279\u6B21" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6D88\u606F\u548C\u6279\u6B21" aria-hidden="true">#</a> 4.1 \u6D88\u606F\u548C\u6279\u6B21</h3><p>Kafka \u7684\u6570\u636E\u5355\u5143\u79F0\u4E3A\u6D88\u606F\u3002\u53EF\u4EE5\u628A\u6D88\u606F\u770B\u6210\u662F\u6570\u636E\u5E93\u91CC\u7684\u4E00\u4E2A \u300C\u6570\u636E\u884C\u300D\u6216\u4E00\u6761 \u300C\u8BB0\u5F55\u300D\u3002\u6D88\u606F\u7531\u5B57\u8282\u6570\u7EC4\u7EC4\u6210\u3002</p><p>\u6D88\u606F\u6709\u952E\uFF0C\u952E\u4E5F\u662F\u4E00\u4E2A\u5B57\u8282\u6570\u7EC4\u3002\u5F53\u6D88\u606F\u4EE5\u4E00\u79CD\u53EF\u63A7\u7684\u65B9\u5F0F\u5199\u5165\u4E0D\u540C\u7684\u5206\u533A\u65F6\uFF0C\u4F1A\u7528\u5230\u952E\u3002</p><blockquote><p>\u6D88\u606F\u53EF\u4EE5\u6709 key, \u4E5F\u53EF\u4EE5\u6CA1\u6709 key.</p></blockquote><p>\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u6D88\u606F\u88AB\u5206\u6279\u5199\u5165 Kafka\u3002\u6279\u6B21\u5C31\u662F\u4E00\u7EC4\u6D88\u606F\uFF0C\u8FD9\u4E9B\u6D88\u606F\u5C5E\u4E8E\u540C\u4E00\u4E2A\u4E3B\u9898\u548C\u5206\u533A\u3002</p><p>\u628A\u6D88\u606F\u5206\u6210\u6279\u6B21\u53EF\u4EE5\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\u3002\u6279\u6B21(\u7684\u6D88\u606F\u91CF)\u8D8A\u5927\uFF0C\u5355\u4F4D\u65F6\u95F4\u5185\u5904\u7406\u7684\u6D88\u606F\u5C31\u8D8A\u591A\uFF0C\u5355\u4E2A\u6D88\u606F\u7684\u4F20\u8F93\u65F6\u95F4\u5C31\u8D8A\u957F\u3002\u6279\u6B21\u6570\u636E\u4F1A\u88AB\u538B\u7F29\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u5347\u6570\u636E\u7684\u4F20\u8F93\u548C\u5B58\u50A8\u80FD\u529B\uFF0C\u4F46\u662F\u9700\u8981\u66F4\u591A\u7684\u8BA1\u7B97\u5904\u7406\u3002</p><h3 id="_4-2-\u6D88\u606F\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6D88\u606F\u6A21\u5F0F" aria-hidden="true">#</a> 4.2 \u6D88\u606F\u6A21\u5F0F</h3><p>\u6D88\u606F\u6A21\u5F0F(schema)\u6709\u8BB8\u591A\u53EF\u7528\u7684\u9009\u9879\uFF0C\u4EE5\u4FBF\u4E8E\u7406\u89E3\u3002\u5982 JSON \u548C XML\uFF0C\u4F46\u662F\u5B83\u4EEC\u7F3A\u4E4F\u5F3A\u7C7B\u578B\u5904\u7406\u80FD\u529B\u3002</p><p>Kafka \u7684\u8BB8\u591A\u5F00\u53D1\u8005\u559C\u6B22\u4F7F\u7528 Apache Avro\u3002Avro \u63D0\u4F9B\u4E86\u4E00\u79CD\u7D27\u51D1\u7684\u5E8F\u5217\u5316\u683C\u5F0F\uFF0C\u6A21\u5F0F\u548C\u6D88\u606F\u4F53\u5206\u5F00\u3002 \u5F53\u6A21\u5F0F\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u751F\u6210\u4EE3\u7801\uFF0C\u5B83\u8FD8\u652F\u6301\u5F3A\u7C7B\u578B\u548C\u6A21\u5F0F\u8FDB\u5316\uFF0C\u5176\u7248\u672C\u65E2\u5411\u524D\u517C\u5BB9\uFF0C\u4E5F\u5411\u540E\u517C\u5BB9\u3002</p><p>\u6570\u636E\u683C\u5F0F\u7684\u4E00\u81F4\u6027\u5BF9 Kafka \u5F88\u91CD\u8981\uFF0C\u56E0\u4E3A\u5B83\u6D88\u9664\u4E86\u6D88\u606F\u8BFB\u5199\u64CD\u4F5C\u4E4B\u95F4\u7684\u8026\u5408\u6027\u3002</p><h3 id="_4-3-\u4E3B\u9898\u548C\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E3B\u9898\u548C\u5206\u533A" aria-hidden="true">#</a> 4.3 \u4E3B\u9898\u548C\u5206\u533A</h3><p>Kafka \u7684\u6D88\u606F\u901A\u8FC7\u4E3B\u9898\u8FDB\u884C\u5206\u7C7B\u3002\u4E3B\u9898\u76F8\u5F53\u4E8E\u6570\u636E\u5E93\u7684\u8868\u6216\u8005\u6587\u4EF6\u7CFB\u7EDF\u91CC\u7684\u6587\u4EF6\u5939\u3002</p><p>\u4E3B\u9898\u53EF\u4EE5\u88AB\u5206\u4E3A\u82E5\u5E72\u5206\u533A\uFF0C\u4E00\u4E2A\u4E3B\u9898\u901A\u8FC7\u5206\u533A\u5206\u5E03\u4E8E Kafka \u96C6\u7FA4\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u6A2A\u5411\u6269\u5C55\u7684\u80FD\u529B\u3002</p><p><img src="'+i+'" alt="\u4E3B\u9898\u548C\u5206\u533A"></p><h3 id="_4-4-\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005" tabindex="-1"><a class="header-anchor" href="#_4-4-\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005" aria-hidden="true">#</a> 4.4 \u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005</h3><p>\u751F\u4EA7\u8005\u521B\u5EFA\u6D88\u606F\u3002\u6D88\u8D39\u8005\u6D88\u8D39\u6D88\u606F\u3002</p><p>\u4E00\u4E2A\u6D88\u606F\u88AB\u53D1\u5E03\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u4E3B\u9898\u4E0A\u3002</p><p>\u751F\u4EA7\u8005\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u628A\u6D88\u606F\u5747\u8861\u5730\u5206\u5E03\u5230\u4E3B\u9898\u7684\u6240\u6709\u5206\u533A\u4E0A:</p><ol><li>\u76F4\u63A5\u6307\u5B9A\u6D88\u606F\u7684\u5206\u533A\u3002</li><li>\u6839\u636E\u6D88\u606F\u7684 key \u6563\u5217\u53D6\u6A21\u5F97\u51FA\u5206\u533A\u3002</li><li>\u8F6E\u8BE2\u6307\u5B9A\u5206\u533A\u3002</li></ol><p>\u6D88\u8D39\u8005\u901A\u8FC7\u504F\u79FB\u91CF\u6765\u533A\u5206\u5DF2\u7ECF\u8BFB\u8FC7\u7684\u6D88\u606F\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u6BCF\u4E2A\u6D88\u606F\u53EA\u88AB\u6D88\u8D39\u4E00\u6B21\u3002</p><p>\u6D88\u8D39\u8005\u662F\u6D88\u8D39\u7EC4\u7684\u4E00\u90E8\u5206\u3002\u6D88\u8D39\u7EC4\u4FDD\u8BC1\u6BCF\u4E2A\u5206\u533A\u53EA\u80FD\u88AB\u4E00\u4E2A\u6D88\u8D39\u8005\u4F7F\u7528\uFF0C\u907F\u514D\u91CD\u590D\u6D88\u8D39\u3002</p><p><img src="'+o+'" alt="\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005"></p><h3 id="_4-5-broker-\u548C\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_4-5-broker-\u548C\u96C6\u7FA4" aria-hidden="true">#</a> 4.5 Broker \u548C\u96C6\u7FA4</h3><p>\u4E00\u4E2A\u72EC\u7ACB\u7684 Kafka \u670D\u52A1\u5668\u79F0\u4E3A Broker\u3002</p><p>Broker \u63A5\u6536\u6765\u81EA\u751F\u4EA7\u8005\u7684\u6D88\u606F\uFF0C\u4E3A\u6D88\u606F\u8BBE\u7F6E\u504F\u79FB\u91CF\uFF0C\u5E76\u63D0\u4EA4\u6D88\u606F\u5230\u78C1\u76D8\u4FDD\u5B58\u3002</p><p>Broker \u4E3A\u6D88\u8D39\u8005\u63D0\u4F9B\u670D\u52A1\uFF0C\u5BF9\u8BFB\u53D6\u5206\u533A\u7684\u8BF7\u6C42\u505A\u51FA\u54CD\u5E94\uFF0C\u8FD4\u56DE\u5DF2\u7ECF\u63D0\u4EA4\u5230\u78C1\u76D8\u4E0A\u7684\u6D88\u606F\u3002</p><p>\u5355\u4E2A Broker \u53EF\u4EE5\u8F7B\u677E\u5904\u7406 <em>\u6570\u5343\u4E2A\u5206\u533A</em> \u4EE5\u53CA <em>\u6BCF\u79D2\u767E\u4E07\u7EA7</em> \u7684\u6D88\u606F\u91CF\u3002</p><p><img src="'+l+'" alt="Kafka\u96C6\u7FA4"></p><blockquote><p>\u6D88\u606F\u7684\u751F\u4EA7\u8005\u90FD\u662F\u5C06\u6D88\u606F\u5199\u5165\u7ED9 \u300C\u9996\u9886\u300D\u5206\u533A\u7684\u3002\u56E0\u6B64 A/0 \u5199\u5165 Broker1, A/1 \u5199\u5165 Broker2. \u6D88\u8D39\u8005\u4E5F\u662F\u5982\u6B64\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9996\u9886\u5206\u533A\u8D1F\u8D23\u5BA2\u6237\u7AEF\u7684\u8BFB\u5199\u64CD\u4F5C\u3002</p></blockquote><blockquote><p>\u526F\u672C\u5206\u533A\u53EA\u8D1F\u8D23(\u901A\u8FC7\u590D\u5236\u7684\u65B9\u5F0F)\u968F\u65F6\u4E0E\u9996\u9886\u5206\u533A\u4FDD\u6301\u540C\u6B65\uFF1B\u5F53\u9996\u9886\u5206\u533A\u5B95\u673A\u4E86\uFF0C\u968F\u65F6\u5207\u6362\u4E3A\u9996\u9886\u5206\u533A\u3002</p></blockquote><p>\u6BCF\u4E2A\u96C6\u7FA4\u90FD\u6709\u4E00\u4E2A Broker \u662F\u96C6\u7FA4\u63A7\u5236\u5668(\u81EA\u52A8\u4ECE\u96C6\u7FA4\u7684\u6D3B\u8DC3\u6210\u5458\u4E2D\u9009\u4E3E\u51FA\u6765)\u3002</p><blockquote><p>\u5982\uFF1A\u6570\u5B66\u8001\u5E08\u540C\u65F6\u662F\u73ED\u4E3B\u4EFB\u3002\u9009\u4E3E\u65F6\u4F7F\u7528\u4E86 zookeeper \u7684\u5206\u5E03\u5F0F\u9501\u3002</p></blockquote><p>\u63A7\u5236\u5668\u8D1F\u8D23\u7BA1\u7406\u5DE5\u4F5C:</p><ul><li>\u5C06\u5206\u533A\u5206\u914D\u7ED9 Broker</li></ul><blockquote><p>\u4E3E\u4F8B\u8BF4\u660E\uFF1A\u5982\u679C Broker1 \u53D1\u73B0 Broker2 \u7684\u5206\u533A 1 \u8FDE\u4E0D\u4E0A\u4E86\uFF0C\u5C31\u5C06 Broker1 \u7684\u5206\u533A 1 \u63D0\u5347\u4E3A\u9996\u9886\u5206\u533A\uFF1B\u6B64\u65F6\u53D1\u73B0\u81EA\u5DF1\u6CA1\u6709\u526F\u672C\u5206\u533A\uFF0C\u7136\u540E\u5C31\u5728 Broker3 \u4E0A\u9762\u521B\u5EFA\u4E00\u4E2A\u5206\u533A 1 \u7684\u526F\u672C\u5206\u533A\u3002</p></blockquote><ul><li>\u76D1\u63A7 Broker</li></ul><hr><p>\u96C6\u7FA4\u4E2D\u4E00\u4E2A\u5206\u533A\u5C5E\u4E8E\u4E00\u4E2A Broker \u65F6\uFF0C\u8BE5 Broker \u79F0\u4E3A\u5206\u533A\u9996\u9886\u3002</p><blockquote><p>\u5176\u5B9E\u672C\u610F\u662F\uFF1A\u9996\u9886\u5206\u533A\u6240\u5728\u7684 Broker \u79F0\u4E3A\u4E3B\u9898\u7684\u5206\u533A\u9996\u9886\u3002</p></blockquote><p>\u4E00\u4E2A\u5206\u533A\u53EF\u4EE5\u5206\u914D\u7ED9\u591A\u4E2A Broker\uFF0C\u6B64\u65F6\u4F1A\u53D1\u751F\u5206\u533A\u590D\u5236\u3002</p><p>\u5206\u533A\u7684\u590D\u5236\u63D0\u4F9B\u4E86\u6D88\u606F\u5197\u4F59\uFF0C\u9AD8\u53EF\u7528\u3002\u526F\u672C\u5206\u533A\u4E0D\u8D1F\u8D23\u5904\u7406\u6D88\u606F\u7684\u8BFB\u5199\u3002</p><h2 id="_5-kafka-\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_5-kafka-\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 5. Kafka \u6838\u5FC3\u6982\u5FF5</h2><h3 id="_5-1-producer" tabindex="-1"><a class="header-anchor" href="#_5-1-producer" aria-hidden="true">#</a> 5.1 Producer</h3><p>\u751F\u4EA7\u8005\u521B\u5EFA\u6D88\u606F\u3002</p><p>\u8BE5\u89D2\u8272\u5C06\u6D88\u606F\u53D1\u5E03\u5230 Kafka \u7684 Topic \u4E2D\u3002Broker \u63A5\u6536\u5230\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u540E\uFF0CBroker \u5C06\u8BE5\u6D88\u606F\u8FFD\u52A0\u5230\u5F53\u524D\u7528\u4E8E\u8FFD\u52A0\u6570\u636E\u7684 segment \u6587\u4EF6\u4E2D\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u6D88\u606F\u4F1A\u88AB\u53D1\u5E03\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u4E3B\u9898\u4E0A\u3002</p><ol><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u901A\u8FC7\u8F6E\u8BE2\u628A\u6D88\u606F\u5747\u8861\u5730\u5206\u5E03\u5230\u4E3B\u9898\u7684\u6240\u6709\u5206\u533A\u4E0A\u3002(\u6CA1\u6709\u6307\u5B9A key, \u4E5F\u6CA1\u6709\u6307\u5B9A\u5206\u533A\u7F16\u53F7\u7684\u60C5\u51B5)</li><li>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u751F\u4EA7\u8005\u4F1A\u628A\u6D88\u606F\u76F4\u63A5\u5199\u5230\u6307\u5B9A\u7684\u5206\u533A\u3002\u8FD9\u901A\u5E38\u662F\u901A\u8FC7\u6D88\u606F\u952E\u548C\u5206\u533A\u5668\u6765\u5B9E\u73B0\u7684\uFF0C\u5206\u533A\u5668\u4E3A\u952E\u751F\u6210\u4E00\u4E2A\u6563\u5217\u503C\uFF0C\u5E76\u5C06\u5176\u6620\u5C04\u5230\u6307\u5B9A\u7684\u5206\u533A\u4E0A\u3002\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u5305\u542B\u540C\u4E00\u4E2A\u952E\u7684\u6D88\u606F\u4F1A\u88AB\u5199\u5230\u540C\u4E00\u4E2A\u5206\u533A\u4E0A\u3002</li><li>\u751F\u4EA7\u8005\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5206\u533A\u5668\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u4E1A\u52A1\u89C4\u5219\u5C06\u6D88\u606F\u6620\u5C04\u5230\u5206\u533A\u3002</li></ol><h3 id="_5-2-consumer" tabindex="-1"><a class="header-anchor" href="#_5-2-consumer" aria-hidden="true">#</a> 5.2 Consumer</h3><p>\u6D88\u8D39\u8005\u8BFB\u53D6\u6D88\u606F\u3002</p><ol><li>\u6D88\u8D39\u8005\u8BA2\u9605\u4E00\u4E2A\u6216\u591A\u4E2A\u4E3B\u9898\uFF0C\u5E76\u6309\u7167\u6D88\u606F\u751F\u6210\u7684\u987A\u5E8F\u8BFB\u53D6\u5B83\u4EEC\u3002</li><li>\u6D88\u8D39\u8005\u901A\u8FC7\u68C0\u67E5\u6D88\u606F\u7684\u504F\u79FB\u91CF\u6765\u533A\u5206\u5DF2\u7ECF\u8BFB\u53D6\u8FC7\u7684\u6D88\u606F\u3002</li></ol><blockquote><p>\u504F\u79FB\u91CF\u662F\u53E6\u4E00\u79CD\u5143\u6570\u636E\uFF0C\u5B83\u662F\u4E00\u4E2A\u4E0D\u65AD\u9012\u589E\u7684\u6574\u6570\u503C\u3002\u5728\u521B\u5EFA\u6D88\u606F\u65F6\uFF0CKafka \u4F1A\u628A\u5B83\u6DFB\u52A0\u5230\u6D88\u606F\u91CC\u3002\u5728\u7ED9\u5B9A\u7684\u5206\u533A\u91CC\uFF0C\u6BCF\u4E2A\u6D88\u606F\u7684\u504F\u79FB\u91CF\u90FD\u662F\u552F\u4E00\u7684\u3002<br> \u6D88\u8D39\u8005\u628A\u6BCF\u4E2A\u5206\u533A\u6700\u540E\u8BFB\u53D6\u7684\u6D88\u606F\u504F\u79FB\u91CF\u4FDD\u5B58\u5728 Zookeeper \u6216 Kafka \u4E0A\uFF0C\u5982\u679C\u6D88\u8D39\u8005\u5173\u95ED\u6216\u91CD\u542F\uFF0C\u5B83\u7684\u8BFB\u53D6\u72B6\u6001\u4E0D\u4F1A\u4E22\u5931\u3002</p></blockquote><ol start="3"><li>\u6D88\u8D39\u8005\u662F\u6D88\u8D39\u7EC4\u7684\u4E00\u90E8\u5206\u3002\u6D88\u8D39\u7EC4\u4FDD\u8BC1\u6BCF\u4E2A\u5206\u533A\u53EA\u80FD\u88AB\u4E00\u4E2A\u6D88\u8D39\u8005\u4F7F\u7528\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u6D88\u8D39\u8005\u5931\u6548\uFF0C\u6D88\u8D39\u7EC4\u91CC\u7684\u5176\u4ED6\u6D88\u8D39\u8005\u53EF\u4EE5\u63A5\u7BA1\u5931\u6548\u6D88\u8D39\u8005\u7684\u5DE5\u4F5C\uFF0C\u518D\u5E73\u8861\uFF0C\u5206\u533A\u91CD\u65B0\u5206\u914D\u3002</li></ol><p><img src="'+p+'" alt="Consumer\u793A\u610F\u56FE"></p><h3 id="_5-3-broker" tabindex="-1"><a class="header-anchor" href="#_5-3-broker" aria-hidden="true">#</a> 5.3 Broker</h3><p>\u4E00\u4E2A\u72EC\u7ACB\u7684 Kafka \u670D\u52A1\u5668\u88AB\u79F0\u4E3A Broker\u3002</p><p>Broker \u4E3A\u6D88\u8D39\u8005\u63D0\u4F9B\u670D\u52A1\uFF0C\u5BF9\u8BFB\u53D6\u5206\u533A\u7684\u8BF7\u6C42\u4F5C\u51FA\u54CD\u5E94\uFF0C\u8FD4\u56DE\u5DF2\u7ECF\u63D0\u4EA4\u5230\u78C1\u76D8\u4E0A\u7684\u6D88\u606F\u3002</p><ol><li>\u5982\u679C\u67D0 Topic \u6709 N \u4E2A Partition\uFF0C\u96C6\u7FA4\u6709 N \u4E2A Broker\uFF0C\u90A3\u4E48\u6BCF\u4E2A Broker \u5B58\u50A8\u8BE5 Topic \u7684\u4E00\u4E2A Partition\u3002</li><li>\u5982\u679C\u67D0 Topic \u6709 N \u4E2A Partition\uFF0C\u96C6\u7FA4\u6709 (N + M) \u4E2A Broker\uFF0C\u90A3\u4E48\u5176\u4E2D\u6709 N \u4E2A broker \u5B58\u50A8\u8BE5 Topic \u7684\u4E00\u4E2A Partition\uFF0C\u5269\u4E0B\u7684 M \u4E2A Broker \u4E0D\u5B58\u50A8\u8BE5 Topic \u7684 Partition \u6570\u636E\u3002</li><li>\u5982\u679C\u67D0 Topic \u6709 N \u4E2A Partition\uFF0C\u96C6\u7FA4\u4E2D Broker \u6570\u76EE\u5C11\u4E8E N \u4E2A\uFF0C\u90A3\u4E48\u4E00\u4E2A Broker \u5B58\u50A8\u8BE5 Topic \u7684\u4E00\u4E2A\u6216\u591A\u4E2A Partition\u3002</li></ol><blockquote><p>\u5728\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5C3D\u91CF\u907F\u514D 3 \u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5BB9\u6613\u5BFC\u81F4 Kafka \u96C6\u7FA4\u6570\u636E\u4E0D\u5747\u8861\u3002</p></blockquote><blockquote><p>\u4E5F\u5C31\u662F\u8BF4 Broker \u6570\u91CF\u6700\u597D\u5927\u4E8E Partition \u6570\u91CF\u3002</p></blockquote><p>Broker \u662F\u96C6\u7FA4\u7684\u7EC4\u6210\u90E8\u5206\u3002\u6BCF\u4E2A\u96C6\u7FA4\u90FD\u6709\u4E00\u4E2A Broker \u540C\u65F6\u5145\u5F53\u4E86\u96C6\u7FA4\u63A7\u5236\u5668\u7684\u89D2\u8272(\u81EA\u52A8\u4ECE\u96C6\u7FA4\u7684\u6D3B\u8DC3\u6210\u5458\u4E2D\u9009\u4E3E\u51FA\u6765)\u3002</p><p>\u63A7\u5236\u5668\u8D1F\u8D23\u7BA1\u7406\u5DE5\u4F5C\uFF0C\u5305\u62EC\u5C06\u5206\u533A\u5206\u914D\u7ED9 Broker \u548C\u76D1\u63A7 Broker\u3002\u5728\u96C6\u7FA4\u4E2D\uFF0C\u4E00\u4E2A\u5206\u533A\u4ECE\u5C5E\u4E8E\u4E00\u4E2A Broker\uFF0C\u8BE5 Broker \u88AB\u79F0\u4E3A\u5206\u533A\u7684\u9996\u9886\u3002</p><p><img src="'+t+'" alt="Broker\u793A\u610F\u56FE"></p><h3 id="_5-4-topic" tabindex="-1"><a class="header-anchor" href="#_5-4-topic" aria-hidden="true">#</a> 5.4 Topic</h3><p>\u6BCF\u6761\u53D1\u5E03\u5230 Kafka \u96C6\u7FA4\u7684\u6D88\u606F\u90FD\u6709\u4E00\u4E2A\u7C7B\u522B\uFF0C\u8FD9\u4E2A\u7C7B\u522B\u88AB\u79F0\u4E3A Topic\u3002</p><p>\u7269\u7406\u4E0A\u4E0D\u540C Topic \u7684\u6D88\u606F\u5206\u5F00\u5B58\u50A8\u3002</p><p>\u4E3B\u9898\u5C31\u597D\u6BD4\u6570\u636E\u5E93\u7684\u8868\uFF0C\u5C24\u5176\u662F\u5206\u5E93\u5206\u8868\u4E4B\u540E\u7684\u903B\u8F91\u8868\u3002</p><h3 id="_5-5-partition" tabindex="-1"><a class="header-anchor" href="#_5-5-partition" aria-hidden="true">#</a> 5.5 Partition</h3><ol><li>\u4E3B\u9898\u53EF\u4EE5\u88AB\u5206\u4E3A\u82E5\u5E72\u4E2A\u5206\u533A\uFF0C\u4E00\u4E2A\u5206\u533A\u5C31\u662F\u4E00\u4E2A\u63D0\u4EA4\u65E5\u5FD7\u3002(\u6362\u8A00\u4E4B\uFF0C\u5728\u78C1\u76D8\u4E0A\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5B58\u50A8)</li><li>\u6D88\u606F\u4EE5\u8FFD\u52A0\u7684\u65B9\u5F0F\u5199\u5165\u5206\u533A\uFF0C\u7136\u540E\u4EE5\u5148\u5165\u5148\u51FA\u7684\u987A\u5E8F\u8BFB\u53D6\u3002(\u5728\u5355\u4E2A\u5206\u533A\u5185\uFF0C\u5148\u8FDB\u5148\u51FA)</li><li>\u65E0\u6CD5\u5728\u6574\u4E2A\u4E3B\u9898\u8303\u56F4\u5185\u4FDD\u8BC1\u6D88\u606F\u7684\u987A\u5E8F\uFF0C\u4F46\u53EF\u4EE5\u4FDD\u8BC1\u6D88\u606F\u5728\u5355\u4E2A\u5206\u533A\u5185\u7684\u987A\u5E8F\u3002</li><li>Kafka \u901A\u8FC7\u5206\u533A\u6765\u5B9E\u73B0\u6570\u636E\u5197\u4F59\u548C\u4F38\u7F29\u6027\u3002</li><li>\u5728\u9700\u8981\u4E25\u683C\u4FDD\u8BC1\u6D88\u606F\u7684\u6D88\u8D39\u987A\u5E8F\u7684\u573A\u666F\u4E0B\uFF0C\u9700\u8981\u5C06 Partition \u6570\u76EE\u8BBE\u4E3A 1\u3002</li></ol><p><img src="'+d+'" alt="\u5206\u533A\u793A\u610F\u56FE"></p><h3 id="_5-6-replicas" tabindex="-1"><a class="header-anchor" href="#_5-6-replicas" aria-hidden="true">#</a> 5.6 Replicas</h3><p>Kafka \u4F7F\u7528\u4E3B\u9898\u6765\u7EC4\u7EC7\u6570\u636E\uFF0C\u6BCF\u4E2A\u4E3B\u9898\u88AB\u5206\u4E3A\u82E5\u5E72\u4E2A\u5206\u533A\uFF0C\u6BCF\u4E2A\u5206\u533A\u6709\u591A\u4E2A\u526F\u672C\u3002 \u90A3\u4E9B\u526F\u672C\u88AB\u4FDD\u5B58\u5728 Broker \u4E0A\uFF0C \u6BCF\u4E2A Broker \u53EF\u4EE5\u4FDD\u5B58\u6210\u767E\u4E0A\u5343\u4E2A\u5C5E\u4E8E\u4E0D\u540C\u4E3B\u9898\u548C\u5206\u533A\u7684\u526F\u672C\u3002</p><blockquote><p>\u4E3B\u9898 --N--&gt; \u5206\u533A --N--&gt; \u5206\u533A\u526F\u672C</p></blockquote><p>\u526F\u672C\u6709\u4EE5\u4E0B\u4E24\u79CD\u7C7B\u578B:</p><ul><li>\u9996\u9886\u526F\u672C: \u6BCF\u4E2A\u5206\u533A\u90FD\u6709\u4E00\u4E2A\u9996\u9886\u526F\u672C\u3002\u4E3A\u4E86\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF0C\u6240\u6709\u751F\u4EA7\u8005\u8BF7\u6C42\u548C\u6D88\u8D39\u8005\u8BF7\u6C42\u90FD\u4F1A\u7ECF\u8FC7\u8FD9\u4E2A\u526F\u672C\u3002</li><li>\u8DDF\u968F\u8005\u526F\u672C: \u9996\u9886\u4EE5\u5916\u7684\u526F\u672C\u90FD\u662F\u8DDF\u968F\u8005\u526F\u672C\u3002\u8DDF\u968F\u8005\u526F\u672C\u4E0D\u5904\u7406\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u5B83\u4EEC\u552F\u4E00\u7684\u4EFB\u52A1\u5C31\u662F\u4ECE\u9996\u9886\u90A3\u91CC\u590D\u5236\u6D88\u606F\uFF0C\u4FDD\u6301\u4E0E\u9996\u9886\u4E00\u81F4\u7684\u72B6\u6001\u3002\u5982\u679C\u9996\u9886\u53D1\u751F\u5D29\u6E83\uFF0C\u5176\u4E2D\u7684\u4E00\u4E2A\u8DDF\u968F\u8005\u4F1A\u88AB\u63D0\u5347\u4E3A\u65B0\u9996\u9886\u3002</li></ul><h3 id="_5-7-offset" tabindex="-1"><a class="header-anchor" href="#_5-7-offset" aria-hidden="true">#</a> 5.7 Offset</h3><h4 id="\u751F\u4EA7\u8005-offset" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005-offset" aria-hidden="true">#</a> \u751F\u4EA7\u8005 Offset</h4><p>\u6D88\u606F\u5199\u5165\u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A\u5206\u533A\u90FD\u6709\u4E00\u4E2A Offset\uFF0C\u8FD9\u4E2A Offset \u5C31\u662F\u751F\u4EA7\u8005\u7684 Offset\uFF0C\u540C\u65F6\u4E5F\u662F\u8FD9\u4E2A\u5206\u533A\u7684\u6700\u65B0\u6700\u5927\u7684 Offset\u3002</p><p>\u6709\u4E9B\u65F6\u5019\u6CA1\u6709\u6307\u5B9A\u67D0\u4E00\u4E2A\u5206\u533A\u7684 Offset\uFF0C\u8FD9\u4E2A\u5DE5\u4F5C Kafka \u5E2E\u6211\u4EEC\u5B8C\u6210\u3002</p><p><img src="'+h+'" alt="\u751F\u4EA7\u8005 Offset"></p><h4 id="\u6D88\u8D39\u8005-offset" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005-offset" aria-hidden="true">#</a> \u6D88\u8D39\u8005 Offset</h4><p><img src="'+s+'" alt="\u6D88\u8D39\u8005 Offset"></p><p>\u8FD9\u662F\u67D0\u4E00\u4E2A\u5206\u533A\u7684 Offset \u60C5\u51B5\uFF0C\u751F\u4EA7\u8005\u5199\u5165\u7684 Offset \u662F\u6700\u65B0\u6700\u5927\u7684\u503C\u662F12\uFF0C\u800C\u5F53 Consumer A \u8FDB\u884C\u6D88\u8D39\u65F6\uFF0C\u4ECE 0 \u5F00\u59CB\u6D88\u8D39\uFF0C\u4E00\u76F4\u6D88\u8D39\u5230\u4E869\uFF0C \u6D88\u8D39\u8005\u7684 Offset \u5C31\u8BB0\u5F55\u5728 9\uFF0CConsumer B \u5C31\u7EAA\u5F55\u5728\u4E8611\u3002</p><p>\u7B49\u4E0B\u4E00\u6B21\u4ED6\u4EEC\u518D\u6765\u6D88\u8D39\u65F6\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u9009\u62E9\u63A5\u7740\u4E0A\u4E00\u6B21\u7684\u4F4D\u7F6E\u6D88\u8D39\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u9009\u62E9\u4ECE\u5934\u6D88\u8D39\uFF0C\u6216\u8005\u8DF3\u5230\u6700\u8FD1\u7684\u8BB0\u5F55\u5E76\u4ECE\u300C\u73B0\u5728\u300D\u5F00\u59CB\u6D88\u8D39\u3002</p><h3 id="_5-8-\u526F\u672C" tabindex="-1"><a class="header-anchor" href="#_5-8-\u526F\u672C" aria-hidden="true">#</a> 5.8 \u526F\u672C</h3><p>Kafka \u901A\u8FC7\u526F\u672C\u4FDD\u8BC1\u9AD8\u53EF\u7528\u3002</p><p>\u526F\u672C\u5206\u4E3A\u9996\u9886\u526F\u672C(Leader)\u548C\u8DDF\u968F\u8005\u526F\u672C(Follower)\u3002</p><p>\u8DDF\u968F\u8005\u526F\u672C\u5305\u62EC\u540C\u6B65\u526F\u672C\u548C\u4E0D\u540C\u6B65\u526F\u672C\uFF0C\u5728\u53D1\u751F\u9996\u9886\u526F\u672C\u5207\u6362\u7684\u65F6\u5019\uFF0C\u53EA\u6709\u540C\u6B65\u526F\u672C\u53EF\u4EE5\u5207\u6362\u4E3A\u9996\u9886\u526F\u672C\u3002</p><blockquote><p>\u540C\u6B65\u526F\u672C\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u3002</p></blockquote><h4 id="_5-8-1-ar" tabindex="-1"><a class="header-anchor" href="#_5-8-1-ar" aria-hidden="true">#</a> 5.8.1 AR</h4><p>\u5206\u533A\u4E2D\u7684\u6240\u6709\u526F\u672C\u7EDF\u79F0\u4E3A AR(Assigned Replicas)\u3002</p><p>AR = ISR + OSR</p><h4 id="_5-8-2-isr" tabindex="-1"><a class="header-anchor" href="#_5-8-2-isr" aria-hidden="true">#</a> 5.8.2 ISR</h4><blockquote><p>\u540C\u6B65\u526F\u672C\u96C6\u5408</p></blockquote><p>\u6240\u6709\u4E0E Leader \u526F\u672C\u4FDD\u6301\u4E00\u5B9A\u7A0B\u5EA6\u540C\u6B65\u7684\u526F\u672C(\u5305\u62ECLeader)\u7EC4\u6210 ISR(In-Sync Replicas)\uFF0CISR \u96C6\u5408\u662F AR \u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u5B50\u96C6\u3002</p><p>\u6D88\u606F\u4F1A\u5148\u53D1\u9001\u5230 Leader \u526F\u672C\uFF0C\u7136\u540E Follower \u526F\u672C\u624D\u80FD\u4ECE Leader \u526F\u672C\u4E2D\u62C9\u53D6\u6D88\u606F\u8FDB\u884C\u540C\u6B65\uFF0C\u540C\u6B65\u671F\u95F4\u5185 Follower \u526F\u672C\u76F8\u5BF9\u4E8E Leader \u526F\u672C\u800C\u8A00\u4F1A\u6709\u4E00\u5B9A\u7A0B\u5EA6\u7684\u6EDE\u540E\u3002 \u524D\u9762\u6240\u8BF4\u7684\u300C\u4E00\u5B9A\u7A0B\u5EA6\u300D\u662F\u6307\u53EF\u4EE5\u5FCD\u53D7\u7684\u6EDE\u540E\u8303\u56F4\uFF0C\u8FD9\u4E2A\u8303\u56F4\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u8FDB\u884C\u914D\u7F6E\u3002</p><h4 id="_5-8-3-osr" tabindex="-1"><a class="header-anchor" href="#_5-8-3-osr" aria-hidden="true">#</a> 5.8.3 OSR</h4><p>\u4E0E Leader \u526F\u672C\u540C\u6B65\u6EDE\u540E\u8FC7\u591A\u7684\u526F\u672C(\u4E0D\u5305\u62EC Leader)\u526F\u672C\uFF0C\u7EC4\u6210 OSR(Out-Sync Replicas)\u3002 \u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u7684 Follower \u526F\u672C\u90FD\u5E94\u8BE5\u4E0E Leader \u526F\u672C\u4FDD\u6301\u4E00\u5B9A\u7A0B\u5EA6\u7684\u540C\u6B65\uFF0C\u5373 AR = ISR, OSR \u96C6\u5408\u4E3A\u7A7A\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u526F\u672C\u90FD\u4E0E Leader \u526F\u672C\u4FDD\u6301\u540C\u6B65\uFF0C\u6CA1\u6709\u4E0D\u540C\u6B65\u7684\u526F\u672C\u3002</p></blockquote><h4 id="_5-8-4-hw" tabindex="-1"><a class="header-anchor" href="#_5-8-4-hw" aria-hidden="true">#</a> 5.8.4 HW</h4><p>HW \u662F High Watermark \u7684\u7F29\u5199\uFF0C\u4FD7\u79F0\u9AD8\u6C34\u4F4D\uFF0C\u5B83\u8868\u793A\u4E86\u4E00\u4E2A\u7279\u5B9A\u6D88\u606F\u7684\u504F\u79FB\u91CF(Offset)\uFF0C\u6D88\u8D39\u4E4B\u53EA\u80FD\u62C9\u53D6\u5230\u8FD9\u4E2A Offset \u4E4B\u524D\u7684\u6D88\u606F\u3002</p><blockquote><p>HW \u51B3\u5B9A\u4E86\u6D88\u8D39\u8005\u80FD\u591F\u6D88\u8D39\u7684\u6570\u636E\u3002</p></blockquote><h4 id="_5-8-5-leo" tabindex="-1"><a class="header-anchor" href="#_5-8-5-leo" aria-hidden="true">#</a> 5.8.5 LEO</h4><p>LEO \u662F Log End Offset \u7684\u7F29\u5199\uFF0C\u5B83\u8868\u793A\u4E86\u5F53\u524D\u65E5\u5FD7\u6587\u4EF6\u4E2D\u4E0B\u4E00\u6761\u5F85\u5199\u5165\u6D88\u606F\u7684 Offset\u3002</p><p><img src="'+c+'" alt="LEO"></p>',123);function f(u,_){return n}var m=a(k,[["render",f],["__file","index.html.vue"]]);export{m as default};
