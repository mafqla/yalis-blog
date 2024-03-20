import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"什么是 vite","description":"","frontmatter":{"title":"什么是 vite","date":"2022-8-21 18:51","tags":["vite"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/01-basic.md","filePath":"knowledge/build-tools/02-vite/01-basic.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "knowledge/build-tools/02-vite/01-basic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-什么是-vite" tabindex="-1">1.什么是 vite <a class="header-anchor" href="#_1-什么是-vite" aria-label="Permalink to &quot;1.什么是 vite&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 40
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (((_c = _ctx.$frontmatter) == null ? void 0 : _c.aside) ?? true) && (((_d = _ctx.$frontmatter) == null ? void 0 : _d.showArticleMetadata) ?? true) ? (openBlock(), createBlock(_component_ArticleMetadata, {
            key: 0,
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 40
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>下一代前端开发与构建工具；</p><ul><li><p>它主要由两部分组成：</p><ul><li>一个开发服务器，它基于原生 ES 模块提供了丰富的内建功能，HMR 的速度非常快速；</li><li>一套构建指令，它使用 rollup 打开我们的代码，并且它是预配置的，可以输出生成环境的优化过的静态资源；</li></ul><p>Vite 意在提供开箱即用的配置，同时它的 <a href="https://cn.vitejs.dev/guide/api-plugin.html" target="_blank" rel="noreferrer">插件 API</a> 和 <a href="https://cn.vitejs.dev/guide/api-javascript.html" target="_blank" rel="noreferrer">JavaScript API</a> 带来了高度的可扩展性，并有完整的类型支持。</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/02-vite/01-basic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01Basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01Basic as default
};
