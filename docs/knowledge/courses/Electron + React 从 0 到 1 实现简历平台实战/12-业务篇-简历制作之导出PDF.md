## 前言

上一章节，我们完成了数据的录入与展示，接下来到了平台应用生死关键时刻：**如何将我们网页中写好的简历模版导出成 PDF**，毕竟不能为我们所用，那么这个平台将没有任何的使用价值。

> 如果对这块熟悉的同学，本章可以快速阅读或跳过，如果对导出 PDF 感兴趣且不熟悉的同学，希望本章节可以给你一些启发。

## 导出 PDF

在前端将 HTML 网页转成 PDF 有多种方式，例如：

1. 生成图片再转 PDF：html2canvas + jsPdf
2. 使用 pdfmake 实现 PDF 的导出

当然还有许多方法可以实现 html 转 pdf，在此项目中，主要讨论这两种方法的优缺点

### html2canvas + jspdf

[jsPdf](https://github.com/MrRio/jsPDF) 是一个将 html 转 pdf 的插件，目前在 github 上拥有 22.1k 的 star，从数据上来看，还是比较受欢迎的，但该库作者是个外国人，并未支持国际化，所以如果内容方面是中文语言，导出就有问题。

没办法，我们只能曲线救国，换种方式实现，由于 jsPdf 提供一个 API，叫做 `addImage`，我们不禁思考，能否 将 html 页面，变成一张图片？换种说法，我们能否将 html 转成 canvas？再通过 canvas 提供的 toDataURL API 得到一张 base64 编码的 dataURL 呢？

要实现 html 转 canvas，目前相对热门的是 [html2canvas](https://github.com/niklasvh/html2canvas) ，该库目前还在维护，并且 github 上也拥有 23.5k 的 star。通过 html2canvas 结合 jspdf，就能轻松实现我们的功能。

- 优点：对我而言，简单上手，并且网上大部分都采用此方式实现，遇到问题也能快速响应
- 缺点：jsPdf 对中文支持不够友好，html2canvas 转图片后可能出现模糊，需要定位解决。导出的 PDF 中文字无法复制、修改等，因为它本质就是一张图片

### pdfmake

目前在 GitHub 上拥有 9.2k 的 star，从数据上看，也算很多人使用了。该库的亮点在于支持中文内容，既然能支持中文内容，我们就不需要将 html 转成 canvas 了。

- 优点：支持中文内容，支持与后端交互，官方表示上手简单
- 缺点：并未使用过，可能存在未知坑

### 二选一

两种方案各有优点，只是在选择上，我们需要考虑其他的成本，如使用成本、业务场景等。

对于 pdfmake 我听过，但未实际使用过，可预知的是我并不知道会存在什么坑需要我去填，所以在时间成本考虑上，我会优先选择第一种；对于业务场景来讲，导出 pdf 之后，如果发现有错别字，内容输入有误等，只需要将内容更正，再点击一个“导出”按钮即可，相比直接在 pdf 中更正内容，貌似就多了个点击按钮操作。我想这也合乎情理，为了省略一步骤去折腾 pdfmake，是否真的有必要？

最终采用方案一：html2canvas + jsPdf 实现，**当然不喜该方案的小伙伴可以私下自行采用其他方案哈**

### 代码实现

我们进入 /common/utils 文件夹下，新增 htmlToPdf.ts 文件，编写我们的导出逻辑

```ts
// app/renderer/common/utils/htmlToPdf.ts
import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
const A4Width = 592.28;
const A4Height = 841.89;

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
export function toPrintPdf(resumeName?: string) {
  let name = resumeName || '未命名文件';
  // 👇 记住每个模版都需要在根容器组件添加 id
  const dom: HTMLElement | any = document.querySelector('#visPdf');
  if (dom) {
    html2canvas(dom, {
      allowTaint: true,
    }).then((canvas) => {
      let contentWidth = canvas.width;
      let contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度，等比缩放
      let pageHeight = (contentWidth / A4Width) * A4Height;
      let leftHeight = contentHeight;
      // 页面偏移
      let position = 0;
      let imgWidth = A4Width;
      let imgHeight = (A4Width / contentWidth) * contentHeight;
      let pageData = canvas.toDataURL('image/jpeg', 1.0);
      // 这里的第一个参数表示方向，这里一定要选择 portrait
      // 具体可看文档 https://artskydj.github.io/jsPDF/docs/jsPDF.html
      let PDF = new JsPdf('portrait', 'pt', 'a4');
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= A4Height;
          if (leftHeight > 0) {
            PDF.addPage();
          }
        }
      }
      PDF.save(name + '.pdf');
    });
  }
}
```

在业务使用时，就只需要调用此方法即可

```ts
import { toPrintPdf } from '@common/utils/htmlToPdf';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  // 导出PDF，格式为：姓名+学校+岗位
  const onExport = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
  };

  return (
    <div styleName="actions">
      <MyButton size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </MyButton>
    </div>
  );
}
```

### 效果

![image.png](images\67ff89845e5f40f09cf955f4992ce09d~tplv-k3u1fbpfcp-watermark.jpg)

导出之后，图片清晰度也能接受

![image.png](images\53032aceb593487ebfd3ab9484a35706~tplv-k3u1fbpfcp-watermark.jpg)

## 总结

本章节主要以导出 PDF 功能为主，分析两种解决方案，在时间成本与业务场景的考虑之下，最终采用 html2canvas 与 jsPdf 方式实现该功能。如果你有更好的方案，欢迎评论区指出。

导出相关代码：[👉 htmlToPdf](https://github.com/PDKSophia/visResumeMook/blob/chapter-11/app/renderer/common/utils/htmlToPdf.ts)

**如果您在边阅读边实践时，发现代码报错或者 TS 报错，那么小伙伴们可以根据报错信息，去线上看看相应的代码。**

如果对本章节存在疑问，欢迎在评论区留言。
