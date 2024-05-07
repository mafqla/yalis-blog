## 可能/潜在的错误写法

下面的一些规则是一些潜在会导致一些意料之外的错误的 CSS 书写方式。

### 留意盒子的尺寸（Beware of box model size）

该规则主要是针对盒子的高宽而言，考虑下面这种情况：

```css
.mybox {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```



mybox 的元素宽度可能会被误认为 100px。但实际上，宽度是 112px。这是因为盒子宽度最终由content、padding、border 的宽度相加而得。

建议的写法：

```css
.mybox {
    box-sizing: border-box;
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```



建议的规则：

1. width 被与 border， border-left， border-right， padding， padding-left， padding-right 属性同时使用时，指定 `box-sizing` ；
2. height 被与 border，border-top，border-bottom，padding，padding-top，padding-bottom 属性同时使用时，指定 `box-sizing` 。

### display 匹配属性（display-property-grouping）

当元素设定不同的 `display` 时，部分规则可能无效。

当 `display:inline` 时, width, height, margin-top, margin-bottom 和 float 属性将无法生效，因为内联元素盒子模型不是一个标准盒子模型，这些属性也就无法生效。

当然，不止上述的 `display:inline`，还有一些，具体而言，

建议的规则：

1. `display:inline` 不与 width, height, margin, margin-top, margin-bottom, float 同时使用；
2. `display:inline-block` 不与 float 同时使用；
3. `display:block` 不与 vertical-align 同时使用；
4. `display:table-*` 不与 margin 或 float 同时使用。

### 不允许属性重复（duplicate-properties）

这个很好理解，不允许同一个样式规则中，出现重复定义的属性。例如：

```css
.mybox {
    width: 100px;
    width: 120px;
}
```



当然，也存在例外，定义同个属性可以用来实现一些渐进增强功能，举个例子：

```css
.mybox {
    background: #fff;
    background: rgba(255, 255, 255, 0.5);
}
```



对于不支持 RGBA 色彩展示的浏览器，将会回退使用第一条定义的规则 ` background: #fff` 。

不建议的写法：

```css
/* properties with the same value */
.mybox {
    border: 1px solid black;
    border: 1px solid black;
}

/* properties separated by another property */
.mybox {
    border: 1px solid black;
    color: green;
    border: 1px solid red;
}
```



允许的写法：

```css
/* one after another with different values */
.mybox {
    border: 1px solid black;
    border: 1px solid red;
}
```



建议的规则：

1. 不允许出现两次且值相同的属性；
2. 不允许同个属性出现两次且中间被至少一个其它的属性所隔开。

### 不允许空规则（empty-rules）

空规则就是不包含任意属性(没有定义样式属性) ，如下:

```css
.foo {}
```



空规则的出现可能是因为重构了样式而忘记了删除冗余代码造成的。消除空规则可以缩小样式文件大小和精简浏览器待处理的样式信息。

建议的规则：

1. 代码中不包含空样式规则

### 使用已知的属性（known-properties）

CSS 可使用的属性变得越来越多，本规则检测属性名称是否正确。此规则将检查每个使用的属性名称以确保其是已知的属性。

当然，以 `-` 前缀开始的浏览器专有属性将被忽略，因为前缀会添加各个浏览器版本属性上，而这些属性没有一个参考标准。

此规则不仅会检查属性名称，也会检查属性对应的值是否与其匹配。

建议的规则：

1. 样式中使用标准的属性及属性值

## 兼容性

### 不允许负文本缩进（Disallow negative text indent）

此规则意在找出 CSS 代码中使用 `text-indent` 的潜在问题。

文本负缩进通常当作辅助的目的，来隐藏在屏幕上的文字。使用场景之一就是作为图像替换技术，使用文本负缩进，可确保屏幕阅读器在文本没有显示在屏幕中时也能读取其数据。

此技巧通常使用很大的负单位数值，如 -999px 或 -9999px，如下:

```css
.mybox {
    background: url(bg.png) no-repeat;
    text-indent: -9999px;
}
```



此带有技巧性的缩进，允许背景图片展示给普通用户的同时，也确保了屏幕阅读器能顺利解析内联的文本信息。

当文本负缩进使用在横向视图页面时，会引起一定的麻烦，因为会出现一个很长的横向滚动条。此问题可以通过添加 `direction:ltr` 来解决，如下:

```css
.mybox {
    background: url(bg.png) no-repeat;
+   direction: ltr;
    text-indent: -9999px;
}
```



建议的规则：

1. 当使用负文本缩进的时候，配合 `direction: ltr` 一起使用。

### 使用浏览器兼容前缀（Require compatible vendor prefixes）

浏览器兼容前缀是一个属性从提案到成为标准演进过程导致的问题。

以渐变 `gradient` 为例，2011年12月份，CSS渐变的标准定义还未定稿，也就是说，彼时想跨浏览器实现色彩渐变，需要使用很多不同版的游览器前缀。CSS渐变一共有有五种不同的浏览器前缀。

- `-ms-linear-gradient` and -ms-radial-gradient for Internet Explorer 10+
- `-moz-linear-gradient` and -moz-radial-gradient for Firefox 3.6+
- `-o-linear-gradient` and -o-radial-gradient for Opera 11.10+
- `-webkit-linear-gradient` and -webkit-radial-gradient for Safari 5+ and Chrome
- `-webkit-gradient` for Safari 4+ and Chrome (aka "Old WebKit")

该规则要求我们使用渐变时，包含定义所有浏览器前缀。

当然，如今标准已经统一，而且到今天，我们书写 CSS 添加浏览器前缀几乎不再是人工添加。都应该使用 `autoprefixer` ，解放生产力，还有一些类似的前缀兼容问题，例如 `display: flex` 等等，可点击查看：

<details style="box-sizing: border-box; display: block; margin-top: 0px; margin-bottom: 16px; color: rgb(31, 35, 40); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; display: list-item; cursor: pointer;">展开查看建议追加多内核前缀</summary></details>

> 随着 CSS 的发展，这个表肯定是无法囊括全部的，所以最好的方式还是 `autoprefixer` ，使用工具添加浏览器前缀。

建议的规则：

1. 尽量使用 `autoprefixer` 来编译的你的 CSS 代码，使用工具去替代人工添加浏览器前缀。

### 使用备用色彩值（Require fallback colors）

此规则意在确保在所有的浏览器上都能显示合适的颜色。建议在使用 CSS3 颜色表示法 `rgba()`, `hsl()`, and `hsla()` 时，使用一个备份颜色确保颜色值在低版本浏览器上能正常显示，像这样：

```css
.mybox {
    color: red;
    color: rgba(255, 0, 0, 0.5);
}
```



建议的规则：

1. 指定颜色属性，使用了 `rgba()`, `hsl()`, `hsla()` 颜色值时，在该属性定以前使用针对旧版浏览器的 color 颜色格式。

### 不再使用针对旧版本 IE 的 hack 方式

在早几年，旧版本 IE 浏览器仍是不得不兼容的时代，我们的 CSS 代码会存在很多 `*`， `_` 等，类似这样：

```css
{
    background-color:yellow\0;    /*ie8*/
    +background-color:pink;        /*ie7*/
    *background-color:pink;        /*ie7*/
    _background-color:orange;       /*ie6*/
}
```



在 IE8- 逐渐退出历史舞台的今天，如果业务已经完全抛弃 IE8-，那么就应该不再使用这些针对 IE 的 hack 方式。

建议的规则：

1. 不再使用 `+`，`_`，`*`，`\0` 等这些针对 IE 的 hack 方式

## CSS 性能

### 不使用过多网络字体（Don't use too many web fonts）

这个很好理解，`@font-face` 的出现让我们可以让用户使用任何字体，不必拘泥于"web-safe"的字体之一。

但是，字体文件本身是很大的，以及部分浏览器在下载字体文件时，不会实时渲染，就给使用网络字体的同时，带来了显示性能的隐患。

因此建议，使用 `@font-face` 使用 web-fonts 不易过多。

建议的规则：

1. 使用少于 5 次网络字体 `@font-face` 引用。

> 5 这个次数是 CSSLint 的建议，个人认为实际使用中这个值应该更低。

### 不使用`@import`

`@import` 命令用于在 CSS 文件中引用其它的 CSS 文件，如下：

```css
@import url(more.css);
@import url(andmore.css);

a {
    color: black;
}
```



当浏览器解析此代码时，会在每个 `@import` 后开始下载指定的文件，从而停止执行后面的代码。

也就是说在 `@import` 指定的文件未下载完成前，浏览器不会同时下载其它的样式文件，总而失去了并行下载 CSS 的优势，且会造成页面的闪烁。

建议的规则：

1. 不在 CSS 代码中使用 `@import`

> 当然，这里的 `@import` 是指编译之后的 CSS 文件不出现，未编译的 CSS 文件不受此限制。

### 谨慎使用属性选择器（Disallow selectors that look like regular expressions）

CSS3 属性选择器更新之后，使得 CSS 有了一种类似正则匹配的能力，属性选择器详见：[CSS 属性选择器的深入挖掘](https://github.com/chokcoco/iCSS/issues/65)，像这样:

- [attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。
- [attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。
- [attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。
- [attr*=val] : 选择attr属性的值中包含子字符串 val 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串

选择一个 img 标签，它含有 title 属性，并且包含类名为 logo 的元素。

```css
img[title][class~=logo]{
...
}
```



属性选择器带来匹配便利的同时，由于这些复杂的属性选择器都须通过一遍又一遍的计算来匹配对应属性值，从而确保最终的显示效果正确。为此，CSS需要消耗更多的时间，来计算整个页面的显示效果。

建议的规则：

1. 尽量少的使用属性选择器，如果确定要使用，应该要意识到该选择器带来的开销比一些常规选择器更大

### 谨慎使用通配符 `*` （Disallow universal selector）

通用选择器 (*) 匹配所有元素。尽管每次都能很方便的选择一组元素，但如果将其作为选择器的核心部分(选择器位置的最右侧) 则会造成性能问题。举个例子，如下的规则形式应该避免使用:

```css
.mybox * {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```



浏览器解析 CSS 的规则按照从右至左的顺序解析选择器的，因此这个规则将首先匹配文档中的所有元素。然后逐一检测这些元素是否匹配右边开始的下一级规则，即是否拥有祖先样式mybox。如果包含`*` 的选择器越复杂，其解析的时间越久。

建议的规则：

1. 应该谨慎使用通用选择符 `*`，如果必须要使用，也应该尽量避免将其放置选择器的最右侧。

### 谨慎使用未定义的属性选择器（Disallow unqualified attribute selectors）

HTML5 允许在 HTML 标签中创建自定义属性。然而，与上一条规则类似，如 `[type=text]`，首先匹配所有元素，然后检查各属性。这意味着**未定义属性选择器**和**通用选择器**一样都有着相同性能问题。

和通用选择器相似，未定义属性选择器作为选择器的核心部分(选择器最右侧)时，会造成性能问题。像这样：

```css
.mybox [type=text] {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```



建议的规则：

1. 尽量避免将**属性选择器**其放置在选择器的最右侧。

### 使用简写属性（Require shorthand properties）

此规则建议，当可通过简写属性来减少文件体积时，应当尽量使用简写方式，像这样：

```css
.mybox {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
}
```



应该替换为：

```css
.mybox {
    margin: 20px 10px 30px;
}
```



建议的规则：

1. 当可通过简写属性来减少文件体积时，应当尽量使用属性的简写方式

### 不允许重复背景图片定义（Disallow duplicate background images）

如果你有多个样式需要使用同一背景图片，那么最好声明一个包含此图片地址的通用样式类。接着将这个类添加至需要使用的元素之上。请看下面代码：

```css
.heart-icon {
    background: url(sprite.png) -16px 0 no-repeat;
}

.task-icon {
    background: url(sprite.png) -32px 0 no-repeat;
}
```



在两个类中重复定义了背景图片地址。造成了冗余代码，同时也增加了修改的成本。

如果需要修改图片的名字，很容易造成忘记同时修改文件中两处图片地址。比较好的方式是抽取一个图片地址类作为复用类，然后将此类添加至原有HTML元素上。像这样：

```css
.icons {
    background: url(sprite.png) no-repeat;
}

.heart-icon {
    background-position: -16px 0;
}

.task-icon {
    background-position: -32px 0;
}
```



```html
<div class="icons heart-icon">A</div>
<div class="icons task-icon">B</div>
```



建议的规则：

1. 在需要使用重复的背景图片时，应该定义一个公用类进行复用

## 可维护性和重复性（Maintainability & Duplication）

### 尽量少的使用浮动 `float`（Disallow too many floats）

`float` 属性是 CSS 中实现多列布局广受欢迎的方式。在项目中， `float` 元素被用来创建不同的页面布局。如果此时改变布局，则会使得CSS代码十分脆弱，难以维护。

在如今，我们有更好的方式去实现网格化布局：flex 及 grid 。

建议的规则：

1. 尽量少的使用 `float` 去进行页面布局，如果兼容性允许，应该使用 `display: flex` 或者 `display: grid` 进行替代

### 不使用过多的字体大小声明（Don't use too many font size declarations）

一个利于维护的站点，通常都有通用的字体集。某类字体的大小往往定义了一个代表其含义的抽象类当，以便运用到站点的各个使用场景。

如果未抽取出公用类。会导致书写 CSS 时频繁的使用 `font-size` 来使元素大小按预期显示。这就带来了一个问题，当设计的字体大小改变后，我们需要改变样式中所有设计的字体大小。而抽提取公用类时，只用改变类中定义的大小即可做到全局调整。像这样：

```css
.small {
    font-size: 8px;
}
.medium {
    font-size: 11px;
}
.large {
    font-size: 14px;
}
```



在你的项目中使用以上类时，能确保字体大小的一致性贯穿始终，也限制了 `font-size` 在 CSS 文件中出现的次数。如果需要某类字体大小，此时，只需要改变一处字体大小的设置，就可实现之前需要修改多处的效果。

建议的规则：

1. 不使用过多的字体大小声明，通过定义不同类型的字体类进行字体大小的复用

### 尽量少的使用 ID 选择器进行样式定义（Disallow IDs in selectors）

CSS 的好处之一就是可在多处复用样式规则。当你开始使用 ID 选择器时，就不经意间将样式局限在了单个元素上。假设你的代码如下：

```css
#header a {
    color: black;
}
```



这个样式只会在 ID 为 header 下的 a 标签 起效。但假设现在你想在页面中的另外一个模块中也使用同样的样式，你只能重新再定义一个类来实现同样的效果，如下：

```css
#header a,
.callout a {
    color: black;
}
```



细想，其实这里，本意应该是只用一个样式就足够了：

```css
.callout a {
    color: black;
}
```



最后，你可能将不再需要使用 ID 选择器而使用类选择器取代其效果。弃用 ID 选择器后，你将最大释放CSS 的复用能力。

建议的规则：

1. 尽量少的使用 ID 选择器进行样式定义