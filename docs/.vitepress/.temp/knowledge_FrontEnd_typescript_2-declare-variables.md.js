import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"TypeScript 声明变量","description":"","frontmatter":{"title":"TypeScript 声明变量","date":"2022-8-21 18:51","tags":["typescript"]},"headers":[],"relativePath":"knowledge/FrontEnd/typescript/2-declare-variables.md","filePath":"knowledge/FrontEnd/typescript/2-declare-variables.md","lastUpdated":1706627319000}');
const _sfc_main = { name: "knowledge/FrontEnd/typescript/2-declare-variables.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-typescript-声明变量" tabindex="-1">2.TypeScript 声明变量 <a class="header-anchor" href="#_2-typescript-声明变量" aria-label="Permalink to &quot;2.TypeScript 声明变量&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 2,
            words: 316
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (((_c = _ctx.$frontmatter) == null ? void 0 : _c.aside) ?? true) && (((_d = _ctx.$frontmatter) == null ? void 0 : _d.showArticleMetadata) ?? true) ? (openBlock(), createBlock(_component_ArticleMetadata, {
            key: 0,
            article: _ctx.$frontmatter,
            readTime: 2,
            words: 316
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>TypeScript 声明变量需要指定<code>标识符</code>的类型</li><li>声明了类型后 TypeScript 就会进行类型检测，声明的类型可以称之为类型注解； <ul><li>完整格式为：<code>let\\const 标识符: 数据类型 = 赋值</code>;不建议使用 var</li></ul></li></ul><p><code>示例：</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> myname</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">why</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> myage</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 20</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#BABED8" })}"> myheight</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 1.88</span></span></code></pre></div><h2 id="_2-1-变量的类型推导-推断" tabindex="-1">2.1 变量的类型推导（推断） <a class="header-anchor" href="#_2-1-变量的类型推导-推断" aria-label="Permalink to &quot;2.1 变量的类型推导（推断）&quot;">​</a></h2><p>在开发中，有时候为了方便起见我们并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过 TypeScript 本身的 特性帮助我们推断出对应的变量类型：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> message</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">Hello World</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span></code></pre></div><p>如果我们给 message 赋值 123：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}">message</span><span style="${ssrRenderStyle({ "--shiki-light": "#56B6C2", "--shiki-dark": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D19A66", "--shiki-dark": "#F78C6C" })}"> 123</span><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> //报错</span></span></code></pre></div><p>这是因为在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型：</p><p>上面的 message 就是因为后面赋值的是一个 string 类型，所以 message 虽然没有明确的说明，但是依然是一个 string 类型；</p><h2 id="_2-2-命名空间" tabindex="-1">2.2 命名空间 <a class="header-anchor" href="#_2-2-命名空间" aria-label="Permalink to &quot;2.2 命名空间&quot;">​</a></h2><p>命名空间在 TypeScript 早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名 冲突的问题</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">export</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> namespace</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> Time</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">  export</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> format</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">time</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">2022-02-22</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="_2-3-类型" tabindex="-1">2.3 类型 <a class="header-anchor" href="#_2-3-类型" aria-label="Permalink to &quot;2.3 类型&quot;">​</a></h2><p><code>类型的查找</code></p><ul><li>我们这里先给大家介绍另外的一种 typescript 文件：.d.ts 文件 <ul><li>我们之前编写的 typescript 文件都是 .ts 文件，这些文件最终会输出 .js 文件，也是我们通常编写代码的地方；</li><li>还有另外一种文件 .d.ts 文件，它是用来做类型的声明(declare)。 它仅仅用来做类型检测，告知 typescript 我们有哪 些类型；</li></ul></li><li>那么 typescript 会在哪里查找我们的类型声明呢？ <ul><li>内置类型声明；</li><li>外部定义类型声明；</li><li>自己定义类型声明；</li></ul></li></ul><p><code>内置类型声明:</code></p><ul><li><p>内置类型声明是 typescript 自带的、帮助我们内置了 JavaScript 运行时的一些标准化 API 的声明文件；</p><ul><li>包括比如 Math、Date 等内置类型，也包括 DOM API，比如 Window、Document 等；</li></ul></li><li><p>内置类型声明通常在我们安装 typescript 的环境中会带有的；</p><ul><li><a href="https://github.com/microsoft/TypeScript/tree/main/lib" target="_blank" rel="noreferrer">https://github.com/microsoft/TypeScript/tree/main/lib</a></li></ul></li></ul><p><code>外部定义类型声明与自定义类型声明:</code></p><ul><li><p>外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明。</p></li><li><p>这些库通常有两种类型声明方式：</p></li><li><p>方式一：在自己库中进行类型声明（编写.d.ts 文件），比如 axios</p></li><li><p>方式二：通过社区的一个公有库 DefinitelyTyped 存放类型声明文件</p><ul><li><p>该库的 GitHub 地址：<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">https://github.com/DefinitelyTyped/DefinitelyTyped/</a></p></li><li><p>该库查找声明安装方式的地址：<a href="https://www.typescriptlang.org/dt/search?search=" target="_blank" rel="noreferrer">https://www.typescriptlang.org/dt/search?search=</a></p></li><li><p>比如我们安装 react 的类型声明： npm i @types/react --save-dev</p></li></ul></li><li><p>什么情况下需要自己来定义声明文件呢？</p><ul><li><p>情况一：我们使用的第三方库是一个纯的 JavaScript 库，没有对应的声明文件；比如 lodash</p></li><li><p>情况二：我们给自己的代码中声明一些类型，方便在其他地方直接进行使用；</p></li></ul></li></ul><h2 id="_2-4-声明" tabindex="-1">2.4 声明 <a class="header-anchor" href="#_2-4-声明" aria-label="Permalink to &quot;2.4 声明&quot;">​</a></h2><p><code>声明变量-函数-类</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">// 声明变量/函数/类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> let</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> whyName</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> let</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> whyAge</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> let</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8" })}"> whyHeight</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> whyFoo</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">():</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> void</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> Person</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">  name</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#F07178" })}">  age</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">  constructor</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">name</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}"> age</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> number</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">}</span></span></code></pre></div><p><code>声明模块</code></p><ul><li><p>我们也可以声明模块，比如 lodash 模块默认不能使用的情况，可以自己来声明这个模块：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">// 声明模块</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">lodash</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">  export</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> join</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">arr</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">[]</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">):</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> void</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">}</span></span></code></pre></div></li><li><p>声明模块的语法: declare module &#39;模块名&#39; {}。</p><ul><li>在声明模块的内部，我们可以通过 export 导出对应库的类、函数等</li></ul></li></ul><p><code>声明文件:</code></p><ul><li><p>在某些情况下，我们也可以声明文件：</p><ul><li><p>比如在开发 vue 的过程中，默认是不识别我们的.vue 文件的，那么我们就需要对其进行文件的声明；</p></li><li><p>比如在开发中我们使用了 jpg 这类图片文件，默认 typescript 也是不支持的，也需要对其进行声明；</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">// 声明文件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">*.jpg</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">*.jpeg</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">*.png</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">*.svg</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> module</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#C3E88D" })}">*.gif</span><span style="${ssrRenderStyle({ "--shiki-light": "#98C379", "--shiki-dark": "#89DDFF" })}">&#39;</span></span></code></pre></div></li></ul></li></ul><p><code>declare命名空间:</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#7F848E", "--shiki-dark": "#676E95", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">// 声明命名空间</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}">declare</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> namespace</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> $</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#89DDFF", "--shiki-light-font-style": "inherit", "--shiki-dark-font-style": "italic" })}">  export</span><span style="${ssrRenderStyle({ "--shiki-light": "#C678DD", "--shiki-dark": "#C792EA" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#61AFEF", "--shiki-dark": "#82AAFF" })}"> ajax</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E06C75", "--shiki-dark": "#BABED8", "--shiki-light-font-style": "italic", "--shiki-dark-font-style": "italic" })}">settings</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#89DDFF" })}">):</span><span style="${ssrRenderStyle({ "--shiki-light": "#E5C07B", "--shiki-dark": "#FFCB6B" })}"> any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#ABB2BF", "--shiki-dark": "#F07178" })}">}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/typescript/2-declare-variables.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2DeclareVariables = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2DeclareVariables as default
};
