import{_ as r}from"./chunks/ArticleMetadata.1VcEe8Bb.js";import{_ as n,D as d,o as i,c as u,I as c,w as _,k as a,a as m,U as p,b as S,e as B}from"./chunks/framework.5FtAyiyV.js";import"./chunks/index.w40geAFS.js";import"./chunks/index.yNJctKkT.js";import"./chunks/commonjsHelpers.5-cIlDoe.js";const E="/assets/image-20220711200702464.TZkhJcjv.png",y=JSON.parse('{"title":"ESBuild","description":"","frontmatter":{"title":"ESBuild","date":"2022-8-21 18:51","tags":["vite","ESBuild"]},"headers":[],"relativePath":"knowledge/build-tools/02-vite/05-esBuild.md","filePath":"knowledge/build-tools/02-vite/05-esBuild.md","lastUpdated":1705386462000}'),f={name:"knowledge/build-tools/02-vite/05-esBuild.md"},g=a("h1",{id:"_5-esbuild",tabindex:"-1"},[m("5.ESBuild "),a("a",{class:"header-anchor",href:"#_5-esbuild","aria-label":'Permalink to "5.ESBuild"'},"​")],-1),h=p('<ul><li>ESBuild的特点： <ul><li>超快的构建速度，并且不需要缓存； 支持ES6和CommonJS的模块化；</li><li>支持ES6的Tree Shaking；</li><li>支持Go、JavaScript的API；</li><li>支持TypeScript、JSX等语法编译；</li><li>支持SourceMap；</li><li>支持代码压缩；</li><li>支持扩展其他插件；</li></ul></li><li>ESBuild的构建速度: <ul><li>ESBuild的构建速度和其他构建工具速度对比：</li><li><img src="'+E+'" alt="image-20220711200702464" loading="lazy"></li><li>ESBuild为什么这么快呢？ <ul><li><strong>使用Go语言编写的，可以直接转换成机器代码，而无需经过字节码；</strong></li><li>ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行；</li><li>ESBuild的所有内容都是从零开始编写的，而不是使用第三方，所以从一开始就可以考虑各种性能问题；</li></ul></li></ul></li></ul>',1);function k(e,T,v,C,b,N){const o=r,s=d("ClientOnly");return i(),u("div",null,[g,c(s,null,{default:_(()=>{var l,t;return[(((l=e.$frontmatter)==null?void 0:l.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(i(),S(o,{key:0,article:e.$frontmatter},null,8,["article"])):B("",!0)]}),_:1}),h])}const J=n(f,[["render",k]]);export{y as __pageData,J as default};