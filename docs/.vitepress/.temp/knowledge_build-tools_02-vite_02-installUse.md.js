import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"vite 的安装和使用","description":"","frontmatter":{"title":"vite 的安装和使用","date":"2022-8-21 18:51","tags":["vite"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/02-installUse.md","filePath":"knowledge/build-tools/02-vite/02-installUse.md","lastUpdated":1703042783000}');
const _sfc_main = { name: "knowledge/build-tools/02-vite/02-installUse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-vite-的安装和使用" tabindex="-1">2.vite 的安装和使用 <a class="header-anchor" href="#_2-vite-的安装和使用" aria-label="Permalink to &quot;2.vite 的安装和使用&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 58
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
            words: 58
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><p>安装 vite</p><ul><li><p>使用 NPM:</p></li><li><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> –g</span><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> # 全局安装</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> –D</span><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> # 局部安装</span></span></code></pre></div></li><li><p>使用 yarn：</p></li><li><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> –g</span><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> # 全局安装</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> –D</span><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> # 局部安装</span></span></code></pre></div></li></ul></li><li><p>通过 vite 启动项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">npx</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span></span></code></pre></div></li><li><p>使用 vite 创建项目</p><ul><li><p>使用 NPM:</p></li><li><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> create</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite@latest</span></span></code></pre></div></li><li><p>使用 Yarn:</p></li><li><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> create</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span></span></code></pre></div></li><li><p>使用 PNPM:</p></li><li><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#FFCB6B" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> create</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> vite</span></span></code></pre></div></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/build-tools/02-vite/02-installUse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02InstallUse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02InstallUse as default
};
