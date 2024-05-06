import{_ as s,c as n,o as a,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.9q1a63Mc.image",o="/assets/2.OOZOchEP.image",t="/assets/3.wucaLFr-.image",c="/assets/4.gEHbQfC6.image",l="/assets/5.xv-g7J5C.image",i="/assets/6.wt2XH3xa.image",r="/assets/7.w2fwwWaT.image",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/9-会议实战：WebRTC 实现多房间多用户的第一种架构会议系统.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/9-会议实战：WebRTC 实现多房间多用户的第一种架构会议系统.md","lastUpdated":1714960935000}'),d={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/9-会议实战：WebRTC 实现多房间多用户的第一种架构会议系统.md"},g=e('<p>到了这节课，想必大家对 <code>WebRTC</code> 已经有基础的了解了。毕竟从点对点视频通话到小型直播都已经熟悉了它的核心用法，<code>WebRTC</code>给大家的初步印象已经形成：即通过信令交换在各自的客户端形成 <code>P2P</code> 双向关联，然后发送双方的媒体信息。</p><p>无论是点对点音视频还是直播，都是通过 P2P 的方式形成关联关系，而接下来的多对多会议也是一样，无非就是<strong>每个客户端都去和会议室中的每个用户建立关联，</strong> 从而拿到对方的媒体信息。</p><p>接下来，我会再用一个例子给大家演示下如何用<code>WebRTC</code>实现会议系统。</p><h2 id="流程分析" tabindex="-1">流程分析 <a class="header-anchor" href="#流程分析" aria-label="Permalink to &quot;流程分析&quot;">​</a></h2><p><strong>假设有A、B、C、D四个人需要参会，但是<code>WebRTC</code>仅支持 <code>P2P</code> ，那么 A 如果要和剩下的三个人视频通话，就必须和他们三个人都建立关联，也就是形成<code>A-B</code>，<code>A-C</code>，<code>A-D</code>的关联关系</strong>。</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>看上图所示，只有建立关联关系之后，A 才能将自己的视频流发给 B、C、D 三个人，同时也才能收到其余三个人的视频画面。但是注意看，A 和其余三个人形成视频通话，但是其余三人之间并没有相互关联。</p><p>也就是说，现在这个方案只是达成了 1 对多 的场景（前面的课程中的直播场景）。那么如何让其余三个人之间也形成互通呢？</p><p>同理，看上图的 B，和 A 一样重新建立关联关系，<strong>只不过变成 B 为主体，剩下的A、C、D为被关联对象进而形成<code>B-A</code>，<code>B-C</code>，<code>B-D</code>的关联关系</strong>。但是这时你会发现，A-B 和 B-A 不是重复了吗？</p><p>是的，所以在这里，我们相当于在代码层面维护重复判断，假如已经建立关联关系，那么后续就不再重新建立新的关联关系了。</p><p>从<code>WebRTC</code>的核心载体<code>PeerConnection</code>上来讲，上述的关联关系代表的就是这个核心载体，一对关联关系代表一个核心对象，<strong><code>A-B</code></strong> <strong>这一关系从代码层面上来描述</strong> <strong>，</strong> <strong>实际就是创建一个<code>PeerConnection</code>对象，这个对象中维护的是 A 和 B 之前的<code>sdp信令</code> 和媒体信息（反复提及的核心）</strong> 。</p><p>有了以上概念上的转换，我相信对于前面图中表达的意思，大家也就理解差不多了，为了更清晰，这里我再用代码层面的<code>PeerConnection</code>对象来解释上图中的关系：</p><p><img src="'+o+`" alt="" loading="lazy"></p><p>首先 A 客户端需要和其余三个客户端通信，按照上述关系和<code>WebRTC</code>的会话流程，我们就需要创建三个<code>PeerConnection</code>对象来作为会话信令的载体，然后客户端还需要储存下这三个变量。这里为了操作方便，我们将其放置在<code>Map</code>数据结构中，<code>key</code>按照用户的 ID 组合成变量名，那么 A 和 B、C、D 关联关系储存方式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// A：10001 B：10002 C：10003 D：10004 分别代表四个客户端的用户ID</span></span>
<span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const ABKeys = 10001-10002</span></span>
<span class="line"><span>const ACKeys = 10001-10003</span></span>
<span class="line"><span>const ADKeys = 10001-10004</span></span>
<span class="line"><span>RtcPcMaps.set(ABKeys , new PeerConnection()) //维护A-B关系</span></span>
<span class="line"><span>RtcPcMaps.set(ACKeys , new PeerConnection()) //维护A-C关系</span></span>
<span class="line"><span>RtcPcMaps.set(ADKeys , new PeerConnection()) //维护A-D关系</span></span></code></pre></div><p>这样子是不是很清晰了，而对于被关联方 B、C、D 端同上述操作，只不过仅维护和 A 的关系，例如 B：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>var RtcPcMaps = new Map()</span></span>
<span class="line"><span>const BAKeys = 10002-10001</span></span>
<span class="line"><span>RtcPcMaps.set(BAKeys , new PeerConnection()) //维护B-A关系</span></span></code></pre></div><p>在 B 端这边，细心的同学可能发现了，这里我们定义的变量为 <code>BAKeys </code>，即<code>B-A</code>，在 A 端明明是A-B，在这里为什么关系反了呢？</p><p>这里大家其实可以思考下，如果 B 端我作为主体方，即 P2P 的发起方，那么和上图中的 A 一样，我也需要创建三个关联关系 B-A、B-C、B-D，此时 B-A 就和 A-B 关系重叠了，在代码层面实际上它俩就是同一对关联。</p><p>所以，为了维护代码层面的简洁性和逻辑直观性，我们可以适当优化下，<strong>P2P</strong> <strong>发起方变量命名和 P2P 接受方变量命名</strong> <strong>，</strong> <strong>按照自己客户端拼接对方客户端的形式</strong>（A 和 B 建立关联，在 A 端就是 A-B 变量维护，在 B 端就是 B-A 变量维护） <strong>。</strong></p><p>再接着前面的代码，B 现在只维护了一份和 A 的关系，但是为了实现会议的效果，B 必须和 C、D 继续形成关联关系，所以此时 B 这边：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//由于前面A已经和B建立关联关系因此在后续B这边不再重新发起和A的关联关系</span></span>
<span class="line"><span>const BCKeys = 10002-10003</span></span>
<span class="line"><span>const BDKeys = 10002-10004</span></span>
<span class="line"><span>RtcPcMaps.set(BCKeys , new PeerConnection()) //维护B-C关系</span></span>
<span class="line"><span>RtcPcMaps.set(BDKeys , new PeerConnection()) //维护B-D关系</span></span></code></pre></div><p>虽然看起来很绕，但是如果我们理清楚这个逻辑，实际实现起来和 P2P 的流程一样，很简单。先看看下图，第一个就是我们前面所说的独立关联关系，第二个是美化后以及代码层面优化后的流程（<strong>即已建立关联后不再重新建立新的关联</strong>）。</p><p><img src="`+t+'" alt="" loading="lazy"></p><p>如果能明白上面的逻辑，那么我们就理解了<code>WebRTC</code>架构中最简单的，维护最方便的 <strong><code>Mesh 架构</code></strong>。这种架构不需要经过任何流媒体服务器，端对端的就可以直接实现多人视频通话，虽然简单，但是也有它的缺点，那就是<strong>昂贵的宽带，下一节我们会深入讨论。</strong></p><h2 id="代码实战" tabindex="-1">代码实战 <a class="header-anchor" href="#代码实战" aria-label="Permalink to &quot;代码实战&quot;">​</a></h2><p>我们按照下面动图流程来：</p><p><img src="'+c+`" alt="" loading="lazy"></p><ol><li>A 进入会议室：初始化信令服务器连接，然后初始化房间，如果房间中没有人，则仅获取本地媒体流并将其展示在已初始化好的 <code>DOM 节点</code> 。</li></ol><blockquote><p>roomUserList 变量为房间用户，获取全部用户后，剔出自己，然后看有无其他用户加入房间。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//初始化服务器连接</span></span>
<span class="line"><span>this.linkSocket = io(this.$serverSocketUrl, {</span></span>
<span class="line"><span>    reconnectionDelayMax: 10000,</span></span>
<span class="line"><span>    transports: [&quot;websocket&quot;],</span></span>
<span class="line"><span>    query: that.formInline</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>async initMeetingRoomPc(){</span></span>
<span class="line"><span>    const that = this</span></span>
<span class="line"><span>    if(!this.localStream){</span></span>
<span class="line"><span>            this.localStream = await this.getLocalUserMedia()</span></span>
<span class="line"><span>            //开始静音和关闭摄像头</span></span>
<span class="line"><span>            this.initMediaStatus()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.setDomVideoStream(&quot;localdemo01&quot;,this.localStream)</span></span>
<span class="line"><span>    const localUid = this.formInline.userId</span></span>
<span class="line"><span>    let others = this.roomUserList.filter(e =&gt; e.userId !== localUid).map((e,index) =&gt;{return e.userId})</span></span>
<span class="line"><span>    //others  为空不再进行后面的,</span></span></code></pre></div><ol start="2"><li>B 用户同上：先初始化，然后获取房间用户列表。与此同时，本地获取自己的媒体流。但是与上面 A不同的是，B 加入后，A 已经在房间中，因此接下来就是 B 和 A 创建 <code>RTC 关联</code>。创建流程我们不再阐述，和之前 <code>P2P</code> 以及直播都一样，无变化。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async initMeetingRoomPc(){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        if(!this.localStream){</span></span>
<span class="line"><span>                this.localStream = await this.getLocalUserMedia()</span></span>
<span class="line"><span>                //开始静音和关闭摄像头</span></span>
<span class="line"><span>                this.initMediaStatus()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.setDomVideoStream(&quot;localdemo01&quot;,this.localStream)</span></span>
<span class="line"><span>        const localUid = this.formInline.userId</span></span>
<span class="line"><span>        let others = this.roomUserList.filter(e =&gt; e.userId !== localUid).map((e,index) =&gt;{return e.userId})</span></span>
<span class="line"><span>        //others 不为空 里面有 A用户 </span></span>
<span class="line"><span>        others.forEach(async (uid) =&gt; {</span></span>
<span class="line"><span>                let pcKey = localUid+&#39;-&#39;+uid</span></span>
<span class="line"><span>                let pc = RtcPcMaps.get(pcKey)</span></span>
<span class="line"><span>                if(!pc){</span></span>
<span class="line"><span>                        pc = new PeerConnection(that.rtcPcParams)</span></span>
<span class="line"><span>                        RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                for (const track of that.localStream.getTracks()) {</span></span>
<span class="line"><span>                    pc.addTrack(track);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //创建offer</span></span>
<span class="line"><span>                let offer = await pc.createOffer({iceRestart:true});</span></span>
<span class="line"><span>                //设置offer未本地描述</span></span>
<span class="line"><span>                await pc.setLocalDescription(offer)</span></span>
<span class="line"><span>                //发送offer给被呼叫端</span></span>
<span class="line"><span>                let params = {&quot;targetUid&quot;:uid,&quot;userId&quot;:localUid,&quot;offer&quot;:offer}</span></span>
<span class="line"><span>                that.linkSocket.emit(&quot;offer&quot;,params)</span></span>
<span class="line"><span>                that.onPcEvent(pc,localUid,uid)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="3"><li><p>C 用户进入会议室：初始化服务连接，获取房间用户，同时本地媒体流获取和预览。但房间中有 A 和 B，因此和 B 步骤一样。</p><ol><li>C 和 A 创建 <code>RTC 关联</code>。</li><li>C 和 B 创建 <code>RTC 关联</code>。</li></ol></li></ol><p><strong>根据</strong> <strong>上面的步骤</strong> <strong>，</strong> <strong>我们就可以还原如下流程了</strong> <strong>。</strong> <strong>在整个房间人员变动中，无论如何</strong> <strong>，</strong> <strong>新进来的用户都会去和房间内的其他人进行</strong> <strong>RTC</strong> <strong>关联</strong> <strong>，</strong> <strong>并实现新用户媒体流广播，从而达到我们这节课的目的：Mesh 架构的会议系统。</strong></p><p><img src="`+l+'" alt="" loading="lazy"></p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，找到模块：多对多网络视频。</li></ol><p><img src="'+i+'" alt="" loading="lazy"></p><ol start="2"><li>点击进去后首先会显示填写基础信息，要体验会议那么要加入的用户必须在同一个房间；此外，请大家注意下面图中的<code>身份ID</code>，它默认获取的是当前浏览器的指纹，因此如果在同一个浏览器不同标签页访问页面当前页面时<code>身份ID</code>都是一样的。<strong>为了避免这个问题请大家注意我访问的时候携带的参数，这个参数优先于浏览器指纹且手动指定</strong>，这样就可以避免不同用户<code>身份ID</code>一样造成加入会议失败的情况。</li></ol><p><img src="'+r+'" alt="" loading="lazy"></p><ol start="3"><li>用不同的身份ID，但是<code>同一个房间号</code>进入会议室。</li></ol><h2 id="完整代码地址" tabindex="-1">完整代码地址 <a class="header-anchor" href="#完整代码地址" aria-label="Permalink to &quot;完整代码地址&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-many2many.vue" target="_blank" rel="noreferrer">本节课相关代码仓库地址</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>在本地启动成功并模拟会议成功后，请大家尝试部署到<code>区域网</code>的某个主机上，然后通过区域网进行多人会议看看效果如何，有问题大家留言一起讨论。</p>',46),h=[g];function m(u,_,C,A,B,P){return a(),n("div",null,h)}const k=s(d,[["render",m]]);export{b as __pageData,k as default};
