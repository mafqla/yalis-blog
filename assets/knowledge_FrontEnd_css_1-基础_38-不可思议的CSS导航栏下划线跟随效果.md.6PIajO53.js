import{_ as a,o as n,c as h,U as l,k as s,a as i}from"./chunks/framework.5FtAyiyV.js";const k="/assets/37945781-6fed50f0-31b4-11e8-9d32-6ea3f455ad6e.WJWU8b1b.png",p="/assets/37947171-2a52c720-31bc-11e8-8791-dbe95b45cd6c.jmWXMrRL.gif",t="/assets/37948755-3113c1c4-31c4-11e8-8472-2c85a645d56c.e1tsjQvC.gif",e="/assets/37949000-421f606c-31c5-11e8-82c1-b200a7d5124f.YF82AgQ1.gif",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/38-不可思议的CSS导航栏下划线跟随效果.md","filePath":"knowledge/FrontEnd/css/1-基础/38-不可思议的CSS导航栏下划线跟随效果.md","lastUpdated":1704850971000}'),B={name:"knowledge/FrontEnd/css/1-基础/38-不可思议的CSS导航栏下划线跟随效果.md"},F=l(`<h2 id="定义需求" tabindex="-1">定义需求 <a class="header-anchor" href="#定义需求" aria-label="Permalink to &quot;定义需求&quot;">​</a></h2><p>我们定义一下简单的规则，要求如下：</p><ul><li>假设 HTML 结构如下：</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">ul</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">不可思议的CSS</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">导航栏</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">光标小下划线跟随</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">PURE CSS</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">Nav Underline</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">ul</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>导航栏目的 <code>li</code> 的宽度是不固定的</li><li>当从导航的左侧 <code>li</code> 移向右侧 <code>li</code>，下划线从左往右移动。同理，当从导航的右侧 <code>li</code> 移向左侧 <code>li</code>，下划线从右往左移动。</li></ul><h2 id="实现需求" tabindex="-1">实现需求 <a class="header-anchor" href="#实现需求" aria-label="Permalink to &quot;实现需求&quot;">​</a></h2><p>第一眼看到这个效果，感觉这个跟随动画，仅靠 CSS 是不可能完成的。</p><p>如果想只用 CSS 实现，只能另辟蹊径，使用一些讨巧的方法。</p><p>好，下面就借助一些奇技淫巧，使用 CSS 一步一步完成这个效果。分析一下难点：</p><h3 id="宽度不固定" tabindex="-1">宽度不固定 <a class="header-anchor" href="#宽度不固定" aria-label="Permalink to &quot;宽度不固定&quot;">​</a></h3><p>第一个难点， <code>li</code> 的宽度是不固定的。所以，我们可能需要从 <code>li</code> 本身的宽度上做文章。</p><p>既然每个 <code>li</code> 的宽度不一定，那么它对应的下划线的长度，肯定是是要和他本身相适应的。自然而然，我们就会想到使用它的 <code>border-bottom</code> 。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>那么，可能现在是这样子的（li 之间是相连在一起的，li 间的间隙使用 <code>padding</code> 产生）：</p><p><img src="`+k+`" alt="image" loading="lazy"></p><h3 id="默认隐藏-动画效果" tabindex="-1">默认隐藏，动画效果 <a class="header-anchor" href="#默认隐藏-动画效果" aria-label="Permalink to &quot;默认隐藏，动画效果&quot;">​</a></h3><p>当然，这里一开始都是没有下划线的，所以我们可能需要把他们给隐藏起来。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><h3 id="推翻重来-借助伪元素" tabindex="-1">推翻重来，借助伪元素 <a class="header-anchor" href="#推翻重来-借助伪元素" aria-label="Permalink to &quot;推翻重来，借助伪元素&quot;">​</a></h3><p>这样好像不行，因为隐藏之后，hover <code>li</code> 的时候，需要下划线动画，而 <code>li</code> 本身肯定是不能移动的。所以，我们考虑借助伪元素。将下划线作用到每个 <code>li</code> 的伪元素之上。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  content</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>下面考虑第一步的动画，hover 的时候，下划线要从一侧运动展开。所以，我们利用绝对定位，将 <code>li</code> 的伪元素的宽度设置为 0，在 hover 的时候，宽度从 <code>width: 0 -&gt; width: 100%</code>，CSS 如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  content</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>得到，如下效果：</p><p><img src="`+p+'" alt="navunderline" loading="lazy"></p><h2 id="左移左出-右移右出" tabindex="-1">左移左出，右移右出 <a class="header-anchor" href="#左移左出-右移右出" aria-label="Permalink to &quot;左移左出，右移右出&quot;">​</a></h2><p>OK，感觉离成功近了一步。现在还剩下一个最难的问题：</p><p>如何让线条跟随光标的移动动作，实现当从导航的左侧 <code>li</code> 移向右侧 <code>li</code>，下划线从左往右移动。同理，当从导航的右侧 <code>li</code> 移向左侧 <code>li</code>，下划线从右往左移动。</p><p>我们仔细看看，现在的效果：</p><p><img src="'+t+`" alt="twounderline" loading="lazy"></p><p>当从第一个 <code>li</code> 切换到第二个 <code>li</code> 的时候，第一个 <code>li</code> 下划线收回的方向不正确。所以，可以能我们需要将下划线的初始位置位移一下，设置为 <code>left: 100%</code>，这样每次下划线收回的时候，第一个 <code>li</code> 就正确了：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  content</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>看看效果： <img src="`+e+`" alt="twounderline11" loading="lazy"></p><p>额，仔细对比两张图，第二种效果其实是捡了芝麻丢了西瓜。第一个 <code>li</code> 的方向是正确了，但是第二个 <code>li</code> 下划线的移动方向又错误了。</p><h2 id="神奇的-选择符" tabindex="-1">神奇的 ~ 选择符 <a class="header-anchor" href="#神奇的-选择符" aria-label="Permalink to &quot;神奇的 ~ 选择符&quot;">​</a></h2><p>所以，我们迫切需要一种方法，能够不改变当前 hover 的 <code>li</code> 的下划线移动方式却能改变它下一个 <code>li</code> 的下划线的移动方式（好绕口）。</p><p><strong>没错了，这里我们可以借助 <code>~</code> 选择符，完成这个艰难的使命，也是这个例子中，最最重要的一环。</strong></p><p>对于当前 hover 的 <code>li</code> ，其对应伪元素的下划线的定位是 <code>left: 100%</code>，而对于 <code>li:hover ~ li::before</code>，它们的定位是 <code>left: 0</code>。CSS 代码大致如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  content</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  border-bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> solid</span><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;">000</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transition</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0.2</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">s</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> all</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> linear</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">hover</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> ~</span><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;"> li</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">before</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>至此，我们想要的效果就实现拉！</p><p>效果不错，就是有点僵硬，我们可以<strong>适当改变缓动函数</strong>以及加上一个<strong>动画延迟</strong>，就可以实现上述开头里的那个效果了。当然，这些都是锦上添花的点缀。</p>`,41),d=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"不可思议的CSS光标下划线跟随效果",src:"https://codepen.io/mafqla/embed/dyrXazp?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/dyrXazp">
  不可思议的CSS光标下划线跟随效果</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),r=s("h2",{id:"最后",tabindex:"-1"},[i("最后 "),s("a",{class:"header-anchor",href:"#最后","aria-label":'Permalink to "最后"'},"​")],-1),D=s("p",null,[i("本方法"),s("strong",null,"最大的瑕疵"),i("在于一开始进入第一个 li 的时候，线条只能是从右往左，除此之外，都能很好的实现跟随效果。")],-1),g=[F,d,r,D];function o(y,C,c,A,E,m){return n(),h("div",null,g)}const _=a(B,[["render",o]]);export{u as __pageData,_ as default};
