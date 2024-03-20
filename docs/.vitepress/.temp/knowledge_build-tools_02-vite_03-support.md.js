import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"vite 的支持","description":"","frontmatter":{"title":"vite 的支持","date":"2022-8-21 18:51","tags":["vite"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/03-support.md","filePath":"knowledge/build-tools/02-vite/03-support.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "knowledge/build-tools/02-vite/03-support.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-vite-的支持" tabindex="-1">3.vite 的支持 <a class="header-anchor" href="#_3-vite-的支持" aria-label="Permalink to &quot;3.vite 的支持&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 133
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
            words: 133
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="_3-1-vite-对-css-的支持" tabindex="-1">3.1 vite 对 css 的支持 <a class="header-anchor" href="#_3-1-vite-对-css-的支持" aria-label="Permalink to &quot;3.1 vite 对 css 的支持&quot;">​</a></h2><ul><li><p>vite 可以直接支持 css 的处理</p><ul><li>直接导入 css 即可；</li></ul></li><li><p>vite 可以直接支持 css 预处理器，比如 less</p><ul><li><p>直接导入 less；</p></li><li><p>之后安装 less 编译器；</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}"> npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> less</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C3E88D" })}"> -D</span></span></code></pre></div></li><li><p>vite 直接支持 postcss 的转换：</p></li><li><p>只需要安装 postcss，并且配置 postcss.config.js 的配置文件即可；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}"> npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> postcss</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> postcss-preset-env</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C3E88D" })}"> -D</span></span></code></pre></div></li></ul><h2 id="_3-2-vite-对-typescript-的支持" tabindex="-1">3.2 Vite 对 TypeScript 的支持 <a class="header-anchor" href="#_3-2-vite-对-typescript-的支持" aria-label="Permalink to &quot;3.2 Vite 对 TypeScript 的支持&quot;">​</a></h2><ul><li>vite 对 TypeScript 是原生支持的，它会直接使用 ESBuild 来完成编译：</li><li>只需要直接导入即可；</li><li>如果我们查看浏览器中的请求，会发现请求的依然是 ts 的代码：</li><li>这是因为 vite 中的服务器 Connect 会对我们的请求进行转发；</li><li>获取 ts 编译后的代码，给浏览器返回，浏览器可以直接进行解析；</li><li>注意：在 vite2 中，已经不再使用 Koa 了，而是使用 Connect 来搭建的服务器</li></ul><h2 id="_3-3vite-对-vue-的支持" tabindex="-1">3.3Vite 对 vue 的支持 <a class="header-anchor" href="#_3-3vite-对-vue-的支持" aria-label="Permalink to &quot;3.3Vite 对 vue 的支持&quot;">​</a></h2><ul><li><p>vite 对 vue 提供第一优先级支持：</p><ul><li>Vue 3 单文件组件支持：@vitejs/plugin-vue</li><li>Vue 3 JSX 支持：@vitejs/plugin-vue-jsx</li><li>Vue 2 支持：underfin/vite-plugin-vue2</li></ul></li><li><p>安装支持 vue 的插件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> @vitejs/plugin-vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#C3E88D" })}"> -D</span></span></code></pre></div></li><li><p>在 vite.config.js 中配置插件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">@vitejs/plugin-vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#89DDFF" })}">module</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#89DDFF" })}">exports</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">  plugins</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> [</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}">vue</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">()]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/02-vite/03-support.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03Support as default
};
