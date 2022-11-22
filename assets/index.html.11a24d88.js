import{_ as t,r as l,o as c,a as o,b as n,d as e,F as r,c as p,e as s}from"./app.40df414d.js";var u="/doc/assets/README-1642844398570.5b0e706a.png",i="/doc/assets/README-1645431803294.36d49865.png";const b={},m=p('<h1 id="hue" tabindex="-1"><a class="header-anchor" href="#hue" aria-hidden="true">#</a> HUE</h1><blockquote><p>\u6570\u636E\u4EA4\u4E92\u5DE5\u5177</p></blockquote><h2 id="\u7B2C\u4E00\u90E8\u5206-hue\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u90E8\u5206-hue\u6982\u8FF0" aria-hidden="true">#</a> \u7B2C\u4E00\u90E8\u5206 Hue\u6982\u8FF0</h2><p>Hue(Hadoop User Experience)\u662F\u4E00\u4E2A\u5F00\u6E90\u7684 Apache Hadoop UI \u7CFB\u7EDF\uFF0C\u6700\u65E9\u662F\u7531 Cloudera Desktop \u6F14\u5316\u800C\u6765\uFF0C\u7531 Cloudera \u8D21\u732E\u7ED9\u5F00\u6E90\u793E\u533A\uFF0C\u5B83\u662F\u57FA\u4E8E Python Web \u6846\u67B6 Django \u5B9E\u73B0\u7684\u3002</p><p>\u901A\u8FC7\u4F7F\u7528 Hue \u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7AEF\u7684 Web \u63A7\u5236\u53F0\u4E0A\u4E0E Hadoop \u96C6\u7FA4\u8FDB\u884C\u4EA4\u4E92\u6765\u5206\u6790\u5904\u7406\u6570\u636E\uFF0C\u4F8B\u5982\u64CD\u4F5C HDFS \u4E0A\u7684\u6570\u636E\uFF0C\u8FD0\u884C MapReduce Job \u7B49\u7B49\u3002</p><p>Hue\u6240\u652F\u6301\u7684\u529F\u80FD\u7279\u6027\u96C6\u5408\uFF1A</p><ul><li>\u9ED8\u8BA4\u57FA\u4E8E\u8F7B\u91CF\u7EA7sqlite\u6570\u636E\u5E93\u7BA1\u7406\u4F1A\u8BDD\u6570\u636E\uFF0C\u7528\u6237\u8BA4\u8BC1\u548C\u6388\u6743\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E3A MySQL\u3001Postgresql\uFF0C\u4EE5\u53CAOracle</li><li>\u57FA\u4E8E\u6587\u4EF6\u6D4F\u89C8\u5668\uFF08File Browser\uFF09\u8BBF\u95EEHDFS</li><li>\u57FA\u4E8EHive\u7F16\u8F91\u5668\u6765\u5F00\u53D1\u548C\u8FD0\u884CHive\u67E5\u8BE2</li><li>\u652F\u6301\u57FA\u4E8ESolr\u8FDB\u884C\u641C\u7D22\u7684\u5E94\u7528\uFF0C\u5E76\u63D0\u4F9B\u53EF\u89C6\u5316\u7684\u6570\u636E\u89C6\u56FE\uFF0C\u4EE5\u53CA\u4EEA\u8868\u677F\uFF08Dashboard\uFF09</li><li>\u652F\u6301\u57FA\u4E8EImpala\u7684\u5E94\u7528\u8FDB\u884C\u4EA4\u4E92\u5F0F\u67E5\u8BE2</li><li>\u652F\u6301Spark\u7F16\u8F91\u5668\u548C\u4EEA\u8868\u677F\uFF08Dashboard\uFF09</li><li>\u652F\u6301Pig\u7F16\u8F91\u5668\uFF0C\u5E76\u80FD\u591F\u63D0\u4EA4\u811A\u672C\u4EFB\u52A1</li><li>\u652F\u6301Oozie\u7F16\u8F91\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EEA\u8868\u677F\u63D0\u4EA4\u548C\u76D1\u63A7Workflow\u3001Coordinator\u548CBundle</li><li>\u652F\u6301HBase\u6D4F\u89C8\u5668\uFF0C\u80FD\u591F\u53EF\u89C6\u5316\u6570\u636E\u3001\u67E5\u8BE2\u6570\u636E\u3001\u4FEE\u6539HBase\u8868</li><li>\u652F\u6301Metastore\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u8BBF\u95EEHive\u7684\u5143\u6570\u636E\uFF0C\u4EE5\u53CAHCatalog</li><li>\u652F\u6301Job\u6D4F\u89C8\u5668\uFF0C\u80FD\u591F\u8BBF\u95EEMapReduce Job\uFF08MR1/MR2-YARN\uFF09</li><li>\u652F\u6301Job\u8BBE\u8BA1\u5668\uFF0C\u80FD\u591F\u521B\u5EFAMapReduce/Streaming/Java Job</li><li>\u652F\u6301Sqoop 2\u7F16\u8F91\u5668\u548C\u4EEA\u8868\u677F\uFF08Dashboard\uFF09</li><li>\u652F\u6301ZooKeeper\u6D4F\u89C8\u5668\u548C\u7F16\u8F91\u5668</li><li>\u652F\u6301MySql\u3001PostGresql\u3001Sqlite\u548COracle\u6570\u636E\u5E93\u67E5\u8BE2\u7F16\u8F91\u5668</li></ul><p>\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1AHue\u662F\u4E00\u4E2A\u53CB\u597D\u7684\u754C\u9762\u96C6\u6210\u6846\u67B6\uFF0C\u53EF\u4EE5\u96C6\u6210\u6211\u4EEC\u5404\u79CD\u5B66\u4E60\u8FC7\u7684\u4EE5\u53CA\u5C06\u8981\u5B66\u4E60\u7684\u6846\u67B6\uFF0C\u4E00\u4E2A\u754C\u9762\u5C31\u53EF\u4EE5\u505A\u5230\u67E5\u770B\u4EE5\u53CA\u6267\u884C\u6240\u6709\u7684\u6846\u67B6\u3002</p><p><img src="'+u+'" alt="Hue\u67B6\u6784\u56FE"></p><blockquote><p>\u7C7B\u4F3C\u7684\u4EA7\u54C1\u8FD8\u6709 Apache Zeppelin\u3002</p></blockquote><h2 id="\u7B2C\u4E8C\u90E8\u5206-hue\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u90E8\u5206-hue\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7B2C\u4E8C\u90E8\u5206 Hue\u7F16\u8BD1\u5B89\u88C5</h2>',11),k=s("Hue\u5B98\u65B9\u7F51\u7AD9\uFF1A"),d={href:"https://gethue.com/",target:"_blank",rel:"noopener noreferrer"},h=s("https://gethue.com/"),g=s("HUE\u5B98\u65B9\u7528\u6237\u624B\u518C\uFF1A"),v={href:"https://docs.gethue.com/",target:"_blank",rel:"noopener noreferrer"},_=s("https://docs.gethue.com/"),f=s("\u5B98\u65B9\u5B89\u88C5\u6587\u6863\uFF1A"),x={href:"https://docs.gethue.com/administrator/installation/install/",target:"_blank",rel:"noopener noreferrer"},y=s("https://docs.gethue.com/administrator/installation/install/"),H=s("HUE\u4E0B\u8F7D\u5730\u5740\uFF1A"),q={href:"https://docs.gethue.com/releases/",target:"_blank",rel:"noopener noreferrer"},E=s("https://docs.gethue.com/releases/"),S=p(`<p>Hue\u7684\u5B89\u88C5\u5E76\u4E0D\u662F\u90A3\u4E48\u7B80\u5355\uFF0C\u5B98\u65B9\u5E76\u6CA1\u6709\u7F16\u8BD1\u597D\u7684\u8F6F\u4EF6\u5305\uFF0C\u9700\u8981\u4ECEgithub\u4E0A\u4E0B\u8F7D\u6E90\u7801\u3001\u5B89\u88C5\u4F9D\u8D56\u3001\u7F16\u8BD1\u5B89\u88C5\u3002\u4EE5\u4E0B\u8BE6\u7EC6\u8BB2\u89E3Hue\u4E0B\u8F7D\u3001\u7F16\u8BD1\u3001\u5B89\u88C5\u7684\u64CD\u4F5C\u8FC7\u7A0B\u3002</p><p>\u5B89\u88C5Hue\u7684\u8282\u70B9\u4E0A\u6700\u597D\u6CA1\u6709\u5B89\u88C5\u8FC7MySQL\uFF0C\u5426\u5219\u53EF\u80FD\u6709\u7248\u672C\u51B2\u7A81\uFF0C\u8FD9\u91CC\u9009\u62E9\u5C06Hue\u5B89\u88C5\u5728 linux122 \u4E0A\u3002</p><h3 id="_2-1-\u4E0B\u8F7D\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E0B\u8F7D\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> 2.1.\u4E0B\u8F7D\u8F6F\u4EF6\u5305</h3><p>\u5230\u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D hue-release-4.3.0.zip \u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u5E76\u89E3\u538B\u7F29</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y <span class="token function">unzip</span>
<span class="token function">unzip</span> hue-release-4.3.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-2-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> 2.2.\u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9700\u8981Python\u652F\u6301(Python 2.7+/Python 3.5+)</span>
python --version
<span class="token comment"># \u5728 CentOS \u7CFB\u7EDF\u4E2D\u5B89\u88C5\u7F16\u8BD1 Hue \u9700\u8981\u7684\u4F9D\u8D56\u5E93</span>
yum <span class="token function">install</span> ant asciidoc cyrus-sasl-devel cyrus-sasl-gssapi cyrus-sasl-plain gcc gcc-c++ krb5-devel libffi-devel libxml2-devel libxslt-devel <span class="token function">make</span> mysql mysql-devel openldap-devel python-devel sqlite-devel gmp-devel
yum <span class="token function">install</span> -y <span class="token function">rsync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),z=s("\u5907\u6CE8\uFF1A\u4EE5\u4E0A\u4F9D\u8D56\u4EC5\u9002\u7528CentOS/RHEL 7.X\uFF0C\u5176\u4ED6\u60C5\u51B5\u8BF7\u53C2\u8003 "),M={href:"https://docs.gethue.com/administrator/installation/dependencies/",target:"_blank",rel:"noopener noreferrer"},D=s("https://docs.gethue.com/administrator/installation/dependencies/"),P=n("p",null,"\u5B89\u88C5Hue\u7684\u8282\u70B9\u4E0A\u6700\u597D\u6CA1\u6709\u5B89\u88C5\u8FC7MySQL\uFF0C\u5426\u5219\u53EF\u80FD\u6709\u7248\u672C\u51B2\u7A81",-1),R=n("p",null,"\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9700\u8981\u8054\u7F51\uFF0C\u7F51\u7EDC\u4E0D\u597D\u4F1A\u6709\u5404\u79CD\u5947\u602A\u7684\u95EE\u9898",-1),F=p(`<h3 id="_2-3-\u5B89\u88C5maven" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5B89\u88C5maven" aria-hidden="true">#</a> 2.3.\u5B89\u88C5Maven</h3><p>\u7F16\u8BD1 Hue \u8FD8\u9700\u8981 Maven \u73AF\u5883\uFF0C\u56E0\u6B64\u5728\u7F16\u8BD1\u524D\u9700\u8981\u5B89\u88C5 Maven\u3002</p><p>\u4E0B\u8F7D apache-maven-3.6.3-bin.tar.gz \u4E0A\u4F20\u865A\u62DF\u673A\u89E3\u538B\u7F29\uFF0C\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> zxvf apache-maven-3.6.3-bin.tar.gz
<span class="token comment"># \u79FB\u52A8\u6587\u4EF6</span>
<span class="token function">mv</span> apache-maven-3.6.3/ <span class="token punctuation">..</span>/servers/
<span class="token function">mv</span> apache-maven-3.6.3/ maven-3.6.3/

<span class="token comment"># \u4FEE\u6539\u73AF\u5883\u53D8\u91CF</span>
<span class="token function">vi</span> /etc/profile

<span class="token comment"># \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/opt/zmn/servers/maven-3.6.3
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$MAVEN_HOME</span>/bin

<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># \u9A8C\u8BC1\u5B89\u88C5</span>
mvn --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-4-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_2-4-\u7F16\u8BD1" aria-hidden="true">#</a> 2.4.\u7F16\u8BD1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 hue \u6E90\u7801\u76EE\u5F55\uFF0C\u8FDB\u884C\u7F16\u8BD1\u3002 \u4F7F\u7528 PREFIX \u6307\u5B9A\u5B89\u88C5 Hue \u7684\u8DEF\u5F84</span>
<span class="token builtin class-name">cd</span> /opt/zmn/software/hue-release-4.3.0
<span class="token comment"># \u4E0B\u9762\u8FD9\u4E24\u4E2A\u547D\u4EE4\u4E0D\u77E5\u9053\u7528\u54EA\u4E00\u4E2A\uFF0C\u5B9E\u6D4B\u8FC7\u7B2C\u4E8C\u4E2A</span>
<span class="token comment"># PREFIX=/opt/zmn/servers make install</span>
<span class="token comment"># \u8FD9\u4E2A\u547D\u4EE4\u4E0D\u884C\uFF01 \u4F1A\u5B89\u88C5\u5230 /usr/local/ \u76EE\u5F55\u4E0B</span>
<span class="token function">make</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/opt/zmn/servers <span class="token function">install</span>

<span class="token builtin class-name">cd</span> /opt/zmn/servers
<span class="token comment"># \u5982\u679C\u60F3\u628AHUE\u79FB\u52A8\u5230\u53E6\u5916\u4E00\u4E2A\u5730\u65B9\uFF0C\u7531\u4E8EHUE\u4F7F\u7528\u4E86Python\u5305\u7684\u4E00\u4E9B\u7EDD\u5BF9\u8DEF\u5F84,\u79FB\u52A8\u4E4B\u540E\u5219\u5FC5\u987B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token comment"># \u8FD9\u91CC\u4E0D\u8981\u6267\u884C</span>
<span class="token function">rm</span> app.reg
<span class="token function">rm</span> -r build
<span class="token function">make</span> apps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u5907\u6CE8\uFF1A\u8FD9\u4E00\u6B65\u6301\u7EED\u7684\u65F6\u95F4\u6BD4\u8F83\u957F\uFF0C\u8FD8\u4F1A\u4ECE\u7F51\u4E0A\u4E0B\u8F7D jar\uFF1B\u9700\u8981\u8054\u7F51</p></blockquote><h3 id="_2-5-\u4FEE\u6539-hadoop-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-5-\u4FEE\u6539-hadoop-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2.5.\u4FEE\u6539 Hadoop \u914D\u7F6E\u6587\u4EF6</h3><blockquote><p>\u5148\u505C\u6B62 HDFS \u670D\u52A1\uFF1Astop-dfs.sh</p></blockquote><p>\u5728 <code>hdfs-site.xml</code> \u4E2D\u589E\u52A0\u914D\u7F6E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- HUE --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.webhdfs.enabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.permissions.enabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728 core-site.xml \u4E2D\u589E\u52A0\u914D\u7F6E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- HUE --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.hue.hosts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.hue.groups<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.hdfs.hosts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.hdfs.groups<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5728 <code>httpfs-site.xml</code> \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- HUE --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>httpfs.proxyuser.hue.hosts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>httpfs.proxyuser.hue.groups<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u5907\u6CE8\uFF1A\u4FEE\u6539\u5B8CHDFS\u76F8\u5173\u914D\u7F6E\u540E\uFF0C\u9700\u8981\u628A\u914D\u7F6Escp\u7ED9\u96C6\u7FA4\u4E2D\u6BCF\u53F0\u673A\u5668\uFF0C\u91CD\u542Fhdfs\u670D\u52A1\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> core-site.xml linux122:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> core-site.xml linux123:<span class="token environment constant">$PWD</span>

<span class="token function">scp</span> hdfs-site.xml linux122:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> hdfs-site.xml linux123:<span class="token environment constant">$PWD</span>

<span class="token function">scp</span> httpfs-site.xml linux122:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> httpfs-site.xml linux123:<span class="token environment constant">$PWD</span>

<span class="token comment"># \u91CD\u542F HDFS</span>
start-dfs.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-6-hue\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-6-hue\u914D\u7F6E" aria-hidden="true">#</a> 2.6.Hue\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 Hue \u5B89\u88C5\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /opt/zmn/servers/hue
<span class="token comment"># \u8FDB\u5165\u914D\u7F6E\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> desktop/conf
<span class="token comment"># \u590D\u5236\u4E00\u4EFDHUE\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u4FEE\u6539\u590D\u5236\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">cp</span> pseudo-distributed.ini.tmpl pseudo-distributed.ini
<span class="token function">vi</span> pseudo-distributed.ini
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># [desktop]
http_host=linux122
http_port=8000

is_hue_4=true

time_zone=Asia/Shanghai

dev=true

server_user=hue
server_group=hue

default_user=hue

# 211\u884C\u5DE6\u53F3\u3002\u7981\u7528solr\uFF0C\u89C4\u907F\u62A5\u9519
app_blacklist=search

# [[database]]\u3002Hue\u9ED8\u8BA4\u4F7F\u7528SQLite\u6570\u636E\u5E93\u8BB0\u5F55\u76F8\u5173\u5143\u6570\u636E\uFF0C\u66FF\u6362\u4E3Amysql [631\u884C\u5DE6\u53F3]
engine=mysql
host=linux123
port=3306
user=hive
password=12345678
name=hue

# 1003\u884C\u5DE6\u53F3\uFF0CHadoop\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84
hadoop_conf_dir=/opt/zmn/servers/hadoop-2.9.2/etc/hadoop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728mysql\u4E2D\u521B\u5EFA\u6570\u636E\u5E93hue\uFF0C\u7528\u6765\u5B58\u653E\u5143\u6570\u636E (linux123)</span>
mysql -u hive -p <span class="token number">12345678</span>

mysql<span class="token operator">&gt;</span> create database hue<span class="token punctuation">;</span>

<span class="token comment"># \u521D\u59CB\u5316\u6570\u636E\u5E93</span>
<span class="token builtin class-name">cd</span> /opt/zmn/servers/hue/build/env/bin

./hue syncdb
./hue migrate
<span class="token comment"># \u68C0\u67E5\u6570\u636E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>2.7.\u542F\u52A8 Hue \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u589E\u52A0 hue \u7528\u6237\u548C\u7528\u6237\u7EC4</span>
<span class="token function">groupadd</span> hue
<span class="token function">useradd</span> -g hue hue

<span class="token comment"># \u542F\u52A8HUE\u670D\u52A1</span>
<span class="token builtin class-name">cd</span> /opt/zmn/servers/hue/build/env/bin

./supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,24),U=s("\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\uFF1A"),A={href:"http://linux122:8000",target:"_blank",rel:"noopener noreferrer"},w=s("http://linux122:8000"),L=s("\uFF0C\u53EF\u4EE5\u770B\u89C1\u4EE5\u4E0B\u753B\u9762\uFF0C\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u3002"),W=p('<p><img src="'+i+`" alt="Hue\u767B\u5F55\u9875\u9762"></p><blockquote><p>\u7B2C\u4E00\u6B21\u8BBF\u95EE\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BBE\u7F6E\u8D85\u7EA7\u7BA1\u7406\u5458\u7528\u6237\u548C\u5BC6\u7801\u3002\u8BB0\u4F4F\u5B83(hue/123456)</p></blockquote><h2 id="\u7B2C\u4E09\u90E8\u5206-hue\u6574\u5408hadoop\u3001hive" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u90E8\u5206-hue\u6574\u5408hadoop\u3001hive" aria-hidden="true">#</a> \u7B2C\u4E09\u90E8\u5206 Hue\u6574\u5408Hadoop\u3001Hive</h2><blockquote><p>\u4FEE\u6539\u53C2\u6570\u6587\u4EF6 <code>/opt/zmn/servers/hue/desktop/conf/pseudo-distributed.ini</code></p></blockquote><h3 id="_3-1-\u96C6\u6210hdfs\u3001yarn" tabindex="-1"><a class="header-anchor" href="#_3-1-\u96C6\u6210hdfs\u3001yarn" aria-hidden="true">#</a> 3.1.\u96C6\u6210HDFS\u3001YARN</h3><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># 211 \u884C\u3002 \u6CA1\u6709\u5B89\u88C5 Solr\uFF0C\u7981\u7528\uFF0C\u5426\u5219\u4E00\u76F4\u62A5\u9519</span>
<span class="token key attr-name">app_blacklist</span><span class="token punctuation">=</span><span class="token value attr-value">search</span>

<span class="token comment"># [hadoop] -- [[hdfs_clusters]] -- [[[default]]]</span>
<span class="token comment"># \u6CE8\u610F\u7AEF\u53E3\u53F7\u3002\u4E0B\u9762\u8BED\u53E5\u53EA\u8981\u4E00\u4E2A</span>
<span class="token comment"># fs_defaultfs=hdfs://linux121:8020</span>
<span class="token key attr-name">fs_defaultfs</span><span class="token punctuation">=</span><span class="token value attr-value">hdfs://linux121:9000</span>

<span class="token key attr-name">webhdfs_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://linux121:50070/webhdfs/v1</span>

<span class="token comment"># 211 \u884C</span>
<span class="token key attr-name">hadoop_conf_dir</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/zmn/servers/hadoop-2.9.2/etc/hadoop</span>


<span class="token comment"># [hadoop] -- [[yarn_clusters]] -- [[[default]]]</span>
<span class="token key attr-name">resourcemanager_host</span><span class="token punctuation">=</span><span class="token value attr-value">linux123</span>

<span class="token key attr-name">resourcemanager_port</span><span class="token punctuation">=</span><span class="token value attr-value">8032</span>

<span class="token key attr-name">submit_to</span><span class="token punctuation">=</span><span class="token value attr-value">True</span>

<span class="token key attr-name">resourcemanager_api_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://linux123:8088</span>

<span class="token key attr-name">proxy_api_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://linux123:8088</span>

<span class="token key attr-name">history_server_api_url</span><span class="token punctuation">=</span><span class="token value attr-value">http://linux123:19888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_3-2-\u96C6\u6210hive" tabindex="-1"><a class="header-anchor" href="#_3-2-\u96C6\u6210hive" aria-hidden="true">#</a> 3.2.\u96C6\u6210Hive</h3><p>\u96C6\u6210Hive\u9700\u8981\u542F\u52A8 Hiveserver2 \u670D\u52A1\uFF0C\u5728linux123\u8282\u70B9\u4E0A\u542F\u52A8 Hiveserver2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># [beeswax]
hive_server_host=linux123

hive_server_port=10000

hive_conf_dir=/opt/zmn/servers/hive-2.3.7/conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-3-\u96C6\u6210mysql" tabindex="-1"><a class="header-anchor" href="#_3-3-\u96C6\u6210mysql" aria-hidden="true">#</a> 3.3.\u96C6\u6210MySQL</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># [librdbms] -- [[databases]] -- [[[mysql]]]\uFF1B1639\u884C
# \u6CE8\u610F\uFF1A1639\u884C\u539F\u6587\uFF1A ##[[mysql]] =&gt; [[mysql]]\uFF1B\u4E24\u4E2A##\u8981\u53BB\u6389!
[[[mysql]]]

nice_name=&quot;My SQL DB&quot;

name=hue

engine=mysql

host=linux123

port=3306

user=hive

password=12345678
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>\u5907\u6CE8\uFF1Aname\u662F\u6570\u636E\u5E93\u540D\uFF0C\u5373 database \u7684\u540D\u79F0</p></blockquote><h3 id="_3-4-\u91CD\u542Fhue\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-4-\u91CD\u542Fhue\u670D\u52A1" aria-hidden="true">#</a> 3.4.\u91CD\u542FHue\u670D\u52A1</h3>`,13);function B(N,$){const a=l("ExternalLinkIcon");return c(),o(r,null,[m,n("ul",null,[n("li",null,[k,n("a",d,[h,e(a)])]),n("li",null,[g,n("a",v,[_,e(a)])]),n("li",null,[f,n("a",x,[y,e(a)])]),n("li",null,[H,n("a",q,[E,e(a)])])]),S,n("blockquote",null,[n("p",null,[z,n("a",M,[D,e(a)])]),P,R]),F,n("p",null,[U,n("a",A,[w,e(a)]),L]),W],64)}var I=t(b,[["render",B],["__file","index.html.vue"]]);export{I as default};
