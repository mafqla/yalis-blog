import{_ as s,c as a,o as n,L as e}from"./chunks/framework.HB-xfCmj.js";import"./app.pHtHZ9Jo.js";import"./chunks/theme.ykc7KowD.js";const p="/assets/1.u5Fze_mT.image",t="/assets/2.EuPoHjTu.image",o="/assets/3.YdIjw9nG.image",l="/assets/4.8YtqyTCO.image",r="/assets/5.8ZzTJ3jb.image",c="/assets/6.95XWkLsN.image",i="/assets/7.KiFhQx6h.image",d="/assets/8.pkAIEQ7b.image",h="/assets/9.5uC-Dloi.image",u="/assets/10.52t26v7V.image",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/23-扩展：会议系统普通部署实战.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/23-扩展：会议系统普通部署实战.md","lastUpdated":1709799342000}'),g={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/23-扩展：会议系统普通部署实战.md"},m=e(`<p>到这里我们会议系统的学习和实战算是整体告一段落了，接下来的两节课，我们将写好的会议系统部署到线上，以及学习在部署过程中需要注意的一些问题。</p><p>部署之前，我们需要准备好项目中用到的一些服务的配置。</p><h2 id="基础配置注意事项" tabindex="-1">基础配置注意事项 <a class="header-anchor" href="#基础配置注意事项" aria-label="Permalink to &quot;基础配置注意事项&quot;">​</a></h2><p>会议系统需要获取用户的摄像头、麦克风等敏感设备信息，访问协议必须是<code>HTTPS</code>（<a href="https://juejin.cn/book/7168418382318927880/section/7171376753263247396" target="_blank" rel="noreferrer">《02|</a> <a href="https://juejin.cn/book/7168418382318927880/section/7171376753263247396" target="_blank" rel="noreferrer">基础（一）：Web 端基础 API 学习》</a>章节详细介绍过），因此部署后必须配置<code>SSL</code>证书。再一个就是需要特别注意线上部署后云服务器<code>安全组</code>开放的问题，默认购买云服务器后，是无法直接访问特定端口的，必须在对应厂商的控制台安全组中开放端口才可以。</p><h3 id="信令服务" tabindex="-1">信令服务 <a class="header-anchor" href="#信令服务" aria-label="Permalink to &quot;信令服务&quot;">​</a></h3><p>我们在学到第一种 <code>Mesh</code>多人会议架构时用到了信令交换服务器，信令服务器是 <code>WebRTC</code>基础信令交换的核心，因此会议系统前端部署之前，我们必须配置好信令服务器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//获取当前项目访问协议</span></span>
<span class="line"><span>const protocol = window.location.protocol === &#39;https:&#39; ? &#39;wss://&#39; : &#39;ws://&#39;</span></span>
<span class="line"><span>const host = window.location.host</span></span>
<span class="line"><span>const server = protocol+host</span></span>
<span class="line"><span>//根据环境自动选择服务器配置</span></span>
<span class="line"><span>let serverSocketUrl = process.env.NODE_ENV === &#39;development&#39; ? &#39;ws://127.0.0.1:18080&#39; : server</span></span>
<span class="line"><span>Vue.prototype.$serverSocketUrl = serverSocketUrl;</span></span></code></pre></div><p>请注意我上面的服务器地址配置，获取的是当前访问的 IP 或域名的基础信息，比如当前的前端项目打包后被部署到域名<code>https://www.xxxxx.zyx</code>下，那么信令服务地址则是：<code>wss\`\`://www.xxxxx.zyx</code>，而如果本地访问则地址是<code>ws://127.0.0.1:18080</code>。</p><p>当然我上面的配置是因为信令服务器和前端项目在同一个域名路径下，如果大家的信令服务器和会议前端不在一块部署，则自己可以将<code>serverSocketUrl</code>变量替换为自己的信令服务器，但是请注意 <strong>跨域和访问协议的问题</strong>，如<strong>果你的会议前端访问协议为</strong> <strong><code>HTTPS</code></strong> <strong>，那么这里的信令服务地址必须为</strong> <strong><code>HTTPS</code></strong>，<a href="https://web.dev/what-is-mixed-content/#_11" target="_blank" rel="noreferrer">相关知识参考</a>。</p><p>在我们的课程中为了避免部署的繁琐，我一开始就在信令服务器配置了静态文件夹映射，因此你可以直接将打包后的前端静态文件放到指定文件夹，然后直接<strong>访问信令服务器的 IP端口即可</strong>，线上部署之后，通过<code>nginx</code>直接映射信令服务器的端口。</p><p><strong>信令服务和静态文件映射部分配置</strong> <strong>：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//http server 这里配置前端打包后的静态文件 </span></span>
<span class="line"><span>app.use(express.static(&#39;./dist&#39;));</span></span>
<span class="line"><span>app.use(function (req, res,next) {</span></span>
<span class="line"><span>  res.sendfile(&#39;./dist/index.html&#39;);  //路径根据自己文件配置</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>var server=http.createServer(app)</span></span>
<span class="line"><span>//socket server</span></span>
<span class="line"><span>let io = require(&#39;socket.io&#39;)(server,{allowEIO3:true});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//自定义命令空间  nginx代理 /mediaServerWsUrl { http://xxxx:18080/socket.io/ }</span></span>
<span class="line"><span>// io = io.of(&#39;mediaServerWsUrl&#39;)</span></span>
<span class="line"><span>server.listen(18080, async() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;服务器启动成功 *:18080&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>Nginx 映射配置</strong> <strong>：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>  server_name www.xxxxx.zyx;</span></span>
<span class="line"><span>  listen 443 ssl http2;</span></span>
<span class="line"><span>  ssl_certificate /home/nginxWebUI/letsebcrypt/cert.crt;</span></span>
<span class="line"><span>  ssl_certificate_key /home/nginxWebUI/letsebcrypt/private.key;</span></span>
<span class="line"><span>  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>  listen 80;</span></span>
<span class="line"><span>  # http重定向到https</span></span>
<span class="line"><span>  if ($scheme = http) {</span></span>
<span class="line"><span>    return 301 https://$host:443$request_uri;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:18080/; # 这里就是信令服务启动的服务地址</span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Host $http_host;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Port $server_port;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    ## 信令核心配置 必须开启支持 websocket </span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>    proxy_redirect http:// https://;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="webrtc-网关服务器配置" tabindex="-1">WebRTC 网关服务器配置 <a class="header-anchor" href="#webrtc-网关服务器配置" aria-label="Permalink to &quot;WebRTC 网关服务器配置&quot;">​</a></h3><p>第二种 <code>SFU</code> 架构会议系统中，我们用到了<code>Janus</code>网关服务器，因此抽取全局变量后如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//Janus地址</span></span>
<span class="line"><span>// 如果为dev环境 直接配置绝对路径 否咋配置相对路径（如果前端不在janus所在服务器 则直接用映射后的地址 ）</span></span>
<span class="line"><span>Vue.prototype.$janusServerUrl = process.env.NODE_ENV === &#39;development&#39; ? &#39;https://www.xxxxxx.zyx/suke-janus/janus/&#39; : &#39;/suke-janus/janus/&#39;</span></span></code></pre></div><p>Nginx 代理配置（注意上下对比看代理路径：代理前的 <code>Janus</code>地址：<code>http://x.x.x.x:18088</code>）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span> location /suke-janus {</span></span>
<span class="line"><span>    proxy_pass http://x.x.x.x:18088/; ## 这里配置网关 janus地址  </span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Host $http_host;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Port $server_port;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    proxy_redirect http:// https://;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>项目中变量引用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>janus = new Janus({</span></span>
<span class="line"><span>        server: that.$janusServerUrl,//全局配置</span></span>
<span class="line"><span>        apisecret:&#39;suc119119&#39;,//这个变量也可以弄成全局的</span></span>
<span class="line"><span>        success: function() {</span></span>
<span class="line"><span>                        Janus.log(&quot;初始化成功&quot;)</span></span>
<span class="line"><span>                        that.initVideoRoomPlugin()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        error: function(cause) {</span></span>
<span class="line"><span>        //异常显示</span></span>
<span class="line"><span>                        Janus.log(cause)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        destroyed: function() {</span></span>
<span class="line"><span>                        Janus.log(&quot;destroyed&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="网络穿透服务器配置" tabindex="-1">网络穿透服务器配置 <a class="header-anchor" href="#网络穿透服务器配置" aria-label="Permalink to &quot;网络穿透服务器配置&quot;">​</a></h3><p><code>STUN</code>和<code>TURN</code>配置。如果你的项目部署在公网，这个配置是不可避免的，毕竟全球各地的网络状况是复杂多变的。同时如果你的客户是针对国内外的，那么强烈建议使用中继，即 <code>TURN</code>服务器，作为流量中继，而 <code>TURN</code>服务部署位置选择国内外都可以访问的区域，比如购买区域在香港的云服务器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>rtcPcParams:{</span></span>
<span class="line"><span> iceServers: [</span></span>
<span class="line"><span>        { url: &quot;stun:stun.l.google.com:19302&quot;},// 谷歌的公共服务</span></span>
<span class="line"><span>        {urls: &#39;turn:x.x.x.x:3478&#39;, username:&#39;suc&#39;, credential:&#39;suc001&#39;},//turn服务 自建 可以配置多个</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------------参数调用位置-----------------</span></span>
<span class="line"><span>pc = new PeerConnection(this.rtcPcParams)</span></span></code></pre></div><h3 id="流媒体服务地址配置" tabindex="-1">流媒体服务地址配置 <a class="header-anchor" href="#流媒体服务地址配置" aria-label="Permalink to &quot;流媒体服务地址配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//SRS相关地址</span></span>
<span class="line"><span>Vue.prototype.$srsServerAPIURL = &#39;http://192.168.101.99:1985/&#39;;</span></span>
<span class="line"><span>Vue.prototype.$srsServerRTCURL = &#39;webrtc://192.168.101.99:8085/live/&#39;;</span></span>
<span class="line"><span>Vue.prototype.$srsServerFlvURL = &#39;http://192.168.101.99:8085/live/&#39;;</span></span></code></pre></div><p>上面三个地址为全局变量，代码中也是通过全局变量引用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//推流SDP交换</span></span>
<span class="line"><span>axios.post(this.$srsServerAPIURL+&#39;rtc/v1/publish/&#39;,data)</span></span></code></pre></div><p>上面配置的地址，如果你线上使用的<code>HTTPS</code>协议，那么项目内部<code>API</code>请求也需要配置<code>HTTPS</code>，同样可通过<code>nginx</code>代理。</p><h3 id="服务器端口配置" tabindex="-1">服务器端口配置 <a class="header-anchor" href="#服务器端口配置" aria-label="Permalink to &quot;服务器端口配置&quot;">​</a></h3><p>我们在会话过程中会遇到很多端口，部署到线上阿里云、腾讯云等云厂商服务器后，需要去安全组开放特定的端口，这样外部才能进行访问。这里我将常见的需要大家注意的端口着重说明下：</p><ul><li>信令服务器端口：项目中默认配置的<code>18080</code>，大家可以自定义，然后在安全组放行。</li></ul><p><img src="`+p+'" alt="" loading="lazy"></p><ul><li>WebRTC 网关 Janus 服务 API 端口，示例中为<code>18088</code>，安全组需要放行。</li></ul><p><img src="'+t+'" alt="" loading="lazy"></p><ul><li>Janus 网关 RTP 数据交换端口。</li></ul><p><img src="'+o+'" alt="" loading="lazy"></p><ul><li><code>coturn</code>服务端口，看下图红色框框中的端口配置。</li></ul><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="实战部署" tabindex="-1">实战部署 <a class="header-anchor" href="#实战部署" aria-label="Permalink to &quot;实战部署&quot;">​</a></h2><ol><li>前端项目打包。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>npm run build</span></span></code></pre></div><ol start="2"><li>打包好的<code>dist</code>文件夹放到和信令服务同目录。</li></ol><p><img src="'+r+`" alt="" loading="lazy"></p><ol start="3"><li>启动信令服务。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>&gt; node app.js</span></span>
<span class="line"><span>服务器启动成功 *:18080</span></span>
<span class="line"><span>redis 连接成功</span></span></code></pre></div><ol start="4"><li>浏览器输入信令服务 IP+端口。</li></ol><p><img src="`+c+`" alt="" loading="lazy"></p><ol start="5"><li><code>Nginx</code>代理并绑定域名，注意域名配置成自己的，下面示例为我的线上域名。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>  server_name nrtc.wangsrbus.cn;</span></span>
<span class="line"><span>  listen 443 ssl http2;</span></span>
<span class="line"><span>  ssl_certificate /home/nginxWebUI/letsebcrypt/cert.crt;</span></span>
<span class="line"><span>  ssl_certificate_key /home/nginxWebUI/letsebcrypt/private.key;</span></span>
<span class="line"><span>  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>  listen 80;</span></span>
<span class="line"><span>  # http重定向到https</span></span>
<span class="line"><span>  if ($scheme = http) {</span></span>
<span class="line"><span>    return 301 https://$host:443$request_uri;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:18080/; # 这里就是信令服务启动的服务地址,看上一步访问地址</span></span>
<span class="line"><span>    proxy_set_header Host $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Host $http_host;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Port $server_port;</span></span>
<span class="line"><span>    proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    ## 信令核心配置 必须开启支持 websocket </span></span>
<span class="line"><span>    proxy_http_version 1.1;</span></span>
<span class="line"><span>    proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>    proxy_redirect http:// https://;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="ssl-证书自动签发" tabindex="-1">SSL 证书自动签发 <a class="header-anchor" href="#ssl-证书自动签发" aria-label="Permalink to &quot;SSL 证书自动签发&quot;">​</a></h2><p><code>SSL</code>证书有收费的，也有免费的。一般而言，我们在云厂商都可以针对单个域名免费申请 20 次且每次期限一年的<code>SSL</code>证书（下面是腾讯云的截图）。</p><p><img src="`+i+`" alt="" loading="lazy"></p><p>我们的目的肯定是能自动化就自动化，方便维护。这里推荐一个工具：acme (<a href="https://github.com/acmesh-official/acme.sh" target="_blank" rel="noreferrer">Github地址</a>)。通过此工具，我们可以自动申请和续期免费的<code>SSL</code>证书。</p><h3 id="工具下载安装" tabindex="-1"><strong>工具下载安装</strong> <a class="header-anchor" href="#工具下载安装" aria-label="Permalink to &quot;**工具下载安装**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 注意下面的邮箱换成你自己的</span></span>
<span class="line"><span>curl https://get.acme.sh | sh -s email=1215618342@qq.com</span></span></code></pre></div><h3 id="开启自动更新" tabindex="-1"><strong>开启自动更新</strong> <a class="header-anchor" href="#开启自动更新" aria-label="Permalink to &quot;**开启自动更新**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>acme.sh --upgrade --auto-upgrade</span></span></code></pre></div><h3 id="切换-ca-类型" tabindex="-1"><strong>切换 CA 类型</strong> <a class="header-anchor" href="#切换-ca-类型" aria-label="Permalink to &quot;**切换 CA 类型**&quot;">​</a></h3><p>目前 <code>acme.sh</code> 支持四个正式环境 <code>CA</code>，分别是 <code>Let&#39;s Encrypt</code>、<code>Buypass</code>、<code>ZeroSSL</code>和 <code>SSL.com</code>，默认使用 <code>ZeroSSL</code>。我们一般使用<code>Let&#39;s Encrypt</code>就可以，既支持单域名，也支持通配符多域名证书（<strong>虽然通配符类型证书时间仅有3个月，但是好在我们有这个工具</strong>）。切换<code>LE</code>类型命令如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>acme.sh --set-default-ca --server letsencrypt</span></span></code></pre></div><h3 id="泛域名仅支持-dns-验证" tabindex="-1"><strong>泛域名仅支持</strong> <strong>DNS</strong> <strong>验证</strong> <a class="header-anchor" href="#泛域名仅支持-dns-验证" aria-label="Permalink to &quot;**泛域名仅支持** **DNS** **验证**&quot;">​</a></h3><p>申请 API 密钥(DNSPod Token) <a href="https://console.dnspod.cn/account/token/apikey" target="_blank" rel="noreferrer">腾讯云API Key申请</a>，每个厂商的DNS验证参数配置是不一样的额，如果你的域名不是腾讯云的那么请查看<a href="https://github.com/acmesh-official/acme.sh/wiki/dnsapi" target="_blank" rel="noreferrer">此文档</a> 。然后编辑 <code>acme</code>工具配置信息，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>cd ~/.acme.sh</span></span>
<span class="line"><span>vi account.conf</span></span>
<span class="line"><span>## 添加如下 dnspod 密钥</span></span>
<span class="line"><span>export DP_Id=&quot;xxxx&quot;</span></span>
<span class="line"><span>export DP_Key=&quot;12222222222&quot;</span></span></code></pre></div><h3 id="证书申请" tabindex="-1">证书申请 <a class="header-anchor" href="#证书申请" aria-label="Permalink to &quot;证书申请&quot;">​</a></h3><blockquote><p>注意下面参数：dns_dp表示用腾讯云 <code>dnspos</code>验证 <code>-d webrtc.link -d *.webrtc.link</code>表示域名，自己的请配置自己的域名</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>acme.sh --issue --log --dns dns_dp -d webrtc.link -d *.webrtc.link --key-file /home/nginxWebUI/letsebcrypt/private-rtclink.key --fullchain-file /home/nginxWebUI/letsebcrypt/cert-rtclink.crt</span></span></code></pre></div><p>执行脚本后，观察域名解析信息，可以看到会自动增加两条解析：</p><p><img src="`+d+'" alt="" loading="lazy"></p><p>申请成功则会打印如下：</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>我们访问配置对应证书后，查看浏览器对应提示：</p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>这节课后大家主要练习对于会议系统的部署，实际上大多数项目的部署都是如此，学会一种，后续自己的其他项目部署也是得心应手。对于自动签发<code>SSL</code>证书，大家可以多找几个域名试试，去找一年两三块钱那种多练习练习即可。</p>',75),_=[m];function v(x,b,k,y,f,S){return n(),a("div",null,_)}const $=s(g,[["render",v]]);export{C as __pageData,$ as default};
