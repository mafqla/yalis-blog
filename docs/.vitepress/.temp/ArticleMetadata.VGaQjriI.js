import "./index.w40geAFS.js";
import { T as Tag } from "./index.tJQKWac5.js";
import { defineComponent, reactive, toRefs, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { a as useData } from "./Content.yQ4HyQxV.js";
import originDayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
var ArticleMetadata_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ArticleMetadata",
  __ssrInlineRender: true,
  props: {
    article: Object,
    showCategory: {
      type: Boolean,
      default: true
    },
    readTime: [String, Number],
    words: [String, Number]
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    originDayjs.extend(relativeTime);
    originDayjs.locale("zh-cn");
    const props = __props;
    const { theme, page } = useData();
    const data = reactive({
      isOriginal: ((_a = props.article) == null ? void 0 : _a.isOriginal) ?? true,
      author: ((_b = props.article) == null ? void 0 : _b.author) ?? theme.value.articleMetadataConfig.author,
      authorLink: ((_c = props.article) == null ? void 0 : _c.authorLink) ?? theme.value.articleMetadataConfig.authorLink,
      showViewCount: ((_d = theme.value.articleMetadataConfig) == null ? void 0 : _d.showViewCount) ?? false,
      viewCount: 0,
      date: ((_e = props.article) == null ? void 0 : _e.date.string) || ((_f = props.article) == null ? void 0 : _f.date),
      categories: ((_g = props.article) == null ? void 0 : _g.categories) ?? [],
      tags: ((_h = props.article) == null ? void 0 : _h.tags) ?? [],
      showCategory: props.showCategory
    });
    const {
      isOriginal,
      author,
      authorLink,
      showViewCount,
      viewCount,
      date,
      categories,
      tags,
      showCategory
    } = toRefs(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tag = Tag;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "meta-wrapper" }, _attrs))} data-v-9d206022><div class="meta-item original" data-v-9d206022>`);
      if (unref(isOriginal)) {
        _push(ssrRenderComponent(_component_a_tag, {
          color: "orangered",
          title: "原创文章"
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg data-v-caa20599="" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-trophy" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" data-v-9d206022${_scopeId}><path d="M24 33c-6.075 0-11-4.925-11-11m11 11c6.075 0 11-4.925 11-11M24 33v8M13 22V7h22v15m-22 0V9H7v7a6 6 0 0 0 6 6Zm22 0V9h6v7a6 6 0 0 1-6 6ZM12 41h24" data-v-9d206022${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  "data-v-caa20599": "",
                  viewBox: "0 0 48 48",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "currentColor",
                  class: "arco-icon arco-icon-trophy",
                  "stroke-width": "4",
                  "stroke-linecap": "butt",
                  "stroke-linejoin": "miter"
                }, [
                  createVNode("path", { d: "M24 33c-6.075 0-11-4.925-11-11m11 11c6.075 0 11-4.925 11-11M24 33v8M13 22V7h22v15m-22 0V9H7v7a6 6 0 0 0 6 6Zm22 0V9h6v7a6 6 0 0 1-6 6ZM12 41h24" })
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 原创 `);
            } else {
              return [
                createTextVNode(" 原创 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_tag, {
          color: "arcoblue",
          title: "转载文章"
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg data-v-caa20599="" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-share-alt" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" data-v-9d206022${_scopeId}><path d="M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847" data-v-9d206022${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  "data-v-caa20599": "",
                  viewBox: "0 0 48 48",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "currentColor",
                  class: "arco-icon arco-icon-share-alt",
                  "stroke-width": "4",
                  "stroke-linecap": "butt",
                  "stroke-linejoin": "miter"
                }, [
                  createVNode("path", { d: "M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847" })
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 转载 `);
            } else {
              return [
                createTextVNode(" 转载 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="meta-item" data-v-9d206022><span class="meta-icon author" data-v-9d206022><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-9d206022><title data-v-9d206022>原创作者</title><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" data-v-9d206022></path></svg></span><span class="meta-content" data-v-9d206022>`);
      if (unref(isOriginal)) {
        _push(`<a${ssrRenderAttr("href", unref(authorLink))} title="进入作者主页" data-v-9d206022>${ssrInterpolate(unref(author))}</a>`);
      } else {
        _push(`<span${ssrRenderAttr("title", unref(author))} data-v-9d206022>${ssrInterpolate(unref(author))}</span>`);
      }
      _push(`</span></div><div class="meta-item" data-v-9d206022><span class="meta-icon date" data-v-9d206022><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-9d206022>`);
      if (unref(isOriginal)) {
        _push(`<title data-v-9d206022>发布时间</title>`);
      } else {
        _push(`<title data-v-9d206022>转载时间</title>`);
      }
      _push(`<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" data-v-9d206022></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" data-v-9d206022></path></svg></span><time class="meta-content"${ssrRenderAttr("datetime", unref(date))}${ssrRenderAttr("title", unref(originDayjs)().to(unref(originDayjs)(unref(date))))} data-v-9d206022>${ssrInterpolate(unref(date))}</time></div>`);
      if (__props.readTime != null) {
        _push(`<div class="meta-item" data-v-9d206022><span class="meta-icon pv" data-v-9d206022></span><span class="meta-content" data-v-9d206022>阅读时间:${ssrInterpolate(__props.readTime)}分钟</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.words != null) {
        _push(`<div class="meta-item" data-v-9d206022><span class="meta-icon pv" data-v-9d206022></span><span class="meta-content" data-v-9d206022>字数:${ssrInterpolate(__props.words)}字</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showViewCount)) {
        _push(`<div class="meta-item" data-v-9d206022><span class="meta-icon pv" data-v-9d206022><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-9d206022><title data-v-9d206022>阅读数</title><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z" data-v-9d206022></path><path d="M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" data-v-9d206022></path></svg></span><span class="meta-content" data-v-9d206022>${ssrInterpolate(unref(viewCount))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showCategory) && Object.keys(unref(categories)).length !== 0) {
        _push(`<div class="meta-item" data-v-9d206022><span class="meta-icon category" data-v-9d206022><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-9d206022><title data-v-9d206022>所属分类</title><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256z m635.3 512H159l103.3-256h612.4L771.3 768z" data-v-9d206022></path></svg></span><span class="meta-content" data-v-9d206022><!--[-->`);
        ssrRenderList(unref(categories), (category, index) => {
          _push(`<span data-v-9d206022><a href="javascript:void(0);" target="_self"${ssrRenderAttr("title", category)} data-v-9d206022>${ssrInterpolate(category)}</a>`);
          if (index != unref(categories).length - 1) {
            _push(`<span data-v-9d206022>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (Object.keys(unref(tags)).length !== 0) {
        _push(`<div class="meta-item tag" data-v-9d206022><span class="meta-icon tag" data-v-9d206022><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-9d206022><title data-v-9d206022>标签列表</title><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z m60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z" data-v-9d206022></path></svg></span><span class="meta-content" data-v-9d206022><!--[-->`);
        ssrRenderList(unref(tags), (tag, index) => {
          _push(`<span data-v-9d206022><a href="javascript:void(0);" target="_self"${ssrRenderAttr("title", tag)} data-v-9d206022>${ssrInterpolate(tag)}</a>`);
          if (index != unref(tags).length - 1) {
            _push(`<span data-v-9d206022>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = ArticleMetadata_vue_vue_type_script_setup_true_lang_default.setup;
ArticleMetadata_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ArticleMetadata.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(ArticleMetadata_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9d206022"]]);
export {
  __unplugin_components_7 as _
};
