import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/103450843-0a65aa00-4cf7-11eb-8280-9a52523a4550.AxGmwyCk.gif";
const _imports_1 = "/assets/103450857-3c770c00-4cf7-11eb-8371-0f9ca9da1592.p-cyyjPL.png";
const _imports_2 = "/assets/103453910-a7393f00-4d19-11eb-9809-c852d5904970.C7yVUHgd.gif";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/56-使用纯 CSS 实现滚动阴影效果.md","filePath":"knowledge/FrontEnd/css/1-基础/56-使用纯 CSS 实现滚动阴影效果.md","lastUpdated":1706057582000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/56-使用纯 CSS 实现滚动阴影效果.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>开门见山，有这样一种非常常见的情况，对于一些可滚动的元素而言。通常在滚动的时候会给垂直于滚动的一侧添加一个阴影，用于表明当前有元素被滚动给该滚出了可视区域，类似这样：</p><p><img${ssrRenderAttr("src", _imports_0)} alt="scroll-shadow2" loading="lazy"></p><p>可以看到，在滚动的过程中，会出现一条阴影：</p><p><img${ssrRenderAttr("src", _imports_1)} alt="image" loading="lazy"> 对于两侧的列在滚动的过程中，静止不动，吸附在边界的问题，通常 CSS 使用 <code>position: sticky</code> 即可解决。</p><p>但是对于滚动过程中才出现的阴影（滚动容器内的内容没有贴边，则阴影出现，贴边，则阴影消失），之前的做法一直都是需要借助 JS 完成的。</p><p>那么，有没有纯 CSS 能够实现的方案呢？嘿嘿嘿，有。有一种非常讨巧的障眼法，下面就让我们来一步一步揭开它的面纱。</p><h2 id="神奇的-background-attachment" tabindex="-1">神奇的 <code>background-attachment</code> <a class="header-anchor" href="#神奇的-background-attachment" aria-label="Permalink to &quot;神奇的 \`background-attachment\`&quot;">​</a></h2><h3 id="background-attachment-srcoll" tabindex="-1"><code>background-attachment: srcoll</code> <a class="header-anchor" href="#background-attachment-srcoll" aria-label="Permalink to &quot;\`background-attachment: srcoll\`&quot;">​</a></h3><p>首先，介绍一下 <code>background-attachment</code>，<strong>如果指定了 <code>background-image</code> ，那么 <code>background-attachment</code> 决定背景是在视口中固定的还是随着包含它的区块滚动的</strong>。</p><p>简单而言，就是决定了在可滚动的容器中，背景图案是如何进行运动的。通过两个简单的 Demo，弄懂 <code>background-attachment: srcoll</code> 和 <code>background-attachment: local</code>。</p><p><code>background-attachment: local</code>，这个就是和我们日常使用中的用法是一致的，可滚动容器的背景图案随着容器进行滚动：</p><p><code>background-attachment: scroll</code>，这个是今天的主角，它表明背景相对于元素本身固定， 而不是随着它的内容滚动：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="bg-attachment Demo" src="https://codepen.io/mafqla/embed/qBvXvOY?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/qBvXvOY&quot;&gt;
  bg-attachment Demo&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="srcoll-与-local-同时使用-实现障眼法" tabindex="-1"><code>srcoll</code> 与 <code>local</code> 同时使用，实现障眼法 <a class="header-anchor" href="#srcoll-与-local-同时使用-实现障眼法" aria-label="Permalink to &quot;\`srcoll\` 与 \`local\` 同时使用，实现障眼法&quot;">​</a></h2><p>到这里，可能很多同学还是懵的，我们到底要做什么呢？这个和本文的滚动阴影有什么关联呢？</p><p>别急，滚动阴影的难点在于，初始没有滚动的时候是没有阴影展现的，只有当开始滚动，阴影才会出现。</p><p>所以这里，我们借助 <code>background-attachment: srcoll</code> 和 <code>background-attachment: local</code> 两个属性，在滚动初始的时候，利用两层背景叠加在一起隐藏阴影背景，真正滚动的时候，将叠加的部分移走，只漏出阴影部分即可。</p><p>嗯？什么意思。我们用给滚动容器，加上两个渐变效果，分别运用上 <code>background-attachment: srcoll</code> 和 <code>background-attachment: local</code>，再叠加起来，像是这样：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">&lt;!-- 可滚动容器 --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">ul</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">li</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">...</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">li</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">  ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">li</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">...</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">li</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">ul</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">// </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">情形一：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-one</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> linear-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">fff</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">f00</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> no-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-attachment</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> local</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">// </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">情形二：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-two</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> radial-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(at</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 50</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">000</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">0f0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 70</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> no-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-attachment</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> scroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">// </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">情形三：</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-combine</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> linear-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">fff</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">f00</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">),</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> radial-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(at</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 50</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">000</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">0f0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">        70</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> no-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-attachment</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> local</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> scroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>实际效果就是这样，一个背景是随容器滚动，一个背景是随容器固定。随容器滚动的背景充当初始的遮罩层：</p><p><img${ssrRenderAttr("src", _imports_2)} alt="scroll-shadow5" loading="lazy"></p><p>OK，可以看到，当滚动的时候，最后一幅叠加的情况，其实就是我们需要的滚动的时候展示不同的颜色（阴影）的效果。我们调整一下两个渐变的颜色，遮罩层（<code>background-attachment: local</code>）为白色，再把固定不动的阴影层（<code>background-attachment: scroll</code>），利用径向渐变模拟为我们想要的阴影颜色。</p><p>CSS 代码大概是这样：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-final</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> linear-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">fff</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> transparent</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">),</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> linear-gradient</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}">rgba</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0.5</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">),</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> transparent</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">        100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-size</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 50</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> no-repeat</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background-attachment</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> local</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> scroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>利用 <code>linear-gradient(rgba(0, 0, 0, .5), transparent 100%)</code> 线性渐变模拟了一层灰色阴影：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Pure CSS Scroll shadow" src="https://codepen.io/mafqla/embed/wvOqOMv?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/wvOqOMv&quot;&gt;
  Pure CSS Scroll shadow&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>如文章开头所示，这技巧也是可以直接运用在 <code>table</code> 里面：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Pure CSS Table scroll shadow" src="https://codepen.io/mafqla/embed/NWJvJxq?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/NWJvJxq&quot;&gt;
  Pure CSS Table scroll shadow&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="一些问题" tabindex="-1">一些问题 <a class="header-anchor" href="#一些问题" aria-label="Permalink to &quot;一些问题&quot;">​</a></h2><h3 id="层叠顺序" tabindex="-1">层叠顺序 <a class="header-anchor" href="#层叠顺序" aria-label="Permalink to &quot;层叠顺序&quot;">​</a></h3><p>当然，在上述的过程中，其实一直有个问题，就是由于是使用背景 <code>background</code> 模拟的阴影，其实最终的效果，内容是在阴影（背景之上的），但是实际效果其实没有很大的差别，如果能忍受这一点，这个方案是完全可用的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/56-使用纯 CSS 实现滚动阴影效果.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _56_____CSS_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _56_____CSS_________ as default
};
