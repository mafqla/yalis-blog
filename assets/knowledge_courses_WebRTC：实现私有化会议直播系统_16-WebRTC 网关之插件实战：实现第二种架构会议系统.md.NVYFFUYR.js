import{_ as s,o as n,c as a,U as p}from"./chunks/framework.5FtAyiyV.js";const e="/assets/1.M8nVRUfm.image",l="/assets/2.RO1Qqj3w.image",i="/assets/3.KJB34_2M.image",o="/assets/4.TgOFgx8A.image",t="/assets/5.jw0jllw0.image",c="/assets/6.51-DrevK.image",r="/assets/7.fm8IFd6e.image",u="/assets/8.CQE9RPQK.image",d="/assets/9.lsDCZGox.image",m="/assets/10._YcVyzFy.image",g="/assets/11.L3QdcjNE.image",j=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/16-WebRTC 网关之插件实战：实现第二种架构会议系统.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/16-WebRTC 网关之插件实战：实现第二种架构会议系统.md","lastUpdated":1704526735000}'),h={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/16-WebRTC 网关之插件实战：实现第二种架构会议系统.md"},q=p('<p>在初步尝试完第一个点对点音视频呼叫插件之后，这节课我们就要深入到会议系统实战了。既然是会议，那就肯定离不开 “多人” 和 “多房间” 这两个概念了。这两个概念和我们的 Janus 网关搭在一起的话，那必然是离不开 <code>VideoRoom</code> 插件的，因此我们这节课的目的就是使用<code>VideoRoom</code> 插件完成第二种架构的会议系统。</p><p>在正式开始之前，我们还要注意标题中提到的“第二种架构”这个关键词，我们在学第一种会议系统的时候，用的架构是 <code>Mesh</code>架构，而在本节课很明显就不再是 <code>Mesh</code>架构了，而是一种全新架构：<code>SFU</code>架构。</p><p>我们先回顾下在小册<a href="https://juejin.cn/book/7168418382318927880/section/7172208545868283917" target="_blank" rel="noreferrer">《09 |会议实战：WebRTC 实现多房间多用户的第一种架构会议系统》</a>这一讲中已经学过的 Mesh 架构的大体架构图：</p><p><img src="'+e+'" alt="" loading="lazy"></p><p>简述就是：你要和 N 个客户端通话，前提是你必须与这 N 个客户端都一一建立 WebRTC 关联。</p><p>而这节课的 SFU 架构图如下：</p><p><img src="'+l+`" alt="" loading="lazy"></p><p>我们对着架构图，利用实际场景来解读下当前架构的工作流程。</p><p><strong>前置条件：</strong></p><p>有三个客户端浏览器 A、B、C ，一个 Janus 网关服务器，三个客户端要借助网关的能力达到视频会议的目的。</p><p><strong>通话流程：</strong></p><p>A、B、C 三个客户端开始通话之前，并不是简简单单地在 Janus 网关中注册自己的信息就行了，对于 P2P 通话而言，进行注册后直接呼叫即可（上一节内容），但是在本节会议插件中是不行的。</p><p>要实现会议的功能，客户端在完成注册信息到网关之后，还要和 Janus 网关进行 RTC 关联，对的你没看错，是和网关，而不是直接和别的客户端进行 RTC 关联。这里网关担任的角色类似一个“房产中介”，所有要参会的客户端都可看作是“房东”，而客户端的媒体流可看作是“房东”的“房子”，这样类比下来，我们的网关是不是很形象了？</p><p>等所有的客户端都和网关关联之后，这些客户端就可以自己去订阅和自己在同一个会议室的客户端媒体流了。这整个过程，实际上就是房东将房子挂在中介，然后想要房子的人去中介那里去购买一样。</p><p>再看架构图 A、B、C 在和 SFU 网关进行 RTC 关联之后，A 订阅 B、C 的媒体流并不需要再去和 B、C 去“打交道”，而是直接和网关交互，这就是 SFU 架构下媒体交互的基础流程。</p><p><strong>SFU 架构优缺点：</strong></p><ul><li><strong>节约宽带</strong>。在当前架构中，可以很明显地看到，任意一个客户端只需要向网关发送一份媒体流即可。</li><li><strong>扩展性更强</strong>。服务端可容纳的客户端更多。</li><li><strong>控制媒体</strong>。因为涉及到了中间服务器，那么必然是可以对媒体流进行处理的，比如录制、参数调节、画面变更等。</li><li><strong>安全</strong>。同上条，在接收到媒体包之后，服务端可以动态进行加密等。</li><li><strong>服务端压力大</strong>。因为所有的媒体流的转发交互基本都在服务端，如果涉及到录制等，对服务器压力更大，同时服务端所需的宽带也有一定的要求。</li></ul><p>讲完了 SFU 架构的相关概念后，我们通过 Janus 的会议插件去具体实战下，实现我们小册的第二个目标：第二种架构的会议系统。</p><h2 id="会议插件初始化" tabindex="-1"><strong>会议插件初始化</strong> <a class="header-anchor" href="#会议插件初始化" aria-label="Permalink to &quot;**会议插件初始化**&quot;">​</a></h2><p>初始化的核心和上一节 <code>videoCall</code>插件一样，我们从开始就讲过了，Janus 的特性就是 “即插即拔”，<code>videoCall</code>插件的初始化也是一样的。</p><p>除了初始化之外，里面涉及的的回调方法也是通用的，但是回调的具体参数是做了区分的，这个我们后面仔细看下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>initVideoRoomPlugin(){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        janus.attach({</span></span>
<span class="line"><span>                plugin: &quot;janus.plugin.videoroom&quot;,</span></span>
<span class="line"><span>                opaqueId: opaqueId,//客户端唯一标识</span></span>
<span class="line"><span>                success: function(pluginHandle) {</span></span>
<span class="line"><span>                    //插件初始化成功后 pluginHandle 就是全局句柄，通过 pluginHandle可以操作当前</span></span>
<span class="line"><span>                    //会话的所有功能</span></span>
<span class="line"><span>                    videoRoomPluginHandle = pluginHandle</span></span>
<span class="line"><span>                    console.log(&quot;会议插件初始化成功&quot;)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                error: function(cause) {</span></span>
<span class="line"><span>                    //插件初始化失败</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>               webrtcState: function(on) {</span></span>
<span class="line"><span>                     console.log(&quot;WebRTC PeerConnection 状态 is &quot; + (on ? &quot;up&quot; : &quot;down&quot;) + &quot; now&quot;);</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>               slowLink: function(uplink, lost, mid) {</span></span>
<span class="line"><span>                       console.warn(&quot;Janus 问题报告： &quot; + (uplink ? &quot;sending&quot; : &quot;receiving&quot;) +</span></span>
<span class="line"><span>                               &quot; packets on mid &quot; + mid + &quot; (&quot; + lost + &quot; lost packets)&quot;);</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>                onmessage: function(msg, jsep) {</span></span>
<span class="line"><span>                        console.log(&quot;msg&quot;,msg)</span></span>
<span class="line"><span>                        //msg 交互信息包括挂断 接听等事件监听</span></span>
<span class="line"><span>                        // jsep  协商信令</span></span>
<span class="line"><span>                        that.onMessageForVideoRoom(msg,jsep)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                onlocaltrack: function(track, added) {</span></span>
<span class="line"><span>                    console.log(&quot;本地媒体&quot;,track,added)</span></span>
<span class="line"><span>                    if(added===true){</span></span>
<span class="line"><span>                            that.setDomVideoTrick(&quot;localDomId&quot;,track)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                                </span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                onremotetrack: function(track, mid, added) {</span></span>
<span class="line"><span>                   </span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                oncleanup: function() {</span></span>
<span class="line"><span>                    // PeerConnection 关闭监听</span></span>
<span class="line"><span>                    // 同时可以创建信的句柄(旧的可用)重新初始化</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                detached: function() {</span></span>
<span class="line"><span>                     // PeerConnection 关闭监听</span></span>
<span class="line"><span>                    // 同时可以创建信的句柄（旧的不可用）重新初始化</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="会议插件基本功能" tabindex="-1"><strong>会议插件基本功能</strong> <a class="header-anchor" href="#会议插件基本功能" aria-label="Permalink to &quot;**会议插件基本功能**&quot;">​</a></h2><p>初始化完成之后就是使用了，而使用的具体细节就需要看看 <code>videoRoom</code>插件的具体功能了，下面我们来看看插件的基本功能和基础用法。</p><p><strong>动态创建会议室</strong>。要实现会议，前提条件就是可以动态提供不同的房间让不同的客户端去加入，<code>videoRoom</code>插件提供了对应创建房间的 API ，具体参数看下面代码注释：</p><p><img src="`+i+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>createJanusRoom(roomId,roomUserCount,bitrate,pin,desc){</span></span>
<span class="line"><span>      const that = this;</span></span>
<span class="line"><span>      let create = {</span></span>
<span class="line"><span>        request : &#39;create&#39;,</span></span>
<span class="line"><span>        room: parseInt(roomId),//房间号 必须为数字类型</span></span>
<span class="line"><span>        bitrate: bitrate ? parseInt(bitrate)*1000: 300*1000,//比特率 限制房间内速率</span></span>
<span class="line"><span>        publishers: roomUserCount? parseInt(roomUserCount) : 12,//参与人数 设置房间的最大容纳人数</span></span>
<span class="line"><span>        description:desc,//房间描述 备注 自定义房间名称</span></span>
<span class="line"><span>        record : false,//（是否要录制这个房间，默认=false）</span></span>
<span class="line"><span>        rec_dir : &quot;/home/janus-gateway/record/&quot;, //&lt;文件夹应存储录音，启用时&gt;</span></span>
<span class="line"><span>        permanent:false,//是否持久化 如果为true则服务重启后此房间还是存在，并不会因为服务重启而房间丢失</span></span>
<span class="line"><span>        audiolevel_event:false, //向其他用户发送事件</span></span>
<span class="line"><span>        audio_active_packets:50 //音频级别的数据包数量，默认=100，2秒 这个在语音激励有很大作用</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if(pin){</span></span>
<span class="line"><span>        create.pin = pin; //加入房间所需的密码</span></span>
<span class="line"><span>        create.secret = pin;//编辑/销毁房间所需的密码</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      videoRoomPluginHandle.send({</span></span>
<span class="line"><span>        &quot;message&quot; : create,</span></span>
<span class="line"><span>        success: function(result) {</span></span>
<span class="line"><span>          Janus.log(&quot;创建房间结果&quot;,result)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p><strong>房间用户获取和控制</strong>。有了会议室，正常操作就是实时获取房间用户列表，并控制对应房间用户，比如踢出、静音等操作。</p><p><img src="`+o+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//房间用户列表加载</span></span>
<span class="line"><span>videoRoomPluginHandle.send({</span></span>
<span class="line"><span>    &quot;message&quot; : {</span></span>
<span class="line"><span>      request : &#39;listparticipants&#39;,</span></span>
<span class="line"><span>      room: this.roomNumber,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    success: function(result) {</span></span>
<span class="line"><span>      Janus.log(result)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span> //踢出房间</span></span>
<span class="line"><span>videoRoomPluginHandle.send({</span></span>
<span class="line"><span>  &quot;message&quot; : {</span></span>
<span class="line"><span>    request : &#39;kick&#39;,</span></span>
<span class="line"><span>    room: this.roomNumber,</span></span>
<span class="line"><span>    id: userId</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  success: function(result) {</span></span>
<span class="line"><span>    console.log(result)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>加入房间并实现视频通话功能</strong>。这个功能也是目前这节课的核心功能了，<code>videoRoom</code>插件在实现多人视频通话的设计上很巧妙，它将用户分为发布者和订阅者两种大类，发布者即为媒体流的发布用户，而订阅者即为订阅发布者媒体流的用户。</p><p><img src="`+t+'" alt="" loading="lazy"></p><p>看上图，仔细想想发布者和订阅者，如果取交集，那不就是我们会议中的参会人员吗？在发布自己的画面的同时也要获取其他用户的画面。而 <code>videoRoom</code>巧妙的设计，不仅仅可以让我们用该插件实现会议，同时也可以实现直播室（一个 pub，N 个 sub）。当然这个功能也让房间变得更加灵活，在众多人参会的情况下，我们可以选择自己想要订阅的媒体流，比如 30 个人都开了摄像头，但是你可以只订阅其中的指定用户。</p><h2 id="实战会议" tabindex="-1"><strong>实战会议</strong> <a class="header-anchor" href="#实战会议" aria-label="Permalink to &quot;**实战会议**&quot;">​</a></h2><p>通过前面基本功能概述，我们对<code>videoRoom</code>插件有了基本认识，而发布者订阅者角色的分离，也让我们业务代码处理更加灵活，接下来就看看具体实现会议的流程和细节吧！</p><p><strong>用户加入房间</strong>。</p><p><img src="'+c+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>joinRooom(){</span></span>
<span class="line"><span>      const join = {</span></span>
<span class="line"><span>      request: &quot;join&quot;,</span></span>
<span class="line"><span>      room: parseInt(this.roomNumber),//房间号 数字类型</span></span>
<span class="line"><span>      // pin: &quot;123&quot;,//房间密码</span></span>
<span class="line"><span>      id: this.userId,//用户ID  数字类型</span></span>
<span class="line"><span>      ptype: &quot;publisher&quot;, //用户类型 发布者</span></span>
<span class="line"><span>      display: this.username //展示昵称 </span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    //全局句柄</span></span>
<span class="line"><span>    videoRoomPluginHandle.send({</span></span>
<span class="line"><span>      &#39;message&#39;:join,</span></span>
<span class="line"><span>      success: function (res) {</span></span>
<span class="line"><span>        console.log(&quot;正在加入会议室：&quot;+that.roomNumber+&quot; 用户: &quot;+that.username)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      error: function (err){</span></span>
<span class="line"><span>        console.log(&quot;加入过程中出错&quot;,err)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>发布自己媒体流</strong>。加入成功后，可以自己选择是否发布媒体流，按照实际情况来即可，这里我按照常规的来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>publisherStream(){</span></span>
<span class="line"><span>  const that = this</span></span>
<span class="line"><span>  //send offer 这里所有的协商都是和Janus服务器进行的 P2P协商，也就是你进行的会话网关服务器暂时替你完成</span></span>
<span class="line"><span>  videoRoomPluginHandle.createOffer({</span></span>
<span class="line"><span>          tracks: [</span></span>
<span class="line"><span>                  { type: &#39;audio&#39;, capture: true, recv: false },</span></span>
<span class="line"><span>                  { type: &#39;video&#39;, capture: true, recv: false },</span></span>
<span class="line"><span>                  { type: &#39;data&#39; },</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>          success: function(jsep) {</span></span>
<span class="line"><span>            console.log(&quot;发布者 SDP!&quot;, jsep);</span></span>
<span class="line"><span>            const publish = { request: &quot;configure&quot;, audio: true, video: true,restart:true}</span></span>
<span class="line"><span>            videoRoomPluginHandle.send({ message: publish, jsep: jsep });</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          error: function(error) {</span></span>
<span class="line"><span>            console.error(&quot;WebRTC error:&quot;, error);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>监听服务器响应的事件</strong>。在和网关服务器完成 P2P 连接后，其他用户加入的房间如果<code>发布或暂停</code>媒体信息网关服务器则会通知先前加入的用户，以让其他用户同步做出变更。</p><p><img src="`+r+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>onMessageForVideoRoom(msg,jsep){</span></span>
<span class="line"><span>            const that = this</span></span>
<span class="line"><span>            const event = msg[&quot;videoroom&quot;]</span></span>
<span class="line"><span>            if(jsep) {</span></span>
<span class="line"><span>              //设置远程应答描述</span></span>
<span class="line"><span>              videoRoomPluginHandle.handleRemoteJsep({ jsep: jsep })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            switch (event){</span></span>
<span class="line"><span>              case &#39;joined&#39;:       </span></span>
<span class="line"><span>                    that.private_id = msg[&#39;private_id&#39;]</span></span>
<span class="line"><span>                    that.publisherStream()</span></span>
<span class="line"><span>                //媒体发布者</span></span>
<span class="line"><span>                if(msg[&quot;publishers&quot;]) {//新加入房间获取媒体发布者(注意这里)</span></span>
<span class="line"><span>                  const list = msg[&quot;publishers&quot;];</span></span>
<span class="line"><span>                  for(let u in list) {</span></span>
<span class="line"><span>                            let publisher = list[u]</span></span>
<span class="line"><span>                            that.localPubDomPush(publisher[&quot;id&quot;],publisher[&quot;display&quot;])</span></span>
<span class="line"><span>                            that.streamMap.set(publisher[&quot;id&quot;],publisher)</span></span>
<span class="line"><span>                            that.subscriberMedia(publisher)</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>              case &#39;event&#39;:</span></span>
<span class="line"><span>                if(msg[&#39;unpublished&#39;]){</span></span>
<span class="line"><span>                  console.log(&#39;用户&#39;+msg[&#39;unpublished&#39;]+&#39;停止发布流&#39;)</span></span>
<span class="line"><span>                }else if(msg[&#39;leaving&#39;]){</span></span>
<span class="line"><span>                  if(msg[&#39;reason&#39;] &amp;&amp; msg[&#39;reason&#39;] === &#39;kicked&#39;){</span></span>
<span class="line"><span>                    console.log(&#39;您已被踢出房间&#39;)</span></span>
<span class="line"><span>                    this.streamMap = new Map()</span></span>
<span class="line"><span>                  }else if(!msg[&#39;reason&#39;]) {</span></span>
<span class="line"><span>                    that.streamMap.delete(msg[&#39;leaving&#39;])</span></span>
<span class="line"><span>                    console.log(&#39;用户&#39;+msg[&#39;leaving&#39;]+&#39;主动离开房间&#39;+msg[&#39;room&#39;])</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                }else if(msg[&#39;moderation&#39;] &amp;&amp; msg[&#39;moderation&#39;] === &#39;muted&#39; ){</span></span>
<span class="line"><span>                  console.log(&#39;用户&#39;+msg[&#39;id&#39;]+&#39; 已被禁言&#39;)</span></span>
<span class="line"><span>                }else if(msg[&#39;publishers&#39;]){//已在房间用户监听到媒体变更（注意这里）</span></span>
<span class="line"><span>                  const list = msg[&quot;publishers&quot;];</span></span>
<span class="line"><span>                  for(let u in list) {</span></span>
<span class="line"><span>                    let publisher = list[u]</span></span>
<span class="line"><span>                            that.localPubDomPush(publisher[&quot;id&quot;],publisher[&quot;display&quot;])</span></span>
<span class="line"><span>                    that.streamMap.set(publisher[&quot;id&quot;],publisher)</span></span>
<span class="line"><span>                    that.subscriberMedia(publisher)</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>                }else if(msg[&#39;error_code&#39;]){</span></span>
<span class="line"><span>                    if(msg[&#39;error_code&#39;] === 426){</span></span>
<span class="line"><span>                      </span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>              default:</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p>请注意我在上面代码中标注的两个位置，这两个位置的代码都是一样的，都是订阅用户媒体流。第一个是用户刚加入房间时，订阅房间已存在发布媒体信息；而第二个则是当用户已经在开会过程中，监听到其他新的媒体发布者进来后再订阅媒体流。</p><p><strong>订阅媒体流</strong>。</p><p>订阅的步骤看起来代码很多，但是思路清晰了也没啥难度：第一发送订阅请求，第二和网关服务器完成WebRTC 的基本会话流程，之后服务端就会转发媒体流到客户端。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 订阅当前房间媒体流</span></span>
<span class="line"><span> * @param user (publisher 媒体发布者)(id,display,audio,video)</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>subscriberMedia(user){</span></span>
<span class="line"><span>  const that = this;</span></span>
<span class="line"><span>  var publisherPlugin = null</span></span>
<span class="line"><span>  janus.attach({</span></span>
<span class="line"><span>    plugin: &quot;janus.plugin.videoroom&quot;,</span></span>
<span class="line"><span>    success: function(pluginHandle) {</span></span>
<span class="line"><span>      publisherPlugin = pluginHandle</span></span>
<span class="line"><span>      var subscribe = {</span></span>
<span class="line"><span>        request: &quot;join&quot;,</span></span>
<span class="line"><span>        room: that.roomNumber,//指定订阅房间</span></span>
<span class="line"><span>        // pin: this.roomSecret,//房间密码</span></span>
<span class="line"><span>        ptype: &quot;subscriber&quot;,//类型 订阅者</span></span>
<span class="line"><span>        feed: user[&#39;id&#39;],//被订阅用户ID 新版本API 更改为指定订阅数组 具体看课程后面仓库最新源代码 subscription.push({feed: user[&#39;id&#39;],mid: stream.mid	 //这里是可选项 果不填则默认获取所有的流});</span></span>
<span class="line"><span>       private_id: that.private_id,//Janus分配的用户ID</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      publisherPlugin.send({ message: subscribe });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    error: function(error) {</span></span>
<span class="line"><span>      console.error(&quot;  插件加载异常&quot;, error);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    consentDialog: function(on) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onmessage: function(msg, jsep) {</span></span>
<span class="line"><span>      console.log(&quot;订阅媒体发布者消息监听：&quot;,msg,jsep)</span></span>
<span class="line"><span>      const event = msg[&quot;videoroom&quot;];</span></span>
<span class="line"><span>      if(jsep) {</span></span>
<span class="line"><span>        // Answer and attach</span></span>
<span class="line"><span>        publisherPlugin.createAnswer(</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            jsep: jsep,</span></span>
<span class="line"><span>            tracks: [</span></span>
<span class="line"><span>                    { type: &#39;data&#39; }</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            success: function(jsep) {</span></span>
<span class="line"><span>              Janus.debug(&quot;Got SDP!&quot;,jsep);</span></span>
<span class="line"><span>              //订阅成功后start 这个目的是完成 WebRTC的基础流程</span></span>
<span class="line"><span>              var body = { request: &quot;start&quot;, room: that.roomNumber };</span></span>
<span class="line"><span>              publisherPlugin.send({ message: body, jsep: jsep });</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            error: function(error) {</span></span>
<span class="line"><span>              Janus.error(&quot;WebRTC error:&quot;, error);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      switch (event){</span></span>
<span class="line"><span>        case &#39;attached&#39;:</span></span>
<span class="line"><span>          console.log(&#39;订阅用户：&#39;+user[&#39;display&#39;]+&#39; 媒体信息成功&#39;)</span></span>
<span class="line"><span>          break</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>          break</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onlocaltrack: function(track, added) {</span></span>
<span class="line"><span>      console.log(&#39;publisherOperator#onlocaltrack=&gt; &#39;,track, added)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onremotetrack: function(track, mid, added) {</span></span>
<span class="line"><span>      // The publisher stream is sendonly, we don&#39;t expect anything here</span></span>
<span class="line"><span>      let obj = {</span></span>
<span class="line"><span>        track:track,</span></span>
<span class="line"><span>        mid: mid,</span></span>
<span class="line"><span>        added: added,</span></span>
<span class="line"><span>        userId: user[&#39;id&#39;],//被订阅用户ID </span></span>
<span class="line"><span>        display: user[&#39;display&#39;],//被订阅用户昵称</span></span>
<span class="line"><span>        trackKind: track[&#39;kind&#39;]//类型  video/audio</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      console.log(&quot;订阅媒体流变更信息 ：&quot;,obj)</span></span>
<span class="line"><span>      //挂在到指定的DOM即可</span></span>
<span class="line"><span>          if(added){</span></span>
<span class="line"><span>                  that.setDomVideoTrick(user[&#39;id&#39;]+&#39;-video&#39;,track)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    oncleanup: function() {</span></span>
<span class="line"><span>      console.log(&quot; ::: Got a cleanup notification: we are unpublished now :::&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>好了，以上就是利用 videoRoom 插件的巧妙设计（媒体发布和订阅交集）实现 SFU 架构会议系统的基本步骤，整个流程很简单，需要大家要注意的点也就是其中的媒体发布和媒体订阅代码逻辑。</p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，打开下面模块：Janus 会议室。</li></ol><p><img src="`+u+'" alt="" loading="lazy"></p><ol start="2"><li>先创建房间，然后点击加入房间。创建房间只需第一次访问的时候创建即可，之后会在网关服务器内存中保存，如果想要持久化，则可以看前面创建房间的配置。</li></ol><p><img src="'+d+'" alt="" loading="lazy"></p><ol start="3"><li>用户 ID 不用更改，默认使用时间戳；修改用户名让不同用户加入到同一个房间。</li></ol><p><img src="'+m+'" alt="" loading="lazy"></p><p><img src="'+g+'" alt="" loading="lazy"></p><h2 id="代码仓库" tabindex="-1"><strong>代码仓库</strong> <a class="header-anchor" href="#代码仓库" aria-label="Permalink to &quot;**代码仓库**&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo04-janus-02.vue" target="_blank" rel="noreferrer">本接口代码仓库地址</a></p><h2 id="课后题" tabindex="-1"><strong>课后题</strong> <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;**课后题**&quot;">​</a></h2><p>这节课我并没有将除了会议的其他功能写在 DEMO 中，课后大家在实现会议功能之后，尝试将踢人、麦克风控制、视频控制等操作加在上面，看看有没有难度。</p>',60),b=[q];function v(_,f,k,C,y,R){return n(),a("div",null,b)}const T=s(h,[["render",v]]);export{j as __pageData,T as default};
