import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/36-text-fill-color 与 color 的异同.md","filePath":"knowledge/FrontEnd/css/1-基础/36-text-fill-color 与 color 的异同.md","lastUpdated":1704850971000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/36-text-fill-color 与 color 的异同.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><code>text-fill-color</code> 究竟是何方神圣呢？从字面意思理解，直译就是文本填充颜色，其实它与 <code>color</code> 的作用是一样的，为文字设定颜色值。</p><p>而且，<strong>text-fill-color 会覆盖 color 所定义的字体颜色</strong>，也就是前者的优先级更高。可以看看这个 Demo：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="-webkit-text-fill-color &amp;&amp; color" src="https://codepen.io/mafqla/embed/wvOWNzp?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/wvOWNzp&quot;&gt;
  -webkit-text-fill-color &amp;amp;&amp;amp; color&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>那么，有了 <code>color</code> ，为何还多此一举出现了一个 <code>text-fill-color</code>？</p><h2 id="text-fill-color-与-color-的差异" tabindex="-1">text-fill-color 与 color 的差异 <a class="header-anchor" href="#text-fill-color-与-color-的差异" aria-label="Permalink to &quot;text-fill-color 与 color 的差异&quot;">​</a></h2><p>关于这个说法，网上大部分文章给出的解释是，<code>text-fill-color</code> 可以设置 <code>transparent</code> 关键字，也就是使文字透明，而 <code>color</code> 无法设置 <code>transparent</code> 关键字。</p><p>这个说法是不准确的。</p><p>在 CSS3 之前，transparent 关键字不是一个真实的颜色，只能用于 background-color 和 border-color 中，表示一个透明的颜色。<strong>而在支持 CSS3 的浏览器中，它被重新定义为一个真实的颜色</strong>，transparent 可以用于任何需要 color 值的地方，也就是 color 属性是支持 transparent 的。</p><p><code>text-fill-color</code> 与 <code>color</code> 的最大的差异，我觉得是 <code>text-fill-color</code> 的概念是借鉴了 SVG 图形，从 SVG 引进的，而 <code>color</code> 是传统意义上 CSS 的概念。</p><blockquote><p>在 SVG 中，我们使用 <code>fill</code> 内联属性给 SVG 图形文本上色。</p></blockquote><h2 id="text-fill-color-的兼容性" tabindex="-1">text-fill-color 的兼容性 <a class="header-anchor" href="#text-fill-color-的兼容性" aria-label="Permalink to &quot;text-fill-color 的兼容性&quot;">​</a></h2><p>相比之下，其实 <code>text-fill-color</code> 的兼容性更差，大部分时候，我们使用它需要加上 <code>-webkit-</code> 前缀。</p><h2 id="配合-text-stroke" tabindex="-1">配合 text-stroke <a class="header-anchor" href="#配合-text-stroke" aria-label="Permalink to &quot;配合 text-stroke&quot;">​</a></h2><p>说到 <code>text-fill-color</code>， 可以顺便再提一下 <code>text-stroke</code>，它也是 SVG 引进的概念，与 border 类似，不同的是它可以给文字描边。看看下面这个 Demo：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="text-stroke" src="https://codepen.io/mafqla/embed/ZEPOwpw?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/ZEPOwpw&quot;&gt;
  text-stroke&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/36-text-fill-color 与 color 的异同.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _36TextFillColor___color____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _36TextFillColor___color____ as default
};
