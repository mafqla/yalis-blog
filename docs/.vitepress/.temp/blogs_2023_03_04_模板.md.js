import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"模板","description":"","frontmatter":{"title":"模板","author":"yalis","date":"2023-03-04 22:18","categories":["template"],"tags":["template"],"lastUpdated":true,"isTop":true},"headers":[],"relativePath":"blogs/2023/03/04/模板.md","filePath":"blogs/2023/03/04/模板.md","lastUpdated":1704252510000}');
const _sfc_main = { name: "blogs/2023/03/04/模板.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="模板" tabindex="-1">模板 `);
  _push(ssrRenderComponent(_component_Badge, {
    text: "持续更新",
    type: "warning"
  }, null, _parent));
  _push(` <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板 &lt;Badge text=&quot;持续更新&quot; type=&quot;warning&quot; /&gt;&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 107
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
            words: 107
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="md文件头" tabindex="-1">md文件头 <a class="header-anchor" href="#md文件头" aria-label="Permalink to &quot;md文件头&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#FFCB6B" })}">---</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">title</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ‘标题’</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">author</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ‘作者’ 格式：yalis</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">date</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ‘日期’ 格式：2023-03-04 22:18</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">categories</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  -</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ‘分类’  格式：- mermaid</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">tags</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  -</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ‘标签’ 格式：- mermaid</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">showArticleMetadata</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> ’是否显示文章元数据’ 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">editLink</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> false 是否显示编辑链接 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">lastUpdated</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> true 是否显示最后更新时间 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">showComment</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> false 是否显示评论 格式：false｜｜true</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">// 以下为可选项</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">isTop</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> false 是否置顶 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">isOriginal</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> false 是否原创 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">isArticle</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}"> false 是否文章 格式：false｜｜true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#FFCB6B" })}">---</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-s3zvb" id="tab-zWvffq6" checked="checked"><label for="tab-zWvffq6">正例</label><input type="radio" name="group-s3zvb" id="tab-Q5ksRbI"><label for="tab-Q5ksRbI">反例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}">SELECT</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}"> FROM</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> \`</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">sys_user</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}"> WHERE</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> \`</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">email</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">charles7c@126.com</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}"> LIMIT</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}">LIMIT</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}"> 进行限制</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}">SELECT</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> *</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}"> FROM</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> \`</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">sys_user</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#F78C6C" })}"> WHERE</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> \`</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">user_id</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">;</span></span></code></pre></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blogs/2023/03/04/模板.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};
