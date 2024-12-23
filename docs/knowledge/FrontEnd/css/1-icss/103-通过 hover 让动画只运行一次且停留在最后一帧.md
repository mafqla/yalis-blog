## animation-fill-mode 控制元素在各个阶段的状态

首先，动画只运行一次，未运行前处于第一帧，运行完后处于最后一帧。

这个刚好利用 CSS 动画的 `animation-fill-mode: both` 即可。

1. `animation-fill-mode: backwards`：可以让元素在动画开始之前的样式为动画运行时的第一帧，动画结束后的样式则恢复为 CSS 规则设定的样式
2. `animation-fill-mode: forwards`：元素在动画开始之前的样式为 CSS 规则设定的样式，而动画结束后的样式则表现为由执行期间遇到的最后一个关键帧计算值（也就是停在最后一帧）

而，`animation-fill-mode: both` 兼顾了上面两种模式的特点，可以使得**动画开始前的样式为动画运行时的第一帧，动画结束后停在最后一帧**。

## 反向利用 animation-play-state 实现 hover 触发动画行进

而**动画通过 hover 驱动，只有用户 hover 元素的时候，动画才进行**这一点，利用 `animation-play-state` 即可。

我们都知道，正常情况下，动画应该是运行状态，那如果我们将动画的默认状态设置为暂停，只有当鼠标点击或者 hover 的时候，才设置其 `animation-play-state: running`，这样就可以利用 hover 控制动画的行进！

基于上述两点，我们来实现一个有意思的打字动画，做到动画只触发单次，并且只有 hover 的时候动画会运行。

```html
<p>Hover Me - You are a pig!</p>
```

```css
p {
  position: relative;
  font-family: monospace;
  width: 26ch;
  animation: typing 3s steps(15, end);
  animation-fill-mode: both;
  animation-play-state: paused;
  overflow: hidden;
}
p:hover {
  animation-play-state: running;
}
p::before {
  position: absolute;
  content: '';
  width: 4px;
  top: 0;
  bottom: 0;
  right: 0;
  animation: blink 0.8s linear infinite;
}
@keyframes blink {
  0%,
  50% {
    border-right: 4px solid transparent;
  }
  50%,
  100% {
    border-right: 4px solid #000;
  }
}
@keyframes typing {
  from {
    width: 11ch;
  }
  to {
    width: 26ch;
  }
}
```

默认情况下，展示这样一个界面：

[![img](./img/167853093-d8edc2de-15d8-4f69-b870-3c5b29dc62ee.gif)](https://user-images.githubusercontent.com/8554143/167853093-d8edc2de-15d8-4f69-b870-3c5b29dc62ee.gif)

接下来，我们把鼠标放上去，看看会发生什么：

[![img](./img/167853146-3f842313-0cac-4f26-968f-1746fbda214f.gif)](https://user-images.githubusercontent.com/8554143/167853146-3f842313-0cac-4f26-968f-1746fbda214f.gif)

有意思，完美的实现了上面说的要求 -- **动画通过 hover 驱动，只有用户 hover 元素的时候，动画才进行**。

当然，这里还运用了几个小技巧，一并解释下：

1. 打字动画运用了逐帧动画，而不是补间动画，主要利用了 CSS 动画的 `step-timing-function` 步骤缓动函数，也就是代码中的 `steps(15, end)`
2. `ch` 是 CSS 当中的一个相对单位，这一单位代表元素所用字体 font 中 “0” 这一字形的宽度
3. `font-family: monospace` 表示等宽字体，每个字符占据的宽度是一样，因为我们使用了 `26ch` 来充当 `<p>` 元素的宽度，而 `Hover Me - You are a pig` 这一段文字算上空格刚好 26 个字符，`26ch` 刚好表示这一段文本的长度
4. 一开始展示的文本 `Hover me - ` 算上空格是 `11ch` 宽度，而最后整个文本展示完需要 `26ch` 的宽度，中间需要经过 15 步的逐帧动画，这里的元素刚好和代码中的一一对应上

借助上面 4 步及搭配我们上文介绍的 `animation-fill-mode: both`、`animation-play-state: paused` 的应用，我们就完美的实现了这样一个非常有意思的打字动画。

<iframe height="300" style="width: 100%;" scrolling="no" title="running once animation by hover" src="https://codepen.io/mafqla/embed/WNWpXgN?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/WNWpXgN">
  running once animation by hover</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
