`text-fill-color` 究竟是何方神圣呢？从字面意思理解，直译就是文本填充颜色，其实它与 `color` 的作用是一样的，为文字设定颜色值。

而且，**text-fill-color 会覆盖 color 所定义的字体颜色**，也就是前者的优先级更高。可以看看这个 Demo：



<iframe height="300" style="width: 100%;" scrolling="no" title="-webkit-text-fill-color &amp;&amp; color" src="https://codepen.io/mafqla/embed/wvOWNzp?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/wvOWNzp">
  -webkit-text-fill-color &amp;&amp; color</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



那么，有了 `color` ，为何还多此一举出现了一个 `text-fill-color`？

## text-fill-color 与 color 的差异

关于这个说法，网上大部分文章给出的解释是，`text-fill-color` 可以设置 `transparent` 关键字，也就是使文字透明，而 `color` 无法设置 `transparent` 关键字。

这个说法是不准确的。

在 CSS3 之前，transparent 关键字不是一个真实的颜色，只能用于 background-color 和 border-color
中，表示一个透明的颜色。**而在支持 CSS3 的浏览器中，它被重新定义为一个真实的颜色**，transparent 可以用于任何需要 color 值的地方，也就是 color 属性是支持 transparent 的。

`text-fill-color` 与 `color` 的最大的差异，我觉得是 `text-fill-color` 的概念是借鉴了 SVG 图形，从 SVG 引进的，而 `color` 是传统意义上 CSS 的概念。

> 在 SVG 中，我们使用 `fill` 内联属性给 SVG 图形文本上色。

## text-fill-color 的兼容性

相比之下，其实 `text-fill-color` 的兼容性更差，大部分时候，我们使用它需要加上 `-webkit-` 前缀。

## 配合 text-stroke

说到 `text-fill-color`， 可以顺便再提一下 `text-stroke`，它也是 SVG 引进的概念，与 border 类似，不同的是它可以给文字描边。看看下面这个 Demo：



<iframe height="300" style="width: 100%;" scrolling="no" title="text-stroke" src="https://codepen.io/mafqla/embed/ZEPOwpw?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/ZEPOwpw">
  text-stroke</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

