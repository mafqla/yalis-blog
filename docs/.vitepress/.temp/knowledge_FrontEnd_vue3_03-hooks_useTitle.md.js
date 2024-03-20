import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/vue3/03-hooks/useTitle.md","filePath":"knowledge/FrontEnd/vue3/03-hooks/useTitle.md","lastUpdated":1703745192000}');
const _sfc_main = { name: "knowledge/FrontEnd/vue3/03-hooks/useTitle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/vue3/03-hooks/useTitle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useTitle as default
};
