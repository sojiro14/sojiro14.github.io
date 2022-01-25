import{r as n,o as e,c as p,a as s,b as o,F as r,e as t,d as c}from"./app.1c49a48c.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=t(`<p>rails\u306B\u306F <code>scaffold</code> \u3068\u3044\u3046\u5358\u7D14\u306A\u30EA\u30BD\u30FC\u30B9\u3092\u4E00\u6C17\u306B\u751F\u6210\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u304C\u5B58\u5728\u3059\u308B\u3002 \u4ECA\u56DE\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u307F\u308B\u3002</p><h2 id="users\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#users\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210" aria-hidden="true">#</a> Users\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210</h2><p>\u4ECA\u56DE\u306F <code>scaffold</code> \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30EA\u30BD\u30FC\u30B9\u3092\u751F\u6210\u3059\u308B\u3002 \u3053\u3053\u3067\u306F\u4EE5\u4E0B\u306E\u8981\u7D20\u3092\u3082\u3064Users\u30EA\u30BD\u30FC\u30B9\u3092\u751F\u6210\u3059\u308B\u3002</p><ul><li>id int</li><li>name string</li><li>email string</li></ul><p><code>rails generate</code> \u30B9\u30AF\u30EA\u30D7\u30C8\u306B <code>scaffold</code> \u30B3\u30DE\u30F3\u30C9\u3092\u6307\u5B9A\u3057\u3001\u30EA\u30BD\u30FC\u30B9\u306E\u5358\u6570\u7CFB\u3068\u8981\u7D20\u306E\u60C5\u5831\u3092\u6E21\u3059</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rails generate scaffold User name:string email:string
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>id\u8981\u7D20\u306FRails\u304C\u4E3B\u30AD\u30FC\u3068\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8A2D\u5B9A\u3059\u308B</p><h2 id="db\u306Busers\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D5\u309A\u3092\u884C\u3046" tabindex="-1"><a class="header-anchor" href="#db\u306Busers\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D5\u309A\u3092\u884C\u3046" aria-hidden="true">#</a> DB\u306Busers\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3092\u884C\u3046</h2><p><code>rake</code> \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066DB\u3092migrate\uFF08\u66F4\u65B0\uFF09\u3059\u308B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ bundle <span class="token builtin class-name">exec</span> rake db:migrate
<span class="token operator">==</span> <span class="token number">20141111170736</span> CreateUsers: migrating <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
-- create_table<span class="token punctuation">(</span>:users<span class="token punctuation">)</span>
   -<span class="token operator">&gt;</span> <span class="token number">0</span>.0012s
<span class="token operator">==</span> <span class="token number">20141111170736</span> CreateUsers: migrated <span class="token punctuation">(</span><span class="token number">0</span>.0014s<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u51FA\u529B\u304B\u3089 <code>users</code> \u30C6\u30FC\u30D6\u30EB\u304C\u4F5C\u3089\u308C\u305F\u3053\u3068\u304C\u308F\u304B\u308B</p><h2 id="\u30D5\u3099\u30E9\u30A6\u30B5\u3099\u3066\u3099\u78BA\u8A8D" tabindex="-1"><a class="header-anchor" href="#\u30D5\u3099\u30E9\u30A6\u30B5\u3099\u3066\u3099\u78BA\u8A8D" aria-hidden="true">#</a> \u30D6\u30E9\u30A6\u30B6\u3067\u78BA\u8A8D</h2><p><code>rails server</code> \u30B3\u30DE\u30F3\u30C9\u306E\u77ED\u7E2E\u7248\u3067\u3042\u308B <code>rails s</code> \u3092\u4F7F\u3063\u30663000\u756Aport\u306B\u30A2\u30D7\u30EA\u3092\u7ACB\u3061\u4E0A\u3052\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rails s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>http://xx.xxx.xxx.xxx:3000</p><p>\u306B\u30D6\u30E9\u30A6\u30B6\u3067\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3068 <code>#1 rails\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7</code> \u3067\u898B\u305F\u30C7\u30D5\u30A9\u30EB\u30C8\u306ERails\u30DA\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u308B</p><p>\u6B21\u306B\u4EE5\u4E0B\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u307F\u308B</p><p>http://xx.xxx.xxx.xxx:3000/users</p><p>\u3059\u308B\u3068\u65E2\u306BUser\u4E00\u89A7\u30DA\u30FC\u30B8\u304C\u3067\u304D\u3042\u304C\u3063\u3066\u3044\u308B\u306E\u304C\u308F\u304B\u308B\u3002\u3053\u306E\u4ED6\u306B</p><ul><li>\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u4F5C\u6210\u3059\u308B\u30DA\u30FC\u30B8</li><li>\u7279\u5B9A\u306Eid\u306E\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u8868\u793A\u3059\u308B\u30DA\u30FC\u30B8</li><li>\u7279\u5B9A\u306Eid\u306E\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u7DE8\u96C6\u3059\u308B\u30DA\u30FC\u30B8</li></ul><p>\u304C\u4F5C\u3089\u308C\u3066\u3044\u308B\u3002</p><h2 id="microposts\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#microposts\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210" aria-hidden="true">#</a> Microposts\u30EA\u30BD\u30FC\u30B9\u306E\u751F\u6210</h2><p>Users\u30EA\u30BD\u30FC\u30B9\u3068\u540C\u69D8\u306B <code>scaffold</code> \u30B3\u30DE\u30F3\u30C9\u3068 <code>rake</code> \u306E <code>migrate</code> \u30BF\u30B9\u30AF\u3067\u751F\u6210\u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rails generate scaffold Micropost content:string user_id:integer
$ bundle <span class="token builtin class-name">exec</span> rake db:migrate
<span class="token operator">==</span> <span class="token number">20141112174234</span> CreateMicroposts: migrating <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
-- create_table<span class="token punctuation">(</span>:microposts<span class="token punctuation">)</span>
   -<span class="token operator">&gt;</span> <span class="token number">0</span>.0029s
<span class="token operator">==</span> <span class="token number">20141112174234</span> CreateMicroposts: migrated <span class="token punctuation">(</span><span class="token number">0</span>.0031s<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>config/routes.rb</code> \u306Bmicroposts\u30EA\u30BD\u30FC\u30B9\u306E\u8A2D\u5B9A\u304C\u8FFD\u52A0\u3055\u308C\u305F</p><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,26),k={href:"http://railstutorial.jp",target:"_blank",rel:"noopener noreferrer"},u=c("Ruby on Rails \u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB");function b(m,h){const a=n("ExternalLinkIcon");return e(),p(r,null,[d,s("p",null,[s("a",k,[u,o(a)])])],64)}var f=l(i,[["render",b]]);export{f as default};
