import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const _imports_0 = "/assets/1.v7SCVkz_.image";
const _imports_1 = "/assets/2.brX84qmU.image";
const _imports_2 = "/assets/3.OoWH8_aO.image";
const _imports_3 = "/assets/4.1G-pc1J_.image";
const _imports_4 = "/assets/5.SFe91ezL.image";
const _imports_5 = "/assets/6.nYYcLg_6.image";
const __pageData = JSON.parse('{"title":"快速上手——从0到1掌握算法面试需要的数据结构（三）","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/4-快速上手——从0到1掌握算法面试需要的数据结构（三）.md","filePath":"knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/4-快速上手——从0到1掌握算法面试需要的数据结构（三）.md","lastUpdated":1704161604000}');
const _sfc_main = { name: "knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/4-快速上手——从0到1掌握算法面试需要的数据结构（三）.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速上手——从0到1掌握算法面试需要的数据结构-三" tabindex="-1">快速上手——从0到1掌握算法面试需要的数据结构（三） <a class="header-anchor" href="#快速上手——从0到1掌握算法面试需要的数据结构-三" aria-label="Permalink to &quot;快速上手——从0到1掌握算法面试需要的数据结构（三）&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 1,
            words: 207
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
            words: 207
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>本节我们一起来认识一下树与二叉树。<br></p><p><a name="4175d9d6"></a></p><h2 id="理解树结构" tabindex="-1">理解树结构 <a class="header-anchor" href="#理解树结构" aria-label="Permalink to &quot;理解树结构&quot;">​</a></h2><p><br>在理解计算机世界的树结构之前，大家不妨回忆一下现实世界中的树有什么特点：一棵树往往只有一个树根，向上生长后，却可以伸展出无数的树枝、树枝上会长出树叶。由树根从泥土中吸收水、无机盐等营养物质，源源不断地输送到树枝与树叶的那一端。一棵树往往呈现这样的基本形态：<br><br><img${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy"><br>数据结构中的树，首先是对现实世界中树的一层简化：把树根抽象为“根结点”，树枝抽象为“边”，树枝的两个端点抽象为“结点”，树叶抽象为“叶子结点”。抽象后的树结构如下：<br><br><img${ssrRenderAttr("src", _imports_1)} alt="" loading="lazy"><br>把这棵抽象后的树颠倒一下，就得到了计算机中的树结构：<br><br><img${ssrRenderAttr("src", _imports_2)} alt="" loading="lazy"><br><br>结合这张图，我们来讲解树的关键特性和重点概念。希望大家可以牢记以下几点：<br></p><ul><li>树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层，以此类推。</li><li>结点和树的“高度”计算规则：叶子结点高度记为1，每向上一层高度就加1，逐层向上累加至目标结点时，所得到的的值就是目标结点的高度。树中结点的最大高度，称为“树的高度”。</li><li>“度”的概念：一个结点开叉出去多少个子树，被记为结点的“度”。比如我们上图中，根结点的“度”就是3。</li><li>“叶子结点”：叶子结点就是度为0的结点。在上图中，最后一层的结点的度全部为0，所以这一层的结点都是叶子结点。</li></ul><p><a name="aa301582"></a></p><h2 id="理解二叉树结构" tabindex="-1">理解二叉树结构 <a class="header-anchor" href="#理解二叉树结构" aria-label="Permalink to &quot;理解二叉树结构&quot;">​</a></h2><p><br>二叉树是指满足以下要求的树：<br></p><ul><li>它可以没有根结点，作为一棵空树存在</li><li>如果它不是空树，那么<strong>必须由根结点、左子树和右子树组成，且左右子树都是二叉树</strong>。如下图：<br><img${ssrRenderAttr("src", _imports_3)} alt="" loading="lazy"><br> 注意，<strong>二叉树不能被简单定义为每个结点的度都是2的树</strong>。普通的树并不会区分左子树和右子树，但在二叉树中，左右子树的位置是严格约定、不能交换的。对应到图上来看，也就意味着 B 和 C、D 和 E、F 和 G 是不能互换的。</li></ul><p><a name="f302bdd8"></a></p><h2 id="二叉树的编码实现" tabindex="-1">二叉树的编码实现 <a class="header-anchor" href="#二叉树的编码实现" aria-label="Permalink to &quot;二叉树的编码实现&quot;">​</a></h2><p><br>在 JS 中，二叉树使用对象来定义。它的结构分为三块：<br></p><ul><li>数据域</li><li>左侧子结点（左子树根结点）的引用</li><li>右侧子结点（右子树根结点）的引用</li></ul><p><br>在定义二叉树构造函数时，我们需要把左侧子结点和右侧子结点都预置为空：<br></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">// 二叉树结点的构造函数</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> TreeNode</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">val</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#89DDFF" })}">    this</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}">val</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> val</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#89DDFF" })}">    this</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}">left</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#89DDFF" })}"> this</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}">right</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#89DDFF" })}"> null</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p><br>当你需要新建一个二叉树结点时，直接调用构造函数、传入数据域的值就行了：<br></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#BABED8" })}"> node</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}">  =</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> TreeNode</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#BABED8" })}">)</span></span></code></pre></div><p><br>如此便能得到一个值为 1 的二叉树结点，从结构上来说，它长这样：<br><br><img${ssrRenderAttr("src", _imports_4)} alt="" loading="lazy"><br><br>以这个结点为根结点，我们可以通过给 left/right 赋值拓展其子树信息，延展出一棵二叉树。因此从更加细化的角度来看，一棵二叉树的形态实际是这样的：<br><img${ssrRenderAttr("src", _imports_5)} alt="" loading="lazy"><br><br>现在各位已经掌握了做二叉树面试题所需要的一系列前置知识。接下来我会带大家一起通过写代码的方式，来搞定二叉树系列里最首当其冲、同时相当热门的考点——二叉树的遍历。</p><p>（阅读过程中有任何想法或疑问，或者单纯希望和笔者交个朋友啥的，欢迎大家添加我的微信xyalinode与我交流哈~）</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/4-快速上手——从0到1掌握算法面试需要的数据结构（三）.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4________0_1________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4________0_1________________ as default
};
