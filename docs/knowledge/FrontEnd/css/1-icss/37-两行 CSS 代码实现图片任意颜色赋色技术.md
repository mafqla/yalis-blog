## mix-blend-mode 与 background-blend-mode

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

简单区分一下这两个属性：

- `mix-blend-mode` 用于多个不同标签间的混合模式
- `background-blend-mode` 用于单个标签间内背景图与渐变背景间的混合模式。

background-blend-mode 的可用取值与 mix-blend-mode 一样，不重复介绍，下面直接进入应用阶段。

## 使用 background-blend-mode: lighten 实现任意图片颜色赋色技术

OK，下面进入正文。如何通过纯 CSS 技术实现任意图片的任意颜色赋色技术呢？

假设我们有这样一张图片，JPG、PNG、GIF 都可以，但是有一个前提要求，就是**黑色纯色，背景白色**：

![iconmonstr-binoculars-10](./img/34239878-63f8787a-e645-11e7-9903-b7858c93f3e4.png)
利用 `background-blend-mode` ，我们可以在图片下叠加多一层其他颜色，通过 `background-blend-mode: lighten` 这个混合模式实现改变图片主体颜色黑色为其它颜色的目的。

简单的 CSS 代码示意如下：

```css
.pic {
  width: 200px;
  height: 200px;
  background-image: url($img);
  background-size: cover;
}

.pic1 {
  background-image: url($img), linear-gradient(#f00, #f00);
  background-blend-mode: lighten;
  background-size: cover;
}
```

效果如下：

![image](./img/34239994-1d55246c-e646-11e7-9ce4-42bbfb9bb7e8.png)

注意，上面 CSS 这一句是关键 `background-image: url($img), linear-gradient(#f00, #f00);` ，这里我叠加了一层渐变层 `linear-gradient(#f00, #f00)` ，实现了一个纯红色背景，而不是直接使用 #f00 实现红色背景。

## 使用 background-blend-mode: lighten 实现主色改为渐变色

这个方法更厉害的地方在于，不单单可以将纯色图片由一种颜色改为另一种颜色，而且可以将图片内的黑色部分由单色，改为渐变颜色！

简单的 CSS 代码如下：

```css
.pic {
  background-image: url($img), linear-gradient(#f00, #00f);
  background-blend-mode: lighten;
  background-size: cover;
}
```

可以得到这样的效果：

![image](./img/34240081-9f3e3162-e646-11e7-9e14-90b28d2c9baf.png)

OK，看到这里，大家伙肯定会有疑问了，这是怎么实现的呢？

这里就有必要解释一下 `lighten` 这个混合模式了。**变亮**，变亮模式与变暗模式产生的效果相反：

1. 用黑色合成图像时无作用，用白色时则仍为白色
2. 黑色比任何颜色都要暗，所以黑色会被任何色替换掉。反之，如果素材的底色是黑色，主色是白色。那就应该用变暗（darken）的混合模式

<iframe height="300" style="width: 100%;" scrolling="no" title="纯色图片赋色技术尝试" src="https://codepen.io/mafqla/embed/eYXzxBX?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/eYXzxBX">
  纯色图片赋色技术尝试</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 局限性尝试 -- 使用透明底色图片

上述方法要求了图片本身内容为纯色黑色，底色为白色。那么如果像 PNG 图片一样，只存在主色，而底色是透明的，是否能够同样实现效果呢？

假设我们有一张这样的 PNG 图片（灰色主色，透明底色）：

![img](./img/34240326-1cdeafd8-e648-11e7-8d69-f0da1b019316.png)

按照上面的方式实现一遍，结果如下：

![image](./img/34244533-a05509ee-e660-11e7-93cb-352f22f3fd72.png)

<iframe height="300" style="width: 100%;" scrolling="no" title="任意颜色赋色技术尝试 -- PNG图片" src="https://codepen.io/mafqla/embed/xxBOMdb?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/xxBOMdb">
  任意颜色赋色技术尝试 -- PNG图片</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

很遗憾，当底色是透明的时候，会被混合模式混合上叠加层的颜色，无法使用。所有，这个技术也就存在了一个使用前提：

- **图片的底色为白色，主色为黑色**

当然主色也可以是其他颜色，只是这个时候叠加需要考虑颜色的融合，没有使用黑色直观。

## background-blend-mode 实现图片任意颜色赋色技术总结

综上，我们确实只需要两行代码就可以实现白色底色黑色主色图片的任意颜色赋色技术。

```css
 {
  background-image: url($img), linear-gradient(#f00, #00f);
  background-blend-mode: lighten;
}
```

其中，`background-image` 的第二值就是你希望赋值给的渐变色（当然，渐变色可以生成纯色）。

我们同时给一个标签设置了背景图片和渐变色，然后利用了 `background-blend-mode:lighten` 这个关键属性，达到了类似 PS 里的混合模式效果。

看起来 `background-blend-mode` 名为混合模式，但似乎表现上更像是 PS 当中的一种的剪切蒙板，混合模式是修改图片本身，蒙版跟遮罩都是在图片上一层通过叠加其他层对图像进行调整。

那么由此方法本身可以想到，一些能对图形进行色彩调整的 CSS 属性是否也能达到同样的功能呢？诸如：

- filter 滤镜
- mask-image
- mask-clip

感兴趣的读者可以自行尝试，在接下来的文章我也会继续进行探讨。

黑色纯色，背景白色可能局限了这个技巧的使用场景，但是在很多白色底色的页面中，这个方法还是可以很好的发挥作用，许多 ICON 图片不再需要两个或者更多个颜色的版本！

## background-blend-mode 兼容性

相较于 `mix-blend-mode`，`background-blend-mode` 的兼容性会更好一点。所以本文所介绍的技术在移动端是存在用武之地的：
