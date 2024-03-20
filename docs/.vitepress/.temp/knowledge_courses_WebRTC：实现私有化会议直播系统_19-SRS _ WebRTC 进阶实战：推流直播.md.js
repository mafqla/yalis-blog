import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/1.W8EzHcJZ.image";
const _imports_1 = "/assets/2.9NGj-4Iu.image";
const _imports_2 = "/assets/3.0SYzocml.image";
const _imports_3 = "/assets/4.zCIFL-NM.image";
const _imports_4 = "/assets/5.jHB5yzBQ.image";
const _imports_5 = "/assets/6.ofkjH6J2.image";
const _imports_6 = "/assets/7.AOPp_g_N.image";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/19-SRS + WebRTC 进阶实战：推流直播.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/19-SRS + WebRTC 进阶实战：推流直播.md","lastUpdated":1704161604000}');
const _sfc_main = { name: "knowledge/courses/WebRTC：实现私有化会议直播系统/19-SRS + WebRTC 进阶实战：推流直播.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>上一节我们在测试 SRS 是否搭建成功的时候，使用 Ffmpeg 推 mp4 视频流到 SRS，并使用 <code>FLV</code> 的形式在页面播放视频流，而我们小册的主题是 WebRTC，因此必不可少的就是用 <code>WebRTC</code> 去和 SRS “打交道”，接下来我们就看看 <code>WebRTC</code> 是怎样和 SRS 流媒体服务器搭配并控制媒体的。</p><p>首先我们来看看 “推流”，推流指的是将媒体流推送到流媒体服务器，这个媒体流包括摄像头、普通视频、第三方链接流（Http、RTMP 等格式）、图片、音频等各种多媒体格式。而我们的重点则是<code>摄像头的流</code>去推到流媒体服务器。虽然摄像头的流是本节课重点，但是为了让大家对推流有更深刻的认识，我会将各种格式的流都演示下。</p><h2 id="推流播放器" tabindex="-1">推流播放器 <a class="header-anchor" href="#推流播放器" aria-label="Permalink to &quot;推流播放器&quot;">​</a></h2><p>我们推流到流媒体服务器之后，如果用原始的形式，比如 RTMP 推流，再用 RTMP 拉流，由于浏览器已经不再支持了，也就无法直接播放了。因此我们现阶段都是通过 flv 格式的拉流并播放，而播放需要用到的播放器就是 flv 播放器：<a href="http://bilibili.github.io/flv.js/" target="_blank" rel="noreferrer">FLV播放器官方地址</a>。</p><p>SRS 服务自带的控制台也是利用这个开发的，我们小册代码中也有，如下：</p><p><img${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy"></p><p><img${ssrRenderAttr("src", _imports_1)} alt="" loading="lazy"></p><h2 id="普通推流实战" tabindex="-1">普通推流实战 <a class="header-anchor" href="#普通推流实战" aria-label="Permalink to &quot;普通推流实战&quot;">​</a></h2><p>首先，请注意我在推流的时候会携带一些参数（大部分参数在上一节解释过，但是没有实战，这里我会借助推流去实际应用下）。</p><p>其次，推送到流媒体服务器的流是通过 live 后的参数区分的，比如我在小册中举例的推流地址为：<code>rtmp://192.168.101.99:1935/live/suke001</code>，前一部分为 SRS 部署服务器，中间的端口则为 RTMP 默认端口，最后面部分<code>/live/{streamId}</code>，为具体的流区分地址，其中<code>streamId</code>就是核心区分参数，不同的流，这个参数不一样就行，自定义即可。</p><p>最后就是预览流<code>http://\`\`192.168.101.99\`\`:8085/live/1001.flv</code>，这个就是推送后预览流的地址，所有推送的 SRS 流媒体服务器的流都会自动转为 <code>FLV</code> 格式，这个流最后的 <code>1001</code>就是推流时候的<code>streamId</code>，推的时候是什么，那么播放的时候就是什么。</p><p>预览流并不是只有<code>FLV</code>一种，也有 <code>HLS</code> 格式的，SRS 的配置中是默认开启推流自动转换为这两种格式的，预览格式和<code>FLV</code> 类似，只不过后缀不一样：<code>http://192.168.101.99:8085/live/1001.\`\`m3u8</code>。</p><p><strong>以上两种预览流就是我们现阶段大多数平台直播常用的两种直播流格式。</strong></p><h3 id="本地视频推流" tabindex="-1">本地视频推流 <a class="header-anchor" href="#本地视频推流" aria-label="Permalink to &quot;本地视频推流&quot;">​</a></h3><p>代码中用到参数详解：</p><ul><li><p><code>-c:v copy</code>：复制原有视频格式，比如我本地的视频格式为 H.264，那么当前在将此视频推到流媒体服务器过程中，视频编码格式是不会变的。拉流的时候，视频编码格式也同样是 H.264。但是大家要注意，现阶段浏览器默认支持播放的视频编解码格式是有限的，比如常见的支持的两种：H.264 和 VP8，而其他的比如：H.265、VP9、AV1 等格式并不是所有浏览器都兼容编解码的。</p><p>因此如果你本地视频是 H.265 格式，那么你当前编码格式设置就不能为 <code>copy</code>，否则浏览器就没法播放了。具体看下面代码第三种指定编码为 <code>libx264</code>推流。</p></li><li><p><code>-c:a aac</code>：指定音频编码格式为 AAC。和视频格式一样，浏览器默认支持播放的音频格式也是有限的，常见支持的格式有：Opus、AAC、PCM 等。而 G.711、Ogg 等在不同浏览器是无法兼容播放的。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//第一种 H.264视频  aac音频格式 推流  </span></span>
<span class="line"><span>ffmpeg -i target.mp4 -c:v copy  -c:a aac -f flv rtmp://192.168.101.99:1935/live/1001</span></span>
<span class="line"><span>//第二种 H.264视频 并去除音频格式 推流</span></span>
<span class="line"><span>ffmpeg -i target.mp4 -c:v copy  -an -f flv rtmp://192.168.101.99:1935/live/1001</span></span>
<span class="line"><span>//第三种 H.265/H.264 编码为 264格式 去除音频推流</span></span>
<span class="line"><span>ffmpeg -i target.mp4 -c:v libx264  -an -f flv rtmp://192.168.101.99:1935/live/1001</span></span></code></pre></div><h3 id="网络地址流播放" tabindex="-1">网络地址流播放 <a class="header-anchor" href="#网络地址流播放" aria-label="Permalink to &quot;网络地址流播放&quot;">​</a></h3><p>下面第一个例子是我将本地流推送到流媒体服务器，通过 RTMP 拉流再继续推到流媒体服务器（注意区分流的<code>流ID</code>）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//RTMP流 推送到 rtmp://192.168.101.99:1935/live/1002 并去除音频</span></span>
<span class="line"><span>ffmpeg -i rtmp://192.168.101.99:1935/live/1001 -c:v copy -an -f flv rtmp://192.168.101.99:1935/live/1002</span></span>
<span class="line"><span>//RTSP 流 推流到 RTMP服务器 （流ID 1003）</span></span>
<span class="line"><span>ffmpeg -i rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4 -c:v copy -c:a copy -f flv rtmp://192.168.101.99:1935/live/1003</span></span>
<span class="line"><span>//普通mp4流推流 上一节课演示过</span></span>
<span class="line"><span>ffmpeg -i  http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4 -c:v copy -c:a copy -f flv rtmp://192.168.101.99:1935/live/suke01</span></span></code></pre></div><p><img${ssrRenderAttr("src", _imports_2)} alt="" loading="lazy"></p><p><img${ssrRenderAttr("src", _imports_3)} alt="" loading="lazy"></p><h3 id="图片推流" tabindex="-1">图片推流 <a class="header-anchor" href="#图片推流" aria-label="Permalink to &quot;图片推流&quot;">​</a></h3><p>图片推流要注意的是单张图片并不能构成一个视频，这里我们可以通过无限循环推送图片，同时图片也不具备视频格式，我们可以通过指定编码为 H.264，让媒体服务器认为它是 H.264 的视频格式。</p><p>温馨提示：无限循环参数：<code>-loop 1</code> 仅适用在图片循环，如果是本地视频推流，若要本地视频无限循环播放，请使用 <code>-stream_loop -1</code>。</p><p><img${ssrRenderAttr("src", _imports_4)} alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// local.png 为本地截图  -loop 1  为图片无限循环</span></span>
<span class="line"><span>ffmpeg -loop 1  -i local.png -c:v libx264 -an -f flv rtmp://192.168.101.99:1935/live/1001</span></span></code></pre></div><p>是不是很惊喜，图片竟然也可以当作视频来推流？这就是 Ffmpeg 的强大之处。</p><h3 id="屏幕分享推流" tabindex="-1">屏幕分享推流 <a class="header-anchor" href="#屏幕分享推流" aria-label="Permalink to &quot;屏幕分享推流&quot;">​</a></h3><p>借助 Ffmpeg 的强大，我们可以直接捕获桌面的视频流，然后推送到 SRS 流媒体服务器中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//gdigrab  桌面捕获器 </span></span>
<span class="line"><span>ffmpeg -f gdigrab -i desktop -c:v libx264 -an -f flv rtmp://192.168.101.99:1935/live/1001</span></span></code></pre></div><p><img${ssrRenderAttr("src", _imports_5)} alt="" loading="lazy"></p><p>举例这么多，就是为了让大家熟悉流媒体服务器的场景多样性，以及扩宽我们对 SRS 流媒体服务的认识。</p><p>但是这几个例子都和我们的 <code>WebRTC</code> 没直接联系，接下来我们就要看看如何让 <code>WebRTC</code> 给 SRS 推流。</p><h2 id="webrtc-推流" tabindex="-1">WebRTC 推流 <a class="header-anchor" href="#webrtc-推流" aria-label="Permalink to &quot;WebRTC 推流&quot;">​</a></h2><p>使用<code>WebRTC</code> 给 SRS 流媒体推流也需要遵循 <code>WebRTC</code> 的核心会话流程的，和前面的 Janus 类似，你需要和服务器进行 <code>WebRTC</code> 关联。</p><h3 id="流媒体服务器交互流程" tabindex="-1">流媒体服务器交互流程 <a class="header-anchor" href="#流媒体服务器交互流程" aria-label="Permalink to &quot;流媒体服务器交互流程&quot;">​</a></h3><ol><li>本地获取媒体流。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async getLocalUserMedia(audioId,videoId){</span></span>
<span class="line"><span>   const constraints = {</span></span>
<span class="line"><span>       audio: {deviceId: audioId ? {exact: audioId} : undefined},</span></span>
<span class="line"><span>       video: {</span></span>
<span class="line"><span>           deviceId: videoId ? {exact: videoId} : undefined,</span></span>
<span class="line"><span>           width:1920,</span></span>
<span class="line"><span>           height:1080,</span></span>
<span class="line"><span>           frameRate: { ideal: 15, max: 24 }</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   };</span></span>
<span class="line"><span>   if (window.stream) {</span></span>
<span class="line"><span>       window.stream.getTracks().forEach(track =&gt; {</span></span>
<span class="line"><span>           track.stop();</span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>return await navigator.mediaDevices.getUserMedia(constraints).catch(handleError)</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="2"><li>初始化核心关联对象 <code>PeerConnection</code>实例，并添加媒体流。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const that = this</span></span>
<span class="line"><span>that.pc = await new PeerConnection(null);</span></span>
<span class="line"><span>//sendonly 参数请注意 不要设置操作 同时请注意 audio和video的顺序 如果发送和接收顺序不一样 那么你的RTC关联建立是不能成功</span></span>
<span class="line"><span>that.pc.addTransceiver(&quot;audio&quot;, {direction: &quot;sendonly&quot;});</span></span>
<span class="line"><span>that.pc.addTransceiver(&quot;video&quot;, {direction: &quot;sendonly&quot;});</span></span>
<span class="line"><span>//stream 为本地获取到的媒体流</span></span>
<span class="line"><span>stream.getTracks().forEach(function (track) {</span></span>
<span class="line"><span>        that.pc.addTrack(track);</span></span>
<span class="line"><span>});</span></span></code></pre></div><ol start="3"><li>创建<code>offer sdp</code> 信息，并组装 SRS 流媒体服务 API 需要的参数。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//创建 offer sdp </span></span>
<span class="line"><span>let offer = await that.pc.createOffer();</span></span>
<span class="line"><span>await that.pc.setLocalDescription(offer)</span></span></code></pre></div><ol start="4"><li>利用上述参数交换流媒体服务端生成的<code>answer sdp</code>信息，交换后，设置到本地完成<code>WebRTC</code> 的交换流程。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//按照 SRS 开放的API组装参数 </span></span>
<span class="line"><span>let data = {</span></span>
<span class="line"><span>  &quot;api&quot;: this.$srsServerAPIURL+&quot;rtc/v1/publish/&quot;,</span></span>
<span class="line"><span>  &quot;streamurl&quot;: this.$srsServerRTCURL+streamId,</span></span>
<span class="line"><span>  &quot;sdp&quot;: offer.sdp</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//和服务器请求获取回调的SDP信息 并添加到本地 实例化后的 PeerConnection 中</span></span>
<span class="line"><span>axios.post(this.$srsServerAPIURL+&#39;rtc/v1/publish/&#39;,data)</span></span>
<span class="line"><span>.then( async res =&gt; {</span></span>
<span class="line"><span>        res = res.data</span></span>
<span class="line"><span>        console.log(res)</span></span>
<span class="line"><span>        if(res.code === 0){</span></span>
<span class="line"><span>                await that.pc.setRemoteDescription(new RTCSessionDescription({type: &#39;answer&#39;, sdp: res.sdp}))</span></span>
<span class="line"><span>                that.scanUrl = that.$srsServerFlvURL+streamId+&#39;.flv&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}).catch(err =&gt; {</span></span>
<span class="line"><span>        console.error(&quot;SRS 推流异常&quot;,err)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_6)} alt="" loading="lazy"></p><p>以上，就是通过 <code>WebRTC</code> 将我们摄像头的流直接推送到 SRS 流媒体服务器中，然后通过<code>FLV</code> 拉流播放，当然也可以通过 HLS 拉流。</p><h2 id="本节课源代码" tabindex="-1">本节课源代码 <a class="header-anchor" href="#本节课源代码" aria-label="Permalink to &quot;本节课源代码&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/flv-player.vue" target="_blank" rel="noreferrer">本节课相关源码地址</a></p><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/srs-rtc-push.vue" target="_blank" rel="noreferrer">本节课相关源码地址</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>请大家观察 B 站直播地址，看看 B 站直播流的格式。另外，我在项目中只写了 <code>FLV</code> 格式播放的页面，请大家扩展下播放<code>HLS</code>格式的播放器。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/courses/WebRTC：实现私有化会议直播系统/19-SRS + WebRTC 进阶实战：推流直播.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _19SRS___WebRTC__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _19SRS___WebRTC__________ as default
};
