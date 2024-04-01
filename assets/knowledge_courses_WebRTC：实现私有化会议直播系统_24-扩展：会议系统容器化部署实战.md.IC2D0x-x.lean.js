import{_ as s,c as n,o as a,V as e}from"./chunks/framework.bW6FiXxS.js";const p="/assets/1.YvR67Ug6.image",l="/assets/2.KbTxssmM.image",o="/assets/3.5L1jscmU.image",i="/assets/4.px-ojhNN.image",c="/assets/5.XgHHIt4h.image",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/24-扩展：会议系统容器化部署实战.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/24-扩展：会议系统容器化部署实战.md","lastUpdated":1711963689000}'),t={name:"knowledge/courses/WebRTC：实现私有化会议直播系统/24-扩展：会议系统容器化部署实战.md"},d=e(`<p>上节课我们从会议系统本身的基础配置出发，系统讲解并演示了会议系统部署到线上后云服务器需要注意的点，以及信令服务、流媒体服务、<code>WebRTC</code>网关服务、网络穿透服务如何配置在前端项目中，同时我们也实际操作，将信令服务和会议系统前端文件结合通过 <code>Nginx</code>映射到指定的域名，并让其支持<code>HTTPS</code>访问。</p><p>这节课，我们的核心是会议服务容器化，容器化对于现在云原生时代而言是必要的，通过容器我们可以更方便的管理和迁移我们的各种服务。</p><h2 id="基础服务容器化" tabindex="-1">基础服务容器化 <a class="header-anchor" href="#基础服务容器化" aria-label="Permalink to &quot;基础服务容器化&quot;">​</a></h2><p>首先从信令服务出发，将信令服务容器化。容器化的方式我们则通过 Docker 容器来承载基础服务，那么第一步应该是制作特定的<code>Dockerfile</code>文件。</p><p><code>Dockerfile</code>文件是自有服务制作 Docker 镜像的核心文件，我们现在用到的 Docker 镜像都离不开该文件。</p><ul><li>第一行：信令服务需要依赖 <code>Node</code>环境，因此我们的基准镜像选择 <code>node:14.21.0-buster</code>。</li><li>第二行：需要注意的是时区，如果当前服务依赖对时间有严格要求的，请注意时区配置。<code>Docker</code><strong>容器默认时区是</strong> <strong><a href="https://baike.baidu.com/item/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6/787659" target="_blank" rel="noreferrer">UTC</a></strong> <strong>，此时如果获取服务器时间则比北京时间少8小时</strong>。</li><li>第三行：<code>CMD</code>表示自定义的命令，这里我输出的是一段话。</li><li>第四行：拷贝文件夹到容器内部。我们所有的核心<code>服务</code>就是这个文件夹，因此需要将这些文件拷贝到镜像中去，后面根据镜像启动容器的时候才可以找到对应的<code>服务</code>。</li><li>第五行：设置工作空间，即容器默认启动的工作目录。</li><li>第六行：<code>ENTRYPOINT</code>，容器启动后需要执行的命令。这个命令只有在启动容器的时候才会执行，构建镜像的时候不会。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>FROM node:14.21.0-buster</span></span>
<span class="line"><span>ENV TZ=Asia/Shanghai</span></span>
<span class="line"><span>CMD &quot;echo 信令服务器启动 dist目录为音视频前端目录，请使用nginx代理后访问，代理前端口：18080&quot;</span></span>
<span class="line"><span>COPY ./server /server</span></span>
<span class="line"><span>WORKDIR /server</span></span>
<span class="line"><span>ENTRYPOINT [&quot;node&quot;, &quot;/app.js&quot;]</span></span></code></pre></div><p><strong>整体目录</strong></p><p><img src="`+p+`" alt="" loading="lazy"></p><p><strong>构建 Docker 镜像</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 在Dockerfile文件同目录执行下面语句 -t 表示指定的标签+版本号 ；不要网络后面那个点</span></span>
<span class="line"><span>root@VM-4-3-ubuntu:/home/ubuntu/suke-nrtc# docker build -t suke-media-nrtc:2.0  .</span></span>
<span class="line"><span>Sending build context to Docker daemon  70.83MB</span></span>
<span class="line"><span>Step 1/6 : FROM node:14.21.0-buster</span></span>
<span class="line"><span> ---&gt; bd24482b8c86</span></span>
<span class="line"><span>Step 2/6 : ENV TZ=Asia/Shanghai</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 1331b3ea89ea</span></span>
<span class="line"><span>Step 3/6 : CMD &quot;echo 信令服务器启动 dist目录为音视频前端目录，请使用nginx代理后访问，代理前端口：18080&quot;</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 1a642db0ce12</span></span>
<span class="line"><span>Step 4/6 : COPY ./server /server</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; c0e2a8a0009e</span></span>
<span class="line"><span>Step 5/6 : WORKDIR /server</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; dfcf81c0644c</span></span>
<span class="line"><span>Step 6/6 : ENTRYPOINT [&quot;node&quot;, &quot;app.js&quot;]</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; b0ddd996a31d</span></span>
<span class="line"><span>Successfully built b0ddd996a31d</span></span>
<span class="line"><span>Successfully tagged suke-media-nrtc:2.0</span></span></code></pre></div><p><strong>构建完成后启动容器</strong></p><blockquote><p><code>--name</code>：指定容器名称；<code>--restart</code> ：自动重启，比如服务器关机重启后，容器会自动重启； <code>-p： 宿主机端口:容器内部服务暴露端口</code>；最后面参数为上一步构建的<code>镜像+版本</code>。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>sudo docker run -d --name suke-media-nrtc --restart=always  -p 18080:18080 suke-media-nrtc:2.0</span></span></code></pre></div><h2 id="前后端分离容器化部署" tabindex="-1">前后端分离容器化部署 <a class="header-anchor" href="#前后端分离容器化部署" aria-label="Permalink to &quot;前后端分离容器化部署&quot;">​</a></h2><p>上一步容器化部署是将会议前端和信令服务结合一起部署的，但是有些人并不想前端和后端信令服务绑定到一起，因此就需要拆分部署，也就是所谓的前端和后端分离部署，这个时候就需要用到<code>Nginx</code>了。</p><p>我们先大体上梳理下，前后分离部署的基础步骤：</p><p><img src="`+l+`" alt="" loading="lazy"></p><p>本质上和基础服务容器化一样，都是制作自己的镜像，接下来我们按照上图中的内容步骤制作我们自己的镜像。</p><ol><li>准备 Nginx 配置文件 <code>nginx.conf</code>。</li></ol><blockquote><p><code>server_name</code> 绑定自己的域名即可。</p><p>注意下面的两个路径 <code>/usr/web/nginx/ssl</code>、<code>/usr/web/nginx/html</code>，一个是<code>SSL</code>证书位置，一个是前端静态文件夹。</p><p><code>/signal-api/</code>为<code>Nginx</code>代理路径。被代理的服务地址：<code>proxy_pass http://x.x.x.x; </code>。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>listen       19003 ssl;</span></span>
<span class="line"><span>server_name  localhost;</span></span>
<span class="line"><span>client_max_body_size 1024M;</span></span>
<span class="line"><span>ssl_certificate /usr/web/nginx/ssl/cert.crt;</span></span>
<span class="line"><span>ssl_certificate_key /usr/web/nginx/ssl/private.key;</span></span>
<span class="line"><span>ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log  error;</span></span>
<span class="line"><span>location / {</span></span>
<span class="line"><span>    root   /usr/web/nginx/html;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> location  /signal-api/ {</span></span>
<span class="line"><span>            proxy_pass http://x.x.x.x:18088; # 信令服务地址配置</span></span>
<span class="line"><span>            proxy_http_version 1.1;</span></span>
<span class="line"><span>            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>            proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>location = /50x.html {</span></span>
<span class="line"><span>    root   /usr/share/nginx/html;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>制作镜像基准文件 Dockerfile。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 基准镜像</span></span>
<span class="line"><span>FROM nginx</span></span>
<span class="line"><span># 拷贝前端资源</span></span>
<span class="line"><span>COPY ./dist /usr/web/nginx/html/</span></span>
<span class="line"><span># 拷贝SSL证书</span></span>
<span class="line"><span>COPY ./ssl /usr/web/nginx/ssl/</span></span>
<span class="line"><span># 拷贝 nginx配置文件</span></span>
<span class="line"><span>COPY nginx.conf /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span># 声明暴露端口</span></span>
<span class="line"><span>EXPOSE 19003</span></span></code></pre></div><ol start="3"><li>修改会议前端<code>Prod</code>环境信令服务地址。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>Vue.prototype.$serverSocketUrl = process.env.NODE_ENV === &#39;development&#39; ? &#39;ws://127.0.0.1:18080&#39; : &#39;/signal-api/&#39;</span></span></code></pre></div><ol start="4"><li>准备好上述文件开始构建镜像。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># Dockerfile 所在目录执行命令 注意看下图</span></span>
<span class="line"><span>docker build -t test-online-meeting:1.0.2 .</span></span></code></pre></div><p><img src="`+o+`" alt="" loading="lazy"></p><ol start="5"><li>启动容器。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># 这里 --rm 为 停止后自动删除退出容器 仅用于测试 正式部署去掉--rm 并使用 -d 后台进程执行</span></span>
<span class="line"><span># 19003 为前面声明的 Nginx 配置文件中的端口，同时宿主机端口也是19003 【-p 宿主机端口:容器内服务端口】</span></span>
<span class="line"><span>docker run --rm -p 19003:19003 test-online-meeting:1.0.2</span></span></code></pre></div><p><img src="`+i+'" alt="" loading="lazy"></p><p><img src="'+c+`" alt="" loading="lazy"></p><p>这里<code>SSL</code>证书为自签名测试证书，因此浏览器不信任，不过可以继续访问。正式环境请使用<code>443端口</code>+域名的正式<code>SSL</code>证书。</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>前后端分离部署后，对于服务管理和迁移虽然方便了很多，而且所有的过程仅需要脚本就能自动化部署，搭配现有的各种自动化工具也是很方便的，比如 Jenkins、k8s、k3s 等，但是对于不熟悉的人而言会遇到很多问题。</p><ul><li><code>nginx</code>路径配置问题。这个算是前后端分离部署后所有项目必须要解决的一个问题，不仅仅是我们的会议系统。比如我前面配置的 <code>location /signal-api/ {}</code>信令服务路径，那么你在前端线上环境也要同步做出更改，否则前端无法找到对应的 API 接口服务。</li><li>端口映射问题。<code>nginx</code>暴露端口必须要在启动容器的时候映射出去，否则服务无法访问。</li><li>静态资源频繁变更问题。上面我们一开始就将静态资源打到镜像里面了，这种方法对于频繁更改的文件而言并不是很友好，因此我们可以优化下，将静态资源通过动态挂载的方式绑定到宿主机文件系统中。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span># /home/html/dist 为宿主机文件位置 /usr/web/nginx/html/为容器内nginx映射的资源位置。</span></span>
<span class="line"><span>docker run --rm -p 19003:19003 -v /home/html/dist:/usr/web/nginx/html/ test-online-meeting:1.0.2</span></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>在实际的企业应用部署中，大多数服务部署都和这两节部署实战课所讲的方式大同小异，希望学完部署实战的内容，不仅仅对于我们自身会议系统的部署有所帮助，对于大家在实际工作中所有的服务部署都能起到推进作用。</p><p>这节课是我们课程的最后一节，从第一节的基础知识，到使用<code>WebRTC</code>打造三种架构直播会议系统实战，再到系统的部署实战，我们算是从 0 到 1 系统性地熟悉了 <code>WebRTC</code>这门技术，这也算是目前为止全网第一本将<code>WebRTC</code>+各种开源流媒体组合打造多样性应用的课程，<strong>希望这节课仅仅是本课程的最后一节，更是你开启前端音视频的第一节课，是大家将技术带入实际工作的第一节课</strong>。</p><p>加油！我们共同进步，后续有任何疑问评论区或者社群大家一起交流。课程会停止，但是技术会一直迭代更新，而我们更需要持续的进步。</p>`,42),r=[d];function g(h,u,m,k,v,b){return a(),n("div",null,r)}const C=s(t,[["render",g]]);export{x as __pageData,C as default};
