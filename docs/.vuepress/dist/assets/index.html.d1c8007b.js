const n={key:"v-2b745b36",path:"/blog/2014/12/30/installing-mongodb-on-linux-aws/",title:"AWS\u306ELinux\u306BMongoDB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",lang:"ja-JP",frontmatter:{layout:"Layout",title:"AWS\u306ELinux\u306BMongoDB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",date:"2014-12-30 13:32:15+0900",comments:!0,categories:["MongoDB","AWS","Linux"]},excerpt:`<p>AWS\u3067\u501F\u308A\u305F\u30B5\u30FC\u30D0\u30FC\u306BmongoDB\u304C\u5165\u3063\u3066\u3044\u306A\u304B\u3063\u305F\u306E\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u624B\u9806</p>
<h2 id="yum\u306E\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#yum\u306E\u8A2D\u5B9A" aria-hidden="true">#</a> YUM\u306E\u8A2D\u5B9A</h2>
<p>\u30D1\u30C3\u30B1\u30FC\u30B8\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u3067\u3042\u308BYUM\u306BmongoDB\u7528\u306E\u8A2D\u5B9A\u3092\u8FFD\u52A0\u3059\u308B</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/yum.repos.d/mongodb.repo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>mongodb<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>MongoDB Repository
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u3053\u308C\u3067YUM\u306BmongoDB\u306E\u30EA\u30DD\u30B8\u30C8\u30EA\u304C\u8FFD\u52A0\u3055\u308C\u308B</p>
`,headers:[{level:2,title:"YUM\u306E\u8A2D\u5B9A",slug:"yum\u306E\u8A2D\u5B9A",children:[]},{level:2,title:"mongoDB\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",slug:"mongodb\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:[]},{level:2,title:"\u78BA\u8A8D",slug:"\u78BA\u8A8D",children:[]},{level:2,title:"\u53C2\u7167",slug:"\u53C2\u7167",children:[]}],git:{updatedTime:1643091459e3,contributors:[{name:"sojiro14",email:"taishi.hiraga+github@gmail.com",commits:1}]},filePathRelative:"blog/2014/12/30/installing-mongodb-on-linux-aws/README.md"};export{n as data};
