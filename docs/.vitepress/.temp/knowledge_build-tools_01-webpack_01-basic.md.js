import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const _imports_0 = "/assets/image-20210207234927772.Nn6L3jkQ.png";
const __pageData = JSON.parse('{"title":"webpack","description":"","frontmatter":{"title":"webpack","date":"2022-8-21 18:51","tags":["webpack"]},"headers":[],"relativePath":"knowledge/build-tools/01-webpack/01-basic.md","filePath":"knowledge/build-tools/01-webpack/01-basic.md","lastUpdated":1706691046000}');
const _sfc_main = { name: "knowledge/build-tools/01-webpack/01-basic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="webpack的基础知识" tabindex="-1">webpack的基础知识 <a class="header-anchor" href="#webpack的基础知识" aria-label="Permalink to &quot;webpack的基础知识&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 52
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
            words: 52
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p><a href="https://webpack.docschina.org/" target="_blank" rel="noreferrer">webpack官网</a></p><ul><li>现代 javascript 应用程序的 <strong>静态模块打包器 (module bundler)</strong></li><li>打包bundler：webpack可以将帮助我们进行打包，所以它是一个打包工具</li><li>静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；</li><li>模块化module：webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等；</li></ul><blockquote><h2 id="webpack能做什么" tabindex="-1">==webpack能做什么== <a class="header-anchor" href="#webpack能做什么" aria-label="Permalink to &quot;==webpack能做什么==&quot;">​</a></h2></blockquote><p>把很多文件打包整合到一起, 缩小项目体积, 提高加载速度</p><p><img${ssrRenderAttr("src", _imports_0)} alt="image-20210207234927772" loading="lazy"></p><p>其中功能:</p><ul><li><p>less/sass -&gt; css</p></li><li><p>ES6/7/8 -&gt; ES5</p></li><li><p>html/css/js -&gt; 压缩合并</p></li><li><p>资源文件img、font：</p><ul><li><p>图片img文件的加载；</p></li><li><p>字体font文件的加载；</p></li></ul></li></ul><ul><li><p>HTML资源的处理：</p><ul><li>打包HTML资源文件；</li></ul></li><li><p>处理vue项目的SFC文件.vue文件；</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/01-webpack/01-basic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01Basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01Basic as default
};
