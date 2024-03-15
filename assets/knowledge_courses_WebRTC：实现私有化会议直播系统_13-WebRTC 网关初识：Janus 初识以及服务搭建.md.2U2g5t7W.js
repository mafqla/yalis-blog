import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.VXa0MqOl.image",o="/assets/2.qhCVL1C5.image",t="/assets/3.VHJjSuHC.image",l="/assets/4.TyROMbMI.image",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/13-WebRTC 网关初识：Janus 初识以及服务搭建.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/13-WebRTC 网关初识：Janus 初识以及服务搭建.md","lastUpdated":1710463124000}'),c={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/13-WebRTC 网关初识：Janus 初识以及服务搭建.md"},i=e('<p>这节课我们正式进入第二阶段。实战开始前，我们先来了解下 <code>Janus</code> 是什么，以及我们为何用 <code>Janus</code>？此外，我们还需要补充一个概念：<code>WebRTC</code>网关。</p><p>音视频时代，简单的音视频通话功能已经远远无法承载这个时代的更多需求，比如视频云录制、呼叫转移、视频流 AI 检测、视频流增强、信令暂存、和已有其他通信协议互相嫁接等等。这些庞大且涉及到复杂计算的能力，必须交给具有一定能力的服务来做，因此就有了<code>WebRTC</code>网关，本节课所提到的 Janus 就是其中一种开源且稳定更新的<code>WebRTC</code>网关。</p><blockquote><p><strong>Janus 相关地址</strong></p><ul><li>Janus 官网地址：<a href="https://janus.conf.meetecho.com/docs/" target="_blank" rel="noreferrer">官网</a>。</li><li>Janus 仓库地址：<a href="https://github.com/meetecho/janus-gateway" target="_blank" rel="noreferrer">Github</a>。</li><li>Janus 非官方容器构建仓库 ：<a href="https://github.com/wangsrGit119/janus-webrtc-gateway-docker" target="_blank" rel="noreferrer">Github</a>。</li></ul></blockquote><h2 id="janus-具有的基本功能" tabindex="-1"><strong>Janus 具有的基本功能</strong> <a class="header-anchor" href="#janus-具有的基本功能" aria-label="Permalink to &quot;**Janus 具有的基本功能**&quot;">​</a></h2><ul><li>回声测试、会议桥、媒体记录器、SIP 网关等基本功能。</li><li>可插拔的，按需引入所需的功能，比如<code>会议功能、p2p通信功能、录制功能、播放第三方媒体流、屏幕共享</code>等等，要实现对应功能，可单独引入对应插件，因为 <code>Janus</code> 的设计架构就是插拔式的。</li><li>自带用户统计，只需要按照特定的格式去请求即可，相当于给你提供了 WebSocket 服务器，你只需要按照规范来即可。</li><li>使用<code>json</code>作为向服务器请求服务的参数，简洁。</li><li>事件回调，接受自定义接口作为回调接口传回事件数据。</li></ul><p>看上面的基本功能，我们可以很清晰地知道，有了 <code>Janus</code>，我们就无需自己实现信令服务器。</p><h2 id="janus高级功能" tabindex="-1">Janus高级功能 <a class="header-anchor" href="#janus高级功能" aria-label="Permalink to &quot;Janus高级功能&quot;">​</a></h2><p>看官网的第一眼我们就能够发现，整个首页最突出的一个单词 <code>multistream</code>，这也是 <code>Janus</code> 从 0.X 版本过渡到 1.X 版本的重要体现。这个突出功能允许客户端可以发送多个视频流给客户端，而不用局限于只能发送一个视频流造成需要频繁切换画面的窘境。</p><p>另一个重要的功能就是 <code>simulcast</code>，这个功能允许客户端在单个会话中同时发送多个不同分辨率的视频流。如此一来，接收端就可以根据实际需要动态选择要接收的视频流，提高视频通信的效率和质量。</p><p>大家可以畅想一下，在多人会议中，全部参会人员的网络状况是不是都稳定？和我们看视频一样，视频格式有高清、超清、蓝光、4K 等不同的分辨率，就是为了适应不同客户端、不同的网络状况。</p><p>好了，了解完 <code>Janus</code> 的大体功能，接下来就是实战搭建了。</p><h2 id="网关服务搭建说明" tabindex="-1"><strong>网关服务搭建说明</strong> <a class="header-anchor" href="#网关服务搭建说明" aria-label="Permalink to &quot;**网关服务搭建说明**&quot;">​</a></h2><p><code>Janus</code> 是使用 C++ 开发的，中间使用了很多其他的开源组件，因此环境配置也比较麻烦。但是流行的服务容器化趋势带给我们诸多便利，<code>Janus</code> 也一样有对应的容器版本。大家在 Docker Hub 上输入关键词 <code>janus-webrtc-gateway-docker</code> 就可以看到有很多不同用户构建的容器版本：</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>值得注意的是，前面两个下载量较多的已经是三年前的了，而 <code>Janus</code> 至今已经更新 N 多个版本了，老版本必然会和新版本不适配，请大家看下面官网说明：</p><p><img src="'+o+'" alt="" loading="lazy"></p><p>当然大家无需担心新版本没有对应的容器版本，大家可以看看上面截图中的第三个，这个容器版本是我定期从官网拉取最新代码构建的，和 <code>Janus</code> 新版本对应（ <a href="https://hub.docker.com/r/sucwangsr/janus-webrtc-gateway-docker" target="_blank" rel="noreferrer">DockerHub</a> &amp; <a href="https://github.com/wangsrGit119/janus-webrtc-gateway-docker" target="_blank" rel="noreferrer">Github</a> ）。如下图中左侧是我构建的容器版本，右侧是对应 Janus 的版本，每当它发版我都会去构建最新的容器。</p><p><img src="'+t+'" alt="" loading="lazy"></p><p><strong>服务器搭建</strong></p><ol><li>准备服务器，且下载安装 Docker 和 Docker Compose 环境（这个网上很多我就不再介绍）。</li><li>路径以及配置文件准备（网络不通畅的同学直接使用 <code>GitHub1s</code>打开拷贝内容即可），如果你下载下来了，那么建议你再检查下文件内容是否正确。</li></ol><p><img src="'+l+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>mkdir -p /home/janus-docker/conf</span></span>
<span class="line"><span>mkdir -p /home/janus-docker/ssl</span></span>
<span class="line"><span>mkdir -p /home/janus-docker/record</span></span>
<span class="line"><span>cd /home/janus-docker/conf</span></span>
<span class="line"><span>## 下载下面配置文件 如果网络打不开可以尝试 github 替换为 github1s如上图</span></span>
<span class="line"><span>https://github.com/meetecho/janus-gateway/blob/master/conf/janus.jcfg.sample.in</span></span>
<span class="line"><span>https://github1s.com/meetecho/janus-gateway/blob/master/conf/janus.transport.http.jcfg.sample</span></span>
<span class="line"><span>mv janus.jcfg.sample.in janus.jcfg</span></span>
<span class="line"><span>mv janus.transport.http.jcfg.sample janus.transport.http.jcfg</span></span>
<span class="line"><span>## 后面我们还会遇到各种插件同样的下载方法 最核心的就是上面俩个</span></span></code></pre></div><ol start="3"><li>docker-compose 文件创建以及路径挂载。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>cd /home/janus-docker &amp;&amp; touch docker-compose.yml</span></span>
<span class="line"><span>-------------------yaml文件内容配置-------------------------------</span></span>
<span class="line"><span>version: &#39;1.1.0&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  janus-gateway:</span></span>
<span class="line"><span>    image: &#39;sucwangsr/janus-webrtc-gateway-docker:20221018&#39;</span></span>
<span class="line"><span>    command: [&quot;/usr/local/bin/janus&quot;, &quot;-F&quot;, &quot;/usr/local/etc/janus&quot;]</span></span>
<span class="line"><span>    network_mode: &quot;host&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - &quot;/home/janus-docker/conf/janus.transport.http.jcfg:/usr/local/etc/janus/janus.transport.http.jcfg&quot; </span></span>
<span class="line"><span>      - &quot;/home/janus-docker/conf/janus.jcfg:/usr/local/etc/janus/janus.jcfg&quot;</span></span>
<span class="line"><span>      - &quot;/home/janus-docker/record:/home/janus-gateway/record&quot;</span></span>
<span class="line"><span>      - &quot;/home/janus-docker/ssl:/home/ssl&quot;</span></span>
<span class="line"><span>    restart: always</span></span></code></pre></div><ol start="4"><li>修改基础配置。</li></ol><blockquote><p><code>janus.jcfg</code> 中找下面条目配置修改，一定要注意找到对应的位置哦。</p><p><code>api_secret</code> 为我们后面常用的重点配置，Rest API 的通行证。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>##新版本中下面这几个路径在配置文件中是@@变量赋值，这里大家可以直接写成下面的</span></span>
<span class="line"><span>configs_folder = &quot;/usr/local/etc/janus&quot;                        </span></span>
<span class="line"><span>plugins_folder = &quot;/usr/local/lib/janus/plugins&quot;                   </span></span>
<span class="line"><span>transports_folder = &quot;/usr/local/lib/janus/transports&quot;     </span></span>
<span class="line"><span>events_folder = &quot;/usr/local/lib/janus/events&quot;                    </span></span>
<span class="line"><span>loggers_folder = &quot;/usr/local/lib/janus/loggers&quot;</span></span>
<span class="line"><span>-------------------------</span></span>
<span class="line"><span>api_secret = &quot;sujanxxusrocks&quot;  ## 客户端使用restApi用的token 请自行配置自己的(重点配置)</span></span>
<span class="line"><span>token_auth_secret = &quot;sujanxxusrocks&quot; ## 使用ws使用的token 请自行配置自己的</span></span>
<span class="line"><span>token_auth = true  ## 使用开启校验ws</span></span>
<span class="line"><span>admin_secret = &quot;suaanusoverlord&quot;  #管理员 请自行配置自己的</span></span>
<span class="line"><span>---------------</span></span>
<span class="line"><span>media: {</span></span>
<span class="line"><span>        #ipv6 = true</span></span>
<span class="line"><span>        #min_nack_queue = 500</span></span>
<span class="line"><span>        rtp_port_range = &quot;17001-19001&quot; ##  请开放公网服务器的安全组(UDP)</span></span>
<span class="line"><span>        #dtls_mtu = 1200</span></span>
<span class="line"><span>        #no_media_timer = 1</span></span>
<span class="line"><span>        #slowlink_threshold = 4</span></span>
<span class="line"><span>        #twcc_period = 100</span></span>
<span class="line"><span>        #dtls_timeout = 500</span></span>
<span class="line"><span>。。。。。</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>-----------------</span></span>
<span class="line"><span>## 当然还有其他的配置 比如stun 、turn、nat_1_1_mapping等这里先不用管</span></span></code></pre></div><blockquote><p><code>janus.transport.http.jcfg</code> 配置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>general: {                                                </span></span>
<span class="line"><span>        base_path = &quot;/janus&quot;      #基础路径</span></span>
<span class="line"><span>        http = true            # http开启  </span></span>
<span class="line"><span>        port = 18088            #http端口                              </span></span>
<span class="line"><span>        https = false           #https是否启用配置；启用的话后面就要配置ssl证书。</span></span></code></pre></div><ol start="5"><li>启动。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>cd /home/janus-docker </span></span>
<span class="line"><span>docker-compose up -d</span></span>
<span class="line"><span>## 启动完毕后</span></span>
<span class="line"><span>docker-compose logs -f</span></span>
<span class="line"><span>------------------部分日志-------------------------</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading plugin &#39;libjanus_echotest.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS EchoTest plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading plugin &#39;libjanus_audiobridge.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Joining Janus requests handler thread</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Sessions watchdog started</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS AudioBridge plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading plugin &#39;libjanus_recordplay.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS Record&amp;Play plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading plugin &#39;libjanus_sip.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS SIP plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading plugin &#39;libjanus_streaming.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS Streaming plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Transport plugins folder: /usr/local/lib/janus/transports</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading transport plugin &#39;libjanus_websockets.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | libwebsockets logging: 0</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Websockets server started (port 8188)...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS WebSockets transport plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Loading transport plugin &#39;libjanus_http.so&#39;...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | WebSockets thread started</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | HTTP webserver started (port 18088, /janus path listener)...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | Admin/monitor HTTP webserver started (port 18089, /adminsuc path listener)...</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | JANUS REST (HTTP/HTTPS) transport plugin initialized!</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | [WARN] libnice version outdated: 0.1.15.1 installed, at least 0.1.16 recommended. Notice the installed version was checked at build time: if you updated libnice in the meanwhile, re-configure and recompile to get rid of this warning</span></span>
<span class="line"><span>janus-docker-janus-gateway-1  | HTTP transport timer started</span></span></code></pre></div><p><strong>温馨提示</strong></p><p>搭建过程中我们需要注意的几个点：</p><ol><li><code>rtp_port_range</code>：RTP 端口配置，<code>Janus</code> 作为 <code>WebRTC 的网关</code>，最离不开的就是和 “流” 打交道，WebRTC 实现的视频音频通话，涉及到的所有的媒体流发送和接收，都是 通过RTP 协议包。网关也一样，在每个客户端和网关服务器连接的过程中，这个流首先是要经过 <code>Janus</code> 的。因此，这个端口必须要放行，<code>Janus</code> 是自己配置了端口的，但是有些时候，我们不方便将该区间的端口开放，因此这个参数的目的就是让我们可以动态更改默认的 RTP 端口。</li><li><code>http/https</code>：这俩参数大家可以同时启用，也可以只用其中一个，我建议是只开放 Http 即可，要想使用 Https ，则可以通过该服务器指定的域名搭配 Nginx 代理映射即可，这样就无需单独为 <code>Janus</code> 维护一份 Https 证书。</li><li>我在配置中注释的配置文件路径，这些路径在老版本中都是放行且固定的，无需自己配置。但是新版本中这些路径是要自己手动打开且自行配置的。</li><li><strong><code>nat_1_1_mapping</code>：这个参数在内网映射公网时是用的到的，比如你的内部地址：192.168.101.1，要映射到公网 x.x.x.x，那么你就要配置这个参数。尤其你的<code>Janus</code>部署在公网，那么这个地址填写公网IP，当然一般私有化都是在内网的，可以不用处理</strong>。</li></ol><p>好了，这节课我们了解了<code>WebRTC</code>网关 <code>Janus</code>，同时也在服务器上搭建了该网关，下节课我们来学习如何将 Janus 用到我们的实际项目中。</p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>自己按照上面的步骤，完整部署一个 <code>Janus</code> 网关服务。</p>`,37),r=[i];function u(d,g,h,j,m,k){return n(),a("div",null,r)}const w=s(c,[["render",u]]);export{b as __pageData,w as default};
