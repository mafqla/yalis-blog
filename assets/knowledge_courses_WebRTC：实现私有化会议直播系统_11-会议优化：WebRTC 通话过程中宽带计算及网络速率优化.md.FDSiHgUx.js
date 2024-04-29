import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.CqxfJewd.image",t="/assets/2.bqSw5oHJ.image",l="/assets/3._ieixhIa.image",o="/assets/4.SgKQ5ank.image",i="/assets/5.HQP-jdSE.image",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/11-会议优化：WebRTC 通话过程中宽带计算及网络速率优化.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/11-会议优化：WebRTC 通话过程中宽带计算及网络速率优化.md","lastUpdated":1714353571000}'),r={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/11-会议优化：WebRTC 通话过程中宽带计算及网络速率优化.md"},c=e('<p>前面的课程中我们接触并搭建了 <code>Mesh 架构</code>下<code>WebRTC</code>会议系统，这节课我们通过宽带这个概念去看看这个架构存在哪些问题，以及怎么优化当前架构下的会议系统。</p><p>在具体介绍和计算的时候，我会提到一些基础概念，结合这些概念，我们来计算下在固定人数的视频会议过程中宽带的消耗。</p><h2 id="消耗宽带计算" tabindex="-1">消耗宽带计算 <a class="header-anchor" href="#消耗宽带计算" aria-label="Permalink to &quot;消耗宽带计算&quot;">​</a></h2><p>我们先来看几个概念。</p><ol><li><strong>宽带</strong>：1M 带宽即 1Mbps（是<code>兆比特</code>每秒 <code>Mbps</code> 不是 <code>兆字节</code> 每秒 <code>MBps</code>）。</li></ol><ol start="2"><li><strong>字节和比特（Byte 和bit）</strong> ：1 字节 = 8 比特。</li></ol><ol start="3"><li><strong>宽带计算</strong>：1 M宽带 = (1 * 1024 ÷ 8 ) KB/s = （1 * 1024 ÷ 8 ÷ 1024）MB/s。</li></ol><ol start="4"><li><strong>下行速率/下载速度</strong>：100 兆宽带 = 100 * 1024 ÷ 8 Kb/s = 12800 KB/s = 12.5 MB/s。</li></ol><ol start="5"><li><strong>上行速率</strong>：这个很迷，理论值和实际值不对等的，自己直接在线测下即可（下面是我的实际测试值，上下行 1:4 左右）。</li></ol><p><img src="'+p+`" alt="" loading="lazy"></p><ol start="6"><li><strong>分辨率</strong>：1920x1080 的分辨率，代表 1080P；1280x720 分辨率，代表 720P；（我相信你们已经能按照分辨率推测出其他的画质清晰度了，720x480：480P）。</li></ol><ol start="7"><li><strong>视频的帧速率</strong>：在小册第二节讲<code>constraints </code>约束时我们讲过：每秒钟连续多少帧画面，一般流畅值为 24<code>FPS</code>。</li></ol><ol start="8"><li><strong>帧大小计算</strong>：帧大小取决于<strong>颜色深度</strong>，在 8 位色深中，每个像素可以有 2⁸ = 256（0-255） 种颜色中的一种，占 <code>8bit</code> 即一个字节；24 位则占三个字节；由此<strong>帧大小= 水平分辨率 * 垂直分辨率 * 颜色深度</strong>。举例 480P 画质的帧大小= 720 * 480 * 24 = 8294400。</li></ol><ol start="9"><li><strong>比特率</strong>：<strong>帧大小 * FPS * BPP / 1024</strong>，如果再乘以时间就可以计算出这段时间内的视频大小了。</li></ol><ol start="10"><li><strong>压缩指标</strong>： <strong>每像素位数 BPP（Bits per Pixel）</strong> <strong>，</strong> 一般来说这个值在 0.1 左右视频质量都是很好的。</li></ol><p>假设你需要和 4 个人视频，每个人的画质降低到 480P，此时你需要将你的画面发送给四个人，因为每个人都和你建立关联所以你需要发送四份（Mesh 架构下），发送这四份消耗的是上行宽带，具体消耗多少呢？一份 480P 视频帧速率按照 24 <code>FPS</code>来算（计算的时候我们默认先<strong>不考虑颜色深度</strong>这个概念，以及<strong>忽略音频</strong>的比特率大小）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>// 比特率计算 不考虑颜色深度 则默认为 X1</span></span>
<span class="line"><span>let frameSize = 720*480*1 = 345600 //帧大小</span></span>
<span class="line"><span>let biterate = frameSize * 24 * 0.1 / 1024 ~= 810 Kb/s</span></span>
<span class="line"><span>let total = biterate * 4 = 3.24 Mb/s</span></span></code></pre></div><p>上面的计算结果和在线的比特率计算器我们可以对比下：<a href="https://www.omnicalculator.com/other/streaming-bitrate" target="_blank" rel="noreferrer">在线比特率计算器</a></p><p><img src="`+t+`" alt="" loading="lazy"></p><p>总的算下来四个视频发出去需要消耗的上行宽带至少是 每秒 <strong>4M</strong> 左右，如果再加上你需要获取别的人员的视频，就需要单独的下行宽带也在 每秒 <strong>4M</strong> 左右，一般而言上行宽带和下行宽带是不等价的，从前面测试中就可以发现。</p><h2 id="优化会议质量" tabindex="-1">优化会议质量 <a class="header-anchor" href="#优化会议质量" aria-label="Permalink to &quot;优化会议质量&quot;">​</a></h2><p>了解了消耗宽带的计算，我们就需要优化我们的会议系统了，在<strong>小册第二讲</strong>中我们我们讲到了很多约束参数，根据实际情况我们再看下参数，实际情况帧速率 24 就可以了，所以我们设置 FPS 为 24，但是在网络状况差的时候是可以接受延缓的，因此如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const constraints = {</span></span>
<span class="line"><span>    audio: true,</span></span>
<span class="line"><span>    video: {</span></span>
<span class="line"><span>        width:1920,</span></span>
<span class="line"><span>        height:1080,</span></span>
<span class="line"><span>        frameRate: { min:10 , ideal: 15, max: 24 }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>而在很多情况下，多人会议并不需要去关注画面的清晰度，此时可以将整体的分辨率调低到 <code>480P</code> 左右，当然 <code>360P</code> 也是可以接受的，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const constraints = {</span></span>
<span class="line"><span>    audio: true,</span></span>
<span class="line"><span>    video: {</span></span>
<span class="line"><span>        width:720,</span></span>
<span class="line"><span>        height:480,</span></span>
<span class="line"><span>        frameRate: { min:10 , ideal: 15, max: 24 }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>需要注意的是，遇到屏幕分享这个场景，大家记得一定要调高分辨率，不然对面看到的画面就是马赛克了。</p><p>除了上述设置限制<code>分辨率</code>和<code>FPS</code>之外，我们还可以限制发送的 <code>Bitrate</code>即自己的出口宽带。在和另一端建立<code> RTC 连接</code>之后，我们可以根据上一讲中提到的画面控制参数来变更发送的 <code>Bitrate</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>//pc 为 核心关联 PeerConnection实例 </span></span>
<span class="line"><span>let senders = pc.getSenders()</span></span>
<span class="line"><span>let sender = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>const params = sender.getParameters();</span></span>
<span class="line"><span>//比特率设置</span></span>
<span class="line"><span>let bitrate = 100*1024</span></span>
<span class="line"><span>params.encodings[0].maxBitrate = bitrate;</span></span>
<span class="line"><span> //同步参数</span></span>
<span class="line"><span> await sender.setParameters(params);</span></span></code></pre></div><h2 id="会议实时宽带计算" tabindex="-1">会议实时宽带计算 <a class="header-anchor" href="#会议实时宽带计算" aria-label="Permalink to &quot;会议实时宽带计算&quot;">​</a></h2><p>在<a href="https://juejin.cn/book/7168418382318927880/section/7172208545868283917?scrollMenuIndex=1" target="_blank" rel="noreferrer">《09 | 会议实战：WebRTC 实现多房间多用户的第一种架构会议系统》</a>这节课的会议 Demo 中，大家点击统计按钮就会在参会人员画面中显示实时消耗的宽带，计算的核心还是我们反反复复提到了多次的<code>PeerConnection</code> <strong>实例对象</strong>，下面代码就是计算所有和当前客户端建立<code> RTC 连接</code>后实时视频过程中宽带统计的计算方式。</p><blockquote><p>注意代码中的注释：出口宽带和入口宽带，出口宽带计算的是你发送流单位时间所消耗的比特流，而入口宽带就是通过当前<code>RTC连接</code>远程客户端发送的媒体流到你的客户端展示所消耗的比特流。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>calculateSendBitrate(userId,pc){</span></span>
<span class="line"><span>        let that = this</span></span>
<span class="line"><span>        let lastResultForStats = this.lastPeerStatsMap.get(userId)</span></span>
<span class="line"><span>        pc.getStats().then(res =&gt; {</span></span>
<span class="line"><span>                res.forEach(report =&gt; {</span></span>
<span class="line"><span>                        let bytes;</span></span>
<span class="line"><span>                  let headerBytes;</span></span>
<span class="line"><span>                  let packets;</span></span>
<span class="line"><span>                  //出口宽带 outbound-rtp  入口宽带 inbound-rtp</span></span>
<span class="line"><span>                  if (report.type === &#39;outbound-rtp&#39; &amp;&amp; report.kind ===&#39;video&#39;) {</span></span>
<span class="line"><span>                                const now = report.timestamp;</span></span>
<span class="line"><span>                                bytes = report.bytesSent;</span></span>
<span class="line"><span>                                headerBytes = report.headerBytesSent;</span></span>
<span class="line"><span>                        packets = report.packetsSent;</span></span>
<span class="line"><span>                                </span></span>
<span class="line"><span>                        if (lastResultForStats &amp;&amp; lastResultForStats.has(report.id)) {</span></span>
<span class="line"><span>                                let bf = bytes-lastResultForStats.get(report.id).bytesSent</span></span>
<span class="line"><span>                                let hbf = headerBytes - lastResultForStats.get(report.id).headerBytesSent</span></span>
<span class="line"><span>                                let pacf = packets - lastResultForStats.get(report.id).packetsSent</span></span>
<span class="line"><span>                                let t = now - lastResultForStats.get(report.id).timestamp</span></span>
<span class="line"><span>                                // calculate bitrate</span></span>
<span class="line"><span>                                const bitrate = (8 * bf/t).toFixed(2);</span></span>
<span class="line"><span>                                const headerrate = (8 * hbf/t).toFixed(2);</span></span>
<span class="line"><span>                                const packetrate = Math.floor(1000 * pacf/t);</span></span>
<span class="line"><span>                                console.log(\`\${userId} ==&gt; Bitrate \${bitrate} kbps, overhead \${headerrate} kbps, \${packetrate} packets/second\`);</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                that.lastPeerStatsMap.set(userId,res)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>核心还是通过<code>RTCPeerConnection</code>对象的<code>getStats</code>方法计算，定时器中定时去获取这个方法返回的信息，看上面代码中<code>report.type === &#39;outbound-rtp&#39;</code>出口宽带这里。</p><h2 id="项目操作演示" tabindex="-1">项目操作演示 <a class="header-anchor" href="#项目操作演示" aria-label="Permalink to &quot;项目操作演示&quot;">​</a></h2><ol><li>打开项目，找到模块：多对多网络视频。</li></ol><p><img src="`+l+'" alt="" loading="lazy"></p><ol start="2"><li>用不同账户入会，两个用户即可。</li></ol><ol start="3"><li>打开视频后第二个人的页面下面点击 <code>stats</code>按钮。稍等片刻，就是实时显示对面用户画面的实时比特率了。</li></ol><p><img src="'+o+`" alt="" loading="lazy"></p><ol start="4"><li>切换第一个用户标签页面，点击对面用户视频画面，此时触发画面控制参数设置。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>async setBiterate(uid){</span></span>
<span class="line"><span>    //通过用户ID获取关联的Peer实例化对象 当前用户是谁 那么对应用户的画面就会生效 比如A、B、C</span></span>
<span class="line"><span>    //三个通话，那么A这边点击 B 的画面此时设置的是B画面的出口宽带，因此在 B 端比特率就会变更。</span></span>
<span class="line"><span>    //要全局生效也很简单，就是遍历 RtcPcMaps 中的所有 Peer实例，给予每一个的关联都设置该参数。</span></span>
<span class="line"><span>    let pcKey = this.formInline.userId+&#39;-&#39;+uid</span></span>
<span class="line"><span>    let pc = RtcPcMaps.get(pcKey)</span></span>
<span class="line"><span>    if(pc){</span></span>
<span class="line"><span>            let senders = pc.getSenders()</span></span>
<span class="line"><span>            let sender = senders.find((s) =&gt; s.track.kind === &#39;video&#39;)</span></span>
<span class="line"><span>            //获取控制参数</span></span>
<span class="line"><span>            const params = sender.getParameters();</span></span>
<span class="line"><span>            //在不兼容的终端可能这个参数为null 因此请参考上节课我们提到的赋值初始变量</span></span>
<span class="line"><span>            //比特率设置 100 kbit/s</span></span>
<span class="line"><span>            let bitrate = 100*1024</span></span>
<span class="line"><span>            params.encodings[0].maxBitrate = bitrate;</span></span>
<span class="line"><span>             //同步参数</span></span>
<span class="line"><span>            await sender.setParameters(params);</span></span>
<span class="line"><span>    }        </span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="5"><li>演示。请注意动图中的比特率变化。</li></ol><p><img src="`+i+'" alt="" loading="lazy"></p><h2 id="后话" tabindex="-1">后话 <a class="header-anchor" href="#后话" aria-label="Permalink to &quot;后话&quot;">​</a></h2><p>实际上，影响整个会议系统的不仅仅有宽带因素，还有自己当前主机的限制，每一路流都需要浏览器的编码解码，如果参会人数很多，你的笔记本性能很不好的话，那么就很容易造成卡顿，但是大多数情况下，比如二三十人的小型会议还是没有任何问题。</p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>这节课学完，我们的第一阶段算是完成了，后面就是利用开源流媒体服务器打造其他场景的会议系统了。希望在第一阶段结束后，大家都可以实现一个在区域网内可以使用的会议系统，加油！有任何问题留言即可。</p>',47),d=[c];function g(h,m,b,u,_,k){return n(),a("div",null,d)}const f=s(r,[["render",g]]);export{v as __pageData,f as default};
