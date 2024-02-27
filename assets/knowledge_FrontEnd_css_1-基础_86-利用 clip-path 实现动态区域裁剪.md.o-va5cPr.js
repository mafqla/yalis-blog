import{_ as s,c as i,o as a,V as h,m as n}from"./chunks/framework.YbGCv4uC.js";const l="/assets/142867358-3bf0594b-7f69-4b78-929f-46fafe4bcead.XieHjZs5.gif",k="/assets/142868467-65bf4358-b41f-46d3-9e54-1d7889b7a5b8.e_Gt9aEX.gif",p="/assets/142870082-77b867e4-e2f2-4441-9c5d-5676880c2b4b.aWcCIiAY.gif",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/86-利用 clip-path 实现动态区域裁剪.md","filePath":"knowledge/FrontEnd/css/1-基础/86-利用 clip-path 实现动态区域裁剪.md","lastUpdated":1708995699000}'),t={name:"knowledge/FrontEnd/css/1-基础/86-利用 clip-path 实现动态区域裁剪.md"},e=h(`<h2 id="如何实现这样一个类似的效果" tabindex="-1">如何实现这样一个类似的效果？ <a class="header-anchor" href="#如何实现这样一个类似的效果" aria-label="Permalink to &quot;如何实现这样一个类似的效果？&quot;">​</a></h2><p>首先，想一想，如果让你去实现上面的效果，你会怎么做呢？</p><p>这里我简单罗列一些可能的办法：</p><ol><li>阴影 box-shadow</li><li>渐变 radial-gradient</li><li>缩放 transform: scale()</li></ol><p>快速的一个一个过一下。</p><h3 id="使用-box-shadow-实现" tabindex="-1">使用 box-shadow 实现 <a class="header-anchor" href="#使用-box-shadow-实现" aria-label="Permalink to &quot;使用 box-shadow 实现&quot;">​</a></h3><p>如果使用 <code>box-shadow</code>，代码大致如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">g-container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">g-item</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">g-container</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> relative</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 400</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 300</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  overflow</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> hidden</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">g-item</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 48</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 48</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-radius</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 50</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  background</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 20</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 20</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  box-shadow</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transition</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;"> box-shadow </span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">0.3</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">s</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> linear</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  &amp;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">hover {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">    box-shadow: </span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 420</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">}</span></span></code></pre></div><p>核心就在于：</p><ol><li>外层一个设置了 <code>overflow: hideen</code> 的遮罩</li><li>内层元素 hover 的时候，实现一个 <code>box-shadow: 0 0 0 0 #fff</code> 到 <code>box-shadow: 0 0 0 420px #fff</code> 的变化</li></ol><p>效果如下：</p><p><a href="https://user-images.githubusercontent.com/8554143/142867358-3bf0594b-7f69-4b78-929f-46fafe4bcead.gif" target="_blank" rel="noreferrer"><img src="`+l+`" alt="img" loading="lazy"></a></p><p>整体的动画是模拟出来了，但是它最致命的问题有两个：</p><ol><li>当我们的鼠标离开圆形的时候，整个动画就开始反向进行了，白色区域开始消失，如果我们要进行按钮操作，是无法完成的</li><li>隐藏在动画展开后的矩形内的元素，不容易放置</li></ol><p>所以，<code>box-shadow</code> 看着虽好，但是只能放弃。</p><h3 id="使用渐变-radial-gradient-实现" tabindex="-1">使用渐变 radial-gradient 实现 <a class="header-anchor" href="#使用渐变-radial-gradient-实现" aria-label="Permalink to &quot;使用渐变 radial-gradient 实现&quot;">​</a></h3><p>下面我们使用径向渐变 <code>radial-gradient</code> 加上 CSS <a href="https://github.com/Property" target="_blank" rel="noreferrer">@Property</a>，也可以还原上述效果：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">g-container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">@property </span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;">--size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  syntax</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">&lt;length&gt;</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  inherits</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;"> false</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  initial-value</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 24</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">g-container</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> relative</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 400</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 300</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  overflow</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> hidden</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  background</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> radial-gradient</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">    circle</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> at</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">    #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">    #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> var</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;">--size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">),</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">    transparent</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> var</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;">--size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">),</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">    transparent</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  );</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transition</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;"> --size</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0.3</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">s</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> linear</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">  &amp;</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;">    --size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 450</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>我们通过控制径向渐变的动画效果，在 hover 的时候，让原本只是一个小圆背景，变成一个大圆背景，效果如下：</p><p><a href="https://user-images.githubusercontent.com/8554143/142868467-65bf4358-b41f-46d3-9e54-1d7889b7a5b8.gif" target="_blank" rel="noreferrer"><img src="`+k+`" alt="img" loading="lazy"></a></p><p>emmm，效果确实是还原了，问题也很致命：</p><ol><li>由于是背景的变化，所以鼠标不需要 hover 到小圆上，只需要进入 div 的范围，动画就会开始，这显然是不对的</li><li>和第一种 <code>box-shadow</code> 的方法类似，隐藏在白色之下的导航元素的 DOM 不好放置</li></ol><p>emmm，还有一种方法，通过缩放 <code>transform: scale()</code>，也会存一定问题，这里不继续展开。</p><p>所以到这里，想实现上述的效果，核心在于：</p><ol><li>鼠标要 hover 到圆上，才能开始动画，并且，鼠标可以在展开后的范围内自由移动，且不会收回动画效果</li><li>动画展开后，里面的 DOM 的放置，不能太麻烦，能不借助 Javascript 去控制里面内容的显示隐藏最好</li></ol><h2 id="利用-clip-path-实现动态区域裁剪" tabindex="-1">利用 clip-path 实现动态区域裁剪 <a class="header-anchor" href="#利用-clip-path-实现动态区域裁剪" aria-label="Permalink to &quot;利用 clip-path 实现动态区域裁剪&quot;">​</a></h2><p>所以，这里，我们其实是需要一个<strong>动态的区域裁剪</strong>。</p><p>利用 <code>clip-path</code>，可以非常好的实现，动态裁剪的功能，并且，代码也非常简单：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">g-container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">g-container</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> relative</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 400</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 300</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  overflow</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> hidden</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transition</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;"> clip-path</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0.3</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">s</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> linear</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  clip-path</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> circle</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">20</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> at</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  background</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">fff</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">  &amp;</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">    clip-path</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> circle</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">460</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> at</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 44</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>我们只需要利用 <code>clip-path</code>，在最开始的时候，将一个矩形 div，利用 <code>clip-path: circle(20px at 44px 44px)</code> 裁剪成一个圆，当 hover 的时候，扩大裁剪圆的半径到整个矩形范围即可。</p><p>效果如下：</p><p><a href="https://user-images.githubusercontent.com/8554143/142870082-77b867e4-e2f2-4441-9c5d-5676880c2b4b.gif" target="_blank" rel="noreferrer"><img src="`+p+`" alt="img" loading="lazy"></a></p><p>这样，我们就能完美的实现题图的效果，并且，内置的 DOM 元素，直接写进这个 div 内部即可。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">g-container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">ul</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">11111</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">22222</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">33333</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">44444</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">ul</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><p>效果如下：</p>`,38),B=n("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"clip-path zoom in animation",src:"https://codepen.io/mafqla/embed/BabXEWd?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/BabXEWd">
  clip-path zoom in animation</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),F=[e,B];function r(d,D,g,y,A,C){return a(),i("div",null,F)}const E=s(t,[["render",r]]);export{c as __pageData,E as default};
