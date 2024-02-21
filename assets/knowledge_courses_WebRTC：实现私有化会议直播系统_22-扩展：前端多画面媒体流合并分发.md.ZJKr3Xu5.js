import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.Hk7V0Zap.image",l="/assets/2.f6HMhAqW.image",t="/assets/3.tPxao1y5.image",i="/assets/4.qmlFDcCe.image",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/22-扩展：前端多画面媒体流合并分发.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/22-扩展：前端多画面媒体流合并分发.md","lastUpdated":1708476311000}'),c={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/22-扩展：前端多画面媒体流合并分发.md"},r=e(`<p>上节课，我们提到了在<code>MCU</code>服务器处理音视频的过程中，可能会涉及到合并媒体流，实际上，这个合并媒体流的“任务”，在客户端我们也可以借助某些巧妙设计做到的，比如<code>Canvas</code>将两个媒体流通过“错位的”的方式贴合在一起，最终呈现出一个画面，但是画面是合成画面。</p><p>接下来，我们利用现成的开源组件库去实现这个目标。</p><h2 id="组件基本应用" tabindex="-1">组件基本应用 <a class="header-anchor" href="#组件基本应用" aria-label="Permalink to &quot;组件基本应用&quot;">​</a></h2><p>组件地址：<a href="https://github.com/t-mullen/video-stream-merger" target="_blank" rel="noreferrer">Github</a>。</p><p>演示地址：<a href="https://t-mullen.github.io/video-stream-merger/" target="_blank" rel="noreferrer">Demo</a>。</p><p>首先安装组件依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>cnpm install video-stream-merger -S</span></span></code></pre></div><p><strong>实战</strong></p><p>比如将一个 MP4 视频和摄像头的画面合成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//组件引入</span></span>
<span class="line"><span>import &quot;video-stream-merger&quot;;</span></span>
<span class="line"><span>//初始化合成画面容器</span></span>
<span class="line"><span> that.mergerVideo = new VideoStreamMerger(</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        width: 600,   //设置容器的分辨率 宽</span></span>
<span class="line"><span>        height: 400,  //分辨率 高</span></span>
<span class="line"><span>        fps: 25,       //设置容器FPS</span></span>
<span class="line"><span>        clearRect: true, //清除每一帧 从canvas</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  //加载Mp4画面作为底层画面</span></span>
<span class="line"><span>  let videoFile = &quot;http://localhost:8082/190318231014076505.mp4&quot;</span></span>
<span class="line"><span>  //创建视频承载DOM</span></span>
<span class="line"><span>  var videoElement = document.createElement(&#39;video&#39;)</span></span>
<span class="line"><span>  //设置DOM属性 playsinline 这个请注意 有些浏览器比如苹果手机浏览器 自动播放的时候会自动放大 而设置此属性可以不用放大</span></span>
<span class="line"><span>  videoElement.playsinline = true;</span></span>
<span class="line"><span>  //静音</span></span>
<span class="line"><span>  videoElement.muted = true</span></span>
<span class="line"><span>  videoElement.src = videoFile</span></span>
<span class="line"><span>  videoElement.autoplay = true</span></span>
<span class="line"><span>  //无限循环播放属性</span></span>
<span class="line"><span>  videoElement.loop = true</span></span>
<span class="line"><span>  videoElement.play()</span></span>
<span class="line"><span>  //合成容器中添加创建的DOM元素</span></span>
<span class="line"><span>  that.mergerVideo.addMediaElement(&#39;mp4&#39;,videoElement, {</span></span>
<span class="line"><span>        x: 0,//画面帧起始位置</span></span>
<span class="line"><span>        y: 0,</span></span>
<span class="line"><span>        width: that.mergerVideo.width,//画面帧大小</span></span>
<span class="line"><span>        height: that.mergerVideo.height,</span></span>
<span class="line"><span>        mute: true //静音（重点设置哦）</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  //获取摄像头流 getLocalUserMedia()方法这里不再单独写了 完整代码见仓库</span></span>
<span class="line"><span>  this.localstream = await this.getLocalUserMedia(null,null)</span></span>
<span class="line"><span>  that.mergerVideo.addStream(this.localstream, {</span></span>
<span class="line"><span>        x: 0,</span></span>
<span class="line"><span>        y: 0,</span></span>
<span class="line"><span>        width: 200,</span></span>
<span class="line"><span>        height: 200,</span></span>
<span class="line"><span>        mute: false //这个也是重点配置哦</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  //开始合并</span></span>
<span class="line"><span>  that.mergerVideo.start();</span></span>
<span class="line"><span>  //获取合并结果</span></span>
<span class="line"><span>  console.log(&quot;merger.result&quot;,that.mergerVideo.result);</span></span>
<span class="line"><span>  //挂载到DOM元素</span></span>
<span class="line"><span>  await this.setDomVideoStream(&#39;videoElement&#39;,that.mergerVideo.result)</span></span></code></pre></div><p>第一个要注意的点：我在上述代码中标记的重点，<strong><code>muted</code></strong> <strong>参数</strong>，当你的两个媒体流都有自己的音频时，此时如果你将 <code>muted</code> 参数都设置为 <code>False</code>，则输出的合成画面的音频也是混合的，因此听到的声音就是混乱的。所以在这里我们可以设置动态传参，手动设置可以控制要输出的音频，以便输出音质可以达到最佳。</p><p>第二个要注意的点：承载合成画面的分辨率，此分辨率直接控制了整体输出媒体的分辨率，因此，如果你决定在业务中使用合成流的时候，一定要根据当前网络状况谨慎设置。</p><p><strong>效果</strong></p><p><img src="`+p+`" alt="" loading="lazy"></p><h2 id="直播推合成流实战" tabindex="-1">直播推合成流实战 <a class="header-anchor" href="#直播推合成流实战" aria-label="Permalink to &quot;直播推合成流实战&quot;">​</a></h2><p>接下来，将上述拿到的合成媒体流推送到我们的媒体服务器中，让媒体服务器分发直播。值得注意的是，以往我们在<code>WebRTC</code>会话中是无法直接将普通的 MP4 或其他格式的本地视频流发送给对方的，通过此种方式，我们可以轻易地将在线地址、本地视频等“静态流”直接作为<code>WebRTC</code>的媒体对等方。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async play(){</span></span>
<span class="line"><span>        //获取上一步合成画面流</span></span>
<span class="line"><span>       let megerVideo = await this.mergerVideoFC()</span></span>
<span class="line"><span>       //推流到SRS中 推流成功则在右侧预览</span></span>
<span class="line"><span>       await this.getPushSdp(this.streamId,megerVideo)</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>},</span></span></code></pre></div><p><img src="`+l+`" alt="" loading="lazy"></p><h2 id="屏幕分享-摄像头合成推流" tabindex="-1">屏幕分享+摄像头合成推流 <a class="header-anchor" href="#屏幕分享-摄像头合成推流" aria-label="Permalink to &quot;屏幕分享+摄像头合成推流&quot;">​</a></h2><p>在以往视频会话过程中，如果遇到屏幕分享，自己的摄像头画面不会展示，这也是大多数会议系统常规的做法。但是，通过我们这节课学到的知识，就可以直接将屏幕分享流和摄像头流合并然后作为一个流分发，让对方不仅仅看到你的屏幕画面，同时能看到你的摄像头画面。</p><p>好了，接下来我们来看看怎么将两个动态媒体流组合起来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//屏幕分享和摄像头</span></span>
<span class="line"><span>async mergerVideoSC(){</span></span>
<span class="line"><span>      //摄像头流</span></span>
<span class="line"><span>      this.localstream = await this.getLocalUserMedia(null,null)</span></span>
<span class="line"><span>      //屏幕分享流</span></span>
<span class="line"><span>      this.shareStream = await this.getShareMedia()</span></span>
<span class="line"><span>      this.shareStatus= true</span></span>
<span class="line"><span>      const that = this</span></span>
<span class="line"><span>      //承载容器</span></span>
<span class="line"><span>      that.mergerVideo = new VideoStreamMerger({ fps: 24, clearRect: true, });</span></span>
<span class="line"><span>      //屏幕分享容器作为底层画面</span></span>
<span class="line"><span>      that.mergerVideo.addStream(this.shareStream, {</span></span>
<span class="line"><span>            x: 0,</span></span>
<span class="line"><span>            y: 0,</span></span>
<span class="line"><span>            width: that.mergerVideo.width,</span></span>
<span class="line"><span>            height: that.mergerVideo.height,</span></span>
<span class="line"><span>            mute: true</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      //摄像头左上角</span></span>
<span class="line"><span>      that.mergerVideo.addStream(this.localstream, {</span></span>
<span class="line"><span>            x: 0,</span></span>
<span class="line"><span>            y: 0,</span></span>
<span class="line"><span>            width: 200,</span></span>
<span class="line"><span>            height: 150,</span></span>
<span class="line"><span>            mute: false</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      //开始合成</span></span>
<span class="line"><span>      that.mergerVideo.start();</span></span>
<span class="line"><span>      //本地DOM挂载</span></span>
<span class="line"><span>      await this.setDomVideoStream(&#39;videoElement&#39;,that.mergerVideo.result)</span></span>
<span class="line"><span>      return that.mergerVideo.result</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p><strong>效果如下</strong></p><p><img src="`+t+'" alt="" loading="lazy"></p><p>合成的参数都是可以自己调的，比如位置在左上角或者右上角，自己按照实际情况来即可，设置的参数就是添加<code>Stream</code>的时候指定即可。</p><p>以上的场景我们可以再具体下，当屏幕分享完成之后，想要关闭分享画面（<code>关闭分享按钮在开始分享后下面会显示，注意动图中按钮的变化</code>），仅仅保留摄像头画面，怎么实现呢？实际上这个组件也是可以自动适配的，选择关闭后，对方的画面就只剩下一个了，但是请注意此时剩下那个画面的位置是有问题的，比如下面这样：</p><p><img src="'+i+`" alt="" loading="lazy"></p><p>虽然对方看到的画面没有问题，但是我们这边显示的是有问题的，看着很别扭。因此我们可以按照常规做法，按照</p><p>我们前面反复提到的媒体控制（<a href="https://juejin.cn/book/7168418382318927880/section/7172837736468971551" target="_blank" rel="noreferrer">《10|会议实战：实时通话过程中音频、视频画面实时控制切换》</a>），去直接替换<code>RTCSender</code>中的发布流即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//直接置换发送器中的媒体流（）</span></span>
<span class="line"><span>async changeVideo(){</span></span>
<span class="line"><span>   //这里实际场景中一般不用重新获取 但是请一定要将此变量全局保存 以免无法直接控制正在发布的媒体流</span></span>
<span class="line"><span>   //随意创建对浏览器资源和CPU消耗还是很大的</span></span>
<span class="line"><span>   this.localStream= await this.getLocalUserMedia()</span></span>
<span class="line"><span>   const [videoTrack] = this.localStream.getVideoTracks();</span></span>
<span class="line"><span>   const senders = this.pc.getSenders();</span></span>
<span class="line"><span>   const send = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>   send.replaceTrack(videoTrack)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>通过这种方式可以解决多流传输而带来的宽带资源消耗的问题，同时也将服务端的“合流”能力以一种很巧妙的方式转移到了客户端，实际上，对客户端而言，也并没有消耗多少资源，因为本质上还是用的<code>Canvas</code>画布，然后画布转换成流。</p><p>这样即使我们客户端有 N 多个画面：摄像头、静态视频播放、多个屏幕共享流，或者纯音频等都是可以合并到一个流中，如果将此功能在自己的业务中扩展，就可以实现一个画面编辑器，通过此在线编辑器组合任意流然后分发。</p><p>上面提到的在线编辑器像不像直播用到的<code>直播姬</code>？将各种小的组件组合起来，然后作为直播的合成画面发布，观众看到的也是合成的，而且对于资源的占用也并不是很大。</p><h2 id="相关源码" tabindex="-1">相关源码 <a class="header-anchor" href="#相关源码" aria-label="Permalink to &quot;相关源码&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/stream-merger-push.vue" target="_blank" rel="noreferrer">本节相关源码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>学完本节课，希望大家可以对前面学到的所有内容做个归纳，梳理一份自己会议系统相关的思维导图，从基础的<code>WebRTC</code>会话流程到怎么实现会议等等。</p>`,38),o=[r];function d(h,m,g,u,_,v){return n(),a("div",null,o)}const V=s(c,[["render",d]]);export{k as __pageData,V as default};
