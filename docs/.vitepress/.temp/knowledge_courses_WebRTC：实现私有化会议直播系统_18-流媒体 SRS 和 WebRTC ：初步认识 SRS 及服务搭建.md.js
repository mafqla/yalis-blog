import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/1.pnobXGBW.image";
const _imports_1 = "/assets/2.TzdESPWB.image";
const _imports_2 = "/assets/3.Ah-iDR5k.image";
const _imports_3 = "/assets/4.OlnIPLSy.image";
const _imports_4 = "/assets/5.3pomU0Fj.image";
const _imports_5 = "/assets/6.w_6XWGPj.image";
const _imports_6 = "/assets/7.HdRz-Bi8.image";
const _imports_7 = "/assets/8.P6TdfCBw.image";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/18-流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/18-流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建.md","lastUpdated":1704161604000}');
const _sfc_main = { name: "knowledge/courses/WebRTC：实现私有化会议直播系统/18-流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>大家好，学完前面两种架构的会议系统搭建，大家是不是已经迫不及待想要实现自己的私有化会议系统，或者想要直接在自己公司的业务中使用了？先不要急，如果你的业务中涉及和流媒体相关的使用场景，比如监控、<code>RTSP</code>、<code>RTMP</code> 等，那么这节课的内容应该能合你胃口。</p><p>前面的课程讲的都是简单的音视频场景应用，而没有深入讲音视频本身的东西。想要深入了解音视频，那么必不可少的就是流媒体这一块的知识了。在正式开始学习流媒体服务<code>SRS</code> 之前，我们先学习一些基本的流媒体相关知识。</p><h2 id="rtmp" tabindex="-1">RTMP <a class="header-anchor" href="#rtmp" aria-label="Permalink to &quot;RTMP&quot;">​</a></h2><p>Real-Time Messaging Protocol，简称<code>RTMP</code>，是一种支持实时在线视频流的数据传输技术，最初是用在流媒体服务和 <a href="https://en.wikipedia.org/wiki/Adobe_Flash_Player" target="_blank" rel="noreferrer">Flash播放器</a> 之间传输多媒体流的。因此以前在浏览器中，只要有 Flash 播放器插件，就可以直接在线播放媒体流。然而在2021年左右，谷歌、微软等几大厂商集体做出决策（漏洞安全问题、封闭性、性能等多种因素），正式弃用。在谷歌浏览器 88 版本之后也将 Flash player 正式删除。</p><p>现在我们网页端是没法直接播放<code>RTMP</code>的，如果想要播放就必须转换成浏览器中播放器支持的流类型播放，比如：mp4、flv、hls等。</p><p>在实际使用场景中我们会用到<code>RTMP</code>的两种传输方式：推送和拉取，即：你可以将自己的视频通过<code>RTMP</code>推送到流媒体服务器和从流媒体拉取对应的流。</p><p>常用端口：1935。</p><h2 id="rtsp" tabindex="-1">RTSP <a class="header-anchor" href="#rtsp" aria-label="Permalink to &quot;RTSP&quot;">​</a></h2><p>Real Time Streaming Protocol ，简称 <code>RTSP</code>，它本身不会传输媒体流，而是充当客户端和与媒体服务端之间的控制通信，和<code>RTP</code>、<code>RTCP</code> 协议搭配，用于媒体流的传输。</p><h2 id="rtp" tabindex="-1">RTP <a class="header-anchor" href="#rtp" aria-label="Permalink to &quot;RTP&quot;">​</a></h2><p>全称：Realtime transport protocol，真正意义上的数据传输协议，数据包构成包含版本号、填充位、标记位、有效荷载类型（这里就是标识不同类型媒体的，比如 H.264 视频、G.711 音频等）、序列号、时间戳等，具体详细解释可以看<a href="https://zh.m.wikipedia.org/zh-hans/%E5%AE%9E%E6%97%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">这里</a>。</p><p>我们只需要知道，RTP 包传输的就是我们音视频会话过程中所需要的流量，当然发送的底层协议还是通过 UDP，因此在前面的数据包构成中，我们可以看到序列号、时间戳参数，目的就是让接收端可以自定义缓冲区，用于乱序纠正或者音画同步。</p><h2 id="rtcp" tabindex="-1">RTCP <a class="header-anchor" href="#rtcp" aria-label="Permalink to &quot;RTCP&quot;">​</a></h2><p>全称：Real-time Transport Control Protocol 或 RTP Control Protocol ，或简写 RTCP，是 RTP 的姊妹协议，RTCP 本身并不传输数据，但和上面提到的 RTP 一起协作将媒体数据打包和发送。RTCP 收集相关媒体连接的统计信息，例如：传输字节数、网络状态、丢包状况、单向和双向网络延迟等等，这样可以控制服务质量，诊断网络状况。</p><p>我们的课程的主题，WebRTC 实现的会议系统通话过程中数据包的检测、反馈，都是通过这个协议。</p><h2 id="srs-服务器搭建" tabindex="-1">SRS 服务器搭建 <a class="header-anchor" href="#srs-服务器搭建" aria-label="Permalink to &quot;SRS 服务器搭建&quot;">​</a></h2><p>搭建前，按照惯例我们必须要熟悉下 SRS 具体是个什么东西。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="img" loading="lazy"></p><p>看上面<a href="https://ossrs.net/lts/zh-cn/docs/v4/doc/introduction" target="_blank" rel="noreferrer">官网</a>描述，一个简单高效的实时视频服务器，支持各种通用的流媒体协议。常用案例举例：</p><ul><li>RTMP 服务器；</li><li>RTMP 自动转 HLS、FLV；</li><li>分布式（K8S）部署；</li><li>WebRTC 推流拉流。小册会议功能核心；</li><li>HTTP API。可以获取服务端各种推流信息；</li><li>DVR 。支持将<code>RTMP</code>流录制成 FLV 或 MP4 文件。</li></ul><p>还有一些其他的功能，大家课后可以自己看看，这里不再多说。</p><p>实际上满足上面条件的开源流媒体服务很多，有大的有小的，比如 <a href="https://github.com/ZLMediaKit/ZLMediaKit" target="_blank" rel="noreferrer">ZLMediaKit</a>，我们这节课主要是以 SRS 为切入点去实现我们第三套会议系统，等学完后大家可以看看用其他的开源流媒体服务代替 SRS，进而实现多平台兼容的会议系统。</p><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>考虑到便捷性，我们使用容器化来部署。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// 1935 RTMP的常用端口  1985 API接口端口  8080默认控制台访问端口 在这里我映射到宿主机8085端口</span></span>
<span class="line"><span>docker run -d --name srs -p 1935:1935 -p 1985:1985 -p 8085:8080 ossrs/srs:5.0.30</span></span></code></pre></div><p>执行完上面的再继续：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>docker cp -a srs:/usr/local/srs/conf /home/srs5/</span></span></code></pre></div><p>这一步的目的是从容器中拷贝配置文件到宿主机的 <code>/home/srs5</code> 目录，因为中间我们可能会配置一些其他的东西，如果在容器内部更改，那么不小心容器被删除，配置历史也就找不到了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>docker rm -f srs</span></span></code></pre></div><p>移除旧的容器，因为我们的目标是从里面拷贝配置文件，因此拷贝完后，这个容器也就没有必要存在了，而我们正式用的容器则是需要挂载上面拷贝配置所启动的容器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//临时变量，当前服务器的IP，如果是公网服务器的话则为公网IP 用户webrtc UDP 包的传输</span></span>
<span class="line"><span>CANDIDATE=&quot;192.168.101.99&quot;</span></span>
<span class="line"><span>docker run --restart=always -d -v /home/srs5/conf/:/usr/local/srs/conf/ -p 1935:1935 -p 1985:1985 -p 8085:8080 \\</span></span>
<span class="line"><span>    --env CANDIDATE=$CANDIDATE -p 8000:8000/udp \\</span></span>
<span class="line"><span>    ossrs/srs:5.0.30 ./objs/srs -c conf/docker.conf</span></span></code></pre></div><p>启动完成后，访问 IP+8085，公网服务器请记得开放安全组和防火墙端口。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="img" loading="lazy"></p><p>看到这个界面，则表明 SRS 流媒体服务部署完成，当前界面点击进入 SRS 控制台：</p><p><img${ssrRenderAttr("src", _imports_2)} alt="img" loading="lazy"></p><p>更改 API 端口，然后连接到 SRS 控制台实时监控，如下：</p><p><img${ssrRenderAttr("src", _imports_3)} alt="img" loading="lazy"></p><h3 id="ffmpeg-相关命令" tabindex="-1">FFmpeg 相关命令 <a class="header-anchor" href="#ffmpeg-相关命令" aria-label="Permalink to &quot;FFmpeg 相关命令&quot;">​</a></h3><p>后面的测试需要用到一些 Ffmpeg 基础命令，这里给大家简要介绍下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>-c copy：直接复制，不经过重新编码</span></span>
<span class="line"><span>-y 覆盖同名输出</span></span>
<span class="line"><span>-c:v：指定视频编码器 libx265 / libx264</span></span>
<span class="line"><span>-c:a：指定音频编码器 aac</span></span>
<span class="line"><span>-i：指定输入文件</span></span>
<span class="line"><span>-c：指定编码器 </span></span>
<span class="line"><span>-an： 去除音频</span></span>
<span class="line"><span>-vn： 去除视频流 </span></span>
<span class="line"><span>-threads 5 指定多线程数</span></span>
<span class="line"><span>-preset：指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow。</span></span>
<span class="line"><span>-b 设定视频流量，默认为200Kbit/s 内网设置2048</span></span>
<span class="line"><span>-b:v  设定视频流量，默认为200Kbit/s 内网设置 2048k 或 1024k</span></span>
<span class="line"><span>-r 设定帧速率，默认为25</span></span>
<span class="line"><span>-loop 1 表示图片无限循环</span></span>
<span class="line"><span>-shortest 表示音频文件结束</span></span>
<span class="line"><span>-ar 指定音频采样率 比如48000</span></span>
<span class="line"><span>-ac 设定声音的Channel数</span></span>
<span class="line"><span>-acodec 设定声音编解码器，未设定时则使用与输入流相同的编解码器</span></span>
<span class="line"><span>-acodec: 音频选项， 一般后面加copy表示拷贝</span></span>
<span class="line"><span>-vcodec:视频选项，一般后面加copy表示拷贝 h264则为h264编码</span></span>
<span class="line"><span>-crf 在优先保证画面质量（也不太在乎转码时间）的情况下，使用-crf参数来控制转码是比较适宜的。这个参数的取值范围为0~51，其中0为无损模式，数值越大，画质越差，生成的文件却越小。从主观上讲，18~28是一个合理的范围。18被认为是视觉无损的（从技术角度上看当然还是有损的），它的输出视频质量和输入视频相当。</span></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><p>我们将某个 mp4 视频推送到流媒体服务器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>ffmpeg -i  http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4 -c copy -f flv rtmp://192.168.101.99:1935/live/suke01</span></span></code></pre></div><p><img${ssrRenderAttr("src", _imports_4)} alt="img" loading="lazy"></p><p>然后用 SRS 自带的播放器查看推送的视频：</p><p><img${ssrRenderAttr("src", _imports_5)} alt="img" loading="lazy"></p><p>上面播放地址我们写的是 <code>FLV</code> 地址，在 Ffmpeg 将视频流通过<code>RTMP</code> 推送到流媒体服务器之后，SRS 会自动将该流转为 <code>FLV</code>，这样就可以直接在网页上播放了。</p><p><img${ssrRenderAttr("src", _imports_6)} alt="img" loading="lazy"></p><p>上面 SRS 监控台可以实时地看到正在推流的客户端以及播放的客户端，如果某个客户端正在观看视频流，可以通过控制台直接踢掉，而 SRS 的 HTTP API 也是支持这些功能的。</p><h2 id="http-api" tabindex="-1">HTTP API <a class="header-anchor" href="#http-api" aria-label="Permalink to &quot;HTTP API&quot;">​</a></h2><p>访问端口 1985，我们可以看到 SRS API 的版本信息：</p><p><img${ssrRenderAttr("src", _imports_7)} alt="img" loading="lazy"></p><p>在<a href="https://ossrs.net/lts/zh-cn/docs/v4/doc/http-api" target="_blank" rel="noreferrer">官网</a>也有对应的具体某个 API 的含义。</p><table><thead><tr><th>API</th><th>举例</th><th>接口描述</th></tr></thead><tbody><tr><td>versions</td><td>/api/v1/versions</td><td>获取服务器版本信息</td></tr><tr><td>summaries</td><td>/api/v1/summaries</td><td>获取服务器的摘要信息</td></tr><tr><td>rusages</td><td>/api/v1/rusages</td><td>获取服务器资源使用信息</td></tr><tr><td>self_proc_stats</td><td>/api/v1/self_proc_stats</td><td>获取服务器进程信息</td></tr><tr><td>system_proc_stats</td><td>/api/v1/system_proc_stats</td><td>获取服务器所有进程情况</td></tr><tr><td>meminfos</td><td>/api/v1/meminfos</td><td>获取服务器内存使用情况</td></tr><tr><td>features</td><td>/api/v1/features</td><td>获取系统支持的功能列表</td></tr><tr><td>requests</td><td>/api/v1/requests</td><td>获取请求的信息，即当前发起的请求的详细信息</td></tr><tr><td>vhosts</td><td>/api/v1/vhosts</td><td>获取服务器上的vhosts信息</td></tr><tr><td>streams</td><td>/api/v1/streams</td><td>获取服务器的streams信息</td></tr><tr><td>clients</td><td>/api/v1/clients</td><td>获取服务器的clients信息，默认获取前10个</td></tr><tr><td>configs</td><td>/api/v1/configs</td><td>CUID配置，RAW API</td></tr><tr><td>publish</td><td>/rtc/v1/publish/</td><td>WebRTC推流的API</td></tr><tr><td>play</td><td>/rtc/v1/play/</td><td>WebRTC播放流的API</td></tr></tbody></table><p>注意最后面两个 API 接口，这两个是 WebRTC 相关的，也是和我们会议系统搭建相关的。</p><h2 id="http-回调" tabindex="-1">HTTP 回调 <a class="header-anchor" href="#http-回调" aria-label="Permalink to &quot;HTTP 回调&quot;">​</a></h2><p>很多时候你在推流完成之后，如果是在业务中的话，你需要知道推送是否成功，或者其他的反馈，而 HTTP 回调就是干这个事情的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span> vhost your_vhost {</span></span>
<span class="line"><span>    http_hooks {</span></span>
<span class="line"><span>                # 启用回调配置</span></span>
<span class="line"><span>        enabled         on;</span></span>
<span class="line"><span>                //推流回调配置 回调参数会返回正在推送的流的 host 、ip、client、streamId参数  这些参数在业务中我们可以应用 从而控制对应的推流客户端 支持多个地址配置</span></span>
<span class="line"><span>        on_publish      http://127.0.0.1:8085/api/v1/streams http://192.168.101.2:8085/api/v1/streams;</span></span>
<span class="line"><span>                //停止推流监听 回调接口</span></span>
<span class="line"><span>        on_unpublish    http://127.0.0.1:8085/api/v1/streams http://192.168.101.2:8085/api/v1/streams;</span></span>
<span class="line"><span>                //播放回调</span></span>
<span class="line"><span>        on_play         http://127.0.0.1:8085/api/v1/sessions http://192.168.101.2:8085/api/v1/sessions;</span></span>
<span class="line"><span>       //.....</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>更多配置大家可以参考 <a href="https://ossrs.net/lts/zh-cn/docs/v4/doc/http-callback" target="_blank" rel="noreferrer">官网</a> 最新更新。</p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>搭建完成后请大家推流自测，FFmpeg 常用参数以及在线测试视频我在我笔记中也整理了（<a href="https://blog.wangsrbus.cn/archives/ffmpeg-chang-yong-can-shu-yi-ji-hua-zhong-hua-ji-chu-ming-ling.html" target="_blank" rel="noreferrer">详细点击查看</a>），里面有各种 画中画 画面合成的案例，有问题留言或者在社群里沟通交流。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/courses/WebRTC：实现私有化会议直播系统/18-流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _18_____SRS___WebRTC_______SRS______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _18_____SRS___WebRTC_______SRS______ as default
};
