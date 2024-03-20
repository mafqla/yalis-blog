import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"我的博客","description":"","frontmatter":{"showArticleMetadata":false,"editLink":false,"lastUpdated":false,"showComment":false,"categories":["Blog"],"tags":["Blog","Yali"]},"headers":[],"relativePath":"blogs/index.md","filePath":"blogs/index.md","lastUpdated":1705972069000}');
const _sfc_main = { name: "blogs/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="我的博客" tabindex="-1">我的博客 <a class="header-anchor" href="#我的博客" aria-label="Permalink to &quot;我的博客&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 27
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
            words: 27
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这是我的博客, 用于记录一些技术文章.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>帕鲁守则： 1.帕鲁大陆最不缺的就是帕鲁，你不干有的是帕鲁干。 2.让一个帕鲁全天候高强度工作，累倒后卖掉换新的帕鲁，会有更高的效益。 3.与其花费大量材料成本买药给帕鲁治病，不如把他卖掉，换成新的帕鲁，会有更高的效益。 4.不想跑太远去卖帕鲁的话，可以把病倒的不干活的帕鲁肢解掉，切出来的肉还可以喂给新来干活的帕鲁。 5.帕鲁并不需要很好的居住环境和进食，所以只要随地放个草垛子，喂点浆果就可以了，如果有帕鲁闹情绪，那是他不识好歹，卖了它。 6.帕鲁生来就是为我们训练家工作的，不能为训练家效力的帕鲁没有存在的价值，让他们自己刷新掉吧。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blogs/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
