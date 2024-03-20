import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
var CssIndex_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CssIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const frontEndCssKeywords = [
      "Flexbox",
      "Grid Layout",
      "Animations",
      "Transitions",
      "Box Model",
      "Selectors",
      "Media Queries",
      "CSS Variables",
      "Transforms",
      "Positioning",
      "Typography",
      "Colors",
      "Gradients",
      "Shadows",
      "Filters"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "css-demo" }, _attrs))} data-v-8121e268><ul data-v-8121e268><!--[-->`);
      ssrRenderList(frontEndCssKeywords, (item) => {
        _push(`<li data-v-8121e268>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = CssIndex_vue_vue_type_script_setup_true_lang_default.setup;
CssIndex_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/demo/css-demo/CssIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(CssIndex_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-8121e268"]]);
const __pageData = JSON.parse('{"title":"CSS","description":"","frontmatter":{"showArticleMetadata":false,"editLink":false,"lastUpdated":false,"showComment":false,"categories":["css"],"tags":["css"]},"headers":[],"relativePath":"knowledge/FrontEnd/css/index.md","filePath":"knowledge/FrontEnd/css/index.md","lastUpdated":1704185647000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  const _component_CssIndex = __unplugin_components_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 18
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
            words: 18
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CssIndex, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CssIndex)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>收录了一些 CSS 的知识点，以及一些 CSS 的小技巧。 引用自 <a href="https://github.com/chokcoco/iCSS/" target="_blank" rel="noreferrer">icss</a>。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
