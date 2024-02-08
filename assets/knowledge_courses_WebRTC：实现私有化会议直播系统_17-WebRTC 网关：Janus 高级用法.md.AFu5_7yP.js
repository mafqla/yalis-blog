import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.k6u9OVmb.image",l="/assets/2.asW0q4ND.image",i="/assets/3.CcuInLqB.image",o="/assets/4.kX4reYms.image",t="/assets/5.9GS3jZFj.image",c="/assets/6._PJujIQ5.image",r="/assets/7.gbLjLUDL.image",d="/assets/8.QklklDZS.image",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/17-WebRTC 网关：Janus 高级用法.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/17-WebRTC 网关：Janus 高级用法.md","lastUpdated":1707352895000}'),u={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/17-WebRTC 网关：Janus 高级用法.md"},m=e(`<p>实战完 <code>Janus</code>会议室插件之后，这节课我们扩展下<code>Janus</code>的其他高级用法，比如会议录制、流媒体整合等等。</p><p>对于会议而言，实际最常见的，也是最需要的就是云端视频录制功能了，<code>Janus</code>作为 <code>WebRTC</code>网关是有这个条件和优势的，因为所有的视频流都是需要经过网关的。</p><p>Janus 在实现云端录制时有很多值得注意的细节实现，比如为了更高的录制效率和不影响网关服务的性能，使用了自定义格式 mjr，其内部保存了原始的 RTP 包，虽然这个文件格式我们没法直接访问，但是 Janus 也提供了转换工具将其转换为目标格式。</p><p>接下来我们就先看看这个云端录制功能吧。</p><h2 id="云端录制" tabindex="-1">云端录制 <a class="header-anchor" href="#云端录制" aria-label="Permalink to &quot;云端录制&quot;">​</a></h2><p>对于云端录制，Janus 是将不同插件的录制方式区分开的 ，videoCall 插件录制是可以在通话过程中对双方进行录制，而 videoRoom 插件则是针对会议室中的每个用户录制。最大的不同在于，会议室是按照房间设置，只要你设置了房间录制，那么整个会议室中的所有参会人员进入都会自动录制的。</p><h3 id="videocall-插件录制" tabindex="-1">videoCall 插件录制 <a class="header-anchor" href="#videocall-插件录制" aria-label="Permalink to &quot;videoCall 插件录制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>videoCallPluginHandle.send({ message:</span></span>
<span class="line"><span>        { request: &quot;set&quot;, record: true,filename:&#39;/home/janus-gateway/record/&#39;+this.username+&#39;-&#39;+this.targetUserName, },</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>上面的一段代码就是手动开启云端录制的，可以自定义文件路径、文件名称。</p><p><img src="`+p+`" alt="img" loading="lazy"></p><p>上面截图中的就是录制的文件，文件命名方式就是按照我代码中指定的通话双方的用户名来的。但是，请仔细看为何会出现三个文件呢？然后再看下三个文件名称后面半部分：<code>-data.mjr</code>、<code>-audio.mjr</code>、<code>-video.mjr</code>，单纯地看单词的意思，想必大家也能猜到了这几个文件代表的意思了，我就不含糊了，直接给出解释：</p><ul><li>Data 代表的是数据通道的数据；</li><li>Audio 代表音频文件数据；</li><li>Video 代表视频文件数据。</li></ul><p>然后特殊的文件后缀 <code>.mjr</code>就是 Janus 自定义的数据保存文件格式了，内部包含了原始数据包。</p><h3 id="videoroom-插件录制" tabindex="-1">videoRoom 插件录制 <a class="header-anchor" href="#videoroom-插件录制" aria-label="Permalink to &quot;videoRoom 插件录制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>createJanusRoom(roomId,roomUserCount,bitrate,pin,desc){</span></span>
<span class="line"><span>  const that = this;</span></span>
<span class="line"><span>  let create = {</span></span>
<span class="line"><span>    request : &#39;create&#39;,</span></span>
<span class="line"><span>    room: parseInt(roomId),</span></span>
<span class="line"><span>    bitrate: bitrate ? parseInt(bitrate)*1000: 300*1000,</span></span>
<span class="line"><span>    publishers: roomUserCount? parseInt(roomUserCount) : 12,//参与人数</span></span>
<span class="line"><span>    description:desc,</span></span>
<span class="line"><span>    record : true,//（是否要录制这个房间，默认=false）</span></span>
<span class="line"><span>    rec_dir : &quot;/home/janus-gateway/record/&quot;, //&lt;文件夹应存储录音，启用时&gt;</span></span>
<span class="line"><span>    permanent:false,//是否持久化</span></span>
<span class="line"><span>    audiolevel_event:false, //向其他用户发送事件</span></span>
<span class="line"><span>    audio_active_packets:50 //音频级别的数据包数量，默认=100，2秒</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if(pin){</span></span>
<span class="line"><span>    create.pin = pin; //加入房间所需的密码</span></span>
<span class="line"><span>    create.secret = pin;//编辑/销毁房间所需的密码</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  videoRoomPluginHandle.send({</span></span>
<span class="line"><span>    &quot;message&quot; : create,</span></span>
<span class="line"><span>    success: function(result) {</span></span>
<span class="line"><span>      console.log(&quot;创建房间&quot;,result)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>实际上，上述代码就是创建房间的代码，但是里面有个配置：<code>record</code>和 <code>rec_dir</code>，这两个是设置要不要录制房间以及录制文件位置的。我们再看看录制文件：</p><p><img src="`+l+`" alt="img" loading="lazy"></p><p>可以很直观地看到 videoRoom 开头，第二段 199 表示的是房间号，后面的表示用户的 ID（我用 111、222、333 三个用户 ID 加入的会议室），录制文件后半部分和前面 videoCall 插件录制格式一致，都是 data、audio、video 三种格式分离的。</p><p>以上就是两种插件在云端录制的会议文件，但是现在有个问题，上面已经录制好的文件并不是我们熟悉的 mp4 等常见视频格式，这意味着拿到上述文件后我们也是没法直接播放的，那怎么办？</p><p>当然有解决方案了，Janus 这个也替我们考虑好了，其内部也提供了转换工具，让我们直接可以将对应的 mjr文件转换成对应可直接播放的音频和视频文件格式。</p><h3 id="文件转换" tabindex="-1">文件转换 <a class="header-anchor" href="#文件转换" aria-label="Permalink to &quot;文件转换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>janus-pp-rec ./$media_prefix-video.mjr $tmp_video.webm</span></span>
<span class="line"><span>janus-pp-rec ./$media_prefix-audio.mjr $tmp_video.opus</span></span></code></pre></div><p>上述代码就是核心转换语句，视频文件转换为 webm 格式，音频转换为 opus 格式。看下面转换实例：</p><p><img src="`+i+'" alt="img" loading="lazy"></p><p><img src="'+o+`" alt="img" loading="lazy"></p><p>上面转换完成后的视频和音频格式文件是直接可以播放的，按照业务，可以将对应的视频或者纯音频存档等，如果需要视频和音频合成文件，办法也多得很，比如针对上面两种文件格式，利用 ffmpeg 合并音频视频即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>ffmpeg -i $tmp_audio -i $tmp_video  -c:v copy -c:a opus -strict experimental $output_file</span></span></code></pre></div><p>具体的业务场景还需要和自己的架构匹配，比如和在线 OSS 结合，将对应文件储存在 OSS 中等等。</p><h2 id="多流传输" tabindex="-1">多流传输 <a class="header-anchor" href="#多流传输" aria-label="Permalink to &quot;多流传输&quot;">​</a></h2><p>Janus 的高级特性之一：<code>multistream</code>，简单来讲就是在单个连接中传输多个视频流。</p><p>在 <code>videoRoom</code>场景中使用代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async startShareScreen(){</span></span>
<span class="line"><span>        this.shareStreamTag = true</span></span>
<span class="line"><span>        videoRoomPluginHandle.createOffer({</span></span>
<span class="line"><span>                tracks: [{ type: &#39;screen&#39;, add: true, capture: true }],</span></span>
<span class="line"><span>                success: function(jsep) {</span></span>
<span class="line"><span>                    videoRoomPluginHandle.send({ message: { request: &quot;configure&quot;,video: true }, jsep: jsep })</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                error: function(error) {</span></span>
<span class="line"><span>                    console.log(&#39;WebRTC error... &#39; + error.message);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+t+'" alt="img" loading="lazy"></p><p>看上图日志，mid:0 为音频流，mid:1 为视频流，mid:3 也是视频流（我分享屏幕的流），也就是说，我在摄像头语音的同时，屏幕分享也是同步分发的。</p><p>请注意监听到的流不一定都是添加哦，<code>added</code>为 true 的是有新的流过来，false 则表示某个流断开或者该用户离开了。</p><p><img src="'+c+`" alt="img" loading="lazy"></p><h2 id="音频级别会话提醒" tabindex="-1">音频级别会话提醒 <a class="header-anchor" href="#音频级别会话提醒" aria-label="Permalink to &quot;音频级别会话提醒&quot;">​</a></h2><p>这个功能算是会议中最友好的功能了，尤其是在 N 多个人开会的时候，会自动显示是哪位参会人在讲话，具体设置还是和 videoRoom 插件相关的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>let create = {</span></span>
<span class="line"><span>    request : &#39;create&#39;,</span></span>
<span class="line"><span>    room: parseInt(roomId),</span></span>
<span class="line"><span>    bitrate: bitrate ? parseInt(bitrate)*1000: 300*1000,</span></span>
<span class="line"><span>    publishers: roomUserCount? parseInt(roomUserCount) : 12,//参与人数</span></span>
<span class="line"><span>    description:desc,</span></span>
<span class="line"><span>    record : false,//（是否要录制这个房间，默认=false）</span></span>
<span class="line"><span>    rec_dir : &quot;/home/janus-gateway/record/&quot;, //&lt;文件夹应存储录音，启用时&gt;</span></span>
<span class="line"><span>    permanent:false,//是否持久化</span></span>
<span class="line"><span>    audiolevel_event:false, //向其他用户发送事件</span></span>
<span class="line"><span>    audio_active_packets:20 ,//音频级别的数据包数量，默认=100，2秒</span></span>
<span class="line"><span>    audiolevel_event:true,</span></span>
<span class="line"><span>    audiolevel_ext:true,</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>着重看上面创建会议室的后面三个参数，第一个就是监听数据包，越低则表示响应得越灵敏，接收一点点声音就触发提醒事件；第二个参数表示开启事件提醒；第三个参数则表示是否向其他人发送对应的事件，当然必须开启的。</p><p>事件监听的位置和其他的通用事件监听位置一样，看代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>onMessageForVideoRoom(msg,jsep){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        const event = msg[&quot;videoroom&quot;]</span></span>
<span class="line"><span>        if(jsep) {</span></span>
<span class="line"><span>          //设置远程应答描述</span></span>
<span class="line"><span>          videoRoomPluginHandle.handleRemoteJsep({ jsep: jsep })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        switch (event){</span></span>
<span class="line"><span>          case &#39;joined&#39;:        </span></span>
<span class="line"><span>                //加入房间事件</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>          case &#39;talking&#39;:</span></span>
<span class="line"><span>                  //正在发言的事件</span></span>
<span class="line"><span>                that.$message.success(msg[&#39;id&#39;]+&quot;正在讲话&quot;)</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>          case &#39;event&#39;:</span></span>
<span class="line"><span>            //会议内其他仅会议事件比如 离开 、加入、被踢、等等 </span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>          default:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><img src="`+r+`" alt="img" loading="lazy"></p><p>看上图截图日志，正在发言和停止都有对应的提醒事件，同时还会携带发言人的用户 ID，通过该 ID 可以直接检索到房间内的用户，进而在会议室中提醒大家谁正在发言。</p><p>最后关于音频级别事件而言，<code>audio_active_packets</code>数据包这个配置不能太低，如果太低就会看到我上面控制台打印的一堆日志，稍微咳嗽或者呼吸声稍大一点就会触发，频繁的提醒，对于会议质量而言并不是很好，因此大家在实际场景中可以稍微配置大一些。</p><h2 id="一键闭麦全局控制" tabindex="-1">一键闭麦全局控制 <a class="header-anchor" href="#一键闭麦全局控制" aria-label="Permalink to &quot;一键闭麦全局控制&quot;">​</a></h2><p>在众多人数参会的会议中存在很多不可避免的问题，比如人员嘈杂、发言混乱、发言内容不可控等，因此管理员拥有全局闭麦权限是很有意义的。</p><p>在 Janus 网关中，videoRoom 插件也提供了这样的能力，可以一键控制会议室中每个成员的麦克风，具体控制代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>closeMic(row,b){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        that.globalAudioStatus = !that.globalAudioStatus</span></span>
<span class="line"><span>        videoRoomPluginHandle.send({</span></span>
<span class="line"><span>          &#39;message&#39;: {</span></span>
<span class="line"><span>            request: &quot;moderate&quot;,</span></span>
<span class="line"><span>            // secret: &quot;&quot;,</span></span>
<span class="line"><span>            room : that.roomNumber,//房间号</span></span>
<span class="line"><span>            id : row.id,//用户唯一ID</span></span>
<span class="line"><span>            mid: &#39;0&#39;,//音频包的标识</span></span>
<span class="line"><span>            mute : b//true/false  禁言和解禁</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          success: function (res){</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          error: function (err){</span></span>
<span class="line"><span>            console.log(err)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>核心参数也就那么几个，在代码中我都注释了，很好理解。</p><p>具体演示：</p><p><img src="`+d+'" alt="image.png" loading="lazy"></p><h2 id="本节课相关代码" tabindex="-1">本节课相关代码 <a class="header-anchor" href="#本节课相关代码" aria-label="Permalink to &quot;本节课相关代码&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo04-janus-02.vue" target="_blank" rel="noreferrer">本接口代码仓库地址</a></p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>通过 videoCall 和 videoRoom 插件，我们实现了会议所需要的基本功能，无论是控制还是展示，Janus 网关可以很轻易地实现一个无需后台的私有化会议室，这对于我们业务而言是最佳的。</p><p>所以如果你的业务场景中需要会议系统，但不想自己实现信令服务器，则完全可以用现在的第二种架构来实现。</p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>既然都学习了两种插件的用法了，那么大家课后可以玩玩另一个插件：<code>janus.plugin.streaming</code>，这个插件可以实现各种媒体流的播放，比如：RTP、RTSP、RTMP 等。对流媒体有使用场景的同学，我相信很需要这个插件，如果遇到问题了，可以在评论区或社群留言。</p>',59),h=[m];function g(v,_,b,k,f,q){return n(),a("div",null,h)}const R=s(u,[["render",g]]);export{y as __pageData,R as default};
