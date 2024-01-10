CSS 的**伪类选择器**和**伪元素选择器**，让 CSS 有了更为强大的功能。

> 伪类大家听的多了，伪元素可能听到的不是那么频繁，其实 CSS 对这两个是有区分的。

有个错误有必要每次讲到伪类都提一下，有时你会发现伪类元素使用了两个冒号 (::) 而不是一个冒号 (:)，这是 CSS3 规范中的一部分要求，目的是为了区分伪类和伪元素，大多数浏览器都支持下面这两种表示方式。

通常而言，

```css
#id:after{
 ...
}

#id::after{
...
}
```



符合标准而言，单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。

当然，也有例外，对于 CSS2 中已经有的伪元素，例如 :before，单冒号和双冒号的写法 ::before 作用是一样的。

所以，如果你的网站只需要兼容 webkit、firefox、opera 等浏览器或者是移动端页面，建议对于伪元素采用双冒号的写法，如果不得不兼容低版本 IE 浏览器，还是用 CSS2 的单冒号写法比较安全。

## 伪类选择器 `:focus-within`

言归正传，今天要说的就是`:focus-within` 伪类选择器。

它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，**它或它的后代获得焦点**。

这也就意味着，**它或它的后代获得焦点**，都可以触发 `:focus-within`。

### `:focus-within` 的冒泡性

这个属性有点类似 Javascript 的事件冒泡，从可获焦元素开始一直冒泡到根元素 `html`，都可以接收触发 `:focus-within` 事件，类似下面这个简单的例子这样：

```html
<div class="g-father">
    <div class="g-children">
        <input type="button" value="Button">
    </div>
</div>
```



```css
html,
body,
.g-father,
.g-children {
    padding: 30px;
    border:1px solid #999;
}

input {
    ...
    &:focus {
        background: #00bcd4;
    }
}

html:focus-within {
    background: #e91e63;
}
body:focus-within {
    background: #ff5722;
}
.g-father:focus-within {
    background: #ffeb3b;
}
.g-children:focus-within {
    background: #4caf50;
}
```



就是这样：



<iframe height="300" style="width: 100%;" scrolling="no" title=":focus-within 冒泡触发" src="https://codepen.io/mafqla/embed/GReqzMv?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/GReqzMv">
  :focus-within 冒泡触发</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>





这个选择器的存在，让 CSS 有了进一步的让元素持久停留在一种新状态的的能力。

下面几个例子，看看 `:focus-within` 可以提供什么能力，做些什么事情。

## 感应用户聚焦区域

**它或它的后代获得焦点**，这一点使得让感知获焦区域变得更大，所以，最常规的用法就是使用 `:focus-within` 感应用户操作聚焦区域，高亮提醒。

下面的效果没有任何 JS 代码：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS focus-within INPUT" src="https://codepen.io/mafqla/embed/jOJrdGe?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/jOJrdGe">
  CSS focus-within INPUT</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



这里是什么意思呢？`:focus-within` 做了什么呢？

- **我们无须去给获焦的元素设置 `:focus` 伪类，而是可以给需要的父元素设置，这样当元素获焦时，我可以一并控制它的父元素的样式**

核心思想用 CSS 代码表达出来大概是这样：

```html
<div class="g-container">
    <div class="g-username">
        <input type="text" placeholder="user name" class="g_input" >
    </div>
    <div class="g-username">
        <input type="text" placeholder="code" class="g_input" >
    </div>
</div>
```



```css
.g-container:focus-within {
    ...

    input {
        ....
    }
}
```





<iframe height="300" style="width: 100%;" scrolling="no" title="CSS focus-within INPUT" src="https://codepen.io/mafqla/embed/jOJrdGe?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/jOJrdGe">
  CSS focus-within INPUT</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



运用上面思想，我们可以把效果做的更炫一点点，在某些场景制作一些增强用户体验的效果：



<iframe height="300" style="width: 100%;" scrolling="no" title="PURE CSS FOCUS By :focus-within" src="https://codepen.io/mafqla/embed/eYXzxGa?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/eYXzxGa">
  PURE CSS FOCUS By :focus-within</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## TAB导航切换

现在又多了一种方式，利用了 `:focus-within` 可以在父节点获取元素获得焦点的特性，实现的TAB导航切换：



<iframe height="300" style="width: 100%;" scrolling="no" title="focus-within switch tab" src="https://codepen.io/mafqla/embed/dyrXaZp?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/dyrXaZp">
  focus-within switch tab</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



主要的思路就是通过获焦态来控制其他选择器，以及最重要的是利用了父级的 `:not(:focus-within)` 来设置默认样式：

```css
.nav-box:not(:focus-within) {
    // 默认样式
}

.nav-A:focus-within ~ .content-box .content-A {
    display: block;
}

.nav-B:focus-within ~ .content-box .content-B {
    display: block;
}
```



## 配合 `:placeholder-shown` 伪类实现表单效果

`:focus-within` 一个人能力有限，通常也会配合其他伪类实现一些不错的效果。这里要再简单介绍的是另外一个有意思的伪类 `:placeholder-shown`。

> `:placeholder-shown`：The :placeholder-shown CSS pseudo-class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text.

> 另外，划重点，这个伪类是仍处于实验室的方案。也就是未纳入标准，当然我们的目的是探寻有意思的 CSS 。

意思大概就是，当 `input` 类型标签使用了 placeholder 属性有了默认占位的文字，会触发此伪类样式。配合`:not()`伪类，可以再改变当默认文字消失后的样式，再配合本文的主角，我们可以实现表单的一系列效果。

CSS 代码大概呈现成这样：

```css
.g-container {
    width: 500px;
    height: 60px;

    input {
        height: 100%;
        width: 100%;

        &:not(:placeholder-shown) {
            ...
        }

        &:placeholder-shown {
            ...
        }
    }

    &:focus-within {
        ...
    }
}
```



实际效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title=":placeholder-shown &amp;&amp; :focus-within" src="https://codepen.io/mafqla/embed/NWJrowz?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/NWJrowz">
  :placeholder-shown &amp;&amp; :focus-within</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



可以看到，上面的效果没有用到任何 JS，可以实现：

1. 整个 input（包括父元素所在区域）获焦与非获焦样式控制
2. placeholder 属性设置的文字出现与消失后样式控制





## 实现掘金登录动效切换



:::tip

当前代码已经过时

:::





<iframe height="300" style="width: 100%;" scrolling="no" title="掘金登录效果纯CSS实现" src="https://codepen.io/mafqla/embed/zYbBepY?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/zYbBepY">
  掘金登录效果纯CSS实现</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

