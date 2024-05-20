import{_ as s,c as n,o as a,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.JPdYOCnh.image",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/12-网络配置：Coturn 网络穿透服务器的搭建及使用.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/12-网络配置：Coturn 网络穿透服务器的搭建及使用.md","lastUpdated":1716173138000}'),l={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/12-网络配置：Coturn 网络穿透服务器的搭建及使用.md"},t=e(`<p>这节课我们来说说 Coturn 网络打洞服务器， Coturn 是一个开源的 TURN &amp; STUN 服务器，<a href="https://github.com/coturn/coturn" target="_blank" rel="noreferrer">Github地址</a>。</p><p>这里又扯到了 TURN 和 STUN 两个特别的东西，在具体介绍这两个名词的知识前，我们先看看在用 <code>WebRTC</code>进行视频通话过程中会遇到什么问题。</p><p>需要知道的是， <code>WebRTC</code>进行通话过程中是没有任何视频服务器的，所有的 RTP 数据包都是直接通过双方的 IP 和对应的端口进行发送和传输的（大家感兴趣的话，可以尝试用 GB28181 和监控摄像头交互然后获取监控的 RTP 包 ）。</p><p>因此通常在开始通话之前，就必须进行 ICE 协商获取双方的 IP 以及端口，如果通话是区域网则简单，直接区域网 IP 即可，但通话如果是在公共复杂网络，且客户端并未直接接入公共网路，而是仅接入到本地 <code>NAT 网关</code>中呢？</p><p>此时是无法直接获取通话客户端的公有 IP 的。这个时候就需要特定的东西去<strong>获取客户端真实且互相可以抵达的公有 IP</strong>，而 STUN 服务器的作用就是干这个的，有了它就可以让通话双方发现对方的公共通讯地址。</p><p>接上面，能发现公有地址不代表就能进行通话，进行通话的前提是允许客户端能够在相应端口进行上行和下行数据的发送和接收。就好比你电脑启动了一个服务但是防火墙是开着的，那么别人访问你的服务还是没法访问的。此时 TURN 来了，<strong>它的作用就是充当双方中继地址，将双方的流量中继到当前服务器从而实现双方流量的交换</strong>。</p><h2 id="打洞服务器的搭建" tabindex="-1"><strong>打洞服务器的搭建</strong> <a class="header-anchor" href="#打洞服务器的搭建" aria-label="Permalink to &quot;**打洞服务器的搭建**&quot;">​</a></h2><p>为了让大家免于各种复杂环境的困扰，我们使用容器来搭建。</p><ol><li>首先提前下载对应的配置文件：<a href="https://github.com/coturn/coturn/blob/master/docker/coturn/turnserver.conf" target="_blank" rel="noreferrer">官方文件</a>。</li></ol><ol start="2"><li>修改重要的配置，<strong>注意不是替换，是找到下面配置的地址</strong>，注意看每个配置的描述。</li></ol><blockquote><p>在纯内网环境，很多时候服务器只有一个 IP ，因此下面遇到的 IP 配置都配置同一个，而 realm 使用默认即可，无需配置。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>#中继服务器监听的IP地址，可以指定多个IP  最好直接写 ip addr  输出的etho的ip</span></span>
<span class="line"><span>listening-ip=10.0.4.3</span></span>
<span class="line"><span>listening-port=3478</span></span>
<span class="line"><span>#中继服务器转发地址(本地IP地址将用于传递数据包的给每个端)，最好直接写 ip addr 输出的eth1的ip,不存在则直接公网IP</span></span>
<span class="line"><span>relay-ip=10.0.4.3</span></span>
<span class="line"><span>#外部IP,直接写公网IP地址</span></span>
<span class="line"><span>external-ip=115.15.172.71</span></span>
<span class="line"><span># 中继线程，如果服务器资源充足可以适当扩大，最大不能超过 50</span></span>
<span class="line"><span>relay-threads=2</span></span>
<span class="line"><span>#打开密码验证，使用短期证书机制。</span></span>
<span class="line"><span>lt-cred-mech</span></span>
<span class="line"><span>#UDP端口 下面默认就有 可以自定义自己想要的区间 这个就是中继流量转发的端口</span></span>
<span class="line"><span>min-port=17001</span></span>
<span class="line"><span>max-port=19001</span></span>
<span class="line"><span>#turn服务器的用户和凭据</span></span>
<span class="line"><span>user=suke:suke119119</span></span>
<span class="line"><span>#打开下面DB关闭mysql DB ，</span></span>
<span class="line"><span>userdb=/var/lib/coturn/turndb</span></span>
<span class="line"><span>##mysql-userdb xxxxxxxxxxxxxxxxxxx ##注释</span></span>
<span class="line"><span>## 这里可以不用管，公网需要的则可以配置对应的域名</span></span>
<span class="line"><span>realm=example.cn </span></span>
<span class="line"><span>## 配置日志输出，用户后面直接重定向到容器日志</span></span>
<span class="line"><span>log-file=stdout # 注释 sys-log</span></span></code></pre></div><ol start="3"><li>挂载配置文件位置启动容器。</li></ol><blockquote><p>Coturn 我这里指定的镜像为 4.6 版本的，如果有新的，大家可以尝试最新稳定版本。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>sudo docker run -d --privileged=true --name=mycoturn   --network=host \\</span></span>
<span class="line"><span>           -v /home/ubuntu/turnserver/turnserver.conf:/my/turnserver.conf \\</span></span>
<span class="line"><span>       coturn/coturn:4.6 -c /my/turnserver.conf</span></span></code></pre></div><ol start="4"><li>日志。</li></ol><blockquote><p>下面的 167.160.189.179 IP 为我搭建的启动成功后的日志。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>root@C20220407114397:~# docker logs -f mycoturn</span></span>
<span class="line"><span>0: : Listener address to use: 167.160.189.179</span></span>
<span class="line"><span>0: : Listener address to use: 167.160.189.179</span></span>
<span class="line"><span>0: : Relay address to use: 167.160.189.179</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span>RFC 3489/5389/5766/5780/6062/6156 STUN/TURN Server</span></span>
<span class="line"><span>Version Coturn-4.6.0 &#39;Gorst&#39;</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span>Max number of open files/sockets allowed for this process: 1048576</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span>Due to the open files/sockets limitation,</span></span>
<span class="line"><span>max supported number of TURN Sessions possible is: 524000 (approximately)</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span></span></span>
<span class="line"><span>==== Show him the instruments, Practical Frost: ====</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0: : TLS supported</span></span>
<span class="line"><span>0: : DTLS supported</span></span>
<span class="line"><span>0: : DTLS 1.2 supported</span></span>
<span class="line"><span>0: : TURN/STUN ALPN supported</span></span>
<span class="line"><span>0: : Third-party authorization (oAuth) supported</span></span>
<span class="line"><span>0: : GCM (AEAD) supported</span></span>
<span class="line"><span>0: : OpenSSL compile-time version: OpenSSL 1.1.1n  15 Mar 2022 (0x101010ef)</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span>0: : SQLite supported, default database location is /var/lib/coturn/turndb</span></span>
<span class="line"><span>0: : Redis supported</span></span>
<span class="line"><span>0: : PostgreSQL supported</span></span>
<span class="line"><span>Cannot create pid file: /var/run/turnserver.pid: Permission denied</span></span>
<span class="line"><span>0: : MySQL supported</span></span>
<span class="line"><span>0: : MongoDB supported</span></span>
<span class="line"><span>0: : </span></span>
<span class="line"><span>0: : Default Net Engine version: 3 (UDP thread per CPU core)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>=====================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0: : Domain name: </span></span>
<span class="line"><span>0: : Default realm: example.org</span></span>
<span class="line"><span>0: : WARNING: cannot find certificate file: /etc/ssl/certs/cert.pem (1)</span></span>
<span class="line"><span>0: : WARNING: cannot start TLS and DTLS listeners because certificate file is not set properly</span></span>
<span class="line"><span>0: : WARNING: cannot find private key file: /etc/ssl/private/privkey.pem (1)</span></span>
<span class="line"><span>0: : WARNING: cannot start TLS and DTLS listeners because private key file is not set properly</span></span>
<span class="line"><span>0: : Cannot create pid file: /var/run/turnserver.pid</span></span>
<span class="line"><span>0: : pid file created: /var/tmp/turnserver.pid</span></span>
<span class="line"><span>0: : IO method (main listener thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : WARNING: I cannot support STUN CHANGE_REQUEST functionality because only one IP address is provided</span></span>
<span class="line"><span>0: : Wait for relay ports initialization...</span></span>
<span class="line"><span>0: :   relay 167.160.189.179 initialization...</span></span>
<span class="line"><span>0: :   relay 167.160.189.179 initialization done</span></span>
<span class="line"><span>0: : Relay ports initialization done</span></span>
<span class="line"><span>0: : IO method (general relay thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : turn server id=0 created</span></span>
<span class="line"><span>You must obtain superuser privileges to bind a socket to device: Operation not permitted</span></span>
<span class="line"><span>0: : Cannot bind listener socket to device ens17</span></span>
<span class="line"><span>0: : IPv4. SCTP listener opened on : 167.160.189.179:3478</span></span>
<span class="line"><span>You must obtain superuser privileges to bind a socket to device: Operation not permitted</span></span>
<span class="line"><span>0: : Cannot bind listener socket to device ens17</span></span>
<span class="line"><span>0: : IPv4. TCP listener opened on : 167.160.189.179:3478</span></span>
<span class="line"><span>0: : IO method (general relay thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : turn server id=1 created</span></span>
<span class="line"><span>0: : Total General servers: 2</span></span>
<span class="line"><span>0: : IO method (auth thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : IO method (admin thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : IO method (auth thread): epoll (with changelist)</span></span>
<span class="line"><span>0: : IPv4. CLI listener opened on : 127.0.0.1:5766</span></span>
<span class="line"><span>0: : SQLite DB connection success: /var/lib/coturn/turndb</span></span>
<span class="line"><span>0: : Prometheus collector disabled, not started.</span></span></code></pre></div><ol start="5"><li>测试是否成功。</li></ol><p>最简单的方法是直接在浏览器输入服务器 <code>IP:3478</code>，然后看输出日志，如果输出以下类似日志，则大概率部署成功。</p><blockquote><p>可以注意到日志中 username 的值。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>86396: : session 001000000000000001: usage: realm=&lt;example.org&gt;, username=&lt;&gt;, rp=1, rb=20, sp=1, sb=88</span></span>
<span class="line"><span>86396: : session 001000000000000001: peer usage: realm=&lt;example.org&gt;, username=&lt;&gt;, rp=0, rb=0, sp=0, sb=0</span></span>
<span class="line"><span>86396: : session 001000000000000001: closed (2nd stage), user &lt;&gt; realm &lt;example.org&gt; origin &lt;&gt;, local 167.160.189.179:3478, remote 146.88.240.4:36837, reason: allocation watchdog determined stale session state</span></span>
<span class="line"><span>98891: : session 001000000000000002: usage: realm=&lt;example.org&gt;, username=&lt;&gt;, rp=1, rb=20, sp=1, sb=88</span></span>
<span class="line"><span>98891: : session 001000000000000002: peer usage: realm=&lt;example.org&gt;, username=&lt;&gt;, rp=0, rb=0, sp=0, sb=0</span></span>
<span class="line"><span>98891: : session 001000000000000002: closed (2nd stage), user &lt;&gt; realm &lt;example.org&gt; origin &lt;&gt;, local 167.16</span></span></code></pre></div><h2 id="项目中使用" tabindex="-1"><strong>项目中使用</strong> <a class="header-anchor" href="#项目中使用" aria-label="Permalink to &quot;**项目中使用**&quot;">​</a></h2><ol><li>代码配置</li></ol><p><strong>iceTransportPolicy</strong> 配置表示所有配置此参数的客户端在通话的时候都走 Turn 服务器中继。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//全局变量</span></span>
<span class="line"><span>rtcPcParams:{</span></span>
<span class="line"><span>        iceTransportPolicy: &#39;relay&#39;, //强制走中继</span></span>
<span class="line"><span>        iceServers: [</span></span>
<span class="line"><span>             {urls: &#39;turn:167.160.189.179:3478&#39;, username:&#39;suc&#39;, credential:&#39;suc001&#39;},</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span> //初始化RTC和核心对象时配置此参数</span></span>
<span class="line"><span> let pc = new PeerConnection(that.rtcPcParams)</span></span></code></pre></div><ol start="2"><li>中继日志</li></ol><blockquote><p>注意看 username 字段以及后面的 incoming packet。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>519121: : session 000000000000000016: delete: realm=&lt;example.org&gt;, username=&lt;suc&gt;</span></span>
<span class="line"><span>519212: : session 000000000000000017: peer 192.168.0.49 lifetime updated: 600</span></span>
<span class="line"><span>519212: : session 000000000000000017: realm &lt;example.org&gt; user &lt;suc&gt;: incoming packet CHANNEL_BIND processed, success</span></span>
<span class="line"><span>519212: : session 001000000000000026: peer 192.168.0.49 lifetime updated: 600</span></span>
<span class="line"><span>519212: : session 001000000000000026: realm &lt;example.org&gt; user &lt;suc&gt;: incoming packet CHANNEL_BIND processed, success</span></span>
<span class="line"><span>519272: : session 001000000000000026: refreshed, realm=&lt;example.org&gt;, username=&lt;suc&gt;, lifetime=600</span></span>
<span class="line"><span>519272: : session 001000000000000026: realm &lt;example.org&gt; user &lt;suc&gt;: incoming packet REFRESH processed, success</span></span>
<span class="line"><span>519272: : session 000000000000000017: refreshed, realm=&lt;example.org&gt;, username=&lt;suc&gt;, lifetime=600</span></span>
<span class="line"><span>519272: : session 000000000000000017: realm &lt;example.org&gt; user &lt;suc&gt;: incoming packet REFRESH processed, success</span></span>
<span class="line"><span>519452: : session 001000000000000026: realm &lt;example.org&gt;</span></span></code></pre></div><h2 id="温馨提示" tabindex="-1">温馨提示 <a class="header-anchor" href="#温馨提示" aria-label="Permalink to &quot;温馨提示&quot;">​</a></h2><p>从前面的代码配置和部署中，我们基本上看到的只有 TURN 服务的配置和使用，中间并没有提到 STUN ，实际上在你部署启动 Coturn 服务的那一刻起，当前服务就已经支持 STUN 了，大家可以看启动成功的日志：</p><p><img src="`+p+'" alt="" loading="lazy"></p><p>因此如果你的 TURN 服务已经没问题了，那么 STUN 服务必然没有问题的，在你的代码中配置的时候，你可以同时配置 STUN 和 TURN 服务，我代码中为了演示，并没有使用 STUN 服务，因为我不想让网络流量都走自己的网络，而是走 TURN 服务，如此我就可以直观地看到流量包的走向。</p><p>在实际场景中，尤其涉及到网络比较严格或者不容易抵达，尤其是防火墙限制很严重的情况下，此时我也是建议单独使用性能较好的服务器部署 Coturn 服务，让所有的流量全部都中继服务器，避免 ICE 协商失败导致无法进行通话。</p><h2 id="课后作业" tabindex="-1">课后作业 <a class="header-anchor" href="#课后作业" aria-label="Permalink to &quot;课后作业&quot;">​</a></h2><p>本节课，我们主要讨论了复杂的网络环境中如何使用打洞服务器保证通话成功率，课后大家试试在多人会议聊天的时候强制中继配置后，TURN 服务器的性能变化以及网络流量的变化。以及关闭该服务器后视频通话能否再进行呢？</p>',36),i=[t];function o(r,c,d,u,m,g){return a(),n("div",null,i)}const v=s(l,[["render",o]]);export{b as __pageData,v as default};
