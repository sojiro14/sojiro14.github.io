import{r as l,o as r,c as o,a as n,b as e,F as t,e as p,d as s}from"./app.1c49a48c.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=p(`<p>Perl \u3092\u30D0\u30FC\u30B8\u30E7\u30F3\u3054\u3068\u3001\u3042\u308B\u3044\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3054\u3068\u306B\u7BA1\u7406\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u3067\u3042\u308B plenv \u306E\u5C0E\u5165\u624B\u9806\u30E1\u30E2</p><h2 id="plenv-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#plenv-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" aria-hidden="true">#</a> plenv \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</h2><h3 id="homebrew-\u306E-update" tabindex="-1"><a class="header-anchor" href="#homebrew-\u306E-update" aria-hidden="true">#</a> homebrew \u306E update</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew update
Updated Homebrew from c0fae05 to bfe20af.
No changes to formulae.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),u=s("\u5148\u307B\u3069 "),m={href:"http://blog.sojiro.me/blog/2016/03/05/management-ruby-versions-by-rbenv/",target:"_blank",rel:"noopener noreferrer"},d=s("rbenv \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u624B\u9806"),h=s(" \u3067\u540C\u3058\u3053\u3068\u3092\u3084\u3063\u305F\u3070\u304B\u308A\u306A\u306E\u3067\u66F4\u65B0\u306A\u3057"),k=n("h3",{id:"plenv-\u3068-perl-build-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plenv-\u3068-perl-build-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","aria-hidden":"true"},"#"),s(" plenv \u3068 perl-build \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB")],-1),v=s("\u3053\u308C\u3082 "),g={href:"http://blog.sojiro.me/blog/2016/03/05/management-ruby-versions-by-rbenv/",target:"_blank",rel:"noopener noreferrer"},_=s("\u3069\u3053\u304B"),f=s(" \u3067\u898B\u305F\u3088\u3046\u306A\u624B\u9806"),x=p(`<p><code>perl-build</code> \u306F <code>plenv</code> \u306E\u30D7\u30E9\u30B0\u30A4\u30F3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> plenv perl-build
<span class="token operator">==</span><span class="token operator">&gt;</span> Downloading https://github.com/tokuhirom/plenv/archive/2.2.0.tar.gz
<span class="token operator">==</span><span class="token operator">&gt;</span> Downloading from https://codeload.github.com/tokuhirom/plenv/tar.gz/2.2.0
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="plenv-init" tabindex="-1"><a class="header-anchor" href="#plenv-init" aria-hidden="true">#</a> plenv init</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;eval &quot;$(plenv init -)&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>plenv init -</code> \u3067\u3084\u3063\u3066\u3044\u308B\u3053\u3068\u306F\u4EE5\u4E0B\u306E\u901A\u308A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv init -
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/Your/Home/Directory/.plenv/shims:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PLENV_SHELL</span><span class="token operator">=</span>bash
<span class="token builtin class-name">source</span> <span class="token string">&#39;/usr/local/Cellar/plenv/2.2.0/libexec/../completions/plenv.bash&#39;</span>

<span class="token function-name function">plenv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> <span class="token builtin class-name">command</span>

  <span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">shift</span>
  <span class="token keyword">fi</span>

  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$command</span>&quot;</span> <span class="token keyword">in</span>
  rehash<span class="token operator">|</span>shell<span class="token punctuation">)</span>
    <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span>plenv <span class="token string">&quot;sh-<span class="token variable">$command</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">\`</span></span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    <span class="token builtin class-name">command</span> plenv <span class="token string">&quot;<span class="token variable">$command</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="perl-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1"><a class="header-anchor" href="#perl-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a> perl \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</h2><p>\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u308B perl \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv <span class="token function">install</span> -l
Available versions:
 <span class="token number">5.6</span>.0
 <span class="token number">5.6</span>.1-TRIAL1
 <span class="token number">5.6</span>.1-TRIAL2
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6700\u65B0\u306E\u5B89\u5B9A\u7248\u3067\u3042\u308B\u30D0\u30FC\u30B8\u30E7\u30F3 <code>5.22.1</code> \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv <span class="token function">install</span> <span class="token number">5.22</span>.1
Installing <span class="token number">5.22</span>.1 as <span class="token number">5.22</span>.1
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv versions
* system <span class="token punctuation">(</span>set by /My/Home/Directory/.plenv/version<span class="token punctuation">)</span>
  <span class="token number">5.22</span>.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F7F\u7528\u3059\u308B-perl-\u3092\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u3059\u308B-perl-\u3092\u8A2D\u5B9A" aria-hidden="true">#</a> \u4F7F\u7528\u3059\u308B perl \u3092\u8A2D\u5B9A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv global <span class="token number">5.22</span>.1
$ plenv versions
  system
* <span class="token number">5.22</span>.1 <span class="token punctuation">(</span>set by /My/Home/Directory/.plenv/version<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="perl-\u306B-cpanm-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#perl-\u306B-cpanm-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" aria-hidden="true">#</a> perl \u306B cpanm \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</h2><p>\u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B perl \u306B <code>cpanm</code> \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ plenv install-cpanm
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>   <span class="token number">314</span>    <span class="token number">0</span>   <span class="token number">314</span>    <span class="token number">0</span>     <span class="token number">0</span>   <span class="token number">2078</span>      <span class="token number">0</span> --:--:-- --:--:-- --:--:--  <span class="token number">2079</span>
<span class="token number">100</span>  296k  <span class="token number">100</span>  296k    <span class="token number">0</span>     <span class="token number">0</span>   367k      <span class="token number">0</span> --:--:-- --:--:-- --:--:-- 2135k
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>cpanm</code> \u306E\u30D1\u30B9\u304C\u5909\u308F\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">which</span> cpanm
/My/Home/Directory/.plenv/shims/cpanm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,21),y={href:"https://github.com/tokuhirom/plenv",target:"_blank",rel:"noopener noreferrer"},$=s("plenv");function q(w,T){const a=l("ExternalLinkIcon");return r(),o(t,null,[b,n("p",null,[u,n("a",m,[d,e(a)]),h]),k,n("p",null,[v,n("a",g,[_,e(a)]),f]),x,n("ul",null,[n("li",null,[n("a",y,[$,e(a)])])])],64)}var D=c(i,[["render",q]]);export{D as default};
