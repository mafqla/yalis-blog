`ccent-color` 是从 Chrome 93 开始被得到支持的一个不算太新属性。之前一直没有好好介绍一下这个属性。直到最近在给一些系统整体切换主题色的时候，更深入的了解了一下这个属性。

简单而言，CSS `accent-color` 支持使用几行简单的 CSS 为**表单元素**着色，是的，只需几行代码就可以将主题颜色应用到页面的表单输入。

而 `accent-color` 就是规范非常大的一个改变，我们开始能更多的自定义原生的表单的样式了！

## 如何使用 `accent-color`

OK，我们一起来学习一下，我们应该如何使用 `accent-color`。

首先，我们来实现这么一个简单的表单界面：

```HTML
<div class="wrapper">
	<form action="">
		<fieldset>
			<legend>Accent-color Demo</legend>

			<label>
				Strawberries
				<input type="checkbox" id="berries_1" value="strawberries">
			</label>

			<label>
				Radio Buttons
				<div>
					<input type="radio" name="accented-demo" checked>
					<input type="radio" name="accented-demo">
					<input type="radio" name="accented-demo">
				</div>
			</label>

			<label>
				Range Slider
				<input type="range">
			</label>

			<label>
				Progress element
				<progress max="100" value="50">50%</progress>
			</label>
		</fieldset>
	</form>
</div>
```

只需要最简单的布局 CSS，与 `accent-color` 关系不大，我就不列出来了，这样，我们的 DEMO 大致如下：

![img](./img/2d9c0821c091430dad6658cff154ed2d~tplv-k3u1fbpfcp-jj-mar75.awebp)

可以看到，表单控件的主题颜色是**蓝色**，在之前，我们是没办法修改这个颜色的。

而现在，我们可以简单的借助 `accent-color`，修改表单的主题色：

```CSS
:root {
	accent-color: rgba(250, 15, 117);
}
```

其中，`rgba(250, 15, 117)` 表示粉色，此时，整体的效果就变成了：

![img](./img/8f5bb3fb8b54479187110cef0c810dab~tplv-k3u1fbpfcp-jj-m75.awebp)

当然，这个 `accent-color` 也支持传入 CSS 变量，配合更多的其他颜色一起进行修改。

我们可以对上述的 DEMO 再简单改造：

```CSS
:root {
	--brand: rgba(250, 15, 117);
	accent-color: var(--brand);
}
fieldset {
	border: 1px solid var(--brand);
}
legend {
	color: var(--brand);
}
```

我们设置了一个 CSS 变量 `--brand: rgba(250, 15, 117)`，除了把这个颜色赋值给表单的 `accent-color`，还能赋值给其它更多元素。譬如这里，我们赋值给了 `<fieldset>` 的边框色和 `<legend>` 的文字颜色。

这样，当我们修改 CSS 变量值时，整个主题色会一起发生变化：

<iframe height="300" style="width: 100%;" scrolling="no" title="Accent-color with custom property" src="https://codepen.io/mafqla/embed/oNRXyap?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mafqla/pen/oNRXyap">
  Accent-color with custom property</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

通常而言，更多的时候，我们会将 `accent-color` 应用于：

- [checkbox](.https%3A%2F%2Fweb.dev%2Farticles%2Faccent-color%3Fhl%3Dzh-cn%23checkbox)
- [radio](.https%3A%2F%2Fweb.dev%2Farticles%2Faccent-color%3Fhl%3Dzh-cn%23radio)
- [range](.https%3A%2F%2Fweb.dev%2Farticles%2Faccent-color%3Fhl%3Dzh-cn%23range)
- [progress](.https%3A%2F%2Fweb.dev%2Farticles%2Faccent-color%3Fhl%3Dzh-cn%23progress)

## 与 [color-scheme](.https%3A%2F%2Fweb.dev%2Farticles%2Fcolor-scheme%3Fhl%3Dzh-cn) 配合使用，适配日间夜间模式

还有一个容易忽略的细节点。`accent-color` 还支持和 [color-scheme](.https%3A%2F%2Fweb.dev%2Farticles%2Fcolor-scheme%3Fhl%3Dzh-cn) 一起使用。

OK，什么是 color-scheme 呢？color-scheme 是 CSS 的一个属性，用于指定网页的颜色方案或主题。它定义了网页元素应该使用哪种颜色方案来呈现内容。

color-scheme 属性有以下几个可能的取值：

- auto：表示使用用户代理（浏览器）的默认颜色方案。这通常是浏览器自动根据操作系统或用户设置选择的方案。
- light：表示使用浅色颜色方案。这通常包括浅色背景和深色文本。
- dark：表示使用深色颜色方案。这通常包括深色背景和浅色文本。

通过指定适当的 color-scheme 值，开发者可以为网页提供不同的颜色方案，以适应用户的偏好或操作系统的设置。这有助于提供更好的可访问性和用户体验。

譬如，我们可以将页面的 `color-schema` 设置为 `light dark`：

```CSS
body {
  color-scheme: light dark;
}
```

上述代码表示页面将同时支持浅色和深色颜色方案。它告诉浏览器，网页希望适应用户代理（浏览器）的默认颜色方案，并同时支持浅色和深色模式。

当使用 `color-scheme: light dark` 时，浏览器会根据用户代理的默认颜色方案来选择适当的颜色方案。如果用户代理处于浅色模式，网页将使用浅色颜色方案来呈现内容；如果用户代理处于深色模式，网页将使用深色颜色方案来呈现内容。

此时，我们的代码可以这样改造：

```CSS
:root {
	--brand: rgba(250, 15, 117, 1);
	accent-color: var(--brand);
}
@media (prefers-color-scheme: dark) {
	:root {
		--brand: rgba(3, 169, 244, 1);
	}

	body {
		background: #000;
		color: #fff;
	}
}
body {
	color-scheme: light dark;
}
```

下面是我在手机上调整日间模式和夜间模式的效果图：

![img](./img/3baabe9088c74cddb8fa1eed5730ac46~tplv-k3u1fbpfcp-jj-marq75.awebp)

通过 `@media (prefers-color-scheme: dark) {}` 媒体查询，在黑夜模式下，展示不同的 `accent-color`。

> <iframe height="300" style="width: 100%;" scrolling="no" title="Accent-color with custom property" src="https://codepen.io/mafqla/embed/RwmPJeB?default-tab=html%2Cresult&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
>   See the Pen <a href="https://codepen.io/mafqla/pen/RwmPJeB">
>   Accent-color with custom property</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
>   on <a href="https://codepen.io">CodePen</a>.
> </iframe>
