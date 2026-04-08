今天带大家从零实现一个组件库。为了给大家带来更加真实的开发体验，使用敏捷方式。每节课讲述一个主题，作为一个 Sprint 冲刺过程。从一个 MVP 开始，每个冲刺都会给组件添加一种特性，最终成为一个完整的组件库。

![eeb5791e9a6c415f27eddba6b7b5e990.jpeg](images\6247205bef5641918482184958dfdf79~tplv-k3u1fbpfcp-watermark.jpg)


本章节参考代码： https://github.com/smarty-team/smarty-admin/tree/chapter02

## 用户故事(UserStory)：

> 通过 Vite 将一个组件封装为组件库，组件库可以被其他Vue项目作为插件直接进行使用。

这一节的核心任务是完成一个组件库的 MVP。MVP (Minimum Viable Product) 是最简化可实行产品的意思。在组件库中，最小的 MVP，可以定义为： 将一个组件以组件库的形式封装起来。组件库实际上就是一个 JS 的库文件，可以被 Vue 项目引用其封装的组件。

搭建这样一个环境需要解决以下问题：

-   如何配置构建工具？
-   如何搭建一个调试环境？
-   组件以什么样的形式封装？
-   如何让组件库支持使用 JSX、SFC 单文件组件等语法？

## 功能实现

### Vite搭建开发环境

搭建一个项目，首先要创建一个开发目录并且初始化软件包信息(Npm)。

创建一个目录：

```
mkdir smarty-ui-vite
cd smarty-ui-vite
```

这个项目的包管理工作选择目前比较流行的 Pnpm 完成。选择 Pnpm ，首先是由于 Pnpm 优秀的管理机制，使得安装依赖非常迅速且节省空间。更重要的是，项目后期需要开发组件库的周边，比如 CLI 工具等。CLI工具以单独软件包的形式发布在 npm 仓库之中，这样的话，一个 Repo 多个软件包的项目结构需要使用 monorepo 风格进行管理。pnpm 拥有的 workspace 功能可以很好地完成这样的工作。

下面使用 pnpm 初始软件包配置：

```
pnpm init
```

初始化完成后，下一步是利用 Vite 搭建一个组件库的调试环境。为什么选择 Vite ，开篇词中已经介绍了，这里面我们就不再赘述。

如果使用 Vite 搭建普通项目的话，我推荐使用 Vite 脚手架工具搭建。这样可以免去大量的工程化配置工作。**但是作为一个需要长期维护的组件库，我希望所有的工程化搭建细节都掌控在自己的手中。所以这次，就从零开始自己搭建Vite项目。**

首先安装 Vite。Vite 作为开发调试工具，只会在在开发环境中使用，所以需要在安装时加上 -d 。

```
pnpm i vite@"3.0.7" -D
```

下面创建创建一个测试页面，测试Vite是否安装正常。

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello Smarty UI</h1>
</body>
</html>
```

启动 Vite。启动 Vite 的时候使用 npx。这是一个 Npm5.2 新增加的命令，用于执行软件包中的可执行文件。 以往的可执行文件只能通过全局安装或者从 node_modules/.bin 中查找，要不然很难直接运行。这个升级体验还是非常赞 👍 。

```
npx vite
```

![img](images\0b8973b4df44410ba951b5cc179fd191~tplv-k3u1fbpfcp-zoom-1.jpg)

看到页面可以正常显示，说明Vite安装正确。

在 src/index.ts 中编写一个 Typescript 代码，确认 Vite 是否可以调试 Typescript。

```
const s: string = 'Hello Typescript'
console.log(s)
```

在 index.html 中添加引用。

```
<h1>Hello Smarty UI</h1>
<script src="./src/index.ts" type="module"></script>
```

![img](images\f59d3690f56d4c0fadf11f4cc7cdcdc1~tplv-k3u1fbpfcp-zoom-1.jpg)

看到调试窗口中的【 Hello Typescript 】的日志，说明 Vite 已经可以正常地调试 Typescript 代码了。

我觉得这个就是 Vite 体验好的地方。无需任何配置就可以提供一个Typescript 的前端开发环境，支持自动热更新。如果你是一个 前端 Typescript 党，可以考虑把 Vite 安装到全局。这样你就可以全局使用 Typescript 开发前端了。

最后在 package.json 中添加一个启动脚本，下次在启动开发环境运行 pnpm dev ，就可以启动 Vite 开发代码了。

```
  "scripts": {
    "dev": "vite"
  },
```

### 开发一个Vue组件

**基础组件**

下面尝试在 Vite 开发环境上开发 Vue 组件。

首先安装 Vue3.0 软件包。

```
pnpm i vue@"3.2.37"
```

![img](images\94bed03c838e4a2bb9fc102d4007fa2a~tplv-k3u1fbpfcp-zoom-1.jpg)

接着尝试编写一个简单的 Button 组件。

编写一个 /src/button/index.ts 组件。

```ts
import { defineComponent, h } from "vue";

export default defineComponent({

  name: "SButton",

  // template:'<button>MyButton</button>'

  render() {

    return h("button", null, "MyButton");

  },

});
```

在 src/index.ts 中启动 Vue 实例。

```
import { createApp } from "vue";

import SButton from "./button";

createApp(SButton).mount("#app");
```

还需要在 index.html 中添加一个容器。

```
<div id="app"></div>
```

![img](images\42a07e332f354127b5b3ffa3ab7ce9f8~tplv-k3u1fbpfcp-zoom-1.jpg)

启动Vite进行调试。在浏览器中打开 localhost:3000。就可以看到一个按钮已经显示到浏览器中了。

**单文件组件**

写到这里大家可能有点疑问：**为什么是使用 render 函数，而不是熟悉的 template 语法编写呢？**

这是因为 Vue3.0 默认的包是不支持模板编译功能的。也就是说， template 语法现在还不能用。在 Vue3.0 中编译功能推荐在构建阶段完成，而不是放到浏览器中运行。如果希望在浏览器中的话，可以选择 ./node_modules/vue/dist/vue.global.js 这个包。

![image.png](images\bc5342f402e447bca8786fabf82f21d5~tplv-k3u1fbpfcp-watermark.jpg)
如果让 Vite 可以编译 Vue 模版，可以通过安装 Vite 的 Vue 插件实现。你可以这样理解， Vite 默认只能支持 TS 代码。而 Vue 的模板需要在编译阶段转换为 Typescript 代码 (渲染函数)才可以运行。Vue 插件不但提供了模板的编译，同时还支持 Vue 单文件 (SFC) 组件的编译。下面用一张图来说明一下。


![image.png](images\6bf1f4ca17214689a8477c5f79460b15~tplv-k3u1fbpfcp-watermark.jpg)


-   提供 Vue 3 单文件组件支持
-   <https://github.com/vitejs/vite/tree/main/packages/plugin-vue>


安装 Vite 的Vue插件。

```
pnpm i @vitejs/plugin-vue@"3.0.3" -D
```

添加一个 vite.config.ts。

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig({

  plugins: [vue()],

});
```

编写一个 SFC单文件组件 (也就是 .vue 文件) 使用template语法 来测试一下。

src/SFCButton.vue

```
<template>
  <button>SFC Button</button>
</template>

<script lang="ts">
export default {
  name: "SFCButton",
};

</script>
```

引用到 index.ts 中测试一下。

```
import { createApp } from "vue";
import SFCButton from "./SFCButton.vue";

createApp(SFCButton)
.mount("#app");
```

![img](images\fc689ad964474b1a9f3521f0ec1d6b8b~tplv-k3u1fbpfcp-zoom-1.jpg)

在引用 .vue 模块时候，编辑器中 import 语句会有红色的警告。这是因为Typescript 默认是不支持 .vue 类型的模块的。可以通过添加一个模块的类型定义来解决这个问题。

src/shims-vue.d.ts

```
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

添加后可以看到红色警告随即消失。

最后测试一下结果。

![img](images\45be8fa77107405fbe4031d99eb83140~tplv-k3u1fbpfcp-zoom-1.jpg)

**JSX 组件**

JSX 是一种 Javascript 的语法扩展，最早运用于 React 架构中。JSX 也可以当作一种模板语言使用。虽然有人会质疑利用JSX语法编写 Vue3 代码是否合理， 比如怀疑 JSX 语法是否兼容 Vue3 的静态提升特性。但是现在很多基于 Vue 的组件库都大量使用 JSX 语法，对于工程化搭建，还是以开发者的使用习惯优先，我们支持了再说。

想要支持 JSX语法，还是需要就需要转译工具的支持。一般会使用 Babel。在 Vite 里，已经有人提前写好了对应的插件。就是下面这位【林成璋（Amour1688)】同学，大家可以膜拜一下。好像 Vue2 的 JSX 插件也是他写的。

<https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx>

-   提供 Vue 3 JSX 支持（通过 [专用的 Babel 转换插件](https://github.com/vuejs/jsx-next)）。

![img](images\452dbe5c712b4bb092429896788bb7c8~tplv-k3u1fbpfcp-zoom-1.jpg)

有了现成的插件，只需要安装这个插件就可以了。

```
pnpm i @vitejs/plugin-vue-jsx@"2.0.0" -D
```

vite.config.ts
```
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({

  plugins: [
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],

})
```

新建一个JSX组件 (使用TS语言所以是TSX)。

/src/JSXButton.tsx

```js
import { defineComponent, h } from "vue";

export default defineComponent({

  name: "JSXButton",
  render() {
    return <button>JSX Button</button>;
  },

});
```
由于在ts中使用 JSX 语法，在 vscode编辑器中会提示错误。

![image.png](images\0e6689deeb7d4d32acb66c4a4e8b2a17~tplv-k3u1fbpfcp-watermark.jpg)

这个提示的意思是不支持 JSX 语法造成的。而不是需要安装 React。只需要在 tsconfig 中配置一下 jsx 语法支持就行了。

./tsconfig.json
```json
{
    "compilerOptions": {
        "declaration": true, /* 生成相关的 '.d.ts' 文件。 */
        "declarationDir": "./dist/types", /* '.d.ts' 文件输出目录 */
        "jsx": "preserve",
    },
    "include": [
        "./**/*.*",
        "./shims-vue.d.ts",
    ],
    "exclude": [
        "node_modules"
    ],
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": "true"
}
```




![img](images\009059d346464d48b10344bbd678314f~tplv-k3u1fbpfcp-zoom-1.jpg)

### 库文件封装

为了搞清楚如何封装一个组件库，先带大家研究一下Element组件库是怎么做的。

参考一下 Element 的使用指南。可以看到组件库有两种引入形态：

-   完整引入 ：一次性引入全部组件，使用 Vue.use 以 Vue 插件的形式引入；
-   按需引入 ：按需引入，导出单个组件，使用 Vue.component 注册。

```js
import Vue from 'vue'
import Element from 'element-ui'

// 完整引入
Vue.use(Element)

// or
import {
  Select,
  Button
  // ...

} from 'element-ui'

// 按需引入
Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

综上所述，组件库的形态应该是这样的结构：

可以满足以下的要求：

-   默认导出为Vue插件；
-   每个组件可以单独导出。

当然，利用 Vite 还有更复杂的自动按需加载方案，这个计划我们后续放在单独章节介绍。

首先设计一个入口，包含两个功能：

-   导出全部组件；
-   实现一个 Vue 插件，插件中编写 install 方法，将所有组件安装到 vue 实例中。

/src/entry.ts

```
import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },

};
```

默认 Vite 就是可以支持构建，使用 Vite 的 build 命令就可以打包输出。如果导出的是一个库文件的话，还需要配置【导出模块类型】并确定导出的文件名。配置如下:

vite.config.ts

```
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  .....  

  // 添加库模式配置

  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
});
```

接着添加一个 npm 运行脚本，方便运行。

package.json

```json
  "scripts": {
    "build": "vite build"
  },
``` 

```bash  
pnpm build
```

![img](images\e950b72dcad545ef8474812d5b022178~tplv-k3u1fbpfcp-zoom-1.jpg)

看到提示说明正常导出了。最后编写一个验证页面，测试一下打包结果是否正确。

验证的过程还是基于Vite。首先测试加载全部组件，引用构建完的 smarty-ui.esm.js 文件。




demo/esm/index.html

```
<h1>Demo</h1>
<div id="app"></div>
<script type="module">
    import { createApp } from "vue/dist/vue.esm-bundler.js";
    import SmartyUI, { SFCButton, JSXButton, MyButton } from "../../dist/smarty-ui.esm.js";

    createApp({
        template: `
      <SButton/>
      <JSXButton/>
      <SFCButton/>
    `}).use(SmartyUI).mount('#app')

</script>
```

然后是加载单独组件。

demo/esm/button.html

```
<h1>Demo</h1>
<div id="app"></div>
<script type="module">
    import { createApp } from "vue/dist/vue.esm-bundler.js";
    import SmartyUI, {
        SFCButton,
        JSXButton,
        MyButton,
    } from "../../dist/smarty-ui.esm.js";

    createApp({
        template: `
<SButton/>
<JSXButton/>
<SFCButton/>
`,
    })
        .component(SFCButton.name, SFCButton)
        .component(JSXButton.name, JSXButton)
        .component(MyButton.name, MyButton)
        .mount("#app");
</script>
```

启动 vite
```bash
pnpm dev
```

访问url： http://localhost:5173/demo/esm/index.html 

![image.png](images\c119f99ecca74214b394bf1cc06f6675~tplv-k3u1fbpfcp-watermark.jpg)

最后验证结果，证明 MVP 已经完成，虽然还很初级。

本章节参考代码： https://github.com/smarty-team/smarty-admin/tree/chapter02

## 复盘

这节课是组件库开发的第一天，旨在搭建一个最小可用系统，了解如何使用 Vite 编写组件库。目前，这个工程可以实现组件库的【编写】、【调试】、【封装】的整个闭环。

最后留一些思考题帮助大家复习，也欢迎大家在评论区讨论。

-   如何使用Vite 从零搭建 Vue 开发环境 ？
-   如何让 Vite 支持 SFC 与 JSX 语法 ？
-   组件库的封装形态是什么样子 ？
-   如何使用 Vite 完成库文件的构建 ？

下节课，我们将给组件添加上五彩斑斓的颜色，下节课见。

![img](images\3e43fd1753cc4616a2b7d1a7045b7c32~tplv-k3u1fbpfcp-zoom-1.jpg)
