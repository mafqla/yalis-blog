import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"vue3 基础概念","description":"","frontmatter":{"title":"vue3 基础概念","date":"2022-8-21 18:51","tags":["vue3"]},"headers":[],"relativePath":"knowledge/FrontEnd/vue3/01-基础/01-basicConcepts.md","filePath":"knowledge/FrontEnd/vue3/01-基础/01-basicConcepts.md","lastUpdated":1706691046000}');
const _sfc_main = { name: "knowledge/FrontEnd/vue3/01-基础/01-basicConcepts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_1-vue-的基本概念" tabindex="-1">1. vue 的基本概念 <a class="header-anchor" href="#_1-vue-的基本概念" aria-label="Permalink to &quot;1. vue 的基本概念&quot;">​</a></h2><h3 id="_1-1-vue-是什么" tabindex="-1">1.1 vue 是什么？ <a class="header-anchor" href="#_1-1-vue-是什么" aria-label="Permalink to &quot;1.1 vue 是什么？&quot;">​</a></h3><div><section style="${ssrRenderStyle({ "padding": "26px 32px", "display": "block", "text-align": "center" })}"><h1 style="${ssrRenderStyle({ "letter-spacing": "-.5px", "margin": "0 auto", "line-height": "1.25" })}"><span style="${ssrRenderStyle({ "background": "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent" })}"> 渐进式 </span><br> JavaScript 框架 </h1><p style="${ssrRenderStyle({ "max-width": "960px", "line-height": "1.5", "color": "var(--vt-c-text-2)", "transition": "color .5s", "font-size": "16px", "margin": "24px auto 40px" })}"> 一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。 </p></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/vue3/01-基础/01-basicConcepts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01BasicConcepts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01BasicConcepts as default
};
