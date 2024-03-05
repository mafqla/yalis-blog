import{_ as s,c as i,o as a,V as e}from"./chunks/framework.bW6FiXxS.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/91-运用 transform 导致文本模糊的现象.md","filePath":"knowledge/FrontEnd/css/1-基础/91-运用 transform 导致文本模糊的现象.md","lastUpdated":1709598740000}'),t={name:"knowledge/FrontEnd/css/1-基础/91-运用 transform 导致文本模糊的现象.md"},n=e(`<p>在我们的页面中，经常会出现这样的问题，一块区域内的文本或者边框，在展示的时候，变得特别的模糊。</p><h2 id="何时触发这种现象" tabindex="-1">何时触发这种现象？ <a class="header-anchor" href="#何时触发这种现象" aria-label="Permalink to &quot;何时触发这种现象？&quot;">​</a></h2><p>那么？什么时候会触发这种问题呢？在 Google 上，其实我们能搜到非常多类似的案例，总结而言：</p><ol><li><strong>当文本元素的某个祖先容器存在 <code>transform: translate()</code> 或者 <code>transform: scale()</code> 等 <code>transform</code> 操作时，容易出现这种问题</strong></li></ol><p>当然，这只是必要条件，不是充分条件。继续深入探究，会发现，必须还得同时满足一些其它条件：</p><ol><li><strong>元素作用了 <code>transform: translate()</code> 或者 <code>transform: scale()</code> 后的计算值产生了非整数</strong></li></ol><p>譬如，上述案例触发的 CSS 代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">container</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  position</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#BABED8;"> absolute</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  width</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 1104</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  height</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 475</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">px</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  top</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;"> 50</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#B2CCD6;">  transform</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#56B6C2;--shiki-dark:#82AAFF;"> translateY</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#D19A66;--shiki-dark:#F78C6C;">-50</span><span style="--shiki-light:#E06C75;--shiki-dark:#F78C6C;">%</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">);</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#BABED8;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p>由于元素的高度为 <code>475px</code>，<code>translateY(-50%)</code> 等于 <code>237.5px</code>，非整数，才导致了内部的字体模糊。</p><p>但是，需要注意的是，并非所有产生的非整数都会导致了内部的字体模糊。</p><p>这里有个简单的示意：</p><p>还是上述的例子，当高度从 <code>477px</code> 一直调整到 <code>469px</code> 的过程中，只有 <code>477px</code> 和 <code>475px</code> 导致了模糊，而 <code>473, 471, 469</code> 则没有。所以，这也只是引发模糊的一个必要条件。</p><ol><li><strong>文本内容是否模糊还与屏幕有关，高清屏（dpr &gt; 2）下不容易触发，更多发生在普通屏幕下（dpr = 1）</strong></li></ol><p>在我实测的过程中还发现，这个现象基本只会发生在 dpr 为 1 的普通屏幕下。</p><p>类似于 MAC 的高清屏幕则不太会触发这个问题。</p><blockquote><p>dpr = 物理像素 / 设备独立像素，表示设备像素比。这个与我们通常说的视网膜屏（多倍屏，Retina 屏）有关。设备像素比描述的是未缩放状态下，物理像素和设备独立像素的初始比例关系。</p></blockquote><ol><li><strong>并非所有浏览器都是这个表现，基本发生在 chromium 内核。</strong></li></ol><h2 id="为何发生这种现象呢" tabindex="-1">为何发生这种现象呢？ <a class="header-anchor" href="#为何发生这种现象呢" aria-label="Permalink to &quot;为何发生这种现象呢？&quot;">​</a></h2><p>那么，为何会发生这种现象？针对这个问题，没有找到特别官方的回答，普遍的认为是因为：</p><p><strong>由于浏览器将图层拆分到 GPU 以进行 3D 转换，而非整数的像素偏移，使得 Chrome 在字体渲染的时候，不是那么的精确</strong>。</p><p>关于这个问题，感兴趣的可以再看看这两个讨论：</p><ul><li><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=521364" target="_blank" rel="noreferrer">Chromium Bugs -- Issue 521364: Transformed text at fractional offsets is very blurry.</a></li><li><a href="https://github.com/kenwheeler/slick/issues/2275" target="_blank" rel="noreferrer">Serious bug: Slick Slider turns off subpixel font rendering on the entire site in Chrome #2275</a></li></ul><h2 id="如何解决" tabindex="-1">如何解决？ <a class="header-anchor" href="#如何解决" aria-label="Permalink to &quot;如何解决？&quot;">​</a></h2><p>那么针对这个问题，我们该如何解决呢？社区里给出的一种方案：</p><ol><li>给元素设置 <code>-webkit-font-smoothing: antialiased</code></li></ol><p><code>font-smooth</code> CSS 属性用来控制字体渲染时的平滑效果，该特性是非标准的，我们应该尽量不要在生产环境中使用它。并且在我的实测中，这个方法不太奏效。</p><ol><li>保证运用了 <code>transform: translate()</code> 或者 <code>transform: scale()</code> 的元素的高宽为偶数</li></ol><p>如果你赋予给元素的 <code>transform</code> 的值非常明确，譬如我上文例子中的利用其来对元素进行水平垂直居中 -- <code>transform: translate(-50%, -50%)</code>，让元素的高宽为偶数这个方法是可行的，但如果当你无法确定<code>transform</code> 的值，譬如 <code>transform: translateX(-31.24%)</code> 或者是 <code>transform: scale(1.05)</code>，那这个方法依旧无法奏效。</p><ol><li>弃用 <code>transform</code></li></ol><p>如果这个问题对你的页面非常致命，那么只能弃用 <code>transform</code>，寻找替代方案。大部分的时候，我们还是可以找到不使用 <code>transform</code> 的替代方案的。</p><p>总结一下，本文简单探究了在 Chromium 内核下，使用了 <code>transform</code> 导致内部文本模糊的现象，并且给出了一些可尝试的解决方案，实际遇到，需要多加调试，尝试最优的解决方案。</p>`,31),o=[n];function l(r,p,h,d,c,k){return a(),i("div",null,o)}const g=s(t,[["render",l]]);export{F as __pageData,g as default};
