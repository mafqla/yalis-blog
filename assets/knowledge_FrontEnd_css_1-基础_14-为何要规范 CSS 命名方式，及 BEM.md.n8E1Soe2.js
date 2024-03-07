import{_ as e,c as s,o as i,L as a}from"./chunks/framework.HB-xfCmj.js";import"./app.pHtHZ9Jo.js";import"./chunks/theme.ykc7KowD.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/14-为何要规范 CSS 命名方式，及 BEM.md","filePath":"knowledge/FrontEnd/css/1-基础/14-为何要规范 CSS 命名方式，及 BEM.md","lastUpdated":1709799342000}'),o={name:"knowledge/FrontEnd/css/1-基础/14-为何要规范 CSS 命名方式，及 BEM.md"},l=a(`<h2 id="_14、为何要规范-css-命名方式-及-bem" tabindex="-1">14、为何要规范 CSS 命名方式，及 BEM <a class="header-anchor" href="#_14、为何要规范-css-命名方式-及-bem" aria-label="Permalink to &quot;14、为何要规范 CSS 命名方式，及 BEM&quot;">​</a></h2><p>CSS 的命名方式及规范一直处于很混乱的状态，每个团队内部或多或少都有自己的标准。</p><p>为什么要规范 CSS 的命名方式？</p><p>有过接手别人项目的经历的话，肯定会有这样的感触。就算只是修改几处样式，面对一大堆不是自己写的 CSS ，内心也是崩溃的。</p><p>不规范的或者没有统一的命名方式，让你不敢修改别人的 CSS，<strong>他写的这个样式是否有在其他地方引用？这个样式怎么在 DOM 中使用了，但是在样式表中没法找到，能不能删除？</strong></p><p>而良好的 CSS 命名规范，则能有效的规避大部分这些问题。</p><p>譬如我们组内遵循的一套命名规范，其中比较重要的一部分：</p><ul><li>布局：以 <code>g</code> 为命名空间，例如：<code>g-wrap</code> 、<code>g-header</code>、<code>g-content</code></li><li>状态：以 <code>s</code> 为命名空间，表示动态的、具有交互性质的状态，例如：<code>s-current</code>、<code>s-selected</code></li><li>工具：以 <code>u</code> 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：<code>u-clearfix</code>、<code>u-ellipsis</code></li><li>组件：以 <code>m</code> 为命名空间，表示可复用、移植的组件模块，例如：<code>m-slider</code>、<code>m-dropMenu</code></li><li>钩子：以 <code>j</code> 为命名空间，表示特定给 JavaScript 调用的类名，例如：<code>j-request</code>、<code>j-open</code></li></ul><p>我觉得没有说哪个规范是最好的，适合自己团队的，能够提高效率的命名规范就是好的。</p><p>这里再介绍一下比较受欢迎的 BEM 命名规范。</p><p>BEM 的意思就是块（block）、元素（element）、修饰符（modifier），是由 Yandex 团队提出的一种 CSS Class 命名方法。</p><p>类似于：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code"><code><span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">block</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">{}</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">block__element</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">{}</span></span>
<span class="line"><span style="--shiki-light:#D19A66;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#D19A66;--shiki-dark:#FFCB6B;">block--modifier</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#89DDFF;">{}</span></span></code></pre></div><p>BEM 这种巧妙的命名方法让你的 CSS 类对其他开发者来说更加透明而且更有意义。BEM 代表块（Block），元素（Element），修饰符（Modifier）。上图很好地解释了什么是块，什么是元素。</p><ul><li>就一个页面来说，开发者其实知道它是由各类模块「块」构成的。这个 Block 并非 inline-block 里的 block，而是所有东西都划分为一个独立的模块，block 是可以相互嵌套的。</li><li>而「元素」是块中的一部分，具有某种功能。元素是依赖上下文的。</li><li>它们只有处于他们应该属于的块的上下文中时才是有意义的。「修饰符」则表示块或元素的一些状态，如 hover、active 和 disabled 等。</li></ul><p>BEM 中，一个项目中的块名必须是唯一的，明确指出它所描述的是哪个块。相同块的实例可以有相同的名字。一个块范围内的一种元素的名字也必须是唯一的。一种元素可以重复出现多次。</p><p>最终使用 BEM 命名出来的 CLASS 样式文件肯定是很不美观，因为使用了单下划线，双下划线，双连接线。但是项目具有一定规模之后，这种命名方式带来的好处也是显而易见的。</p><p>BEM 思想的优劣，可以看看知乎大猫的回答：</p><p><a href="https://www.zhihu.com/question/21935157" target="_blank" rel="noreferrer">如何看待 CSS 中 BEM 的命名方式？</a></p>`,19),t=[l];function c(p,d,n,r,h,_){return i(),s("div",null,t)}const g=e(o,[["render",c]]);export{m as __pageData,g as default};
