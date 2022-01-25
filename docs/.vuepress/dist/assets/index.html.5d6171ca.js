import{r as p,o as t,c as o,a as n,b as a,F as c,e as r,d as e}from"./app.1c49a48c.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=r(`<p>Node.js\u3092\u4F7F\u3063\u3066\u7C21\u5358\u306AWeb Server\u3092\u4F5C\u3063\u3066\u307F\u305F\u969B\u306E\u30E1\u30E2\u3002</p><p>\u4ECA\u56DE\u4F7F\u3046Node.js\u306E\u30D0\u30FC\u30B8\u30E7\u30F3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">node</span> -v
v0.10.32
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="web-server\u30AA\u30D5\u3099\u30B7\u3099\u30A7\u30AF\u30C8\u306E\u6E96\u5099" tabindex="-1"><a class="header-anchor" href="#web-server\u30AA\u30D5\u3099\u30B7\u3099\u30A7\u30AF\u30C8\u306E\u6E96\u5099" aria-hidden="true">#</a> Web Server\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6E96\u5099</h2><p>Node.js\u306B\u306FWeb Server\u306E\u6A5F\u80FD\u3092\u5099\u3048\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u308B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Node\u306E <code>http</code> \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u5F8C\u3001 <code>createServer()</code> \u30E1\u30BD\u30C3\u30C9\u3067Web Server\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3067\u304D\u308B</p><h2 id="request\u30A4\u30D8\u3099\u30F3\u30C8\u306E\u8FFD\u52A0" tabindex="-1"><a class="header-anchor" href="#request\u30A4\u30D8\u3099\u30F3\u30C8\u306E\u8FFD\u52A0" aria-hidden="true">#</a> request\u30A4\u30D9\u30F3\u30C8\u306E\u8FFD\u52A0</h2><p>\u53D6\u5F97\u3057\u305FServer\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30EA\u30B9\u30CA\u30FC\u3068\u3057\u3066\u3001request\u3092\u53D7\u3051\u305F\u3068\u304D\u306B\u767A\u706B\u3059\u308Brequest\u30A4\u30D9\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B</p><p>\u30EA\u30B9\u30CA\u30FC\u306E\u8FFD\u52A0\u306B\u306F <code>emitter.on(event, listener)</code> \u3068\u3044\u3046\u5F62\u5F0F\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u3046\u3002\u4ECA\u56DE\u306Fevent\u306B <code>&#39;request&#39;</code> \u3092\u6307\u5B9A\u3059\u308B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u3053\u3053\u3067\u30EA\u30B9\u30CA\u30FC\u3068\u3057\u3066\u6307\u5B9A\u3059\u308B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306F\u4EE5\u4E0B\u306E2\u3064\u306E\u5F15\u6570\u3092\u53D7\u3051\u308B</p><ul><li>request\u306E\u5185\u5BB9\u3092\u3082\u3064 <code>http.IncomingMessage</code> \u30AF\u30E9\u30B9\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9</li><li>response\u306E\u5185\u5BB9\u3068\u306A\u308B <code>http.ServerResponse</code> \u30AF\u30E9\u30B9\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9</li></ul><h3 id="response-writehead-statuscode-reasonphrase-headers" tabindex="-1"><a class="header-anchor" href="#response-writehead-statuscode-reasonphrase-headers" aria-hidden="true">#</a> response.writeHead(statusCode, [reasonPhrase], [headers])</h3><p>response\u306EHead\u3092\u898F\u5B9A\u3059\u308B\u30E1\u30BD\u30C3\u30C9</p><h3 id="response-write-chunk-encoding" tabindex="-1"><a class="header-anchor" href="#response-write-chunk-encoding" aria-hidden="true">#</a> response.write(chunk, [encoding])</h3><p>response\u306Ebody\u3092\u898F\u5B9A\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3002 <code>chunk</code> \u306B\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u7B2C\u4E8C\u5F15\u6570\u306Bencoding\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FUTF-8\u3002</p><h3 id="response-end-data-encoding" tabindex="-1"><a class="header-anchor" href="#response-end-data-encoding" aria-hidden="true">#</a> response.end([data], [encoding])</h3><p>server\u306Bresponse\u306E\u5B8C\u4E86\u3092\u901A\u77E5\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3002response\u306E\u7D42\u4E86\u6642\u306B\u5FC5\u305A\u547C\u3070\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3002</p><h2 id="\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B" aria-hidden="true">#</a> \u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B</h2><p>\u30DD\u30FC\u30C8\u3068\u30DB\u30B9\u30C8\u540D\u3092\u6307\u5B9A\u3057\u3066Web Server\u3078\u306E\u63A5\u7D9A\u3092\u53D7\u3051\u4ED8\u3051\u308B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">,</span> <span class="token string">&#39;xx.xxx.xxx.xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u30B3\u30FC\u30C8\u3099\u306E\u5168\u4F53\u50CF" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C8\u3099\u306E\u5168\u4F53\u50CF" aria-hidden="true">#</a> \u30B3\u30FC\u30C9\u306E\u5168\u4F53\u50CF</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">,</span> <span class="token string">&#39;xx.xxx.xxx.xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server listening...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8D77\u52D5\u6642\u306E\u30E1\u30C3\u30BB\u30FC\u30B8</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="web-server\u306E\u8D77\u52D5\u3068\u78BA\u8A8D" tabindex="-1"><a class="header-anchor" href="#web-server\u306E\u8D77\u52D5\u3068\u78BA\u8A8D" aria-hidden="true">#</a> Web Server\u306E\u8D77\u52D5\u3068\u78BA\u8A8D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">node</span> web.js 
server listening<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Web Server\u3092\u8D77\u52D5\u3057\u305F\u3089\u30D6\u30E9\u30A6\u30B6\u3067\u78BA\u8A8D\u3059\u308B</p><p>{% img /images/nodejs/web_server/hello_world.png %}</p><p>\u7C21\u5358\u306AWeb Server\u306E\u5B8C\u6210</p><h2 id="\u53C2\u7167" tabindex="-1"><a class="header-anchor" href="#\u53C2\u7167" aria-hidden="true">#</a> \u53C2\u7167</h2>`,30),d={href:"http://nodejs.org/api/http.html#http_http",target:"_blank",rel:"noopener noreferrer"},k=e("Node.js v0.10.35 Manual & Documentation#HTTP"),h={href:"http://nodejs.org/api/events.html#events_events",target:"_blank",rel:"noopener noreferrer"},b=e("Node.js v0.10.35 Manual & Documentation#Events"),v={href:"http://dotinstall.com/lessons/basic_nodejs/26205",target:"_blank",rel:"noopener noreferrer"},m=e("\u30C9\u30C3\u30C8\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB");function g(x,f){const s=p("ExternalLinkIcon");return t(),o(c,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),n("li",null,[n("a",h,[b,a(s)])]),n("li",null,[n("a",v,[m,a(s)])])])],64)}var w=l(i,[["render",g]]);export{w as default};
