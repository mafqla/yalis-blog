import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const _imports_0 = "/assets/image-20220711200702464.TZkhJcjv.png";
const __pageData = JSON.parse('{"title":"ESBuild","description":"","frontmatter":{"title":"ESBuild","date":"2022-8-21 18:51","tags":["vite","ESBuild"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/05-esBuild.md","filePath":"knowledge/build-tools/02-vite/05-esBuild.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "knowledge/build-tools/02-vite/05-esBuild.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-esbuild" tabindex="-1">5.ESBuild <a class="header-anchor" href="#_5-esbuild" aria-label="Permalink to &quot;5.ESBuild&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 33
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
            words: 33
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>ESBuild的特点： <ul><li>超快的构建速度，并且不需要缓存； 支持ES6和CommonJS的模块化；</li><li>支持ES6的Tree Shaking；</li><li>支持Go、JavaScript的API；</li><li>支持TypeScript、JSX等语法编译；</li><li>支持SourceMap；</li><li>支持代码压缩；</li><li>支持扩展其他插件；</li></ul></li><li>ESBuild的构建速度: <ul><li>ESBuild的构建速度和其他构建工具速度对比：</li><li><img${ssrRenderAttr("src", _imports_0)} alt="image-20220711200702464" loading="lazy"></li><li>ESBuild为什么这么快呢？ <ul><li><strong>使用Go语言编写的，可以直接转换成机器代码，而无需经过字节码；</strong></li><li>ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行；</li><li>ESBuild的所有内容都是从零开始编写的，而不是使用第三方，所以从一开始就可以考虑各种性能问题；</li></ul></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/02-vite/05-esBuild.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _05EsBuild = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _05EsBuild as default
};
