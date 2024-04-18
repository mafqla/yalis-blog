import{_ as i,c as a,o as n,V as l,m as s}from"./chunks/framework.bW6FiXxS.js";const e="/assets/219847227-6182441c-ff6a-4195-a552-319831041dbf.PchKv7IS.gif",t="/assets/219847245-baf51088-c7e5-450d-b277-06b8f2989443._ovTX_Zr.gif",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/122-不定宽文本溢出跑马灯效果完美解决方案.md","filePath":"knowledge/FrontEnd/css/1-基础/122-不定宽文本溢出跑马灯效果完美解决方案.md","lastUpdated":1713406778000}'),p={name:"knowledge/FrontEnd/css/1-基础/122-不定宽文本溢出跑马灯效果完美解决方案.md"},h=l(`<h2 id="容器查询-cqw-和-css-数学函数-max" tabindex="-1">容器查询 cqw 和 CSS 数学函数 max <a class="header-anchor" href="#容器查询-cqw-和-css-数学函数-max" aria-label="Permalink to &quot;容器查询 cqw 和 CSS 数学函数 max&quot;">​</a></h2><p>到今天，我们重新审视这个问题。看看到今天，我们可以如何更加简单便捷的解决这个问题！</p><p>首先，我们的问题其实可以抽象成：</p><ol><li>判断文本宽度与容器宽度的大小差异，文本宽度是否大于容器宽度</li><li>如果超出，则设置来回位移动画，位移的幅度为容器宽度与文本宽度的差值</li></ol><p>那么，我们一步一步来。</p><p>假设我们的 HTML 结构如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;"> class</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#98C379;--shiki-dark:#C3E88D;">marquee</span><span style="--shiki-light:#98C379;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">	&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">span</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">Lorem ipsum dolor sit amet elit. Animi, aliquid.</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">span</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&lt;/</span><span style="--shiki-light:#E06C75;--shiki-dark:#F07178;">div</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">&gt;</span></span></code></pre></div><p>其中，div 为容器，span 为文本内容。同时，我们利用容器查询，设置父容器 <code>marquee</code> 为容器查询的容器，并且将基于容器的<code>inline-size</code> 维度。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">marquee</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  white-space</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> nowrap</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  container-type</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;"> inline-size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>继续，我们如何能够在 span 中得知，当前 span 的内容长度与父容器宽度谁比较大呢？</p><p>在之前，这是很难办到的，但是现在，我们有了 <strong>容器查询</strong> 后，可以靠容器查询单位 <strong>cqw</strong> 完成。</p><p>首先，什么是容器查询？<strong>容器查询</strong>它给予了 CSS，在不改变浏览器视口宽度的前提下，只是根据容器的宽度变化，对布局做成调整的能力。</p><p>容器查询带来了很多新的单位，其中有：</p><ul><li>cqw 容器查询宽度（Container Query Width）占比。1cqw 等于容器宽度的 1%。假设容器宽度是 1000px，则此时 1cqw 对应的计算值就是 10px。</li><li>cqh 容器查询高度（Container Query Height）占比。1cqh 等于容器高度的 1%。</li><li>cqi 表示容器查询内联方向尺寸（Container Query Inline-Size）占比。这个是逻辑属性单位，默认情况下等同于 cqw</li><li>cqb 容器查询块级方向尺寸（Container Query Block-Size）占比。同上，默认情况下等同于 cqh</li><li>cqmin 容器查询较小尺寸的（Container Query Min）占比。取 cqw 和 cqh 中较小的一个</li><li>cqmax 表示容器查询较大尺寸的（Container Query Min）占比。取 cqw 和 cqh 中较大的一个</li></ul><p>本文，我们会运用到其中的 cqw，1cqw 等于容器宽度的 1%。那么，当前容器的宽度，其实就是 100 cqw。</p><p>那么：</p><ol><li><code>width: 100%</code> ，对于 span 行内元素而言，其文本长度就是其整个的宽度，100% 代表的就是文本内容的长度</li><li><code>width: 100cqw</code> 表示的是设置了容器查询的 <code>.marquee</code> 的宽度（也就是父容器的宽度）</li></ol><p>OK，有了 <code>100%</code> 和 <code>100cqw</code> 怎么比较他们谁大谁小呢？其实我们的关键不是谁大谁小，而是：</p><ol><li>如果当前容器的宽度（也就是文本宽度）大于父容器宽度，需要得到一个动画位置值</li><li>如果当前容器的宽度（也就是文本宽度）小于父容器宽度，无需动画，也就是动画位移值为 0</li></ol><p>那么，我们的核心就变成了，0 与两个宽度差值的比较。刚好，CSS 中提供了比较大小数学函数 <code>max()</code> 和 <code>min()</code>。</p><p>铺垫了这么久，最终，我们得到最为核心的一行代码：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;">max(100% - 100cqw</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;"> 0px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">)</span></span></code></pre></div><p>当然，换一种思维，使用 <code>min()</code> 也是可以的：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;">min(100cqw - 100%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#C678DD;--shiki-dark:#BABED8;"> 0px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">)</span></span></code></pre></div><p>如果 span 内容长度，大于容器宽度，也就是 <code>100% - 100cqw</code> 大于 <code>0px</code>，那么其实也就得到了跑马灯效果应该位移的距离。</p><p>我们顺便也就将整个效果的代码写完了，完整的代码：</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">marquee</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  overflow</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> hidden</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  white-space</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> nowrap</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 200</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  resize</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> horizontal</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  container-type</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;"> inline-size</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">marquee</span><span style="--shiki-light:#E06C75;--shiki-dark:#FFCB6B;"> span</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  animation</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;"> marquee</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 3</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">s</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> linear</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> infinite</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> both</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> alternate</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span>
<span class="line"><span style="--shiki-light:#C678DD;--shiki-dark:#89DDFF;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">@keyframes</span><span style="--shiki-light:#61AFEF;--shiki-dark:#82AAFF;"> marquee</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#C792EA;">  to</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">    transform</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> translateX</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;">min</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">cqw</span><span style="--shiki-light:#56B6C2;--shiki-dark:#89DDFF;"> -</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 100</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">));</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>效果如下：</p><p><img src="`+e+'" alt="img" loading="lazy"></p><p>这样，到今天，我们可以轻易的实现：</p><ol><li>文本内容不超过容器宽度，正常展示</li><li>文本内容超过容器的情况，内容可以进行跑马灯来回滚动展示</li></ol><p>也就是如下的效果：</p><p><img src="'+t+'" alt="img" loading="lazy"></p>',33),k=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Pure CSS Marquee",src:"https://codepen.io/mafqla/embed/abxRWPR?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/abxRWPR">
  Pure CSS Marquee</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),B=s("p",null,"当然，硬要说的话，本方案还是存在一个缺陷，就是动画的时长是固定的，没法根据内容的长短响应式的进行适配。可能更适合文本内容相差不大的场景使用。",-1),r=[h,k,B];function d(F,c,o,D,g,y){return n(),a("div",null,r)}const m=i(p,[["render",d]]);export{C as __pageData,m as default};
