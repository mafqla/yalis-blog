在我们的页面中，经常会出现这样的问题，一块区域内的文本或者边框，在展示的时候，变得特别的模糊。

## 何时触发这种现象？

那么？什么时候会触发这种问题呢？在 Google 上，其实我们能搜到非常多类似的案例，总结而言：

1. **当文本元素的某个祖先容器存在 `transform: translate()` 或者 `transform: scale()` 等 `transform` 操作时，容易出现这种问题**

当然，这只是必要条件，不是充分条件。继续深入探究，会发现，必须还得同时满足一些其它条件：

1. **元素作用了 `transform: translate()` 或者 `transform: scale()` 后的计算值产生了非整数**

譬如，上述案例触发的 CSS 代码如下：

```css
.container {
  position: absolute;
  width: 1104px;
  height: 475px;
  top: 50%;
  transform: translateY(-50%);
  // ...
}
```

由于元素的高度为 `475px`，`translateY(-50%)` 等于 `237.5px`，非整数，才导致了内部的字体模糊。

但是，需要注意的是，并非所有产生的非整数都会导致了内部的字体模糊。

这里有个简单的示意：

还是上述的例子，当高度从 `477px` 一直调整到 `469px` 的过程中，只有 `477px` 和 `475px` 导致了模糊，而 `473, 471, 469` 则没有。所以，这也只是引发模糊的一个必要条件。

1. **文本内容是否模糊还与屏幕有关，高清屏（dpr > 2）下不容易触发，更多发生在普通屏幕下（dpr = 1）**

在我实测的过程中还发现，这个现象基本只会发生在 dpr 为 1 的普通屏幕下。

类似于 MAC 的高清屏幕则不太会触发这个问题。

> dpr = 物理像素 / 设备独立像素，表示设备像素比。这个与我们通常说的视网膜屏（多倍屏，Retina 屏）有关。设备像素比描述的是未缩放状态下，物理像素和设备独立像素的初始比例关系。

1. **并非所有浏览器都是这个表现，基本发生在 chromium 内核。**

## 为何发生这种现象呢？

那么，为何会发生这种现象？针对这个问题，没有找到特别官方的回答，普遍的认为是因为：

**由于浏览器将图层拆分到 GPU 以进行 3D 转换，而非整数的像素偏移，使得 Chrome 在字体渲染的时候，不是那么的精确**。

关于这个问题，感兴趣的可以再看看这两个讨论：

- [Chromium Bugs -- Issue 521364: Transformed text at fractional offsets is very blurry.](https://bugs.chromium.org/p/chromium/issues/detail?id=521364)
- [Serious bug: Slick Slider turns off subpixel font rendering on the entire site in Chrome #2275](https://github.com/kenwheeler/slick/issues/2275)

## 如何解决？

那么针对这个问题，我们该如何解决呢？社区里给出的一种方案：

1. 给元素设置 `-webkit-font-smoothing: antialiased`

`font-smooth` CSS 属性用来控制字体渲染时的平滑效果，该特性是非标准的，我们应该尽量不要在生产环境中使用它。并且在我的实测中，这个方法不太奏效。

1. 保证运用了 `transform: translate()` 或者 `transform: scale()` 的元素的高宽为偶数

如果你赋予给元素的 `transform` 的值非常明确，譬如我上文例子中的利用其来对元素进行水平垂直居中 -- `transform: translate(-50%, -50%)`，让元素的高宽为偶数这个方法是可行的，但如果当你无法确定`transform` 的值，譬如 `transform: translateX(-31.24%)` 或者是 `transform: scale(1.05)`，那这个方法依旧无法奏效。

1. 弃用 `transform`

如果这个问题对你的页面非常致命，那么只能弃用 `transform`，寻找替代方案。大部分的时候，我们还是可以找到不使用 `transform` 的替代方案的。

总结一下，本文简单探究了在 Chromium 内核下，使用了 `transform` 导致内部文本模糊的现象，并且给出了一些可尝试的解决方案，实际遇到，需要多加调试，尝试最优的解决方案。
