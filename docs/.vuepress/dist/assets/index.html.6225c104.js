import{e as n}from"./app.1c49a48c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>2016/07/10 \u4FEE\u6B63: <code>docker-compose.yml</code> \u3068 <code>nginx.conf</code> \u306E\u4E00\u90E8\u3092\u4FEE\u6B63\u3057\u307E\u3057\u305F</p><p>\u3068\u3042\u308B\u7D4C\u7DEF\u3067 Docker \u3092\u4F7F\u3063\u3066 Rails \u306E\u74B0\u5883\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3057\u305F\u624B\u9806\u3067\u3059\u3002</p><h1 id="setting-files" tabindex="-1"><a class="header-anchor" href="#setting-files" aria-hidden="true">#</a> setting files</h1><p>\u307E\u305A\u306F\u7528\u610F\u3057\u305F file \u304B\u3089\u3002</p><h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># not use datastore container now</span>
<span class="token comment">#datastore:</span>
<span class="token comment">#  build: Dockerfiles/datastore</span>


<span class="token key atrule">mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>5.6.26
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;pass&#39;</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;3306:3306&#39;</span>
<span class="token comment">#  volumes_from:</span>
<span class="token comment">#    - datastore</span>

<span class="token key atrule">nginx</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span> Dockerfiles/nginx
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;80:80&#39;</span>
<span class="token comment">#  volumes_from:</span>
<span class="token comment">#    - datastore</span>
  <span class="token key atrule">links</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> web

<span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span> .

  <span class="token key atrule">command</span><span class="token punctuation">:</span> bundle exec unicorn <span class="token punctuation">-</span>c config/unicorn.rb

<span class="token comment">#  volumes_from:</span>
<span class="token comment">#    - datastore</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/usr/src/app
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;3000:3000&#39;</span>
  <span class="token key atrule">links</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mysql
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">RAILS_ENV</span><span class="token punctuation">:</span> development
    <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;pass&#39;</span>
    <span class="token key atrule">DATABASE_URL</span><span class="token punctuation">:</span> mysql2<span class="token punctuation">:</span>//root<span class="token punctuation">:</span>pass@mysql<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">SECRET_KEY_BASE</span><span class="token punctuation">:</span> hogehoge
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> rails:onbuild</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="dockerfiles-nginx-dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfiles-nginx-dockerfile" aria-hidden="true">#</a> Dockerfiles/nginx/Dockerfile</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.7.9</span>

<span class="token instruction"><span class="token keyword">COPY</span> nginx.conf /etc/nginx/nginx.conf</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="dockerfiles-nginx-nginx-conf" tabindex="-1"><a class="header-anchor" href="#dockerfiles-nginx-nginx-conf" aria-hidden="true">#</a> Dockerfiles/nginx/nginx.conf</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
  worker_connections <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment"># increase if you have lots of clients</span>
  accept_mutex off<span class="token punctuation">;</span> <span class="token comment"># &quot;on&quot; if nginx worker_processes &gt; 1</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  include mime.types<span class="token punctuation">;</span>
  default_type application/octet-stream<span class="token punctuation">;</span>
  log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                    <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

  access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

  sendfile on<span class="token punctuation">;</span>

  tcp_nopush on<span class="token punctuation">;</span> <span class="token comment"># off may be better for *some* Comet/long-poll stuff</span>
  tcp_nodelay off<span class="token punctuation">;</span> <span class="token comment"># on may be better for some Comet/long-poll stuff</span>

  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
  gzip_proxied any<span class="token punctuation">;</span>
  gzip_min_length <span class="token number">500</span><span class="token punctuation">;</span>
  gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>
  gzip_types text/plain text/html text/xml text/css
             text/comma-separated-values
             text/javascript application/x-javascript
             application/atom+xml<span class="token punctuation">;</span>

  upstream app_server <span class="token punctuation">{</span>
    <span class="token comment"># for UNIX domain socket setups:</span>
    <span class="token comment"># server unix:/path/to/.unicorn.sock fail_timeout=0;</span>

    <span class="token comment"># for TCP setups, point these to your backend servers</span>
    <span class="token comment"># server 192.168.0.7:8080 fail_timeout=0;</span>
    server web:3000 <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    client_max_body_size 4G<span class="token punctuation">;</span>
    keepalive_timeout <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment"># path for static files</span>
    root /usr/your_app/home/system/public<span class="token punctuation">;</span>

    try_files <span class="token variable">$uri</span>/index.html <span class="token variable">$uri</span>.html <span class="token variable">$uri</span> @app<span class="token punctuation">;</span>

    location @app <span class="token punctuation">{</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_redirect off<span class="token punctuation">;</span>
      proxy_pass http://app_server<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># Rails error pages</span>
    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /500.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /500.html <span class="token punctuation">{</span>
      root /usr/your_app/home/system/public<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h1 id="setup-tutorial" tabindex="-1"><a class="header-anchor" href="#setup-tutorial" aria-hidden="true">#</a> Setup Tutorial</h1><h2 id="download-tools" tabindex="-1"><a class="header-anchor" href="#download-tools" aria-hidden="true">#</a> Download Tools</h2><h3 id="virtualbox" tabindex="-1"><a class="header-anchor" href="#virtualbox" aria-hidden="true">#</a> VirtualBox</h3><p>https://www.virtualbox.org/wiki/Downloads</p><p>please install version &gt;= 5.x</p><h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h3><p>http://brew.sh/index_ja.html</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ /usr/bin/ruby -e <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="docker-tools" tabindex="-1"><a class="header-anchor" href="#docker-tools" aria-hidden="true">#</a> Docker Tools</h3><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="docker-machine" tabindex="-1"><a class="header-anchor" href="#docker-machine" aria-hidden="true">#</a> Docker Machine</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> docker-machine
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="download-application" tabindex="-1"><a class="header-anchor" href="#download-application" aria-hidden="true">#</a> Download Application</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/path/to/workspace
$ <span class="token function">git</span> clone git@github.com:your/App.git your_app
$ <span class="token builtin class-name">cd</span> your_app
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="setup-docker-machine" tabindex="-1"><a class="header-anchor" href="#setup-docker-machine" aria-hidden="true">#</a> Setup Docker Machine</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker-machine create --driver virtualbox dev
<span class="token punctuation">..</span>.

$ docker-machine <span class="token function">ls</span>
NAME   ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER    ERRORS
dev    -        virtualbox   Running   tcp://192.168.99.100:2376           v1.10.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>docker-machine <span class="token function">env</span> dev<span class="token variable">)</span></span>&quot;</span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;eval &quot;$(docker-machine env dev)&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker-machine start dev
<span class="token punctuation">..</span>.

$ docker-machine <span class="token function">ip</span> dev
<span class="token number">192.168</span>.99.100
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="setup-application" tabindex="-1"><a class="header-anchor" href="#setup-application" aria-hidden="true">#</a> Setup Application</h2><h3 id="build-docker-images-and-start-containers" tabindex="-1"><a class="header-anchor" href="#build-docker-images-and-start-containers" aria-hidden="true">#</a> Build Docker Images and Start Containers</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ~/path/to/workspace/your_app</span>
$ <span class="token function">docker-compose</span> build
<span class="token punctuation">..</span>.

$ <span class="token function">docker-compose</span> up
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>please open another tab</p><h3 id="setup-db" tabindex="-1"><a class="header-anchor" href="#setup-db" aria-hidden="true">#</a> Setup DB</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> run web rake db:create
$ <span class="token function">docker-compose</span> run web rake db:migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="access-application" tabindex="-1"><a class="header-anchor" href="#access-application" aria-hidden="true">#</a> Access Application</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker-machine <span class="token function">ip</span> dev
<span class="token number">192.168</span>.99.100
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>access to <code>192.168.99.100:3000</code></p>`,42);function p(l,r){return e}var o=s(a,[["render",p]]);export{o as default};
