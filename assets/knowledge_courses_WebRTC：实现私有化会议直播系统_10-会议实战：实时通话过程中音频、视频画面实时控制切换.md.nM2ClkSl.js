import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.Tt4tShzk.image",t="/assets/2.FZ8U2Cn4.image",l="/assets/3.6niEAv8k.image",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/10-会议实战：实时通话过程中音频、视频画面实时控制切换.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/10-会议实战：实时通话过程中音频、视频画面实时控制切换.md","lastUpdated":1711586320000}'),o={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/10-会议实战：实时通话过程中音频、视频画面实时控制切换.md"},c=e(`<p>从前面的几节课过来，我们会发现无论是在 P2P 的音视频通话，还是小场景直播，或者是会议系统，都离不开视频和音频。有了音视频，那就要控制音视频，比如在很多的场合中，我们需要主动关闭自己的麦克风或者是摄像头的画面，从而保护个人隐私。</p><p>这节课我们就结合实战着重讲讲如何主动控制音频和视频画面，以及视频和音频的切换。实际上在<a href="https://juejin.cn/book/7168418382318927880/section/7172208546086387719" target="_blank" rel="noreferrer">《07｜直播实战：WebRTC + 人工智能实现直播虚拟背景》</a>我们提到过直接切换视频画面的操作，如果你已经忘记了那也无妨，接下来我们再专项学习下。</p><p>开始之前我们再熟悉下 <code>RTCRtpSender</code>，这个对象代表媒体发送方的一个音频或者视频轨道控制器，通过这个控制器，你可以去检查和控制 RTP 数据的编码与传输。它是由<code>RTCPeerConnection</code>对象的<code>getSenders()</code>方法返回，官方描述如下：</p><blockquote><p>“返回一个对象数组 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender" target="_blank" rel="noreferrer">RTCRtpSender</a>，每个对象代表负责传输一个轨道数据的 RTP 发送方。发送器对象提供用于<strong>检查和控制轨道数据的编码和传输的方法和属性</strong>。”</p></blockquote><p>我们后面所有的对于远程流的控制，都是通过上面的这个<code>RTCRtpSender</code>对象中的方法来。</p><p>需要明确的是，在前端我们获取流的操作中，一般都会将此流保存到全局的变量进而给各个 RTC 关联赋于同一个流。这样做的原因，第一是在和别的客户端关联的时候无需获取新的流；第二是节约时间和内存；第三就是便于控制，也就是这节课的重点：<strong>媒体控制</strong>。</p><p>但是，请注意上述提到的便于控制并不是通用的，媒体控制如果仅仅对本地流做出变更，在很多情况下并不会同步给所有的客户端，比如比特率、FPS 等，换句话说，你将本地流暂停了或者激活了并不会影响到远程的画面。那么如何去控制呢？重点就是我们这节课提到的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender" target="_blank" rel="noreferrer">RTCRtpSender</a> 。</p><h2 id="音视频暂停和恢复" tabindex="-1">音视频暂停和恢复 <a class="header-anchor" href="#音视频暂停和恢复" aria-label="Permalink to &quot;音视频暂停和恢复&quot;">​</a></h2><p>暂停和恢复操作，是针对的现有的流做出的激活和暂停。</p><p><strong>音频暂停恢复</strong></p><p>b 变量为<code> true/false</code>，可以动态控制发送方的音频关闭或者开启。<code>send.track.enabled</code> 为 <code>true</code> 即激活，<code>false</code> 则暂停。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//单个RTC关联音频</span></span>
<span class="line"><span>const senders = localRTC .getSenders();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;audio&#39;)</span></span>
<span class="line"><span>send.track.enabled = b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//多个RTC关联音频</span></span>
<span class="line"><span>RtcPcMaps.forEach((v,k) =&gt; {</span></span>
<span class="line"><span>        const senders = v.getSenders();</span></span>
<span class="line"><span>        const send = senders.find((s) =&gt; s.track.kind === &#39;audio&#39;)</span></span>
<span class="line"><span>        send.track.enabled = b</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>视频暂停恢复</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//单个RTC关联视频</span></span>
<span class="line"><span>const senders = localRTC .getSenders();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>send.track.enabled = b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//多个RTC关联视频</span></span>
<span class="line"><span>RtcPcMaps.forEach((v,k) =&gt; {</span></span>
<span class="line"><span>        const senders = v.getSenders();</span></span>
<span class="line"><span>        const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>        send.track.enabled = b</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>除了将自己发送给对方的画面或音频实时控制之外，你还需要控制自己端显示的画面和音频，那就是你的本地媒体流 <code>localStream</code>。</p><p>说一个场景：你和 B、C 在视频会议，突然你接到一个电话，此时你将画面和麦克风关闭，对面无法看到听到；等你打完电话后，本地还是正常显示画面和声音，但是你忘了已经关闭了远程的了，此时你继续讲话不就等于白讲了？</p><p><strong>因此控制远程画面的同时</strong> <strong>，</strong> <strong>也要同步控制本地预览流，目的是“所见即所得”</strong> <strong>。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//音频</span></span>
<span class="line"><span>this.localStream.getAudioTracks()[0].enabled = b</span></span>
<span class="line"><span>this.mediaStatus.audio = b</span></span>
<span class="line"><span>//视频</span></span>
<span class="line"><span>this.localStream.getVideoTracks()[0].enabled = b</span></span>
<span class="line"><span>this.mediaStatus.video = b</span></span></code></pre></div><h2 id="媒体流的变更" tabindex="-1">媒体流的变更 <a class="header-anchor" href="#媒体流的变更" aria-label="Permalink to &quot;媒体流的变更&quot;">​</a></h2><p>在通话过程中，除了上述音视频的暂停和恢复之外，一些场景往往需要我们对媒体流做出变更，最基本的就是屏幕共享，如果涉及到画质要求，则可能会变更清晰度；遇到画面投屏，则可能会变更画面的分辨率（比如：竖屏投到横屏）。接下来就讲讲如何在通话的时候去变更媒体流。</p><p>媒体变更最简单的操作就是音频或者视频流的切换，A 画面切 B 画面，C 音频切 D 音频。而本质上都是需要新的流去替换旧的流，也就是说，在你操作前，就想要准备好要发布的新的媒体流。</p><p>下面的示例中， stream 为新的流，通过 <code>getAudioTracks</code>和<code>getVideoTracks</code>分别获取新的流的音频和视频媒体信息，然后通过<code>RTCRtpSender</code>去替换原有的流。</p><p><strong>音频切换</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const [audioTrack] = stream.getAudioTracks();</span></span>
<span class="line"><span>//单个RTC关联</span></span>
<span class="line"><span>const senders = localRTC.getSenders();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;audio&#39;)</span></span>
<span class="line"><span>send.replaceTrack(audioTrack)</span></span>
<span class="line"><span>//多个RTC关联</span></span>
<span class="line"><span>RtcPcMaps.forEach(e =&gt; {</span></span>
<span class="line"><span>    const senders = e.getSenders();</span></span>
<span class="line"><span>    const send = senders.find((s) =&gt; s.track.kind === &#39;audio&#39;)</span></span>
<span class="line"><span>    send.replaceTrack(audioTrack)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>视频切换</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const [videoTrack] = stream.getVideoTracks();</span></span>
<span class="line"><span>//单个RTC关联</span></span>
<span class="line"><span>const senders = localRTC.getSenders();</span></span>
<span class="line"><span>const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>send.replaceTrack(videoTrack)</span></span>
<span class="line"><span>//多个RTC关联</span></span>
<span class="line"><span>RtcPcMaps.forEach(e =&gt; {</span></span>
<span class="line"><span>    const senders = e.getSenders();</span></span>
<span class="line"><span>    const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>    send.replaceTrack(videoTrack)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>当然，媒体变更过程中，不一定要重新获取新的媒体流替换旧的媒体流，除了屏幕共享这类操作必须替换外，其他的操作比如：<code>前后摄像头切换</code>、<code>摄像头宽高重新设置（分辨率）</code>、<code>FPS 设置</code>、<code>Bitrate 设置</code>等是无需替换流就可以完成设置的。此外如果摄像头支持的属性较多的话，也可以对其它属性设置。</p><p>下面我给大家详细解释下常用到的参数，以及用实例演示这些参数的设置方式。</p><h2 id="常用媒体参数详解" tabindex="-1">常用媒体参数详解 <a class="header-anchor" href="#常用媒体参数详解" aria-label="Permalink to &quot;常用媒体参数详解&quot;">​</a></h2><p>在前端媒体流中，涉及到的控制参数非常多，这里给大家提及一些常用的参数。</p><ol><li><code>aspectRatio</code>：视频分辨率比例。常用值包括 1.3333333333（用于经典电视 4:3“标准”宽高比，也用于平板电脑，如 Apple 的 iPad）、1.7777777778（用于 16:9 高清宽屏宽高比）。</li></ol><ol start="2"><li><code>facingMode</code>：摄像头面向方向。&quot;user&quot; 面向用户的摄像头（俗称“自拍相机”），用于自拍和视频通话。&quot;environment&quot; 背对用户的相机（当用户正在看屏幕时）。</li></ol><ol start="3"><li><code>frameRate</code>：俗称 FPS。通常在 20～24 之间。</li></ol><ol start="4"><li><code>width</code>和<code>height</code>：视频帧宽带和高度。当你设置固定的宽高之后，<code>aspectRatio</code>会自动变更。相反<strong>仅</strong>设置<code>aspectRatio</code>参数后，其他 height 和 width 参数也会变动。</li></ol><p>当然还有其他的参数，这里就不再举例，因为具体参数和摄像头的支持也是离不开的，比如有些摄像头功能复杂支持亮度、色泽、焦距的调节，而有些不支持。下面就是我本地两个摄像头具体支持参数。</p><p><img src="`+p+'" alt="" loading="lazy"></p><p><img src="'+t+`" alt="" loading="lazy"></p><h2 id="常用参数设置" tabindex="-1">常用参数设置 <a class="header-anchor" href="#常用参数设置" aria-label="Permalink to &quot;常用参数设置&quot;">​</a></h2><p>除了前面提到的音视频的切换和暂停控制外，上面提到的常用参数也是直接可以设置的，其设置方法也有共性。</p><ol><li>通过 sender 的 params 参数设置。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span> //设置分辨率以及比特率</span></span>
<span class="line"><span> let width = 720</span></span>
<span class="line"><span> let height = 640</span></span>
<span class="line"><span> const scaleRatio = sender.track.getSettings().height/height;</span></span>
<span class="line"><span> const params = sender.getParameters();</span></span>
<span class="line"><span> //这里有可能获取到空 因此设置初始参数</span></span>
<span class="line"><span>  if (!params) {params.encodings = [{ }];}</span></span>
<span class="line"><span>  //aspectRatio 设置</span></span>
<span class="line"><span>  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);</span></span>
<span class="line"><span>  //比特率设置</span></span>
<span class="line"><span>  params.encodings[0].maxBitrate = bitrate;</span></span>
<span class="line"><span>  //同步参数</span></span>
<span class="line"><span>  await sender.setParameters(params);</span></span></code></pre></div><ol start="2"><li>通过强制 Constraints 设置。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//过滤视频</span></span>
<span class="line"><span>const sender = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>let height = 200</span></span>
<span class="line"><span>let frameRate = 30</span></span>
<span class="line"><span>let aspectRatio =  2.777777778</span></span>
<span class="line"><span>//强制约束</span></span>
<span class="line"><span>await sender.track.applyConstraints({ height ,frameRate,aspectRatio});</span></span></code></pre></div><p>这里我们需要注意：</p><ol><li>通过前面第一种方式设置参数，在很多浏览器会被阻止，因此建议用第二种方式，直接强制约束来设置通用参数。</li></ol><ol start="2"><li>在设置某些参数之前，我们需要知道，摄像头是否支持这个参数，假如你的摄像头本身的分辨率只有 <code>720X640</code> ，那么你设置<code>1920X1080</code>是不会生效的哦。</li></ol><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，找到模块：多人视频聊天。</li></ol><ol start="2"><li>不同客户端 A、B 加入会议。</li></ol><ol start="3"><li>设置我们想要变更的参数</li></ol><p>这里我设置的参数有三个：<code>height</code>（帧高度） 、<code>frameRate</code>（FPS） 、<code>aspectRatio</code>（分辨率宽高之比） 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async getRtcPeerInfo(uid){</span></span>
<span class="line"><span>        let pcKey = this.formInline.userId+&#39;-&#39;+uid</span></span>
<span class="line"><span>        let p = RtcPcMaps.get(pcKey)</span></span>
<span class="line"><span>        if(p){</span></span>
<span class="line"><span>                const senders = p.getSenders();</span></span>
<span class="line"><span>                const sender = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>                console.log(&quot;设置前参数&quot;,sender.track.getSettings())</span></span>
<span class="line"><span>                let height = 200</span></span>
<span class="line"><span>                let frameRate = 30</span></span>
<span class="line"><span>                let aspectRatio =  2.777777778</span></span>
<span class="line"><span>                await sender.track.applyConstraints({ height ,frameRate,aspectRatio});</span></span>
<span class="line"><span>                const receivers = p.getReceivers();</span></span>
<span class="line"><span>                const receive = receivers.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>                console.log(&quot;远程流画面设置&quot;,receive.track.getSettings())</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="4"><li>操作①：点击对方画面框框（Video DOM 元素），然后观察控制台和右下角画面显示。</li></ol><ol start="5"><li>操作②：点击自己的视频（右下角显示画面），观察控制台。</li></ol><p><img src="`+l+'" alt="" loading="lazy"></p><ol start="6"><li>参数变更说明：上图红色圈圈中的就是设置前的参数，后面绿色的就是变更后的参数，大家可以发现，这个和我代码中的一致。请注意：我在代码中并没有设置分辨率的 <code>width</code>，但是它也变了，为何？答案就在本节前面参数详解第四条中：当你设置固定的宽高之后<code>aspectRatio</code>会自动变更，相反，仅设置<code>aspectRatio</code>参数后，其他 <code>height</code> 和 <code>width</code> 参数也会变动。</li></ol><h2 id="代码仓库" tabindex="-1">代码仓库 <a class="header-anchor" href="#代码仓库" aria-label="Permalink to &quot;代码仓库&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-many2many.vue" target="_blank" rel="noreferrer">本节课代码位置</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><ol><li>请大家根据这节课学到的内容，去改造下点对点视频通话过程中媒体流的变更。</li><li>完成第一个问题后，可以尝试摄像头和屏幕分享流的切换，即和对方分享自己的桌面。</li></ol>',60),i=[c];function d(r,h,g,k,m,u){return n(),a("div",null,i)}const _=s(o,[["render",d]]);export{b as __pageData,_ as default};
