import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/24-纯 CSS 实现瀑布流布局.md","filePath":"knowledge/FrontEnd/css/1-基础/24-纯 CSS 实现瀑布流布局.md","lastUpdated":1704525549000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/24-纯 CSS 实现瀑布流布局.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="css-实现瀑布流布局-display-flex" tabindex="-1">CSS 实现瀑布流布局（display: flex） <a class="header-anchor" href="#css-实现瀑布流布局-display-flex" aria-label="Permalink to &quot;CSS 实现瀑布流布局（display: flex）&quot;">​</a></h2><ul><li>本例使用 CSS flex 实现瀑布流布局</li><li>关键点，横向 flex 布局嵌套多列纵向 flex 布局，使用了 vw 进行自适应缩放</li></ul><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS实现瀑布流布局（display: flex）" src="https://codepen.io/mafqla/embed/RwdaRjO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/RwdaRjO&quot;&gt;
  CSS实现瀑布流布局（display: flex）&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="css-实现瀑布流布局-column-count" tabindex="-1">CSS 实现瀑布流布局（column-count） <a class="header-anchor" href="#css-实现瀑布流布局-column-count" aria-label="Permalink to &quot;CSS 实现瀑布流布局（column-count）&quot;">​</a></h2><ul><li>本例使用 CSS column 实现瀑布流布局</li><li>关键点，<code>column-count</code> -- 元素内容将被划分的最佳列数</li><li>关键点，<code>break-inside</code> -- 避免在元素内部插入分页符</li></ul><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS实现瀑布流布局（column-count）" src="https://codepen.io/mafqla/embed/xxBVOpz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/xxBVOpz&quot;&gt;
  CSS实现瀑布流布局（column-count）&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="css-实现瀑布流布局-display-grid" tabindex="-1">CSS 实现瀑布流布局（display: grid） <a class="header-anchor" href="#css-实现瀑布流布局-display-grid" aria-label="Permalink to &quot;CSS 实现瀑布流布局（display: grid）&quot;">​</a></h2><p>+本例使用 CSS grid 实现瀑布流布局</p><ul><li>使用 <code>grid-template-columns</code>、<code>grid-template-rows</code> 分割行列</li><li>使用 <code>grid-row</code> 控制每个 item 的所占格子的大小</li></ul><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS实现瀑布流布局（display: grid）" src="https://codepen.io/mafqla/embed/LYaNZeg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/LYaNZeg&quot;&gt;
  CSS实现瀑布流布局（display: grid）&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/24-纯 CSS 实现瀑布流布局.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _24___CSS________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _24___CSS________ as default
};
