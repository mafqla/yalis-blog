import{_ as s,c as n,o as a,b as l}from"./app.ac042865.js";var p="/assets/image-20220706145633145.e1e08e35.png";const d=JSON.parse('{"title":"9.\u4FA6\u542C\u5668watch","description":"","frontmatter":{},"headers":[{"level":2,"title":"9.1 \u4FA6\u542C\u5668\u7684\u57FA\u672C\u4F7F\u7528","slug":"_9-1-\u4FA6\u542C\u5668\u7684\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"9.2 \u4FA6\u542C\u5668\u7684\u914D\u7F6E\u9009\u9879","slug":"_9-2-\u4FA6\u542C\u5668\u7684\u914D\u7F6E\u9009\u9879"},{"level":2,"title":"9.3 \u4FA6\u542C\u5668\u7684\u5176\u4ED6\u65B9\u5F0F","slug":"_9-3-\u4FA6\u542C\u5668\u7684\u5176\u4ED6\u65B9\u5F0F"}],"relativePath":"framework/vue3/watch.md","lastUpdated":1658673891000}'),o={name:"framework/vue3/watch.md"},e=l('<h1 id="_9-\u4FA6\u542C\u5668watch" tabindex="-1">9.\u4FA6\u542C\u5668watch <a class="header-anchor" href="#_9-\u4FA6\u542C\u5668watch" aria-hidden="true">#</a></h1><p>\u5F00\u53D1\u4E2D\u6211\u4EEC\u5728data\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u5B9A\u4E49\u4E86\u6570\u636E\uFF0C\u8FD9\u4E2A\u6570\u636E\u901A\u8FC7\u63D2\u503C\u8BED\u6CD5\u7B49\u65B9\u5F0F\u7ED1\u5B9A\u5230template\u4E2D\uFF1B</p><p>\u5F53\u6570\u636E\u53D8\u5316\u65F6\uFF0Ctemplate\u4F1A\u81EA\u52A8\u8FDB\u884C\u66F4\u65B0\u6765\u663E\u793A\u6700\u65B0\u7684\u6570\u636E\uFF1B</p><p>\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u5728\u4EE3\u7801\u903B\u8F91\u4E2D\u76D1\u542C\u67D0\u4E2A\u6570\u636E\u7684\u53D8\u5316\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u7528\u4FA6\u542C\u5668watch\u6765\u5B8C\u6210\u4E86</p><h2 id="_9-1-\u4FA6\u542C\u5668\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">9.1 \u4FA6\u542C\u5668\u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#_9-1-\u4FA6\u542C\u5668\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u73B0\u5728\u6211\u4EEC\u5E0C\u671B\u7528\u6237\u5728input\u4E2D\u8F93\u5165\u4E00\u4E2A\u95EE\u9898\uFF1B</p><p>\u6BCF\u5F53\u7528\u6237\u8F93\u5165\u4E86\u6700\u65B0\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u5C31\u83B7\u53D6\u5230\u6700\u65B0\u7684\u5185\u5BB9\uFF0C\u5E76\u4E14\u4F7F\u7528\u8BE5\u95EE\u9898\u53BB\u670D\u52A1\u5668\u67E5\u8BE2\u7B54\u6848\uFF1B</p><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5B9E\u65F6\u7684\u53BB\u83B7\u53D6\u6700\u65B0\u7684\u6570\u636E\u53D8\u5316\uFF1B</p><p><code>\u793A\u4F8B:</code></p><img src="'+p+`" alt="image-20220706145633145" style="zoom:80%;"><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u60A8\u7684\u95EE\u9898: &lt;</span><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-model</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">question</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">      template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        return {</span></span>
<span class="line"><span style="color:#ABB2BF;">          // \u4FA6\u542Cquestion\u7684\u53D8\u5316\u65F6, \u53BB\u8FDB\u884C\u4E00\u4E9B\u903B\u8F91\u7684\u5904\u7406(JavaScript, \u7F51\u7EDC\u8BF7\u6C42)</span></span>
<span class="line"><span style="color:#ABB2BF;">          question: &quot;Hello World&quot;,</span></span>
<span class="line"><span style="color:#ABB2BF;">          anwser: &quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      watch: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        // question\u4FA6\u542C\u7684data\u4E2D\u7684\u5C5E\u6027\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#ABB2BF;">        // newValue\u53D8\u5316\u540E\u7684\u65B0\u503C</span></span>
<span class="line"><span style="color:#ABB2BF;">        // oldValue\u53D8\u5316\u524D\u7684\u65E7\u503C</span></span>
<span class="line"><span style="color:#ABB2BF;">        question: function(newValue, oldValue) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(&quot;\u65B0\u503C: &quot;, newValue, &quot;\u65E7\u503C&quot;, oldValue);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_9-2-\u4FA6\u542C\u5668\u7684\u914D\u7F6E\u9009\u9879" tabindex="-1">9.2 \u4FA6\u542C\u5668\u7684\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#_9-2-\u4FA6\u542C\u5668\u7684\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h2><p><strong>\u6DF1\u5C42\u76D1\u542C\u5668</strong></p><p><code>watch</code> \u9ED8\u8BA4\u662F\u6D45\u5C42\u7684\uFF1A\u88AB\u4FA6\u542C\u7684 property\uFF0C\u4EC5\u5728\u88AB\u8D4B\u65B0\u503C\u65F6\uFF0C\u624D\u4F1A\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u2014\u2014\u800C\u5D4C\u5957 property \u7684\u53D8\u5316\u4E0D\u4F1A\u89E6\u53D1\u3002\u5982\u679C\u60F3\u8981\u4FA6\u542C\u6240\u6709\u5D4C\u5957\u7684\u53D8\u66F4\uFF0C\u5219\u9700\u8981\u6DF1\u5C42\u4FA6\u542C\u5668\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">    info: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      handler: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">newInfo</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">oldInfo</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;newValue:&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">newInfo</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">nba</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;oldValue:&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">oldInfo</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">nba</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      deep: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// \u6DF1\u5EA6\u4FA6\u542C</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// immediate: true // \u7ACB\u5373\u6267\u884C</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre></div><p>::: \u8C28\u614E\u4F7F\u7528</p><p>\u6DF1\u5EA6\u4FA6\u542C\u9700\u8981\u904D\u5386\u88AB\u4FA6\u542C\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u5D4C\u5957\u7684 property\uFF0C\u5F53\u7528\u4E8E\u5927\u578B\u6570\u636E\u7ED3\u6784\u65F6\uFF0C\u5F00\u9500\u5F88\u5927\u3002\u56E0\u6B64\u8BF7\u53EA\u5728\u5FC5\u8981\u65F6\u624D\u4F7F\u7528\u5B83\uFF0C\u5E76\u4E14\u8981\u7559\u610F\u6027\u80FD\u3002</p><p>:::</p><p><strong>\u56DE\u8C03\u7684\u5237\u65B0\u65F6\u673A</strong></p><p>\u5F53\u4F60\u66F4\u6539\u4E86\u54CD\u5E94\u5F0F\u72B6\u6001\uFF0C\u5B83\u53EF\u80FD\u4F1A\u540C\u65F6\u89E6\u53D1 Vue \u7EC4\u4EF6\u66F4\u65B0\u548C\u4FA6\u542C\u5668\u56DE\u8C03\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u521B\u5EFA\u7684\u4FA6\u542C\u5668\u56DE\u8C03\uFF0C\u90FD\u4F1A\u5728 Vue \u7EC4\u4EF6\u66F4\u65B0<strong>\u4E4B\u524D</strong>\u88AB\u8C03\u7528\u3002\u8FD9\u610F\u5473\u7740\u4F60\u5728\u4FA6\u542C\u5668\u56DE\u8C03\u4E2D\u8BBF\u95EE\u7684 DOM \u5C06\u662F\u88AB Vue \u66F4\u65B0\u4E4B\u524D\u7684\u72B6\u6001\u3002</p><p>\u5982\u679C\u60F3\u5728\u4FA6\u542C\u5668\u56DE\u8C03\u4E2D\u80FD\u8BBF\u95EE\u88AB Vue \u66F4\u65B0<strong>\u4E4B\u540E</strong>\u7684DOM\uFF0C\u9700\u8981\u6307\u660E <code>flush: &#39;post&#39;</code> \u9009\u9879\uFF1A</p><p><code>\u793A\u4F8B\uFF1A</code></p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E5C07B;">info</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfo</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfoName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info.name&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfoNbaName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info.nba.name&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">      template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        return {</span></span>
<span class="line"><span style="color:#ABB2BF;">          info: { name: &quot;why&quot;, age: 18, nba: {name: &#39;kobe&#39;} }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      watch: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6211\u4EEC\u7684\u4FA6\u542C\u5668\u53EA\u4F1A\u9488\u5BF9\u76D1\u542C\u7684\u6570\u636E\u672C\u8EAB\u7684\u6539\u53D8(\u5185\u90E8\u53D1\u751F\u7684\u6539\u53D8\u662F\u4E0D\u80FD\u4FA6\u542C)</span></span>
<span class="line"><span style="color:#ABB2BF;">        // \u6DF1\u5EA6\u4FA6\u542C/\u7ACB\u5373\u6267\u884C(\u4E00\u5B9A\u4F1A\u6267\u884C\u4E00\u6B21)</span></span>
<span class="line"><span style="color:#ABB2BF;">        info: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          handler: function(newInfo, oldInfo) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            console.log(&quot;newValue:&quot;, newInfo.nba.name, &quot;oldValue:&quot;, oldInfo.nba.name);</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">          deep: true, // \u6DF1\u5EA6\u4FA6\u542C</span></span>
<span class="line"><span style="color:#ABB2BF;">          // immediate: true // \u7ACB\u5373\u6267\u884C</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfo() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info = {name: &quot;kobe&quot;};</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfoName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info.name = &quot;kobe&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfoNbaName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info.nba.name = &quot;james&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_9-3-\u4FA6\u542C\u5668\u7684\u5176\u4ED6\u65B9\u5F0F" tabindex="-1">9.3 \u4FA6\u542C\u5668\u7684\u5176\u4ED6\u65B9\u5F0F <a class="header-anchor" href="#_9-3-\u4FA6\u542C\u5668\u7684\u5176\u4ED6\u65B9\u5F0F" aria-hidden="true">#</a></h2><p><strong>this.$watch()</strong></p><p>\u5728\u7279\u5B9A\u6761\u4EF6\u4E0B\u8BBE\u7F6E\u4E00\u4E2A\u4FA6\u542C\u5668\uFF0C\u6216\u8005\u53EA\u4FA6\u542C\u54CD\u5E94\u7528\u6237\u4EA4\u4E92\u7684\u5185\u5BB9\u3002</p><p>\u5B83\u8FD8\u5141\u8BB8\u4F7F\u7528unwatch()\u63D0\u524D\u505C\u6B62\u8BE5\u4FA6\u542C\u5668\u3002</p><p><code>\u793A\u4F8B:</code></p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;my-app&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;{{</span><span style="color:#E5C07B;">info</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">}}&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfo</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfoName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info.name&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeInfoNbaName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8info.nba.name&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> @</span><span style="color:#D19A66;">click</span><span style="color:#ABB2BF;">=</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#E06C75;">changeFriendName</span><span style="color:#ABB2BF;">&quot;</span><span style="color:#ABB2BF;">&gt;\u6539\u53D8friends[0].name&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../js/vue.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    const App = {</span></span>
<span class="line"><span style="color:#ABB2BF;">      template: &#39;#my-app&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        return {</span></span>
<span class="line"><span style="color:#ABB2BF;">          info: { name: &quot;why&quot;, age: 18, nba: {name: &#39;kobe&#39;} },</span></span>
<span class="line"><span style="color:#ABB2BF;">          friends: [</span></span>
<span class="line"><span style="color:#ABB2BF;">            {name: &quot;why&quot;}, </span></span>
<span class="line"><span style="color:#ABB2BF;">            {name: &quot;kobe&quot;}</span></span>
<span class="line"><span style="color:#ABB2BF;">          ]</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      watch: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        info(newValue, oldValue) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(newValue, oldValue);</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        &quot;info.name&quot;: function(newName, oldName) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(newName, oldName);</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        &quot;friends[0].name&quot;: function(newName, oldName) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(newName, oldName);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfo() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info = {name: &quot;kobe&quot;};</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfoName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info.name = &quot;kobe&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeInfoNbaName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.info.nba.name = &quot;james&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        changeFriendName() {</span></span>
<span class="line"><span style="color:#ABB2BF;">          this.friends[0].name = &quot;curry&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">      created() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        const unwatch = this.$watch(&quot;info&quot;, function(newInfo, oldInfo) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          console.log(newInfo, oldInfo);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }, {</span></span>
<span class="line"><span style="color:#ABB2BF;">          deep: true,</span></span>
<span class="line"><span style="color:#ABB2BF;">          immediate: true</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">        // unwatch()</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    Vue.createApp(App).mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,30),B=[e];function t(c,r,y,i,A,F){return a(),n("div",null,B)}var g=s(o,[["render",t]]);export{d as __pageData,g as default};
