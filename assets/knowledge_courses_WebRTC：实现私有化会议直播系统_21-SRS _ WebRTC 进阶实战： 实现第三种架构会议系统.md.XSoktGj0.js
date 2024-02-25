import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.vFV0qWEi.image",o="/assets/2.diZiYXyi.image",l="/assets/3.DcnnBiL6.image",i="/assets/4.c-SGTK1E.image",t="/assets/5.MZbZVc3Z.image",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/21-SRS + WebRTC 进阶实战： 实现第三种架构会议系统.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/21-SRS + WebRTC 进阶实战： 实现第三种架构会议系统.md","lastUpdated":1708838158000}'),c={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/21-SRS + WebRTC 进阶实战： 实现第三种架构会议系统.md"},d=e('<p>这节课我们要学习第三种架构的会议系统，它大体上和第二种类似，第三种架构会议系统适用场景如下：多种不同源的流接入会议、云端录制、画面转播、会议直播等媒体较复杂的场景。</p><p>虽说和第二种架构类似，但是我们也可以从适用场景看到，第三种架构体现出来的关键词是“媒体场景复杂”，我们从下面这张图看看这种架构的优势。</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>首先接入会议的不仅仅有我们常用的电脑和手机，还有监控、硬件终端设施等，观看会议的不仅有会议中的成员，还有所谓直播场景下的“观众”。</p><p>同时，入会媒体流也变得复杂多样，比如高清监控视频大多数是 <code>H.265</code> 的、音频格式也是非常用格式，这些媒体流在浏览器上无法直接播放，此种情况下就涉及到媒体流的统一转换，让所有媒体流统一兼容。</p><p>因此第三种架构的会议系统服务端也被称作是 MCU 服务器，所有要参会的流媒体首先进入 <code>MCU</code> 服务器，在服务器内部常见的“动作”如下：</p><ul><li><strong>媒体转码</strong>。<code>H.265</code> 转 <code>H.264</code> 、<code>RTMP</code> 或 <code>RTSP</code> 转 <code>RTC</code>，或 <code>RTP </code>转 <code>FLV</code> 等格式，当然这里面转换格式的丰富度取决于当前 <code>MCU</code> 服务器所支持的转换类型。</li><li><strong>云端录制</strong>。一般经过媒体服务器的流都是会被媒体服务器过滤的。所以此时可以通过相关的配置让服务器录制视频。</li><li><strong>服务端 AI 检测</strong>。因为涉及到直播场景，如果是大型直播的话，内容安全一定是要考虑的，而<code>MCU</code>服务器正好有这个处理能力，在服务端媒体转换处接入 AI 内容鉴别，让直播内容经过 AI 鉴定中心，确保内容可以实时检测，如果发现非法内容， AI 可以直接终止直播。</li><li><strong>其他场景</strong>。还有其他的能力，比如媒体流混合、音频提取、视频抽帧存档等等。</li></ul><p>可以说，<code>MCU</code>服务器是一个流媒体的大脑，比起第二种 <code>SFU</code>架构的 <code>Janus</code> 网关服务器仅仅转发媒体流的功能，<code>MCU</code> 服务器就是一个“超人”。</p><p>好了，了解完<code>MCU</code>服务器的基本功能之后，再回到我们课程讲的<code>SRS</code> 流媒体服务上，<code>SRS</code> 就是具备这种能力的服务，从上节课搭建的直播推流中我们就能看出，SRS 具有丰富的推流方式、多样化的直播流格式、高性能的媒体处理能力。</p><h2 id="架构思考" tabindex="-1">架构思考 <a class="header-anchor" href="#架构思考" aria-label="Permalink to &quot;架构思考&quot;">​</a></h2><p>接下来我们来思考下，如何借助 SRS 实现第三种架构的会议系统，看下图：</p><p><img src="'+o+`" alt="" loading="lazy"></p><p>上图，第一个流程是<code>SFU</code>架构会议，第二个和第三个是用 <code>MCU</code> 实现的第三种架构会议系统。</p><p>仔细看后面两个架构流程，最后一个从<code>MCU</code> 服务器出来到用户的线条少了一个，即从 <code>MCU</code> 出来的流只有一个，而进入的流有三个，这是为何呢？这就涉及到<code>MCU</code>的重要功能了，媒体流的合并。合并后所有用户的媒体流都是经过媒体一个通道出来，即一个流中有三个画面（例如：中间一个大画面，两边两个小的画面）。</p><p>上图中，第三种媒体架构流程对于服务器的资源消耗巨大，因此大多数厂商所所提供的会议系统都是单独流，类似 SFU 架构的会议系统，但是结合了 <code>MCU</code> 服务器，让媒体处理能力增强的同时，架构更加灵活。</p><p>而我们也采用 <code>SFU</code>架构 + <code>MCU</code> 服务组合的方式去现实第三种架构会议系统。当然如果你对媒体合并感兴趣的话，可以看看下面合并 <code>2X2媒体流</code>的代码，<code>MCU</code>服务端处理方式都是一样的。</p><blockquote><p>下面代码在 Windows 的 CMD 中执行，如果是 MAC 或 Linux，则将上箭头换成系统换行符。最后的 RTMP 地址为SRS 服务端的地址，和上节课推流系统的一样。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>ffmpeg.exe -y  ^</span></span>
<span class="line"><span>-re -i http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4 ^</span></span>
<span class="line"><span>-re -i http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4  ^</span></span>
<span class="line"><span>-re -i http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4 ^</span></span>
<span class="line"><span>-re -i http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4 ^</span></span>
<span class="line"><span>-filter_complex  ^</span></span>
<span class="line"><span>&quot;nullsrc=size=1920x1080 [base]; ^</span></span>
<span class="line"><span>[0:v] setpts=PTS-STARTPTS,scale=1440x1080 [middle]; ^</span></span>
<span class="line"><span>[1:v] setpts=PTS-STARTPTS,scale=480x360 [rightup]; ^</span></span>
<span class="line"><span>[2:v] setpts=PTS-STARTPTS,scale=480x360 [rightmiddle]; ^</span></span>
<span class="line"><span>[3:v] setpts=PTS-STARTPTS,scale=480x360 [rightdown]; ^</span></span>
<span class="line"><span>[base][middle] overlay=1 [tmp1]; ^</span></span>
<span class="line"><span>[tmp1][rightup] overlay=1:x=1440 [tmp2]; ^</span></span>
<span class="line"><span>[tmp2][rightmiddle] overlay=1:x=1440:y=360 [tmp3]; ^</span></span>
<span class="line"><span>[tmp3][rightdown] overlay=1:x=1440:y=720&quot; -threads 5 -map 0:a -c:a copy -preset:v ultrafast -c:v libx264 -f flv rtmp://127.0.0.1:1935/live/suc</span></span></code></pre></div><p>那么如何将 SFU 架构和 MCU 服务组合呢，毕竟 MCU 服务器是没有和 Janus 网关类似业务处理能力的，所有的用户管理、房间管理、会议管理等涉及业务的数据都是要我们自己去处理的。所以我们需要思考下，如何借助现有的 Socket 信令服务器去实现上述业务数据处理的管理。</p><p>大家还记不记得上节课《<a href="https://juejin.cn/book/7168418382318927880/section/7173918834172362765" target="_blank" rel="noreferrer">20 | SRS + WebRTC 进阶实战：搭建直播系统</a>》中直播连麦的过程，如果忘记的同学再去看下哦。在直播连麦的过程中，我们连麦原理，<strong>就是将各自的流推到流媒体中心后</strong> <strong>，</strong> <strong>告诉对方自己的推流</strong> ****<strong>ID，然后对方拉流即可看到我们的画面。</strong> 实际上会议也是一样的，我们可以通过下面思路实现。</p><ol><li>携带<code>唯一ID</code>、昵称、房间号注册到 <code>Socket</code> 服务端。</li><li>注册成功后，将自己的画面流通过 <code>WebRTC</code>推流到 <code>SRS</code>，<code>推流ID</code> 为用户自己的<code>唯一ID</code>。</li><li>如果同一个房间内有人，则广播自己的信息到房间内所有人，收到新加入成员后，使用新成员<code>唯一ID</code>去 <code>SRS</code> 拉流（这个 ID 就是媒体流 ID）。</li><li>房间内所有人的流都需要主动从 <code>SRS</code>拉流，从而形成会议。</li></ol><p>以上就是实现会议的基础流程，总体而言，整个流程上比较简单，接下来我们进入实战阶段。</p><h2 id="会议实战" tabindex="-1">会议实战 <a class="header-anchor" href="#会议实战" aria-label="Permalink to &quot;会议实战&quot;">​</a></h2><h3 id="用户注册以及注意事项" tabindex="-1">用户注册以及注意事项 <a class="header-anchor" href="#用户注册以及注意事项" aria-label="Permalink to &quot;用户注册以及注意事项&quot;">​</a></h3><p>请注意，注册的用户 ID 一定要唯一，如果在自己的业务系统中，则可以依靠数据库记录，我展示的例子以浏览器指纹作为唯一 ID。后面推流就依赖这个 ID 去推流，SRS 内部也是依靠这个 ID 区分不同流的，而我们会议中拉流也是靠这个区分用户，一定要注意哦。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//浏览器指纹获取</span></span>
<span class="line"><span>const fpPromise = FingerprintJS.load()</span></span>
<span class="line"><span>fpPromise</span></span>
<span class="line"><span> .then(fp =&gt; fp.get())</span></span>
<span class="line"><span> .then(result =&gt; {</span></span>
<span class="line"><span>         //和UUID类似，一串字符串</span></span>
<span class="line"><span>         if(!this.formInline.userId){</span></span>
<span class="line"><span>                 this.formInline.userId = result.visitorId</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p><img src="`+l+`" alt="" loading="lazy"></p><p>上面除了基础的用户信息，还携带了一些其他的参数，记录当前用户使用的是哪个摄像头或者麦克风，这些不是必需的，因此可以去掉。</p><h3 id="新用户入会" tabindex="-1">新用户入会 <a class="header-anchor" href="#新用户入会" aria-label="Permalink to &quot;新用户入会&quot;">​</a></h3><p><strong>对于入会者</strong></p><p>新用户加入到会议室后，还要发布自己的媒体流到 <code>MCU</code> 服务器，也就是 <code>SRS</code> 中，这样其他用户就可以通过新用户的 ID 从 <code>SRS</code> 中拉取媒体流。</p><p>入会后必须判断房间内是否已经有参会人员，如果有，则拉取已参会人员的媒体流。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//监听房间用户列表 （新用户加入房间后首先会发送房间列表回调事件，等拿到用户列表后再开始初始化会议室）</span></span>
<span class="line"><span>this.linkSocket.on(&quot;roomUserList&quot;,(e)=&gt;{</span></span>
<span class="line"><span>    console.log(&quot;roomUserList&quot;,e)</span></span>
<span class="line"><span>    that.roomUserList = e;</span></span>
<span class="line"><span>    //回调成功则代表加入到会议室100%成功，接下来就是初始化当前客户端会议室媒体渲染</span></span>
<span class="line"><span>    this.initMeetingRoom()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>---------------------</span></span>
<span class="line"><span>async initMeetingRoom(){</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    //发布自己客户端流之前先判断本地媒体流是否已经获取</span></span>
<span class="line"><span>    if(!this.localStream){</span></span>
<span class="line"><span>            this.localStream = await this.getLocalUserMedia();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //获取到本地流后，本地DOM预览自己的画面</span></span>
<span class="line"><span>    this.setDomVideoStream(&quot;localMediaDom&quot;,this.localStream);</span></span>
<span class="line"><span>    //推流到SRS</span></span>
<span class="line"><span>    await this.getPushSdp(this.formInline.userId,this.localStream);</span></span>
<span class="line"><span>    //判断房间内是否有其他人（这一步主要是为了判断房间内是否已经有人了，如果有人则直接拉取房间内用户的媒体流）</span></span>
<span class="line"><span>    this.others = this.roomUserList.filter(e =&gt; e.userId != this.formInline.userId)</span></span>
<span class="line"><span>    for(let i=0; i&lt; this.others.length ;i++){</span></span>
<span class="line"><span>            let user = this.others[i];</span></span>
<span class="line"><span>            //拉其他用户媒体流</span></span>
<span class="line"><span>            await this.getPullSdp(user.userId)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>对于已在会议室用户</strong></p><p>新人入会，已经在会议中的人员是会收到事件通知的。如下，用户 ID 为 999 的新人加入会议室后，其他成员看到的信息。</p><p><img src="`+i+`" alt="" loading="lazy"></p><p>此时，已在会议室的成员监听到加入事件后，必须主动拉取新人画面，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>if(e[&#39;type&#39;] === &#39;join&#39;){</span></span>
<span class="line"><span>that.$message.success(nickname+&quot; 加入房间&quot;)</span></span>
<span class="line"><span>//数组push新用户元素 同时页面会生成对应 DOM</span></span>
<span class="line"><span>that.others.push({</span></span>
<span class="line"><span>        userId:userId,</span></span>
<span class="line"><span>        nickname:nickname</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//拉流</span></span>
<span class="line"><span>await that.getPullSdp(userId)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="用户离开会议室" tabindex="-1">用户离开会议室 <a class="header-anchor" href="#用户离开会议室" aria-label="Permalink to &quot;用户离开会议室&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//通知房间内成员</span></span>
<span class="line"><span>that.$message.success(nickname+&quot; 离开房间&quot;)</span></span>
<span class="line"><span>//移除DOM</span></span>
<span class="line"><span>that.removeChildVideoDom(userId)</span></span>
<span class="line"><span> ---------------------</span></span>
<span class="line"><span> //直接移除指定的DOM元素即可 （DOM ID课程中都是按照用户ID为唯一区分的）</span></span>
<span class="line"><span> removeChildVideoDom(domId){</span></span>
<span class="line"><span>    let video = document.getElementById(domId)</span></span>
<span class="line"><span>    if(video){</span></span>
<span class="line"><span>            video.parentNode.removeChild(video)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h3><p><img src="`+t+'" alt="" loading="lazy"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>第三种混合架构会议系统，实际上是三种架构里面最简洁且最强大的，按照上述搭建过程，实际上我们最应该注意的就是媒体流的<code>唯一ID</code>，也就是推流到 <code>SRS</code> 的 <code>StreamId</code>。按照这个推论，只要我们知道推流 ID，就可以拉取这个流到我们的会议室中，无论是本地视频推流还是监控、摄像头推流。</p><p>但是强大归强大，MCU 消耗的资源不容忽视，如果你要架设一套基于 MCU 的会议系统，那么你的 MCU 服务器必须很强大，同时涉及到媒体流的归一处理，因此宽带也是需要很大的消耗。</p><p>到这里我们算是学完三种架构的会议系统架设过程了，下面我们对这三种架构的场景做些适当的分析，让我们可以针对适当的场合选择适当的架构，更好地利用资源。</p><ul><li><p>内网。三种架构都可以。</p><ul><li>Web 会议，无其他终端等设施，单次同一会议室人数在 20 以内，推荐第一种 <code>Mesh</code>架构。</li><li>Web 会议，无硬件终端，同一个会议室人数 20 人以上，推荐第二种 <code>WebRTC</code>网关服务器参与的 <code>SFU</code>架构。</li><li>多媒体+Web 会议，有监控等硬件终端，媒体复杂。直接用 <code>MCU</code>服务器参与的 <code>SFU+MCU</code> 混合架构。</li></ul></li><li><p>公网。</p><ul><li>宽带有限且单次会议（携带视频媒体）人数不超过 20，第一种 <code>Mesh</code> 架构，可降低媒体质量等，提高参与人数。</li><li>宽带有限，单次会议超过 20 人数，可限制同时打开摄像头人数和媒体质量，推荐第一种 <code>Mesh</code> 架构和 <code>WebRTC</code>网关参与的<code>SFU</code>架构。</li><li>宽带无限制，可选择<code>WebRTC</code> 网关参与的 SFU 架构和第三种 <code>SFU+MCU</code> 混合架构。</li></ul></li></ul><p>当然，严格意义上来说，还有一种架构，我们在文章开头提到的 <code>MCU</code>合流，然后客户端仅仅拉取一个流的纯<code>MCU</code>架构，这算是第四种架构，这个纯 <code>MCU</code>架构对于服务器的 CPU、内存要求非常高，而且在客户端，对于媒体流的控制不是很灵活，因此这里不做推荐。</p><h3 id="相关源码" tabindex="-1">相关源码 <a class="header-anchor" href="#相关源码" aria-label="Permalink to &quot;相关源码&quot;">​</a></h3><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/srs-meeting-room.vue" target="_blank" rel="noreferrer">本节相关源码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>本节课的会议源码中，我没有将媒体控制加入，大家完成上述会议基础功能后，可以参考前面的媒体控制<a href="https://juejin.cn/book/7168418382318927880/section/7172837736468971551" target="_blank" rel="noreferrer">《10|会议实战：实时通话过程中音频、视频画面实时控制切换》</a>章节，完善会议媒体控制功能。媒体控制我们在前面推流直播章节中也有，给大家写了具体案例，大家都可以参考下。</p>',52),r=[d];function h(m,u,g,S,_,b){return n(),a("div",null,r)}const f=s(c,[["render",h]]);export{v as __pageData,f as default};
