import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.Q5tNmb4C.image",t="/assets/2.cttRunnt.image",o="/assets/3.HN8QIIIK.image",l="/assets/4.UJWd-H7R.image",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/5-直播实战：WebRTC 实现类教师授课的 1 对 N 模式简易直播.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/5-直播实战：WebRTC 实现类教师授课的 1 对 N 模式简易直播.md","lastUpdated":1715561474000}'),c={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/5-直播实战：WebRTC 实现类教师授课的 1 对 N 模式简易直播.md"},i=e('<p>前面课程，我们完成<strong>一对一的视频通话</strong>后，大体上熟悉了<code>WebRTC</code>的基本用法以及它的会话流程。<code>WebRTC</code>的本质就是 P2P，即点对点的即时通讯，而这节课我们的目标是学会如何完成 1 对多的会话模式。</p><h2 id="基础构思" tabindex="-1">基础构思 <a class="header-anchor" href="#基础构思" aria-label="Permalink to &quot;基础构思&quot;">​</a></h2><p>在开始之前，我们先熟悉下这个最简单的讲课场景，首先看下图模拟场景，T 作为老师，需要将自己的画面实时地发送给下面的三个学生，但是学生却不需要将自己的画面同步给老师，而仅仅是在需要反馈的时候给予老师反馈即可。</p><p>说到这里，大家很明确这个场景实际就是一个小型直播，而我们这节课的目标也由此可以转变为“<code>WebRTC</code>实现简易直播系统”。</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>场景和目标清晰了，接下来就是构思和实战了。</p><p><code>WebRTC</code>实现 P2P 视频通话以及 IM 大家都没问题，那么对于解决我们的目标而言都不成问题。T和 S-1 、S-2、S-3 单独完成视频通话和普通消息发送都没问题，那怎么实现一次性同时和三个学生建立通话呢？</p><p>很简单，老师 T 和他们三个单独建立视频通话后，将关联关系都保存在本地不就可以？</p><p>前面我们反复提到过<code>WebRTC</code>的核心就是<code>PeerConnection</code>对象，任何建立视频通话的双方都离不开这个对象，因为这里面包含连接双方的核心协商数据。所以只要 T 和三个学生建立关联关系时，都维护一份独立的<code>PeerConnection</code>对象即可。</p><p><img src="'+t+`" alt="" loading="lazy"></p><p>如上图，老师端保存三分独立的<code>PeerConnection</code>对象，而学生端只需要保存自己和老师的关联信息，即一份核心对象。用代码描述如下：</p><p><strong>老师端</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// T：9999 S-1：10001 S-2：10002 S-3:10003 分别代表上面流程图中的师生</span></span>
<span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const TS01= 9999 -10001</span></span>
<span class="line"><span>const TS02= 9999 -10002</span></span>
<span class="line"><span>const TS03= 9999 -10003</span></span>
<span class="line"><span>RtcPcMaps.set(TS01, new PeerConnection()) //维护T-S-1关系</span></span>
<span class="line"><span>RtcPcMaps.set(TS01, new PeerConnection()) //维护T-S-2关系</span></span>
<span class="line"><span>RtcPcMaps.set(TS01, new PeerConnection()) //维护T-S-3关系</span></span></code></pre></div><p>在老师 T 收到学生 S 需要关联的“意向”后，创建三个<code>PeerConnection</code>核心对象，去维护三分关系，然后将其保存在本地的集合中。</p><p><strong>学生端S-1</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//S-1：10001 </span></span>
<span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const S01T= 10001-9999 </span></span>
<span class="line"><span>RtcPcMaps.set(S01T, new PeerConnection()) //学生维护和老师的关联</span></span></code></pre></div><p><strong>学生端S-2</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//S-2：10002</span></span>
<span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const S02T= 10002-9999 </span></span>
<span class="line"><span>RtcPcMaps.set(S02T, new PeerConnection()) //学生维护和老师的关联</span></span></code></pre></div><p><strong>学生端S-3</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//S-3：10003</span></span>
<span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const S03T= 10003-9999 </span></span>
<span class="line"><span>RtcPcMaps.set(S03T, new PeerConnection()) //学生维护和老师的关联</span></span></code></pre></div><p>可以很清晰地看到，在学生端只需要维护一份和老师的关系即可，在建立关联之后，将老师的直播流拉取，然后在本地展示。</p><p>而老师端相对复杂些，需要维护 3 份关系，如果学生有 50 个的话，那么对象关联就需要创建 50 个，因此对于直播老师端而言，人数越多，需要维护的关联关系也就越多，同时需要给每个关系发送音视频媒体流。人数越多，宽带压力也随之而来，相关的配置我们在<a href="https://juejin.cn/book/7168418382318927880/section/7171376753263247396" target="_blank" rel="noreferrer">《02 | Web端基础API学习》</a>中概述了一些，具体消耗的宽带计算方式，我们在后面讲<a href="https://juejin.cn/book/7168418382318927880/section/7172208545956364318" target="_blank" rel="noreferrer">《11 | 会议优化：WebRTC 通话过程中宽带计算及网络速率优化》</a>中会详细的介绍。</p><h2 id="实战" tabindex="-1"><strong>实战</strong> <a class="header-anchor" href="#实战" aria-label="Permalink to &quot;**实战**&quot;">​</a></h2><p>有了上面的大体构思和基础伪代码，接下来我们看看，从老师直播到学生观看直播，这整个过程我们架构上的整体设计。</p><p>首先，老师讲课学生听课，实际上就是在一个房间，老师在黑板书写，而学生看黑板。类比于网络，我们可以将这个房间“搬”到云上，老师在云房间直播，观众在云房间看直播。</p><p>所以，实际上我们整体的架构设计，就是围绕一个“云房间”展开，在云房间中观众和老师互动。</p><p>但是，问题来了，同一个房间中有老师和学生，那么如何区分老师和学生的身份呢？这就是我们架构设计上的第一个重点，那就是加入这个房间后，所有用户的身份标识。有了标识，后面加入的学生才知道和哪个有老师身份的用户进行<code>WebRTC</code>关联。</p><p>看下面客户端代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>this.formInline.nickname = getParams(&quot;nickname&quot;);</span></span>
<span class="line"><span>this.formInline.roomId = getParams(&quot;roomId&quot;);</span></span>
<span class="line"><span>this.formInline.userId = getParams(&quot;userId&quot;);</span></span>
<span class="line"><span>this.formInline.pub = getParams(&quot;pub&quot;)? getParams(&quot;pub&quot;) : &#39;no&#39;;</span></span>
<span class="line"><span>if(this.formInline.nickname &amp;&amp; this.formInline.roomId &amp;&amp; this.formInline.userId){</span></span>
<span class="line"><span>        this.init()//连接服务器</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>客户端携带加入房间的基础信息，有基础用户信息和 pub 这个身份信息，服务端接受这个参数后，将其保存在房间缓存信息中：</p><p><img src="`+o+`" alt="" loading="lazy"></p><p><strong>老师 T</strong> <strong>端</strong>作为发布者，在加入房间后就需要发布自己的直播流，此时还没有任何学生和他建立连接。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//?userId=9999&amp;roomId=10013&amp;nickname=S&amp;pub=pub</span></span>
<span class="line"><span>initMeetingRoomPc(){</span></span>
<span class="line"><span>    if(that.formInline.pub === &#39;pub&#39;){</span></span>
<span class="line"><span>            this.localStream = await this.getLocalUserMedia()</span></span>
<span class="line"><span>            //将本地直播流挂到video标签，在自己的页面显示</span></span>
<span class="line"><span>            this.setDomVideoStream(&quot;localdemo01&quot;,this.localStream)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>学生 S 端</strong>进入房间后，首先获取用户列表，获取到用户列表后找到老师，和老师建立<code>WebRTC</code>连接。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//userId=1001&amp;roomId=10013&amp;nickname=S-01</span></span>
<span class="line"><span>const localUid = this.formInline.userId</span></span>
<span class="line"><span>//找到当前房间的视频流发布者 即主播</span></span>
<span class="line"><span>let publisher = this.roomUserList.filter(e =&gt; e.userId !== localUid &amp;&amp; e.pub === &#39;pub&#39;).map((e,index) =&gt;{return e.userId})</span></span>
<span class="line"><span>if(publisher.length &gt;0){</span></span>
<span class="line"><span>        publisher = publisher[0]</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//和发布者建立RTC连接 不发送自己视频流</span></span>
<span class="line"><span>let pcKey = localUid+&#39;-&#39;+publisher</span></span>
<span class="line"><span>console.log(&quot;pcKey&quot;,pcKey);//1001-9999  S-1：1001和老师9999  </span></span>
<span class="line"><span>let pc = RtcPcMaps.get(pcKey)</span></span>
<span class="line"><span>if(!pc){</span></span>
<span class="line"><span>    pc = new PeerConnection(that.rtcPcParams)</span></span>
<span class="line"><span>    RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>pc.addTransceiver(&quot;audio&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>pc.addTransceiver(&quot;video&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>//创建offer</span></span>
<span class="line"><span>let offer = await pc.createOffer();</span></span>
<span class="line"><span>//设置offer未本地描述</span></span>
<span class="line"><span>await pc.setLocalDescription(offer)</span></span>
<span class="line"><span>//发送offer给被呼叫端</span></span>
<span class="line"><span>let params = {&quot;targetUid&quot;:publisher,&quot;userId&quot;:localUid,&quot;offer&quot;:offer}</span></span>
<span class="line"><span>that.linkSocket.emit(&quot;offer&quot;,params)</span></span>
<span class="line"><span>//监听相关事件 比如老师的应答信令，视频流等等</span></span>
<span class="line"><span>that.onPcEvent(pc,localUid,publisher)</span></span></code></pre></div><p><strong>老师 T 端</strong>，收到学生的关联意向之后，①创建关联关系并保存；②添加监听；③将视频流添加到媒体轨道；④发送应答。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async onRemoteOffer(fromUid,offer){</span></span>
<span class="line"><span>        const localUid = this.formInline.userId</span></span>
<span class="line"><span>        let pcKey = localUid+&#39;-&#39;+fromUid</span></span>
<span class="line"><span>        let pc = new PeerConnection(this.rtcPcParams)</span></span>
<span class="line"><span>        RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>        console.log(&quot;老师监听到远端WebRTC意向&quot;,pc);</span></span>
<span class="line"><span>        this.onPcEvent(pc,localUid,fromUid)</span></span>
<span class="line"><span>        for (const track of this.localStream.getTracks()) {</span></span>
<span class="line"><span>            pc.addTrack(track);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pc.setRemoteDescription(offer)</span></span>
<span class="line"><span>        let answer = await pc.createAnswer();</span></span>
<span class="line"><span>        await pc.setLocalDescription(answer);</span></span>
<span class="line"><span>        let params = {&quot;targetUid&quot;:fromUid,&quot;userId&quot;:localUid,&quot;answer&quot;:answer}</span></span>
<span class="line"><span>        this.linkSocket.emit(&quot;answer&quot;,params)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以上就是教师授课直播的实战流程，其他的直播场景类比于此，都是一样的，老师即为主播，学生为观众，只不过是在我们代码层面将用户的标签设置为我们需要的而已。</p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，找到模块：小型直播。</li></ol><ol start="2"><li>进入后默认没有任何参数，因此也需要携带 URL 参数，看下面访问参数，注意参数 <code>pub</code>这个参数是作为同一个房间中主播和非主播的区别的，因此你如果想体验主播端，那么请携带此参数，看下面案例：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 主播进入 房间号：10012 用户ID：1001 用户昵称：suke001</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=1001&amp;roomId=10012&amp;nickname=suke001&amp;pub=pub</span></span>
<span class="line"><span># 非主播进入 房间号：10012 用户ID：11111 用户昵称：US01</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=11111&amp;roomId=10012&amp;nickname=US01</span></span>
<span class="line"><span># 非主播进入 房间号：10012 用户ID：22222 用户昵称：US02</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=22222&amp;roomId=10012&amp;nickname=US02</span></span></code></pre></div><p><img src="`+l+'" alt="" loading="lazy"></p><ol start="3"><li>在演示过程中大家可能会看到弹幕和虚拟背景相关的，大家不必着急，这个是后面的内容，这节课的核心是搞懂直播这个概念以及<code>WebRTC</code>如何实现小型直播的。</li></ol><h2 id="完整代码仓库地址" tabindex="-1">完整代码仓库地址 <a class="header-anchor" href="#完整代码仓库地址" aria-label="Permalink to &quot;完整代码仓库地址&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-one2many.vue" target="_blank" rel="noreferrer">本节课相关代码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>请大家先按照上述的过程完成本地的模拟场景，然后着重看下“<strong>学生S端</strong>”那里<code>pc.addTransceiver()</code>方法的作用（<a href="https://udn.realityripple.com/docs/Web/API/RTCRtpTransceiver/direction" target="_blank" rel="noreferrer">参考连接</a>），如果去掉这行代码，你的直播代码又会变成什么样子，还能正常进行直播吗？欢迎大家在留言区讨论。</p>',48),r=[i];function d(m,u,h,g,b,f){return n(),a("div",null,r)}const v=s(c,[["render",d]]);export{k as __pageData,v as default};
