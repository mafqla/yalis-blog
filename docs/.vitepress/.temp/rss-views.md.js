import { defineComponent, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
var RssFed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RssFed",
  __ssrInlineRender: true,
  setup(__props) {
    const height = ref(0);
    const iframeRef = ref();
    onMounted(() => {
      updateHeight();
      window.addEventListener("scroll", updateHeight);
    });
    const updateHeight = () => {
      if (iframeRef.value) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        height.value = scrollTop + document.documentElement.clientHeight;
        if (iframeRef.value) {
          iframeRef.value.style.height = `${height.value}px`;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rss" }, _attrs))} data-v-30bce01e><iframe src="https://fed.chanceyu.com/" width="100%" class="fw-iframe" scrolling="no" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true" data-v-30bce01e></iframe></div>`);
    };
  }
});
const _sfc_setup$1 = RssFed_vue_vue_type_script_setup_true_lang_default.setup;
RssFed_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/pages/RssFed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(RssFed_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-30bce01e"]]);
const __pageData = JSON.parse('{"title":"rss","description":"","frontmatter":{"title":"rss","layout":"home","aside":false,"editLink":false,"lastUpdated":false,"showComment":false},"headers":[],"relativePath":"rss-views.md","filePath":"rss-views.md","lastUpdated":1708912523000}');
const _sfc_main = { name: "rss-views.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RssFed = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_RssFed, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("rss-views.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rssViews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rssViews as default
};
