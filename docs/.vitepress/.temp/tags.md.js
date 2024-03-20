import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import "./index.w40geAFS.js";
import { S as Spin, g as getAllElements, R as Row, C as Col, L as List, a as ListItem } from "./index.szis8hzX.js";
import { g as getPrefixCls, u as useSize, _ as _export_sfc, s as setGlobalConfig, m as getComponentPrefix, T as Tag } from "./index.tJQKWac5.js";
import { defineComponent, toRefs, computed, reactive, provide, createVNode, inject, onMounted, openBlock, createElementBlock, normalizeClass, renderSlot, onBeforeUnmount, mergeProps, useSSRContext, ref, withCtx, toDisplayString, createBlock, Fragment, renderList, createTextVNode, unref, createCommentVNode, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { WordCloud } from "@antv/g2plot";
import md5 from "blueimp-md5";
import { d as data } from "./posts.data.J8q8qJJj.js";
import { g as getQueryParam } from "./utils.uz8f2B39.js";
import { _ as _export_sfc$1 } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const cardInjectionKey = Symbol("ArcoCard");
var _Card = defineComponent({
  name: "Card",
  components: {
    Spin
  },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    headerStyle: {
      type: Object,
      default: () => ({})
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String
    },
    extra: {
      type: String
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("card");
    const {
      size
    } = toRefs(props);
    const {
      mergedSize: _mergedSize
    } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "small" || _mergedSize.value === "mini") {
        return "small";
      }
      return "medium";
    });
    const renderActions = (vns) => {
      const actions = getAllElements(vns);
      return createVNode("div", {
        "class": `${prefixCls}-actions`
      }, [createVNode("div", {
        "class": `${prefixCls}-actions-right`
      }, [actions.map((action, index) => createVNode("span", {
        "key": `action-${index}`,
        "class": `${prefixCls}-actions-item`
      }, [action]))])]);
    };
    const cardContext = reactive({
      hasMeta: false,
      hasGrid: false,
      slots,
      renderActions
    });
    provide(cardInjectionKey, cardContext);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-loading`]: props.loading,
      [`${prefixCls}-bordered`]: props.bordered,
      [`${prefixCls}-hoverable`]: props.hoverable,
      [`${prefixCls}-contain-grid`]: cardContext.hasGrid
    }]);
    return () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const hasTitle = Boolean((_a = slots.title) != null ? _a : props.title);
      const hasExtra = Boolean((_b = slots.extra) != null ? _b : props.extra);
      return createVNode("div", {
        "class": cls.value
      }, [(hasTitle || hasExtra) && createVNode("div", {
        "class": [`${prefixCls}-header`, {
          [`${prefixCls}-header-no-title`]: !hasTitle
        }],
        "style": props.headerStyle
      }, [hasTitle && createVNode("div", {
        "class": `${prefixCls}-header-title`
      }, [(_d = (_c = slots.title) == null ? void 0 : _c.call(slots)) != null ? _d : props.title]), hasExtra && createVNode("div", {
        "class": `${prefixCls}-header-extra`
      }, [(_f = (_e = slots.extra) == null ? void 0 : _e.call(slots)) != null ? _f : props.extra])]), slots.cover && createVNode("div", {
        "class": `${prefixCls}-cover`
      }, [slots.cover()]), createVNode("div", {
        "class": `${prefixCls}-body`,
        "style": props.bodyStyle
      }, [props.loading ? createVNode(Spin, null, null) : (_g = slots.default) == null ? void 0 : _g.call(slots), slots.actions && !cardContext.hasMeta && renderActions(slots.actions())])]);
    };
  }
});
var CardMeta = defineComponent({
  name: "CardMeta",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("card-meta");
    const context = inject(cardInjectionKey);
    onMounted(() => {
      if (context) {
        context.hasMeta = true;
      }
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const hasTitle = Boolean((_a = slots.title) != null ? _a : props.title);
      const hasDesc = Boolean((_b = slots.description) != null ? _b : props.description);
      return createVNode("div", {
        "class": prefixCls
      }, [(hasTitle || hasDesc) && createVNode("div", {
        "class": `${prefixCls}-content`
      }, [hasTitle && createVNode("div", {
        "class": `${prefixCls}-title`
      }, [(_d = (_c = slots.title) == null ? void 0 : _c.call(slots)) != null ? _d : props.title]), hasDesc && createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_f = (_e = slots.description) == null ? void 0 : _e.call(slots)) != null ? _f : props.description])]), (slots.avatar || (context == null ? void 0 : context.slots.actions)) && createVNode("div", {
        "class": [`${prefixCls}-footer `, {
          [`${prefixCls}-footer-only-actions`]: !slots.avatar
        }]
      }, [slots.avatar && createVNode("div", {
        "class": `${prefixCls}-avatar`
      }, [slots.avatar()]), context && context.slots.actions && context.renderActions(context.slots.actions())])]);
    };
  }
});
const _sfc_main$1 = defineComponent({
  name: "CardGrid",
  props: {
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("card-grid");
    const context = inject(cardInjectionKey);
    onMounted(() => {
      if (context) {
        context.hasGrid = true;
      }
    });
    const cls = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}-hoverable`]: props.hoverable
        }
      ];
    });
    return {
      cls
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const Card = Object.assign(_Card, {
  Meta: CardMeta,
  Grid: CardGrid,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Card.name, _Card);
    app.component(componentPrefix + CardMeta.name, CardMeta);
    app.component(componentPrefix + CardGrid.name, CardGrid);
  }
});
var WordCloud_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "WordCloud",
  __ssrInlineRender: true,
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    let wordCloud;
    onMounted(() => {
      wordCloud = new WordCloud("wordcloud-container", {
        data: props.dataList,
        wordField: "name",
        weightField: "value",
        colorField: "name",
        wordStyle: {
          fontFamily: "Verdana",
          fontSize: [14, 35],
          rotation: 0
        },
        // 返回值设置成一个 [0, 1) 区间内的值，
        // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
        random: () => 0.5
      });
      wordCloud.render();
    });
    onBeforeUnmount(() => {
      wordCloud.destroy();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "wordcloud-container" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$2 = WordCloud_vue_vue_type_script_setup_true_lang_default.setup;
WordCloud_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/WordCloud.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Tag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  setup(__props) {
    const articleList = ref(data);
    const tagsList = computed(() => {
      const tags2 = [];
      data.forEach((article) => {
        if (article.tags) {
          article.tags.forEach((tag2) => {
            const existingTag = tags2.find((t) => t.name === tag2);
            if (existingTag) {
              existingTag.value++;
            } else {
              tags2.push({ name: tag2, value: 1 });
            }
          });
        }
      });
      return tags2;
    });
    const selectTag = ref(null);
    const toggleTag = (tagTitle) => {
      selectTag.value = tagTitle;
      const filteredArticles = data.filter((article) => article.tags && article.tags.includes(tagTitle));
      articleList.value = filteredArticles;
    };
    const tag = getQueryParam("tag");
    if (tag && tag.trim() !== "") {
      toggleTag(tag);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WordCloud = WordCloud_vue_vue_type_script_setup_true_lang_default;
      const _component_a_row = Row;
      const _component_a_col = Col;
      const _component_a_card = Card;
      const _component_a_tag = Tag;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_ArticleMetadata = __unplugin_components_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container-tag" }, _attrs))} data-v-90cfa902><div class="tag-header-wrapper" data-v-90cfa902><span class="tag-breadcrumb-icon" data-v-90cfa902><svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" class="larkui-icon icon-svg index-module_size_wVASz" style="${ssrRenderStyle({ "width": "16px", "min-width": "16px", "height": "16px" })}" data-v-90cfa902><defs data-v-90cfa902></defs><path d="M527.744 32c20.8 0.192 40.32 8.32 55.04 23.04l386.112 386.24c14.912 14.848 23.104 34.56 23.104 55.68 0 20.992-8.192 40.704-23.04 55.552l-416.512 416.512c-14.784 14.784-34.624 22.976-55.68 22.976a78.08 78.08 0 0 1-55.616-23.04L55.104 582.784A78.272 78.272 0 0 1 32 527.552V110.72C32 67.2 67.2 32 110.72 32h417.024zM267.136 267.136a128.064 128.064 0 1 0 181.184 181.12 128.064 128.064 0 0 0-181.184-181.12z" data-v-90cfa902></path></svg></span><span class="tag-breadcrumb-item" data-v-90cfa902>我的标签</span></div><div data-v-90cfa902>`);
      _push(ssrRenderComponent(_component_WordCloud, {
        dataList: tagsList.value,
        style: { width: "100%", height: "130px" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_row, { gutter: 24 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_card, { style: { width: "100%", marginBottom: "20px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(tagsList.value, (item) => {
                          _push4(ssrRenderComponent(_component_a_tag, {
                            onClick: ($event) => toggleTag(item.name),
                            class: selectTag.value === item.name ? "tag-checkable-checked tag-item" : "tag-item"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="tag-title" data-v-90cfa902${_scopeId4}>${ssrInterpolate(item.name)}</span><span data-v-90cfa902${_scopeId4}>${ssrInterpolate(item.value)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "tag-title" }, toDisplayString(item.name), 1),
                                  createVNode("span", null, toDisplayString(item.value), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(tagsList.value, (item) => {
                            return openBlock(), createBlock(_component_a_tag, {
                              onClick: ($event) => toggleTag(item.name),
                              class: selectTag.value === item.name ? "tag-checkable-checked tag-item" : "tag-item"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "tag-title" }, toDisplayString(item.name), 1),
                                createVNode("span", null, toDisplayString(item.value), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "class"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_card, { style: { width: "100%", marginBottom: "20px" } }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(tagsList.value, (item) => {
                          return openBlock(), createBlock(_component_a_tag, {
                            onClick: ($event) => toggleTag(item.name),
                            class: selectTag.value === item.name ? "tag-checkable-checked tag-item" : "tag-item"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "tag-title" }, toDisplayString(item.name), 1),
                              createVNode("span", null, toDisplayString(item.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "class"]);
                        }), 256))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 24 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selectTag.value) {
                    _push3(ssrRenderComponent(_component_a_list, { style: { width: "100%" } }, {
                      header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` 共 ${ssrInterpolate(articleList.value.length)} 篇文章 `);
                        } else {
                          return [
                            createTextVNode(" 共 " + toDisplayString(articleList.value.length) + " 篇文章 ", 1)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(articleList.value, (article, index) => {
                            _push4(ssrRenderComponent(_component_a_list_item, { key: index }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="result-item" data-v-90cfa902${_scopeId4}><h3 class="result-item-title" data-v-90cfa902${_scopeId4}><a${ssrRenderAttr("href", article.url)} class="title" target="_blank" data-v-90cfa902${_scopeId4}>${ssrInterpolate(article.title)}</a></h3><p class="result-item-description" data-v-90cfa902${_scopeId4}></p>`);
                                  _push5(ssrRenderComponent(_component_ArticleMetadata, {
                                    article,
                                    key: unref(md5)(article.date.string)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "result-item" }, [
                                      createVNode("h3", { class: "result-item-title" }, [
                                        createVNode("a", {
                                          href: article.url,
                                          class: "title",
                                          target: "_blank"
                                        }, toDisplayString(article.title), 9, ["href"])
                                      ]),
                                      createVNode("p", { class: "result-item-description" }),
                                      (openBlock(), createBlock(_component_ArticleMetadata, {
                                        article,
                                        key: unref(md5)(article.date.string)
                                      }, null, 8, ["article"]))
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(articleList.value, (article, index) => {
                              return openBlock(), createBlock(_component_a_list_item, { key: index }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "result-item" }, [
                                    createVNode("h3", { class: "result-item-title" }, [
                                      createVNode("a", {
                                        href: article.url,
                                        class: "title",
                                        target: "_blank"
                                      }, toDisplayString(article.title), 9, ["href"])
                                    ]),
                                    createVNode("p", { class: "result-item-description" }),
                                    (openBlock(), createBlock(_component_ArticleMetadata, {
                                      article,
                                      key: unref(md5)(article.date.string)
                                    }, null, 8, ["article"]))
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!selectTag.value) {
                    _push3(ssrRenderComponent(_component_a_card, {
                      style: { width: "100%" },
                      class: "no-result"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<svg role="img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" data-v-90cfa902${_scopeId3}><defs data-v-90cfa902${_scopeId3}><linearGradient id="a" x1="1.128" y1="0.988" x2="0.364" y2="1" gradientUnits="objectBoundingBox" data-v-90cfa902${_scopeId3}><stop offset="0" stop-color="#e0e5ef" stop-opacity="0" data-v-90cfa902${_scopeId3}></stop><stop offset="1" stop-color="#e0e5ef" data-v-90cfa902${_scopeId3}></stop></linearGradient><linearGradient id="c" x1="1" y1="0.5" x2="0.112" y2="1.125" gradientUnits="objectBoundingBox" data-v-90cfa902${_scopeId3}><stop offset="0" stop-color="#fff" stop-opacity="0" data-v-90cfa902${_scopeId3}></stop><stop offset="1" stop-color="#747f95" data-v-90cfa902${_scopeId3}></stop></linearGradient><linearGradient id="d" x1="-0.392" y1="1.114" x2="0.5" y2="0.396" gradientUnits="objectBoundingBox" data-v-90cfa902${_scopeId3}><stop offset="0" stop-color="#fff" stop-opacity="0" data-v-90cfa902${_scopeId3}></stop><stop offset="1" stop-color="#ebedf5" data-v-90cfa902${_scopeId3}></stop></linearGradient><linearGradient id="e" x1="-0.906" y1="1.646" x2="0.636" y2="0.061" xlink:href="#d" data-v-90cfa902${_scopeId3}></linearGradient><linearGradient id="f" x1="-0.109" y1="1.931" x2="0.736" y2="0.141" xlink:href="#d" data-v-90cfa902${_scopeId3}></linearGradient></defs><g transform="translate(-135 -375)" data-v-90cfa902${_scopeId3}><circle cx="184" cy="184" r="184" transform="translate(191 443)" fill="#f3f3fa" data-v-90cfa902${_scopeId3}></circle><path d="M2925,350h0c-8.837,0-16-32.235-16-72s7.163-72,16-72c.038,0,11.813.471,18.75-7.529s9-14.486,9-24.469c0-34.257,14.681-58.6,28.25-63.313,3.909-.688,10,.818,16-4.354s8-9.372,8-16.333c0-37.555,12.536-68,28-68s28,30.445,28,68c0,6.961-.667,10.328,5.333,15.5s14.76,4.5,18.667,5.187c13.569,4.714,24,33.055,24,67.312a101.212,101.212,0,0,0,2.333,20s4.485,11.842,11,5.5,9.13-14.885,10.25-22.871C3135.767,157.923,3142.61,142,3149,142c6.519,0,12.127,16.566,14.645,40.566.741,7.066,2.2,11.743,6.521,17.6A14.3,14.3,0,0,0,3180.92,206H3181c6.488,0,12.073,16.409,14.617,40.308.5,4.725.982,7.6,5.3,11.527S3212.884,262,3212.884,262l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573C3227.336,294.758,3229,311.835,3229,330c0,6.817-.237,13.546-.7,20H2925Zm303.3,0h0Z" transform="translate(-2718 397)" fill="url(#a)" data-v-90cfa902${_scopeId3}></path><path d="M117,208H.7c-.466-6.453-.7-13.181-.7-20,0-18.163,1.664-35.24,4.686-48.083a58.6,58.6,0,0,1,5.086-14.573C11.745,121.8,13.84,120,16,120l.116,0s7.651-.242,11.967-4.166,4.8-6.8,5.3-11.527C35.927,80.408,41.513,64,48,64a16.6,16.6,0,0,0,3.3-1.014A6.153,6.153,0,0,0,53.365,61.5c6.515-6.342,9.13-14.884,10.25-22.871C66.8,15.924,73.642,0,80.032,0,86.55,0,92.158,16.566,94.676,40.567c.742,7.065,2.2,11.742,6.521,17.6A14.3,14.3,0,0,0,111.951,64h.081c6.487,0,12.073,16.409,14.617,40.307.5,4.725.983,7.6,5.3,11.527S143.915,120,143.915,120l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573c3.022,12.844,4.686,29.921,4.686,48.083,0,6.818-.237,13.546-.7,20H117Zm42.328,0h0ZM.7,208h0Z" transform="translate(350.969 539)" fill="url(#a)" data-v-90cfa902${_scopeId3}></path><path d="M2989,62c-10.838-4.087-16.3,0-32,0-26.51,0-48-8.954-48-20s21.49-20,48-20h256a16,16,0,1,1,0,32s-15.5,0-27.5,3S3165,68.714,3165,68.714,3127.392,110,3081,110c-38.041,0-70.176-13.246-80.647-31.653C2998.219,74.6,2999.838,66.087,2989,62Z" transform="translate(-2702 701)" fill="#d1d6e2" data-v-90cfa902${_scopeId3}></path><path d="M-2493,98s-56.355,45.651-64,16,74.25-17.75-16,72" transform="translate(3044 409)" fill="none" stroke="#909aa9" stroke-linecap="round" stroke-width="2" stroke-dasharray="10" data-v-90cfa902${_scopeId3}></path><path d="M4,2.2C7.15-.75,16,0,16,0s-1.5,4-2.6,8-.232,5.942-1.8,8C7.6,21.25,0,21,0,21s.75-3.4,2-8S.85,5.15,4,2.2Z" transform="translate(447 603.085)" fill="#909aa9" data-v-90cfa902${_scopeId3}></path><ellipse cx="10" cy="4" rx="10" ry="4" transform="translate(294 787)" fill="url(#c)" data-v-90cfa902${_scopeId3}></ellipse><path d="M8.44,24s8.115-6,6.94-10S11.51,9.625,9.775,6.125A11.222,11.222,0,0,1,8.44,0S1.767,2.625,1.5,9.375C1.38,12.419,4.436,14.344,6.171,18A32.451,32.451,0,0,1,8.44,24Z" transform="translate(287 794.497) rotate(-90)" fill="#909aa9" data-v-90cfa902${_scopeId3}></path><path d="M0,0,57,4.5,136,0l31.5,12,17,10-37,8.5-24.5-5-58,5L4,23Z" transform="translate(191 699)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M-1.4,1.2,60,9l58.75-5.25L143,9l36-9V24.5L144.4,29l-16.2-7.25L95.6,23l-5.1,1.5L67.2,21.75,5,23.25S2.8,16.713,1.2,11.2-1.4,1.2-1.4,1.2Z" transform="translate(196 720)" fill="#eceff5" data-v-90cfa902${_scopeId3}></path><ellipse cx="43" cy="9.5" rx="43" ry="9.5" transform="translate(253 701)" fill="#ebedf5" data-v-90cfa902${_scopeId3}></ellipse><g transform="translate(63 354)" data-v-90cfa902${_scopeId3}><g transform="translate(258.49 305.55)" data-v-90cfa902${_scopeId3}><path d="M525.021,66.584a31.23,31.23,0,0,1,7.085,10.425c2.772,6.6,5.877,13.459,8.386,14.78s3.695,10.033-8.053,8.185S525.021,66.584,525.021,66.584Z" transform="translate(-524.241 -66.584)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M525.494,68.3a32.341,32.341,0,0,1,6.953,16.851c.847,8.628,2.933,13.332,5.151,13.016a12.659,12.659,0,0,1-5.991-.025C528.092,97.37,524.074,68.412,525.494,68.3Z" transform="translate(-523.763 -65.64)" fill="url(#d)" data-v-90cfa902${_scopeId3}></path></g><path d="M537.949,131.675a34.415,34.415,0,0,0,14.137,1.09c6.9-.975,8.727-13.747-.647-15.059-7.267-1.02-6.026-12.167-7.366-22.433s-6.56-18.848-7.364-23.026,4.251-9.233,3.614-18.062c-.652-9.065-6.3-10.479-8.307-10.074s-3.609,2.392-6.154,3.47-6.292-.673-11.112,1.619-9.377,7.547-9.377,7.547c-2.009,2.561.4,10.648-.938,14.691s-6.694,39.223-6.56,49.062,6.426,16.715,19.952,18.467,19.419-.606,19.856-4.448c.279-2.443,1.905-11.053-7.8-12.535-4.83-.74-7.363-1.347-7.363-1.347" transform="translate(-279.872 225.445)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M519.206,44.961s.961-1.578,1.726-1.594c1.313-.026,2.7,1.631,2.7,1.631S519.249,46.731,519.206,44.961Z" transform="translate(-268.363 226.187)" fill="#757f95" data-v-90cfa902${_scopeId3}></path><path d="M522.077,37.922c-2.054-.536-2.278,2.085-2.278,2.085s-2.89-.313-2.6,1.743c.357,2.566,5.831,2.443,5.831,2.443S524.583,38.578,522.077,37.922Z" transform="translate(-269.464 223.151)" fill="#757f95" data-v-90cfa902${_scopeId3}></path><path d="M505.743,52.715s-6.088-1.338-6.755,3.318,4.181,7.509,7.656.6" transform="translate(-279.292 231.235)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M503.084,74.624s-1.45,17.9,1.1,22.385c2.3,4.044,10.662,5.138,16.755,4.63a25.038,25.038,0,0,0,6.013-1.246c6.068-2.157,2.831-6.2,0-8.893s-3.738-10.346-8.593-14.5" transform="translate(-276.501 243.626)" fill="url(#e)" data-v-90cfa902${_scopeId3}></path><path d="M514.078,48.635a.6.6,0,0,0-.522.31v0l-.009.014a4.814,4.814,0,0,1-3.228,2.322l-.019,0,0,0a.6.6,0,0,0-.509.5l-.011,0-.406,1.078s.341-.014.842-.088l.057-.307.11-.584v.865c.188-.031.389-.073.6-.121v-.747l.064.454.037.268a5.609,5.609,0,0,0,2.386-1.138,4.083,4.083,0,0,0,1.152-1.977c.04-.155.054-.248.054-.248A.6.6,0,0,0,514.078,48.635Z" transform="translate(-273.668 229.087)" fill="#757f95" data-v-90cfa902${_scopeId3}></path><path d="M531.516,76.393c-3.6-3.507-6.766.555-6.766.555s-6.2-4.888-8.5.26C513.373,83.63,528.051,94,528.051,94S535.2,79.982,531.516,76.393Z" transform="translate(-270.216 243.516)" fill="url(#f)" data-v-90cfa902${_scopeId3}></path><path d="M504.118,75.051s5.02,15.274,7.571,19.76c3.236,5.688,9.468,8.51,15.533,6.355s2.831-5.527,0-8.223S523.148,81.155,518.293,77" transform="translate(-277.496 242.564)" fill="#fff" data-v-90cfa902${_scopeId3}></path></g><path d="M0,9.833l18-9.5,2.667,4v8.2L13,18,8.167,12.532,0,13.671Z" transform="translate(377 777)" fill="#eceff5" data-v-90cfa902${_scopeId3}></path><path d="M4,3.167,18,0V10l-5,3.167-4.833-4L0,10Z" transform="translate(377 777)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M-.211,18.893,16,12l.246,14.107-2.084,4.646L0,31Z" transform="matrix(1, 0.017, -0.017, 1, 400.376, 734.864)" fill="#eceff5" data-v-90cfa902${_scopeId3}></path><path d="M9.75,12H16l-3.75,7H0Z" transform="translate(400 735)" fill="#fff" data-v-90cfa902${_scopeId3}></path><g transform="translate(447 690)" data-v-90cfa902${_scopeId3}><path d="M97,0,63.923,4.5,24.316,0,8.523,12,0,22l18.55,8.5,12.283-5,29.079,5,23.488-5,6.467-12.126Z" transform="translate(-1 12)" fill="#fff" data-v-90cfa902${_scopeId3}></path><path d="M81.149.607l-28.1,3.945L26.17,1.9l-11.1,2.655L-2.651-1.333V12.391l17.083,2.276L21.846,11l14.917.632,2.334.759L49.759,11l28.991,1.391s-1.4-1.778,0-4.724A43.992,43.992,0,0,0,81.149.607Z" transform="translate(1.651 35.333)" fill="#eceff5" data-v-90cfa902${_scopeId3}></path></g></g></svg><p data-v-90cfa902${_scopeId3}>点击上方标签，查看标签下的所有文章</p>`);
                        } else {
                          return [
                            (openBlock(), createBlock("svg", {
                              role: "img",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              viewBox: "0 0 480 480"
                            }, [
                              createVNode("defs", null, [
                                createVNode("linearGradient", {
                                  id: "a",
                                  x1: "1.128",
                                  y1: "0.988",
                                  x2: "0.364",
                                  y2: "1",
                                  gradientUnits: "objectBoundingBox"
                                }, [
                                  createVNode("stop", {
                                    offset: "0",
                                    "stop-color": "#e0e5ef",
                                    "stop-opacity": "0"
                                  }),
                                  createVNode("stop", {
                                    offset: "1",
                                    "stop-color": "#e0e5ef"
                                  })
                                ]),
                                createVNode("linearGradient", {
                                  id: "c",
                                  x1: "1",
                                  y1: "0.5",
                                  x2: "0.112",
                                  y2: "1.125",
                                  gradientUnits: "objectBoundingBox"
                                }, [
                                  createVNode("stop", {
                                    offset: "0",
                                    "stop-color": "#fff",
                                    "stop-opacity": "0"
                                  }),
                                  createVNode("stop", {
                                    offset: "1",
                                    "stop-color": "#747f95"
                                  })
                                ]),
                                createVNode("linearGradient", {
                                  id: "d",
                                  x1: "-0.392",
                                  y1: "1.114",
                                  x2: "0.5",
                                  y2: "0.396",
                                  gradientUnits: "objectBoundingBox"
                                }, [
                                  createVNode("stop", {
                                    offset: "0",
                                    "stop-color": "#fff",
                                    "stop-opacity": "0"
                                  }),
                                  createVNode("stop", {
                                    offset: "1",
                                    "stop-color": "#ebedf5"
                                  })
                                ]),
                                createVNode("linearGradient", {
                                  id: "e",
                                  x1: "-0.906",
                                  y1: "1.646",
                                  x2: "0.636",
                                  y2: "0.061",
                                  "xlink:href": "#d"
                                }),
                                createVNode("linearGradient", {
                                  id: "f",
                                  x1: "-0.109",
                                  y1: "1.931",
                                  x2: "0.736",
                                  y2: "0.141",
                                  "xlink:href": "#d"
                                })
                              ]),
                              createVNode("g", { transform: "translate(-135 -375)" }, [
                                createVNode("circle", {
                                  cx: "184",
                                  cy: "184",
                                  r: "184",
                                  transform: "translate(191 443)",
                                  fill: "#f3f3fa"
                                }),
                                createVNode("path", {
                                  d: "M2925,350h0c-8.837,0-16-32.235-16-72s7.163-72,16-72c.038,0,11.813.471,18.75-7.529s9-14.486,9-24.469c0-34.257,14.681-58.6,28.25-63.313,3.909-.688,10,.818,16-4.354s8-9.372,8-16.333c0-37.555,12.536-68,28-68s28,30.445,28,68c0,6.961-.667,10.328,5.333,15.5s14.76,4.5,18.667,5.187c13.569,4.714,24,33.055,24,67.312a101.212,101.212,0,0,0,2.333,20s4.485,11.842,11,5.5,9.13-14.885,10.25-22.871C3135.767,157.923,3142.61,142,3149,142c6.519,0,12.127,16.566,14.645,40.566.741,7.066,2.2,11.743,6.521,17.6A14.3,14.3,0,0,0,3180.92,206H3181c6.488,0,12.073,16.409,14.617,40.308.5,4.725.982,7.6,5.3,11.527S3212.884,262,3212.884,262l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573C3227.336,294.758,3229,311.835,3229,330c0,6.817-.237,13.546-.7,20H2925Zm303.3,0h0Z",
                                  transform: "translate(-2718 397)",
                                  fill: "url(#a)"
                                }),
                                createVNode("path", {
                                  d: "M117,208H.7c-.466-6.453-.7-13.181-.7-20,0-18.163,1.664-35.24,4.686-48.083a58.6,58.6,0,0,1,5.086-14.573C11.745,121.8,13.84,120,16,120l.116,0s7.651-.242,11.967-4.166,4.8-6.8,5.3-11.527C35.927,80.408,41.513,64,48,64a16.6,16.6,0,0,0,3.3-1.014A6.153,6.153,0,0,0,53.365,61.5c6.515-6.342,9.13-14.884,10.25-22.871C66.8,15.924,73.642,0,80.032,0,86.55,0,92.158,16.566,94.676,40.567c.742,7.065,2.2,11.742,6.521,17.6A14.3,14.3,0,0,0,111.951,64h.081c6.487,0,12.073,16.409,14.617,40.307.5,4.725.983,7.6,5.3,11.527S143.915,120,143.915,120l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573c3.022,12.844,4.686,29.921,4.686,48.083,0,6.818-.237,13.546-.7,20H117Zm42.328,0h0ZM.7,208h0Z",
                                  transform: "translate(350.969 539)",
                                  fill: "url(#a)"
                                }),
                                createVNode("path", {
                                  d: "M2989,62c-10.838-4.087-16.3,0-32,0-26.51,0-48-8.954-48-20s21.49-20,48-20h256a16,16,0,1,1,0,32s-15.5,0-27.5,3S3165,68.714,3165,68.714,3127.392,110,3081,110c-38.041,0-70.176-13.246-80.647-31.653C2998.219,74.6,2999.838,66.087,2989,62Z",
                                  transform: "translate(-2702 701)",
                                  fill: "#d1d6e2"
                                }),
                                createVNode("path", {
                                  d: "M-2493,98s-56.355,45.651-64,16,74.25-17.75-16,72",
                                  transform: "translate(3044 409)",
                                  fill: "none",
                                  stroke: "#909aa9",
                                  "stroke-linecap": "round",
                                  "stroke-width": "2",
                                  "stroke-dasharray": "10"
                                }),
                                createVNode("path", {
                                  d: "M4,2.2C7.15-.75,16,0,16,0s-1.5,4-2.6,8-.232,5.942-1.8,8C7.6,21.25,0,21,0,21s.75-3.4,2-8S.85,5.15,4,2.2Z",
                                  transform: "translate(447 603.085)",
                                  fill: "#909aa9"
                                }),
                                createVNode("ellipse", {
                                  cx: "10",
                                  cy: "4",
                                  rx: "10",
                                  ry: "4",
                                  transform: "translate(294 787)",
                                  fill: "url(#c)"
                                }),
                                createVNode("path", {
                                  d: "M8.44,24s8.115-6,6.94-10S11.51,9.625,9.775,6.125A11.222,11.222,0,0,1,8.44,0S1.767,2.625,1.5,9.375C1.38,12.419,4.436,14.344,6.171,18A32.451,32.451,0,0,1,8.44,24Z",
                                  transform: "translate(287 794.497) rotate(-90)",
                                  fill: "#909aa9"
                                }),
                                createVNode("path", {
                                  d: "M0,0,57,4.5,136,0l31.5,12,17,10-37,8.5-24.5-5-58,5L4,23Z",
                                  transform: "translate(191 699)",
                                  fill: "#fff"
                                }),
                                createVNode("path", {
                                  d: "M-1.4,1.2,60,9l58.75-5.25L143,9l36-9V24.5L144.4,29l-16.2-7.25L95.6,23l-5.1,1.5L67.2,21.75,5,23.25S2.8,16.713,1.2,11.2-1.4,1.2-1.4,1.2Z",
                                  transform: "translate(196 720)",
                                  fill: "#eceff5"
                                }),
                                createVNode("ellipse", {
                                  cx: "43",
                                  cy: "9.5",
                                  rx: "43",
                                  ry: "9.5",
                                  transform: "translate(253 701)",
                                  fill: "#ebedf5"
                                }),
                                createVNode("g", { transform: "translate(63 354)" }, [
                                  createVNode("g", { transform: "translate(258.49 305.55)" }, [
                                    createVNode("path", {
                                      d: "M525.021,66.584a31.23,31.23,0,0,1,7.085,10.425c2.772,6.6,5.877,13.459,8.386,14.78s3.695,10.033-8.053,8.185S525.021,66.584,525.021,66.584Z",
                                      transform: "translate(-524.241 -66.584)",
                                      fill: "#fff"
                                    }),
                                    createVNode("path", {
                                      d: "M525.494,68.3a32.341,32.341,0,0,1,6.953,16.851c.847,8.628,2.933,13.332,5.151,13.016a12.659,12.659,0,0,1-5.991-.025C528.092,97.37,524.074,68.412,525.494,68.3Z",
                                      transform: "translate(-523.763 -65.64)",
                                      fill: "url(#d)"
                                    })
                                  ]),
                                  createVNode("path", {
                                    d: "M537.949,131.675a34.415,34.415,0,0,0,14.137,1.09c6.9-.975,8.727-13.747-.647-15.059-7.267-1.02-6.026-12.167-7.366-22.433s-6.56-18.848-7.364-23.026,4.251-9.233,3.614-18.062c-.652-9.065-6.3-10.479-8.307-10.074s-3.609,2.392-6.154,3.47-6.292-.673-11.112,1.619-9.377,7.547-9.377,7.547c-2.009,2.561.4,10.648-.938,14.691s-6.694,39.223-6.56,49.062,6.426,16.715,19.952,18.467,19.419-.606,19.856-4.448c.279-2.443,1.905-11.053-7.8-12.535-4.83-.74-7.363-1.347-7.363-1.347",
                                    transform: "translate(-279.872 225.445)",
                                    fill: "#fff"
                                  }),
                                  createVNode("path", {
                                    d: "M519.206,44.961s.961-1.578,1.726-1.594c1.313-.026,2.7,1.631,2.7,1.631S519.249,46.731,519.206,44.961Z",
                                    transform: "translate(-268.363 226.187)",
                                    fill: "#757f95"
                                  }),
                                  createVNode("path", {
                                    d: "M522.077,37.922c-2.054-.536-2.278,2.085-2.278,2.085s-2.89-.313-2.6,1.743c.357,2.566,5.831,2.443,5.831,2.443S524.583,38.578,522.077,37.922Z",
                                    transform: "translate(-269.464 223.151)",
                                    fill: "#757f95"
                                  }),
                                  createVNode("path", {
                                    d: "M505.743,52.715s-6.088-1.338-6.755,3.318,4.181,7.509,7.656.6",
                                    transform: "translate(-279.292 231.235)",
                                    fill: "#fff"
                                  }),
                                  createVNode("path", {
                                    d: "M503.084,74.624s-1.45,17.9,1.1,22.385c2.3,4.044,10.662,5.138,16.755,4.63a25.038,25.038,0,0,0,6.013-1.246c6.068-2.157,2.831-6.2,0-8.893s-3.738-10.346-8.593-14.5",
                                    transform: "translate(-276.501 243.626)",
                                    fill: "url(#e)"
                                  }),
                                  createVNode("path", {
                                    d: "M514.078,48.635a.6.6,0,0,0-.522.31v0l-.009.014a4.814,4.814,0,0,1-3.228,2.322l-.019,0,0,0a.6.6,0,0,0-.509.5l-.011,0-.406,1.078s.341-.014.842-.088l.057-.307.11-.584v.865c.188-.031.389-.073.6-.121v-.747l.064.454.037.268a5.609,5.609,0,0,0,2.386-1.138,4.083,4.083,0,0,0,1.152-1.977c.04-.155.054-.248.054-.248A.6.6,0,0,0,514.078,48.635Z",
                                    transform: "translate(-273.668 229.087)",
                                    fill: "#757f95"
                                  }),
                                  createVNode("path", {
                                    d: "M531.516,76.393c-3.6-3.507-6.766.555-6.766.555s-6.2-4.888-8.5.26C513.373,83.63,528.051,94,528.051,94S535.2,79.982,531.516,76.393Z",
                                    transform: "translate(-270.216 243.516)",
                                    fill: "url(#f)"
                                  }),
                                  createVNode("path", {
                                    d: "M504.118,75.051s5.02,15.274,7.571,19.76c3.236,5.688,9.468,8.51,15.533,6.355s2.831-5.527,0-8.223S523.148,81.155,518.293,77",
                                    transform: "translate(-277.496 242.564)",
                                    fill: "#fff"
                                  })
                                ]),
                                createVNode("path", {
                                  d: "M0,9.833l18-9.5,2.667,4v8.2L13,18,8.167,12.532,0,13.671Z",
                                  transform: "translate(377 777)",
                                  fill: "#eceff5"
                                }),
                                createVNode("path", {
                                  d: "M4,3.167,18,0V10l-5,3.167-4.833-4L0,10Z",
                                  transform: "translate(377 777)",
                                  fill: "#fff"
                                }),
                                createVNode("path", {
                                  d: "M-.211,18.893,16,12l.246,14.107-2.084,4.646L0,31Z",
                                  transform: "matrix(1, 0.017, -0.017, 1, 400.376, 734.864)",
                                  fill: "#eceff5"
                                }),
                                createVNode("path", {
                                  d: "M9.75,12H16l-3.75,7H0Z",
                                  transform: "translate(400 735)",
                                  fill: "#fff"
                                }),
                                createVNode("g", { transform: "translate(447 690)" }, [
                                  createVNode("path", {
                                    d: "M97,0,63.923,4.5,24.316,0,8.523,12,0,22l18.55,8.5,12.283-5,29.079,5,23.488-5,6.467-12.126Z",
                                    transform: "translate(-1 12)",
                                    fill: "#fff"
                                  }),
                                  createVNode("path", {
                                    d: "M81.149.607l-28.1,3.945L26.17,1.9l-11.1,2.655L-2.651-1.333V12.391l17.083,2.276L21.846,11l14.917.632,2.334.759L49.759,11l28.991,1.391s-1.4-1.778,0-4.724A43.992,43.992,0,0,0,81.149.607Z",
                                    transform: "translate(1.651 35.333)",
                                    fill: "#eceff5"
                                  })
                                ])
                              ])
                            ])),
                            createVNode("p", null, "点击上方标签，查看标签下的所有文章")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    selectTag.value ? (openBlock(), createBlock(_component_a_list, {
                      key: 0,
                      style: { width: "100%" }
                    }, {
                      header: withCtx(() => [
                        createTextVNode(" 共 " + toDisplayString(articleList.value.length) + " 篇文章 ", 1)
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(articleList.value, (article, index) => {
                          return openBlock(), createBlock(_component_a_list_item, { key: index }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "result-item" }, [
                                createVNode("h3", { class: "result-item-title" }, [
                                  createVNode("a", {
                                    href: article.url,
                                    class: "title",
                                    target: "_blank"
                                  }, toDisplayString(article.title), 9, ["href"])
                                ]),
                                createVNode("p", { class: "result-item-description" }),
                                (openBlock(), createBlock(_component_ArticleMetadata, {
                                  article,
                                  key: unref(md5)(article.date.string)
                                }, null, 8, ["article"]))
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    !selectTag.value ? (openBlock(), createBlock(_component_a_card, {
                      key: 1,
                      style: { width: "100%" },
                      class: "no-result"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          viewBox: "0 0 480 480"
                        }, [
                          createVNode("defs", null, [
                            createVNode("linearGradient", {
                              id: "a",
                              x1: "1.128",
                              y1: "0.988",
                              x2: "0.364",
                              y2: "1",
                              gradientUnits: "objectBoundingBox"
                            }, [
                              createVNode("stop", {
                                offset: "0",
                                "stop-color": "#e0e5ef",
                                "stop-opacity": "0"
                              }),
                              createVNode("stop", {
                                offset: "1",
                                "stop-color": "#e0e5ef"
                              })
                            ]),
                            createVNode("linearGradient", {
                              id: "c",
                              x1: "1",
                              y1: "0.5",
                              x2: "0.112",
                              y2: "1.125",
                              gradientUnits: "objectBoundingBox"
                            }, [
                              createVNode("stop", {
                                offset: "0",
                                "stop-color": "#fff",
                                "stop-opacity": "0"
                              }),
                              createVNode("stop", {
                                offset: "1",
                                "stop-color": "#747f95"
                              })
                            ]),
                            createVNode("linearGradient", {
                              id: "d",
                              x1: "-0.392",
                              y1: "1.114",
                              x2: "0.5",
                              y2: "0.396",
                              gradientUnits: "objectBoundingBox"
                            }, [
                              createVNode("stop", {
                                offset: "0",
                                "stop-color": "#fff",
                                "stop-opacity": "0"
                              }),
                              createVNode("stop", {
                                offset: "1",
                                "stop-color": "#ebedf5"
                              })
                            ]),
                            createVNode("linearGradient", {
                              id: "e",
                              x1: "-0.906",
                              y1: "1.646",
                              x2: "0.636",
                              y2: "0.061",
                              "xlink:href": "#d"
                            }),
                            createVNode("linearGradient", {
                              id: "f",
                              x1: "-0.109",
                              y1: "1.931",
                              x2: "0.736",
                              y2: "0.141",
                              "xlink:href": "#d"
                            })
                          ]),
                          createVNode("g", { transform: "translate(-135 -375)" }, [
                            createVNode("circle", {
                              cx: "184",
                              cy: "184",
                              r: "184",
                              transform: "translate(191 443)",
                              fill: "#f3f3fa"
                            }),
                            createVNode("path", {
                              d: "M2925,350h0c-8.837,0-16-32.235-16-72s7.163-72,16-72c.038,0,11.813.471,18.75-7.529s9-14.486,9-24.469c0-34.257,14.681-58.6,28.25-63.313,3.909-.688,10,.818,16-4.354s8-9.372,8-16.333c0-37.555,12.536-68,28-68s28,30.445,28,68c0,6.961-.667,10.328,5.333,15.5s14.76,4.5,18.667,5.187c13.569,4.714,24,33.055,24,67.312a101.212,101.212,0,0,0,2.333,20s4.485,11.842,11,5.5,9.13-14.885,10.25-22.871C3135.767,157.923,3142.61,142,3149,142c6.519,0,12.127,16.566,14.645,40.566.741,7.066,2.2,11.743,6.521,17.6A14.3,14.3,0,0,0,3180.92,206H3181c6.488,0,12.073,16.409,14.617,40.308.5,4.725.982,7.6,5.3,11.527S3212.884,262,3212.884,262l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573C3227.336,294.758,3229,311.835,3229,330c0,6.817-.237,13.546-.7,20H2925Zm303.3,0h0Z",
                              transform: "translate(-2718 397)",
                              fill: "url(#a)"
                            }),
                            createVNode("path", {
                              d: "M117,208H.7c-.466-6.453-.7-13.181-.7-20,0-18.163,1.664-35.24,4.686-48.083a58.6,58.6,0,0,1,5.086-14.573C11.745,121.8,13.84,120,16,120l.116,0s7.651-.242,11.967-4.166,4.8-6.8,5.3-11.527C35.927,80.408,41.513,64,48,64a16.6,16.6,0,0,0,3.3-1.014A6.153,6.153,0,0,0,53.365,61.5c6.515-6.342,9.13-14.884,10.25-22.871C66.8,15.924,73.642,0,80.032,0,86.55,0,92.158,16.566,94.676,40.567c.742,7.065,2.2,11.742,6.521,17.6A14.3,14.3,0,0,0,111.951,64h.081c6.487,0,12.073,16.409,14.617,40.307.5,4.725.983,7.6,5.3,11.527S143.915,120,143.915,120l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573c3.022,12.844,4.686,29.921,4.686,48.083,0,6.818-.237,13.546-.7,20H117Zm42.328,0h0ZM.7,208h0Z",
                              transform: "translate(350.969 539)",
                              fill: "url(#a)"
                            }),
                            createVNode("path", {
                              d: "M2989,62c-10.838-4.087-16.3,0-32,0-26.51,0-48-8.954-48-20s21.49-20,48-20h256a16,16,0,1,1,0,32s-15.5,0-27.5,3S3165,68.714,3165,68.714,3127.392,110,3081,110c-38.041,0-70.176-13.246-80.647-31.653C2998.219,74.6,2999.838,66.087,2989,62Z",
                              transform: "translate(-2702 701)",
                              fill: "#d1d6e2"
                            }),
                            createVNode("path", {
                              d: "M-2493,98s-56.355,45.651-64,16,74.25-17.75-16,72",
                              transform: "translate(3044 409)",
                              fill: "none",
                              stroke: "#909aa9",
                              "stroke-linecap": "round",
                              "stroke-width": "2",
                              "stroke-dasharray": "10"
                            }),
                            createVNode("path", {
                              d: "M4,2.2C7.15-.75,16,0,16,0s-1.5,4-2.6,8-.232,5.942-1.8,8C7.6,21.25,0,21,0,21s.75-3.4,2-8S.85,5.15,4,2.2Z",
                              transform: "translate(447 603.085)",
                              fill: "#909aa9"
                            }),
                            createVNode("ellipse", {
                              cx: "10",
                              cy: "4",
                              rx: "10",
                              ry: "4",
                              transform: "translate(294 787)",
                              fill: "url(#c)"
                            }),
                            createVNode("path", {
                              d: "M8.44,24s8.115-6,6.94-10S11.51,9.625,9.775,6.125A11.222,11.222,0,0,1,8.44,0S1.767,2.625,1.5,9.375C1.38,12.419,4.436,14.344,6.171,18A32.451,32.451,0,0,1,8.44,24Z",
                              transform: "translate(287 794.497) rotate(-90)",
                              fill: "#909aa9"
                            }),
                            createVNode("path", {
                              d: "M0,0,57,4.5,136,0l31.5,12,17,10-37,8.5-24.5-5-58,5L4,23Z",
                              transform: "translate(191 699)",
                              fill: "#fff"
                            }),
                            createVNode("path", {
                              d: "M-1.4,1.2,60,9l58.75-5.25L143,9l36-9V24.5L144.4,29l-16.2-7.25L95.6,23l-5.1,1.5L67.2,21.75,5,23.25S2.8,16.713,1.2,11.2-1.4,1.2-1.4,1.2Z",
                              transform: "translate(196 720)",
                              fill: "#eceff5"
                            }),
                            createVNode("ellipse", {
                              cx: "43",
                              cy: "9.5",
                              rx: "43",
                              ry: "9.5",
                              transform: "translate(253 701)",
                              fill: "#ebedf5"
                            }),
                            createVNode("g", { transform: "translate(63 354)" }, [
                              createVNode("g", { transform: "translate(258.49 305.55)" }, [
                                createVNode("path", {
                                  d: "M525.021,66.584a31.23,31.23,0,0,1,7.085,10.425c2.772,6.6,5.877,13.459,8.386,14.78s3.695,10.033-8.053,8.185S525.021,66.584,525.021,66.584Z",
                                  transform: "translate(-524.241 -66.584)",
                                  fill: "#fff"
                                }),
                                createVNode("path", {
                                  d: "M525.494,68.3a32.341,32.341,0,0,1,6.953,16.851c.847,8.628,2.933,13.332,5.151,13.016a12.659,12.659,0,0,1-5.991-.025C528.092,97.37,524.074,68.412,525.494,68.3Z",
                                  transform: "translate(-523.763 -65.64)",
                                  fill: "url(#d)"
                                })
                              ]),
                              createVNode("path", {
                                d: "M537.949,131.675a34.415,34.415,0,0,0,14.137,1.09c6.9-.975,8.727-13.747-.647-15.059-7.267-1.02-6.026-12.167-7.366-22.433s-6.56-18.848-7.364-23.026,4.251-9.233,3.614-18.062c-.652-9.065-6.3-10.479-8.307-10.074s-3.609,2.392-6.154,3.47-6.292-.673-11.112,1.619-9.377,7.547-9.377,7.547c-2.009,2.561.4,10.648-.938,14.691s-6.694,39.223-6.56,49.062,6.426,16.715,19.952,18.467,19.419-.606,19.856-4.448c.279-2.443,1.905-11.053-7.8-12.535-4.83-.74-7.363-1.347-7.363-1.347",
                                transform: "translate(-279.872 225.445)",
                                fill: "#fff"
                              }),
                              createVNode("path", {
                                d: "M519.206,44.961s.961-1.578,1.726-1.594c1.313-.026,2.7,1.631,2.7,1.631S519.249,46.731,519.206,44.961Z",
                                transform: "translate(-268.363 226.187)",
                                fill: "#757f95"
                              }),
                              createVNode("path", {
                                d: "M522.077,37.922c-2.054-.536-2.278,2.085-2.278,2.085s-2.89-.313-2.6,1.743c.357,2.566,5.831,2.443,5.831,2.443S524.583,38.578,522.077,37.922Z",
                                transform: "translate(-269.464 223.151)",
                                fill: "#757f95"
                              }),
                              createVNode("path", {
                                d: "M505.743,52.715s-6.088-1.338-6.755,3.318,4.181,7.509,7.656.6",
                                transform: "translate(-279.292 231.235)",
                                fill: "#fff"
                              }),
                              createVNode("path", {
                                d: "M503.084,74.624s-1.45,17.9,1.1,22.385c2.3,4.044,10.662,5.138,16.755,4.63a25.038,25.038,0,0,0,6.013-1.246c6.068-2.157,2.831-6.2,0-8.893s-3.738-10.346-8.593-14.5",
                                transform: "translate(-276.501 243.626)",
                                fill: "url(#e)"
                              }),
                              createVNode("path", {
                                d: "M514.078,48.635a.6.6,0,0,0-.522.31v0l-.009.014a4.814,4.814,0,0,1-3.228,2.322l-.019,0,0,0a.6.6,0,0,0-.509.5l-.011,0-.406,1.078s.341-.014.842-.088l.057-.307.11-.584v.865c.188-.031.389-.073.6-.121v-.747l.064.454.037.268a5.609,5.609,0,0,0,2.386-1.138,4.083,4.083,0,0,0,1.152-1.977c.04-.155.054-.248.054-.248A.6.6,0,0,0,514.078,48.635Z",
                                transform: "translate(-273.668 229.087)",
                                fill: "#757f95"
                              }),
                              createVNode("path", {
                                d: "M531.516,76.393c-3.6-3.507-6.766.555-6.766.555s-6.2-4.888-8.5.26C513.373,83.63,528.051,94,528.051,94S535.2,79.982,531.516,76.393Z",
                                transform: "translate(-270.216 243.516)",
                                fill: "url(#f)"
                              }),
                              createVNode("path", {
                                d: "M504.118,75.051s5.02,15.274,7.571,19.76c3.236,5.688,9.468,8.51,15.533,6.355s2.831-5.527,0-8.223S523.148,81.155,518.293,77",
                                transform: "translate(-277.496 242.564)",
                                fill: "#fff"
                              })
                            ]),
                            createVNode("path", {
                              d: "M0,9.833l18-9.5,2.667,4v8.2L13,18,8.167,12.532,0,13.671Z",
                              transform: "translate(377 777)",
                              fill: "#eceff5"
                            }),
                            createVNode("path", {
                              d: "M4,3.167,18,0V10l-5,3.167-4.833-4L0,10Z",
                              transform: "translate(377 777)",
                              fill: "#fff"
                            }),
                            createVNode("path", {
                              d: "M-.211,18.893,16,12l.246,14.107-2.084,4.646L0,31Z",
                              transform: "matrix(1, 0.017, -0.017, 1, 400.376, 734.864)",
                              fill: "#eceff5"
                            }),
                            createVNode("path", {
                              d: "M9.75,12H16l-3.75,7H0Z",
                              transform: "translate(400 735)",
                              fill: "#fff"
                            }),
                            createVNode("g", { transform: "translate(447 690)" }, [
                              createVNode("path", {
                                d: "M97,0,63.923,4.5,24.316,0,8.523,12,0,22l18.55,8.5,12.283-5,29.079,5,23.488-5,6.467-12.126Z",
                                transform: "translate(-1 12)",
                                fill: "#fff"
                              }),
                              createVNode("path", {
                                d: "M81.149.607l-28.1,3.945L26.17,1.9l-11.1,2.655L-2.651-1.333V12.391l17.083,2.276L21.846,11l14.917.632,2.334.759L49.759,11l28.991,1.391s-1.4-1.778,0-4.724A43.992,43.992,0,0,0,81.149.607Z",
                                transform: "translate(1.651 35.333)",
                                fill: "#eceff5"
                              })
                            ])
                          ])
                        ])),
                        createVNode("p", null, "点击上方标签，查看标签下的所有文章")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  createVNode(_component_a_card, { style: { width: "100%", marginBottom: "20px" } }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tagsList.value, (item) => {
                        return openBlock(), createBlock(_component_a_tag, {
                          onClick: ($event) => toggleTag(item.name),
                          class: selectTag.value === item.name ? "tag-checkable-checked tag-item" : "tag-item"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "tag-title" }, toDisplayString(item.name), 1),
                            createVNode("span", null, toDisplayString(item.value), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick", "class"]);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 24 }, {
                default: withCtx(() => [
                  selectTag.value ? (openBlock(), createBlock(_component_a_list, {
                    key: 0,
                    style: { width: "100%" }
                  }, {
                    header: withCtx(() => [
                      createTextVNode(" 共 " + toDisplayString(articleList.value.length) + " 篇文章 ", 1)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(articleList.value, (article, index) => {
                        return openBlock(), createBlock(_component_a_list_item, { key: index }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "result-item" }, [
                              createVNode("h3", { class: "result-item-title" }, [
                                createVNode("a", {
                                  href: article.url,
                                  class: "title",
                                  target: "_blank"
                                }, toDisplayString(article.title), 9, ["href"])
                              ]),
                              createVNode("p", { class: "result-item-description" }),
                              (openBlock(), createBlock(_component_ArticleMetadata, {
                                article,
                                key: unref(md5)(article.date.string)
                              }, null, 8, ["article"]))
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !selectTag.value ? (openBlock(), createBlock(_component_a_card, {
                    key: 1,
                    style: { width: "100%" },
                    class: "no-result"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 480 480"
                      }, [
                        createVNode("defs", null, [
                          createVNode("linearGradient", {
                            id: "a",
                            x1: "1.128",
                            y1: "0.988",
                            x2: "0.364",
                            y2: "1",
                            gradientUnits: "objectBoundingBox"
                          }, [
                            createVNode("stop", {
                              offset: "0",
                              "stop-color": "#e0e5ef",
                              "stop-opacity": "0"
                            }),
                            createVNode("stop", {
                              offset: "1",
                              "stop-color": "#e0e5ef"
                            })
                          ]),
                          createVNode("linearGradient", {
                            id: "c",
                            x1: "1",
                            y1: "0.5",
                            x2: "0.112",
                            y2: "1.125",
                            gradientUnits: "objectBoundingBox"
                          }, [
                            createVNode("stop", {
                              offset: "0",
                              "stop-color": "#fff",
                              "stop-opacity": "0"
                            }),
                            createVNode("stop", {
                              offset: "1",
                              "stop-color": "#747f95"
                            })
                          ]),
                          createVNode("linearGradient", {
                            id: "d",
                            x1: "-0.392",
                            y1: "1.114",
                            x2: "0.5",
                            y2: "0.396",
                            gradientUnits: "objectBoundingBox"
                          }, [
                            createVNode("stop", {
                              offset: "0",
                              "stop-color": "#fff",
                              "stop-opacity": "0"
                            }),
                            createVNode("stop", {
                              offset: "1",
                              "stop-color": "#ebedf5"
                            })
                          ]),
                          createVNode("linearGradient", {
                            id: "e",
                            x1: "-0.906",
                            y1: "1.646",
                            x2: "0.636",
                            y2: "0.061",
                            "xlink:href": "#d"
                          }),
                          createVNode("linearGradient", {
                            id: "f",
                            x1: "-0.109",
                            y1: "1.931",
                            x2: "0.736",
                            y2: "0.141",
                            "xlink:href": "#d"
                          })
                        ]),
                        createVNode("g", { transform: "translate(-135 -375)" }, [
                          createVNode("circle", {
                            cx: "184",
                            cy: "184",
                            r: "184",
                            transform: "translate(191 443)",
                            fill: "#f3f3fa"
                          }),
                          createVNode("path", {
                            d: "M2925,350h0c-8.837,0-16-32.235-16-72s7.163-72,16-72c.038,0,11.813.471,18.75-7.529s9-14.486,9-24.469c0-34.257,14.681-58.6,28.25-63.313,3.909-.688,10,.818,16-4.354s8-9.372,8-16.333c0-37.555,12.536-68,28-68s28,30.445,28,68c0,6.961-.667,10.328,5.333,15.5s14.76,4.5,18.667,5.187c13.569,4.714,24,33.055,24,67.312a101.212,101.212,0,0,0,2.333,20s4.485,11.842,11,5.5,9.13-14.885,10.25-22.871C3135.767,157.923,3142.61,142,3149,142c6.519,0,12.127,16.566,14.645,40.566.741,7.066,2.2,11.743,6.521,17.6A14.3,14.3,0,0,0,3180.92,206H3181c6.488,0,12.073,16.409,14.617,40.308.5,4.725.982,7.6,5.3,11.527S3212.884,262,3212.884,262l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573C3227.336,294.758,3229,311.835,3229,330c0,6.817-.237,13.546-.7,20H2925Zm303.3,0h0Z",
                            transform: "translate(-2718 397)",
                            fill: "url(#a)"
                          }),
                          createVNode("path", {
                            d: "M117,208H.7c-.466-6.453-.7-13.181-.7-20,0-18.163,1.664-35.24,4.686-48.083a58.6,58.6,0,0,1,5.086-14.573C11.745,121.8,13.84,120,16,120l.116,0s7.651-.242,11.967-4.166,4.8-6.8,5.3-11.527C35.927,80.408,41.513,64,48,64a16.6,16.6,0,0,0,3.3-1.014A6.153,6.153,0,0,0,53.365,61.5c6.515-6.342,9.13-14.884,10.25-22.871C66.8,15.924,73.642,0,80.032,0,86.55,0,92.158,16.566,94.676,40.567c.742,7.065,2.2,11.742,6.521,17.6A14.3,14.3,0,0,0,111.951,64h.081c6.487,0,12.073,16.409,14.617,40.307.5,4.725.983,7.6,5.3,11.527S143.915,120,143.915,120l.116,0c2.16,0,4.255,1.8,6.228,5.344a58.6,58.6,0,0,1,5.086,14.573c3.022,12.844,4.686,29.921,4.686,48.083,0,6.818-.237,13.546-.7,20H117Zm42.328,0h0ZM.7,208h0Z",
                            transform: "translate(350.969 539)",
                            fill: "url(#a)"
                          }),
                          createVNode("path", {
                            d: "M2989,62c-10.838-4.087-16.3,0-32,0-26.51,0-48-8.954-48-20s21.49-20,48-20h256a16,16,0,1,1,0,32s-15.5,0-27.5,3S3165,68.714,3165,68.714,3127.392,110,3081,110c-38.041,0-70.176-13.246-80.647-31.653C2998.219,74.6,2999.838,66.087,2989,62Z",
                            transform: "translate(-2702 701)",
                            fill: "#d1d6e2"
                          }),
                          createVNode("path", {
                            d: "M-2493,98s-56.355,45.651-64,16,74.25-17.75-16,72",
                            transform: "translate(3044 409)",
                            fill: "none",
                            stroke: "#909aa9",
                            "stroke-linecap": "round",
                            "stroke-width": "2",
                            "stroke-dasharray": "10"
                          }),
                          createVNode("path", {
                            d: "M4,2.2C7.15-.75,16,0,16,0s-1.5,4-2.6,8-.232,5.942-1.8,8C7.6,21.25,0,21,0,21s.75-3.4,2-8S.85,5.15,4,2.2Z",
                            transform: "translate(447 603.085)",
                            fill: "#909aa9"
                          }),
                          createVNode("ellipse", {
                            cx: "10",
                            cy: "4",
                            rx: "10",
                            ry: "4",
                            transform: "translate(294 787)",
                            fill: "url(#c)"
                          }),
                          createVNode("path", {
                            d: "M8.44,24s8.115-6,6.94-10S11.51,9.625,9.775,6.125A11.222,11.222,0,0,1,8.44,0S1.767,2.625,1.5,9.375C1.38,12.419,4.436,14.344,6.171,18A32.451,32.451,0,0,1,8.44,24Z",
                            transform: "translate(287 794.497) rotate(-90)",
                            fill: "#909aa9"
                          }),
                          createVNode("path", {
                            d: "M0,0,57,4.5,136,0l31.5,12,17,10-37,8.5-24.5-5-58,5L4,23Z",
                            transform: "translate(191 699)",
                            fill: "#fff"
                          }),
                          createVNode("path", {
                            d: "M-1.4,1.2,60,9l58.75-5.25L143,9l36-9V24.5L144.4,29l-16.2-7.25L95.6,23l-5.1,1.5L67.2,21.75,5,23.25S2.8,16.713,1.2,11.2-1.4,1.2-1.4,1.2Z",
                            transform: "translate(196 720)",
                            fill: "#eceff5"
                          }),
                          createVNode("ellipse", {
                            cx: "43",
                            cy: "9.5",
                            rx: "43",
                            ry: "9.5",
                            transform: "translate(253 701)",
                            fill: "#ebedf5"
                          }),
                          createVNode("g", { transform: "translate(63 354)" }, [
                            createVNode("g", { transform: "translate(258.49 305.55)" }, [
                              createVNode("path", {
                                d: "M525.021,66.584a31.23,31.23,0,0,1,7.085,10.425c2.772,6.6,5.877,13.459,8.386,14.78s3.695,10.033-8.053,8.185S525.021,66.584,525.021,66.584Z",
                                transform: "translate(-524.241 -66.584)",
                                fill: "#fff"
                              }),
                              createVNode("path", {
                                d: "M525.494,68.3a32.341,32.341,0,0,1,6.953,16.851c.847,8.628,2.933,13.332,5.151,13.016a12.659,12.659,0,0,1-5.991-.025C528.092,97.37,524.074,68.412,525.494,68.3Z",
                                transform: "translate(-523.763 -65.64)",
                                fill: "url(#d)"
                              })
                            ]),
                            createVNode("path", {
                              d: "M537.949,131.675a34.415,34.415,0,0,0,14.137,1.09c6.9-.975,8.727-13.747-.647-15.059-7.267-1.02-6.026-12.167-7.366-22.433s-6.56-18.848-7.364-23.026,4.251-9.233,3.614-18.062c-.652-9.065-6.3-10.479-8.307-10.074s-3.609,2.392-6.154,3.47-6.292-.673-11.112,1.619-9.377,7.547-9.377,7.547c-2.009,2.561.4,10.648-.938,14.691s-6.694,39.223-6.56,49.062,6.426,16.715,19.952,18.467,19.419-.606,19.856-4.448c.279-2.443,1.905-11.053-7.8-12.535-4.83-.74-7.363-1.347-7.363-1.347",
                              transform: "translate(-279.872 225.445)",
                              fill: "#fff"
                            }),
                            createVNode("path", {
                              d: "M519.206,44.961s.961-1.578,1.726-1.594c1.313-.026,2.7,1.631,2.7,1.631S519.249,46.731,519.206,44.961Z",
                              transform: "translate(-268.363 226.187)",
                              fill: "#757f95"
                            }),
                            createVNode("path", {
                              d: "M522.077,37.922c-2.054-.536-2.278,2.085-2.278,2.085s-2.89-.313-2.6,1.743c.357,2.566,5.831,2.443,5.831,2.443S524.583,38.578,522.077,37.922Z",
                              transform: "translate(-269.464 223.151)",
                              fill: "#757f95"
                            }),
                            createVNode("path", {
                              d: "M505.743,52.715s-6.088-1.338-6.755,3.318,4.181,7.509,7.656.6",
                              transform: "translate(-279.292 231.235)",
                              fill: "#fff"
                            }),
                            createVNode("path", {
                              d: "M503.084,74.624s-1.45,17.9,1.1,22.385c2.3,4.044,10.662,5.138,16.755,4.63a25.038,25.038,0,0,0,6.013-1.246c6.068-2.157,2.831-6.2,0-8.893s-3.738-10.346-8.593-14.5",
                              transform: "translate(-276.501 243.626)",
                              fill: "url(#e)"
                            }),
                            createVNode("path", {
                              d: "M514.078,48.635a.6.6,0,0,0-.522.31v0l-.009.014a4.814,4.814,0,0,1-3.228,2.322l-.019,0,0,0a.6.6,0,0,0-.509.5l-.011,0-.406,1.078s.341-.014.842-.088l.057-.307.11-.584v.865c.188-.031.389-.073.6-.121v-.747l.064.454.037.268a5.609,5.609,0,0,0,2.386-1.138,4.083,4.083,0,0,0,1.152-1.977c.04-.155.054-.248.054-.248A.6.6,0,0,0,514.078,48.635Z",
                              transform: "translate(-273.668 229.087)",
                              fill: "#757f95"
                            }),
                            createVNode("path", {
                              d: "M531.516,76.393c-3.6-3.507-6.766.555-6.766.555s-6.2-4.888-8.5.26C513.373,83.63,528.051,94,528.051,94S535.2,79.982,531.516,76.393Z",
                              transform: "translate(-270.216 243.516)",
                              fill: "url(#f)"
                            }),
                            createVNode("path", {
                              d: "M504.118,75.051s5.02,15.274,7.571,19.76c3.236,5.688,9.468,8.51,15.533,6.355s2.831-5.527,0-8.223S523.148,81.155,518.293,77",
                              transform: "translate(-277.496 242.564)",
                              fill: "#fff"
                            })
                          ]),
                          createVNode("path", {
                            d: "M0,9.833l18-9.5,2.667,4v8.2L13,18,8.167,12.532,0,13.671Z",
                            transform: "translate(377 777)",
                            fill: "#eceff5"
                          }),
                          createVNode("path", {
                            d: "M4,3.167,18,0V10l-5,3.167-4.833-4L0,10Z",
                            transform: "translate(377 777)",
                            fill: "#fff"
                          }),
                          createVNode("path", {
                            d: "M-.211,18.893,16,12l.246,14.107-2.084,4.646L0,31Z",
                            transform: "matrix(1, 0.017, -0.017, 1, 400.376, 734.864)",
                            fill: "#eceff5"
                          }),
                          createVNode("path", {
                            d: "M9.75,12H16l-3.75,7H0Z",
                            transform: "translate(400 735)",
                            fill: "#fff"
                          }),
                          createVNode("g", { transform: "translate(447 690)" }, [
                            createVNode("path", {
                              d: "M97,0,63.923,4.5,24.316,0,8.523,12,0,22l18.55,8.5,12.283-5,29.079,5,23.488-5,6.467-12.126Z",
                              transform: "translate(-1 12)",
                              fill: "#fff"
                            }),
                            createVNode("path", {
                              d: "M81.149.607l-28.1,3.945L26.17,1.9l-11.1,2.655L-2.651-1.333V12.391l17.083,2.276L21.846,11l14.917.632,2.334.759L49.759,11l28.991,1.391s-1.4-1.778,0-4.724A43.992,43.992,0,0,0,81.149.607Z",
                              transform: "translate(1.651 35.333)",
                              fill: "#eceff5"
                            })
                          ])
                        ])
                      ])),
                      createVNode("p", null, "点击上方标签，查看标签下的所有文章")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = Tag_vue_vue_type_script_setup_true_lang_default.setup;
Tag_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/pages/Tag.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc$1(Tag_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-90cfa902"]]);
const __pageData = JSON.parse('{"title":"我的标签","description":"","frontmatter":{"title":"我的标签","aside":false,"editLink":false,"lastUpdated":false,"showComment":false},"headers":[],"relativePath":"tags.md","filePath":"tags.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "tags.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Tag = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Tag, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Tag)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tags.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tags = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tags as default
};
