import{r as l,o as r,c as t,a as n,b as e,F as c,e as p,d as s}from"./app.1c49a48c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=p(`<p>\u4E0A\u53F8\u306B\u304A\u81B3\u7ACB\u3066\u3055\u308C\u3001\u5F8C\u8F29\u306B\u304A\u5C3B\u3092\u53E9\u304B\u308C\u3001\u3084\u3063\u3068\u306E\u3053\u3068\u3067 CPAN \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u30EA\u30EA\u30FC\u30B9\u3057\u307E\u3057\u305F\u3002</p><p>\u524D\u56DE\u306E\u30A8\u30F3\u30C8\u30EA\u306B\u7D9A\u304D\u3001\u30EA\u30EA\u30FC\u30B9\u306E\u624B\u9806\u3092\u8A18\u3057\u307E\u3059\u3002</p><h2 id="\u30E2\u30B7\u3099\u30E5\u30FC\u30EB\u306E\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#\u30E2\u30B7\u3099\u30E5\u30FC\u30EB\u306E\u4F5C\u6210" aria-hidden="true">#</a> \u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u4F5C\u6210</h2><p>\u3053\u3053\u304C\u30B3\u30A2\u306E\u90E8\u5206\u3067\u3059\u304C\u3001\u5185\u5BB9\u306F\u4F5C\u308B\u30E2\u30B8\u30E5\u30FC\u30EB\u306B\u4F9D\u308B\u306E\u3067\u5272\u611B\u3002\u7DE8\u96C6\u3059\u3079\u304D\u306F\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002</p><ul><li>lib/ \u914D\u4E0B\u306E\u30D7\u30ED\u30B0\u30E9\u30E0</li><li>t/ \u914D\u4E0B\u306E\u30C6\u30B9\u30C8\u30D7\u30E9\u30B0\u30E9\u30E0</li><li>cpanfile</li></ul><p>cpanfile \u306E\u4F5C\u6210\u306F <code>scan-prereqs-cpanfile</code> \u3092\u4F7F\u3046\u3068\u4FBF\u5229\u3067\u3059\u3002</p><p>\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F <strong>App::scan_prereqs_cpanfile</strong> \u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cpanm App::scan_prereqs_cpanfile
scan-prereqs-cpanfile <span class="token operator">&gt;</span> cpanfile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u30C6\u30B9\u30C8" tabindex="-1"><a class="header-anchor" href="#\u30C6\u30B9\u30C8" aria-hidden="true">#</a> \u30C6\u30B9\u30C8</h2><p>\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u4F5C\u6210\u304C\u3067\u304D\u305F\u3089 test \u3092\u5B9F\u884C\u3057\u307E\u3059\u304C\u3001\u3053\u306E\u3068\u304D <code>minil test</code> \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3046\u3068 Changes \u3084 META.json\u3001README.md \u304C\u81EA\u52D5\u3067\u7DE8\u96C6\u3055\u308C\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ minil <span class="token builtin class-name">test</span>
Creating working directory: /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
<span class="token function">cp</span> Build.PL /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/Build.PL
<span class="token function">cp</span> Changes /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/Changes
<span class="token function">cp</span> LICENSE /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/LICENSE
<span class="token function">cp</span> META.json /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/META.json
<span class="token function">cp</span> README.md /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/README.md
<span class="token function">cp</span> cpanfile /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/cpanfile
<span class="token function">cp</span> lib/JSON/MergePatch.pm /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/lib/JSON/MergePatch.pm
<span class="token function">cp</span> minil.toml /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/minil.toml
<span class="token function">cp</span> t/00_compile.t /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7/t/00_compile.t
Building /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: It<span class="token string">&#39;s new $module
Version: 0.01
fatal: bad default revision &#39;</span>HEAD<span class="token string">&#39;
Writing MANIFEST file
Writing release tests: xt/minilla/minimum_version.t
Writing release tests: xt/minilla/cpan_meta.t
Writing release tests: xt/minilla/pod.t
Writing release tests: xt/minilla/spelling.t
Writing release tests: xt/minilla/permissions.t
[5DuYQ9x7] $ perl -I. Build.PL
Creating new &#39;</span>Build<span class="token string">&#39; script for &#39;</span>JSON-MergePatch<span class="token string">&#39; version &#39;</span><span class="token number">0.01</span>&#39;
<span class="token punctuation">[</span>5DuYQ9x7<span class="token punctuation">]</span> $ perl -I. Build build
<span class="token function">cp</span> lib/JSON/MergePatch.pm blib/lib/JSON/MergePatch.pm
t/00_compile.t <span class="token punctuation">..</span> ok   
All tests successful.
<span class="token assign-left variable">Files</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">Tests</span><span class="token operator">=</span><span class="token number">1</span>,  <span class="token number">0</span> wallclock secs <span class="token punctuation">(</span> <span class="token number">0.01</span> usr  <span class="token number">0.01</span> sys +  <span class="token number">0.03</span> cusr  <span class="token number">0.01</span> csys <span class="token operator">=</span>  <span class="token number">0.06</span> CPU<span class="token punctuation">)</span>
Result: PASS
Removing /user/home_directory/git/cpan/JSON-MergePatch/.build/5DuYQ9x7
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u30EA\u30EA\u30FC\u30B9" tabindex="-1"><a class="header-anchor" href="#\u30EA\u30EA\u30FC\u30B9" aria-hidden="true">#</a> \u30EA\u30EA\u30FC\u30B9</h2><p>\u30C6\u30B9\u30C8\u304C\u901A\u3063\u305F\u3089\u3044\u3088\u3044\u3088\u30EA\u30EA\u30FC\u30B9\u3057\u307E\u3059\u3002</p>`,13),b=s("CPAN \u3078\u306E\u30EA\u30EA\u30FC\u30B9\u306B\u306F PAUSE ID \u304C\u5FC5\u8981\u3067\u3059\u3002\u53D6\u5F97\u65B9\u6CD5\u306F"),m={href:"http://blog.sojiro.me/blog/2015/05/17/get-pause-id/",target:"_blank",rel:"noopener noreferrer"},g=s("\u3053\u3061\u3089"),d=s("\u3002"),k=p(`<p>\u30EA\u30EA\u30FC\u30B9\u306B\u306F <code>minil release</code> \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ minil release

Release engineering requires Version::Next, but it is not available. Please <span class="token function">install</span> Version::Next using your preferred CPAN client at <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Version::Next</strong> \u304C\u306A\u3044\u3068\u6012\u3089\u308C\u305F\u306E\u3067\u5165\u308C\u3066\u518D\u5EA6\u5B9F\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cpanm Version::Next
<span class="token punctuation">..</span>.

$ minil release

Release engineering requires CPAN::Uploader, but it is not available. Please <span class="token function">install</span> CPAN::Uploader using your preferred CPAN client at <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4ECA\u5EA6\u306F <strong>CPAN::Uploader</strong> \u304C\u306A\u3044\u3068\u6012\u3089\u308C\u305F\u306E\u3067\u5165\u308C\u3066\u518D\u5EA6\u5B9F\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cpanm CPAN::Uploader
<span class="token punctuation">..</span>.

$ minil release

Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: <span class="token number">0.01</span>
Next Release? <span class="token punctuation">[</span><span class="token number">0.01</span><span class="token punctuation">]</span> 
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: <span class="token number">0.01</span>
<span class="token punctuation">..</span>.
All tests successful.
<span class="token assign-left variable">Files</span><span class="token operator">=</span><span class="token number">8</span>, <span class="token assign-left variable">Tests</span><span class="token operator">=</span><span class="token number">67</span>,  <span class="token number">0</span> wallclock secs <span class="token punctuation">(</span> <span class="token number">0.04</span> usr  <span class="token number">0.03</span> sys +  <span class="token number">0.18</span> cusr  <span class="token number">0.04</span> csys <span class="token operator">=</span>  <span class="token number">0.29</span> CPU<span class="token punctuation">)</span>
Result: PASS
Wrote JSON-MergePatch-0.01.tar.gz
Upload to CPAN
Release to CPAN ? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>   y
missing user argument at
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u30EA\u30EA\u30FC\u30B9\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u78BA\u8A8D\u3068\u3001 CPAN \u306B\u30EA\u30EA\u30FC\u30B9\u3059\u308B\u304B\u306E\u78BA\u8A8D\u306B\u7B54\u3048\u3066\u3044\u3056\u30EA\u30EA\u30FC\u30B9\u3001\u3068\u601D\u3044\u304D\u3084</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>missing user argument at
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u3068\u6012\u3089\u308C\u307E\u3057\u305F\u3002</p><p>\u3069\u3046\u3084\u3089 <code>~/.pause</code> \u30D5\u30A1\u30A4\u30EB\u306B PAUSE \u306E\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u8A18\u8F09\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3088\u3046\u3067\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.pause
$ <span class="token function">cat</span> ~/.pause
user SOJIRO
password your_password
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u518D\u5EA6\u5B9F\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ minil release

Retrieving meta data from lib/JSON/MergePatch.pm.
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: <span class="token number">0.01</span>
Next Release? <span class="token punctuation">[</span><span class="token number">0.01</span><span class="token punctuation">]</span> 
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: <span class="token number">0.01</span>
<span class="token punctuation">..</span>.
All tests successful.
<span class="token assign-left variable">Files</span><span class="token operator">=</span><span class="token number">8</span>, <span class="token assign-left variable">Tests</span><span class="token operator">=</span><span class="token number">67</span>,  <span class="token number">0</span> wallclock secs <span class="token punctuation">(</span> <span class="token number">0.04</span> usr  <span class="token number">0.03</span> sys +  <span class="token number">0.18</span> cusr  <span class="token number">0.05</span> csys <span class="token operator">=</span>  <span class="token number">0.30</span> CPU<span class="token punctuation">)</span>
Result: PASS
Wrote JSON-MergePatch-0.01.tar.gz
Upload to CPAN
Release to CPAN ? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>   y
registering upload with PAUSE web server
POSTing upload <span class="token keyword">for</span> /user/home_directory/git/cpan/JSON-MergePatch/.build/ilpDOKuE/JSON-MergePatch-0.01.tar.gz to https://pause.perl.org/pause/authenquery
PAUSE <span class="token function">add</span> message sent ok <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">]</span>
Name: JSON::MergePatch
Abstract: JSON Merge Patch implementation
Version: <span class="token number">0.01</span>
<span class="token punctuation">[</span>JSON-MergePatch<span class="token punctuation">]</span> $ <span class="token function">git</span> commit -a -m Checking <span class="token keyword">in</span> changes prior to tagging of version <span class="token number">0.01</span>.
Changelog <span class="token function">diff</span> is:
<span class="token function">diff</span> --git a/Changes b/Changes
index 643c7bc<span class="token punctuation">..</span>dae7daa <span class="token number">100644</span>
--- a/Changes
+++ b/Changes
@@ -2,5 +2,7 @@ Revision <span class="token function">history</span> <span class="token keyword">for</span> Perl extension JSON-MergePatch

 <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token variable">$NEXT</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

+0.01 <span class="token number">2015</span>-07-02T18:29:20Z
+
     - original version

<span class="token punctuation">[</span>master 3bf0db2<span class="token punctuation">]</span> Checking <span class="token keyword">in</span> changes prior to tagging of version <span class="token number">0.01</span>.

 <span class="token number">2</span> files changed, <span class="token number">17</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
Pushing to origin
<span class="token punctuation">[</span>JSON-MergePatch<span class="token punctuation">]</span> $ <span class="token function">git</span> push origin master
Counting objects: <span class="token number">7</span>, done.
Delta compression using up to <span class="token number">8</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, <span class="token number">831</span> bytes <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">4</span> <span class="token punctuation">(</span>delta <span class="token number">2</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To git@github.com:sojiro14/JSON-MergePatch.git

   9c8c207<span class="token punctuation">..</span>3bf0db2  master -<span class="token operator">&gt;</span> master

<span class="token punctuation">[</span>JSON-MergePatch<span class="token punctuation">]</span> $ <span class="token function">git</span> tag <span class="token number">0.01</span>
<span class="token punctuation">[</span>JSON-MergePatch<span class="token punctuation">]</span> $ <span class="token function">git</span> push origin tag <span class="token number">0.01</span>
Total <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To git@github.com:sojiro14/JSON-MergePatch.git

 * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         <span class="token number">0.01</span> -<span class="token operator">&gt;</span> <span class="token number">0.01</span>

Removing /user/home_directory/git/cpan/JSON-MergePatch/.build/ilpDOKuE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>\u30C6\u30B9\u30C8\u304C\u5B9F\u884C\u3055\u308C\u305F\u5F8C\u3001CPAN \u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u307E\u3057\u305F\u3002\u6700\u5F8C\u306B\u305D\u306E\u6642\u70B9\u306E tag \u304C\u5207\u3089\u308C\u3066\u5B8C\u4E86\u3002</p><p>\u3064\u3044\u306B CPAN \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u30EA\u30EA\u30FC\u30B9\u3057\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3061\u3083\u3093\u3068\u3057\u306A\u304F\u3066\u306F\u3002</p><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,16),h={href:"http://blog.64p.org/entry/2013/05/14/080423",target:"_blank",rel:"noopener noreferrer"},N=s("Minilla \u3092\u7528\u3044\u305F Perl \u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u4F5C\u308A\u65B9"),f={href:"http://hotolab.net/blog/first_minil/",target:"_blank",rel:"noopener noreferrer"},P=s("\u306F\u3058\u3081\u3066\u306ECPAN Author\u306B\u306A\u308D\u3046\u3068\u3057\u3066\u56F0\u3063\u305F\u30E1\u30E2");function _(S,v){const a=l("ExternalLinkIcon");return r(),t(c,null,[u,n("p",null,[b,n("a",m,[g,e(a)]),d]),k,n("ul",null,[n("li",null,[n("a",h,[N,e(a)])]),n("li",null,[n("a",f,[P,e(a)])])])],64)}var x=i(o,[["render",_]]);export{x as default};
