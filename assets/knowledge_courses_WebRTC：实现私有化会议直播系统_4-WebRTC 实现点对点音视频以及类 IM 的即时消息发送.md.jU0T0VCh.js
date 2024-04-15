import{_ as a,c as s,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.GdGsww77.image",o="/assets/2.cVFBHz0b.image",l="/assets/3.qaw5cqD4.image",c="/assets/4.sxWdnwJw.image",t="/assets/5.gIp0iXnT.image",i="/assets/6.LdU97KSJ.image",d="/assets/7.zFIRFPBD.image",r="/assets/8.y8vUXKX0.image",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/4-WebRTC 实现点对点音视频以及类 IM 的即时消息发送.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/4-WebRTC 实现点对点音视频以及类 IM 的即时消息发送.md","lastUpdated":1713143248000}'),h={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/4-WebRTC 实现点对点音视频以及类 IM 的即时消息发送.md"},u=e(`<p>前面我们熟悉了<code>WebRTC</code>的核心对象<code>PeerConnection</code>，也了解了核心对象的一些基本方法；后面我们也分析了<code>WebRTC</code>的会话过程，以及中间需要调用哪些方法；最后我们通过 <code>nodejs</code>搭建了最基本的信令服务器。接下来我们就开始用代码还原前面的<code>WebRTC</code>的基本会话流程。</p><p>后续<code>pc</code>代表<code>PeerConnection</code>, <code>caller</code>为<code>A</code>，<code>callee</code>为<code>B</code>举例。</p><h2 id="p2p音视频实战" tabindex="-1">P2P音视频实战 <a class="header-anchor" href="#p2p音视频实战" aria-label="Permalink to &quot;P2P音视频实战&quot;">​</a></h2><p><strong>首先，呼叫方<code>A</code>。</strong></p><blockquote><p><code>localRtcPc</code>为本地实例化后的<code>PeerConnection</code>实例，与前面整体流程有差异的地方是，我们现在在初始化 <code>pc</code> 后，直接同步获取本地摄像头和音频输入并添加到 <code>pc</code> 中。初始获取媒体流需要一定时间响应，如果在乎创建连接时间的，这一步可异步完成。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async initCallerInfo(callerId,calleeId){</span></span>
<span class="line"><span>    //初始化pc</span></span>
<span class="line"><span>    this.localRtcPc = new PeerConnection()</span></span>
<span class="line"><span>    //获取本地媒体并添加到pc中</span></span>
<span class="line"><span>    let localStream = await this.getLocalUserMedia({ audio: true, video: true })</span></span>
<span class="line"><span>    for (const track of localStream.getTracks()) {</span></span>
<span class="line"><span>        this.localRtcPc.addTrack(track);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      //本地dom渲染</span></span>
<span class="line"><span>    await this.setDomVideoStream(&quot;localdemo01&quot;,localStream)</span></span>
<span class="line"><span>    //回调监听</span></span>
<span class="line"><span>    this.onPcEvent(this.localRtcPc,callerId,calleeId)</span></span>
<span class="line"><span>    //创建offer</span></span>
<span class="line"><span>    let offer = await this.localRtcPc.createOffer();</span></span>
<span class="line"><span>    //设置offer未本地描述</span></span>
<span class="line"><span>    await this.localRtcPc.setLocalDescription(offer)</span></span>
<span class="line"><span>    //发送offer给被呼叫端</span></span>
<span class="line"><span>    let params = {&quot;targetUid&quot;:calleeId,&quot;userId&quot;:callerId,&quot;offer&quot;:offer}</span></span>
<span class="line"><span>    this.linkSocket.emit(&quot;offer&quot;,params)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>A 呼叫 B 后双方同意建立通信，A 首先初始化 <code>pc</code>，代码中的<code>localRtcPc </code>。</li></ul><ul><li>然后 A 初始化本地<code>mediaStream</code>，并添加到 pc 对象中，同时渲染在本地预览 DOM 元素。</li></ul><ul><li>初始化回调信息，比如 <code>ontrack</code>（监听B端媒体），<code>onicecandidate</code>（双方 ICE 候选信息）事件等。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>onPcEvent(pc,localUid,remoteUid){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        this.channel = pc.createDataChannel(&quot;chat&quot;);</span></span>
<span class="line"><span>        pc.ontrack = function(event) {</span></span>
<span class="line"><span>                that.setRemoteDomVideoStream(&quot;remoteVideo01&quot;,event.track)</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        pc.onnegotiationneeded = function(e){</span></span>
<span class="line"><span>                console.log(&quot;重新协商&quot;,e)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pc.ondatachannel = function(ev) {</span></span>
<span class="line"><span>          console.log(&#39;Data channel is created!&#39;);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        pc.onicecandidate = (event) =&gt; {</span></span>
<span class="line"><span>          if (event.candidate) {</span></span>
<span class="line"><span>                that.linkSocket.emit(&#39;candidate&#39;,{&#39;targetUid&#39;:remoteUid,&quot;userId&quot;:localUid,&quot;candidate&quot;:event.candidate})</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>            /* 在此次协商中，没有更多的候选了 */</span></span>
<span class="line"><span>                console.log(&quot;在此次协商中，没有更多的候选了&quot;)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>创建<code>offer</code>信令设置为本地描述后发送给 B 。</li></ul><ul><li>等 B 创建应答信令之后，信令服务器会将其转发到 A 这边。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async onRemoteAnswer(fromUid,answer){</span></span>
<span class="line"><span>    await this.localRtcPc.setRemoteDescription(answer);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>A 接受 B 的 <code>answer</code>信令后，将其设置为 <code>remoteDesc </code>。</li></ul><p><img src="`+p+`" alt="" loading="lazy"></p><blockquote><p><strong>注意看日志中的<code>candidate</code>，这个过程是贯穿整个会话的，直到<code>ice</code>候选完成。</strong></p></blockquote><p><strong>被呼叫端<code>B</code>。</strong></p><blockquote><p>被呼叫端的过程和呼叫端类似，大体代码如下：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async initCalleeInfo(localUid,fromUid){</span></span>
<span class="line"><span>        //初始化pc</span></span>
<span class="line"><span>        this.localRtcPc = new PeerConnection()</span></span>
<span class="line"><span>        //初始化本地媒体信息</span></span>
<span class="line"><span>        let localStream = await this.getLocalUserMedia({ audio: true, video: true })</span></span>
<span class="line"><span>        for (const track of localStream.getTracks()) {</span></span>
<span class="line"><span>            this.localRtcPc.addTrack(track);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          //dom渲染</span></span>
<span class="line"><span>        await this.setDomVideoStream(&quot;localdemo01&quot;,localStream)</span></span>
<span class="line"><span>        //监听</span></span>
<span class="line"><span>        this.onPcEvent(this.localRtcPc,localUid,fromUid)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><ul><li>B 接听后同时初始化 pc。</li></ul><ul><li>B 创建本地<code>mediaStream</code>，并添加到 pc 对象中，同时渲染在本地预览 Dom 元素。</li></ul><ul><li>同 A 初始化回调监听。</li></ul><ul><li>当然此时 A 发送的<code>offer</code>信令通过信令服务器转发到 B 这边，B 将其设置为<code>remoteDesc</code>后，同时创建<code>answer</code>信令。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async onRemoteOffer(fromUid,offer){</span></span>
<span class="line"><span>    //B接受到A的offer 设置为remote desc</span></span>
<span class="line"><span>    this.localRtcPc.setRemoteDescription(offer)</span></span>
<span class="line"><span>    //创建应答</span></span>
<span class="line"><span>    let answer = await this.localRtcPc.createAnswer();</span></span>
<span class="line"><span>    //设置为local desc</span></span>
<span class="line"><span>    await this.localRtcPc.setLocalDescription(answer);</span></span>
<span class="line"><span>    //并通过信令服务器发送给A</span></span>
<span class="line"><span>    let params = {&quot;targetUid&quot;:fromUid,&quot;userId&quot;:getParams(&quot;userId&quot;),&quot;answer&quot;:answer}</span></span>
<span class="line"><span>    this.linkSocket.emit(&quot;answer&quot;,params)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>至此，所有的会话建立完成，在双方监听的 pc 核心方法<code>ontrack</code>中，就能拿到双方的音频和视频信息了，完整的代码我会放在文末，大家自取即可。不过纸上得来终觉浅，还需要你自己在实践中理解，这才是掌握最快速的。</p><p><img src="`+o+'" alt="" loading="lazy"></p><p>大家可以看下下图中具体的 <code>SDP</code>信息，实际上都是<code>WebRTC</code>封装好的，不需要我们去组装，如果你认真从前面看的，应该很容易理解，完成一个 P2P 的视频通话是不是很简单？</p><p><strong>不过我先打个预防针：在真正的复杂网络环境中</strong> <strong>，</strong> <strong>我们需要考虑的还有很多，如果之前大家了解过</strong> <strong><code>WebRTC</code></strong> <strong>相关的知识，一定对</strong> <strong>stun 和 turn</strong> <strong>这几个词不陌生，我们暂时不考虑这个，</strong> <strong>从最简单的网络环境中开始</strong> <strong>，完成我们的目标。</strong></p><p><img src="'+l+`" alt="" loading="lazy"></p><p><strong>通话过程中媒体流的变更</strong></p><p>完成以上视频通话，可能有人会问，怎么实现类似微信视频中，视频和音频之间随意切换，或摄像头前置后置切换呢？</p><p>这里我们就需要再学习一个知识点：<code>RTCRtpSender</code>对象。这个对象的接口支持变更你发送到对方的媒体，通过这个对象接口，你可以编辑更改流属性，从而达到控制远端媒体流的目的。</p><p>通过实例化后的<code>PeerConnection</code>对象调用<code>getSenders</code>方法，可获取每个媒体轨道对应<code>RTCRtpSender</code>对象。这里再解释下这个媒体轨道，我们在获取到媒体信息的时候，一般包含两部分，一部分音频信息(<code>audiotrack</code>)，一部分视频信息(<code>videotrack</code>)，因此这里的媒体轨道指的就是媒体信息。</p><ul><li>音频视频模式切换。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//获取发送到远端的具体媒体信息的发送方信息</span></span>
<span class="line"><span>const senders = this.localRtcPc.getSenders(); </span></span>
<span class="line"><span>console.log(senders)</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;) //找到视频发送方信息</span></span>
<span class="line"><span>send.track.enabled = !send.track.enabled //控制视频显示与否 即仅音频模式</span></span></code></pre></div><ul><li>摄像头切换。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//我这里web端因此只获取屏幕分享流 APP端则获取前置后置摄像头流即可</span></span>
<span class="line"><span>let stream = await this.getShareMedia()</span></span>
<span class="line"><span>const [videoTrack] = stream.getVideoTracks(); </span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)//找到视频类型发送方信息</span></span>
<span class="line"><span>send.replaceTrack(videoTrack) //替换视频媒体信息</span></span></code></pre></div><h2 id="类im实现" tabindex="-1"><code>类IM</code>实现 <a class="header-anchor" href="#类im实现" aria-label="Permalink to &quot;\`类IM\`实现&quot;">​</a></h2><p>前面初始化回调流程中有个监听方法 <code>onPcEvent()</code>，内部你会发现有个函数<code>createDataChannel</code>，看名字就是创建了一个通道。是的，这就是的<code>WebRTC</code>中的<code>datachannel</code>可以实现无服务端 P2P 文本等富文本信息双向传输，只要完成<code>WebRTC</code>会话，即使视频通话过程中你的云服务器宕机了也没关系，P2P 的即时通讯还是可以正常进行的。我先演示下：</p><p><img src="`+c+'" alt="" loading="lazy"></p><p><strong>官方描述</strong></p><p><code>RTCPeerConnection</code> 的 <code>createDataChannel()</code> 方法可以创建一个可以发送任意数据的数据通道， 常用于后台传输内容，例如：图像、文件传输、聊天文字等其他数据，当然除了后台，最常用的就是 P2P 中客户端的双向通信了。</p><p><strong>基础语法和使用</strong></p><p>下面的创建 datachannel 的前提是双方已经完成<code>WebRTC</code>的基础信令交换，<code>pc</code>变量为初始化后的<code>RTCPeerConnection</code>。</p><blockquote><p><code>let dataChannel = RTCPeerConnection.createDataChannel(label[, options]);</code></p></blockquote><p><img src="'+t+`" alt="" loading="lazy"></p><p><strong>创建一个<code>datachannel</code>，发送并监听消息。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>this.channel =  pc.createDataChannel(&quot;my channel&quot;, {</span></span>
<span class="line"><span>       protocol: &quot;json&quot;,</span></span>
<span class="line"><span>       ordered: true,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-----------------监听消息------------------------------</span></span>
<span class="line"><span>pc.ondatachannel = function(ev) {</span></span>
<span class="line"><span>      console.log(&#39;Data channel is created!&#39;);</span></span>
<span class="line"><span>      ev.channel.onopen = function() {</span></span>
<span class="line"><span>        console.log(&#39;Data channel ------------open----------------&#39;);</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      ev.channel.onmessage = function(data) {</span></span>
<span class="line"><span>        console.log(&#39;Data channel ------------msg----------------&#39;,data);</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      ev.channel.onclose = function() {</span></span>
<span class="line"><span>        console.log(&#39;Data channel ------------close----------------&#39;);</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span> -------------发送消息--------------------------------------   </span></span>
<span class="line"><span> this.channel.send(this.rtcmessage)</span></span></code></pre></div><p>通过这种方式发送消息，你在浏览器的 NetWork 是看不到的哦，因此按照常规抓包逻辑直接抓<code>HTTP</code>或者<code>WS</code>协议包的话，也是抓不到的。之前在某些网站看到过这种方式传输数据，我相信以后会有更多的地方用到<code>WebRTC</code>的<code>datachannel</code>。如果同学们想要深入了解原理，可以去看看<code>SCTP协议</code> ，点击前往<a href="http://www.watersprings.org/pub/id/draft-jesup-rtcweb-data-protocol-04.html" target="_blank" rel="noreferrer">相关协议说明官方文档地址</a>。</p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目源码，找到模块：一对一网络视频。</li></ol><ol start="2"><li>进去后请在 URL 中携带参数 userId 和 roomId 。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>#用户1001 房间号：10012</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2one?userId=1001&amp;roomId=10012</span></span>
<span class="line"><span>#用户1002 房间号：10012</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2one?userId=1002&amp;roomId=10012</span></span></code></pre></div><ol start="3"><li>此时访问成功后，页面会展示如下内容，点击指定用户旁边通话按钮，则可以和同一个房间内的指定人员通话。之前可能大家有疑惑为何要带房间号呢？因为第一是为了我们后面的会议做铺垫，第二是为了用户隔离。</li></ol><p><img src="`+i+'" alt="" loading="lazy"></p><ol start="4"><li>操作完成视频通话之后，大家尝试在输入框输入文本消息，然后点击发送。此时会在另一端的窗口展示你在第一个窗口发送消息，这个就是 P2P 即时通讯。但是请注意，完成此功能的前提就是你已经建立了对等的<code>WebRTC</code>连接，否则会提示错误。</li></ol><p><img src="'+d+'" alt="" loading="lazy"></p><ol start="5"><li>点击用户列表自己账户旁边的切换，则可以关闭或者打开自己的画面，同时另一方也会实时变化，这个切换的功能，后面到媒体控制我们再做详细的解释。</li></ol><p><img src="'+r+'" alt="" loading="lazy"></p><h2 id="本节所有源代码地址" tabindex="-1">本节所有源代码地址 <a class="header-anchor" href="#本节所有源代码地址" aria-label="Permalink to &quot;本节所有源代码地址&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-one2one.vue" target="_blank" rel="noreferrer">本节课相关代码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>这节课算是<code>WebRTC</code>的正式入门实践了，在学习完理论知识后，请大家模仿我的 Demo 自己实现类似页面，如果你是前端的话那么可以实现一个美化版本且可部署的点对点音视频通话的在线 Demo，让大家一起试试你的成果。</p>',63),m=[u];function g(k,v,f,b,_,C){return n(),s("div",null,m)}const R=a(h,[["render",g]]);export{P as __pageData,R as default};
