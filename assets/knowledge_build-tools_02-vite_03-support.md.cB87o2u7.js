import{_ as p}from"./chunks/ArticleMetadata.1VcEe8Bb.js";import{_ as h,D as o,o as a,c as r,I as k,w as d,k as t,a as c,U as u,b as v,e as g}from"./chunks/framework.5FtAyiyV.js";import"./chunks/index.w40geAFS.js";import"./chunks/index.yNJctKkT.js";import"./chunks/commonjsHelpers.5-cIlDoe.js";const j=JSON.parse('{"title":"vite 的支持","description":"","frontmatter":{"title":"vite 的支持","date":"2022-8-21 18:51","tags":["vite"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/03-support.md","filePath":"knowledge/build-tools/02-vite/03-support.md","lastUpdated":1704252510000}'),y={name:"knowledge/build-tools/02-vite/03-support.md"},m=t("h1",{id:"_3-vite-的支持",tabindex:"-1"},[c("3.vite 的支持 "),t("a",{class:"header-anchor",href:"#_3-vite-的支持","aria-label":'Permalink to "3.vite 的支持"'},"​")],-1),D=u(`<h2 id="_3-1-vite-对-css-的支持" tabindex="-1">3.1 vite 对 css 的支持 <a class="header-anchor" href="#_3-1-vite-对-css-的支持" aria-label="Permalink to &quot;3.1 vite 对 css 的支持&quot;">​</a></h2><ul><li><p>vite 可以直接支持 css 的处理</p><ul><li>直接导入 css 即可；</li></ul></li><li><p>vite 可以直接支持 css 预处理器，比如 less</p><ul><li><p>直接导入 less；</p></li><li><p>之后安装 less 编译器；</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#FFCB6B;"> npm</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> install</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> less</span><span style="--shiki-light:#D19A66;--shiki-dark:#C3E88D;"> -D</span></span></code></pre></div></li><li><p>vite 直接支持 postcss 的转换：</p></li><li><p>只需要安装 postcss，并且配置 postcss.config.js 的配置文件即可；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#FFCB6B;"> npm</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> install</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> postcss</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> postcss-preset-env</span><span style="--shiki-light:#D19A66;--shiki-dark:#C3E88D;"> -D</span></span></code></pre></div></li></ul><h2 id="_3-2-vite-对-typescript-的支持" tabindex="-1">3.2 Vite 对 TypeScript 的支持 <a class="header-anchor" href="#_3-2-vite-对-typescript-的支持" aria-label="Permalink to &quot;3.2 Vite 对 TypeScript 的支持&quot;">​</a></h2><ul><li>vite 对 TypeScript 是原生支持的，它会直接使用 ESBuild 来完成编译：</li><li>只需要直接导入即可；</li><li>如果我们查看浏览器中的请求，会发现请求的依然是 ts 的代码：</li><li>这是因为 vite 中的服务器 Connect 会对我们的请求进行转发；</li><li>获取 ts 编译后的代码，给浏览器返回，浏览器可以直接进行解析；</li><li>注意：在 vite2 中，已经不再使用 Koa 了，而是使用 Connect 来搭建的服务器</li></ul><h2 id="_3-3vite-对-vue-的支持" tabindex="-1">3.3Vite 对 vue 的支持 <a class="header-anchor" href="#_3-3vite-对-vue-的支持" aria-label="Permalink to &quot;3.3Vite 对 vue 的支持&quot;">​</a></h2><ul><li><p>vite 对 vue 提供第一优先级支持：</p><ul><li>Vue 3 单文件组件支持：@vitejs/plugin-vue</li><li>Vue 3 JSX 支持：@vitejs/plugin-vue-jsx</li><li>Vue 2 支持：underfin/vite-plugin-vue2</li></ul></li><li><p>安装支持 vue 的插件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#FFCB6B;">npm</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> install</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;"> @vitejs/plugin-vue</span><span style="--shiki-light:#D19A66;--shiki-dark:#C3E88D;"> -D</span></span></code></pre></div></li><li><p>在 vite.config.js 中配置插件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#89DDFF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">import</span><span style="--shiki-light:#E06C75;--shiki-dark:#BABED8;"> vue</span><span style="--shiki-light:#C678DD;--shiki-dark:#89DDFF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> from</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">@vitejs/plugin-vue</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E5C07B;--shiki-dark:#89DDFF;">module</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E5C07B;--shiki-dark:#89DDFF;">exports</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">  plugins</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;"> [</span><span style="--shiki-light:#61AFEF;--shiki-dark:#82AAFF;">vue</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">()]</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div></li></ul>`,6);function C(s,F,_,B,b,f){const l=p,n=o("ClientOnly");return a(),r("div",null,[m,k(n,null,{default:d(()=>{var i,e;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((e=s.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(a(),v(l,{key:0,article:s.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),D])}const x=h(y,[["render",C]]);export{j as __pageData,x as default};
