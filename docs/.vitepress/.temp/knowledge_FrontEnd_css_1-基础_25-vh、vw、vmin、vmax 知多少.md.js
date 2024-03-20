import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md","filePath":"knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md","lastUpdated":1704525549000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="vw-and-vh" tabindex="-1">vw and vh <a class="header-anchor" href="#vw-and-vh" aria-label="Permalink to &quot;vw and vh&quot;">​</a></h2><ol><li>1vw 等于 1/100 的视口宽度 （Viewport Width）</li><li>1vh 等于 1/100 的视口高度 （Viewport Height）</li></ol><p>综上，一个页面而言，它的视窗的高度就是 100vh，宽度就是 100vw 。看个例子：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Untitled" src="https://codepen.io/mafqla/embed/NWJNryN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/NWJNryN&quot;&gt;
  Untitled&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>响应式 web 设计离不开百分比。但是，CSS 百分比并不是所有的问题的最佳解决方案。CSS 的宽度是相对于包含它的最近的父元素的宽度的。但是如果你就想用视口（viewpoint）的宽度或者高度，而不是父元素的，那该肿么办？ 这就是 vh 和 vw 单位为我们提供的。</p><p>1vh 等于 1/100 的视口高度。栗子：浏览器高度 900px, 1 vh = 900px/100 = 9 px。同理，如果视口宽度为 750， 1vw = 750px/100 = 7.5 px。</p><p>可以想象到的，他们有很多很多的用途。比如，我们用很简单的方法只用一行 CSS 代码就实现同屏幕等高的框。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#FFCB6B" })}">slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#B2CCD6" })}">  height</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 100</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F78C6C" })}">vh</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p>假设你要来一个和屏幕同宽的标题，你只要设置这个标题的 font-size 的单位为 vw，那标题的字体大小就会自动根据浏览器的宽度进行缩放，以达到字体和 viewport 大小同步的效果。</p><h2 id="vmin-and-vmax" tabindex="-1">vmin and vmax <a class="header-anchor" href="#vmin-and-vmax" aria-label="Permalink to &quot;vmin and vmax&quot;">​</a></h2><p>vh 和 vw 依据于视口的高度和宽度，相对的，vmin 和 vmax 则关于视口高度和宽度两者的最小或者最大值</p><ol><li>vmin — vmin 的值是当前 vw 和 vh 中较小的值。</li><li>vmax — vw 和 vh 中较大的值。</li></ol><p>这个单位在横竖屏的切换中，十分有用。</p><p>在一些 Demo 示例，或者大页面中，我们经常都会看到上述 4 个单位的身影。灵活使用，就可以减少很多 CSS 的代码量。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25Vh_vw_vmin_vmax____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _25Vh_vw_vmin_vmax____ as default
};
