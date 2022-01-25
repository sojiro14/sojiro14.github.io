import{r as p,o,c,a as s,b as e,F as t,d as n,e as l}from"./app.1c49a48c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u={href:"http://blog.sojiro.me/blog/2015/11/01/the-first-step-of-chef/",target:"_blank",rel:"noopener noreferrer"},d=n("\u524D\u56DE"),b=n(" \u5BFE\u8C61\u30B5\u30FC\u30D0\u3067\u76F4\u63A5 Chef \u3092\u5B9F\u884C\u3057\u3066\u307F\u307E\u3057\u305F\u3002"),h=l(`<p>\u4ECA\u56DE\u306F\u624B\u5143\u304B\u3089\u30EA\u30E2\u30FC\u30C8\u306E\u30B5\u30FC\u30D0\u306B\u5BFE\u3057\u3066 Chef \u3092\u5B9F\u884C\u3059\u308B\u4ED5\u7D44\u307F\u3092\u8A66\u3057\u3066\u307F\u307E\u3059\u3002</p><h2 id="knife-solo-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1"><a class="header-anchor" href="#knife-solo-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a> knife-solo \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</h2><p>\u624B\u5143\u306E\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u3092\u30EA\u30E2\u30FC\u30C8\u306E\u30B5\u30FC\u30D0\u306B\u8EE2\u9001\u3057\u3066 <code>chef-solo</code> \u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u307E\u3067\u306E\u4E00\u9023\u306E\u4F5C\u696D\u3092\u5B9F\u884C\u3067\u304D\u308B <code>knife-solo</code> \u30B3\u30DE\u30F3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</p><p><code>knife-solo</code> \u30B3\u30DE\u30F3\u30C9\u306F gem \u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u308B\u3002\u624B\u5143\u306E Mac OS \u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> gem <span class="token function">install</span> knife-solo
<span class="token punctuation">..</span>.
Thanks <span class="token keyword">for</span> installing knife-solo<span class="token operator">!</span>
<span class="token punctuation">..</span>.
<span class="token number">36</span> gems installed
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="berkshelf-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1"><a class="header-anchor" href="#berkshelf-\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a> Berkshelf \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</h2><p>\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306E\u4F9D\u5B58\u95A2\u4FC2\u3092\u7BA1\u7406\u3059\u308B <code>Berkshelf</code> \u3068\u3044\u3046\u30C4\u30FC\u30EB\u3082\u3053\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3002\u3053\u308C\u306F <code>knife-solo</code> \u304C\u4ED6\u306E gem \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u72B6\u6CC1\u306B\u3088\u3063\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u5909\u308F\u308B\u305F\u3081</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> gem <span class="token function">install</span> berkshelf
<span class="token punctuation">..</span>.
<span class="token number">25</span> gems installed
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u30ED\u30FC\u30AB\u30EB\u306B\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u3092\u4F5C\u308B" tabindex="-1"><a class="header-anchor" href="#\u30ED\u30FC\u30AB\u30EB\u306B\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u3092\u4F5C\u308B" aria-hidden="true">#</a> \u30ED\u30FC\u30AB\u30EB\u306B\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u4F5C\u308B</h2><p>\u307E\u305A\u306F\u30ED\u30FC\u30AB\u30EB\u306B\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u4F5C\u308B</p><p>Vagrantfile \u304C\u3042\u308B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u4F5C\u6210\u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ knife solo init <span class="token builtin class-name">.</span>
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/rubygems/specification.rb:2007:in \`raise_if_conflicts&#39;: Unable to activate rspec-3.0.0, because rspec-core-3.4.0 conflicts with rspec-core <span class="token punctuation">(</span>~<span class="token operator">&gt;</span> <span class="token number">3.0</span>.0<span class="token punctuation">)</span>, rspec-expectations-3.4.0 conflicts with rspec-expectations <span class="token punctuation">(</span>~<span class="token operator">&gt;</span> <span class="token number">3.0</span>.0<span class="token punctuation">)</span>, rspec-mocks-3.4.0 conflicts with rspec-mocks <span class="token punctuation">(</span>~<span class="token operator">&gt;</span> <span class="token number">3.0</span>.0<span class="token punctuation">)</span> <span class="token punctuation">(</span>Gem::LoadError<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F</p><p>rspec \u3068 rspec-core \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u5408\u3063\u3066\u3044\u306A\u304B\u3063\u305F\u306E\u3067 rspec \u3092 update \u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> gem update rspec
<span class="token punctuation">..</span>.
Gems updated: rspec rspec-collection_matchers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u5EA6\u30EA\u30DD\u30B8\u30C8\u30EA\u306E\u4F5C\u6210\u3092\u5B9F\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ knife solo init <span class="token builtin class-name">.</span>
WARNING: No knife configuration <span class="token function">file</span> found
Creating kitchen<span class="token punctuation">..</span>.
Creating knife.rb <span class="token keyword">in</span> kitchen<span class="token punctuation">..</span>.
Creating cupboards<span class="token punctuation">..</span>.
Setting up Berkshelf<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u3053\u308C\u3067\u5B9F\u884C\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u5185\u306B\u69D8\u3005\u306A\u96DB\u5F62\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u305F</p><h2 id="\u30EA\u30E2\u30FC\u30C8\u306E\u30B5\u30FC\u30CF\u3099\u306B-chef-solo-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30EA\u30E2\u30FC\u30C8\u306E\u30B5\u30FC\u30CF\u3099\u306B-chef-solo-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" aria-hidden="true">#</a> \u30EA\u30E2\u30FC\u30C8\u306E\u30B5\u30FC\u30D0\u306B Chef Solo \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</h2><p>\u4ECA\u56DE\u30EA\u30E2\u30FC\u30C8\u30B5\u30FC\u30D0\u3068\u3057\u3066\u60F3\u5B9A\u3059\u308B Vagrant \u306E\u74B0\u5883\u306B\u5BFE\u3057\u3066 SSH \u306E\u8A2D\u5B9A\u3092\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u3057\u3066\u304A\u304F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vagrant ssh-config --host testhost <span class="token operator">&gt;&gt;</span> ~/.ssh/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067 Chef Solo \u3092\u30EA\u30E2\u30FC\u30C8\u30B5\u30FC\u30D0\u306B\u5BFE\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ knife solo bootstrap testhost
Bootstrapping Chef<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
Thank you <span class="token keyword">for</span> installing Chef<span class="token operator">!</span>
<span class="token punctuation">..</span>.
Chef Client finished, <span class="token number">0</span>/0 resources updated <span class="token keyword">in</span> 06 seconds
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4ECA\u56DE\u306F\u524D\u56DE Chef Solo \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u74B0\u5883\u306B\u5BFE\u3057\u3066\u6253\u3063\u305F\u306E\u3067\u6700\u7D42\u7684\u306A\u7D50\u679C\u306F <code>0/0 resources updated</code> \u306B\u306A\u3063\u3066\u3044\u308B</p><h2 id="\u30AF\u30C3\u30AF\u30D5\u3099\u30C3\u30AF\u306E\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#\u30AF\u30C3\u30AF\u30D5\u3099\u30C3\u30AF\u306E\u4F5C\u6210" aria-hidden="true">#</a> \u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306E\u4F5C\u6210</h2><p>\u30ED\u30FC\u30AB\u30EB\u306B\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3002\u4ECA\u56DE\u306F git \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u305F\u3081\u306E\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u3092\u4F5C\u308B</p><p>\u81EA\u4F5C\u306E\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306F site-cookbooks \u4EE5\u4E0B\u306B\u7F6E\u304F\u3053\u3068\u304C\u6163\u4F8B\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u51FA\u529B\u5148\u306B site-cookbooks \u3092\u6307\u5B9A\u3057\u3066\u3044\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ knife cookbook create <span class="token function">git</span> -o site-cookbooks
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u3053\u308C\u3067 site-cookbooks \u4EE5\u4E0B\u306B git \u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306E\u96DB\u5F62\u304C\u51FA\u6765\u4E0A\u304C\u308B</p><h2 id="\u30EC\u30B7\u30D2\u309A\u306E\u7DE8\u96C6" tabindex="-1"><a class="header-anchor" href="#\u30EC\u30B7\u30D2\u309A\u306E\u7DE8\u96C6" aria-hidden="true">#</a> \u30EC\u30B7\u30D4\u306E\u7DE8\u96C6</h2><p>\u30EC\u30B7\u30D4\u306E\u96DB\u5F62 <code>site-cookbooks/git/recipes/default.rb</code> \u3092\u7DE8\u96C6\u3057\u3066\u3044\u304F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> site-cookbooks/git/recipes/default.rb
$ <span class="token function">cat</span> site-cookbooks/git/recipes/default.rb
<span class="token comment">#</span>
<span class="token comment"># Cookbook Name:: git</span>
<span class="token comment"># Recipe:: default</span>
<span class="token comment">#</span>
<span class="token comment"># Copyright 2015, YOUR_COMPANY_NAME</span>
<span class="token comment">#</span>
<span class="token comment"># All rights reserved - Do Not Redistribute</span>
<span class="token comment">#</span>
package <span class="token string">&quot;git&quot;</span> <span class="token keyword">do</span>
    action :install
end
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="node-\u30AA\u30D5\u3099\u30B7\u3099\u30A7\u30AF\u30C8\u306E\u7DE8\u96C6" tabindex="-1"><a class="header-anchor" href="#node-\u30AA\u30D5\u3099\u30B7\u3099\u30A7\u30AF\u30C8\u306E\u7DE8\u96C6" aria-hidden="true">#</a> Node \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u7DE8\u96C6</h2><p>Chef \u3067\u7BA1\u7406\u3059\u308B Node \uFF08\u30B5\u30FC\u30D0\uFF09\u306E\u72B6\u614B\u3092\u8A18\u8FF0\u3057\u3001\u305D\u308C\u305E\u308C\u306E Node \u306B\u5BFE\u3057\u3066\u3069\u306E\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u304C\u9069\u7528\u3055\u308C\u308B\u304B\u3092\u8A2D\u5B9A\u3059\u308B Node \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u7DE8\u96C6\u3059\u308B</p><p>Node \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F <code>knife solo bootstrap testhost</code> \u5B9F\u884C\u6642\u306B <code>nodes/testhost.json</code> \u3068\u3057\u3066\u4F5C\u6210\u3055\u308C\u3066\u3044\u308B</p><p>\u4ECA\u56DE\u306F\u3053\u3053\u306B\u5148\u307B\u3069\u4F5C\u6210\u3057\u305F git \u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306E\u9069\u7528\u3092\u8A18\u8FF0\u3059\u308B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> nodes/testhost.json
$ <span class="token function">cat</span> nodes/testhost.json 
<span class="token punctuation">{</span>
  <span class="token string">&quot;run_list&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;recipe[git]&quot;</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;automatic&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ipaddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;testhost&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u30AF\u30C3\u30AF\u30D5\u3099\u30C3\u30AF\u306E\u5B9F\u884C" tabindex="-1"><a class="header-anchor" href="#\u30AF\u30C3\u30AF\u30D5\u3099\u30C3\u30AF\u306E\u5B9F\u884C" aria-hidden="true">#</a> \u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u306E\u5B9F\u884C</h2><p>\u6E96\u5099\u304C\u6574\u3063\u305F\u306E\u3067\u3044\u3088\u3044\u3088\u30AF\u30C3\u30AF\u30D6\u30C3\u30AF\u3092\u30EA\u30E2\u30FC\u30C8\u30B5\u30FC\u30D0\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3059\u308B</p><p>\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5B9F\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ knife solo cook testhost
Running Chef on testhost<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
Chef Client finished, <span class="token number">0</span>/1 resources updated <span class="token keyword">in</span> 07 seconds
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u3053\u308C\u3082\u540C\u3058\u304F\u524D\u56DE\u306E\u74B0\u5883\u3067\u3059\u3067\u306B git \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u306A\u306E\u3067 <code>0/1 resources updated</code> \u3068\u3057\u3066\u6B63\u5E38\u306B\u5B9F\u884C\u3055\u308C\u305F</p><p>\u3053\u308C\u3067\u30EA\u30E2\u30FC\u30C8\u3078\u306E Chef \u5B9F\u884C\u5B8C\u4E86\uFF01</p><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,44),m={href:"http://www.amazon.co.jp/gp/product/477416500X/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=477416500X&linkCode=as2&tag=sojiro14-22",target:"_blank",rel:"noopener noreferrer"},k=n("Chef \u5B9F\u8DF5\u5165\u9580");function g(f,v){const a=p("ExternalLinkIcon");return o(),c(t,null,[s("p",null,[s("a",u,[d,e(a)]),b]),h,s("ul",null,[s("li",null,[s("a",m,[k,e(a)])])])],64)}var C=r(i,[["render",g]]);export{C as default};
