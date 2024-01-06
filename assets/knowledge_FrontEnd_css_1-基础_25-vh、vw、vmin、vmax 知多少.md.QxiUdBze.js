import{_ as e,o as s,c as i,k as a,a as n,U as t}from"./chunks/framework.5FtAyiyV.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md","filePath":"knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md","lastUpdated":1704525698000}'),l={name:"knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少.md"},h=a("h2",{id:"vw-and-vh",tabindex:"-1"},[n("vw and vh "),a("a",{class:"header-anchor",href:"#vw-and-vh","aria-label":'Permalink to "vw and vh"'},"​")],-1),p=a("ol",null,[a("li",null,"1vw 等于 1/100 的视口宽度 （Viewport Width）"),a("li",null,"1vh 等于 1/100 的视口高度 （Viewport Height）")],-1),o=a("p",null,"综上，一个页面而言，它的视窗的高度就是 100vh，宽度就是 100vw 。看个例子：",-1),d=a("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Untitled",src:"https://codepen.io/mafqla/embed/NWJNryN?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/NWJNryN">
  Untitled</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),r=t(`<p>响应式 web 设计离不开百分比。但是，CSS 百分比并不是所有的问题的最佳解决方案。CSS 的宽度是相对于包含它的最近的父元素的宽度的。但是如果你就想用视口（viewpoint）的宽度或者高度，而不是父元素的，那该肿么办？ 这就是 vh 和 vw 单位为我们提供的。</p><p>1vh 等于 1/100 的视口高度。栗子：浏览器高度 900px, 1 vh = 900px/100 = 9 px。同理，如果视口宽度为 750， 1vw = 750px/100 = 7.5 px。</p><p>可以想象到的，他们有很多很多的用途。比如，我们用很简单的方法只用一行 CSS 代码就实现同屏幕等高的框。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">slide</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">vh</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>假设你要来一个和屏幕同宽的标题，你只要设置这个标题的 font-size 的单位为 vw，那标题的字体大小就会自动根据浏览器的宽度进行缩放，以达到字体和 viewport 大小同步的效果。</p><h2 id="vmin-and-vmax" tabindex="-1">vmin and vmax <a class="header-anchor" href="#vmin-and-vmax" aria-label="Permalink to &quot;vmin and vmax&quot;">​</a></h2><p>vh 和 vw 依据于视口的高度和宽度，相对的，vmin 和 vmax 则关于视口高度和宽度两者的最小或者最大值</p><ol><li>vmin — vmin 的值是当前 vw 和 vh 中较小的值。</li><li>vmax — vw 和 vh 中较大的值。</li></ol><p>这个单位在横竖屏的切换中，十分有用。</p><p>在一些 Demo 示例，或者大页面中，我们经常都会看到上述 4 个单位的身影。灵活使用，就可以减少很多 CSS 的代码量。</p>`,10),v=[h,p,o,d,r];function c(m,_,k,w,f,g){return s(),i("div",null,v)}const B=e(l,[["render",c]]);export{x as __pageData,B as default};
