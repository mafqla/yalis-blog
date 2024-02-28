本文主要想探讨一下，使用 CSS 能否比较好的实现一些**烟雾效果**。像是这样：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147092625-87c88cc2-d99f-49cc-9658-e8f739d3ea67.png)](https://user-images.githubusercontent.com/8554143/147092625-87c88cc2-d99f-49cc-9658-e8f739d3ea67.png)

仔细观察烟雾效果，有两个比较重要的特点：

- 模糊效果
- 颗粒感

首先看模糊效果，想到模糊，大部分同学首先都会想到使用 `filter: blur()` 。

当然没错，不过在 CSS 中，除了滤镜，我们还能使用一类其他手段去模拟**模糊**的效果。

## 纯 CSS 实现烟雾动画

我们首先来看这样一个效果：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147093514-426ab79c-ba3b-43f9-8f14-7e3a19946735.gif)](https://user-images.githubusercontent.com/8554143/147093514-426ab79c-ba3b-43f9-8f14-7e3a19946735.gif)

假设，我们有这样一个字符：

```html
<span>C</span>
```

我们仅仅是通过 `text-shadow` + `opacity` 的变化，就能模拟烟雾的效果：

```css
span {
  text-shadow: 0 0 0 whitesmoke;
  animation: smoky 5s;
}

@keyframes smoky {
  to {
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}
```

看看效果：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147094578-0eeff445-7bf0-4874-9576-2c0a5c8880db.gif)](https://user-images.githubusercontent.com/8554143/147094578-0eeff445-7bf0-4874-9576-2c0a5c8880db.gif)

在上述的基础上，我们可以加上位移、旋转、缩放，稍微改造一下上述代码，添加一些 `transform` 变换：

```css
span {
  text-shadow: 0 0 0 whitesmoke;
  animation: smoky 5s;
}

@keyframes smoky {
  to {
    transform: translate3d(200px, -80px, 0) rotate(-40deg) skewX(70deg) scale(
        1.5
      );
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}
```

就可以得到如下效果：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147095187-30d05098-3855-4277-bc39-d0f57c0cac47.gif)](https://user-images.githubusercontent.com/8554143/147095187-30d05098-3855-4277-bc39-d0f57c0cac47.gif)

叠加了 `transform` 之后，就很有一个字被吹跑，变成烟雾的感觉。在此基础之上，我们只需要将多个字放在一起，利用 `animation-delay` 顺序控制每个字触发动画效果，即可得到上述的完整烟雾效果。

伪代码如下：

```html
<div>
  <span>C</span>
  <span>S</span>
  <span>S</span>
  // ...
</div>
```

```css
// ... 上述所有 CSS 代码

@for $item from 1 through 21 {
  span:nth-of-type(#{$item}) {
    animation-delay: #{(($item/10))}s;
  }
}
```

就可以得到这样一个被风吹跑的字，幻化成烟雾的效果：

<iframe height="300" style="width: 100%;" scrolling="no" title="Smoky Text" src="https://codepen.io/mafqla/embed/wvZwpJd?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/wvZwpJd">
  Smoky Text</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 借助 SVG feturbulence 滤镜实现烟雾效果

上述的烟雾动画的烟雾还是比较粗糙的。主要是缺少了一点颗粒感？缺少了一些烟雾的质感。

想要实现更为精致的烟雾效果，我们还得借助 SVG 的 `<feturbulence>` 滤镜，接下来会使用 `filter: blur()` 配合 `<feturbulence>` 滤镜，得到更为逼真的烟雾效果。

举个简单的例子，假设有这样几个字：

```html
<div">SMOKE</div>
```

简单的 CSS：

```css
div {
  background: linear-gradient(#fff, #999, #ddd, #888);
  background-clip: text;
}
```

得到这样几个带渐变色字：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147097433-4a2520c8-115f-4d56-b01d-4145a9451c71.png)](https://user-images.githubusercontent.com/8554143/147097433-4a2520c8-115f-4d56-b01d-4145a9451c71.png)

我们利用 `<feturbulence>` 滤镜简单处理一下：

```html
<div>SMOKE</div>

<svg width="0">
  <filter id="filter">
    <feTurbulence
      id="turbulence"
      type="fractalNoise"
      baseFrequency=".03"
      numOctaves="20"
    />
    <feDisplacementMap in="SourceGraphic" scale="30" />
  </filter>
</svg>
```

CSS 的中利用 `filter: url()` 引入该滤镜，这里为了效果更好，我直接在 `<body>` 上引入了该滤镜：

```css
body {
  filter: url('#filter');
}
div {
  background: linear-gradient(#fff, #999, #ddd, #888);
  background-clip: text;
}
```

我们的字体就被 `<feturbulence>` 滤镜 赋予了一种流体的感觉：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147097680-f6345c73-1ae2-4c4e-9902-48028ebb8647.png)](https://user-images.githubusercontent.com/8554143/147097680-f6345c73-1ae2-4c4e-9902-48028ebb8647.png)

这个效果可以说和烟雾效果基本没什么关系，不过只需要再添加一个模糊滤镜，神奇的事情就发生了：

```css
body {
  filter: url('#filter');
}
div {
  background: linear-gradient(#fff, #999, #ddd, #888);
  background-clip: text;
  filter: blur(5px);
}
```

整个效果就瞬间**烟雾化**了很多：

[![img](D:\vscode-project\front-end-notes\docs\knowledge\FrontEnd\css\1-基础\img\147097811-da32d8d5-350f-46a2-a472-b4bd5fe2b3d9.png)](https://user-images.githubusercontent.com/8554143/147097811-da32d8d5-350f-46a2-a472-b4bd5fe2b3d9.png)

好，给它添加上循环的动画效果，简单的借助 JavaScript 处理一下：

```js
const filter = document.querySelector('#turbulence')
let frames = 1
let rad = Math.PI / 180
let bfx, bfy

function freqAnimation() {
  frames += 0.2

  bfx = 0.03
  bfy = 0.03

  bfx += 0.005 * Math.cos(frames * rad)
  bfy += 0.005 * Math.sin(frames * rad)

  bf = bfx.toString() + ' ' + bfy.toString()
  filter.setAttributeNS(null, 'baseFrequency', bf)

  window.requestAnimationFrame(freqAnimation)
}

window.requestAnimationFrame(freqAnimation)
```

看看效果：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS + SVG Text Smoke Effect" src="https://codepen.io/mafqla/embed/qBwWpre?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/qBwWpre">
  CSS + SVG Text Smoke Effect</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

当然，上述效果可以通过：

1. 控制 `<feTurbulence>` 的 `baseFrequency` 属性调节
2. 控制 `<feTurbulence>` 的 `numOctaves` 属性调节
3. 控制 `<feDisplacementMap>` 的 `scale` 属性调节

将 `<feTurbulence>` 的 `numOctaves` 属性由 30 改成 70，基本就看不到文字的轮廓了，文字整个雾化。我们可以制作类似这样的 hover 效果：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS + SVG Text Smoke Hover Effect" src="https://codepen.io/mafqla/embed/GRLKymj?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/GRLKymj">
  CSS + SVG Text Smoke Hover Effect</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

这样，基于 `filter: blur()` 配合 `<feturbulence>` 滤镜，我们可以得到非常逼真的烟雾效果，基于上述的演示，我们还可以再挖掘非常多有意思的效果，本文就不再赘述。
