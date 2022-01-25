const n={key:"v-0d588b0e",path:"/blog/2014/12/01/screen-introduction/",title:"screen\u3092\u4F7F\u3063\u3066\u307F\u308B",lang:"ja-JP",frontmatter:{layout:"Layout",title:"screen\u3092\u4F7F\u3063\u3066\u307F\u308B",date:"2014-12-01 17:15:25 +0900",comments:!0,categories:["screen","Shell"]},excerpt:`<p>\u30C7\u30BF\u30C3\u30C1/\u30A2\u30BF\u30C3\u30C1\u3068\u3044\u3046\u5F37\u529B\u306A\u6A5F\u80FD\u3092\u3082\u3063\u305F\u4EEE\u60F3\u7AEF\u672B\u7BA1\u7406\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3042\u308Bscreen\u3092\u4F7F\u3063\u3066\u307F\u305F\u3002</p>
<h2 id="screen\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#screen\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B" aria-hidden="true">#</a> screen\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B</h2>
<p>screen\u306E\u64CD\u4F5C\u306B\u4F7F\u3046\u307B\u3068\u3093\u3069\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u3092\u7528\u3044\u308B\u3002
\u3053\u306E\u30D7\u30EC\u30D5\u30A3\u30AF\u30B9\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F <code>ctrl + a</code> \u306E\u305F\u3081\u3001Shell\u306E\u884C\u982D\u79FB\u52D5\u3068\u88AB\u3063\u3066\u3057\u307E\u3046\u306E\u3067\u8A2D\u5B9A\u3092\u7DE8\u96C6\u3059\u308B\u3002</p>
<p>\u3064\u3044\u3067\u306B\u8272\u3005\u7DE8\u96C6\u3057\u3066\u307F\u305F\u3002\uFF08 <code>ctrl +</code> \u3092 <code>^</code> \u3067\u8868\u3059\uFF09</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>escape ^j^j
startup_message off
defkanji utf-8
defencoding utf-8
encoding utf-8 utf-8
caption always <span class="token string">"%{= wb} %-w%{=bu dr}%n %t%{-}%+w %= %{=b wk} [%l] %{=b wb}%y/%m/%d(%D) %{=b wm}%c"</span>
autodetach on
bell_msg <span class="token string">"^G"</span>
defscrollback <span class="token number">10000</span>
vbell off
<span class="token builtin class-name">bind</span> n <span class="token function">screen</span>
<span class="token builtin class-name">bind</span> h prev
<span class="token builtin class-name">bind</span> j next
<span class="token builtin class-name">bind</span> l windowlist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,headers:[{level:2,title:"screen\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B",slug:"screen\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B",children:[]},{level:2,title:"screen\u3092\u7ACB\u3061\u4E0A\u3052\u3066\u307F\u308B",slug:"screen\u3092\u7ACB\u3061\u4E0A\u3051\u3099\u3066\u307F\u308B",children:[]},{level:2,title:"\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u5206\u5272",slug:"\u30A6\u30A3\u30F3\u30C8\u3099\u30A6\u306E\u5206\u5272",children:[]},{level:2,title:"\u30C7\u30BF\u30C3\u30C1\u3068\u30A2\u30BF\u30C3\u30C1",slug:"\u30C6\u3099\u30BF\u30C3\u30C1\u3068\u30A2\u30BF\u30C3\u30C1",children:[]},{level:2,title:"\u53C2\u7167",slug:"\u53C2\u7167",children:[]}],git:{updatedTime:1643091459e3,contributors:[{name:"sojiro14",email:"taishi.hiraga+github@gmail.com",commits:1}]},filePathRelative:"blog/2014/12/01/screen-introduction/README.md"};export{n as data};
