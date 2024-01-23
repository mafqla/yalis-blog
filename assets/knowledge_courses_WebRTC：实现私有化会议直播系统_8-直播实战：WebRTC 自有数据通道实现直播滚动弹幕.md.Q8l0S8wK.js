import{_ as a,c as n,o as s,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.BWyedHUb.image",l="/assets/2.r-Fu0P6f.image",t="/assets/3.r-oKIu1R.image",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/8-直播实战：WebRTC 自有数据通道实现直播滚动弹幕.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/8-直播实战：WebRTC 自有数据通道实现直播滚动弹幕.md","lastUpdated":1705979598000}'),o={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/8-直播实战：WebRTC 自有数据通道实现直播滚动弹幕.md"},c=e(`<p>从点对点视频通话到点到多的小型直播间，再到直播间虚拟背景的切换，如果认真消化完这些内容，那么我相信大多数人已经从小白正式入门<code>WebRTC</code>了。接下来这节课我们就先不讲<code>WebRTC</code>会议模式，我们先玩个好玩的，如题。</p><p>一般意义上要完成弹幕，首选必须是即时通讯，比如大家熟知的 Websocket，通过即时消息实现实时弹幕展示。但是我们在前面<a href="https://juejin.cn/book/7168418382318927880/section/7172117235333824520" target="_blank" rel="noreferrer">《04 | 实现点对点音视频及类 IM 的即时消息发送》</a>那节课中提到了，利用<code>WebRTC</code>自己的实时数据传输通道即可实现类似 IM 的即时通讯功能，因此我们就用<code>WebRTC</code>自带的功能去完成“直播+滚动弹幕”。</p><p>正式开始之前，大家可以先翻到前面课程再熟悉下，我们接下来就直接进入主题。</p><h2 id="基础流程" tabindex="-1"><strong>基础流程</strong> <a class="header-anchor" href="#基础流程" aria-label="Permalink to &quot;**基础流程**&quot;">​</a></h2><ol><li>建立<code>WebRTC</code>会话，并在初始化监听阶段创建数据通道（<code>DataChannel</code>）。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 创建数据通道</span></span>
<span class="line"><span> * @param {Object} pc</span></span>
<span class="line"><span> * @param {Object} localUid</span></span>
<span class="line"><span> * @param {Object} remoteUid</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async createDataChannel(pc,localUid,remoteUid){</span></span>
<span class="line"><span>        let datachannel = await pc.createDataChannel(localUid+&#39;-&#39;+remoteUid);</span></span>
<span class="line"><span>        console.log(&quot;datachannel &quot;+localUid+&#39;-&#39;+remoteUid,datachannel)</span></span>
<span class="line"><span>        dataChannelMap.set(localUid+&#39;-&#39;+remoteUid,datachannel)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1.初始化 RTCPeerConnection =&gt; initPc</span></span>
<span class="line"><span>//2.初始化基础监听 initPc.ontrack() initPc.ondatachannel() initPc.onicecandidate()</span></span>
<span class="line"><span>//3.执行上步创建数据通道</span></span>
<span class="line"><span>await this.createDataChannel(initPc,localUid,remoteUid)</span></span></code></pre></div><ol start="2"><li>通道建立成功，如果是 A 和 B 通话，那么 A 创建通道成功后，B 端则可以看到如下信息：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>pc.ondatachannel = function(ev) {</span></span>
<span class="line"><span>          console.log(&#39;用户：&#39;+remoteUid+&#39; 数据通道创建成功&#39;);</span></span>
<span class="line"><span>          ev.channel.onopen = function() {</span></span>
<span class="line"><span>                console.log(&#39;用户：&#39;+remoteUid+&#39; 数据通道打开&#39;);</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>          ev.channel.onmessage = function(data) {</span></span>
<span class="line"><span>                console.log(&#39;用户：&#39;+remoteUid+&#39; 数据通道消息&#39;,data.data);</span></span>
<span class="line"><span>                // 弹幕上屏幕</span></span>
<span class="line"><span>                that.danmuForRoller(data.data)</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>          ev.channel.onclose = function() {</span></span>
<span class="line"><span>                console.log(&#39;用户：&#39;+remoteUid+&#39; 数据通道关闭&#39;);</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>        };</span></span></code></pre></div><p><img src="`+p+`" alt="" loading="lazy"></p><ol start="3"><li>发送消息。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//datasechannel 为创建通道端初始化后的通道实例</span></span>
<span class="line"><span>datasechannel.send(this.message)</span></span></code></pre></div><p>至此，数据通道的创建和消息发送都没有问题了，接下来就要我们本节课的大招了：<strong>利用数据通道打造实时弹幕。</strong></p><h2 id="注意事项" tabindex="-1"><strong>注意事项</strong> <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;**注意事项**&quot;">​</a></h2><p>前面的课程讲到基础流程，第二步就是创建通道者和创建成功的响应，也就是说 A 和 B 形成<code>WebRTC</code>关联，<code>A 如果创建数据通道，那么这个数据通道的操作权限就在 A</code> ，再明确点就是这个通道创建者才可以发消息，而和 A 形成关联关系的 B 仅仅是数据接受者。</p><p><strong>有了上面的解释，我们就要思考下，直播间数据通道如何创建</strong>。</p><p>直播间主播和观众是一对多的关系，因此在观众这一端只会存在<strong>一条发消息</strong>的数据通道和<strong>一条收消息</strong>的数据通道；在主播这一端则存在着 <strong>N 条数据发送通道，N 条接收消息的数据通道</strong>（收消息的数据通道在这里虽然写了出来，但是并无需人工创建，拿前面例子： A 和 B 形成<code>WebRTC</code>关联之后，只要 A 创建了数据发送通道，那么 B 一定会存在与之对应的接受消息的数据通道）。</p><p>因此在实际编码过程中，我们的思路应该是考虑发消息的数据通道的创建，有了发送通道，在另一端必然存在接收通道。</p><p><strong>观众端：</strong> 看下面代码，仅仅在加入直播间，以及主播建立关联关系后，创建一条数据发送通道即可，这样每个观众就可以将弹幕通过该通道发送给主播。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>    //和发布者建立RTC连接 不发送自己视频流</span></span>
<span class="line"><span>    let pcKey = localUid+&#39;-&#39;+publisher</span></span>
<span class="line"><span>    //初始化核心对象 PeerConnection </span></span>
<span class="line"><span>    let pc = RtcPcMaps.get(pcKey)</span></span>
<span class="line"><span>    if(!pc){</span></span>
<span class="line"><span>            pc = new PeerConnection(that.rtcPcParams)</span></span>
<span class="line"><span>            RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 设置仅接收流 不发送流</span></span>
<span class="line"><span>    pc.addTransceiver(&quot;audio&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>    pc.addTransceiver(&quot;video&quot;, {direction: &quot;recvonly&quot;});</span></span>
<span class="line"><span>    //初始化一系列监听 比如主播媒体流 主播ICE协商信息等等</span></span>
<span class="line"><span>    that.onPcEvent(pc,localUid,publisher)</span></span>
<span class="line"><span>    //创建数据通道</span></span>
<span class="line"><span>    await this.createDataChannel(pc,localUid,publisher)</span></span>
<span class="line"><span>    //创建offer</span></span>
<span class="line"><span>    let offer = await pc.createOffer();</span></span>
<span class="line"><span>    //设置offer未本地描述</span></span>
<span class="line"><span>    await pc.setLocalDescription(offer)</span></span>
<span class="line"><span>    //发送offer给被呼叫端</span></span>
<span class="line"><span>    ......</span></span></code></pre></div><p><strong>主播端：</strong> 请注意，观众每次加进来都会和主播建立一次<code>WebRTC</code>关联，每次都会创建主播和该观众的数据通道并保存在本地<strong>数据通道 Map</strong> 中，如此主播在发送弹幕的时候，遍历拿到所有观众的数据通道，再通过该通道将消息广播，观众端即可看到主播的消息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async onRemoteOffer(fromUid,offer){</span></span>
<span class="line"><span>        const localUid = this.formInline.userId</span></span>
<span class="line"><span>        let pcKey = localUid+&#39;-&#39;+fromUid</span></span>
<span class="line"><span>        //初始化核心对象PeerConnection 保存自己和直播间观众的关联关系</span></span>
<span class="line"><span>        let pc = new PeerConnection(this.rtcPcParams)</span></span>
<span class="line"><span>        RtcPcMaps.set(pcKey,pc)</span></span>
<span class="line"><span>        //监听 ICE候选信息和观众端创建的数据通道</span></span>
<span class="line"><span>        this.onPcEvent(pc,localUid,fromUid)</span></span>
<span class="line"><span>        //NOTE: 主播端创建数据通道，来一个观众建立一个通道</span></span>
<span class="line"><span>        await this.createDataChannel(pc,localUid,fromUid)</span></span>
<span class="line"><span>        //发送主播的直播流</span></span>
<span class="line"><span>        for (const track of this.localStream.getTracks()) {</span></span>
<span class="line"><span>            pc.addTrack(track);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pc.setRemoteDescription(offer)</span></span>
<span class="line"><span>        //其他操作</span></span>
<span class="line"><span>        let answer = await pc.createAnswer();</span></span>
<span class="line"><span>        await pc.setLocalDescription(answer);</span></span>
<span class="line"><span>        let params = {&quot;targetUid&quot;:fromUid,&quot;userId&quot;:localUid,&quot;answer&quot;:answer}</span></span>
<span class="line"><span>        this.linkSocket.emit(&quot;answer&quot;,params)</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="弹幕公共化" tabindex="-1">弹幕公共化 <a class="header-anchor" href="#弹幕公共化" aria-label="Permalink to &quot;弹幕公共化&quot;">​</a></h2><p>看完上面的流程和代码，有细心的同学可能会发现，观众端只和主播建立了<code>WebRTC</code>关联，并没有和其他的观众建立关联，那么，怎么能看到其他观众发送的弹幕呢？</p><p>这就要提到主播端维护的<strong>数据通道 Map</strong>了，利用这个 Map 中的通道，主播端可以将任何消息私信发给任何观众，因此当有观众发送弹幕到主播端的时候，主播利用该 Map 中的所有数据通道，将消息遍历发送给每个通道，即可实现弹幕的广播。</p><h2 id="弹幕组件" tabindex="-1">弹幕组件 <a class="header-anchor" href="#弹幕组件" aria-label="Permalink to &quot;弹幕组件&quot;">​</a></h2><p>要实现弹幕，必不可少的就是弹幕组件了。本小册用到的组件如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>&quot;danmaku&quot;: &quot;^2.0.4&quot;, // npm install danmaku 即可安装</span></span></code></pre></div><p>具体用法如下，注意看代码中的注释，弹幕组件和媒体播放容器绑定，因此在主播端和观众端需要区分，参数有颜色设置、速度设置，以及字体设置等等，具体大家可以看<a href="https://github.com/weizhenye/Danmaku" target="_blank" rel="noreferrer">官方文档</a>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 初始化弹幕容器</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>initDanmuContainer(){</span></span>
<span class="line"><span>        if(this.formInline.pub===&#39;pub&#39;){//主播</span></span>
<span class="line"><span>                //增加弹幕组件</span></span>
<span class="line"><span>                this.danmaku = new Danmaku({</span></span>
<span class="line"><span>                    container: document.getElementById(&#39;localdemo01Parent&#39;),</span></span>
<span class="line"><span>                        speed: 30</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>        }else{ //客户端</span></span>
<span class="line"><span>                this.danmaku = new Danmaku({</span></span>
<span class="line"><span>                    container: document.getElementById(&#39;publisherVideoParent&#39;),</span></span>
<span class="line"><span>                        speed: 30</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //首条弹幕</span></span>
<span class="line"><span>        this.danmaku.emit({text: &#39;直播间已开启，请踊跃发言&#39;, style: {fontSize: &#39;20px&#39;,color: &#39;#ff5500&#39;}})</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="完整代码地址" tabindex="-1">完整代码地址 <a class="header-anchor" href="#完整代码地址" aria-label="Permalink to &quot;完整代码地址&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/demo03-one2many.vue" target="_blank" rel="noreferrer">本节课相关代码位置</a></p><h2 id="项目操作指南" tabindex="-1">项目操作指南 <a class="header-anchor" href="#项目操作指南" aria-label="Permalink to &quot;项目操作指南&quot;">​</a></h2><ol><li>打开项目，找到模块：小型直播。</li></ol><ol start="2"><li>直接点进去默认还是没有携带参数的，因此和前面的直播相关章节一样，都需要携带固定的参数。</li></ol><ol start="3"><li>如果你不想自己去换其他参数，那么启动前端和信令服务器后，直接在同一个浏览器三个不同的标签页访问下面地址。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 主播进入 房间号：10012 用户ID：1001 用户昵称：suke001</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=1001&amp;roomId=10012&amp;nickname=suke001&amp;pub=pub</span></span>
<span class="line"><span># 非主播进入 房间号：10012 用户ID：11111 用户昵称：US01</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=11111&amp;roomId=10012&amp;nickname=US01</span></span>
<span class="line"><span># 非主播进入 房间号：10012 用户ID：22222 用户昵称：US02</span></span>
<span class="line"><span>http://localhost:8080/demo03-one2many?userId=22222&amp;roomId=10012&amp;nickname=US02</span></span></code></pre></div><ol start="4"><li>操作：主播端在页面下方输入框输入消息，然后点击发送，注意观察 <code>US01</code> 和 <code>US02</code> 两端的<code>控制台</code>以及<code>弹幕</code>显示。</li></ol><ol start="5"><li>效果。</li></ol><p><img src="`+l+'" alt="" loading="lazy"></p><p><strong>温馨提示</strong></p><p>弹幕我是利用组件展示在 <code>Video 元素</code>之上，大家实际用的时候可能会自定义其他的展示窗体，因此你需要明白的是数据通道数据过来的代码位置，在这里你可以<code>自定义数据操作逻辑</code>。</p><p><img src="'+t+'" alt="" loading="lazy"></p><h2 id="课后题" tabindex="-1"><strong>课后题</strong> <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;**课后题**&quot;">​</a></h2><p>这节课算是把<code>WebRTC</code>的数据通道掌握了，实际上数据通道不仅仅可以实现弹幕，利用这个，还可以实现很多花样，课后大家可以再熟悉熟悉数据通道用法，<strong>传输文件、图片</strong> 等数据。</p>',44),i=[c];function r(d,h,m,u,g,b){return s(),n("div",null,i)}const _=a(o,[["render",r]]);export{f as __pageData,_ as default};
