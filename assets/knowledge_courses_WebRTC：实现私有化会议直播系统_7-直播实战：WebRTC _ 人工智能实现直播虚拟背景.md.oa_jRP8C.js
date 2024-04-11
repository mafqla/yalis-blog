import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.VsPvE-Y2.image",t="/assets/2.h2YhGxyo.image",l="/assets/3.PIbvt7fU.image",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/7-直播实战：WebRTC + 人工智能实现直播虚拟背景.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/7-直播实战：WebRTC + 人工智能实现直播虚拟背景.md","lastUpdated":1712797950000}'),o={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/7-直播实战：WebRTC + 人工智能实现直播虚拟背景.md"},c=e(`<p>上节课给大家留了课后思考题，大家做的怎么样？如果能解决上节课的课后题，那么这节课的内容学习起来就很简单，无非是流的替换而已。接下来我们就一起实践下，如何借助 <code>虚拟背景</code> 美化我们前面做的简易直播系统。</p><p>开始之前，大家先回顾下我们在上节课的成果：将摄像头画面和虚拟背景通过机器学习模型融合后，展示在 <code>Canvas</code> 节点上，那么这节课我们就要对融合后的画面和 <code>WebRTC </code>结合，并在我们之前写的简易直播中应用。</p><h2 id="canvas-画布流" tabindex="-1">Canvas 画布流 <a class="header-anchor" href="#canvas-画布流" aria-label="Permalink to &quot;Canvas 画布流&quot;">​</a></h2><p><code>Canvas</code> 本身只是一个画布，但是有对应的 API，可以将画布上的每一帧捕捉并形成媒体流，我们可以改造下上节课的方法，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async virtualBg(){</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    let video = document.getElementById(&#39;localdemo01&#39;)</span></span>
<span class="line"><span>    if(this.rfId){</span></span>
<span class="line"><span>            cancelAnimationFrame(this.rfId)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let lastTime = new Date();</span></span>
<span class="line"><span>    async function getFrames() {</span></span>
<span class="line"><span>            console.log(&quot;timer&quot;,lastTime)</span></span>
<span class="line"><span>            const now = video.currentTime;</span></span>
<span class="line"><span>            if(now &gt; lastTime){</span></span>
<span class="line"><span>                    await selfieSegmentation.send({image: video});</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            lastTime = now;</span></span>
<span class="line"><span>            //无限定时循环 退出记得取消 cancelAnimationFrame() </span></span>
<span class="line"><span>            that.rfId = requestAnimationFrame(getFrames);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    getFrames()</span></span>
<span class="line"><span>    return canvasElement.captureStream(25)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>核心实际上就是<code>canvasElement.captureStream</code>方法，通过此方法即可捕捉画布并转换成流。内部唯一的参数就是帧速率<code>FPS</code>，一般设置为 <code>20 到 25</code> 这个区间即可满足正常视觉上的视频流畅度。</p><p>拿到画布媒体流后就要思考如何将该流发送给<code>WebRTC</code>对端，也就是我们所说的<strong>观众端</strong>。这样直播间的直播画面就是带有虚拟背景的画面。</p><p>这个流程就很简单了，和之前发送普通流一样，这次只不过是发送的画布流而已，名字不管是画布流还是普通流，在我们的代码中仅仅是 <code>MediaStream</code> 对象，因此按照正常流程来即可，如下：</p><ol><li><strong>获取虚拟背景流：</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//虚拟背景流暂存变量</span></span>
<span class="line"><span>this.virtualMediaStream = await this.virtualBg()</span></span></code></pre></div><ol start="2"><li><strong>建立关联关系后替换媒体流：</strong> <strong><code>virtualMediaStream</code></strong> <strong>:</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async onRemoteOffer(fromUid,offer){</span></span>
<span class="line"><span>        const localUid = this.formInline.userId</span></span>
<span class="line"><span>        let pcKey = localUid+&#39;-&#39;+fromUid</span></span>
<span class="line"><span>        let pc = new PeerConnection(this.rtcPcParams)</span></span>
<span class="line"><span>        RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>        console.log(&quot;主播监听到远端offer&quot;,pc);</span></span>
<span class="line"><span>        this.onPcEvent(pc,localUid,fromUid)</span></span>
<span class="line"><span>        //注意这里我们直接用的是虚拟背景流 替换原先的 localstream</span></span>
<span class="line"><span>        for (const track of this.virtualMediaStream.getTracks()) {</span></span>
<span class="line"><span>            pc.addTrack(track);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pc.setRemoteDescription(offer)</span></span>
<span class="line"><span>        let answer = await pc.createAnswer();</span></span>
<span class="line"><span>        await pc.setLocalDescription(answer);</span></span>
<span class="line"><span>        let params = {&quot;targetUid&quot;:fromUid,&quot;userId&quot;:localUid,&quot;answer&quot;:answer}</span></span>
<span class="line"><span>        this.linkSocket.emit(&quot;answer&quot;,params)</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p><strong>演示：</strong></p><p><img src="`+p+`" alt="" loading="lazy"></p><p>上面的动态图中，第一个为主播俩画面，一个为原始画面，另一个为带有虚拟背景的画面。后面的两个则是观众观看到的为带有虚拟背景的画面。</p><p>到这里我们直播间带虚拟背景的问题算是解决了，并且虚拟背景可以传送到观众端。<strong>但是接下来就要思考我们这节课的另一个重要问题了，直播开始如果并不使用虚拟背景而是在直播过程中自主切换虚拟背景，如何做到呢？</strong></p><h2 id="问题思考和实战" tabindex="-1">问题思考和实战 <a class="header-anchor" href="#问题思考和实战" aria-label="Permalink to &quot;问题思考和实战&quot;">​</a></h2><p>实际上，我们可以把直播中切换背景看作是切换视频流。如果我们能够在直播过程中无缝替换视频流，那么这个问题最重要的一步也就迎刃而解了，剩下的无非就是按照前面的流程，生成新的虚拟背景画布并获取视频流。</p><p>那么，在本身直播过程中，如何做到视频的无缝替换呢？</p><p>如果按照前面的老路子，你可能会选择重新建立新的<code>WebRTC</code>连接并发布新的媒体流，但是你有没有想过，当你重新协商的时候，又需要重新走繁琐的信令协商过程，观众端需要经历重新协商这段时间，才能看到新的画面，这样不仅仅需要消耗信令服务器的资源，还浪费了观众端的时间，岂不是得不偿失？</p><p>大家不必担心，我们能考虑到这个问题，实际上<code>WebRTC</code>的开发者也早就考虑到了，因此开发了相应的 API ，我们可以通过现有的 API 完成视频流的无缝切换，请看下面代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const senders = this.localRtcPc.getSenders();</span></span>
<span class="line"><span>let stream = await this.getShareMedia()</span></span>
<span class="line"><span>const [videoTrack] = stream.getVideoTracks();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>send.replaceTrack(videoTrack)</span></span></code></pre></div><ul><li>第一行代码为获取和某个客户端建立连接的<code>WebRTC</code>关联的<strong>核心对象</strong> <strong>。</strong></li></ul><ul><li>第二行为获取新的媒体流。</li></ul><ul><li>第三行为获取新的媒体流中的视频流。</li></ul><ul><li>第四行为获取<strong>核心对象</strong>中正在发布的视频轨道。</li></ul><ul><li>第五行为用新的视频流替换旧的流。</li></ul><p>注意第一行代码中的 <code>localRtcPc.getSenders()</code>，这个方法的官方描述就是“返回一个对象数组 <code>RTCRtpSender</code>，每个对象代表负责传输一个轨道数据的 RTP 发送方。发送器对象提供用于<strong>检查和控制轨道数据的编码和传输的方法和属性</strong>。”</p><p>大白话就是，这个方法返回的数组中，维护着发送方的媒体信息（<strong>RTP 就是最原始的媒体流</strong>），我们可以通过这个对象去<strong>检查和控制发送方媒体的编码和传输。</strong> 这样是不是就很容易理解了？如果不明白没关系，这节课我们只要知道可以通过这个方法去替换视频流就行了，后面<a href="https://juejin.cn/book/7168418382318927880/section/7172837736468971551" target="_blank" rel="noreferrer">《10 | 会议实战：实时通话过程中音频、视频画面实时控制切换》</a>节我会给大家详细解释。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const senders = this.localRtcPc.getSenders();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>send.replaceTrack(xxx) # xxx 为新的视频流</span></span></code></pre></div><p>再来回味下前面这段代码，首先获取当前已有<code>WebRTC</code>关联关系的核心对象<code>localRtcPc</code>，然后通过<code>getSenders</code>获取发送器对象数组，并过滤其中带有视频标签的轨道信息。最后替换发送器对象中的视频轨道信息。</p><p>而我们的场景是直播，也就是一对多的关联关系，因此在主播端，维护有 N 对<code>RTCPeerConnection</code>，因此需要遍历直播间所有的关联关系，并替换新的流，即可完成远程流的切换，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//切换发送的远程流</span></span>
<span class="line"><span>async changeRemoteStream(stream){</span></span>
<span class="line"><span>    //先获取要替换的流 过滤音频 仅仅保留视频</span></span>
<span class="line"><span>    const [videoTrack] = stream.getVideoTracks();</span></span>
<span class="line"><span>    //主播端所有关联关系遍历并替换新的流</span></span>
<span class="line"><span>    RtcPcMaps.forEach(e =&gt; {</span></span>
<span class="line"><span>            const senders = e.getSenders();</span></span>
<span class="line"><span>            const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>            send.replaceTrack(videoTrack)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>演示</strong></p><p><img src="`+t+'" alt="" loading="lazy"></p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，找到模块：小型直播。</li></ol><ol start="2"><li>流程第五节的流程一样。第五节中，如果大家已经运行过源码，那么应该已看到主播端中间一栏 写有 <code>直播开始后点击背景即可切换直播背景</code>的醒目提示。当时给大家说不用理会，但是现在是时候试试了。</li></ol><ol start="3"><li>在观众和主播都已经就位后，此时还不是点击背景开始虚拟背景的时机，请问你的模型文件夹内的模型被代理了吗？代码中是否已配置模型加载路径？如果没有请回到上一节重新再复习一边。</li></ol><ol start="4"><li>模型文件没问题后此刻就可以点击中间的虚拟背景了，任选一个然后稍等几秒钟就可以在两端看到效果。</li></ol><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="完整代码地址" tabindex="-1"><strong>完整代码地址</strong> <a class="header-anchor" href="#完整代码地址" aria-label="Permalink to &quot;**完整代码地址**&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-one2many.vue" target="_blank" rel="noreferrer">直播部分代码</a></p><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/tree/main/virtualbg-model" target="_blank" rel="noreferrer">虚拟背景源码</a></p><h2 id="课后作业" tabindex="-1"><strong>课后作业</strong> <a class="header-anchor" href="#课后作业" aria-label="Permalink to &quot;**课后作业**&quot;">​</a></h2><p>在直播使用虚拟背景的时候，大家可以注意下不同浏览器的 <code>FPS</code>，比如 360、谷歌、edge 等，然后开启浏览器的硬件加速后，再测试下 <code>FPS</code> 看下有何不同，同时注意计算机的资源占用情况。</p>',46),i=[c];function r(d,g,m,h,u,v){return n(),a("div",null,i)}const b=s(o,[["render",r]]);export{k as __pageData,b as default};
