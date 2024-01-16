import{_ as o,o as n,c as l,k as e,a,U as t}from"./chunks/framework.5FtAyiyV.js";const i="/assets/71305119-eeec7180-2409-11ea-8325-b9fae1304b53.5h33TG53.gif",r="/assets/71305222-4d661f80-240b-11ea-8d3d-89bd4985b0e5.zvC1mUXA.gif",s="/assets/30364156-9b5dc8e0-9895-11e7-876e-4c43af234ca3.W8a7rLId.gif",W=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/48-巧用 CSS 实现酷炫的充电动画 .md","filePath":"knowledge/FrontEnd/css/1-基础/48-巧用 CSS 实现酷炫的充电动画 .md","lastUpdated":1705386462000}'),d={name:"knowledge/FrontEnd/css/1-基础/48-巧用 CSS 实现酷炫的充电动画 .md"},h=e("h2",{id:"画个电池",tabindex:"-1"},[a("画个电池 "),e("a",{class:"header-anchor",href:"#画个电池","aria-label":'Permalink to "画个电池"'},"​")],-1),c=e("h3",{id:"增加阴影及颜色的变化",tabindex:"-1"},[a("增加阴影及颜色的变化 "),e("a",{class:"header-anchor",href:"#增加阴影及颜色的变化","aria-label":'Permalink to "增加阴影及颜色的变化"'},"​")],-1),p=e("p",null,"如果要继续优化的话，需要添加点细节。",-1),_=e("p",null,"我们知道，低电量时，电量通常表示为红色，高电量时表示为绿色。再给整个色块添加点阴影的变化，呼吸的感觉，让充电的效果看起来确实是在动。",-1),f=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Battery Animation One",src:"https://codepen.io/mafqla/embed/oNVBaNQ?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/oNVBaNQ">
  Battery Animation One</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),m=t('<h3 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-label="Permalink to &quot;知识点&quot;">​</a></h3><p>到这里，其实只有一个知识点：</p><ul><li>使用 filter: hue-rotate() 对渐变色彩进行色彩过渡变换动画</li></ul><p>我们无法对一个渐变色直接进行 animation ，这里通过滤镜对色相进行调整，从而实现了渐变色的变换动画。</p><h2 id="添加波浪" tabindex="-1">添加波浪 <a class="header-anchor" href="#添加波浪" aria-label="Permalink to &quot;添加波浪&quot;">​</a></h2><p>ok，刚刚算一个小里程碑，接下来再进一步。电量的顶部为一条直线有点呆呆的感觉，这里我们进行改造一下，如果能将顶部直线，改为波浪滚动，效果会更为逼真一点。</p><p>改造之后的效果：</p><p><img src="'+i+'" alt="charging3" loading="lazy"></p><h3 id="知识点-1" tabindex="-1">知识点 <a class="header-anchor" href="#知识点-1" aria-label="Permalink to &quot;知识点&quot;">​</a></h3><p>这里的一个知识点就是上述说的使用 CSS 实现简易的波浪效果，通过障眼法实现，看看图就明白了：</p><p><img src="'+r+'" alt="charging4" loading="lazy"></p>',11),u=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Battery Animation Two",src:"https://codepen.io/mafqla/embed/eYXgPmG?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/eYXgPmG">
  Battery Animation Two</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),b=e("p",null,"OK，到这，上述效果加上数字变化已经算是一个比较不错的效果了。当然上面的效果看上去还是很 CSS 的，就是一眼看到就觉得用 CSS 是可以做到的。",-1),g=e("h2",{id:"使用强大的-css-滤镜实现安卓充电动画效果",tabindex:"-1"},[a("使用强大的 CSS 滤镜实现安卓充电动画效果 "),e("a",{class:"header-anchor",href:"#使用强大的-css-滤镜实现安卓充电动画效果","aria-label":'Permalink to "使用强大的 CSS 滤镜实现安卓充电动画效果"'},"​")],-1),q=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"HuaWei Battery Charging Animation",src:"https://codepen.io/mafqla/embed/PoLWyqo?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/PoLWyqo">
  HuaWei Battery Charging Animation</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),S=t('<h3 id="知识点-2" tabindex="-1">知识点 <a class="header-anchor" href="#知识点-2" aria-label="Permalink to &quot;知识点&quot;">​</a></h3><p>拆解一下知识点，最主要的其实是用到了 <code>filter: contrast()</code> 以及 <code>filter: blur()</code> 这两个滤镜，可以很好的实现这种融合效果。</p><p>单独将两个滤镜拿出来，它们的作用分别是：</p><ol><li><code>filter: blur()</code>： 给图像设置高斯模糊效果。</li><li><code>filter: contrast()</code>： 调整图像的对比度。</li></ol><p>但是，当他们“合体”的时候，产生了奇妙的融合现象。</p><p>先来看一个简单的例子：</p><p><img src="'+s+'" alt="filtermix" loading="lazy"></p><p>仔细看两圆相交的过程，在边与边接触的时候，会产生一种边界融合的效果，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。</p><p>当然，这里也是可以加上颜色的变换，效果也很不错：</p>',9),y=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"HuaWei Battery Charging Animation",src:"https://codepen.io/mafqla/embed/abMpROK?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/abMpROK">
  HuaWei Battery Charging Animation</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),C=e("h3",{id:"容易忽视的点",tabindex:"-1"},[a("容易忽视的点 "),e("a",{class:"header-anchor",href:"#容易忽视的点","aria-label":'Permalink to "容易忽视的点"'},"​")],-1),P=e("p",null,[a("通过调节 "),e("code",null,"filter: blur()"),a(" 及 "),e("code",null,"filter: contrast()"),a(" 属性的值，动画效果其实会有很大程度的变化，好的效果需要")],-1),w=[h,c,p,_,f,m,u,b,g,q,S,y,C,P];function T(k,A,x,B,N,V){return n(),l("div",null,w)}const E=o(d,[["render",T]]);export{W as __pageData,E as default};
