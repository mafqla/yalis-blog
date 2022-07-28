import{_ as s,c as n,o as a,b as l}from"./app.c475263d.js";var p="/assets/image-20220726173351155.806a2c3a.png";const d=JSON.parse('{"title":"13. \u7EC4\u5408\u5F0Fapi","description":"","frontmatter":{},"headers":[{"level":2,"title":"13.1 Mixin","slug":"_13-1-mixin"},{"level":3,"title":"13.1.1 Mixin\u7684\u57FA\u672C\u4F7F\u7528","slug":"_13-1-1-mixin\u7684\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"13.1.2Mixin\u7684\u5408\u5E76\u89C4\u5219","slug":"_13-1-2mixin\u7684\u5408\u5E76\u89C4\u5219"},{"level":3,"title":"13.1.3 \u5168\u5C40\u6DF7\u5165Mixin","slug":"_13-1-3-\u5168\u5C40\u6DF7\u5165mixin"},{"level":2,"title":"13.2 Composition API\u57FA\u7840","slug":"_13-2-composition-api\u57FA\u7840"},{"level":3,"title":"13.2.1 setup\u51FD\u6570\u7684\u53C2\u6570","slug":"_13-2-1-setup\u51FD\u6570\u7684\u53C2\u6570"},{"level":3,"title":"13.2.2 setup\u7684\u8FD4\u56DE\u503C","slug":"_13-2-2-setup\u7684\u8FD4\u56DE\u503C"},{"level":3,"title":"13.2.3 Reactive API\u7684\u4F7F\u7528","slug":"_13-2-3-reactive-api\u7684\u4F7F\u7528"},{"level":3,"title":"13.2.4 Ref API\u7684\u4F7F\u7528","slug":"_13-2-4-ref-api\u7684\u4F7F\u7528"},{"level":3,"title":"13.2.5 ref\u6D45\u5C42\u7684\u89E3\u5305","slug":"_13-2-5-ref\u6D45\u5C42\u7684\u89E3\u5305"},{"level":3,"title":"13.2.6 readonly\u7684\u4F7F\u7528","slug":"_13-2-6-readonly\u7684\u4F7F\u7528"},{"level":2,"title":"13.3 ReactiveAPI\u7684\u8865\u5145","slug":"_13-3-reactiveapi\u7684\u8865\u5145"},{"level":3,"title":"13.3.1 Reactive\u5224\u65AD\u7684API","slug":"_13-3-1-reactive\u5224\u65AD\u7684api"},{"level":3,"title":"13.3.2 toRefs\u548CtoRef\u7684\u4F7F\u7528","slug":"_13-3-2-torefs\u548Ctoref\u7684\u4F7F\u7528"},{"level":3,"title":"13.3.3 ref\u5176\u4ED6\u7684API","slug":"_13-3-3-ref\u5176\u4ED6\u7684api"},{"level":3,"title":"13.3.4 \u81EA\u5B9A\u4E49ref","slug":"_13-3-4-\u81EA\u5B9A\u4E49ref"},{"level":2,"title":"13.4 \u8BA1\u7B97\u5C5E\u6027computed\u57FA\u672C\u4F7F\u7528","slug":"_13-4-\u8BA1\u7B97\u5C5E\u6027computed\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"13.5 \u4FA6\u542C\u6570\u636E\u53D8\u5316","slug":"_13-5-\u4FA6\u542C\u6570\u636E\u53D8\u5316"},{"level":3,"title":"13.5.1 watchEffect\u57FA\u672C\u4F7F\u7528","slug":"_13-5-1-watcheffect\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"13.5.2 watchEffect\u505C\u6B62\u4FA6\u542C","slug":"_13-5-2-watcheffect\u505C\u6B62\u4FA6\u542C"},{"level":3,"title":"13.5.3 watchEffect\u6E05\u9664\u526F\u4F5C\u7528","slug":"_13-5-3-watcheffect\u6E05\u9664\u526F\u4F5C\u7528"},{"level":3,"title":"13.5.4 watchEffect\u7684\u6267\u884C\u65F6\u673A","slug":"_13-5-4-watcheffect\u7684\u6267\u884C\u65F6\u673A"},{"level":3,"title":"13.5.5 Watch\u7684\u4F7F\u7528","slug":"_13-5-5-watch\u7684\u4F7F\u7528"},{"level":3,"title":"13.5.6 Watch\u6DF1\u5C42\u4FA6\u542C\u5668","slug":"_13-5-6-watch\u6DF1\u5C42\u4FA6\u542C\u5668"},{"level":2,"title":"13.6 setup\u7684\u751F\u547D\u5468\u671F","slug":"_13-6-setup\u7684\u751F\u547D\u5468\u671F"},{"level":2,"title":"13.7 Provide\u548CInject","slug":"_13-7-provide\u548Cinject"},{"level":3,"title":"13.7.1 provide\u51FD\u6570","slug":"_13-7-1-provide\u51FD\u6570"},{"level":3,"title":"13.7.2 inject\u51FD\u6570","slug":"_13-7-2-inject\u51FD\u6570"},{"level":3,"title":"13.7.3 \u6570\u636E\u7684\u54CD\u5E94\u5F0F","slug":"_13-7-3-\u6570\u636E\u7684\u54CD\u5E94\u5F0F"},{"level":2,"title":"13.8 \u6E32\u67D3\u51FD\u6570 & JSX","slug":"_13-8-\u6E32\u67D3\u51FD\u6570-jsx"},{"level":3,"title":"13.8.1 \u57FA\u672C\u7528\u6CD5","slug":"_13-8-1-\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"13.8.2  \u6E32\u67D3\u63D2\u69FD[#](https://staging-cn.vuejs.org/guide/extras/render-function.html#rendering-slots)","slug":"_13-8-2-\u6E32\u67D3\u63D2\u69FD"},{"level":3,"title":"13.8.3 jsx\u7684\u4F7F\u7528","slug":"_13-8-3-jsx\u7684\u4F7F\u7528"},{"level":3,"title":"13.8.4 jsx\u7EC4\u4EF6\u7684\u4F7F\u7528","slug":"_13-8-4-jsx\u7EC4\u4EF6\u7684\u4F7F\u7528"},{"level":2,"title":"13.9 \u7EC4\u5408\u5F0F\u51FD\u6570(\u7C7B\u4F3Creact hook)","slug":"_13-9-\u7EC4\u5408\u5F0F\u51FD\u6570-\u7C7B\u4F3Creact-hook"},{"level":2,"title":"13.10 \u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"_13-10-\u81EA\u5B9A\u4E49\u6307\u4EE4"},{"level":3,"title":"13.10.1\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F","slug":"_13-10-1\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F"},{"level":3,"title":"13.10.2 \u6307\u4EE4\u7684\u53C2\u6570\u548C\u4FEE\u9970\u7B26","slug":"_13-10-2-\u6307\u4EE4\u7684\u53C2\u6570\u548C\u4FEE\u9970\u7B26"},{"level":2,"title":"13.11 \u5185\u7F6E\u7EC4\u4EF6Teleport","slug":"_13-11-\u5185\u7F6E\u7EC4\u4EF6teleport"},{"level":3,"title":"13.11.1 \u4EC0\u4E48\u662FTeleport\uFF1F","slug":"_13-11-1-\u4EC0\u4E48\u662Fteleport\uFF1F"},{"level":3,"title":"13.11.2 \u642D\u914D\u7EC4\u4EF6\u4F7F\u7528","slug":"_13-11-2-\u642D\u914D\u7EC4\u4EF6\u4F7F\u7528"},{"level":3,"title":"13.11.3 \u591A\u4E2Ateleport","slug":"_13-11-3-\u591A\u4E2Ateleport"},{"level":2,"title":"13.12 \u63D2\u4EF6","slug":"_13-12-\u63D2\u4EF6"},{"level":3,"title":"13. 12.1 \u4EC0\u4E48\u662F\u63D2\u4EF6","slug":"_13-12-1-\u4EC0\u4E48\u662F\u63D2\u4EF6"},{"level":3,"title":"13.12.2 \u63D2\u4EF6\u7684\u7F16\u5199\u65B9\u5F0F","slug":"_13-12-2-\u63D2\u4EF6\u7684\u7F16\u5199\u65B9\u5F0F"},{"level":3,"title":"13.12.3  \u63D2\u4EF6\u4E2D\u7684\u4F9B\u7ED9 / \u6CE8\u5165","slug":"_13-12-3-\u63D2\u4EF6\u4E2D\u7684\u4F9B\u7ED9-\u6CE8\u5165"}],"relativePath":"framework/vue3/composition-api.md","lastUpdated":1659021696000}'),o={name:"framework/vue3/composition-api.md"},e=l("",199),B=[e];function t(c,r,y,i,F,A){return a(),n("div",null,B)}var E=s(o,[["render",t]]);export{d as __pageData,E as default};
