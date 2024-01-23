import{_ as a,c as t,o as e,V as s,m as i}from"./chunks/framework.YbGCv4uC.js";const n="/assets/102902082-69325480-44a9-11eb-83b8-26265426f32b.tvshnJkf.gif",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/56-探究 position-sticky 失效问题.md","filePath":"knowledge/FrontEnd/css/1-基础/56-探究 position-sticky 失效问题.md","lastUpdated":1705971902000}'),l={name:"knowledge/FrontEnd/css/1-基础/56-探究 position-sticky 失效问题.md"},h=s(`<h2 id="position-sticky-生效的原理" tabindex="-1">position-sticky 生效的原理 <a class="header-anchor" href="#position-sticky-生效的原理" aria-label="Permalink to &quot;position-sticky 生效的原理&quot;">​</a></h2><p><a href="https://www.w3.org/TR/css-position-3/#stickypos-scroll" target="_blank" rel="noreferrer">在 W3 官方文档中的定义是</a>：Sticky positioning is similar to relative positioning except the offsets are automatically calculated in reference to the nearest scrollport.</p><p>转换成通俗的大白话就是，Sticky 定位类似于相对定位，（当它表现为 fixed 定位的特性时）会根据最近的滚动容器（nearest scrollport）自动计算偏移量。</p><p>其中有一个非常重要的概念就是 nearest scrollport，它表示 sticky 元素在即将消失前会相对它最近的 scrollport 去做定位。</p><h2 id="正常的-demo" tabindex="-1">正常的 DEMO <a class="header-anchor" href="#正常的-demo" aria-label="Permalink to &quot;正常的 DEMO&quot;">​</a></h2><p>所以正常而言，类似下面的这种情况，sticky 是可以正常展示的。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  - 可滚动的容器 scrollport</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">sticky</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">- 设置了 sticky 的元素</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div>`,7),p=i("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Normal Sticky Demo",src:"https://codepen.io/mafqla/embed/NWJvrKG?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/NWJvrKG">
  Normal Sticky Demo</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),k=s(`<h2 id="失效的-position-sticky" tabindex="-1">失效的 position: sticky <a class="header-anchor" href="#失效的-position-sticky" aria-label="Permalink to &quot;失效的 position: sticky&quot;">​</a></h2><h3 id="_1、包裹的父容器高度与-sticky-元素一致" tabindex="-1">1、包裹的父容器高度与 sticky 元素一致 <a class="header-anchor" href="#_1、包裹的父容器高度与-sticky-元素一致" aria-label="Permalink to &quot;1、包裹的父容器高度与 sticky 元素一致&quot;">​</a></h3><p>有趣的是，如果在 <code>.sticky</code> 元素和你希望 <code>.sticky</code> 生效吸附的滚动元素中间，添加上一层 <code>.parent</code> 的 div 元素，不给 div 添加任何样式，sticky 则失效了。</p><p>譬如是这样：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  - 可滚动的容器 scrollport</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">parent</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">sticky</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">- 设置了 sticky 的元素</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div>`,5),o=i("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"invalid Sticky Demo 1",src:"https://codepen.io/mafqla/embed/eYXEzOR?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/eYXEzOR">
  invalid Sticky Demo 1</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),d=s(`<p>失效原因：此时 <code>.sticky</code> 元素的最近的 scrollport 变成了它的父容器 div，而父容器 div 的高度和 <code>.sticky</code> 元素的高度是一样的，所以表现不出 fixed 的特性。</p><p>其实，这里不算失效，我们只需要将包裹 <code>.sticky</code> 元素的父容器的高度设置的大于 <code>.sticky</code> 元素本身，也能看到效果。</p><p>譬如，我们可以加上</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">parent</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">vh</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>此时，<code>sticky</code> 将重新生效，像是这样：</p><p><img src="`+n+`" alt="sticky3" loading="lazy"></p><p>其实，造成这种现象的本质原因是，<strong>设置了 <code>position: sticky</code> 的元素吸附的基准元素从 <code>.container</code> 变成了 <code>.parent</code></strong> 。</p><h3 id="_2、包裹的父容器设置了-overflow-hidden" tabindex="-1">2、包裹的父容器设置了 <code>overflow: hidden</code> <a class="header-anchor" href="#_2、包裹的父容器设置了-overflow-hidden" aria-label="Permalink to &quot;2、包裹的父容器设置了 \`overflow: hidden\`&quot;">​</a></h3><p>第二种情况，也会导致 <code>position: sticky</code> 的 fixed 定位特性失效。也就是 <code>.sticky</code> 元素的祖先容器存在 overflow: hidden。类似这样：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">container</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  - 可滚动的容器 scrollport</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">hidden</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">    - 设置了 overflow: hidden</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">    &lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">sticky</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">- 设置了 sticky 的元素</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  &lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div>`,10),r=i("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"invalid Sticky Demo 2",src:"https://codepen.io/mafqla/embed/dyrzXbg?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/dyrzXbg">
  invalid Sticky Demo 2</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),c=s('<p>在上面这个 DEMO 里面，设置了 <code>sticky</code> 的元素的父元素 <code>hidden</code> 元素，它的高度是远比 <code>stikcy</code> 元素高的，但是滚动的过程中却没有表现出 fixed 的特性。</p><p>原因在于，设置了 <code>overflow: hidden</code> 的元素，它不再代用滚动的特性，<code>当 </code>sticky<code>元素吸附于</code>.hidden<code>元素的顶部时，它随着 </code>.hidden` 元素本身在 container 移动。所以，所有的 sticky 元素都会被滚动出 container 的滚动区域。</p><p>当然，这里有一点比较奇怪的是，<code>.sticky</code> 元素相对 <code>.hidden</code> 元素进行 fixed 定位，而不是相对 <code>.container</code> 元素进行 fixed 定位，表面设置了 <code>overflow: hidden</code> 的元素，它也是一个 scrollport。</p><p>其实，不止是 <code>overflow: hidden</code> ，<strong>设定为 <code>position: sticky</code> 元素的任意父节点的 overflow 属性必须是 visible，否则 <code>position:sticky</code> 不会生效</strong>。</p><h2 id="总结一下" tabindex="-1">总结一下 <a class="header-anchor" href="#总结一下" aria-label="Permalink to &quot;总结一下&quot;">​</a></h2><p>看完上面几个 DEMO，可以好好总结一下 <code>position:sticky</code> 的生效规则，明白了生效规则就会知道为什么有的时候设定的 <code>sticky</code> 会失效：</p><ol><li><p>须指定 top, right, bottom 或 left 四个阈值其中之一（且达到设定的阈值），才可使粘性定位生效。否则其行为与相对定位相同；</p><ul><li>并且 top 和 bottom 同时设置时，top 生效的优先级高，left 和 right 同时设置时，left 的优先级高</li></ul></li><li><p>设定为</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;">position: sticky;</span></span></code></pre></div><p>的元素的任意父节点的 overflow 属性必须是 visible，否则</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;">position: sticky;</span></span></code></pre></div><p>不会生效；</p><ul><li>如果 position: sticky 元素的任意父节点定位设置为 position: overflow，则父容器无法进行滚动，所以 position:sticky 元素也不会有滚动然后固定的情况</li></ul></li><li><p>在满足上述情况下，设定了 <code>position: sticky</code> 的元素的父容器的高度必须大于当前元素，否则也会失效。（当然，此时，<code>sticky</code> 吸附的基准元素就会变成父元素）</p></li></ol>',7),F=[h,p,k,o,d,r,c];function y(B,g,D,m,A,C){return e(),t("div",null,F)}const u=a(l,[["render",y]]);export{f as __pageData,u as default};
