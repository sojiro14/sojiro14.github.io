import{r as o,o as r,c as p,a,b as s,F as t,d as n,e as c}from"./app.1c49a48c.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=n("Java\u3092\u4F7F\u3046\u305F\u3081\u306B"),h={href:"http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22",target:"_blank",rel:"noopener noreferrer"},u=n("\u6539\u8A022\u7248 \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8Java"),m=n("\u3092\u8AAD\u3093\u3060\u30E1\u30E2"),k=c(`<h2 id="java-\u306E\u6587\u6CD5\u3068\u6587" tabindex="-1"><a class="header-anchor" href="#java-\u306E\u6587\u6CD5\u3068\u6587" aria-hidden="true">#</a> Java \u306E\u6587\u6CD5\u3068\u6587</h2><p>Java \u3067\u6271\u3046\u6587\u306F\u4EE5\u4E0B\u306E4\u7A2E\u985E</p><ul><li>\u5236\u5FA1\u6587</li><li>\u30D6\u30ED\u30C3\u30AF\u6587</li><li>\u5BA3\u8A00\u6587</li><li>\u5F0F\u6587</li></ul><p>\u5BA3\u8A00\u6587\u3068\u5F0F\u6587\u306F\u7D42\u7AEF\u306B\u30BB\u30DF\u30B3\u30ED\u30F3\u5FC5\u8981</p><h2 id="java-\u306E\u6F14\u7B97\u5B50\u3068\u5F0F" tabindex="-1"><a class="header-anchor" href="#java-\u306E\u6F14\u7B97\u5B50\u3068\u5F0F" aria-hidden="true">#</a> Java \u306E\u6F14\u7B97\u5B50\u3068\u5F0F</h2><ul><li><code>&amp;&amp;</code> \u3001 <code>||</code> \u3001 <code>?</code> <code>:</code> \uFF08\u4E09\u9805\u6F14\u7B97\u5B50\uFF09\u3092\u9664\u304F\u3059\u3079\u3066\u306E\u6F14\u7B97\u5B50\u306F\u6F14\u7B97\u524D\u306B\u3059\u3079\u3066\u306E\u30AA\u30DA\u30E9\u30F3\u30C9\u3092\u8A55\u4FA1\u3059\u308B</li><li>\u30AA\u30DA\u30E9\u30F3\u30C9\u306F\u5DE6\u306E\u3082\u306E\u304B\u3089\u8A55\u4FA1\u3059\u308B</li><li>\u30E1\u30BD\u30C3\u30C9\u53CA\u3073\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u547C\u3073\u51FA\u3057\u5F0F\u3067\u306F\u5F15\u6570\u3092\u5DE6\u304B\u3089\u8A55\u4FA1\u3059\u308B</li></ul><h2 id="\u6570\u5024\u306E\u6F14\u7B97" tabindex="-1"><a class="header-anchor" href="#\u6570\u5024\u306E\u6F14\u7B97" aria-hidden="true">#</a> \u6570\u5024\u306E\u6F14\u7B97</h2><h3 id="\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8-\u30C6\u3099\u30AF\u30EA\u30E1\u30F3\u30C8\u6F14\u7B97\u306E\u524D\u7F6E\u5F8C\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8-\u30C6\u3099\u30AF\u30EA\u30E1\u30F3\u30C8\u6F14\u7B97\u306E\u524D\u7F6E\u5F8C\u7F6E" aria-hidden="true">#</a> \u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8/\u30C7\u30AF\u30EA\u30E1\u30F3\u30C8\u6F14\u7B97\u306E\u524D\u7F6E\u5F8C\u7F6E</h3><p>\u524D\u7F6E\u6F14\u7B97\u306F\u8A55\u4FA1\u5024\u304C\u6F14\u7B97\u5F8C\u306E\u5024\u3001\u5F8C\u7F6E\u6F14\u7B97\u306F\u8A55\u4FA1\u5024\u304C\u6F14\u7B97\u524D\u306E\u5024</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token operator">++</span>n<span class="token punctuation">;</span>
<span class="token comment">// m: 11, n: 11</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> m <span class="token operator">=</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">// m: 10, n: 11</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u30EB\u30FC\u30D7\u304C\u56DE\u308B\u56DE\u6570\u306F 9 \u56DE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u8AD6\u7406\u6F14\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8AD6\u7406\u6F14\u7B97" aria-hidden="true">#</a> \u8AD6\u7406\u6F14\u7B97</h2><h3 id="\u9045\u5EF6\u8A55\u4FA1" tabindex="-1"><a class="header-anchor" href="#\u9045\u5EF6\u8A55\u4FA1" aria-hidden="true">#</a> \u9045\u5EF6\u8A55\u4FA1</h3><p><code>&amp;&amp;</code> \u3001<code>||</code> \u306F\u9045\u5EF6\u8A55\u4FA1\u3092\u884C\u3046</p><ul><li><code>&amp;&amp;</code> \u306F\u5DE6\u8FBA\u306E\u8A55\u4FA1\u5024\u304C\u507D\u3067\u3042\u308C\u3070\u53F3\u8FBA\u306E\u8A55\u4FA1\u5024\u306B\u95A2\u4FC2\u306A\u304F\u7D50\u679C\u304C\u507D\u306B\u306A\u308B\u305F\u3081\u53F3\u8FBA\u3092\u8A55\u4FA1\u3057\u306A\u3044</li><li><code>||</code> \u306F\u5DE6\u8FBA\u306E\u8A55\u4FA1\u5024\u304C\u771F\u3067\u3042\u308C\u3070\u53F3\u8FBA\u306E\u8A55\u4FA1\u5024\u306B\u95A2\u4FC2\u306A\u304F\u7D50\u679C\u304C\u771F\u306B\u306A\u308B\u305F\u3081\u53F3\u8FBA\u306E\u8A55\u4FA1\u3092\u3057\u306A\u3044</li></ul><p>\u3053\u308C\u3089\u306E\u6F14\u7B97\u5B50\u306E\u53F3\u8FBA\u306B\u526F\u4F5C\u7528\u306E\u3042\u308B\u5F0F\u3092\u66F8\u304F\u3068\u3001\u5DE6\u8FBA\u306E\u8A55\u4FA1\u5024\u306B\u3088\u308A\u5B9F\u884C\u3055\u308B\u304B\u5426\u304B\u304C\u5909\u308F\u3063\u3066\u304F\u308B\u306E\u3067\u6CE8\u610F</p><h2 id="\u305D\u306E\u4ED6\u306E\u6F14\u7B97" tabindex="-1"><a class="header-anchor" href="#\u305D\u306E\u4ED6\u306E\u6F14\u7B97" aria-hidden="true">#</a> \u305D\u306E\u4ED6\u306E\u6F14\u7B97</h2><h3 id="instanceof-\u6F14\u7B97\u5B50" tabindex="-1"><a class="header-anchor" href="#instanceof-\u6F14\u7B97\u5B50" aria-hidden="true">#</a> instanceof \u6F14\u7B97\u5B50</h3><p>\u30C0\u30A6\u30F3\u30AD\u30E3\u30B9\u30C8\u3092\u5B89\u5168\u306B\u884C\u3048\u308B\u304B\u3092\u4E8B\u524D\u306B\u30C1\u30A7\u30C3\u30AF\u3059\u308B</p><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,20),b={href:"http://www.amazon.co.jp/gp/product/4774166855/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166855&linkCode=as2&tag=sojiro14-22",target:"_blank",rel:"noopener noreferrer"},_=n("\u6539\u8A022\u7248 \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8Java");function v(f,x){const e=o("ExternalLinkIcon");return r(),p(t,null,[a("p",null,[d,a("a",h,[u,s(e)]),m]),k,a("p",null,[a("a",b,[_,s(e)])])],64)}var w=l(i,[["render",v]]);export{w as default};
