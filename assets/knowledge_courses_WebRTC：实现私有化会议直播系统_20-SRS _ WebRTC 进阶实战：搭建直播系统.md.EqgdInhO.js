import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.HD1hBICL.image",t="/assets/2.7L_mB5VD.image",l="/assets/3.Iwhoq-mi.image",i="/assets/4.Vu_Ug50u.image",c="/assets/5.W0GeB1Cq.image",o="/assets/6.lLgQB4Sh.image",d="/assets/7.z_MrYBPK.image",r="/assets/8.1JplKnym.image",T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/20-SRS + WebRTC 进阶实战：搭建直播系统.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/20-SRS + WebRTC 进阶实战：搭建直播系统.md","lastUpdated":1705979598000}'),h={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/20-SRS + WebRTC 进阶实战：搭建直播系统.md"},u=e('<p>上节课让大家去看看 B 站直播用的是哪种媒体流，大家去看了没有？没有也没关系，实际上现阶段基本上都是 <code>FLV</code>或者<code>HLS</code>的，毕竟大型直播以及搭配 CDN 等都有成熟的案例，而现阶段，<code>WebRTC</code>在直播场景中还是有局限性的。虽然大型直播没有，但是小型的直播还是蛮多的，而我们这节课就利用上节 <code>WebRTC</code>推流到 SRS 流媒体服务器后，再用 <code>WebRTC</code>去拉流完成直播。</p><p>当然，上节课推流后得到的两种流地址都是可以直接作为直播源的，但是在拉流速度上和<code>WebRTC</code>还有差别，接下来我们就来看看，用 <code>WebRTC</code>和 SRS 如何提高拉流的效率，大家再和 <code>FLV</code>、<code>HLS</code>拉流对比下，看下具体的差异。</p><h2 id="webrtc-拉流" tabindex="-1">WebRTC 拉流 <a class="header-anchor" href="#webrtc-拉流" aria-label="Permalink to &quot;WebRTC 拉流&quot;">​</a></h2><ol><li>获取已知要拉取的流 ID，即推流地址中的 <code>streamId</code>。你可以把这个流 ID 当作是直播间的房间号，具有唯一性。</li></ol><p><img src="'+p+`" alt="" loading="lazy"></p><ol start="2"><li>初始化 <code>WebRTC</code>核心关联对象 <code>PeerConnection</code>实例，同时监听远程媒体流。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const that = this</span></span>
<span class="line"><span>if(that.pc){</span></span>
<span class="line"><span>        that.pc.close();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>that.pc = await new PeerConnection(null);</span></span>
<span class="line"><span>//注意这里和推流参数的区别</span></span>
<span class="line"><span>that.pc.addTransceiver(&quot;audio&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>that.pc.addTransceiver(&quot;video&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>//这里监听远程媒体流过来</span></span>
<span class="line"><span>that.pc.ontrack  = function (e) {</span></span>
<span class="line"><span>        that.setDomVideoTrick(e.track)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//创建会话信令</span></span>
<span class="line"><span>let offer = await that.pc.createOffer();</span></span>
<span class="line"><span>//本地添加一份</span></span>
<span class="line"><span>await that.pc.setLocalDescription(offer)</span></span></code></pre></div><ol start="3"><li>通过 SRS 开放 API 交换基础信令 SDP，与本地同步。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//组装参数 按照API格式</span></span>
<span class="line"><span>let data = {</span></span>
<span class="line"><span>  &quot;api&quot;: this.$srsServerAPIURL+&quot;rtc/v1/play/&quot;,</span></span>
<span class="line"><span>  &quot;streamurl&quot;: this.$srsServerRTCURL+streamId,</span></span>
<span class="line"><span>  &quot;sdp&quot;: offer.sdp</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//交换</span></span>
<span class="line"><span>axios.post(this.$srsServerAPIURL+&#39;rtc/v1/play/&#39;,data)</span></span>
<span class="line"><span>.then( async res =&gt; {</span></span>
<span class="line"><span>        res = res.data</span></span>
<span class="line"><span>        console.log(res)</span></span>
<span class="line"><span>        if(res.code === 0){</span></span>
<span class="line"><span>        //得到流媒体服务器应答的信令，添加到本地核心关联实例化对象的种</span></span>
<span class="line"><span>                await that.pc.setRemoteDescription(new RTCSessionDescription({type: &#39;answer&#39;, sdp: res.sdp}))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}).catch(err =&gt; {</span></span>
<span class="line"><span>        console.error(&quot;SRS 拉流异常&quot;,err)</span></span>
<span class="line"><span>})</span></span></code></pre></div><ol start="4"><li>监听到媒体流后挂载到本地 <code>DOM</code> 元素。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>setDomVideoTrick(trick){</span></span>
<span class="line"><span>    // this.scanvideodomId 为本地页面已存在的video标签ID</span></span>
<span class="line"><span>      let video = document.getElementById(this.scanvideodomId)</span></span>
<span class="line"><span>      let stream = video.srcObject</span></span>
<span class="line"><span>      if(stream){</span></span>
<span class="line"><span>              stream.addTrack(trick)</span></span>
<span class="line"><span>      }else {</span></span>
<span class="line"><span>              stream = new MediaStream()</span></span>
<span class="line"><span>              stream.addTrack(trick)</span></span>
<span class="line"><span>              video.srcObject = stream</span></span>
<span class="line"><span>              video.controls = true;</span></span>
<span class="line"><span>              video.autoplay = true;</span></span>
<span class="line"><span>              video.muted = true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过以上步骤，我们就可以直接通过 <code>WebRTC</code>订阅到发布的媒体流了。而不是用之前的 <code>HLS</code>流或者 <code>FLV </code>格式流去点播视频画面，给大家对比看下：</p><p><img src="`+t+`" alt="" loading="lazy"></p><p>可以看到，我在直接推流后，右侧直播预览位置几乎立马显示画面，而后面我复制的 FLV 流去播放器播放则需要加载至少一秒钟，这就是<code>WebRTC</code>在流媒体直播领域的优势。</p><p>说完拉流，我们再说说直播过程中其他的功能，比如音视频的控制、切换，以及更高大上的连麦。</p><h2 id="直播过程中音视频控制" tabindex="-1">直播过程中音视频控制 <a class="header-anchor" href="#直播过程中音视频控制" aria-label="Permalink to &quot;直播过程中音视频控制&quot;">​</a></h2><h3 id="音视频控制" tabindex="-1">音视频控制 <a class="header-anchor" href="#音视频控制" aria-label="Permalink to &quot;音视频控制&quot;">​</a></h3><p>看下面代码，是不是和<a href="https://juejin.cn/book/7168418382318927880/section/7172837736468971551" target="_blank" rel="noreferrer">《10 | 会议实战：实时通话过程中音频、视频画面实时控制切换》</a>中媒体控制的代码很类似？是的，只要是 WebRTC 相关，不论是用 SRS 流媒体服务，还是网关 Janus 服务，其控制的核心都是核心关联对象<code>PeerConnection</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//音频控制 pc为 peerconnection 实例化后的对象</span></span>
<span class="line"><span>audioControl(b){</span></span>
<span class="line"><span>       if(this.pc){</span></span>
<span class="line"><span>               this.audioStatus = !this.audioStatus </span></span>
<span class="line"><span>              const senders = this.pc.getSenders();</span></span>
<span class="line"><span>              const send = senders.find((s) =&gt; s.track.kind === &#39;audio&#39;)</span></span>
<span class="line"><span>              send.track.enabled = b </span></span>
<span class="line"><span>       }else{</span></span>
<span class="line"><span>               this.$message.error(&quot;请先点击推流&quot;)</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//视频控制</span></span>
<span class="line"><span>audioControl(b){</span></span>
<span class="line"><span>       if(this.pc){</span></span>
<span class="line"><span>               this.videoStatus= !this.videoStatus</span></span>
<span class="line"><span>              const senders = this.pc.getSenders();</span></span>
<span class="line"><span>              const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>              send.track.enabled = b </span></span>
<span class="line"><span>       }else{</span></span>
<span class="line"><span>               this.$message.error(&quot;请先点击推流&quot;)</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="音视频切换" tabindex="-1">音视频切换 <a class="header-anchor" href="#音视频切换" aria-label="Permalink to &quot;音视频切换&quot;">​</a></h3><p>这里我们使用屏幕分享来实现这个功能。</p><ol><li>获取屏幕分享流。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async getShareMedia(){</span></span>
<span class="line"><span>    const constraints = {</span></span>
<span class="line"><span>            video:{width:1920,height:1080},</span></span>
<span class="line"><span>            audio:false</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    return await navigator.mediaDevices.getDisplayMedia(constraints).catch(handleError);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>通过核心实例化对象切换媒体流。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async changeVideo(){</span></span>
<span class="line"><span>       if(!this.pc){</span></span>
<span class="line"><span>               this.$message.error(&quot;请先点击推流&quot;)</span></span>
<span class="line"><span>               return</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       //这里获取上一步的屏幕分享流</span></span>
<span class="line"><span>       this.shareStream = await this.getShareMedia()</span></span>
<span class="line"><span>       //提取第一个视频Track</span></span>
<span class="line"><span>       const [videoTrack] = this.shareStream.getVideoTracks();</span></span>
<span class="line"><span>       //获取发送器</span></span>
<span class="line"><span>       const senders = this.pc.getSenders();</span></span>
<span class="line"><span>       const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>       //替换视频Track</span></span>
<span class="line"><span>       send.replaceTrack(videoTrack)</span></span>
<span class="line"><span>       //更改按钮状态</span></span>
<span class="line"><span>       this.shareStatus = true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="直播连麦" tabindex="-1">直播连麦 <a class="header-anchor" href="#直播连麦" aria-label="Permalink to &quot;直播连麦&quot;">​</a></h3><p>从 WebRTC 推流到 SRS 流媒体服务器，再到从流媒体服务器拉流，这个过程中我们注意到，实例化<code>PeerConnection</code>后的核心对象中， <code>addTransceiver</code>方法中<code>direction</code>参数为<code>sendonly</code>和<code>recvonly</code>，这个参数是什么意思呢？看下面表格：</p><table><thead><tr><th>参数</th><th>RTCRtpSender</th><th>RTCRtpReceiver</th></tr></thead><tbody><tr><td>sendrecv</td><td>提供和发送 RTP 数据包（媒体信息）</td><td>接收 RTP 包（媒体信息），也接收对等方 RTP 数据包</td></tr><tr><td>sendonly</td><td>提供和发送 RTP 数据包（媒体信息）</td><td>不接受 RTP 数据包</td></tr><tr><td>recvonly</td><td>不提供和发送 RTP 数据包，也就是说本地有流媒体，但是你无法给对面发送</td><td>接收 RTP 数据包</td></tr><tr><td>inactive</td><td>不提供和发送 RTP 数据包</td><td>不接收 RTP 数据包</td></tr></tbody></table><p>表头中<code>RTCRtpSender</code>和<code>RTCRtpReceiver</code>这两个东西，你可以理解为手机充电线的那个充电头，一端接收，另一端输出，永久配对且缺一不可。而对于 <code>WebRTC</code>而言，它们的作用就是描述和控制媒体输出和输入，<code>sendonly</code>代表只发送媒体数据但是不接受，<code>recvonly</code>则相反，仅接收不发送媒体数据。</p><p>通过上面参数我们发现，当前<code>拉流端</code>和<code>推流端</code>与 SRS 流服务器建立的 RTC 连接对于媒体接收和发送而言是单向的，不能通过已经建立的链接去反向发送媒体流，比如<code>拉流端</code>（观众）给<code>推流端</code>（主播）发送视频或音频。既然这样，那我们如何去实现 “直播连麦” 功能呢？</p><p>很简单，既然大家都在同一个直播间，我们可以让<code>观众端</code>在申请连麦同意后主动推流给 SRS 流媒体服务器，成功后再告诉<code>主播</code>该<code>观众</code>推流的 <code>流ID</code>，然后让主播拉流不就可以了？</p><h2 id="连麦实战" tabindex="-1">连麦实战 <a class="header-anchor" href="#连麦实战" aria-label="Permalink to &quot;连麦实战&quot;">​</a></h2><ol><li>申请连麦。在申请的时候携带唯一的流 ID，确保预留且不重复的。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//服务端增加socket事件 </span></span>
<span class="line"><span>//申请连麦</span></span>
<span class="line"><span>s.on(&#39;applyMic&#39;,(data) =&gt; {</span></span>
<span class="line"><span>        let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>        oneToOne(targetUid,getMsg(&#39;applyMic&#39;,&quot;apply mic&quot;,200,data))</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//同意</span></span>
<span class="line"><span>s.on(&#39;acceptApplyMic&#39;,(data) =&gt; {</span></span>
<span class="line"><span>        let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>        oneToOne(targetUid,getMsg(&#39;acceptApplyMic&#39;,&quot;acceptApplyMic mic&quot;,200,data))</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//拒绝</span></span>
<span class="line"><span>s.on(&#39;refuseApplyMic&#39;,(data) =&gt; {</span></span>
<span class="line"><span>        let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>        oneToOne(targetUid,getMsg(&#39;refuseApplyMic&#39;,&quot;refuseApplyMic mic&quot;,200,data))</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//客户端（包括主播和观众端 连接同一个socket服务器）并监听对应事件</span></span>
<span class="line"><span>applyMic(){</span></span>
<span class="line"><span>      let tid =  getParams(&#39;tid&#39;)//主播ID</span></span>
<span class="line"><span>      let params ={        &quot;userId&quot;: getParams(&#39;userId&#39;),&quot;targetUid&quot;:tid,streamId:getParams(&#39;userId&#39;)+&#39;-&#39;+tid}</span></span>
<span class="line"><span>      this.linkSocket.emit(&#39;applyMic&#39;,params)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>主播同意。同意后直接先根据观众发的流拉流即可。</li></ol><p><img src="`+l+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>if(e[&#39;type&#39;] === &#39;applyMic&#39;){</span></span>
<span class="line"><span>    //自动同意 根据自己的业务调整 这里我设置的是有连麦直接同意</span></span>
<span class="line"><span>    let params ={ &quot;userId&quot;: getParams(&#39;userId&#39;),&quot;targetUid&quot;:e.data.userId}</span></span>
<span class="line"><span>    that.linkSocket.emit(&#39;acceptApplyMic&#39;,params)</span></span>
<span class="line"><span>    let remoteStreamId = e.data.streamId</span></span>
<span class="line"><span>    //直接拉流即可 等有流推进来则自动会加载出来</span></span>
<span class="line"><span>    that.$refs[&#39;srsRtcPullApplyMic&#39;].getPullSdp(remoteStreamId)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>观众端收到同意后开始推流。这一步就是普通的 WebRTC 直接推流即可。</li><li>主播端稍等即可加载出画面，开始双向通话。</li></ol><p><img src="`+i+'" alt="" loading="lazy"></p><p>至此我们的主播连麦完成了。</p><h2 id="项目演示" tabindex="-1">项目演示 <a class="header-anchor" href="#项目演示" aria-label="Permalink to &quot;项目演示&quot;">​</a></h2><ol><li>打开项目，主播访问下面模块：</li></ol><p><img src="'+c+`" alt="" loading="lazy"></p><p>但是请注意启动后台，<code>socket-server</code>文件夹中的后台。</p><p>然后携带请求参数访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//指定房间号和用户ID  如果在自己的改造项目中可以写表单然后进行下一步 这里我为了演示 直接在URL携带参数</span></span>
<span class="line"><span>http://localhost:8082/srs-rtc-push?userId=999&amp;roomId=111</span></span></code></pre></div><ol start="2"><li>点击推流，右上角则会直接用 RTC 去拉流预览，成功则自动会在直播预览那里显示画面，否则会弹出失败提示框。</li></ol><p><img src="`+o+'" alt="" loading="lazy"></p><ol start="3"><li>点击麦克风或者摄像头切换，以及屏幕分享可以查看右上角预览画面变更（注意默认右上角画面是静音的，请手动开启）。</li><li>访问直播间模块页面，携带参数为推流页面的流 ID。</li></ol><p><img src="'+d+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//携带个人信息+直播间流ID+tid(主播ID)</span></span>
<span class="line"><span>http://localhost:8082/srs-live-room?liveroomid=localStream-1673368291508&amp;tid=999&amp;userId=1010&amp;roomId=111</span></span></code></pre></div><ol start="5"><li>点击页面右侧“申请连麦”，观察推流模块画面以及当前页面控制台。</li></ol><p><img src="`+r+'" alt="" loading="lazy"></p><h2 id="本节相关源码" tabindex="-1">本节相关源码 <a class="header-anchor" href="#本节相关源码" aria-label="Permalink to &quot;本节相关源码&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/srs-rtc-push.vue" target="_blank" rel="noreferrer">相关源码地址</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>在申请连麦那里我做了简化，直接自动同意连麦人员画面，在实际过程中肯定是不行的，请大家优化这个步骤，比如实现主播同意、拒绝的弹窗提醒等。</p>',57),m=[u];function g(v,b,k,_,y,R){return n(),a("div",null,m)}const S=s(h,[["render",g]]);export{T as __pageData,S as default};
