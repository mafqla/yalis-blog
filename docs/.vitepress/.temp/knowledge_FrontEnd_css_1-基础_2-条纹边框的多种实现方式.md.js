import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/2-条纹边框的多种实现方式.md","filePath":"knowledge/FrontEnd/css/1-基础/2-条纹边框的多种实现方式.md","lastUpdated":1704185647000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/2-条纹边框的多种实现方式.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="类似下面这个图形-只使用一个标签-可以有多少种实现方式" tabindex="-1">类似下面这个图形，只使用一个标签，可以有多少种实现方式： <a class="header-anchor" href="#类似下面这个图形-只使用一个标签-可以有多少种实现方式" aria-label="Permalink to &quot;类似下面这个图形，只使用一个标签，可以有多少种实现方式：&quot;">​</a></h2><div style="${ssrRenderStyle({ "background": "#9c27b0", "border": "20px dashed #2196f3", "position": "relative", "width": "180px", "height": "180px" })}"></div><p>假设我们的单标签为 div:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span></code></pre></div><p>定义如下通用 CSS:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> relative</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  width</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 180</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  height</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 180</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>这一题主要考查的是盒子模型 Box Model 与 背景 background 的关系，以及使用 <code>background-clip</code> 改变背景的填充方式。</p><p>background 在 Box Model 中，他是布满整个元素的盒子区域的，并不是从 <code>padding</code> 内部开始（也就是说从 <code>border</code> 就开始啦），只不过实线边框<code>（solid）</code>部分遮住了部分 background ，所以我们使用虚线边框<code>（dashed）</code>就可以看到背景色是从 <code>border</code> 内部开始的。</p><p>我们给 div 添加如下样式：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">9c27b0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  border</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> dashed</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">2196f3</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>结果如下：</p><div style="${ssrRenderStyle({ "background": "#9c27b0", "border": "20px dashed #2196f3", "position": "relative", "width": "180px", "height": "180px" })}"></div><p>但有一点需要注意，<code>background-color</code> 是从元素的边框左上角起到右下角止，而 <code>background-image</code> 却不一样，他是从 <code>padding</code> 边缘的左上角起而到 <code>border</code> 的右下角边缘止。</p><p><code>background image</code> 的绘制中有两个因素决定了绘图区域：</p><p><a href="./&#39;https://drafts.csswg.org/css-backgrounds-3/#background-positioning-area&#39;">background positioning area</a>。<code>background-origin</code> 属性决定了这个相对定位位置，默认为 <code>padding-box</code>。所以默认的背景图片绘制是从 <code>padding box</code> 的左上顶点开始的。 <a href="./&#39;https://drafts.csswg.org/css-backgrounds-3/#background-painting-area&#39;">background painting area</a>。<code>background-clip</code> 属性决定了绘制区间，默认为 <code>border-box</code>。所以在 <code>background-repeat: repeat</code> 的情况下：</p><blockquote><p>The image is repeated in this direction as often as needed to cover the background painting area.</p></blockquote><p>当然，这个填充规则是可以通过 <code>background-clip</code> 改变的。</p><p><code>background-clip</code> 设置元素的背景（背景图片或颜色）是否延伸到边框下面。</p><p>语法：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">background-clip</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">border-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> // </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">背景延伸到边框外沿（但是在边框之下）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">background-clip</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">padding-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> // </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">边框下面没有背景，即背景延伸到内边距外沿。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">background-clip</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">content-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> // </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">背景裁剪到内容区 (</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">content-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">) </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">外沿。</span></span></code></pre></div><p>继续说回本题，接下来，只需要将中间部分填充为白色即可，这个用伪元素可以轻松完成，所以，其中一个方法如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">9c27b0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  border</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> dashed</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">2196f3</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">::</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">after</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  content</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> absolute</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  top</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  left</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  bottom</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  right</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">fff</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><h3 id="法二" tabindex="-1">法二： <a class="header-anchor" href="#法二" aria-label="Permalink to &quot;法二：&quot;">​</a></h3><p>上面的方法，我们使用了 div 的背景色默认情况下从 border 开始填充，及伪元素设置白色背景色填充 div 的中间的 padding-box 区域完成图形。</p><p>也可以反过来，使用伪元素背景色从 border-box 开始填充，使用 div 的背景色填充中间 padding-box 区域。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">fff</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">background-clip</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">padding-box</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">border</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> dashed</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">cccc99</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">::</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">before</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">content</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">absolute</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">top</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">-20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">left</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">-20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">bottom</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">-20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">right</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">-20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">996699</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">z-index</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">-1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>上面 法二 除了用到了 <code>background-clip</code> 改变背景的填充区域，还用到了 <code>z-index</code> 触发元素生成了堆叠上下文（stacking context），改变了元素的层叠顺序（stacking levle），让伪元素背景色叠到了 div 背景色 之下。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/2-条纹边框的多种实现方式.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2____________ as default
};
