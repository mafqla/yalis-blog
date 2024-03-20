import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"补充","description":"","frontmatter":{"title":"补充","date":"2022-8-21 18:51","tags":["webpack"]},"headers":[],"relativePath":"knowledge/build-tools/01-webpack/05-support.md","filePath":"knowledge/build-tools/01-webpack/05-support.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "knowledge/build-tools/01-webpack/05-support.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-补充" tabindex="-1">5. 补充 <a class="header-anchor" href="#_5-补充" aria-label="Permalink to &quot;5. 补充&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 46
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
            words: 46
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="_5-1-webpack的代码分包" tabindex="-1">5.1 Webpack的代码分包 <a class="header-anchor" href="#_5-1-webpack的代码分包" aria-label="Permalink to &quot;5.1 Webpack的代码分包&quot;">​</a></h2><ul><li><p>默认的打包过程：</p><ul><li><p>默认情况下，在构建整个组件树的过程中，因为组件和组件之间是通过模块化直接依赖的，那么webpack在打包时就会将组 件模块打包到一起（比如一个app.js文件中）；</p></li><li><p>这个时候随着项目的不断庞大，app.js文件的内容过大，会造成首屏的渲染速度变慢；</p></li></ul></li><li><p>打包时，代码的分包：</p><ul><li><p>所以，对于一些不需要立即使用的组件，我们可以单独对它们进行拆分，拆分成一些小的代码块chunk.js；</p></li><li><p>这些chunk.js会在需要时从服务器加载下来，并且运行代码，显示对应的内容；</p></li></ul></li><li><p>vue在打包的时候我们可以在main.js使用<strong>import</strong> 解决</p><ul><li><p>通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#89DDFF" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">./12_异步组件的使用/utils/math</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}">then</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">res</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#BABED8" })}">console</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}">log</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#BABED8" })}">res</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}">sum</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">20</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 30</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">))</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">)</span></span></code></pre></div></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/01-webpack/05-support.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _05Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _05Support as default
};
