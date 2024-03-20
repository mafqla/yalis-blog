import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/148382783-56f530a1-77f2-4a74-b68e-7ab4a94cc74f.n5t_R0Po.png";
const _imports_1 = "/assets/148385057-b6704fdc-779b-43a7-9508-2b9e9e412a46.fIficIY_.gif";
const _imports_2 = "/assets/148385294-0d0a0635-6557-4c99-a50b-873e9efe75fa.BDVfAiBL.gif";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/89-妙用滤镜构建高级感拉满的磨砂玻璃渐变背景.md","filePath":"knowledge/FrontEnd/css/1-基础/89-妙用滤镜构建高级感拉满的磨砂玻璃渐变背景.md","lastUpdated":1709254524000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/89-妙用滤镜构建高级感拉满的磨砂玻璃渐变背景.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="实现渐变图" tabindex="-1">实现渐变图 <a class="header-anchor" href="#实现渐变图" aria-label="Permalink to &quot;实现渐变图&quot;">​</a></h2><p>上述背景效果看似复杂，其实非常的简单。它就是：</p><p><strong>多块不规则渐变背景</strong> + <strong>高斯模糊蒙版</strong></p><p>在 CSS 中，也就是借助 <code>background</code> + <code>backdrop-filter: blur()</code> 即可实现。</p><p>去掉叠在上方的 <strong>高斯模糊蒙版</strong>，背后的元素其实非常简单明了。可能就是只是这样：</p><p><a href="https://user-images.githubusercontent.com/8554143/148382783-56f530a1-77f2-4a74-b68e-7ab4a94cc74f.png" target="_blank" rel="noreferrer"><img${ssrRenderAttr("src", _imports_0)} alt="img" loading="lazy"></a></p><p>这里简单列下代码，我们使用了 3 个 div 实现了 3 个渐变图，每个图形再使用 <code>clip-path</code> 随机裁剪成不规则的多边形：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">g-bg</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">g-polygon g-polygon-1</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">g-polygon g-polygon-2</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">g-polygon g-polygon-3</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-polygon</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> absolute</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  opacity</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0.5</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-polygon-1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">  // 定位代码，容器高宽随意</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">ffee55</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  clip-path</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> polygon</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 30</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 40</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 70</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 90</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-polygon-2</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">  // 定位代码，容器高宽随意</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> #</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}">e950d1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  clip-path</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> polygon</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">10</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 70</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 90</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-polygon-3</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">  // 定位代码，容器高宽随意</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  background</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> rgba</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">87</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 80</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 233</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  clip-path</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> polygon</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">80</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 70</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 90</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="使用-backdrop-filter-实现高斯模糊蒙版" tabindex="-1">使用 <code>backdrop-filter</code> 实现高斯模糊蒙版 <a class="header-anchor" href="#使用-backdrop-filter-实现高斯模糊蒙版" aria-label="Permalink to &quot;使用 \`backdrop-filter\` 实现高斯模糊蒙版&quot;">​</a></h2><p>接下来，这一步最为关键，就是使用 <code>backdrop-filter</code> 实现高斯模糊蒙版。叠在上述几个元素上方即可，最关键的一行代码 <code>backdrop-filter: blur(150px)</code></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">g-bg</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">::</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#C792EA" })}">before</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">        content</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &quot;&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">        position</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#BABED8" })}"> fixed</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">        top</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}"> left</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}"> bottom</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}"> right</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">        backdrop-filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> blur</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">150</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">px</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">        z-index</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">}</span></span></code></pre></div><p>这样，我们就实现了如上图所示的毛玻璃质感效果的渐变背景图：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Frosted glass background effect" src="https://codepen.io/mafqla/embed/XWQWPmE?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/XWQWPmE&quot;&gt;
  Frosted glass background effect&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="借助-css-doodle-工具-批量产生该效果" tabindex="-1">借助 CSS-doodle 工具，批量产生该效果 <a class="header-anchor" href="#借助-css-doodle-工具-批量产生该效果" aria-label="Permalink to &quot;借助 CSS-doodle 工具，批量产生该效果&quot;">​</a></h2><p>简单了解了原理之后，我们就可以借助 CSS-doodle 尝试批量来生成这个效果了。</p><blockquote><p>CSS-doodle 它是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid 布局的页面，并且提供各种便捷的指令及函数（随机、循环等等），让我们能通过一套规则，得到不同 CSS 效果。感兴趣的可以猛击官网了解 -- <a href="https://css-doodle.com/" target="_blank" rel="noreferrer">CSS-doodle</a></p></blockquote><p>代码非常简单，也非常好理解，就是随机场景不同尺寸、不同定位、不同颜色、不同形式的几个图形：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">css-doodle</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    :doodle</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">        @</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">grid</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">x8 / </span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">vmin</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">    @place-cell</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">: center</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    width:</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> @rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(40vmin, 80vmin)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    height:</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> @rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(40vmin, 80vmin)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    transform: translate(</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">@rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(-200%, 200%), @rand(-60%, 60%)) scale(@rand(.8, 1.8)) skew(@rand(45deg))</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">    clip-path</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">: polygon(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">      @r</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(0, 30%) @r(0, 50%),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">      @r(30%, 60%) @r(0%, 30%),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">      @r(60%, 100%) @r(0%, 50%),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">      @r(60%, 100%) @r(50%, 100%),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">      @r(30%, 60%) @r(60%, 100%),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">      @r(0, 30%) @r(60%, 100%)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">    );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">    background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">    opacity: @rand(.3, .8);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">&lt;/css-doodle&gt;</span></span></code></pre></div><p>上述代码会随机生成这样的图案（GIF 看不出鼠标的点击效果，每次切换是我点击页面进行的手动切换）：</p><p><a href="https://user-images.githubusercontent.com/8554143/148385057-b6704fdc-779b-43a7-9508-2b9e9e412a46.gif" target="_blank" rel="noreferrer"><img${ssrRenderAttr("src", _imports_1)} alt="img" loading="lazy"></a></p><p>好，配合上蒙版，再看看效果，我们已经能够批量的去生成上述的背景效果了：</p><p><a href="https://user-images.githubusercontent.com/8554143/148385294-0d0a0635-6557-4c99-a50b-873e9efe75fa.gif" target="_blank" rel="noreferrer"><img${ssrRenderAttr("src", _imports_2)} alt="img" loading="lazy"></a></p><p>如果需求，配合上 <code>hue-rotate</code> 及简单的位移，我们甚至可以让这个渐变背景动画动起来，更加生动些：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">css-doodle</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">    // </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">同上...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    position: relative;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    top:</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> @rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(-80%, 80%)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    left:</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> @rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(-80%, 80%)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#BABED8" })}">    animation: colorChange</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> @rand</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(6.1s, 16.1s) infinite @rand(-.5s, -2.5s) linear alternate</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">  @keyframes</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> colorChange</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#FFCB6B" })}">    100%</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">      left</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">      top</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">      filter</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#82AAFF" })}"> hue-rotate</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">360</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">deg</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#FFCB6B" })}">css-doodle</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">&gt;</span></span></code></pre></div><p>这样，我们就得到了带动画的毛玻璃渐变背景：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS-doodle Pure CSS Background Effect  2" src="https://codepen.io/mafqla/embed/KKYKxdm?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/KKYKxdm&quot;&gt;
  CSS-doodle Pure CSS Background Effect  2&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/89-妙用滤镜构建高级感拉满的磨砂玻璃渐变背景.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _89_____________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _89_____________________ as default
};
