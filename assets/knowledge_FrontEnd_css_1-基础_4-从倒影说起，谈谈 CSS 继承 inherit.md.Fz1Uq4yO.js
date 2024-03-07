import{_ as s,a as i}from"./chunks/97248665-379c6480-183d-11eb-80a7-241ad9fed4c0.Ql15D_zu.js";import{_ as a,c as e,o as t,V as n}from"./chunks/framework.bW6FiXxS.js";const h="/assets/97248729-5d296e00-183d-11eb-8ec3-963ae3cbf8e9.ZTENL4aZ.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/4-从倒影说起，谈谈 CSS 继承 inherit.md","filePath":"knowledge/FrontEnd/css/1-基础/4-从倒影说起，谈谈 CSS 继承 inherit.md","lastUpdated":1709800386000}'),p={name:"knowledge/FrontEnd/css/1-基础/4-从倒影说起，谈谈 CSS 继承 inherit.md"},l=n('<p>给定一张有如下背景图的 div：</p><p><img src="'+s+'" alt="img" loading="lazy"> 制作如下的倒影效果：</p><p><img src="'+i+'" alt="img" loading="lazy"></p><p>方法很多，但是我们当然要寻找最快最便捷的方法，至少得是无论图片怎么变化，<code>div</code> 大小怎么变化，我们都不用去改我们的代码。</p><h3 id="法一-webkit-box-reflect" tabindex="-1">法一：-webkit-box-reflect <a class="header-anchor" href="#法一-webkit-box-reflect" aria-label="Permalink to &quot;法一：-webkit-box-reflect&quot;">​</a></h3><p>这是一个十分新的 CSS 属性，使用起来十分简单，可以从各个方向反射我们内容。不过兼容性过于惨淡：</p><blockquote><p>基本上是只有 -webkit- 内核的浏览器才支持。</p></blockquote><p><img src="'+h+`" alt="img" loading="lazy"></p><p>不过使用起来真的是方便，解题如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">div{ -webkit-box-reflect: below; }</span></span></code></pre></div><p><code>box-reflect</code> 有四个方向可以选，<code>below | above | left | right</code> 代表下上左右。</p><h3 id="法二-inherit-使用继承" tabindex="-1">法二：inherit，使用继承 <a class="header-anchor" href="#法二-inherit-使用继承" aria-label="Permalink to &quot;法二：inherit，使用继承&quot;">​</a></h3><p>本题主要还是为了介绍这种方法，兼容性好。</p><p><code>inherit</code> 是啥，每个 CSS 属性定义的概述都指出了这个属性是默认继承的 (&quot;Inherited: Yes&quot;) 还是默认不继承的 (&quot;Inherited: no&quot;)。这决定了当你没有为元素的属性指定值时该如何计算值。</p><p>灵活使用 <code>inherit</code> 继承父值，可以解决许多看似复杂的问题。对于本题，我们对图片容器添加一个伪元素，使用 <code>background-image:inherit</code> 继承父值的背景图值，就可以做到无论图片如何变，我们的 CSS 代码都无需改动：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;">div</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;">::</span><span style="--shiki-light:#56B6C2;--shiki-dark:#C792EA;">after</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  content</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;&#39;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  left</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  right</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  bottom</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> -100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  background-image</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> inherit</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transform</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> rotateX</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">180</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">deg</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>我们使用伪元素 <code>background-image: inherit;</code> 继承父元素的背景图，再使用 transform 旋转容器达到反射的效果。</p><p>说到底，CSS 属性的取值就是由默认值（initial），继承（inherit）与加权系统构成的（其实还有 <code>unset(未设置)</code>、<code>revert(还原)</code>），厘清它们的关系及使用方法对熟练使用 CSS 大有裨益。</p>`,18),k=[l];function r(d,o,B,c,F,g){return t(),e("div",null,k)}const _=a(p,[["render",r]]);export{y as __pageData,_ as default};
