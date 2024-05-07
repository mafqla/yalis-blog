## 11、IFC、BFC、GFC 与 FFC 知多少

这么多 `*FC` 都是些啥？

FC 即是 Formatting Contexts ，译作格式化上下文。 `*FC` 可以称作视觉格式化模型。CSS 视觉格式化模型(visual formatting model)是用来处理文档并将它显示在视觉媒体上的机制。这是 CSS 的一个基础概念。

比较常见的是 CSS2.1 规范中的 IFC（Inline Formatting Contexts）与 BFC（Block Formatting Contexts），至于后面两个，则是 CSS3 新增规范，GFC（GridLayout Formatting Contexts）以及 FFC（Flex Formatting Context）。

FC 是网页 CSS 视觉渲染的一部分，用于决定盒子模型的布局、其子元素将如何定位以及和其他元素的关系和相互作用。

理解各种 FC 背后的原理是掌握各类 CSS 布局的关键。

先了解几个概念，

### Box

Box 是 CSS 布局的对象和基本单位，直观点说就是一个页面是由很多个 Box (即 boxes)组成的，元素的类型和 display 属性决定了 Box 的类型。

1. block-level Box：当元素的 CSS 属性 display 为 block, list-item 或 table 时，它是块级元素 block-level 。块级元素（比如`<p>`)视觉上呈现为块，竖直排列。
   每个块级元素至少生成一个块级盒（block-level Box）参与 BFC ，称为主要块级盒(principal block-level box)。一些元素，比如`<li>`，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒。
2. Inline-level Box：当元素的 CSS 属性 display 的计算值为 inline, inline-block 或 inline-table 时，称它为行内级元素。视觉上它将内容与其它行内级元素排列为多行。典型的如段落内容，有文本或图片，都是行内级元素。
   行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文 IFC 。
3. flex container：当元素的 CSS 属性 display 的计算值为 flex 或 inline-flex ，称它为弹性容器。
   `display:flex`这个值会导致一个元素生成一个块级（block-level）弹性容器框。
   `display:inline-flex`这个值会导致一个元素生成一个行内级（inline-level）弹性容器框。
4. grid container：当元素的 CSS 属性 display 的计算值为 grid 或 inline-grid，称它为栅格容器。

> 栅格盒模型值，是一个仍处于实验中的属性。

### 块容器盒（block container box）

只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒的叫做**块容器盒子**。

也就是说，块容器盒要么只包含行内级盒，要么只包含块级盒。

> 块级盒（block-level Box）是描述元素跟它的父元素与兄弟元素之间的表现。

> 块容器盒（block container box）描述元素跟它的后代之间的影响。

### 块盒（BLock Boxes）

同时是块容器盒的块级盒称为块盒(block boxes)

> 顶住，概念真的很多。。。

### 行盒(Line boxes)

行盒由行内格式化上下文(inline formatting context)产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。 当有浮动时, 行盒从左浮动的最右边排版到右浮动的最左边。

### IFC（Inline Formatting Contexts）行内级格式化上下文

行内级格式化上下文用来规定行内级盒子的格式化规则。

先来看看如何生成一个 IFC ：

IFC 只有在一个块级元素中**仅包含**内联级别元素时才会生成。

#### 布局规则

1. 内部的盒子会在水平方向，一个接一个地放置。
2. 这些盒子垂直方向的起点从包含块盒子的顶部开始。
3. 摆放这些盒子的时候，它们在水平方向上的 padding、border、margin 所占用的空间都会被考虑在内。
4. 在垂直方向上，这些框可能会以不同形式来对齐（vertical-align）：它们可能会使用底部或顶部对齐，也可能通过其内部的文本基线（baseline）对齐。
5. 能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和存在的浮动来决定。
6. IFC 中的 line box 一般左右边都贴紧其包含块，但是会因为 float 元素的存在发生变化。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。
7. IFC 中的 line box 高度由 CSS 行高计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同（比如一行包含了较高的图片，而另一行只有文本）
8. 当 inline-level boxes 的总宽度少于包含它们的 line box 时，其水平渲染规则由 `text-align` 属性来确定，如果取值为 `justify`，那么浏览器会对 inline-boxes（注意不是 inline-table 和 inline-block boxes）中的文字和空格做出拉伸。
9. 当一个 inline box 超过 line box 的宽度时，它会被分割成多个 boxes，这些 boxes 被分布在多个 line box 里。如果一个 inline box 不能被分割（比如只包含单个字符，或 word-breaking 机制被禁用，或该行内框受 white-space 属性值为 nowrap 或 pre 的影响），那么这个 inline box 将溢出这个 line box。

那么，IFC 的具体实用在何处呢？

- 水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过设置父容器 `text-align:center` 则可以使其水平居中。

> 值得注意的是，设置一个块为 `inline-block` ，以单个封闭块来参与外部的 IFC，而内部则生成了一个 BFC。

- 垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 `vertical-align:middle`，其他行内元素则可以在此父元素下垂直居中。

使用 IFC 可以实现多行文本的水平垂直居中，可以看看下面这个例子：

[Demo 戳我：使用 IFC 可以实现多行文本的水平垂直居中](http://codepen.io/Chokcoco/pen/xRwvxa)

### BFC（Block Formatting Contexts）块级格式化上下文

块格式化上下文（block formatting context） 是页面上的一个独立的渲染区域，容器里面的子元素不会在布局上影响到外面的元素。它是决定块盒子的布局及浮动元素相互影响的一个因素。

下列情况将创建一个块格式化上下文：

1. 根元素或其它包含它的元素
2. 浮动 (元素的 float 不为 none)
3. 绝对定位元素 (元素的 position 为 absolute 或 fixed)
4. 行内块 inline-blocks (元素的 display: inline-block)
5. 表格单元格 (元素的 display: table-cell，HTML 表格单元格默认属性)
6. 表格标题 (元素的 display: table-caption, HTML 表格标题默认属性)
7. overflow 的值不为 visible 的元素
8. 弹性盒子 flex boxes (元素的 display: flex 或 inline-flex)

块格式化上下文包括了创建该上下文的元素的所有子元素，但不包括创建了新的块格式化上下文的子元素。

包含浮动元素的块塌缩，清除浮动等都是 BFC 的应用场景。

### GFC（Grid Formatting Contexts）栅格格式化上下文

display:grid 篇幅巨大，建议看完大漠老师的教程：

[CSS Grid 布局](http://www.w3cplus.com/blog/tags/355.html)

### FFC（Flex Formatting Contexts）Flex 格式化上下文

如上所述，当 display 的值为 flex 或 inline-flex 时，将生成弹性容器（Flex Containers）。

一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）。

值得注意的是，弹性容器不是块容器，下列适用于块布局的属性不适用于弹性布局：

1. 在 CSS3 多列布局模块中定义的 column-\* 属性不适用于弹性容器。
2. float 和 clear 属性对于弹性项没有作用，并不会把它带离文档流（或相反）。然而，浮动属性仍然会通过影响 display 属性的计算值而影响 box 的生成。
3. vertical-align 属性对于弹性项没有作用
4. ::first-line 和 ::first-letter 伪元素不适用于弹性容器，而且弹性容器不为他们的祖先提供第一个格式化的行或第一个字母。

看看下面的结构，

```html
<div class="box">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```

```css
.box{
  display: flex;
}
```

如上所示，采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。弹性容器中的弹性项（flex item）表示其文档流（in-flow）内容中的框。
