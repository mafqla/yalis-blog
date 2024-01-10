import{_ as t,o as n,c as h,U as a,k as s,a as i}from"./chunks/framework.5FtAyiyV.js";const e="/assets/43713638-dc9dc0b2-99ac-11e8-818b-d8e079c9f436.0v_R2EWN.gif",l="/assets/228467041-acd6fbb9-4636-4371-a5e7-d0d91c632773.CSeiwFux.gif",k="/assets/228467073-5dca191c-0b38-4182-8bc1-a4456efd61d6.FlDStimF.gif",p="/assets/228467104-03fedcea-eeb3-4f66-acc7-cb6e53507633.l6_W6dRr.gif",N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/FrontEnd/css/1-基础/40-CSS 实现视差效果.md","filePath":"knowledge/FrontEnd/css/1-基础/40-CSS 实现视差效果.md","lastUpdated":1704851024000}'),d={name:"knowledge/FrontEnd/css/1-基础/40-CSS 实现视差效果.md"},r=a("",19),B=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment Demo",src:"https://codepen.io/mafqla/embed/zYbBejx?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/zYbBejx">
  bg-attachment Demo</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),F=a("",8),o=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment:fixed parallax",src:"https://codepen.io/mafqla/embed/mdoEvLB?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/mdoEvLB">
  bg-attachment:fixed parallax</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),c=s("p",null,"嗯？有点神奇，为什么会是这样呢？可能很多人会和我一样，第一次接触这个属性对这样的效果感到懵逼。",-1),g=s("p",null,[i("我们把上面 "),s("code",null,"background-attachment: fixed"),i(" 注释掉，或者改为 "),s("code",null,"background-attachment: local"),i("，再看看效果：")],-1),D=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment:local ",src:"https://codepen.io/mafqla/embed/BabzMxx?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/BabzMxx">
  bg-attachment:local </a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),y=a("",8),A=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment:local ",src:"https://codepen.io/mafqla/embed/BabzMxx?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/BabzMxx">
  bg-attachment:local </a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),C=a("",4),m=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment:fixed Wave",src:"https://codepen.io/mafqla/embed/xxBOMzZ?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/xxBOMzZ">
  bg-attachment:fixed Wave</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),u=a("",11),f=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"bg-attachment:fixed Wave",src:"https://codepen.io/mafqla/embed/xxBOMzZ?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/xxBOMzZ">
  bg-attachment:fixed Wave</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),b=s("p",null,"很明显，当滚动滚动条时，不同子元素的位移程度从视觉上看是不一样的，也就达到了所谓的滚动视差效果。",-1),_=s("h3",{id:"滚动视差文字阴影-虚影效果",tabindex:"-1"},[i("滚动视差文字阴影/虚影效果 "),s("a",{class:"header-anchor",href:"#滚动视差文字阴影-虚影效果","aria-label":'Permalink to "滚动视差文字阴影/虚影效果"'},"​")],-1),E=s("p",null,"那么，运用 translate3d 的视差效果，又能有一些什么好玩的效果呢？下面这个滚动视差文字阴影/虚影效果很有意思：",-1),q=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS translate3d Parallax",src:"https://codepen.io/mafqla/embed/vYPKbrZ?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/vYPKbrZ">
  CSS translate3d Parallax</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),x=s("p",null,[i("当然，通过调整参数（"),s("code",null,"perspective: ?px"),i(" 以及 "),s("code",null,"transform: translateZ(-?px);"),i("），还能有其他很有意思的效果出现：")],-1),v=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"CSS PARALLAX",src:"https://codepen.io/mafqla/embed/BabzMVx?default-tab=html%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mafqla/pen/BabzMVx">
  CSS PARALLAX</a> by mafqla (<a href="https://codepen.io/mafqla">@mafqla</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),S=[r,B,F,o,c,g,D,y,A,C,m,u,f,b,_,E,q,x,v];function w(P,T,z,M,I,Z){return n(),h("div",null,S)}const R=t(d,[["render",w]]);export{N as __pageData,R as default};
