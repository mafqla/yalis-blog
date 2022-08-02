import{_ as s,c as n,o as a,b as l}from"./app.64eae772.js";var p="/assets/image-20220531104146502.37391ee8.png",o="/assets/image-20220531094937337.f2394314.png";const d=JSON.parse('{"title":"\u4E09. \u9ED8\u8BA4\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"4.1 \u9ED8\u8BA4css\u6587\u4EF6","slug":"_4-1-\u9ED8\u8BA4css\u6587\u4EF6"},{"level":2,"title":"4.2 svg\u5F15\u5165","slug":"_4-2-svg\u5F15\u5165"},{"level":2,"title":"4.2.1 iconfont\u5F15\u5165","slug":"_4-2-1-iconfont\u5F15\u5165"},{"level":3,"title":"4.2.1.1 font\u5B57\u4F53\u5F15\u5165","slug":"_4-2-1-1-font\u5B57\u4F53\u5F15\u5165"},{"level":3,"title":"4.2.1.2 Symbol \u5F15\u7528","slug":"_4-2-1-2-symbol-\u5F15\u7528"}],"relativePath":"build-tools/project-build/default-configuration.md","lastUpdated":1659427555000}'),e={name:"build-tools/project-build/default-configuration.md"},t=l(`<h1 id="\u4E09-\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1">\u4E09. \u9ED8\u8BA4\u914D\u7F6E <a class="header-anchor" href="#\u4E09-\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="_4-1-\u9ED8\u8BA4css\u6587\u4EF6" tabindex="-1">4.1 \u9ED8\u8BA4css\u6587\u4EF6 <a class="header-anchor" href="#_4-1-\u9ED8\u8BA4css\u6587\u4EF6" aria-hidden="true">#</a></h2><p>normalize.css</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Document</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the line height in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Prevent adjustments of font size after orientation changes in iOS.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">1.15</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-text-size-adjust</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Sections</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the margin in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Render the \`main\` element consistently in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the font size and margin on \`h1\` elements within \`section\` and</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * \`article\` contexts in Chrome, Firefox, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0.67</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Grouping content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Add the correct box sizing in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Show the overflow in Edge and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">hr</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">content-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">visible</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Text-level semantics</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the gray background on active links in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Remove the bottom border in Chrome 57-</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">abbr</span><span style="color:#C678DD;">[</span><span style="color:#D19A66;">title</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-decoration: </span><span style="color:#D19A66;">underline</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-decoration: </span><span style="color:#D19A66;">underline</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct font weight in Chrome, Edge, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">strong</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bolder</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">kbd</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">samp</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">small</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Prevent \`sub\` and \`sup\` elements from affecting the line height in</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sub</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">sup</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">75</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">baseline</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sub</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">-0.25</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sup</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">-0.5</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Embedded content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the border on images inside links in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">img</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Forms</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Change the font styles in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Remove the margin in Firefox and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">optgroup</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">textarea</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">1.15</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Show the overflow in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Show the overflow in Edge.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">visible</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inheritance of text transform in Edge, Firefox, and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Remove the inheritance of text transform in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-transform: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: button;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inner border and padding in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Restore the focus styles unset by the previous rule.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  outline: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">ButtonText</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the padding in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">fieldset</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0.35</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.75</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.625</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the text wrapping in Edge and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the color inheritance from \`fieldset\` elements in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 3. Remove the padding so developers are not caught out when they zero out</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *    \`fieldset\` elements in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">legend</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">border-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">table</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  max-width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 3 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">normal</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct vertical alignment in Chrome, Firefox, and Opera.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">progress</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">baseline</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the default vertical scrollbar in IE 10+.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">textarea</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Add the correct box sizing in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Remove the padding in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;checkbox&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;radio&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">border-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the cursor style of increment and decrement buttons in Chrome.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-inner-spin-button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-outer-spin-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the odd appearance in Chrome and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the outline style in Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;search&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: textfield; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  outline-offset: </span><span style="color:#D19A66;">-2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inner padding in Chrome and Safari on macOS.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;search&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-search-decoration</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Change font properties to \`inherit\` in Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">::-webkit-file-upload-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: button; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Interactive</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in Edge, IE 10+, and Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">summary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">list-item</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Misc</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in IE 10+.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">hidden</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-2-svg\u5F15\u5165" tabindex="-1">4.2 svg\u5F15\u5165 <a class="header-anchor" href="#_4-2-svg\u5F15\u5165" aria-hidden="true">#</a></h2><h2 id="_4-2-1-iconfont\u5F15\u5165" tabindex="-1">4.2.1 iconfont\u5F15\u5165 <a class="header-anchor" href="#_4-2-1-iconfont\u5F15\u5165" aria-hidden="true">#</a></h2><h3 id="_4-2-1-1-font\u5B57\u4F53\u5F15\u5165" tabindex="-1">4.2.1.1 font\u5B57\u4F53\u5F15\u5165 <a class="header-anchor" href="#_4-2-1-1-font\u5B57\u4F53\u5F15\u5165" aria-hidden="true">#</a></h3><blockquote><p>\u901A\u8FC7\u672C\u5730\u6587\u4EF6\u6765\u5F15\u5165</p><p>\u4E00\u4E2Acss\u6587\u4EF6\u52A0\u5176\u4ED6\u7684\u517C\u5BB9\u5B57\u4F53\u6587\u4EF6</p></blockquote><p>==\u6CE8\u610F== \u8FD9\u79CD\u5F15\u7528\u989C\u8272\u53EA\u80FD<strong>\u88AB\u53BB\u8272, \u4E0D\u80FD\u4F7F\u7528\u539F\u6709\u7684\u989C\u8272</strong></p><p><img src="`+p+`" alt="image-20220531104146502"></p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">     &#39;@/assets/css/iconfont.css&#39;  //\u5F15\u5165css\u6587\u4EF6</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span></span>
<span class="line"><span style="color:#ABB2BF;">     &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;iconfont icon-user2&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;  //span\u6807\u7B7E\u4F7F\u7528</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-2-1-2-symbol-\u5F15\u7528" tabindex="-1">4.2.1.2 Symbol \u5F15\u7528 <a class="header-anchor" href="#_4-2-1-2-symbol-\u5F15\u7528" aria-hidden="true">#</a></h3><blockquote><p>\u76F4\u63A5\u901A\u8FC7\u963F\u91CC\u4E91\u7684\u7EDD\u5BF9\u8DEF\u5F84js\u6587\u4EF6</p></blockquote><p>==\u6CE8\u610F:== <strong>Symbol\u5F15\u5165\u7684 \u7684\u65E0\u987B ttf,woff\u7B49\u5B57\u4F53\u6587\u4EF6,\u751A\u81F3\u4E0D\u9700\u8981CSS\u6587\u4EF6</strong></p><p><strong>\u53EA\u9700\u8981js\u548C\u4E00\u4E2A\u901A\u7528\u7684.icon \u6837\u5F0F</strong></p><p><img src="`+o+`" alt="image-20220531094937337"></p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">\u6216\u8005\u81EA\u5DF1\u5F15\u5165</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;"> = </span><span style="color:#98C379;">&#39;iconfont.js&#39;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">//\u7B2C\u4E8C\u6B65\uFF1A\u52A0\u5165\u901A\u7528css\u4EE3\u7801\uFF08\u5F15\u5165\u4E00\u6B21\u5C31\u884C\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text/css&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">       width: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">; height: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">       vertical-align: </span><span style="color:#D19A66;">-0.15</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">       fill: currentColor;</span></span>
<span class="line"><span style="color:#ABB2BF;">       overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">//\u7B2C\u4E09\u6B65\uFF1A\u6311\u9009\u76F8\u5E94\u56FE\u6807\u5E76\u83B7\u53D6\u7C7B\u540D\uFF0C\u5E94\u7528\u4E8E\u9875\u9762\uFF1A</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">svg</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;icon&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">aria-hidden</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">use</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">xlink:href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;#icon-xxx&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">use</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">svg</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,17),c=[t];function i(r,y,B,F,A,f){return a(),n("div",null,c)}var C=s(e,[["render",i]]);export{d as __pageData,C as default};
