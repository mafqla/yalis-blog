import{_ as s,c as a,o as n,V as e}from"./chunks/framework.YbGCv4uC.js";const p="/assets/1.WLRkWDX-.image",i="/assets/2.piE_MQIZ.image",o="/assets/3.f7tdDEoX.image",l="/assets/4.UGYcLatK.image",t="/assets/5.CTo1zo0p.image",c="/assets/6.3hclXMMG.image",r="/assets/7.wTFJbjNa.image",I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/2-基础（一）：Web 端基础 API 学习.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/2-基础（一）：Web 端基础 API 学习.md","lastUpdated":1705828800000}'),d={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/2-基础（一）：Web 端基础 API 学习.md"},g=e('<p>摄像头和麦克风属于用户的隐私设备，<code>WebRTC</code>既然成为了浏览器中音视频即时通信的<code>W3C</code>标准，因此必然会提供<code>API</code>，让有一定代码开发能力的人去调用。当然，这些是程序员的基础技能了，要求不是很高，但也需要我们基本熟知。这节课，我们就来看看这些基础<code>API</code>。</p><blockquote><p><strong>注意敲黑板：</strong> 使用这些<code>API</code>是有前提条件的哦，首先在<code>安全源</code>访问，调用<code>API</code>才没有任何阻碍的。那什么是<code>安全源</code>呢？看下面思维导图（更详细的看：<a href="https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/" target="_blank" rel="noreferrer">chrome官方文档</a>），且记住这句话：<strong><code>安全源</code></strong> <strong>是至少匹配以下（ Scheme</strong> <strong>、</strong> <strong>Host</strong> <strong>、</strong> <strong>Port ）模式之一的源。</strong></p></blockquote><p><img src="'+p+'" alt="" loading="lazy"></p><blockquote><p>举个简单的例子：你本地开发用<code>HTTP</code>请求地址获取摄像头<code>API</code>没有问题，但是你的同事用他的电脑访问你电脑<code>IP</code>对应的项目地址时，摄像头调用失败，为什么呢？</p><p>因为在他的浏览器中，你的项目访问地址非<code>HTTPS</code>，在非<code>HTTPS</code>的情况下，如果<code>IP</code>不是<code>localhost</code>或<code>127.0.0.1</code>，都不属于<code>安全源</code>。</p><p><strong>当然事非绝对，在特定情况下必须使用非<code>HTTPS</code>访问也是可以的，<code>Chrome</code>提供了对应的取消限制但是不太建议用（安全为上），因此我在这里就不再多余阐述。</strong></p><p>所以经常有同学问，为什么我的代码在自己浏览器中可以获取到摄像头，但是在区域网下别的电脑的浏览器中获取不到？同样的浏览器、同样的操作系统，为什么获取不到呢？原因就是上面的<strong>安全源</strong>限制。</p></blockquote><h2 id="getusermedia" tabindex="-1">getUserMedia <a class="header-anchor" href="#getusermedia" aria-label="Permalink to &quot;getUserMedia&quot;">​</a></h2><p>以前的版本中我们经常使用 <code>navigator.getUserMedia</code> 来获取计算机的摄像头或者麦克风，但是现在这个接口废弃，变更为 <code>navigator.mediaDevices.getUserMedia</code>，因此后面我们均使用新的<code>API</code>来完成代码编写。</p><h3 id="getusermedia可以干什么" tabindex="-1"><code>getUserMedia</code>可以干什么？ <a class="header-anchor" href="#getusermedia可以干什么" aria-label="Permalink to &quot;`getUserMedia`可以干什么？&quot;">​</a></h3><p>意如其名，那就是获取用户层面的媒体，当你的计算机通过 <code>USB</code> 或者其他网络形式接入了 <strong>N 多个</strong>摄像头或虚拟设备时，都是可以通过这个 <code>API</code> 获取到的。 当然不仅仅是视频设备，还包括音频设备和虚拟音频设备。 <strong>获取媒体设备是最简单的操作，它还可以控制获取到媒体的分辨率，以及其他的以一些可选项。</strong></p><blockquote><p>PS：在很多云会议中，我们开会只能选择一个摄像头，这并不是只能使用一个摄像头，而是厂商针对“大多数场景中只会用到一个摄像头”而设计的；<strong>但在有些业务中，我们可能需要自己设备上的N 个摄像头（带USB摄像头）同时使用，那么如何办到呢</strong>（这个场景其实蛮多的，后面留个课后题）。因此熟知这个 <code>API</code> 对于解决基本的会议和其他复杂场景问题很有用。</p></blockquote><h3 id="如何使用-getusermedia" tabindex="-1">如何使用 <code>getUserMedia</code>？ <a class="header-anchor" href="#如何使用-getusermedia" aria-label="Permalink to &quot;如何使用 ` getUserMedia `？&quot;">​</a></h3><p>有简单的用法，有复杂的用法。一般简易场景下，大多数 API 用默认参数就可以实现对应功能，<code>getUserMedia</code>也一样，直接调用不使用任何参数，则获取的就是 PC 的默认摄像头和麦克风。</p><p>但是，当我们遇到复杂一点的应用场景，比如<strong>你的电脑上自带麦克风，同时你连接了蓝牙耳机和有线耳机，那么在视频通话过程中，你如何主动选择使用哪个呢？也就是说，</strong> 在用摄像头或者麦克风之前，我们先要解决如何从 <strong>N 个摄像头或者麦克风</strong>中选择我们想要的。</p><p>要解决这个问题，我们必须先有个大体的思路（当然这个思路并不是凭空想象出来的，而是在一定的技术储备下才有的。如果你开始前没有任何思路也没关系，可以参考他人的经验），如下：</p><ol><li>获取当前设备所有的摄像头和麦克风信息；</li></ol><ol start="2"><li>从所有的设备信息中遍历筛选出我们想要使用的设备；</li></ol><ol start="3"><li>将我们想要使用的设备以某种参数的形式传递给浏览器 <code>API</code>；</li></ol><ol start="4"><li>浏览器<code>API</code>去执行获取的任务。</li></ol><p>上面提到的<strong>设备以某种参数的形式传递给</strong> <strong><code>API</code></strong>，那么这个设备必然是以参数存在的，因此这里有几个概念需要提前知道，如下：</p><p><img src="'+i+`" alt="" loading="lazy"></p><p>设备分成了图中的三个大类型，每个类型都有固定的字段，比如 <strong>ID、kind、label</strong> ，而其中用于区分它们的就是<code>kind字段</code>中的<strong>固定值</strong>，<strong>最核心的字段就是 ID</strong>，后面我们经常用的就是这个 ID。</p><p>那么，在前端如何使用 <code>JavaScript</code>获取到这些信息？</p><p>大家先看下面这段代码，大体上过一遍，并留意 <code>initInnerLocalDevice</code>函数内部执行顺序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>function handleError(error) {</span></span>
<span class="line"><span>    alert(&quot;摄像头无法正常使用，请检查是否占用或缺失&quot;)</span></span>
<span class="line"><span>    console.error(&#39;navigator.MediaDevices.getUserMedia error: &#39;, error.message, error.name);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author suke</span></span>
<span class="line"><span> * device list init </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function initInnerLocalDevice(){</span></span>
<span class="line"><span>        const that  = this</span></span>
<span class="line"><span>        var localDevice = {</span></span>
<span class="line"><span>            audioIn:[],</span></span>
<span class="line"><span>            videoIn: [],</span></span>
<span class="line"><span>            audioOut: []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let constraints = {video:true, audio: true}</span></span>
<span class="line"><span>        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {</span></span>
<span class="line"><span>            console.log(&quot;浏览器不支持获取媒体设备&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        navigator.mediaDevices.getUserMedia(constraints)</span></span>
<span class="line"><span>            .then(function(stream) {</span></span>
<span class="line"><span>                stream.getTracks().forEach(trick =&gt; {</span></span>
<span class="line"><span>                    trick.stop()</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                // List cameras and microphones.</span></span>
<span class="line"><span>                navigator.mediaDevices.enumerateDevices()</span></span>
<span class="line"><span>                    .then(function(devices) {</span></span>
<span class="line"><span>                        devices.forEach(function(device) {</span></span>
<span class="line"><span>                            let obj = {id:device.deviceId, kind:device.kind, label:device.label}</span></span>
<span class="line"><span>                            if(device.kind === &#39;audioinput&#39;){</span></span>
<span class="line"><span>                                if(localDevice.audioIn.filter(e=&gt;e.id === device.deviceId).length === 0){</span></span>
<span class="line"><span>                                    localDevice.audioIn.push(obj)</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }if(device.kind === &#39;audiooutput&#39;){</span></span>
<span class="line"><span>                                if(localDevice.audioOut.filter(e=&gt;e.id === device.deviceId).length === 0){</span></span>
<span class="line"><span>                                    localDevice.audioOut.push(obj)</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }else if(device.kind === &#39;videoinput&#39; ){</span></span>
<span class="line"><span>                                if(localDevice.videoIn.filter(e=&gt;e.id === device.deviceId).length === 0){</span></span>
<span class="line"><span>                                    localDevice.videoIn.push(obj)</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        });</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    .catch(handleError);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .catch(handleError);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>这个代码片段的主要作用就是获取用户设备上所有的摄像头和麦克风信息，起关键作用的是<code>enumerateDevices</code>函数，但是在调用这个关键函数之前，<code>getUserMedia</code>函数出现在了这里，它的出现是用户在访问服务时直接调用用户摄像头，此时如果用户授权且同意使用设备摄像头、麦克风，那么<code>enumerateDevices</code>函数就能获取设备信息了，在这里<code>getUserMedia</code>函数可以理解为获取摄像头或者麦克风权限集合的<strong>探路函数</strong>。</p><p>看下图，我将我电脑上使用<code>enumerateDevices</code>函数加载到的信息，根据前面提到的字段<code>kind</code>，将其分三类并打印到控制台。</p><p><img src="`+o+`" alt="" loading="lazy"></p><p>千万不要小看现在获取到的这些信息哦，在后面视频通话或会议过程中，我们需要抉择摄像头用前置还是后置，麦克风是用蓝牙还是有线，都是离不开这些信息的。</p><p>在拿到所有的摄像头麦克风信息之后，我们需选出最终要参与视频通话的那个信息体，看上图中 <strong><code>VideoIn</code><strong>数组里面</strong><code>label:&quot;eseSoft Vcam&quot;</code></strong> <strong>，</strong> 这个摄像头就是我想要参会的摄像头，那么我怎样指定让代码去选择这个摄像头呢？这里就涉及到了<code>getUserMedia</code>的约束参数<code>constraints</code> 。</p><h3 id="媒体约束-constraints" tabindex="-1">媒体约束 constraints <a class="header-anchor" href="#媒体约束-constraints" aria-label="Permalink to &quot;媒体约束 constraints&quot;">​</a></h3><p>在具体讲解约束参数 constraints 之前，大家先看下面这段示例代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>let constraints = {video:true, audio: true} </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>    function handleError(error) {</span></span>
<span class="line"><span>        console.error(&#39;navigator.MediaDevices.getUserMedia error: &#39;, error.message, error.name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取设备 stream</span></span>
<span class="line"><span>     * @param constraints</span></span>
<span class="line"><span>     * @returns {Promise&lt;MediaStream&gt;}</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    async function getLocalUserMedia(constraints){</span></span>
<span class="line"><span>        return await navigator.mediaDevices.getUserMedia(constraints)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>    let stream = await this.getLocalUserMedia(constraints).catch(handleError);</span></span>
<span class="line"><span>console.log(stream)</span></span></code></pre></div><p>上面的代码片段为<code>JavaScript</code>获取计算机摄像头和麦克风的媒体流（视频和音频流我们统称为媒体流）的一种方式，大多数情况下都是这么用的，如果电脑有摄像头、麦克风，这样获取没有任何问题，但就担心你用的时候，你的电脑上<strong>没有配摄像头或麦克风</strong>，或者<strong>有多个摄像头而你想指定其中某一个。</strong> 为了兼容更多情况，我们需要知道<code>constraints</code>这个参数的详细用法。</p><p>接下来我们看下这个参数在几种常见场景下的具体配置，以及为什么这样配置。</p><ol><li><strong>同时获取视频和音频输入</strong></li></ol><p>使用下面约束， 如果遇到计算机没有摄像头的话，你调用上述代码的过程中就会报错，因此我们在调用之前可以通过<code>enumerateDevices</code>返回结果主动判断有无视频输入源，没有的话，可以动态将这个参数中的 <code>video</code>设置为<code>false</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>{ audio: true, video: true }</span></span></code></pre></div><ol start="2"><li><strong>获取指定分辨率</strong></li></ol><p>在会议宽带足够且流媒体传输合理的情况下，无需考虑服务端压力，而需考虑客户端用户摄像头的分辨率范围，通常我们会设置一个分辨率区间。</p><p>下面展示的①约束是请求一个 <code>1920×1080</code> 分辨率的视频，但是还提到 <code>min</code> 参数，将 <code>320×240</code> 作为最小分辨率，因为并不是所有的网络摄像头都可以支持 <code>1920×1080</code> 。当请求包含一个 <code>ideal</code>（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。</p><p>但是，在多人会议简单架构场景中，在不改变会议稳定性的情况下，为了让更多的客户端加入，我们通常会把高分辨率主动降低到低分辨率，约束特定摄像头获取指定分辨率如下面②配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>    --------------------①:1--------------------------</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        audio: true,</span></span>
<span class="line"><span>        video: {</span></span>
<span class="line"><span>            width: { min: 320, ideal: 1280, max: 1920 },</span></span>
<span class="line"><span>            height: { min: 240, ideal: 720, max: 1080 }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    --------------------②:2--------------------------</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    audio: true,</span></span>
<span class="line"><span>    video: { width: 720, height: 480}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li><strong>指定视频轨道约束：获取移动设备的前置或者后置摄像头</strong></li></ol><p><code>facingMode</code>属性。可接受的值有：<code>user</code>（前置摄像头）、<code>environment</code>（后置摄像头）；需要注意的是，<strong>这个属性在移动端可用</strong>，当我们的会议项目通过 h5 在移动端打开时，我们可以动态设置这个属性从而达到<strong>切换前后摄像头</strong>的场景。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>{ audio: true, video: { facingMode: &quot;user&quot; } }</span></span>
<span class="line"><span>{ audio: true, video: { facingMode: { exact: &quot;environment&quot; } } }</span></span></code></pre></div><ol start="4"><li><strong>指定帧速率<code>frameRate</code></strong></li></ol><p>帧速率（你可以理解为<code>FPS</code>）不仅对视频质量，还对带宽有着影响，所以在我们通话过程中，如果判定网络状况不好，那么可以限制帧速率。</p><p>我们都知道，<strong>视频是通过一定速率的连续多张图像形成的</strong>，比如每秒 24 张图片才会形成一个基础流畅的视频，因此帧速率对于实时通话的质量也有影响，你可以想象成和你的游戏的<code>FPS</code>一个道理。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>const constraints = {</span></span>
<span class="line"><span>    audio: true,</span></span>
<span class="line"><span>    video: {</span></span>
<span class="line"><span>        width:1920,</span></span>
<span class="line"><span>        height:1080,</span></span>
<span class="line"><span>        frameRate: { ideal: 10, max: 15 }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>实际上，通过<code>FPS</code>我们可以引申出来一些场合，在特定场合选择特定的<code>FPS</code>搭配前面的分辨率配置，以提高我们会议系统的质量，比如：</p><ul><li>屏幕分享过程中，我们应当很重视高分辨率而不是帧速率，稍微卡点也没关系；</li></ul><ul><li>在普通会议过程中，我们应当重视的是画面的流畅，即帧速率而不是高分辨率；</li></ul><ul><li>在开会人数多但宽带又受限的情况下，我们重视的同样是会议的流程性，同样低分辨率更适合宽带受限的多人会议；</li></ul><ul><li>……</li></ul><p>还有很多场合大家可以想想。</p><ol start="5"><li><strong>使用特定的网络摄像头或者麦克风</strong></li></ol><p>重点哦，我们最前面<code>enumerateDevices</code>函数获取到的设备集合可以派上用场了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取指定媒体设备id对应的媒体流</span></span>
<span class="line"><span> * @author suke</span></span>
<span class="line"><span> * @param videoId</span></span>
<span class="line"><span> * @param audioId</span></span>
<span class="line"><span> * @returns {Promise&lt;void&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function getTargetIdStream(videoId,audioId){</span></span>
<span class="line"><span>    const constraints = {</span></span>
<span class="line"><span>        audio: {deviceId: audioId ? {exact: audioId} : undefined},</span></span>
<span class="line"><span>        video: {</span></span>
<span class="line"><span>            deviceId: videoId ? {exact: videoId} : undefined,</span></span>
<span class="line"><span>            width:1920,</span></span>
<span class="line"><span>            height:1080,</span></span>
<span class="line"><span>            frameRate: { ideal: 10, max: 15 }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    if (window.stream) {</span></span>
<span class="line"><span>        window.stream.getTracks().forEach(track =&gt; {</span></span>
<span class="line"><span>            track.stop();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //被调用方法前面有，此处不再重复</span></span>
<span class="line"><span>    let stream = await this.getLocalUserMedia(constraints).catch(handleError);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="getdisplaymedia" tabindex="-1">getDisplayMedia <a class="header-anchor" href="#getdisplaymedia" aria-label="Permalink to &quot;getDisplayMedia&quot;">​</a></h2><p>我们日常开会，多数需要通过会议 App 来分享自己的屏幕，或者仅分享桌面上固定的应用程序那么在浏览器中实现视频通话，能否实现分享屏幕呢？<strong>答案是肯定的</strong>， <code>W3C</code>的 <a href="https://w3c.github.io/mediacapture-screen-share/" target="_blank" rel="noreferrer">Screen Capture</a> 标准中有说明，就是使用<code>getDisplayMedia</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>var promise = navigator.mediaDevices.getDisplayMedia(constraints);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 获取屏幕分享</span></span>
<span class="line"><span>navigator.mediaDevices.getDisplayMedia(constraints)</span></span>
<span class="line"><span>  .then((stream) =&gt; {</span></span>
<span class="line"><span>    /* use the stream */</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch((err) =&gt; {</span></span>
<span class="line"><span>    /* handle the error */</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h3 id="参数-constraints" tabindex="-1"><strong>参数 Constraints</strong> <a class="header-anchor" href="#参数-constraints" aria-label="Permalink to &quot;**参数 Constraints**&quot;">​</a></h3><p>同上一个函数一样，同样需要配置<code>constraints</code>约束，当然这个也是可选的， 如果选择传参的话，那么参数设置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>getDisplayMedia({</span></span>
<span class="line"><span>  audio: true,</span></span>
<span class="line"><span>  video: true</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>但是这里的<code>constraints</code>配置和前面<code>getUserMedia</code>的约束配置是有差别的。又一个重点来了，在屏幕分享的约束中，<strong>video</strong> 是不能设置为<code>false</code> 的，<strong>但是可以设置指定的分辨率</strong>，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>getDisplayMedia({</span></span>
<span class="line"><span>  audio: true,</span></span>
<span class="line"><span>  video: {width:1920,height:1080}</span></span>
<span class="line"><span>})</span></span></code></pre></div><ol><li><strong>audio</strong>为<strong>true</strong></li></ol><p><img src="`+l+'" alt="" loading="lazy"></p><ol start="2"><li><strong>audio</strong> 为 <strong>false</strong></li></ol><p><img src="'+t+`" alt="" loading="lazy"></p><p>请留意上面两图的对比，当去掉音频后，第二张图少了个勾选系统音频的 radio 框。</p><h3 id="完整案例" tabindex="-1"><strong>完整案例</strong> <a class="header-anchor" href="#完整案例" aria-label="Permalink to &quot;**完整案例**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取屏幕分享的媒体流</span></span>
<span class="line"><span> * @author suke</span></span>
<span class="line"><span> * @returns {Promise&lt;void&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function getShareMedia(){</span></span>
<span class="line"><span>    const constraints = {</span></span>
<span class="line"><span>        video:{width:1920,height:1080},</span></span>
<span class="line"><span>        audio:false</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    if (window.stream) {</span></span>
<span class="line"><span>        window.stream.getTracks().forEach(track =&gt; {</span></span>
<span class="line"><span>            track.stop();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return await navigator.mediaDevices.getDisplayMedia(constraints).catch(handleError);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="项目演示指南" tabindex="-1">项目演示指南 <a class="header-anchor" href="#项目演示指南" aria-label="Permalink to &quot;项目演示指南&quot;">​</a></h3><p>下载仓库代码之后，启动；然后打开第一个摄像头操作模块。</p><p><img src="`+c+'" alt="" loading="lazy"></p><p><img src="'+r+`" alt="" loading="lazy"></p><p>请选择好参数，然后点击确定，就可以演示这些参数的作用，尤其到 <code>FPS</code> 那里，大家可以尝试调制 <code>1-5</code> 效果最明显。</p><h2 id="本节所有源代码地址" tabindex="-1">本节所有源代码地址 <a class="header-anchor" href="#本节所有源代码地址" aria-label="Permalink to &quot;本节所有源代码地址&quot;">​</a></h2><p><a href="https://codepen.io/wangsrgit119/pen/ZERVjRo" target="_blank" rel="noreferrer">源码和体验地址</a></p><h2 id="小提示" tabindex="-1">小提示 <a class="header-anchor" href="#小提示" aria-label="Permalink to &quot;小提示&quot;">​</a></h2><ul><li>在前面的案例代码中，我们在获取系统的音频或者视频的<code>stream</code>之前，一般会调用以下代码，目的是清除当前标签页中没有销毁的媒体流。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>   if (window.stream) {</span></span>
<span class="line"><span>           window.stream.getTracks().forEach(track =&gt; {</span></span>
<span class="line"><span>               track.stop();</span></span>
<span class="line"><span>           });</span></span>
<span class="line"><span>       }</span></span></code></pre></div><p>如果不销毁，你可以看到在标签页旁边一直有个小红圈闪烁，鼠标按上去提示正在使用当前设备的摄像头，因此在后面的开发中保持好习惯：结束自己会议后或页面用完摄像头后，一般除了强制刷新，也可以调用上面代码清除正在使用的<code>stream</code>调用。</p><p>好了，这节课我们我们掌握了两个最重要的 API，下节课我们开始搭建一个信令服务器，同时完成 <code>P2P</code> (单人对单人)的视频通话（跑代码的时候一定要记得前面提到的<strong>安全源</strong>哦）。</p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>大家可以思考思考，在分辨率和<code>FPS</code>的配置以及宽带的利用上还有有哪些场景和实践，欢迎在留言区讨论。</p>`,86),h=[g];function u(m,v,k,b,f,_){return n(),a("div",null,h)}const y=s(d,[["render",u]]);export{I as __pageData,y as default};
