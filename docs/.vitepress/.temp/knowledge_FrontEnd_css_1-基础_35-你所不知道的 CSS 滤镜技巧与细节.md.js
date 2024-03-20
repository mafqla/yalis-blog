import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./30364469-f3347b58-9896-11e7-82ec-ee7b32189a1a.gL-2W9nx.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/30325717-52d0fc70-97f8-11e7-8d08-dbb960c85118.Qn59LY9e.png";
const _imports_2 = "/assets/30367321-87ecd340-98a0-11e7-853e-ee1f557b9c85.9Rr2BYix.png";
const _imports_3 = "/assets/30368522-f746afba-98a3-11e7-93b8-92e2e2c1c622.soyOeMn7.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/35-你所不知道的 CSS 滤镜技巧与细节.md","filePath":"knowledge/FrontEnd/css/1-基础/35-你所不知道的 CSS 滤镜技巧与细节.md","lastUpdated":1704698879000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/35-你所不知道的 CSS 滤镜技巧与细节.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>本文所描述的滤镜，指的是 CSS3 出来后的滤镜，不是 IE 系列时代的滤镜，语法如下，还未接触过这个属性的可以先简单到 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter" target="_blank" rel="noreferrer">MDN -- filter</a> 了解下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    filter: blur(5px);</span></span>
<span class="line"><span>    filter: brightness(0.4);</span></span>
<span class="line"><span>    filter: contrast(200%);</span></span>
<span class="line"><span>    filter: drop-shadow(16px 16px 20px blue);</span></span>
<span class="line"><span>    filter: grayscale(50%);</span></span>
<span class="line"><span>    filter: hue-rotate(90deg);</span></span>
<span class="line"><span>    filter: invert(75%);</span></span>
<span class="line"><span>    filter: opacity(25%);</span></span>
<span class="line"><span>    filter: saturate(30%);</span></span>
<span class="line"><span>    filter: sepia(60%);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Apply multiple filters */</span></span>
<span class="line"><span>    filter: contrast(175%) brightness(3%);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Global values */</span></span>
<span class="line"><span>    filter: inherit;</span></span>
<span class="line"><span>    filter: initial;</span></span>
<span class="line"><span>    filter: unset;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>先简单看看几种滤镜的效果：</p><iframe height="600" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS3 filter (cancle filter by hover)" src="https://codepen.io/mafqla/embed/QWoNYKZ?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/QWoNYKZ&quot;&gt;
  CSS3 filter (cancle filter by hover)&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>你可以通过 hover 取消滤镜，观察该滤镜的效果。</p><p>简单来说，CSS 滤镜就是提供类似 PS 的图形特效，像模糊，锐化或元素变色等功能。通常被用于调整图片，背景和边界的渲染。本文就会围绕这些滤镜展开，看看具体能怎么使用或者玩出什么花活。</p><h3 id="常用用法" tabindex="-1">常用用法 <a class="header-anchor" href="#常用用法" aria-label="Permalink to &quot;常用用法&quot;">​</a></h3><p>既然是标题是你所不知道的技巧与细节，那么比较常用的一些用法就不再赘述，通常我们见得比较多的 CSS 滤镜用法有：</p><ol><li>使用 <code>filter: blur()</code> 生成毛玻璃效果</li><li>使用 <code>filter: drop-shadow()</code> 生成整体阴影效果</li><li>使用 <code>filter: opacity()</code> 生成透明度</li></ol><p>如果对上面的技巧不是很了解，可以稍稍百度谷歌一下，下文将由浅及深，介绍一些不大常见的滤镜的具体用法及一些小细节：</p><h2 id="contrast-brightness-hover-增亮图片" tabindex="-1"><code>contrast/brightness</code> -- hover 增亮图片 <a class="header-anchor" href="#contrast-brightness-hover-增亮图片" aria-label="Permalink to &quot;\`contrast/brightness\` -- hover 增亮图片&quot;">​</a></h2><p>通常页面上的按钮，都会有 hover/active 的颜色变化，以增强与用户的交互。但是一些图片展示，则很少有 hover 的交互，运用 <code>filter: contrast()</code> 或者 <code>filter: brightness()</code> 可以在 hover 图片的时候，调整图片的对比图或者亮度，达到聚焦用户视野的目的。</p><blockquote><p>brightness 表示亮度，contrast 表示对比度。</p></blockquote><p>当然，这个方法同样适用于按钮，简单的 CSS 代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">btn</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">hover</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">img</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">hover</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  transition</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> filter </span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">0.3</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">s</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> brightness</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">1.1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> contrast</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">110</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS3 filter hover IMG" src="https://codepen.io/mafqla/embed/OJqNdbv?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/OJqNdbv&quot;&gt;
  CSS3 filter hover IMG&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="blur-生成图像阴影" tabindex="-1"><code>blur</code> -- 生成图像阴影 <a class="header-anchor" href="#blur-生成图像阴影" aria-label="Permalink to &quot;\`blur\` -- 生成图像阴影&quot;">​</a></h2><p>通常而言，我们生成阴影的方式大多是 <code>box-shadow</code> 、<code>filter: drop-shadow()</code> 、<code>text-shadow</code> 。但是，使用它们生成阴影是阴影只能是单色的。</p><p>这个真不行，但是通过巧妙的利用 <code>filter: blur</code> 模糊滤镜，我们可以假装生成渐变色或者说是颜色丰富的阴影效果。</p><p>假设我们有下述这样一张头像图片：</p><p><img${ssrRenderAttr("src", _imports_0)} alt="image" loading="lazy"></p><p>下面就利用滤镜，给它添加一层与原图颜色相仿的阴影效果，核心 CSS 代码如下：</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">avator</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> relative</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> url</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}">$img</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> no-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> center</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> center</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">  &amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">::</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">after</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">    content</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> absolute</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    top</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    width</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    height</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> inherit</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">    filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> blur</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> brightness</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">80</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> opacity</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">0.8</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">    z-index</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> -1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>看看效果：</p><p>其简单的原理就是，利用伪元素，生成一个与原图一样大小的新图叠加在原图之下，然后利用滤镜模糊 <code>filter: blur()</code> 配合其他的亮度/对比度，透明度等滤镜，制作出一个虚幻的影子，伪装成原图的阴影效果。</p><p>嗯，最重要的就是这一句 <code>filter: blur(10px) brightness(80%) opacity(.8);</code> 。</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="使用 filter:blur 生成彩色阴影" src="https://codepen.io/mafqla/embed/XWGdOpW?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/XWGdOpW&quot;&gt;
  使用 filter:blur 生成彩色阴影&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="blur-混合-contrast-产生融合效果" tabindex="-1"><code>blur</code> 混合 <code>contrast</code> 产生融合效果 <a class="header-anchor" href="#blur-混合-contrast-产生融合效果" aria-label="Permalink to &quot;\`blur\` 混合 \`contrast\` 产生融合效果&quot;">​</a></h2><p>接下来介绍的这个，是本文的重点，<strong>模糊滤镜叠加对比度滤镜产生的融合效果</strong>。让你知道什么是 CSS 黑科技！</p><p>单独将两个滤镜拿出来，它们的作用分别是：</p><ol><li><code>filter: blur()</code>： 给图像设置高斯模糊效果。</li><li><code>filter: contrast()</code>： 调整图像的对比度。</li></ol><p>但是，当他们“合体”的时候，产生了奇妙的融合现象。</p><p>先来看一个简单的例子：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="filter mix between blur and contrast" src="https://codepen.io/mafqla/embed/oNVxmBY?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/oNVxmBY&quot;&gt;
  filter mix between blur and contrast&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>仔细看两圆相交的过程，在边与边接触的时候，会产生一种边界融合的效果，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。</p><p>上述效果的实现基于两点：</p><ol><li>图形是在被设置了 <code>filter: contrast()</code> 的画布背景上进行动画的</li><li>进行动画的图形被设置了 <code>filter: blur()</code>（ 进行动画的图形的父元素需要是被设置了 <code>filter: contrast()</code> 的画布）</li></ol><p>意思是，上面两圆运动的背后，其实是叠加了一张设置了 <code>filter: contrast()</code> 的大<strong>白色</strong>背景，而两个圆形则被设置了 <code>filter: blur()</code> ，两个条件缺一不可。</p><p>当然，背景色不一定是白色，我们稍稍修改上面的 Demo，简单的示意图如下：</p><p><img${ssrRenderAttr("src", _imports_0$1)} alt="image" loading="lazy"></p><h3 id="燃烧的火焰" tabindex="-1">燃烧的火焰 <a class="header-anchor" href="#燃烧的火焰" aria-label="Permalink to &quot;燃烧的火焰&quot;">​</a></h3><p>好，上面介绍完原理，下面看看使用这个效果制作的一些强大 CSS 效果，其中最为惊艳的就是使用融合效果制作生成火焰，这个效果我最早是见于 <a href="https://codepen.io/YusukeNakaya/pens/public/" target="_blank" rel="noreferrer">Yusuke Nakaya</a> 这位作者：</p><p>核心还是 <code>filter: contrast()</code> 与 <code>filter: blur()</code> 配合使用，不过实现的过程也非常有趣，我们需要使用 CSS 画出一个火焰形状。</p><p>火焰形状 CSS 核心代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">fire</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  width</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  height</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  border-radius</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 45</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  box-sizing</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> border-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  border</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> solid</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">000</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  border-bottom</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">pxsolid </span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">transparent</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-color</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">b5932f</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  transform</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> scaleX</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">0.4</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> blur</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> contrast</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">30</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>大概是长这样：</p><p><img${ssrRenderAttr("src", _imports_2)} alt="image" loading="lazy"></p><p>分解一下过程：</p><p><img${ssrRenderAttr("src", _imports_3)} alt="image" loading="lazy"></p><p>放在纯黑的背景下，就得到了上述图片的效果。</p><blockquote><p>这里会有个很大的疑问，增加了 <code>filter: blur(20px) contrast(30);</code> 之后，为什么纯色黑色和黄色的中间，生成了一条红色的边框？</p></blockquote><blockquote><p>这里我咨询了几个设计师、前端同事，得到的答复大概是<strong>两个不同滤镜的色值处理算法在边界处叠加作用得到了另外一种颜色</strong>。（不一定准确，求赐教），在 PS 里尝试还原这个效果，但是 PS 没有 contrast() 滤镜，得到的效果偏差挺大的。</p></blockquote><p>OK，继续正文，接下来，我们只需要在火焰 <code>.fire</code> 这个 div 内部，用大量的黑色圆形，由下至上，无规律穿过火焰即可。由于滤镜的融合效果，火焰效果随之产生，这里为了方便理解，我把背景色切换成白色，火焰动画原理一看即懂：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS fire| CSS filter mix" src="https://codepen.io/mafqla/embed/RwdavpZ?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/RwdavpZ&quot;&gt;
  CSS fire| CSS filter mix&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="文字融合动画" tabindex="-1">文字融合动画 <a class="header-anchor" href="#文字融合动画" aria-label="Permalink to &quot;文字融合动画&quot;">​</a></h2><p>另外，我们可以在动画的过程中，动态改变元素滤镜的 <code>filter: blur()</code> 的值。</p><p>利用这个方法，我们还可以设计一些文字融合的效果：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="word animation | word filter" src="https://codepen.io/mafqla/embed/wvOGNJX?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/wvOGNJX&quot;&gt;
  word animation | word filter&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="值得注意的细节点" tabindex="-1">值得注意的细节点 <a class="header-anchor" href="#值得注意的细节点" aria-label="Permalink to &quot;值得注意的细节点&quot;">​</a></h2><p>动画虽然美好，但是具体使用的过程中，仍然有一些需要注意的地方：</p><ol><li>CSS 滤镜可以给同个元素同时定义多个，例如 <code>filter: contrast(150%) brightness(1.5)</code> ，但是滤镜的先后顺序不同产生的效果也是不一样的；</li></ol><blockquote><p>也就是说，使用 <code>filter: contrast(150%) brightness(1.5)</code> 和 <code>filter: brightness(1.5) contrast(150%)</code> 处理同一张图片，得到的效果是不一样的，原因在于滤镜的色值处理算法对图片处理的先后顺序。</p></blockquote><ol><li>滤镜动画需要大量的计算，不断的重绘页面，属于非常消耗性能的动画，使用时要注意使用场景。记得开启硬件加速及合理使用分层技术；</li><li><code>blur()</code> 混合 <code>contrast()</code> 滤镜效果，设置不同的颜色会产生不同的效果，这个颜色叠加的具体算法本文作者暂时也不是很清楚，使用时比较好的方法是多尝试不同颜色，观察取最好的效果；</li><li>CSS3 filter 兼容性不算太好，但是在移动端已经可以比较正常的使用，更为精确的兼容性列表，查询 <a href="http://caniuse.com/#search=filter" target="_blank" rel="noreferrer">Can i Use</a>。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/35-你所不知道的 CSS 滤镜技巧与细节.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _35________CSS________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _35________CSS________ as default
};
