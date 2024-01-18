import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.qhslougl.image",l="/assets/2.k1-2kxwk.image",t="/assets/3.K2ZMH1Rf.image",i="/assets/4.J4-KaTwW.image",o="/assets/5.r7wo_HKl.image",c="/assets/6.F5yRVtNd.image",r="/assets/7.YavuxJNH.image",d="/assets/8.4xbPZ9WY.image",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/15-WebRTC 网关之插件实战：点对点视频通话媒体控制以及网速监控.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/15-WebRTC 网关之插件实战：点对点视频通话媒体控制以及网速监控.md","lastUpdated":1705542662000}'),u={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/15-WebRTC 网关之插件实战：点对点视频通话媒体控制以及网速监控.md"},g=e(`<p>上节课我们学习了Janus 插件相关的一些基础知识，接下来我们将进行 <code>VideoCall</code>插件的实战，以及用它实现三个比较重要且常用的功能：点对点的视频通话、媒体控制、网速监控。</p><h2 id="点对点视频通话" tabindex="-1">点对点视频通话 <a class="header-anchor" href="#点对点视频通话" aria-label="Permalink to &quot;点对点视频通话&quot;">​</a></h2><p>视频通话的步骤和我们生活中遇到的一样，都是先呼叫，然后等对方应答，对方同意之后我们再继续推送自己的视频流等信息。这些步骤在前面的第一种架构中，我们都是通过自己的 Socket 信令服务器完成对应事件的。但是，现在我们有了 Janus 网关服务之后，这些所有的事件通知，网关都会替我们完成转发，而我们只需要关注页面上对应步骤中的展示逻辑即可。</p><p>我们继续看看 Janus 是如何替我们完成这些操作的。</p><h3 id="网关中注册用户信息" tabindex="-1"><strong>网关中注册用户信息</strong> <a class="header-anchor" href="#网关中注册用户信息" aria-label="Permalink to &quot;**网关中注册用户信息**&quot;">​</a></h3><p>通话的前提是你要知道对方在当前系统的用户名，同时别人也要能在系统中找到你，因此在呼叫开始之前，我们要做的就是注册我们自己的标识信息到当前 <strong>Janus 网关中</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>registerUser(){</span></span>
<span class="line"><span>        var register = { request: &quot;register&quot;, username: this.username };</span></span>
<span class="line"><span>        videoCallPluginHandle.send({ message: register });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注册成功会打印如下：</p><p><img src="`+p+'" alt="" loading="lazy"></p><p>如果重复注册则提示：</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>当然，被呼叫方同样也需要注册到当前的 <strong>Janus 网关中</strong>，否则就会遇到下面的提示：</p><p><img src="'+t+`" alt="" loading="lazy"></p><p>如果注册完成，就可以开始正式通话流程了。</p><h3 id="网关中通话流程响应" tabindex="-1">网关中通话流程响应 <a class="header-anchor" href="#网关中通话流程响应" aria-label="Permalink to &quot;网关中通话流程响应&quot;">​</a></h3><p><strong>呼叫。</strong> 呼叫的代码也很简单（有些参数在下面还是给大家解释下）：</p><ul><li><code>recv</code>： true/false。是否还应接收音频或视频，如果 false，则代表仅发送不接收，可以用于直播 。</li><li><code>type </code>：指定某一类媒体 。音频（audio） /视频（video）/数据通道 （data），这个数据通道就是我们前面课程中学到的 <code>Datachannel </code>。</li><li><code>simulcast</code>: true/false。 对于视频，该轨道是否应该使用联播，这个我们当前课程中用的少，可以不用考虑，当然这也是 Janus 的一大核心优势，深入研究的的同学，可以在留言区或者社群一起讨论下。</li><li><code>capture </code>： 指定媒体设备。 true 则代表使用默认设备，这个设备实际上就是你本地所能加载到的摄像头或者麦克风的 DeviceId 参数，而我们描述时，为了具象化，则直接使用设备代称。具体指定参数： <code>{ deviceId: { exact: videoDeviceId } }</code>。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>call(){</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    videoCallPluginHandle.createOffer({</span></span>
<span class="line"><span>    //双向语音视频+datachannel</span></span>
<span class="line"><span>            tracks: [</span></span>
<span class="line"><span>                    { type: &#39;audio&#39;, capture: true, recv: true },</span></span>
<span class="line"><span>                    { type: &#39;video&#39;, capture: true, recv: true, simulcast: false},</span></span>
<span class="line"><span>                    { type: &#39;data&#39; },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            success: function(jsep) {</span></span>
<span class="line"><span>                    console.log(&quot;SDP协商信息&quot;, jsep);</span></span>
<span class="line"><span>                    //这里指定对方的用户名即可</span></span>
<span class="line"><span>                    var body = { request: &quot;call&quot;, username: that.targetUserName };</span></span>
<span class="line"><span>                    videoCallPluginHandle.send({ message: body, jsep: jsep });</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            error: function(error) {</span></span>
<span class="line"><span>                    console.log(&quot;呼叫异常&quot;,error)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>呼叫方响应。在此环节大家可以按照自己的业务逻辑展示对应信息</strong> <strong>。</strong></p><p><img src="`+i+'" alt="" loading="lazy"></p><p><strong>被呼叫方响应。</strong></p><p><img src="'+o+'" alt="" loading="lazy"></p><p><strong>被叫方应答。</strong></p><p>我们可以在上面截图中看到，在呼叫后，被叫方直接收到信息了，我们中间没有任何其他操作对吧，这就是网关的神奇之处。同时，所有的这些事件都会有回调，我们可以通过这些事件回调处理业务逻辑。比如呼叫后，我们可以在回调中监听到是否呼叫成功，如果成功我们应该弹出什么窗口，被呼叫弹出什么窗体等等。</p><p>继续被叫方这一端，在收到 <code>incomingcall</code>事件后，被叫方要操作接听还是拒绝，如果拒绝，则对方就会收到挂断事件，进而结束呼叫。但是如果被叫方接听呢？请看下面代码：</p><p><img src="'+c+`" alt="" loading="lazy"></p><p>这部分代码截图比较清晰，具体代码大家可以到仓库看到。看截图代码，首先被叫方创建了信令的应答，然后通过全局句柄（<code>pluginHandle</code>）发送给对方，而参数 body 中就是信令。在这里我们能直观地感受到，<strong>除了基础事件被网关替我们默默操作之外，其他的</strong> <strong><code>WebRTC</code></strong> <strong>流程</strong> <strong>，</strong> <strong>实际上也是要我们手动实现的，但是也并不复杂</strong>，从第一节课到现在，这个流程我们已经熟悉得不能再熟悉了。</p><p>被叫方接听后，呼叫端也会收到已接听的事件，此时代表我们双方就可以通话了，比如监听到对方的媒体流后显示在界面上的操作。这里我们再提一下监听事件，虽然上节课我们对 VideoCall 回调函数详解中有讲到，就是下面的部分代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>onlocaltrack: function(track, added) {</span></span>
<span class="line"><span>    // 本地媒体流发布后可以监听</span></span>
<span class="line"><span>   console.log(&quot;本地媒体&quot;,track,added)</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onremotetrack: function(track, mid, added) {</span></span>
<span class="line"><span>    // 远端媒体流</span></span>
<span class="line"><span>  console.log(&quot;远程媒体&quot;,track,mid,added)</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>接收远程媒体流</strong> <strong>，</strong> 收到流之后，将媒体流绑定到对应的 DOM 元素即可。</p><p>需要注意的是，我们在接收到媒体流之后，拿到的流的分辨率也是五花八门，因此在设置样式上，可以将 Video 标签设置为填充（object-fit:fill），这样子即使不同分辨率流过来，最终展示效果都取决于外层容器，以防影响到全局展示样式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>setDomVideoTrick(domId,trick){</span></span>
<span class="line"><span>        let video = document.getElementById(domId)</span></span>
<span class="line"><span>        let stream = video.srcObject</span></span>
<span class="line"><span>        if(stream){</span></span>
<span class="line"><span>                stream.addTrack(trick)</span></span>
<span class="line"><span>        }else {</span></span>
<span class="line"><span>                stream = new MediaStream()</span></span>
<span class="line"><span>                stream.addTrack(trick)</span></span>
<span class="line"><span>                video.srcObject = stream</span></span>
<span class="line"><span>                video.controls = false;</span></span>
<span class="line"><span>                video.autoplay = true;</span></span>
<span class="line"><span>                // video.muted = false</span></span>
<span class="line"><span>                // video.style.width = &#39;100%&#39;</span></span>
<span class="line"><span>                // video.style.height = &#39;100%&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+r+`" alt="" loading="lazy"></p><h2 id="媒体控制" tabindex="-1">媒体控制 <a class="header-anchor" href="#媒体控制" aria-label="Permalink to &quot;媒体控制&quot;">​</a></h2><p>这是本节课的第二个话题，所谓媒体控制就是对我们发送出去的媒体做出变更、暂停、恢复等操作。</p><p>上一节我们在通过客户端 SDK 初始化插件时提到过一个叫做句柄的东西（pluginHandle），实际上在使用 Janus 的网关的过程中，所有的主动或者被动性操作都是可以通过它来实现，媒体控制也是一样的。</p><p>在具体操作之前，我们先看官方 API：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>        &quot;request&quot; : &quot;set&quot;,</span></span>
<span class="line"><span>        &quot;audio&quot; : true|false,</span></span>
<span class="line"><span>        &quot;video&quot; : true|false,</span></span>
<span class="line"><span>        &quot;bitrate&quot; : &lt;numeric bitrate value&gt;,</span></span>
<span class="line"><span>        //其余省略......这节课暂时用不到</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>audio：音频控制。</li><li>video：视频控制。</li><li>bitrate：比特率设置。</li></ul><p>上面三个参数就是我们本节课要实战的，其他的参数暂时不深入探究。有了官方 API，那么我们的代码层面控制按照 API 就可以了，接下来就是实战：</p><p><strong>音频或视频控制设置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//视频控制</span></span>
<span class="line"><span>this.videoStatus = !this.videoStatus</span></span>
<span class="line"><span>videoCallPluginHandle.send({ message:</span></span>
<span class="line"><span>        { request: &quot;set&quot;, video:  this.videoStatus},</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>//音频控制</span></span>
<span class="line"><span>this.audioStatus = !this.audioStatus</span></span>
<span class="line"><span>videoCallPluginHandle.send({ message:</span></span>
<span class="line"><span>        { request: &quot;set&quot;, audio:  this.audioStatus},</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>比特率设置</strong></p><p>大家在实际的使用场景中，肯定是要针对当前客户端的网络状况来设置，如果网络状况较差或者用户的流量不是很多，则可以设置得相对较小一点。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>videoCallPluginHandle.send({ message:</span></span>
<span class="line"><span>        { request: &quot;set&quot;, bitrate: 400*1000 },</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>演示</strong></p><p><img src="`+d+`" alt="" loading="lazy"></p><h2 id="流量速率监控" tabindex="-1">流量速率监控 <a class="header-anchor" href="#流量速率监控" aria-label="Permalink to &quot;流量速率监控&quot;">​</a></h2><p>在视频通话过程中，媒体流量的监控不仅仅可以将会话过程中的<strong>媒体传输信息</strong>以最直观的方式给用户展示出来，同时也可以利用监控到的传输速率优化通话质量，用户端可以直接动态调整媒体发送的速率。</p><p>流量实时监控也离不开我们一直提到的句柄（pluginHandle），具体监控代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>getBitrate(){</span></span>
<span class="line"><span>        //句柄判断 实时输出当前传输速率</span></span>
<span class="line"><span>        if(videoCallPluginHandle){</span></span>
<span class="line"><span>                console.log(videoCallPluginHandle.getBitrate())</span></span>
<span class="line"><span>        }        </span></span>
<span class="line"><span>},</span></span></code></pre></div><p>当然你要使用上面代码的前提同样是已经和对方建立连接，已经通过 Janus 网关打通会话过程。</p><h2 id="本节课相关源码" tabindex="-1">本节课相关源码 <a class="header-anchor" href="#本节课相关源码" aria-label="Permalink to &quot;本节课相关源码&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo04-janus-01.vue" target="_blank" rel="noreferrer">相关源代码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><ol><li>前面的媒体控制部分，我在页面上并没有将比特率设置的动态变更代码写出来，仅留了静态设置的代码，大家可以改造下，让其支持动态输入设置。</li><li>前面动态获取到网速之后，如果你是前端的话，可以将其和网页上的水晶球结合在一起，类似你桌面上动态展示的实时网速。</li></ol>`,56),h=[g];function m(v,_,k,b,q,f){return n(),a("div",null,h)}const P=s(u,[["render",m]]);export{C as __pageData,P as default};
