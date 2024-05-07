使用纯 CSS 的方法，能否暂停、播放纯 CSS 动画？看起来不可能，至少很麻烦。

我们知道，在 CSS3 animation 中，有这样一个属性可以播放、暂停动画：

```css
 {
  animation-play-state: paused | running;
}
```

> animation-play-state: 属性定义一个动画是否运行或者暂停。可以通过查询它来确定动画是否正在运行。另外，它的值可以被设置为暂停和恢复的动画的重放。

如果借助 Javascrip，我们可以实现控制 CSS 动画的运行和播放，下面列出部分关键代码：

```html
<div class="btn">stop</div>
<div class="animation"></div>

<style>
  .animation {
    animation: move 2s linear infinite alternate;
  }

  @keyframes move {
    0% {
      transform: translate(-100px, 0);
    }
    100% {
      transform: translate(100px, 0);
    }
  }
</style>
```

```js
document.querySelector('.btn').addEventListener('click', function () {
  let btn = document.querySelector('.btn')
  let elem = document.querySelector('.animation')
  let state = elem.style['animationPlayState']

  if (state === 'paused') {
    elem.style['animationPlayState'] = 'running'
    btn.innerText = 'stop'
  } else {
    elem.style['animationPlayState'] = 'paused'
    btn.innerText = 'play'
  }
})
```

<PauseAnimation/>

## 纯 CSS 实现

下面我们探讨下，使用纯 CSS 的方式能否实现。

### hover 伪类实现

使用 hover 伪类，在鼠标悬停在按钮上面时，控制动画样式的暂停。

关键代码如下:

```css
<div class="btn stop">stop</div>
<div class="animation"></div>

<style>
.stop:hover ~ .animation {
    animation-play-state: paused;
}
</style>
```

<PauseAnimationHover/>

当然，这个方法不够智能，如果释放鼠标的自由，点击一下暂停、再点击一下播放就好了。还有其他方法吗？

### checked 伪类实现

[之前的文章](http://www.cnblogs.com/coco1s/p/5955631.html)也谈过，使用 `radio` 标签的 `checked` 伪类，加上 `<label for>` 实现纯 CSS 捕获点击事情。

并且利用被点击的元素可以控制一些 CSS 样式。实现如下：

```html
<input id="stop" type="radio" />
<input id="play" type="radio" />

<div class="box">
  <label for="stop">
    <div class="btn">stop</div>
  </label>
  <label for="play">
    <div class="btn">play</div>
  </label>
</div>

<div class="animation"></div>
```

部分关键 CSS 代码：

```css
.animation {
  animation: move 2s linear infinite alternate;
}

#stop:checked ~ .animation {
  animation-play-state: paused;
}

#play:checked ~ .animation {
  animation-play-state: running;
}
```

我们希望当 `#stop` 和 `#play` 两个 radio 被击时，给 `.animation` 元素分别赋予 `animation-play-state: paused` 或是 `animation-play-state: running` 。

<PauseAnimationChecked/>
