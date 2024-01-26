import{_ as s,c as n,o as a,V as p}from"./chunks/framework.YbGCv4uC.js";const e="/assets/1.FtUGTNiW.image",l="/assets/2.jKbAi5NS.image",o="/assets/3.8-lDO4u2.image",c="/assets/4.wq75Y_7J.image",i="/assets/5.IZjMZr5K.image",t="/assets/6.iFw1PLlY.image",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/14-WebRTC 网关：项目实战以及插件使用.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/14-WebRTC 网关：项目实战以及插件使用.md","lastUpdated":1706230306000}'),d={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/14-WebRTC 网关：项目实战以及插件使用.md"},r=p('<p>上节我们了解了 <code>Janus</code>，接下来我们来看看如何将 <code>Janus</code> 应用到我们的实际项目中，并通过实战项目实现我们的第二种会议系统架构。</p><p>首先在项目中要使用 <code>Janus</code>，那必不可少的就是要引入对应的调用 API，如果大家翻过官网的话，不难发现在它的文档首页就有对应说明，直接了当地告诉大家 <code>JavaScript API</code>：</p><p><img src="'+e+`" alt="" loading="lazy"></p><p>上面截图第三行中有介绍怎么以 <code>module</code> 引入的，但是对于很多人来说太麻烦，接下来按照我说的步骤，我相信很容易将 <code>Janus</code> 引入项目并初始化看到效果。</p><h2 id="下载官方-js" tabindex="-1"><strong>下载官方</strong> <strong>JS</strong> <a class="header-anchor" href="#下载官方-js" aria-label="Permalink to &quot;**下载官方** **JS**&quot;">​</a></h2><p>官方 <a href="https://github.com/meetecho/janus-gateway/blob/master/html/janus.js" target="_blank" rel="noreferrer">JS 地址</a>，如果不下载，直接拷贝内容到自己创建的 JS 文件也可以，完成内容拷贝后，在这个文件最后加入一行代码，原因是 <code>Janus</code> 所有的操作包括初始化、销毁、加载插件等都是在官方 JS 文件中封装好的，可直接通过该变量控制，因此对外暴露后便于我们在项目中使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// 对外暴露全局变量</span></span>
<span class="line"><span>export default Janus</span></span></code></pre></div><p><img src="`+l+`" alt="" loading="lazy"></p><p>看上图就是我创建的 <code>Janus API</code> 对应的 JS 文件。</p><p>有了 Janus API 文件，接下来给项目安装以下依赖，最新版本即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>&quot;webrtc-adapter&quot;: &quot;^8.2.0&quot;</span></span>
<span class="line"><span>---------</span></span>
<span class="line"><span>npm i webrtc-adapter -S</span></span></code></pre></div><h2 id="使用-janus-api-文件并初始化" tabindex="-1"><strong>使用 Janus</strong> <strong>API</strong> <strong>文件并初始化</strong> <a class="header-anchor" href="#使用-janus-api-文件并初始化" aria-label="Permalink to &quot;**使用 Janus** **API** **文件并初始化**&quot;">​</a></h2><p>在页面上，首先引入的就是上面我们准备的两个模块。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>import adapter from &#39;webrtc-adapter&#39;;</span></span>
<span class="line"><span>import Janus from &quot;@/utils/Janus.js&quot;;</span></span></code></pre></div><p>引入之后，创建初始化 Janus 的 <code>init()</code> 函数。</p><p>请注意下面的 <code>Debug</code>参数，如果开启则控制台会打印一系列 <code>Janus</code> 日志，如果不想看到则可以关闭。与此同时，<code>Janus</code> 封装了一套日志，如果我们将 <code>Janus</code> 放置到全局初始化后，则可以使用该套日志。在后续代码中，如果大家想要项目日志全局可控（比如一键开关等），则可使用 <code>Janus</code> 封装好的日志，这样只需要更改<code>Debug</code>参数就可以全局控制日志输出或者隐藏。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>initJanus(){</span></span>
<span class="line"><span>  const that = this;</span></span>
<span class="line"><span>  Janus.init({</span></span>
<span class="line"><span>        debug: true,</span></span>
<span class="line"><span>        dependencies: Janus.useDefaultDependencies({</span></span>
<span class="line"><span>          adapter: adapter</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        callback: ()=&gt; {</span></span>
<span class="line"><span>          if(!Janus.isWebrtcSupported()) {</span></span>
<span class="line"><span>                Janus.log(&#39;is not Supported Webrtc!&#39;);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  //客户端唯一标识</span></span>
<span class="line"><span>  let opaqueId = &quot;videocall-&quot;+Janus.randomString(12);</span></span>
<span class="line"><span>  console.log(&quot;opaqueId&quot;,opaqueId)</span></span>
<span class="line"><span>        // 注册：</span></span>
<span class="line"><span>  janus = new Janus({</span></span>
<span class="line"><span>                server: &#39;http://1.15.172.xx:18088/janus&#39;,</span></span>
<span class="line"><span>                apisecret:&#39;suc119s119&#39;,</span></span>
<span class="line"><span>                success: function() {</span></span>
<span class="line"><span>                                Janus.log(&quot;初始化成功&quot;)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                error: function(cause) {</span></span>
<span class="line"><span>                                // Error, can&#39;t go on...</span></span>
<span class="line"><span>                                Janus.log(cause)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                destroyed: function() {</span></span>
<span class="line"><span>                                // I should get rid of this</span></span>
<span class="line"><span>                                Janus.log(&quot;destroyed&quot;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>          });            </span></span>
<span class="line"><span>},</span></span></code></pre></div><p>刷新页面查看，如果浏览器控制台打印如下内容，则表明初始化无误。</p><p><img src="`+o+'" alt="" loading="lazy"></p><p>但是如果有<strong>红色提示</strong> <strong>，</strong> <strong>比如什么跨域或者是 403 等异常提示</strong>时，那就说明你的 <code>Janus</code> 配置和自己当前连接的参数不一致。最常见的就是如下错误，你的 <code>Janus</code> 服务配置密钥（我们上一节讲的重点配置 <code>API Secret</code> 参数）和你当前代码中配置的不一致。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>Ooops: 403 Unauthorized request (wrong or missing secret/token)</span></span></code></pre></div><p>初始化 Janus API 之后，我们就要开始使用它的插件了，<code>Janus</code> 最优也是最灵活的特性就是它的插件了。</p><h2 id="即插即拔的插件" tabindex="-1"><strong>即插即拔的插件</strong> <a class="header-anchor" href="#即插即拔的插件" aria-label="Permalink to &quot;**即插即拔的插件**&quot;">​</a></h2><p>为什么说 <code>Janus</code> 的插件 <code>“即插即拔”</code> 呢？因此 <code>Janus</code> 设计的架构就是如此，用到什么则引用什么。</p><p><img src="'+c+`" alt="" loading="lazy"></p><p>看上图我在官网截的一部分图，红色框框中的全部是它的插件 。</p><ul><li><code>VideoCall</code> 代表 P2P 语音视频呼叫插件；</li><li><code>SIP</code> 代表 SIP 服务器插件，可以呼叫转移等等；</li><li><code>VideoRoom</code> 代表多媒体房间插件；</li><li><code>Record&amp;Play</code> 代表视频录制插件。</li></ul><p>还有其他几个我们就不细说了，在本小册中，我们的重点核心就是<strong>实现会议</strong>，会议和前面提到的多媒体房间是不是很类似？是的，因此我们在 <code>Janus</code> 网关应用的核心就是多媒体房间插件，同时如果涉及到房间内画面录制，那么自然少不了视频录制插件。</p><p>好了，了解了插件，接下来我们就实战使用 <code>Janus</code> 丰富的插件，先拿最简单的 P2P 媒体呼叫插件来举例子。</p><h2 id="插件的初始化" tabindex="-1"><strong>插件的初始化</strong> <a class="header-anchor" href="#插件的初始化" aria-label="Permalink to &quot;**插件的初始化**&quot;">​</a></h2><p>在 Janus JavaScript API 中，所有的插件引入格式基本一致，都是按照插件名称来的，大家先看下面的代码，是 <code>videoCall</code> 插件的一些回调函数详解，在后面正式初始化的时候我会简写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>janus.attach(</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        plugin: &quot;janus.plugin.videocall&quot;,</span></span>
<span class="line"><span>        success: function(pluginHandle) {</span></span>
<span class="line"><span>            //插件初始化成功后 pluginHandle 就是全局句柄，通过 pluginHandle可以操作当前</span></span>
<span class="line"><span>            //会话的所有功能</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        error: function(cause) {</span></span>
<span class="line"><span>            //插件初始化失败</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        onmessage: function(msg, jsep) {</span></span>
<span class="line"><span>            //msg 交互信息包括挂断 接听等事件监听</span></span>
<span class="line"><span>            // jsep  协商信令</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        onlocaltrack: function(track, added) {</span></span>
<span class="line"><span>            // 本地媒体流发布后可以监听</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        onremotetrack: function(track, mid, added) {</span></span>
<span class="line"><span>            // 远端媒体流</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        oncleanup: function() {</span></span>
<span class="line"><span>            // PeerConnection 关闭监听</span></span>
<span class="line"><span>            // 同时可以创建信的句柄(旧的可用)重新初始化</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        detached: function() {</span></span>
<span class="line"><span>             // PeerConnection 关闭监听</span></span>
<span class="line"><span>            // 同时可以创建信的句柄（旧的不可用）重新初始化</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>看完了插件的详细信息，接下来我们就要初始化了，但前提是 <code>Janus</code> 已经在当前客户端注册成功，然后才能加载并初始化对应的插件，初始化方法的代码回调函数我保留了两个，其余的和前面详解中的一样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>janus = new Janus({</span></span>
<span class="line"><span>        server: &#39;http://1.15.xx.xx:18088/janus&#39;,</span></span>
<span class="line"><span>        apisecret:&#39;suc119119&#39;,</span></span>
<span class="line"><span>        success: function() {</span></span>
<span class="line"><span>            //Janus 这里初始化成功，然后调用初始化插件的方法</span></span>
<span class="line"><span>            Janus.log(&quot;初始化成功&quot;)</span></span>
<span class="line"><span>            //初始化插件</span></span>
<span class="line"><span>            that.initVideoCallPlugin()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        error: function(cause) {</span></span>
<span class="line"><span>            // Error, can&#39;t go on...</span></span>
<span class="line"><span>            Janus.log(cause)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        destroyed: function() {</span></span>
<span class="line"><span>            // I should get rid of this</span></span>
<span class="line"><span>            Janus.log(&quot;destroyed&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>------------------初始化插件的伪代码---------------------------------</span></span>
<span class="line"><span>initVideoCallPlugin(){</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    janus.attach({</span></span>
<span class="line"><span>            plugin: &quot;janus.plugin.videocall&quot;,</span></span>
<span class="line"><span>            success: function(pluginHandle) {</span></span>
<span class="line"><span>                //插件初始化成功后 pluginHandle 就是全局句柄，通过 pluginHandle可以操作当前</span></span>
<span class="line"><span>                //会话的所有功能</span></span>
<span class="line"><span>                videoCallPluginHandle = pluginHandle</span></span>
<span class="line"><span>                // console.log(&quot;视频呼叫插件初始化成功&quot;,videoCallPluginHandle)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            error: function(cause) {</span></span>
<span class="line"><span>                //插件初始化失败</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><img src="`+i+'" alt="" loading="lazy"></p><p><img src="'+t+'" alt="" loading="lazy"></p><p>上面两个图，第一个就是客户端 <code>Janus</code> 初始化成功后并成功初始化 <code>VideoCall</code> 插件，第二个图为服务器上打印的日志，仔细看里面的几个类似时间戳的长数字，是不是一致？</p><p><strong>在这里要给大家一个温馨提示，每个客户端每次初始化成功都会返回一个 <code>sessionId</code> ，这个 ID 和服务器是互相关联的，如果你的服务器重启</strong> <strong>，</strong> <strong>那么当前客户端的 <code>sessionId</code> 也就没法用了。因此这个初始化过程一定要做全局可控。</strong></p><p>插件既然初始化了，那么怎么使用呢？关键就是我们在前面初始化代码中提到的句柄 <code>pluginHandle</code>，这个句柄可以操作所有的会话操作，比如呼叫、接听、挂断、媒体监控、媒体流控制等。</p><h2 id="课后题" tabindex="-1"><strong>课后题</strong> <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;**课后题**&quot;">​</a></h2><p>这节课的课后题就不扩展新的了，大家按照我说的从头下载 <code>Janus</code> 官方 JS，然后封装到自己的项目中，看看有没有什么问题，同时看看初始化过程中有无异常，会不会出现连接失败等现象。</p>',41),u=[r];function g(h,m,_,J,v,b){return a(),n("div",null,u)}const f=s(d,[["render",g]]);export{k as __pageData,f as default};
