## 实现主体

首先，我们需要对该结构进行简单的一个拆解，因为上下部分的较大差异，虽然是一个圆，但是很明显需要分成两块处理，这部分比较简单且不是重点，我就略过分享，直接上代码。

我们的结构大致如下：

```html
<div class="g-container">
  <div class="g-top"></div>
  <div class="g-bottom"></div>
</div>
```

```scss
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,200&display=swap');
.g-container {
  width: 100%;
  height: 100%;
  background: #000;
}
.g-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, 100px);
    box-sizing: border-box;
    background: #000;
    border: 25px solid #fff;
    z-index: 1;
    box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.8), 0 0 8px 2px rgba(255, 255, 255, 0.6);
  }
}
.g-bottom {
  position: fixed;
  top: 50vh;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: #000;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0;
    width: 200px;
    height: 200px;
    background: #000;
    left: 50%;
    transform: translate(-50%, -100px);
    box-sizing: border-box;
    border: 25px solid #fff;
    z-index: 2;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.7),
      0 0 20px rgba(255, 255, 255, 0.6);
    filter: blur(4px);
  }
}
```

核心做的就是上下两个半圆的实现，以及对下面部分使用了模糊滤镜 `filter: blur()`，我们可以初步得到这样一个结构：

[![img]./img/132116470-c762f2f2-ac61-4f02-9b9a-a38c359eb8c9.png)](https://user-images.githubusercontent.com/8554143/132116470-c762f2f2-ac61-4f02-9b9a-a38c359eb8c9.png)

好吧，看着确实是平平无奇。

## 添加 SVG feTurbulence 滤镜。实现水波倒影效果

OK，下面就是见证奇迹的时刻。我们给下部分的 `g-bottom` 添加一个 SVG feTurbulence 滤镜，让它产生水波倒影效果。

SVG feTurbulence 滤镜在我的非常多篇文章中都有提到，turbulence 意为湍流，不稳定气流，而 SVG `<feTurbulence>` 滤镜能够实现半透明的烟熏或波状图像。通常用于实现一些特殊的纹理。滤镜利用 Perlin 噪声函数创建了一个图像。噪声在模拟云雾效果时非常有用，能产生非常复杂的质感，利用它可以实现了人造纹理比如说云纹、大理石纹的合成。

emmm，所以步骤是：

1. 实现一个 SVG feTurbulence 效果
2. 加上 SVG animation 动画，
3. 再通过 CSS Filter 引用至滤镜到 DOM 结构之上

```html
<!-- HTML 结构下的 SVG 代码 -->
<svg>
  <filter
    id="fractal"
    filterUnits="objectBoundingBox"
    x="0%"
    y="0%"
    width="100%"
    height="100%"
  >
    <feTurbulence
      id="turbulence"
      type="fractalNoise"
      baseFrequency="0.01 0.01"
      numOctaves="10"
    >
      <animate
        attributeName="baseFrequency"
        dur="30s"
        values="0.01 0.01;0.03 0.15;0.01 0.01"
        repeatCount="indefinite"
      />
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
  </filter>
</svg>
```

```css
.g-bottom {
  // 通过 Filter 引用 SVG 滤镜到 DOM 结构之上
  filter: url(#fractal);
}
```

[![img]./img/132117801-408769a4-d6ed-4b81-9ce2-83378d32e50b.gif)](https://user-images.githubusercontent.com/8554143/132117801-408769a4-d6ed-4b81-9ce2-83378d32e50b.gif)

Wow，仅仅是一个滤镜的叠加，就瞬间让动画高大上了起来。这也是 SVG feTurbulence 滤镜的魅力所在，完成了 CSS 一些无法实现的功能。

## 通过渐变及 MASK 实现光圈

再看看原图，还有一圈圈的蓝色光圈，这个使用 `repeating-radial-gradient` 及 `mask` 可以实现。

简单的代码如下：

```html
<div></div>
```

```css
div {
  background: repeating-radial-gradient(
    circle at 50% 100%,
    transparent,
    transparent 5px,
    #2c5ec8 5.2px,
    #2c5ec8 6.2px,
    transparent 6.5px
  );
  mask: radial-gradient(
    circle at 50% 100%,
    rgba(255, 255, 255, 0.8),
    transparent 25%,
    transparent
  );
}
```

`repeating-radial-gradient` 配合 `mask` 实现渐隐的光圈效果，结果如下：

[![img]./img/132117982-4a53e332-a535-4d9d-b28b-1a6f1089b4c7.png)](https://user-images.githubusercontent.com/8554143/132117982-4a53e332-a535-4d9d-b28b-1a6f1089b4c7.png)

把这个光圈往效果里叠加，及其他一些小细节及文字，最终可以实现一个这样的 LOGO 效果（虽然也不是很像，还有很多细节没还原）：

[![img]./img/132118280-7119c524-4b5c-4b9d-b851-aec507dd2ab4.gif)](https://user-images.githubusercontent.com/8554143/132118280-7119c524-4b5c-4b9d-b851-aec507dd2ab4.gif)

<iframe height="300" style="width: 100%;" scrolling="no" title="Harmony OS" src="https://codepen.io/mafqla/embed/ExMBeRV?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/ExMBeRV">
  Harmony OS</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 脑洞一下

运用上述的 SVG feTurbulence 滤镜，我们能不能再搞点事情呢？

我们可以利用它，尝试去实现这样的效果，实现图片的部分动态波动，运用在特定的场景，能够非常大的提升用户体验，让人“哇塞”一下：

[![img]./img/132119053-035948cd-be87-4ff5-9e50-9b92c38e70d2.gif)](https://user-images.githubusercontent.com/8554143/132119053-035948cd-be87-4ff5-9e50-9b92c38e70d2.gif)

又或者是：

[![3333]./img/132119101-b7c0efbc-720e-46b1-b835-361a52826a78.gif)](https://user-images.githubusercontent.com/8554143/132119101-b7c0efbc-720e-46b1-b835-361a52826a78.gif)

上述两个效果来自：[tympanus - Distortion Effect](https://tympanus.net/Tutorials/HeatDistortionEffect/index3.html)，但是它们并非是使用 CSS + SVG 实现，而是使用的 WebGL，但是它们确实可以用上述的方式复现。

假设我们有这样一张图：

[![img]./img/132119443-1317968a-58db-46cf-bcd3-39c9184e9c65.png)](https://user-images.githubusercontent.com/8554143/132119443-1317968a-58db-46cf-bcd3-39c9184e9c65.png)

下面，我们就利用 SVG feTurbulence 让中间的石头**波动**起来：

1. 我们让两张一模一样的图叠加在一起（使用 div 及它的伪元素即可）
2. 利用 `clip-path` 将叠在上层的图中的石头切割出来
3. 利用 SVG feTurbulence 将滤镜作用给上层的图片

完整的代码如下：

```html
<div></div>

<svg>
  <filter
    id="fractal"
    filterUnits="objectBoundingBox"
    x="0%"
    y="0%"
    width="100%"
    height="100%"
  >
    <feTurbulence
      id="turbulence"
      type="fractalNoise"
      baseFrequency="0.005 0.005"
      numOctaves="10"
    >
      <animate
        attributeName="baseFrequency"
        dur="60s"
        values="0.005 0.005;0.003 0.03;0.005 0.005"
        repeatCount="indefinite"
      />
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
  </filter>
</svg>
```

```scss
div {
  position: relative;
  width: 600px;
  height: 400px;
  background-image: url(https://z3.ax1x.com/2021/09/05/hWPVqe.jpg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: inherit;
    clip-path: polygon(225px 50px, 320px 50px, 320px 90%, 225px 90%);
    filter: url(#fractal);
  }
}
```
