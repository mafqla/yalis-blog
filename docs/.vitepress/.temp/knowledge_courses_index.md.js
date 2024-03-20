import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"掘金小册","description":"","frontmatter":{"showArticleMetadata":false,"editLink":false,"lastUpdated":false,"showComment":false,"categories":["juejin"],"tags":["juejin"]},"headers":[],"relativePath":"knowledge/courses/index.md","filePath":"knowledge/courses/index.md","lastUpdated":1704185647000}');
const _sfc_main = { name: "knowledge/courses/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="掘金小册" tabindex="-1">掘金小册 <a class="header-anchor" href="#掘金小册" aria-label="Permalink to &quot;掘金小册&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 3
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
            words: 3
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>爬取的掘金小册</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/courses/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
