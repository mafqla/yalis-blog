import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _imports_0 = "/assets/120914104-6c737280-c6ce-11eb-8fd5-ebf0c0a35273.HOX1AjYN.png";
const _imports_1 = "/assets/121348056-75787400-c95a-11eb-8e81-4a72d2ae4644.wPDsIBrc.gif";
const _imports_2 = "/assets/121348133-8c1ecb00-c95a-11eb-8191-96d00d8a26b0.orBtLGVd.gif";
const _imports_3 = "/assets/120913837-bc513a00-c6cc-11eb-977b-c10163d573e2.DF14NDhh.gif";
const _imports_4 = "/assets/121324679-879ae800-c943-11eb-9e05-68a825768f7f.K5TNTiwl.gif";
const _imports_5 = "/assets/121348313-c8522b80-c95a-11eb-82e5-e8ae0c2b1c42.Zzh0llmK.gif";
const _imports_6 = "/assets/121348945-8ecdf000-c95b-11eb-81fb-46ef8fa4672a.e3g7q97J.gif";
const _imports_7 = "/assets/121320515-d34b9280-c93f-11eb-8329-815a0fbd0fa7.ZJ4zOQ1n.gif";
const _imports_8 = "/assets/121348665-34349400-c95b-11eb-9f41-5bf933e3d59c.uV-0JTCu.gif";
const _imports_9 = "/assets/121349160-c6d53300-c95b-11eb-82e9-1a4bb6d75eaa.buyb8V0P.gif";
const _imports_10 = "/assets/121349244-dbb1c680-c95b-11eb-948c-005eaf67f5ff.NdrXqeXn.gif";
const _imports_11 = "/assets/121349380-03a12a00-c95c-11eb-8cba-2b3c3ecf264b.uslyqEGV.gif";
const _imports_12 = "/assets/121349427-13b90980-c95c-11eb-8af1-02ad1e759d5c.dW1_cmR_.gif";
const _imports_13 = "/assets/121349465-1e739e80-c95c-11eb-8e18-0f5d4350b7c9.OlMPG0pl.gif";
const _imports_14 = "/assets/121349487-259aac80-c95c-11eb-8cc3-f1f346b38822.zwJuhyQG.gif";
const _imports_15 = "/assets/122876354-ff1b3f00-d367-11eb-8f8e-4201fb00d499.h0m6omdD.gif";
const _imports_16 = "/assets/122876364-017d9900-d368-11eb-8d94-e8d44e40f050.ZAUBc4ci.gif";
const _imports_17 = "/assets/108797222-a60fea00-75c5-11eb-852a-442d79263b09.mdXKL7Es.gif";
const _imports_18 = "/assets/122877740-81f0c980-d369-11eb-8a28-cd3bb87258f2.lfw2-lzU.gif";
const _imports_19 = "/assets/122877744-83ba8d00-d369-11eb-99fc-f744ef1c4d4a.uFYpKI8M.gif";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/73-Web 动画原则及技巧浅析.md","filePath":"knowledge/FrontEnd/css/1-基础/73-Web 动画原则及技巧浅析.md","lastUpdated":1708246584000}');
const _sfc_main = { name: "knowledge/FrontEnd/css/1-基础/73-Web 动画原则及技巧浅析.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>在 Web 动画方面，有一套非常经典的原则 -- <a href="https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation" target="_blank" rel="noreferrer">Twelve basic principles of animation</a>，也就是关于动画的 12 个基本原则（也称之为迪士尼动画原则），网上对它的解读延伸的文章也非常之多：</p><ul><li><a href="https://cssanimation.rocks/principles/" target="_blank" rel="noreferrer">Animation Principles for the Web</a></li><li><a href="https://cssanimation.rocks/cn/principles/" target="_blank" rel="noreferrer">[译文]网页动画的十二原则</a></li></ul><p>其中使用的示例 DEMO 属于比较简单易懂，但是没有很好地体现在实际生产中应该如何灵活运用。今天本文将带大家再次复习复习，并且替换其中的最基本的 DEMO，换成一些到今天非常实用，非常酷炫的动画 DEMO 效果。</p><h2 id="squash-and-stretch-挤压和拉伸" tabindex="-1">Squash and stretch -- 挤压和拉伸 <a class="header-anchor" href="#squash-and-stretch-挤压和拉伸" aria-label="Permalink to &quot;Squash and stretch -- 挤压和拉伸&quot;">​</a></h2><p>挤压和拉伸的目的是为绘制的对象赋予重量感和灵活性。它可以应用于简单的物体，如弹跳球，或更复杂的结构，如人脸的肌肉组织。</p><p>应用在动画中，这一原则最重要的方面是对象的体积在被挤压或拉伸时不会改变。如果一个球的长度被垂直拉伸，它的宽度（三个维度，还有它的深度）需要相应地水平收缩。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="img" loading="lazy"></p><p>看看上面这张图，很明显右边这个运动轨迹要比左边的真实很多。</p><p>原理动画如下：</p><p><img${ssrRenderAttr("src", _imports_1)} alt="img" loading="lazy"></p><p>类似的一些比较有意思的 Web 动画 DEMO：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Flippy Loader 🍳" src="https://codepen.io/mafqla/embed/eYXXBmV?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/eYXXBmV&quot;&gt;
  CSS Flippy Loader 🍳&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>仔细看上面这个 Loading 动画，每个块在跳起之前都会有一个压缩准备动作，在压缩的过程中高度变低，宽度变宽，这就是挤压和拉伸，让动画看上去更加真实。</p><p>OK，再看两个类似的效果，加深下印象：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Loading Animation" src="https://codepen.io/mafqla/embed/xxBBRby?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/xxBBRby&quot;&gt;
  CSS Loading Animation&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Animation Loader - Jelly Box" src="https://codepen.io/mafqla/embed/YzggpPo?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/YzggpPo&quot;&gt;
  CSS Animation Loader - Jelly Box&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>简单总结一下，挤压和拉伸的核心在于保持对象的体积一致，当拉伸元素时，它的宽度需要变薄，而当挤压元素时，它的宽度需要变宽。</p><h2 id="anticipation-预备动作" tabindex="-1">Anticipation -- 预备动作 <a class="header-anchor" href="#anticipation-预备动作" aria-label="Permalink to &quot;Anticipation -- 预备动作&quot;">​</a></h2><p>准备动作用于为主要的动画动作做好准备，并使动作看起来更逼真。</p><p>譬如从地板上跳下来的舞者必须先弯曲膝盖，挥杆的高尔夫球手必须先将球杆向后挥动。</p><p>原理动画如下，能够看到滚动之前的一些准备动作：</p><p><img${ssrRenderAttr("src", _imports_2)} alt="img" loading="lazy"></p><p>看看一些实际应用的 chang 场景，下面这个动画效果：</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Anticipation 1" loading="lazy"></p><p>小球向上滚动，但是仔细看的话，每次向上滚动的时候都会先向后摆一下，可以理解为是一个蓄力动作，也就是我们说的准备动作。</p><p>类似的，看看这个购物车动画，运用了非常多的小技巧，其中之一就是，车在向前冲之前会后退一点点进行一个蓄力动作，整个动画的感觉明显就不一样，它让动画看起来更加的自然：</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Anticipation" loading="lazy"></p><h2 id="staging-演出布局" tabindex="-1">Staging -- 演出布局 <a class="header-anchor" href="#staging-演出布局" aria-label="Permalink to &quot;Staging -- 演出布局&quot;">​</a></h2><p>Staging 意为演出布局，它的目的是引导观众的注意力，并明确一个场景中什么是最重要的。</p><p>可以通过多种方式来完成，例如在画面中放置角色、使用光影，或相机的角度和位置。该原则的本质是关注核心内容，避免其他不必要的细节吸引走用户的注意力。</p><p>原理动画如下：</p><p><img${ssrRenderAttr("src", _imports_5)} alt="img" loading="lazy"></p><p>上述 Gif 原理图效果不太明显，看看示例效果：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Loading Animation" src="https://codepen.io/mafqla/embed/ZEPPBGv?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/ZEPPBGv&quot;&gt;
  CSS Loading Animation&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>该技巧的核心就是在动画的过程中把主体凸显，把非主体元素通过模糊、变淡等方式弱化其效果，降低用户在其之上的注意力。</p><h2 id="straight-ahead-action-and-pose-to-pose-连续运动和姿态对应" tabindex="-1">Straight-Ahead Action and Pose-to-Pose -- 连续运动和姿态对应 <a class="header-anchor" href="#straight-ahead-action-and-pose-to-pose-连续运动和姿态对应" aria-label="Permalink to &quot;Straight-Ahead Action and Pose-to-Pose -- 连续运动和姿态对应&quot;">​</a></h2><p>其实表示的就是逐帧动画和补间动画：</p><ul><li><strong>FrameAnimation（逐帧动画）</strong>：将多张图片组合起来进行播放，可以利用 CSS Aniation 的 Steps，画面由一帧一帧构成，类似于漫画书</li><li><strong>TweenAnimation（补间动画）</strong>：补间动画是在时间帧上进行关键帧绘制，不同于逐帧动画的每一帧都是关键帧，补间动画可以在一个关键帧上绘制一个基础形状，然后在时间帧上对另一个关键帧进行形状转变或绘制另一个形状等，然后中间的动画过程是由计算机自动生成。</li></ul><p>这个应该是属于最基础的了，在不同场景下有不同的妙用。我们在用 CSS 实现动画的过程中，使用的比较多的应该是补间动画，逐帧动画也很有意思，譬如设计师设计好的复杂动画，利用多张图片拼接成逐帧动画也非常不错。</p><p>逐帧动画和补间动画适用在不同的场合，没有谁更好，只有谁更合适，比较下面两个时钟动画，其中一个的秒针运用的是逐帧动画，另外一个则是补间动画：</p><ul><li>时钟秒针运用的是逐帧动画：</li></ul><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS3 Working Clock" src="https://codepen.io/mafqla/embed/xxBBRGy?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/xxBBRGy&quot;&gt;
  CSS3 Working Clock&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><ul><li>时钟秒针运用的是补间动画：</li></ul><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Rotary Clock" src="https://codepen.io/mafqla/embed/oNVVYXV?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/oNVVYXV&quot;&gt;
  CSS Rotary Clock&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="follow-through-and-overlapping-action-跟随和重叠动作" tabindex="-1">Follow through and overlapping action 跟随和重叠动作 <a class="header-anchor" href="#follow-through-and-overlapping-action-跟随和重叠动作" aria-label="Permalink to &quot;Follow through and overlapping action 跟随和重叠动作&quot;">​</a></h2><p>跟随和重叠动作是两种密切相关的技术的总称，它们有助于更真实地渲染运动，并有助于给人一种印象，即运动的元素遵循物理定律，包括惯性原理。</p><ul><li><strong>跟随</strong>意味着在角色停止后，身体松散连接的部分应该继续移动，并且这些部分应该继续移动到角色停止的点之外，然后才被拉回到重心或表现出不同的程度的振荡阻尼；</li><li><strong>重叠动作</strong>是元素各部分以不同速率移动的趋势（手臂将在头部的不同时间移动等等）；</li><li>第三种相关技术是<strong>拖动</strong>，元素开始移动，其中一部分需要几帧才能追上。</li></ul><p>要创造一个重叠动作的感觉，我们可以让元件以稍微不同的速度移动到每处。这是一种在 iOS 系统的视窗过渡中被运用得很好的方法。一些按钮和元件以不同速率运动，整体效果会比全部东西以相同速率运动要更逼真，并留出时间让访客去适当理解变化。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_6)} alt="img" loading="lazy"></p><p>看看下面这个购物车动画，仔细看购物车，在移动到停止的过程中，有个很明显的刹车再拉回的感觉，这里运用到了跟随的效果，让动画更加生动真实：</p><p><img${ssrRenderAttr("src", _imports_7)} alt="Follow through and overlapping action" loading="lazy"></p><h2 id="slow-in-and-slow-out-缓入缓出" tabindex="-1">Slow In and Slow Out -- 缓入缓出 <a class="header-anchor" href="#slow-in-and-slow-out-缓入缓出" aria-label="Permalink to &quot;Slow In and Slow Out -- 缓入缓出&quot;">​</a></h2><p>现实世界中物体的运动，如人体、动物、车辆等，需要时间来加速和减速。</p><p>真实的运动效果，它的缓动函数一定不是 Linear。出于这个原因，运动往往是逐步加速并在停止前变慢，实现一个慢进和慢出的效果，以贴近更逼真的动作。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_8)} alt="img" loading="lazy"></p><p>这个还是很好理解的。真实世界中，很少有缓动函数是 Linear 的运动。</p><h2 id="arc-弧线运动" tabindex="-1">Arc -- 弧线运动 <a class="header-anchor" href="#arc-弧线运动" aria-label="Permalink to &quot;Arc -- 弧线运动&quot;">​</a></h2><p>大多数自然动作倾向于遵循一个拱形轨迹，动画应该遵循这个原则，遵循隐含的<strong>弧形</strong>以获得更大的真实感。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_9)} alt="img" loading="lazy"></p><p>嗯哼，在很多动画中，使用弧线代替直线，能够让动画效果更佳的逼真。看看下面这个烟花粒子动画：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Particles, humankind&#39;s only weakness" src="https://codepen.io/mafqla/embed/rNRRWOd?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/rNRRWOd&quot;&gt;
  Particles, humankind&#39;s only weakness&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>整个烟花粒子动画看上去非常的自然，因为每个粒子的下落都遵循了自由落体的规律，它们的运动轨迹都是弧线而不是直线。</p><h2 id="secondary-action-次要动作" tabindex="-1">Secondary Action -- 次要动作 <a class="header-anchor" href="#secondary-action-次要动作" aria-label="Permalink to &quot;Secondary Action -- 次要动作&quot;">​</a></h2><p>将次要动作添加到主要动作可以使场景更加生动，并有助于支持主要动作。走路的人可以同时摆动手臂或将手臂放在口袋里，说话或吹口哨，或者通过面部表情来表达情绪。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_10)} alt="img" loading="lazy"></p><p>简单的一个应用实例，看看下面这个动画：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Submarine Animation (Pure CSS)" src="https://codepen.io/mafqla/embed/oNVVYjV?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/oNVVYjV&quot;&gt;
  Submarine Animation (Pure CSS)&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>这里实现了一个潜艇向前游动的画面，动画本身还有很多可以优化的地方。但也有一些值得学习肯定的地方，动画使用了尾浆转动和气泡和海底景物移动。</p><p>同时，值得注意的是，窗口的反光也是一个很小的细节，表示船体在移动，这个就属于一个次要动作，衬托出主体的移动。</p><p>再看看下面这打印动画，键盘上按键的上上下下模拟了点击效果，其实也是个次要动作，衬托主体动画效果：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="CSS Typewriter 📄" src="https://codepen.io/mafqla/embed/wvOOoMW?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/wvOOoMW&quot;&gt;
  CSS Typewriter 📄&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="timing-时间节奏" tabindex="-1">Timing -- 时间节奏 <a class="header-anchor" href="#timing-时间节奏" aria-label="Permalink to &quot;Timing -- 时间节奏&quot;">​</a></h2><p>时间是指给定动作的绘图或帧数，它转化为动画动作的速度。</p><p>在纯粹的物理层面上，正确的计时会使物体看起来遵守物理定律。例如，物体的重量决定了它对推动力的反应，因为重量轻的物体会比重量大的物体反应更快。</p><p>同一个动画，使用不同的速率展示，其效果往往相差很多。对于 Web 动画而言，可能只需要调整 <code>animation-duration</code> 或 <code>transition-duration</code> 的值。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_11)} alt="img" loading="lazy"></p><p>可以看出，同个动画，不同的缓动函数，或者赋予不同的时间，就能产生很不一样的效果。</p><p>当然，时间节奏可以运用在很多地方，譬如在一些 Loading 动画中：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Only Css 3D Cube " src="https://codepen.io/mafqla/embed/yLwwVez?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/yLwwVez&quot;&gt;
  Only Css 3D Cube &lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>又或者是这样，同个动画，不同的速率：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Rotating Circles Preloader" src="https://codepen.io/mafqla/embed/rNRRWxv?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/rNRRWxv&quot;&gt;
  Rotating Circles Preloader&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>也可以是同样的延迟、同样的速率，但是不同的方向：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="2020 SVG Animation | Using pathLength=1 with stroke-dashoffset Tutorial | @keyframers 2.29.0" src="https://codepen.io/mafqla/embed/dyrrOGE?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/dyrrOGE&quot;&gt;
  2020 SVG Animation | Using pathLength=1 with stroke-dashoffset Tutorial | @keyframers 2.29.0&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><h2 id="exaggeration-夸张手法" tabindex="-1">Exaggeration -- 夸张手法 <a class="header-anchor" href="#exaggeration-夸张手法" aria-label="Permalink to &quot;Exaggeration -- 夸张手法&quot;">​</a></h2><p>夸张是一种对动画特别有用的效果，因为力求完美模仿现实的动画动作可能看起来是静态和沉闷的。</p><p>使用夸张时，一定程度的克制很重要。如果一个场景包含多个元素，则应平衡这些元素之间的关系，以避免混淆或吓倒观众。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_12)} alt="img" loading="lazy"></p><p>OK，不同程度的展现对效果的感官是不一样的，对比下面两个故障艺术动画：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Glitch  Animation" src="https://codepen.io/mafqla/embed/MWxxbyr?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/MWxxbyr&quot;&gt;
  Glitch  Animation&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>过多的现实主义会毁掉动画，或者说让它缺乏吸引力，使其显得静态和乏味。相反，为元素对象添加一些夸张，使它们更具活力，能够让它们更吸引眼球。</p><h2 id="solid-drawing-扎实的描绘" tabindex="-1">Solid drawing -- 扎实的描绘 <a class="header-anchor" href="#solid-drawing-扎实的描绘" aria-label="Permalink to &quot;Solid drawing -- 扎实的描绘&quot;">​</a></h2><p>这个原则表示我们的动画需要尊重真实性，譬如一个 3D 立体绘图，就需要考虑元素在三维空间中的形式。</p><p>了解掌握三维形状、解剖学、重量、平衡、光影等的基础知识。有助于我们绘制出更为逼真的动画效果。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_13)} alt="img" loading="lazy"></p><p>再再看看下面这个动画，名为 Close the blinds -- 关上百叶窗：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Close the blinds" src="https://codepen.io/mafqla/embed/LYaabNa?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/LYaabNa&quot;&gt;
  Close the blinds&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>hover 的时候有一个关上动画，使用多块 div 模拟了百叶窗的落下，同时配合了背景色从明亮到黑暗的过程，很好的利用了色彩光影辅助动画的展示。</p><p>再看看这个摆锤小动画，也是非常好的使用了光影、视角元素：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="The Three-Body Problem" src="https://codepen.io/mafqla/embed/mdooOEy?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/mdooOEy&quot;&gt;
  The Three-Body Problem&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>最后这个 Demo，虽然是使用 CSS 实现的，但是也尽可能的还原模拟了现实中纸张飞舞的形态，并且对纸张下方阴影的变化也做了一定的变化：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="➰📃 Paper Pirouette | 3D CSS-only flying page animation tutorial | @keyframers 2.18.0" src="https://codepen.io/mafqla/embed/BabbQzz?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/BabbQzz&quot;&gt;
  ➰📃 Paper Pirouette | 3D CSS-only flying page animation tutorial | @keyframers 2.18.0&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>好的动画，细节是经得起推敲的。</p><h2 id="appeal-吸引力" tabindex="-1">Appeal -- 吸引力 <a class="header-anchor" href="#appeal-吸引力" aria-label="Permalink to &quot;Appeal -- 吸引力&quot;">​</a></h2><p>一反往常，精美的细节往往能非常好的吸引用户的注意力。</p><p>吸引力是艺术作品的特质，而如何实现有吸引力的作品则需要不断的尝试。</p><p>原理示意图：</p><p><img${ssrRenderAttr("src", _imports_14)} alt="img" loading="lazy"></p><p>我觉得这一点可能是 Web 动画的核心，一个能够吸引人的动画，它肯定是有某些特质的，让我们一起来欣赏下。</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Download interaction" src="https://codepen.io/mafqla/embed/MWxxber?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/MWxxber&quot;&gt;
  Download interaction&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>通过一连串的动作，动画展开、箭头移动、进度条填满、数字变化，把一个下载动画展示的非常 Nice，让人在等待的过程并不觉得枯燥。</p><p>再来看看这个视频播放的效果：</p><iframe height="300" style="${ssrRenderStyle({ "width": "100%" })}" scrolling="no" title="Video button animation - Only CSS" src="https://codepen.io/mafqla/embed/JjzzbKw?default-tab=html%2Cresult&amp;editable=true&amp;theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen &lt;a href=&quot;https://codepen.io/mafqla/pen/JjzzbKw&quot;&gt;
  Video button animation - Only CSS&lt;/a&gt; by mafqla (&lt;a href=&quot;https://codepen.io/mafqla&quot;&gt;@mafqla&lt;/a&gt;)
  on &lt;a href=&quot;https://codepen.io&quot;&gt;CodePen&lt;/a&gt;.
</iframe><p>通过一个遮罩 hover 放大，再到点击全屏的变化，一下子就将用户的注意力给吸引了过来。</p><h2 id="web-动画的一些常见误区" tabindex="-1">Web 动画的一些常见误区 <a class="header-anchor" href="#web-动画的一些常见误区" aria-label="Permalink to &quot;Web 动画的一些常见误区&quot;">​</a></h2><p>当然，上述的一些技巧源自于<strong>迪士尼动画原则</strong>，我们可以将其中的一些思想贯穿于我们的 Web 动画的设计之中。</p><p>但是，必须指出的是，Web 动画本身在使用的时候，也有一些原则是我们需要注意的。主要有下面几点：</p><ul><li>增强动画与页面元素之间的关联性</li><li>不要为了动画而动画，要有目的性</li><li>动画不要过于缓慢，否则会阻碍交互</li></ul><h3 id="增强动画与页面元素之间的关联性" tabindex="-1">增强动画与页面元素之间的关联性 <a class="header-anchor" href="#增强动画与页面元素之间的关联性" aria-label="Permalink to &quot;增强动画与页面元素之间的关联性&quot;">​</a></h3><p>这个是一个常见的问题，经常会看到一些动画与主体之间没有关联性。关联性背后的逻辑，能帮助用户在界面布局中理解刚发生的变化，是什么导致了变化。</p><p>好的动画可以做到将页面的多个环节或者场景有效串联。</p><p>比较下面两个动画，第二个就比第一个更有关联性：</p><p>没有强关联性的：</p><p><img${ssrRenderAttr("src", _imports_15)} alt="img" loading="lazy"></p><p>有关联性的：</p><p><img${ssrRenderAttr("src", _imports_16)} alt="img" loading="lazy"></p><p>很明显，第二个动画比第一个动画更能让用户了解页面发生的变化。</p><h3 id="不要为了动画而动画-要有目的性" tabindex="-1">不要为了动画而动画，要有目的性 <a class="header-anchor" href="#不要为了动画而动画-要有目的性" aria-label="Permalink to &quot;不要为了动画而动画，要有目的性&quot;">​</a></h3><p>这一点也很重要，不要为了动画而动画，要有目的性，很多时候很多页面的动画非常莫名其妙。</p><p>emm，简单一点来说就是单纯的为了炫技而存在的动画。这种动画可以存在于你的 Demo，你的个人网站中，但不太适合用于线上业务页面中。</p><p>使用动画应该有明确的目的性，譬如 Loading 动画能够让用户感知到页面正在发生变化，正在加载内容。</p><p><img${ssrRenderAttr("src", _imports_17)} alt="img" loading="lazy"> 在我们的交互过程中，适当的增加过渡与动画，能够很好的让用户感知到页面的变化。类似的还有一些滚动动画。丝滑的滚动切换比突兀的内容明显是更好的体验。</p><h3 id="动画不要过于缓慢-否则会阻碍交互" tabindex="-1">动画不要过于缓慢，否则会阻碍交互 <a class="header-anchor" href="#动画不要过于缓慢-否则会阻碍交互" aria-label="Permalink to &quot;动画不要过于缓慢，否则会阻碍交互&quot;">​</a></h3><p>缓慢的动画，它产生了不必要的停顿。</p><p>一些用户会频繁看到它们的过渡动画，尽可能的保持简短。让动画持续时间保持在 300ms 或更短。</p><p>比较下面两个动画，第一次可能会让用户耳目一新，但是如果用户在浏览过程中频繁出现通过操作，过长的转场动画会消耗用户大量不必要的时间：</p><p>过长的转场动画：</p><p><img${ssrRenderAttr("src", _imports_18)} alt="img" loading="lazy"></p><p>缩短转场动画时间，保持恰当的时长：</p><p><img${ssrRenderAttr("src", _imports_19)} alt="img" loading="lazy"></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h2 id="考虑动画的性价比" tabindex="-1">考虑动画的性价比 <a class="header-anchor" href="#考虑动画的性价比" aria-label="Permalink to &quot;考虑动画的性价比&quot;">​</a></h2><p>最后一条，就是动画虽好，但是打磨一个精品动画是非常耗时的，尤其是在现在非常多的产品业务都是处于一种敏捷开发迭代之下。</p><p>一个好的 Web 动画从构思到落地，绝非前端一个人的工作，需要产品、设计、前端等等相关人员公共努力， 不断修改才能最终呈现比较好的效果。所以在项目初期，一定需要考虑好性价比，是否真的值得为了一个 Web 动画花费几天时间呢？当然这是一个非常见仁见智的问题。</p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li>原理图来源 -- <a href="https://www.creativebloq.com/advice/understand-the-12-principles-of-animation" target="_blank" rel="noreferrer">Understand Disney&#39;s 12 principles of animation</a></li><li><a href="https://cssanimation.rocks/principles/" target="_blank" rel="noreferrer">Animation Principles for the Web</a></li><li><a href="https://cssanimation.rocks/cn/principles/" target="_blank" rel="noreferrer">[译文]网页动画的十二原则</a></li><li><a href="https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation" target="_blank" rel="noreferrer">Twelve basic principles of animation</a></li><li><a href="http://www.woshipm.com/pd/379898.html" target="_blank" rel="noreferrer">功能性动画设计：优秀的转场效果</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/FrontEnd/css/1-基础/73-Web 动画原则及技巧浅析.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _73Web__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _73Web__________ as default
};
