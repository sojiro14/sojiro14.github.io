import{e as s}from"./app.1c49a48c.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=s(`<p>\u3055\u304F\u3089\u3067\u30EC\u30F3\u30BF\u30EB\u30B5\u30FC\u30D0\u30FC\u3092\u501F\u308A\u305F\u304C\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B7\u30A7\u30EB\u304C\u4F7F\u3044\u6163\u308C\u305Fbash\u3067\u306F\u306A\u304B\u3063\u305F\u306E\u3067\u5909\u66F4\u3057\u305F\u969B\u306E\u30E1\u30E2\u3002</p><h2 id="\u73FE\u5728\u306E\u30B7\u30A7\u30EB\u3092\u78BA\u8A8D" tabindex="-1"><a class="header-anchor" href="#\u73FE\u5728\u306E\u30B7\u30A7\u30EB\u3092\u78BA\u8A8D" aria-hidden="true">#</a> \u73FE\u5728\u306E\u30B7\u30A7\u30EB\u3092\u78BA\u8A8D</h2><div class="language-csh ext-csh line-numbers-mode"><pre class="language-csh"><code>% echo $SHELL
/bin/csh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u74B0\u5883\u5909\u6570 <code>$SHELL</code> \u306B\u73FE\u5728\u306E\u30B7\u30A7\u30EB\u306E\u30D1\u30B9\u304C\u5165\u3063\u3066\u3044\u308B\u3002</p><h2 id="\u5909\u66F4\u3066\u3099\u304D\u308B\u30B7\u30A7\u30EB\u306E\u78BA\u8A8D" tabindex="-1"><a class="header-anchor" href="#\u5909\u66F4\u3066\u3099\u304D\u308B\u30B7\u30A7\u30EB\u306E\u78BA\u8A8D" aria-hidden="true">#</a> \u5909\u66F4\u3067\u304D\u308B\u30B7\u30A7\u30EB\u306E\u78BA\u8A8D</h2><div class="language-csh ext-csh line-numbers-mode"><pre class="language-csh"><code>% cat /etc/shells 
# $FreeBSD: release/9.1.0/etc/shells 59717 2000-04-27 21:58:46Z ache $
#
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/sh
/bin/csh
/bin/tcsh
/usr/local/bin/bash
/usr/local/bin/rbash
/usr/local/bin/zsh
/usr/local/bin/rzsh
/usr/bin/passwd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>bash\u304C\u4F7F\u3048\u308B\u3053\u3068\u304C\u78BA\u8A8D\u3067\u304D\u308B\u3002</p><h2 id="\u30B7\u30A7\u30EB\u3092\u5909\u66F4\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30B7\u30A7\u30EB\u3092\u5909\u66F4\u3059\u308B" aria-hidden="true">#</a> \u30B7\u30A7\u30EB\u3092\u5909\u66F4\u3059\u308B</h2><div class="language-csh ext-csh line-numbers-mode"><pre class="language-csh"><code>% chsh -s /usr/local/bin/bash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>chsh</code> \u306F\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3092\u5909\u66F4\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u3002 <code>-s</code> \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4ED8\u3051\u306A\u3044\u3068\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306B\u52D5\u4F5C\u3059\u308B\u3002</p><p>\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u306F\u30E6\u30FC\u30B6\u30FC\u6BCE\u306B\u8A2D\u5B9A\u3067\u304D\u308B\u30ED\u30B0\u30A4\u30F3\u6642\u306B\u8D77\u52D5\u3055\u308C\u308B\u30B7\u30A7\u30EB\u306E\u3053\u3068\u3067\u3001 <code>/etc/passwd</code> \u30D5\u30A1\u30A4\u30EB\u3067\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3002</p><p><code>chsh</code> \u306F\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u66F8\u304D\u63DB\u3048\u308B\u3002</p><h2 id="bash\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u66F8\u304F" tabindex="-1"><a class="header-anchor" href="#bash\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u66F8\u304F" aria-hidden="true">#</a> bash\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u66F8\u304F</h2><p>\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3092bash\u306B\u5909\u66F4\u3057\u305F\u3089</p><ul><li>.bash_profile</li><li>.bashrc</li></ul><p>\u306A\u3069\u3001\u3044\u3064\u3082\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u8A18\u8FF0\u3059\u308B</p><h2 id="\u518D\u5EA6\u30B5\u30FC\u30CF\u3099\u30FC\u306B\u30ED\u30AF\u3099\u30A4\u30F3" tabindex="-1"><a class="header-anchor" href="#\u518D\u5EA6\u30B5\u30FC\u30CF\u3099\u30FC\u306B\u30ED\u30AF\u3099\u30A4\u30F3" aria-hidden="true">#</a> \u518D\u5EA6\u30B5\u30FC\u30D0\u30FC\u306B\u30ED\u30B0\u30A4\u30F3</h2><p>\u8A2D\u5B9A\u3092\u7D42\u3048\u3066\u518D\u5EA6\u30B5\u30FC\u30D0\u30FC\u306B\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u3068bash\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u3002</p><h2 id="\u30E1\u30E2" tabindex="-1"><a class="header-anchor" href="#\u30E1\u30E2" aria-hidden="true">#</a> \u30E1\u30E2</h2><div class="language-csh ext-csh line-numbers-mode"><pre class="language-csh"><code>% exec /usr/local/bin/bash -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u3067bash\u3092\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u7ACB\u3061\u4E0A\u3052\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u304C\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306F\u5909\u308F\u3089\u306A\u3044\u306E\u3067\u30ED\u30B0\u30A4\u30F3\u306E\u5EA6\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B7\u30A7\u30EB\u306B\u623B\u308B\u3002</p><p><code>exec</code> \u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3067\u6E21\u3055\u308C\u305F\u51E6\u7406\u306B\u30D7\u30ED\u30BB\u30B9\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3002</p><p>\u3088\u3063\u3066\u4E0A\u8A18\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068bash\u304C\u30ED\u30B0\u30A4\u30F3\u30B7\u30A7\u30EB\u3068\u3057\u3066\u7F6E\u304D\u63DB\u308F\u308B\u3002</p>`,23);function c(r,l){return n}var p=e(a,[["render",c]]);export{p as default};
