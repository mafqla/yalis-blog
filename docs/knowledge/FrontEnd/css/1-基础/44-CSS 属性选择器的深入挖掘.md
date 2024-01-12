CSS 属性选择器，可以通过已经存在的属性名或属性值匹配元素。

属性选择器是在 CSS2 中引入的并且在 CSS3 中得到了很好拓展。本文将会比较全面的介绍属性选择器，尽可能的去挖掘这个选择器在不同场景下的不同用法。

## 简单的语法介绍

- [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
- [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
- [attr~=val]：该选择器仅选择具有 attr 属性的元素，而且要求 val 值是 attr 值包含的被空格分隔的取值列表里中的一个。

#### 子串值（Substring value）属性选择器，

下面几个属于 CSS3 新增语法，也被称为“伪正则选择器”，因为它们提供类似 regular expression 的灵活匹配方式。

- [attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。
- [attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。
- [attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。
- [attr*=val] : 选择attr属性的值中包含子字符串 val 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串

## CSS 属性选择器的最基本用法

属性选择器最基本的用法，就是通过元素的属性值去选择 DOM 元素。像这样，将选中所有带 `href` 属性的DOM 元素：

```css
[href] {
    color: red;
}
```



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器最基本的用法" src="https://codepen.io/mafqla/embed/NWJRZpo?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/NWJRZpo">
  属性选择器最基本的用法</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## 复杂一点点的用法

#### 层叠选择

```html
div [href]{
...
}
```



#### 多条件复合选择

选择一个 img 标签，它含有 title 属性，并且包含类名为 logo 的元素。

```css
img[title][class~=logo]{
...
}
```



#### 伪正则写法

- `i` 参数

忽略类名的大小写限制，选择包含 class 类名包含子字符串为 text，Text，TeXt... 等情况的 p 元素。
这里的 i 的含义就是正则里面参数 i 的含义，ignore，忽略大小写的意思。

```css
p[class*="text" i] {
...
}
```



所以上面的选择器可以选中类似这样的目标元素：

```html
<p class="text"></p>
<p class="nameText"></p>
<p class="desc textarea"></p>
```



- `g` 参数

与正则表达式不一样，参数 `g` 在这里表示大小写敏感（case-sensitively）。然而，[这个属性当前仍未纳入标准](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)，支持的浏览器不多。



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器的伪正则用法" src="https://codepen.io/mafqla/embed/xxBEodR?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/xxBEodR">
  属性选择器的伪正则用法</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



#### 配合 `:not()` 伪类

还有一种比较常用的场景就是搭配`:not()` 伪类，完成一些判断检测性的功能。譬如下面这个选择器，就可以选取所有没有 `[href]` 属性的 `a` 标签，添加一个红色边框。

```css
a:not([href]){
    border: 1px solid red;
}
```



当然，复杂一点，我们可以搭配不仅仅一个 `:not()`伪类，像是这样，可以同时多个配合使用，选择一个 href, target, rel 属性都没有的 a 标签：

```css
a:not([href]):not([target]):not([rel]){
    border: 1px solid blue;
}
```





### 重写行内样式？

甚至乎，如果有这种场景，我们还可以覆盖掉行内样式，像这样:

```html
<p style="height: 24px; color: red;">xxxxxx</p>
```



我们可以使用属性选择器强制覆盖掉上述样式：

```css
[style*="color: red"] {
    color: blue !important;
}
```



## 组合拳用法，搭配伪元素提升用户体验

当然，属性选择器不一定只是单单的进行标签的选择。

配合上伪元素，我们可以实现很多有助提升用户体验的功能。

### 角标功能

这里有一个小知识点，伪元素的 `content` 属性，通过 `attr(xxx)`，可以读取到对应 DOM 元素标签名为 xxx 的属性的值。

所以，配合属性选择器，我们可以很容易的实现一些角标功能：

```html
<div count=“5“>Message</div>
```



```css
div {
    position: relative;
    width: 200px;
    height: 64px;
}

div::before {
    content: attr(count);
    ...
}
```



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器实现角标功能" src="https://codepen.io/mafqla/embed/BabLgRq?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/BabLgRq">
  属性选择器实现角标功能</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



这里右上角的数字 5 提示角标，就是使用属性选择器配合伪元素实现，可以适应各种长度，以及中英文，能够节省一些标签。

### 属性选择器配合伪元素实现类 title 功能

我们都知道，如果给一个图片添加一个 title 属性，当 hover 到图片上面的时，会展示 title 属性里面附加的内容，类似这样：

```html
<img src="xxxxxxxxx" title="风景图片">
```





这里不一定是 `img` 标签，其他标签添加 `title` 属性都能有类似的效果。但是这里会有两个问题：

- 响应太慢，通常鼠标 hover 上去要隔 1s 左右才会出现这个 title 框
- 框体结构无法自定义，弹出框的样式无法自定义

所以这里，如果我们希望有一些自己能够控制样式的可快速响应的浮层，可以自定义一个类 title 属性，我们把它称作 `popTitle`，那么可以这样操作：

```html
<p class="title" popTitle="文字弹出">这是一段描述性文字</p>
<p class="title" popTitle="标题A">这是一段描述性文字</p>
```



```css
p[popTitle]:hover::before {
    content: attr(popTitle);
    position: absolute;
    color: red;
    border: 1px solid #000;
    ...
}
```



对比一下，第一个是原生自带的 `title` 属性，下面两个是使用属性选择器配合伪元素模拟的提示：

![attributeselector2](./img/59602153-96a08400-90f5-11e9-9e6d-50aa06c13b5d.gif)

> 浏览器自带的 `title` 属性延迟响应是添加一层防抖保护，避免频繁触发，这里也可以通过对伪元素添加一个100毫秒级的 `transition-delay` 实现延迟展示。



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器配合伪元素实现类 title 功能" src="https://codepen.io/mafqla/embed/MWxjMoW?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/MWxjMoW">
  属性选择器配合伪元素实现类 title 功能</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### 商品展示提示效果

好，上面的运用实例我们再拓展一下，考虑如何更好的运用到实际业务中，其实也是有很多用武之地的。譬如说，通过属性选择器给图片添加标签，类似一些电商网站会用到的一个效果。

我们希望给图片添加一些标签，在 hover 图片的时候展示出来。

> 当然，CSS 中，诸如 `<img>` 、`<input>`、`<iframe>`，这几个标签是不支持伪元素的。

所以这里我们输出 DOM 的时候，给 img 的父元素带上部分图片描述标签。通过 CSS 去控制这些标签的展示：

```html
<div class="g-wrap" desc1="商品描述AAA" desc2="商品描述BBB">
    <img src="https://xx.baidu.com/timg?xxx" >    
</div>
```



```css
[desc1]::before,
[desc2]::after {
    position: absolute;
    opacity: 0;
}

[desc1]::before {
    content: attr(desc1);
}

[desc2]::after {
    content: attr(desc2);
}

[desc1]:hover::before,
[desc2]:hover::after{
    opacity: 1;
}
```



看看效果：



<iframe height="300" style="width: 100%;" scrolling="no" title="通过属性选择器给图片添加标签" src="https://codepen.io/mafqla/embed/xxBEorR?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/xxBEorR">
  通过属性选择器给图片添加标签</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### 属性选择器配合伪元素实现下载提示

我们知道，HTML5 对标签新增了一个 download 属性，此属性指示浏览器下载 URL 而不是导航到它。

那么，我们可以利用属性选择器对所有带此类标签的元素进行提示。像这样：

```html
<a href="https://www.xxx.com/logo.png" download="logo">logo</a>
```



```css
[download] {
    position: relative;
    color: hotpink;
}

[download]:hover::before {
    content: "点击可下载此资源！";
    position: absolute;
    ...
}
```



当我们 hover 到这个链接的时候，就会这样，提示用户，这是一个可以下载的按钮：

<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器配合伪元素做下载提示" src="https://codepen.io/mafqla/embed/dyrpBRz?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/dyrpBRz">
  属性选择器配合伪元素做下载提示</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### 属性选择器配合伪元素对链接的协议进行提示(http/https)

现在大部分网站不是切了 https 就是走在切 https 的路上。如果页面上的链接很多或者对跳转页面的协议有要求，使用属性选择器配合伪元素对链接的协议进行提示也不失为一种好方法。

```css
a[href^="http:"]:hover::before {
    content: "这是一个http链接";
    ...
}

a[href^="https:"]:hover::before {
    content: "这是一个https链接";
}
```



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器配合伪元素对链接的协议进行提示(http/https)" src="https://codepen.io/mafqla/embed/VwRKJWM?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/VwRKJWM">
  属性选择器配合伪元素对链接的协议进行提示(http/https)</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



当然，伪元素的内容不一定是纯文字的，为了给用户更好的体验，图或者图片加文字也是可以的。

譬如我们可以形象化地给 https 链接站点再加一个小绿锁，符合用户的一些常规认知。



这里我将小绿锁的图片使用 base64 嵌入到伪元素当中，简单的使用 `text-indent` 控制图文的排布：

```css
a[href^="https:"]:hover::before {
    content: "";
    padding-left: 16px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAb0lEQVQoz2NkQAJc5aIc//7962VgYIiDCi1iYmIq/tb5+gdMDROyBqhiGWYmJlVmJiZVBgYGGagYdsBRKvyZu1xUAsbnLheV4CgV/oxbQ4nwf0JiTAwkAkaIU4QaGf4z1uFX+b/pR/e7epJtGJEaAKDXHzEJ3KYmAAAAAElFTkSuQmCC");
    ...
}
```





> 这里只是一个非常小的 Demo，实际情况是大部分用户并不了解这个小绿锁的含义，所以实际使用应该搭配文字辅助提示。



<iframe height="300" style="width: 100%;" scrolling="no" title="属性选择器选择https协议" src="https://codepen.io/mafqla/embed/mdorZwx?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/mdorZwx">
  属性选择器选择https协议</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### 属性选择器对文件类型的处理

也可以对一些可下载资源进行视觉上 icon 的提示。

```html
<ul>
    <li><a href="xxx.doc">Word File</a></li>
    <li><a href="xxx.ppt">PPT File</a></li>
    <li><a href="xxx.PDF">PDF File</a></li>
    <li><a href="xxx.MP3">MP3 File</a></li>
    <li><a href="xxx.avi">AVI File</a></li>
</ul>
```



```css
a[href$=".doc" i]::before {
    content: "doc";
    background: #a9c4f5;
}
a[href$=".ppt" i]::before {
    content: "ppt";
    background: #f8e94f;
}
a[href$=".pdf" i]::before {
    content: "pdf";
    background: #fb807a;
}
a[href$=".mp3" i]::before {
    content: "mp3";
    background: #cb5cf5;
}
a[href$=".avi" i]::before {
    content: "avi";
    background: #5f8ffc;
}
```





<iframe height="300" style="width: 100%;" scrolling="no" title="[href$=.xxx]标识" src="https://codepen.io/mafqla/embed/bGZwPRO?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/bGZwPRO">
  [href$=.xxx]标识</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## 属性选择器对 `input` 类型的处理

属性选择器其实对 `input` 类型的元素是一个很好的帮手，因为 `input` 常用，且经常搭配很多不同功能的属性值。

只不过，由于 `input` 类型无法添加伪元素。所以搭配属性选择器更多的通过属性的各种状态改变自身的样式。

简单举个例子，譬如：

```html
<input type="text">
<input type="text" disabled>
```



```css
input[type=text][disabled] { 
    border: 1px solid #aaa;
    background: #ccc; 
}
```



这里，我们选择了 `type=text` 并且拥有 `disabled` 属性的 `input` 元素，将它的背景色和边框色设置为灰色。给与用户更好的视觉提示。

![image](./img/59604082-a66e9700-90fa-11e9-9281-faaa6d671fb4.png)

## 值得注意的点

### 注意选择器优先级 ，`.class` 与 `[class=xxx]` 是否等价

考虑这个问题，下面两个选择器是否等值？

```html
<div class="header">
```



```css
.header {
    color: red;
}

[class~="header"] {
    color: blue;
}
```



上述两个选择器，作用完全一致。然而，如果是下面这种情况，两者就不一样了：

```html
<div id="header">
```



```css
#header{
    color: red;
}

[id="header"] {
    color: blue;
}
```



这里，ID 选择器`#header`比属性选择器`[id="header"]`的权重更高，虽然两者能够选择同样的元素，但是两者并不完全等价。

### 是否需要引号？

考虑下面三种情况，是否一致？

```css
[class="header"]{ ... }

[class='header']{ ... }

[class=header]{ ... }
```



事实上，从 HTML2 开始，不添加引号的写法就已经得到支持，所以上述三种写法都是正确的。

然而，能够不使用引号也是有限制的，再看看下面这种写法：

```css
a[href=bar] { ... }

a[href^=http://] {... }
```



第二个选择器是个无效选择器，`://` 不引起来的话会识别错误，必须使用引号引起来像这样`a[href^="http://"] `，这里具体的原因可以看看这篇文章：[Unquoted attribute value validator](https://mothereff.in/unquoted-attributes)。

所以保险起见，建议都加上引号。