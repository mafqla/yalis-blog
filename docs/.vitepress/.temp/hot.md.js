import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./index.w40geAFS.js";
import { L as List, a as ListItem } from "./index.szis8hzX.js";
import "./index.tJQKWac5.js";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { D as Douyin } from "./douyin.vUjxC1BU.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "axios";
var Hot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Hot",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hot" }, _attrs))} data-v-afa8967f>`);
      _push(ssrRenderComponent(_component_a_list, {
        "grid-props": { gutter: [5, 5], xs: 6, md: 12, lg: 10, xl: 6 },
        bordered: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_list_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Douyin, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Douyin)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_list_item, null, {
                default: withCtx(() => [
                  createVNode(Douyin)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = Hot_vue_vue_type_script_setup_true_lang_default.setup;
Hot_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/pages/Hot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Hot = /* @__PURE__ */ _export_sfc(Hot_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-afa8967f"]]);
const __pageData = JSON.parse('{"title":"热搜","description":"","frontmatter":{"title":"热搜","layout":"home","aside":false,"editLink":false,"lastUpdated":false,"showComment":false,"hasFooter":true},"headers":[],"relativePath":"hot.md","filePath":"hot.md","lastUpdated":1703581128000}');
const __default__ = { name: "hot.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Hot, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("hot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
