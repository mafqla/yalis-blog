import{_ as s,c as a,o as n,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.Z1KJS9pb.image",l="/assets/2.2F6FjL2Y.image",i="/assets/3.xQaDvw4x.image",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/6-直播实战：纯前端 + 人工智能模型实现视频虚拟背景.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/6-直播实战：纯前端 + 人工智能模型实现视频虚拟背景.md","lastUpdated":1711416622000}'),t={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/6-直播实战：纯前端 + 人工智能模型实现视频虚拟背景.md"},o=e('<p>上节课我们实现了简易直播，但在实际直播场景中，我们会遇到如题目中描述的虚拟背景的需求，这节课，我们就看看如何在前端实现给视频流赋于虚拟背景，后面我们再将虚拟背景和直播以及视频会议组合起来。</p><p><img src="'+p+`" alt="" loading="lazy"></p><h2 id="初步认识虚拟背景" tabindex="-1">初步认识虚拟背景 <a class="header-anchor" href="#初步认识虚拟背景" aria-label="Permalink to &quot;初步认识虚拟背景&quot;">​</a></h2><p>很多人都或多或少在生活中见到过虚拟背景，尤其是现在微信视频通话过程中新增的<strong>模糊背景</strong>功能。这个过程还挺复杂的，整个实现逻辑涉及到人物动态计算、人像抠图、背景填充（增加马赛克或者其他的色彩）等从而才能实现模糊背景这个看似简单的功能。</p><p>而我们现在只不过是站在巨人的肩膀上，用别人已经写好的算法并训练出对应的人工智能模型完成我们现在的目的。</p><p>从前面阐述的整体实现逻辑，大体可以看出，实现模糊背景需要的几个核心步骤：</p><ul><li>第一，识别当前画面中的人；</li></ul><ul><li>第二，动态从这个画面中扣出第一步识别出的人的画面；</li></ul><ul><li>第三，给非人部分增加马赛克或者其他的背景。</li></ul><p>就三个步骤而言看起来很简单，但是每个步骤要实现对应的功能可不简单，这里面就涉及到了机器学习和复杂算法。当然，我们的目的仅仅是实现这个功能，而不是学习深层次的核心算法，因此上面提到的东西，我们只需要大体有个认知，能找到对应的解决方案即可。</p><p>而本节课，我将利用谷歌开源的一个机器学习框架 <code>MediaPipe</code>实现虚拟背景的功能。</p><p><strong>什么是 <code>MediaPipe</code>呢？</strong></p><p><a href="https://google.github.io/mediapipe/" target="_blank" rel="noreferrer">MediaPipe </a>是谷歌开源的适用于多平台、终端的机器学习框架，其内部有很多的工具包和基础解决方案，安装即可使用，内部使用的模型也有开源的。像人脸检测、面部识别、虹膜、手势、姿态、人体、人体分割、头发分割、3D识别等常见场景，都可以直接找到对应的成熟解决案例和模型。</p><p>因此利用上述框架中的人体分割模型，就可以实现我们在摄像头中的画面人物和背景分割的目标。分割完成后，还可以利用其他强大的功能，对已经分割识别的动态流自定义处理，进而实现背景自定义。</p><p><strong>在线演示</strong> <a href="https://google.github.io/mediapipe/getting_started/javascript.html" target="_blank" rel="noreferrer">点击前往</a></p><h2 id="代码实战" tabindex="-1"><strong>代码实战</strong> <a class="header-anchor" href="#代码实战" aria-label="Permalink to &quot;**代码实战**&quot;">​</a></h2><ol><li><strong>准备基础的环境</strong>。因为我们用前端开发，因此利用已经搭建好的前端 node 环境即可，在当前项目安装 <code>JS</code> 版本的 <code>MediaPipe</code>中的人体分割相关的依赖库。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>npm i @mediapipe/selfie_segmentation   //可以指定版本 当前案例我自己选择的是 ^0.1.1632777926</span></span></code></pre></div><ol start="2"><li><strong>视频流初始化</strong>。获取摄像头的视频流和前面课程中的一致，copy 过来即可。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取指定媒体设备id对应的媒体流（不传参数则获取默认的摄像头和麦克风）</span></span>
<span class="line"><span> * @author suke</span></span>
<span class="line"><span> * @param videoId</span></span>
<span class="line"><span> * @param audioId</span></span>
<span class="line"><span> * @returns {Promise&lt;void&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async getTargetDeviceMedia(videoId,audioId){</span></span>
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
<span class="line"><span>    return await this.getLocalUserMedia(constraints).catch(handleError);</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="3"><li><strong>初始化图像分割工具</strong></li></ol><p>以下代码中出现了一个 <code>canvas</code> 元素，这个载体我们作为拿到虚拟背景后将对应画面展示的地方。</p><p>同时可以看到，有个地方用到了动态地址，这个动态地址就是下载具体版本模型的地方，因为 cdn地址在国内访问比较慢，因此我将其下载到本地，然后通过 <code>nginx</code> 代理通过区域网访问对应模型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>initVb(){</span></span>
<span class="line"><span>        canvasElement = document.getElementById(&#39;output_canvas&#39;);</span></span>
<span class="line"><span>        canvasCtx = canvasElement.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span>        image = new Image();</span></span>
<span class="line"><span>        image.src = this.meimage</span></span>
<span class="line"><span>        selfieSegmentation = new SFS.SelfieSegmentation({locateFile: (file) =&gt; {</span></span>
<span class="line"><span>                console.log(file);</span></span>
<span class="line"><span>                return \`http://192.168.101.138:8080/\${file}\`;//ng  代理模型文件夹</span></span>
<span class="line"><span>          // return \`https://cdn.jsdelivr.&#39;net/npm/@mediapipe/selfie_segmentation@0.1.1632777926/\${file}\`;</span></span>
<span class="line"><span>        }});                                </span></span>
<span class="line"><span>        selfieSegmentation.setOptions({</span></span>
<span class="line"><span>                modelSelection: 1,</span></span>
<span class="line"><span>                minDetectionConfidence: 0.5,</span></span>
<span class="line"><span>                minTrackingConfidence: 0.5,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        selfieSegmentation.onResults(this.handleResults);</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="4"><li><strong>图像分割后处理背景和人像</strong></li></ol><p>在前面的官方 <code>Demo</code> 中，并没有设置背景的，仅仅是将分割后的人像使用特定的颜色框出来，这里大家可以和官方的案例中对比下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>handleResults(results) {</span></span>
<span class="line"><span>    // Prepare the new frame</span></span>
<span class="line"><span>    canvasCtx.save();</span></span>
<span class="line"><span>    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);</span></span>
<span class="line"><span>    canvasCtx.drawImage(results.segmentationMask, 0, 0, canvasElement.width, canvasElement.height);</span></span>
<span class="line"><span>   //利用canvas绘制新背景 </span></span>
<span class="line"><span>   //canvasCtx.globalCompositeOperation = &#39;source-in&#39;;则意味着处理分割后图像中的人体。 </span></span>
<span class="line"><span>    canvasCtx.globalCompositeOperation = &#39;source-out&#39;;</span></span>
<span class="line"><span>    canvasCtx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvasElement.width, canvasElement.height);</span></span>
<span class="line"><span>    canvasCtx.globalCompositeOperation = &#39;destination-atop&#39;;</span></span>
<span class="line"><span>    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);</span></span>
<span class="line"><span>    // Done</span></span>
<span class="line"><span>    canvasCtx.restore();</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="5"><li>监听流播放后触发上述工具模型处理画面，并绘制到前面声明的 <code>Canvas</code> 载体。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 监听触发模型处理</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async virtualBg(){</span></span>
<span class="line"><span>        const that = this</span></span>
<span class="line"><span>        let video = document.getElementById(&#39;localdemo01&#39;)</span></span>
<span class="line"><span>        video.addEventListener(&#39;playing&#39;,function(){</span></span>
<span class="line"><span>                let myvideo = this;</span></span>
<span class="line"><span>                let lastTime = new Date();</span></span>
<span class="line"><span>                async function getFrames() {</span></span>
<span class="line"><span>                        const now = myvideo.currentTime;</span></span>
<span class="line"><span>                        if(now &gt; lastTime){</span></span>
<span class="line"><span>                                await selfieSegmentation.send({image: myvideo});</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        lastTime = now;</span></span>
<span class="line"><span>                        //无限定时循环 退出记得取消 cancelAnimationFrame() </span></span>
<span class="line"><span>                        requestAnimationFrame(getFrames);</span></span>
<span class="line"><span>                };</span></span>
<span class="line"><span>                getFrames()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们对整体流程进行一个总结。</p><ol><li>获取摄像头画面流。</li></ol><ol start="2"><li>初始化图像分割工具。</li></ol><ol start="3"><li>在本地的页面 DOM 中，播放第一步获取到的视频流。</li></ol><ol start="4"><li>监听视频流播放后，将画面帧发送到图像分割工具处理。</li></ol><ol start="5"><li>图像分割工具利用机器学习模型，识别画面并分割人体，然后处理得到分割后的蒙版，我们得到蒙版后将背景替换成自己的图片，最后展示到 canvas 。</li></ol><p>初始化图像分割工具时有几个参数配置，这里挑几个重要的说明下。</p><ul><li><code>MIN_DETECTION_CONFIDENCE</code> ：手部检测模型中的最小置信度值，取值区间<code>[0.0, 1.0]</code> 被认为是成功的检测。默认为<code>0.5</code>。</li></ul><ul><li><code>MIN_TRACKING_CONFIDENCE</code> ： 跟踪模型的最小置信度值，取值区间<code>[0.0, 1.0]</code>，将其设置为更高的值可以提高解决方案的稳健性，但是会带来更高的延迟，默认<code>0.5</code>。</li></ul><h2 id="项目操作演示" tabindex="-1">项目操作演示 <a class="header-anchor" href="#项目操作演示" aria-label="Permalink to &quot;项目操作演示&quot;">​</a></h2><ol><li>打开项目。找到模块：虚拟背景。</li></ol><ol start="2"><li>在根目录找到模型文件夹：<code>virtualbg-model</code>，然后在根目录启动 <code>Http-Server</code>，当然这里可以不用 <code>Http-Server</code>，也可以用 <code>Nginx</code> 代理。我们的目的是将该文件夹下的文件代理到一个可以访问的路径。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>cd virtualbg-model </span></span>
<span class="line"><span>## 以允许跨域的参数启动</span></span>
<span class="line"><span>http-server --cors</span></span>
<span class="line"><span>----------------启动成功如下----------------</span></span>
<span class="line"><span>Starting up http-server, serving ./</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http-server settings:</span></span>
<span class="line"><span>CORS: true</span></span>
<span class="line"><span>Cache: 3600 seconds</span></span>
<span class="line"><span>Connection Timeout: 120 seconds</span></span>
<span class="line"><span>Directory Listings: visible</span></span>
<span class="line"><span>AutoIndex: visible</span></span>
<span class="line"><span>Serve GZIP Files: false</span></span>
<span class="line"><span>Serve Brotli Files: false</span></span>
<span class="line"><span>Default File Extension: none</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Available on:</span></span>
<span class="line"><span>  http://192.168.101.37:8081</span></span>
<span class="line"><span>  http://127.0.0.1:8081</span></span>
<span class="line"><span>Hit CTRL-C to stop the server</span></span></code></pre></div><p><img src="`+l+'" alt="" loading="lazy"></p><p>看上面项目截图，<code>红色框框标记的位置：模型文件和被代理后的模型文件地址</code>。如果大家要在线上使用该虚拟背景，那么这个静态文件是必须要有的，官网的例子使用的是 CDN 链接，但是该 CDN 在网络已被限制，因此这里给大家演示<code>离线的版本</code>。</p><ol start="3"><li>选择摄像头和麦克风参数后点击确定。等待模型加载完毕后视频的旁边 Canvas幕布中就是实时显示虚拟背景画面。</li></ol><p><img src="'+i+'" alt="" loading="lazy"></p><h2 id="完整代码地址" tabindex="-1">完整代码地址 <a class="header-anchor" href="#完整代码地址" aria-label="Permalink to &quot;完整代码地址&quot;">​</a></h2><p><a href="https://github.com/wangsrGit119/suke-webrtc-course/blob/main/webrtc-link-demo/src/views/virtualbg.vue" target="_blank" rel="noreferrer">本节课相关代码</a></p><h2 id="课后题" tabindex="-1">课后题 <a class="header-anchor" href="#课后题" aria-label="Permalink to &quot;课后题&quot;">​</a></h2><p>这节课的内容，如果你已经完全消化，那么我们实现虚拟背景的目的就很好达到了。但是完成后，如何将这个虚拟背景转化为媒体流，并发送给对直播间的观众呢？欢迎大家在留言区讨论。</p>',50),c=[o];function r(d,m,g,h,v,u){return n(),a("div",null,c)}const b=s(t,[["render",r]]);export{C as __pageData,b as default};
