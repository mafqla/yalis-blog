import{_ as s,c as n,o as a,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.4TO6avo3.image",o="/assets/2.oWjtrULT.image",l="/assets/3.w92wBZxE.image",c="/assets/4.lkLMBvsp.image",t="/assets/5.ihD88W3m.image",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/3-基础（二）：WebRTC 的会话流程以及信令服务器的搭建.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/3-基础（二）：WebRTC 的会话流程以及信令服务器的搭建.md","lastUpdated":1706230306000}'),i={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/3-基础（二）：WebRTC 的会话流程以及信令服务器的搭建.md"},r=e('<p>上节我们学了如何通过浏览器的 API 去操控电脑上的摄像头、麦克风、屏幕分享桌面，这些是我们实现会议系统必备的基础知识，接下来我们就要去思考如何实现一个会议系统，以及如何将我们学到的基础 API 和<code>WebRTC</code>组合。</p><p>清晰的逻辑和流程对于解决任何事情，都可以事半功倍。所以同样的，我们也得首先构思下应该以什么样的方式或流程去实践这项技术，完成这个功能。</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>第一步，我们必须得知道<code>WebRTC</code>是如何将远端的两个浏览器关联起来的，因为只有建立关联关系，接下来才有多媒体通信的基础。</p><p>第二步，关联关系转换到代码层面，那意味着在双方的浏览器中必须存在共性，这个共性你可以理解为一个核心的载体，有了载体就可以维护关联关系，那么在<code>WebRTC</code>中这个载体是什么？</p><p>这时我们就需要了解下<code>WebRTC</code>的核心对象<code>PeerConnection</code>，因为这就是上面两个问题的答案，<strong>建立关联关系和维护关联关系的载体。</strong></p><h2 id="核心对象-peerconnection" tabindex="-1">核心对象 PeerConnection <a class="header-anchor" href="#核心对象-peerconnection" aria-label="Permalink to &quot;核心对象 PeerConnection&quot;">​</a></h2><p><code>PeerConnection</code>可以说是整个<code>WebRTC</code>通话的载体，如果没有这个对象，那么后面所有流程都是没法进行的。</p><blockquote><p>首先要明确的是，在不同的浏览器中，<code>WebRTC</code>兼容性不一样，虽然前面开篇词提到它的相关 API 已经成为 W3C 的基础标准，但并不是所有的浏览器都满足这些标准的。<code>WebRTC</code>最先开始是谷歌体系，那么兼容性而言，谷歌浏览器就是首选。国内很多的浏览器也是基于谷歌内核的，因此<code>WebRTC</code>在很大程度上也是兼容的，这里先说几个常用且兼容<code>WebRTC</code>的浏览器：Chrome、360、edge、火狐、Safari。</p></blockquote><p>因此为了尽可能地兼容不同浏览器，获取到有效的<code>PeerConnection</code>对象，我们可以通过如下方式获取：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span> var PeerConnection = window.RTCPeerConnection ||</span></span>\n<span class="line"><span>        window.mozRTCPeerConnection ||</span></span>\n<span class="line"><span>        window.webkitRTCPeerConnection;</span></span></code></pre></div><p>知道了这个核心载体，自然就要了解这个载体的核心方法，只有它自身的核心方法才能驱动它进行工作。</p><blockquote><p>这些<strong>核心方法</strong>，在这里混个眼熟，后面到整体会话过程的时候，我们会详细来看这些方法的调用顺序以及方式。留意后面红字部分，这个也是很重要的一个点，后面我们单独引申展开看看。</p></blockquote><ul><li><code>addIceCandidate()</code>： 保存 ICE 候选信息，即双方协商信息，持续整个建立通信过程，直到没有更多候选信息。</li></ul><ul><li><code>addTrack()</code> ：添加音频或者视频轨道。</li></ul><ul><li><code>createAnswer()</code> ：创建应答信令。</li></ul><ul><li><code>createDataChannel()</code>： 创建消息通道，建立<code>WebRTC</code>通信之后，就可以<code> p2p</code> 的直接发送文本消息，无需中转服务器。</li></ul><ul><li><code>createOffer()</code>： 创建初始信令。</li></ul><ul><li><code>setRemoteDescription()</code>： 保存远端发送给自己的信令。</li></ul><ul><li><code>setLocalDescription()</code> ：保存自己端创建的信令。</li></ul><p>以上就是<code>PeerConnection</code>这个载体核心驱动的主要方法了，除了这些核心方法之外，还有一些<strong>事件监听函数</strong>，这些监听函数用于监听远程发送过来的消息。</p><p>假如 A 和 B 建立连接，如果 A 作为主动方即呼叫端，则需要调用的就是上述<strong>核心方法</strong>去创建建立连接的信息，而 B 则在另一端使用上述<strong>部分核心方法</strong>创建信息再发送给 A，A 则调用<strong>事件监听函数</strong>去保存这些信息。常用的事件监听函数如下：</p><ul><li><code>ondatachannel</code>： 创建<code>datachannel</code>后监听回调以及 <code>p2p</code>消息监听。</li></ul><ul><li><code>ontrack</code> ：监听远程媒体轨道即远端音视频信息。</li></ul><ul><li><code>onicecandidate</code>： ICE 候选监听。</li></ul><h2 id="webrtc的会话流程" tabindex="-1"><code>WebRTC</code>的会话流程 <a class="header-anchor" href="#webrtc的会话流程" aria-label="Permalink to &quot;`WebRTC`的会话流程&quot;">​</a></h2><p>解决完上面俩问题，我们知道了既然要达成会话，那么就需要上述的载体，然后通过载体的核心方法和事件就可以完成从 A 到 B 两个浏览器的关联，那么关联的具体过程是什么呢？那就是我们接下来要详细解释的。首先看我给大家绘制的流程图：</p><p><img src="'+o+'" alt="" loading="lazy"></p><p>对照这个流程图，我们再来口述一边，上图中 <strong>A</strong> 为<strong>caller（呼叫端），B为callee（被呼叫端）。</strong></p><ol><li>首先 A 呼叫 B，呼叫之前我们一般通过实时通信协议<code>WebSocket</code>即可，让对方能收到信息。</li></ol><ol start="2"><li>B 接受应答，A 和 B 均开始初始化<code>PeerConnection </code>实例，用来关联 A 和 B 的<code>SDP</code>会话信息。</li></ol><ol start="3"><li>A 调用<code>createOffer</code>创建信令，同时通过<code>setLocalDescription</code>方法在本地实例<code>PeerConnection</code>中储存一份（<strong>图中流程①</strong>）。</li></ol><ol start="4"><li>然后调用信令服务器将 A 的<code>SDP</code>转发给 B（<strong>图中流程②</strong>）。</li></ol><ol start="5"><li>B 接收到 A 的<code>SDP</code>后调用<code>setRemoteDescription</code>，将其储存在初始化好的<code>PeerConnection</code>实例中（<strong>图中流程③</strong>）。</li></ol><ol start="6"><li>B 同时调用<code>createAnswer</code>创建应答<code>SDP</code>，并调用<code>setLocalDescription</code>储存在自己本地<code>PeerConnection</code>实例中（<strong>图中流程④</strong>）。</li></ol><ol start="7"><li>B 继续将自己创建的应答<code>SDP</code>通过服务器转发给 A（<strong>图中流程⑤</strong>）。</li></ol><ol start="8"><li>A 调用<code>setRemoteDescription</code>将 B 的<code>SDP</code>储存在本地<code>PeerConnection</code>实例（<strong>图中流程⑤</strong>）。</li></ol><ol start="9"><li>在会话的同时，从图中我们可以发现有个<code>ice candidate</code>，这个信息就是 ice 候选信息，A 发给 B 的 B 储存，B 发给 A 的 A 储存，直至候选完成。</li></ol><blockquote><p>我们可以发现，这里又出来个新的名词 <strong><code>SDP</code></strong>，这玩意实际就是<code>WebRTC</code>会话的<code>信令</code>，完成以上过程就相当于建立了<code>WebRTC</code>的会话基础，然后你才可以借助这个<strong>桥梁</strong>去添加和监听双方的音视频流信息。</p></blockquote><h2 id="信令服务器的搭建" tabindex="-1">信令服务器的搭建 <a class="header-anchor" href="#信令服务器的搭建" aria-label="Permalink to &quot;信令服务器的搭建&quot;">​</a></h2><p>从上述整个流程来看，信令服务器为 A、B 两者中转信令起了很重要的角色，直白地讲，就是串通 A、B 的媒介，假如我的手机是 A，你的手机是 B，那么我们俩联系就需要通过运营商，而运营商的服务器替我们中转呼叫、接听、挂断等操作，在这里，<strong>运营商的服务器就是信令服务器</strong>。</p><p>信令服务器听上去很高大上，但实际上，它在不做复杂操作的时候，就是个即时通讯服务器，转发通话双方需要交换的信息，或者会话的信息，因此我们可以直接写个<code>WebSocket</code>服务端来完成信令服务器的使命。</p><p>当然，要完成信令服务器，我们也需要有针对性，我们的目的是为了<code>WebRTC</code>，那么针对的肯定就是<code>WebRTC</code>会话过程中需要的转发逻辑，由此我们可以构思下服务端应该具备哪些功能，看下图。 <img src="'+l+'" alt="" loading="lazy"> 为了完成上面这个构思，我们可以尝试写出来一个最基本的信令服务器。记住我们的目的是什么？<strong>一个会议系统</strong>，是的，所以我们设计的东西一定要满足会议的基本条件，即：用户单独标识和集体标识，也就是一开始必须区分的关键信息<code>userId</code>、<code>roomId</code>，但是怎么存会议室中的用户信息呢？ 这里我会用到<code>Redis</code>的一种数据结构<code>Hash</code>，存放的大体结构如下图所示。 <img src="'+c+`" alt="" loading="lazy"> 信令服务器用什么语言呢？我们以 Web 端为主体，因此直接通过大家熟悉的<code>nodejs</code>来写即可，简单、方便、成本低，会一点点<code>JavaScript</code>即可。</p><h3 id="具体代码" tabindex="-1">具体代码 <a class="header-anchor" href="#具体代码" aria-label="Permalink to &quot;具体代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>        const httpServer = require(&#39;http&#39;).createServer();</span></span>
<span class="line"><span>        const io = require(&#39;socket.io&#39;)(httpServer);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //redis</span></span>
<span class="line"><span>        var redis = require(&#39;redis&#39;)</span></span>
<span class="line"><span>        const roomKey = &quot;meeting-room::&quot;</span></span>
<span class="line"><span>        var redisClient = redis.createClient(6379, &#39;127.0.0.1&#39;)</span></span>
<span class="line"><span>        redisClient.on(&#39;error&#39;, function (err) {</span></span>
<span class="line"><span>          console.log(&#39;redisClient connect Error &#39; ,err);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const userMap = new Map() // user - &gt; socket</span></span>
<span class="line"><span>        io.on(&#39;connection&#39;, async (socket) =&gt; {</span></span>
<span class="line"><span>            await onListener(socket)</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        httpServer.listen(18080, async() =&gt; {</span></span>
<span class="line"><span>          console.log(&#39;服务器启动成功 *:18080&#39;);</span></span>
<span class="line"><span>          await redisClient.connect();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * res data</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        function getMsg(type,msg,status=200,data=null){</span></span>
<span class="line"><span>            return {&quot;type&quot;:type,&quot;msg&quot;:msg,&quot;status&quot;:status,&quot;data&quot;:data}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function getParams(url,queryName){</span></span>
<span class="line"><span>            let query = decodeURI(url.split(&#39;?&#39;)[1]);</span></span>
<span class="line"><span>            let vars = query.split(&quot;&amp;&quot;);</span></span>
<span class="line"><span>            for (var i = 0; i &lt; vars.length; i++) {</span></span>
<span class="line"><span>              var pair = vars[i].split(&quot;=&quot;);</span></span>
<span class="line"><span>              if (pair[0] === queryName) {</span></span>
<span class="line"><span>                return pair[1];</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * DB data</span></span>
<span class="line"><span>         * @author suke</span></span>
<span class="line"><span>         * @param {Object} userId</span></span>
<span class="line"><span>         * @param {Object} roomId</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        async function getUserDetailByUid(userId,roomId){</span></span>
<span class="line"><span>            let res = JSON.stringify(({&quot;userId&quot;:userId,&quot;roomId&quot;:roomId}))</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>            return res</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 监听</span></span>
<span class="line"><span>         * @author suke</span></span>
<span class="line"><span>         * @param {Object} s</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        async function onListener(s){</span></span>
<span class="line"><span>            let url = s.client.request.url</span></span>
<span class="line"><span>            let userId = getParams(url,&#39;userId&#39;)</span></span>
<span class="line"><span>            let roomId = getParams(url,&#39;roomId&#39;)</span></span>
<span class="line"><span>            console.log(&quot;client uid：&quot;+userId+&quot; roomId: &quot;+roomId+&quot; online &quot;)</span></span>
<span class="line"><span>            //user map</span></span>
<span class="line"><span>            userMap.set(userId,s)</span></span>
<span class="line"><span>            //room cache</span></span>
<span class="line"><span>            if(roomId){</span></span>
<span class="line"><span>                await redisClient.hSet(roomKey+roomId,userId, await getUserDetailByUid(userId,roomId))</span></span>
<span class="line"><span>                oneToRoomMany(roomId,getMsg(&#39;join&#39;,userId+ &#39; join then room&#39;))</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            s.on(&#39;msg&#39;, async (data) =&gt; {</span></span>
<span class="line"><span>                  console.log(&quot;msg&quot;,data)</span></span>
<span class="line"><span>                  await oneToRoomMany(roomId,)</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            s.on(&#39;disconnect&#39;, () =&gt; { </span></span>
<span class="line"><span>                  console.log(&quot;client uid：&quot;+userId+&quot; roomId: &quot;+roomId+&quot; offline &quot;)</span></span>
<span class="line"><span>                  userMap.delete(userId)</span></span>
<span class="line"><span>                  if(roomId){</span></span>
<span class="line"><span>                      redisClient.hDel(roomKey+roomId,userId)</span></span>
<span class="line"><span>                      oneToRoomMany(roomId,getMsg(&#39;leave&#39;,userId+&#39; leave the room &#39;))</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>            });    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>            s.on(&#39;roomUserList&#39;, async (data) =&gt; {</span></span>
<span class="line"><span>                // console.log(&quot;roomUserList msg&quot;,data)</span></span>
<span class="line"><span>                s.emit(&#39;roomUserList&#39;,await getRoomUser(data[&#39;roomId&#39;]))</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            s.on(&#39;call&#39;,(data) =&gt; {</span></span>
<span class="line"><span>                let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>                if(userMap.get(targetUid)){</span></span>
<span class="line"><span>                    oneToOne(targetUid,getMsg(&#39;call&#39;,&quot;远程呼叫&quot;,200,data))</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    console.log(targetUid+ &quot;不在线&quot;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            s.on(&#39;candidate&#39;,(data) =&gt; {</span></span>
<span class="line"><span>                let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>                if(userMap.get(targetUid)){</span></span>
<span class="line"><span>                    oneToOne(targetUid,getMsg(&#39;candidate&#39;,&quot;ice candidate&quot;,200,data))</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    console.log(targetUid+ &quot;不在线&quot;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            s.on(&#39;offer&#39;,(data) =&gt; {</span></span>
<span class="line"><span>                let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>                if(userMap.get(targetUid)){</span></span>
<span class="line"><span>                    oneToOne(targetUid,getMsg(&#39;offer&#39;,&quot;rtc offer&quot;,200,data))</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    console.log(targetUid+ &quot;不在线&quot;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            s.on(&#39;answer&#39;,(data) =&gt; {</span></span>
<span class="line"><span>                let targetUid = data[&#39;targetUid&#39;]</span></span>
<span class="line"><span>                if(userMap.get(targetUid)){</span></span>
<span class="line"><span>                    oneToOne(targetUid,getMsg(&#39;answer&#39;,&quot;rtc answer&quot;,200,data))</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    console.log(targetUid+ &quot;不在线&quot;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * ono to one (event msg)</span></span>
<span class="line"><span>         * @author suke</span></span>
<span class="line"><span>         * @param {Object} uid</span></span>
<span class="line"><span>         * @param {Object} msg</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        function oneToOne(uid,msg){</span></span>
<span class="line"><span>            let s = userMap.get(uid)</span></span>
<span class="line"><span>            if(s){</span></span>
<span class="line"><span>                s.emit(&#39;msg&#39;,msg)</span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>                console.log(uid+&quot;用户不在线&quot;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 获取房间用户列表</span></span>
<span class="line"><span>         * @author suke</span></span>
<span class="line"><span>         * @param {Object} roomId</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        async function getRoomUser(roomId){</span></span>
<span class="line"><span>            return await redisClient.hGetAll(roomKey+roomId)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * one to room many</span></span>
<span class="line"><span>         * @author suke</span></span>
<span class="line"><span>         * @param {Object} roomId</span></span>
<span class="line"><span>         * @param {Object} msg</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        async function oneToRoomMany(roomId,msg){</span></span>
<span class="line"><span>            let ulist = await redisClient.hGetAll(roomKey+roomId)</span></span>
<span class="line"><span>            for(const uid in ulist){</span></span>
<span class="line"><span>              oneToOne(uid,msg)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span></code></pre></div><h3 id="项目演示指南" tabindex="-1">项目演示指南 <a class="header-anchor" href="#项目演示指南" aria-label="Permalink to &quot;项目演示指南&quot;">​</a></h3><p>下载代码后，找到目录下： socket-server 文件夹，到文件夹执行依赖安装并配置 Redis 链接。 <img src="`+t+`" alt="" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>   cd socket-server</span></span>
<span class="line"><span>   cnpm i </span></span>
<span class="line"><span>   npm run start ## 启动</span></span>
<span class="line"><span>   ---------------------打印如下则代表信令服务器启动成功---------------------------------</span></span>
<span class="line"><span>   &gt; socket-server@1.0.0 start</span></span>
<span class="line"><span>   &gt; node app.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   服务器启动成功 *:18080</span></span>
<span class="line"><span>   redis 连接成功</span></span></code></pre></div><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p>在看完<code>WebRTC</code>会话流程之后，你会发现，在整个核心会话中，并没有出现媒体信息交换（比如：摄像头、麦克风媒体流的发送和接受）。所以很明显，<code>WebRTC</code>不只可以用来音视频通话。</p><p>确实如此，在无需视频通话的时候，我们可以用<code>WebRTC</code>这个<code>桥梁</code>当作是一种新的数据双向传输方案，现阶段已经有网站用这种方式上传用户数据或其他加密消息媒介了，而且因为<code>WebRTC</code>中数据传输协议非<code>HTTP</code>或者<code>WebSocket</code>协议请求，很多探测工具也就没法察觉。</p><p>下一节，我们将利用搭建好的信令服务器，去具体实现最简单的 P2P 音视频通话，同时也为了给大家演示下，<code>WebRTC</code>除音视频场景之外，利用<code>WebRTC</code>已完成会话这个桥梁，去实现无需服务端的点对点 IM 通信。</p><h2 id="本节所有源代码地址" tabindex="-1">本节所有源代码地址 <a class="header-anchor" href="#本节所有源代码地址" aria-label="Permalink to &quot;本节所有源代码地址&quot;">​</a></h2><p><a href="https://gist.github.com/wangsrGit119/7b1d280550e593987f55f34e13f4f6aa" target="_blank" rel="noreferrer">信令服务器源码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>利用 <code>Node JS</code> 搭建好信令服务器之后，我们就需要在前端页面完成和 <code>socket</code> 服务器的连接。前面已经明确了信令服务器的基本功能就是信令的转发，信令说白了就是一种特殊的消息，因此课后大家可以先尝试使用这个服务器实现 <code>Web</code> 端的基本文本聊天。</p>`,56),d=[r];function u(g,m,h,q,b,C){return a(),n("div",null,d)}const T=s(i,[["render",u]]);export{f as __pageData,T as default};
