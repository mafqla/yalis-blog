## 方法一：借助最新的容器查询

第一种方法，非常简单，但是对兼容性有所要求。那就是使用容器查询 -- `@container` 语法。

简单而言，容器查询它给予了 CSS，在不改变浏览器视口宽度的前提下，只是根据容器的宽度或者高度变化，对布局做调整的能力。

基于这个场景，我们假设我们有如下的 HTML/CSS 结构：

```html
<div class="g-container">
  <div class="g-content">Lorem ipsum dolor s...</div>
</div>
```

```css
.g-container {
  position: relative;
  width: 300px;
  height: 300px;
  resize: vertical;
  overflow: hidden;

  .g-content {
    height: 100%;
  }

  .g-content::before {
    content: '↑';
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
```

它是这么一个样式效果：

![img](./img/5b004b491542400699eb99b5ff1a5a52~tplv-k3u1fbpfcp-jj-q75.awebp)

其中，我们给元素 `.g-content` 添加了 `resize: vertical`，让它变成了一个可以在竖直方向上通过拖动改变高度的容器，以模拟容器在不同内容的场景下，高度不一致的问题：

![img](./img/37837dd51ba14a92b069631a9a791a38~tplv-k3u1fbpfcp-jj-mar.awebp)

我们通过元素的伪元素实现了箭头 ICON，并且它是一直显示在容器内的。

下面，我们通过简单的几句容器查询代码，就可以实现让箭头 ICON，只在容器高度超过特定高度的时候才出现：

```CSS
.g-container {
    container-type: size;
    container-name: container;
}

@container container (height <= 260px) {
    .g-content::before {
        opacity: 0;
    }
}
```

简单解释一下：

1. `.g-container` 它被用作容器查询的目标容器

- `container-type` 属性指定了容器的类型为 size，表示我们将使用容器的尺寸来应用样式。
- `container-name` 属性指定了容器的名称为 container，以便在后面的容器查询规则中引用。

1. `@container container (height <= 260px) {}` 表示这是一个容器查询规则，在括号中的条件 `(height <= 260px)` 表示当容器的高度小于等于 `260px` 时，应用该规则下的样式
2. 具体规则为，如果容器的高度小于等于 `260px` 时，`.g-content` 元素的伪元素将变得透明

这样，我们就非常简单的实现了容器在不同高度下，ICON 元素的显示隐藏切换：

<iframe height="300" style="width: 100%;" scrolling="no" title="flexible content" src="https://codepen.io/mafqla/embed/YzbKYYe?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/YzbKYYe">
  flexible content</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

当然，这个方案的唯一缺点在于，兼容性不是那么好：

那，有没有兼容性更好的方案？当然，来我们一起来看看 `clamp` + `calc` 的方案。

## 方法二：`clamp` + `calc` 大显神威

上面效果的核心在于：

1. 如果容器的高度大于某个值，显示样式 A
2. 如果容器的高度小于等于某个值，显示样式 B

那么想想看，如果拿容器的高度减去一个固定的高度值，会发生什么？假设一下，ICON 元素的 CSS 代码如下：

```CSS
.g-content::before {
    content: "↑";
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: calc(100% - 200px);
}
```

仔细观察 `bottom: calc(100% - 200px)`，在元素的 bottom 属性中，`100%` 表示的是容器当前的高度，因此 `calc(100% - 200px)` 的含义就代表，容器当前高度减去一个固定高度 `200px`。因此：

1. 当容器高度大于 `200px`，`calc(100% - 200px)` 表示的是一个正值
2. 当容器高度小于 `200px`，`calc(100% - 200px)` 表示的是一个负值
3. 当容器高度等于 `200px`，`calc(100% - 200px)` 表示 0

我们看看这种情况下，整个 ICON 的表现是如何的：

![img](./img/d1af3c5d8c944ff2ada86584daf6e60e~tplv-k3u1fbpfcp-jj-mark.awebp)

可以看到，当容器高度大于 `200px` 的时候，箭头 ICON 确实出现了，但是，**它无法一直定位在整个容器的最下方**。

有什么办法让它在出现后，一直定位在容器的最下方吗？

别忘了，CSS 中，还有几个非常有意思的数学函数：`min()`、`max()`、`clamp()`，它们可以有效限定动态值在某个范围之内！

利用 `clamp()`，我们可以限定计算值的最大最小范围，在这个场景下，我们可以限制 `bottom` 的最大值为 `10px`：

```CSS
.g-content::before {
    // ...
    bottom: clamp(-99999px, calc(100% - 200px), 10px);
}
```

上面的代码 `clamp(-99999px, calc(100% - 200px), 10px)`，核心在于，如果 `calc(100% - 200px)` 的计算值大于 `10px`，它只会取值为 `10px`，利用这个技巧，我们可以在容器高度超长时，把箭头 ICON 牢牢钉在容器的下方，无论容器的高度是多少：

![img](./img/4bb03488a5944f329d8809c35850c9de~tplv-k3u1fbpfcp-jj-ma.awebp)

到此，结束了吗？显然没有。

虽然上面的代码，解决当 `calc(100% - 200px)` 的计算值大于 `10px` 的场景，但是没有解决，当 `calc(100% - 200px)` 的计算值处于 `-10px ~ 10px` 这个范围内的问题。

我们可以清楚的看到，当我们往下拖动容器变高的时候，箭头元素是逐渐慢慢向上出现，而不是突然在某一个高度下，直接出现，所以在实际使用中，会出现这种 ICON 只出现了一半的尴尬场景：

![img](./img/321cd40c682d4ac28ee1280c16503727~tplv-k3u1fbpfcp-jj-mar5.awebp)

但是，莫慌！这个问题也好解决，我们只需要给 `calc(100% - 200px)` 的计算值，乘上一个超级大的倍数即可。原因在于：

1. 当 `calc(100% - 200px)` 的计算值是负数时，我们其实不希望 ICON 出现，此时，乘上一个超级大的倍数，依然是负数，不影响效果
2. 当 `calc(100% - 200px)` 的计算值是正数时，为了避免 ICON 处在只漏出部分的尴尬场景，通过乘上一个超级大的倍数，让整个计算值变得非常大，但是由于又有 `clamp()` 最大值的限制，无论计算值多大，都只会取 `10px`

看看代码，此时，整个 `bottom` 的取值就改造成了：

```CSS
.g-content::before {
    // ...
    bottom: clamp(-9999px, calc(calc(100% - 200px) * 100000), 10px);
}
```

通过，将 `calc(100% - 200px)` 的值，乘上一个超大的倍数 `100000`，无论是正值还是负值，我们把计算值放大了 100000 倍。这样，整个效果就达成了我们想要的效果：

![img](./img/582f69e86a0c4b529e383d753b06f067~tplv-k3u1fbpfcp-jj-mar.awebp)

仔细看上图，ICON 元素从渐现，变成了瞬间出现！与上面的 `@container` 效果几乎一致，最终达成了我们想要的效果。

其核心就在于 `clamp(-9999px, calc(calc(100% - 200px) * 100000), 10px)`，一定需要好好理解这一段代码背后的逻辑。

基于此，我们就巧妙的利用 `clamp()` + `calc()` 方法，近似的实现了类似于 `if/else` 的逻辑，实在是妙不可言！

<iframe height="300" style="width: 100%;" scrolling="no" title="flexible content" src="https://codepen.io/mafqla/embed/ZENzvrb?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/ZENzvrb">
  flexible content</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
