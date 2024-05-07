## 13、引人瞩目的 CSS 自定义属性（CSS Variable）

这真是一个令人激动的革新。

[CSS 自定义属性](https://drafts.csswg.org/css-variables/)，顾名思义，也就是由网页的作者或用户定义的实体，用来指定文档中的特定变量。

很多人喜欢称之为 CSS 变量，但是，更准确的说法，应该称之为 CSS 自定义属性 。不过下文为了好理解都称之为 CSS 变量。

一直以来我们都知道，CSS 中是没有变量而言的，要使用 CSS 变量，只能借助 SASS 或者 LESS 这类预编译器。

但是新的草案发布之后，直接在 CSS 中定义和使用变量已经不再是幻想了，像下面这样，看个简单的例子：

```
// 声明一个变量：
:root{
  --bgColor:#000;
}
```

> 这里我们借助了上面 `#12、结构性伪类` 中的 `:root{ }` 伪类，在全局 `:root{ }` 伪类中定义了一个 CSS 变量，取名为 `--bgColor` 。

定义完了之后则是使用，假设我要设置一个 div 的背景色为黑色：

```
.main{
  background:var(--bgColor);
}
```

这里，我们在需要使用之前定义变量的地方，通过 `var(定义的变量名)` 来调用。

:::code-group

```html[html]
<div class="main"></div>
```

```css[css]

:root{
  --bgColor:deeppink;
}

.main{
  height:100px;
  background:var(--bgColor);
}
```

:::

当然，示例正常显示的前提是浏览器已经支持了 CSS 变量，可以看看 [CANIUSE](http://caniuse.com/#search=css var)。

### CSS 变量的层叠与作用域

CSS 变量是支持继承的，不过这里说成级联或者层叠应该更贴切。

> 在 CSS 中，一个元素的实际属性是由其自身属性以及其祖先元素的属性层叠得到的，CSS 变量也支持层叠的特性，当一个属性没有在当前元素定义，则会转而使用其祖先元素的属性。在当前元素定义的属性，将会覆盖祖先元素的同名属性。

其实也就是作用域，通俗一点就是局部变量会在作用范围内覆盖全局变量。

```
:root{
  --mainColor:red;
}

div{
  --mainColor:blue;
  color:var(--mainColor);
}
```

上面示例中最终生效的变量是 `--mainColor:blue`。

> 另外值得注意的是 CSS 变量并不支持 !important 声明。

### CSS 变量的组合

CSS 变量也可以进行组合使用。看看下面的例子：

```html
<div></div>
```

```css
:root {
  --word: 'this';
  --word-second: 'is';
  --word-third: 'CSS Variable';
}

div::before {
  content: var(--word) ' ' var(--word-second) ' ' var(--word-third);
}
```

上面 div 的内容将会显示为**this is CSS Variable**。

:::code-group

```html[html]
<div></div>
```

```css[css]
:root{
	--word:"this";
	--word-second:"is";
	--word-third:"CSS Variable";
}

div::before{
	content:var(--word)' 'var(--word-second)' 'var(--word-third);
}

div{
	text-align:center;
}
```

:::

### CSS 变量与计算属性 calc( )

更有趣的是，CSS 变量可以结合 CSS3 新增的函数 calc( ) 一起使用，考虑下面这个例子：

```
<div> CSS Varialbe </div>
```

```
:root{
  --margin: 10px;
}

div{
  text-indent: calc(var(--margin)*10)
}
```

上面的例子，CSS 变量配合 calc 函数，得到的最终结果是 `text-indent:100px` 。


:::code-group

```html[html]
<div>CSS Variable</div>
```

```css[css]
:root{
	--margin: 10px;
}

div{
	text-indent: calc(var(--margin)*10)
}

div{
	width:400px;
	margin:0 auto;
	background:#ddd;
}
```

:::

### CSS 变量的用途

CSS 变量的出现，到底解决了我们哪些实际生产中的问题？列举一些：

#### 1、代码更加符合 DRY（Don‘t repeat yourself）原则。

一个页面的配色，通常有几种主要颜色，同一个颜色值在多个地方用到。之前的 LESS、SASS 预处理器的变量系统就是完成这个的，现在 CSS 变量也能轻松做到。

```css
:root{
  --mainColor:#fc0;
}
// 多个需要使用到的 --mainColor 的地方
.div1{
  color:var(--mainColor);
}
.div2{
  color:var(--mainColor);
}
```

#### 2、精简代码，减少冗余，响应式媒体查询的好帮手

一般而言，使用媒体查询的时候，我们需要将要响应式改变的属性全部重新罗列一遍。

```css
.main {
	width: 1000px;
	margin-left: 100px;
}
@media screen and (min-width:1480px) {
	.main {
		width: 800px;
		margin-left: 50px;
	}
}
```

即便是 LESS 和 SASS 也无法做到更加简便，不过 CSS 变量的出现让媒体查询更加的简单：

```css
:root {
  --mainWidth:1000px;
  --leftMargin:100px;
}

.main {
  width: var(--mainWidth);
  margin-left: var(--leftMargin);
}

@media screen and (min-width:1480px) {
	:root {
	  --mainWidth:800px;
	  --leftMargin:50px;
	}
}
```

看上好像是代码多了，多了一层定义的环节，只是我这里示例的 CSS 改变的样式属性较少，当媒体查询的数量达到一定程度，使用 CSS 变量从代码量及美观程度而言都是更好的选择。

#### 3、方便的从 JS 中读/写，统一修改

CSS 变量也是可以和 JS 互相交互。

```css
:root{
  --testMargin:75px;
}
```

```js
//  读取
var root = getComputedStyle(document.documentElement);
var cssVariable = root.getPropertyValue('--testMargin').trim();

console.log(cssVariable); // '75px'

// 写入
document.documentElement.style.setProperty('--testMargin', '100px');
```

### 与传统 LESS 、SASS 等预处理器变量比较

相较于传统的 LESS 、SASS 等预处理器变量，CSS 变量的优点在于:

1. CSS 变量的动态性，能在页面运行时更改，而传统预处理器变量编译后无法更改
2. CSS 变量能够继承，能够组合使用，具有作用域
3. 配合 Javascript 使用，可以方便的从 JS 中读/写
