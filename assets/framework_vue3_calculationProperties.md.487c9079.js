import{_ as s,c as n,o as a,a as l}from"./app.31d46e85.js";var p="/assets/image-20220705212114128.8c81b519.png",o="/assets/image-20220705214057909.029b03de.png";const d=JSON.parse('{"title":"8. \u8BA1\u7B97\u5C5E\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"8.1 \u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\u5B9E\u73B0","slug":"_8-1-\u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\u5B9E\u73B0"},{"level":2,"title":"8.2 \u4F7F\u7528method\u65B9\u6CD5\u5B9E\u73B0","slug":"_8-2-\u4F7F\u7528method\u65B9\u6CD5\u5B9E\u73B0"},{"level":2,"title":"8.3 \u4F7F\u7528computed\u5B9E\u73B0","slug":"_8-3-\u4F7F\u7528computed\u5B9E\u73B0"},{"level":2,"title":"8.4 methods\u548Ccomputed\u7684\u533A\u522B","slug":"_8-4-methods\u548Ccomputed\u7684\u533A\u522B"},{"level":2,"title":"8.5 computed\u7684setter\u548Cgetter","slug":"_8-5-computed\u7684setter\u548Cgetter"}],"relativePath":"framework/vue3/calculationProperties.md","lastUpdated":1657122504000}'),e={name:"framework/vue3/calculationProperties.md"},t=l('<h1 id="_8-\u8BA1\u7B97\u5C5E\u6027" tabindex="-1">8. \u8BA1\u7B97\u5C5E\u6027 <a class="header-anchor" href="#_8-\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a></h1><p>\u5BF9\u4E8E\u4EFB\u4F55\u5305\u542B\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u590D\u6742\u903B\u8F91\uFF0C\u90FD\u5E94\u8BE5\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\uFF1B</p><p>\u8BA1\u7B97\u5C5E\u6027\u5C06\u88AB\u6DF7\u5165\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\u3002\u6240\u6709 getter \u548C setter \u7684 this \u4E0A\u4E0B\u6587\u81EA\u52A8\u5730\u7ED1\u5B9A\u4E3A\u7EC4\u4EF6\u5B9E\u4F8B\uFF1B</p><p>\u8BA1\u7B97\u5C5E\u6027\u7684\u7528\u6CD5\uFF1A</p><ul><li>\u9009\u9879\uFF1Acomputed p\u7C7B\u578B\uFF1A{ [key: string]: Function | { get: Function, set: Function } }</li></ul><h2 id="_8-1-\u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\u5B9E\u73B0" tabindex="-1">8.1 \u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\u5B9E\u73B0 <a class="header-anchor" href="#_8-1-\u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><code>\u7F3A\u70B9</code>\uFF1A</p><p>\u4E00\u3001\u6A21\u677F\u4E2D\u5B58\u5728\u5927\u91CF\u7684\u590D\u6742\u903B\u8F91\uFF0C\u4E0D\u4FBF\u4E8E\u7EF4\u62A4\uFF08\u6A21\u677F\u4E2D\u8868\u8FBE\u5F0F\u7684\u521D\u8877\u662F\u7528\u4E8E\u7B80\u5355\u7684\u8BA1\u7B97\uFF09\uFF1B</p><p>\u4E8C\u3001\u5F53\u6709\u591A\u6B21\u4E00\u6837\u7684\u903B\u8F91\u65F6\uFF0C\u5B58\u5728\u91CD\u590D\u7684\u4EE3\u7801\uFF1B</p><p>\u4E09\u3001\u591A\u6B21\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5F88\u591A\u8FD0\u7B97\u4E5F\u9700\u8981\u591A\u6B21\u6267\u884C\uFF0C\u6CA1\u6709\u7F13\u5B58</p><p><code>\u5B9E\u73B0\u601D\u8DEF</code>\uFF1A</p><img src="'+p+`" alt="image-20220705212114128" style="zoom:50%;"><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">firstName</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">lastName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">score</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;\u53CA\u683C&#39;</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;\u4E0D\u53CA\u683C&#39;</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E5C07B;">message</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">split</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">reverse</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">)}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">   template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">   data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     return {</span></span>
<span class="line"><span style="color:#ABB2BF;">       firstName: &quot;Kobe&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       lastName: &quot;Bryant&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       score: 80,</span></span>
<span class="line"><span style="color:#ABB2BF;">       message: &quot;Hello World&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_8-2-\u4F7F\u7528method\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1">8.2 \u4F7F\u7528method\u65B9\u6CD5\u5B9E\u73B0 <a class="header-anchor" href="#_8-2-\u4F7F\u7528method\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><code>\u7F3A\u70B9</code>:</p><p>\u4E00\u3001\u6211\u4EEC\u4E8B\u5B9E\u4E0A\u5148\u663E\u793A\u7684\u662F\u4E00\u4E2A\u7ED3\u679C\uFF0C\u4F46\u662F\u90FD\u53D8\u6210\u4E86\u4E00\u79CD\u65B9\u6CD5\u7684\u8C03\u7528\uFF1B</p><p>\u4E8C\u3001\u591A\u6B21\u4F7F\u7528\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u7F13\u5B58\uFF0C\u4E5F\u9700\u8981\u591A\u6B21\u8BA1\u7B97</p><p><code>\u5B9E\u73B0\u601D\u8DEF</code>\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getResult</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getReverseMessage</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">   template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">   data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     return {</span></span>
<span class="line"><span style="color:#ABB2BF;">       firstName: &quot;Kobe&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       lastName: &quot;Bryant&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       score: 80,</span></span>
<span class="line"><span style="color:#ABB2BF;">       message: &quot;Hello World&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   },</span></span>
<span class="line"><span style="color:#ABB2BF;">   methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">     getFullName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#ABB2BF;">     },</span></span>
<span class="line"><span style="color:#ABB2BF;">     getResult() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.score &gt;= 60 ? &quot;\u53CA\u683C&quot;: &quot;\u4E0D\u53CA\u683C&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">     },</span></span>
<span class="line"><span style="color:#ABB2BF;">     getReverseMessage() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.message.split(&quot; &quot;).reverse().join(&quot; &quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_8-3-\u4F7F\u7528computed\u5B9E\u73B0" tabindex="-1">8.3 \u4F7F\u7528computed\u5B9E\u73B0 <a class="header-anchor" href="#_8-3-\u4F7F\u7528computed\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u8BA1\u7B97\u5C5E\u6027\u662F\u6709\u7F13\u5B58\u7684\uFF1B</p><p><code>\u5B9E\u73B0\u601D\u8DEF</code>\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;"> &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">result</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">reverseMessage</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">   template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">   data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     return {</span></span>
<span class="line"><span style="color:#ABB2BF;">       firstName: &quot;Kobe&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       lastName: &quot;Bryant&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       score: 80,</span></span>
<span class="line"><span style="color:#ABB2BF;">       message: &quot;Hello World&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   },</span></span>
<span class="line"><span style="color:#ABB2BF;">   computed: {</span></span>
<span class="line"><span style="color:#ABB2BF;">     // \u5B9A\u4E49\u4E86\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\u53EBfullname</span></span>
<span class="line"><span style="color:#ABB2BF;">     fullName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#ABB2BF;">     },</span></span>
<span class="line"><span style="color:#ABB2BF;">     result() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.score &gt;= 60 ? &quot;\u53CA\u683C&quot;: &quot;\u4E0D\u53CA\u683C&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">     },</span></span>
<span class="line"><span style="color:#ABB2BF;">     reverseMessage() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.message.split(&quot; &quot;).reverse().join(&quot; &quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_8-4-methods\u548Ccomputed\u7684\u533A\u522B" tabindex="-1">8.4 methods\u548Ccomputed\u7684\u533A\u522B <a class="header-anchor" href="#_8-4-methods\u548Ccomputed\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p><code>computed:</code></p><ul><li><p>\u8BA1\u7B97\u5C5E\u6027\u662F\u6709\u7F13\u5B58\u7684, \u5F53\u6211\u4EEC\u591A\u6B21\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u65F6, \u8BA1\u7B97\u5C5E\u6027\u4E2D\u7684\u8FD0\u7B97\u53EA\u4F1A\u6267\u884C\u4E00\u6B21.</p></li><li><p>\u8BA1\u7B97\u5C5E\u6027\u4F1A\u968F\u7740\u4F9D\u8D56\u7684\u6570\u636E\u7684\u6539\u53D8, \u800C\u8FDB\u884C\u91CD\u65B0\u8BA1\u7B97.</p></li></ul><p><code>methods:</code></p><p>\u7531\u4E8Emethods\u6CA1\u6709\u7F13\u5B58\uFF0C\u5728\u8C03\u7528\u540C\u4E00\u53D8\u91CF\u65F6\u4F1A\u91CD\u590D\u8C03\u7528.</p><p><code>\u4F8B\uFF1A</code></p><img src="`+o+`" alt="image-20220705214057909" style="zoom:80%;"><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeFirstName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u4FEE\u6539firstName&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E06C75;">fullName</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#61AFEF;">getFullName</span><span style="color:#ABB2BF;">()}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">   template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">   data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">     return {</span></span>
<span class="line"><span style="color:#ABB2BF;">       firstName: &quot;Kobe&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">       lastName: &quot;Bryant&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   },</span></span>
<span class="line"><span style="color:#ABB2BF;">   computed: {</span></span>
<span class="line"><span style="color:#ABB2BF;">     fullName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       console.log(&quot;computed\u7684fullName\u4E2D\u7684\u8BA1\u7B97&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   },</span></span>
<span class="line"><span style="color:#ABB2BF;">   methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">     getFullName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       console.log(&quot;methods\u7684getFullName\u4E2D\u7684\u8BA1\u7B97&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">       return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#ABB2BF;">     },</span></span>
<span class="line"><span style="color:#ABB2BF;">     changeFirstName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">       this.firstName = &quot;Coder&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_8-5-computed\u7684setter\u548Cgetter" tabindex="-1">8.5 computed\u7684setter\u548Cgetter <a class="header-anchor" href="#_8-5-computed\u7684setter\u548Cgetter" aria-hidden="true">#</a></h2><ul><li><p>\u5F53\u5728computed\u51FD\u6570\u4E2D\u53EA\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u53EF\u5F53\u4F5C<code>getter</code>\u3002</p></li><li><p>\u5F53\u9700\u8981setter\u5B9A\u4E49computed\u7684\u503C\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">    computed: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      // fullName\u7684getter\u548Csetter\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#ABB2BF;">      fullName: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        get: function() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        set: function(newValue) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(newValue);</span></span>
<span class="line"><span style="color:#ABB2BF;">          const names = newValue.split(&quot; &quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.firstName = names[0];</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.lastName = names[1];</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"></span></code></pre></div></li></ul>`,33),B=[t];function c(r,y,F,i,A,u){return a(),n("div",null,B)}var m=s(e,[["render",c]]);export{d as __pageData,m as default};
