import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import "./index.w40geAFS.js";
import { L as List, a as ListItem, b as ListItemMeta } from "./index.szis8hzX.js";
import "./index.tJQKWac5.js";
import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { u as useRouter } from "./Content.yQ4HyQxV.js";
import { d as data } from "./posts.data.J8q8qJJj.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import { D as Douyin } from "./douyin.vUjxC1BU.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "axios";
var BlogList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BlogList",
  __ssrInlineRender: true,
  setup(__props) {
    const blogs = data.filter((item) => {
      return item.url.includes("/blogs/");
    });
    const total = ref(blogs.length);
    const paginationProps = reactive({
      defaultPageSize: 6,
      total: total.value,
      simple: true
    });
    const router = useRouter();
    const goToLink = (link) => {
      router.go(link);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_ArticleMetadata = __unplugin_components_7;
      const _component_a_list_item_meta = ListItemMeta;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-list" }, _attrs))} data-v-352a8d70>`);
      _push(ssrRenderComponent(_component_a_list, {
        class: "list-demo-action-layout",
        style: { width: `800px` },
        data: unref(blogs),
        "pagination-props": paginationProps
      }, {
        item: withCtx(({ item, index: index2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_list_item, {
              key: index2,
              class: "list-demo-item",
              "action-layout": "vertical",
              onClick: ($event) => goToLink(item.url)
            }, {
              actions: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ArticleMetadata, { article: item }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ArticleMetadata, { article: item }, null, 8, ["article"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_list_item_meta, {
                    title: item.title,
                    description: item.description
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_list_item_meta, {
                      title: item.title,
                      description: item.description
                    }, null, 8, ["title", "description"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_a_list_item, {
                key: index2,
                class: "list-demo-item",
                "action-layout": "vertical",
                onClick: ($event) => goToLink(item.url)
              }, {
                actions: withCtx(() => [
                  createVNode(_component_ArticleMetadata, { article: item }, null, 8, ["article"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_a_list_item_meta, {
                    title: item.title,
                    description: item.description
                  }, null, 8, ["title", "description"])
                ]),
                _: 2
              }, 1032, ["onClick"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = BlogList_vue_vue_type_script_setup_true_lang_default.setup;
BlogList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/blogs/BlogList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogList = /* @__PURE__ */ _export_sfc(BlogList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-352a8d70"]]);
var Blogs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Blogs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "index" }, _attrs))} data-v-b039bf3b><div class="content-wrapper" data-v-b039bf3b><div class="blog-list-wrapper" data-v-b039bf3b>`);
      _push(ssrRenderComponent(BlogList, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Douyin, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = Blogs_vue_vue_type_script_setup_true_lang_default.setup;
Blogs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/pages/Blogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(Blogs_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-b039bf3b"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","blog":{"name":"yalis","motto":"你的指尖,拥有改变世界的力量","inspiring":"千万不要因为走得太久，而忘记了我们为什么出发","pageSize":8}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1703042783000}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(index, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
