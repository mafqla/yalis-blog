## 前言

我们来看看生产构建打包时，花费了多长时间？

![image.png](images\b1cd0d5415034b6fbd0887920c027dfe~tplv-k3u1fbpfcp-watermark.jpg)

![image.png](images\e021fa76834a4278ba79bcc9f8be645e~tplv-k3u1fbpfcp-watermark.jpg)

![image.png](images\3ca2c16ede134088bd59caf82f0ce784~tplv-k3u1fbpfcp-watermark.jpg)

以上是其中一次的截图，经过我多次的验证（也就三五次），总结出平均生产环境下，打包时长为：`18s ~ 23s`，这时间很长了，你想想，你打包构建一次 `npm run build:render`，要等 20s，这谁顶得住啊。为此，本章节将会做一些 `webpack` 打包方面的优化。如果你对本章节内容兴趣不大，可以快速阅读或跳过。

## 优化方案

### 🔨 优化一：开发/生产区分开

我们要区分出两套不同配置，因为一些配置在开发阶段是不需要去做的，你需要分辨好哪些工作仅在开发时要做，哪些工作是生产时要做。比如开发环境下，代码压缩、 提取 CSS 等工作就没必要了。

很庆幸，我们一开始就区分了环境，如 `webpack.xxx.dev.js`、`webpack.xxx.prod.js` 等，不同环境做不同的事情。所以小伙伴们记住了，之后在你写代码做需求时，要有区分不同环境的意识。

### 🔨 优化二：适当配置 loader（降低 loader 的使用频率）

我们摘一小段 `webpack.render.base.js` 的代码出来看看

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

这段配置是合理的，因为我们配置了 `exclude`，它表示我们对于 `js|jsx|ts|tsx` 类型文件的处理，是排除掉 `node_modules` 目录文件夹的。

可能小伙伴不太明白，我换种说法，在 `node_modules` 中肯定会存在许多 `js、jsx、ts、tsx` 文件，假设我们这时候不配置 `exclude` 属性，不将 `node_modules` 排除出去，那么下面这段代码，你猜在开发时，webpack 会不会将其再次编译呢？

```js
import RcReduxModel from '../node_module/dist/index.js';
// 又或者是
import lodash from 'lodash/index.js';
```

答案是会的！虽然说不会报错，但没必要，要知道 `node_modules` 中的包都已经过打包编译，此时再进行一次编译，没任何意义，反而会降低速度。

如果你不信，你可以将 `webpack.render.base.js` 中带有 `exclude` 的 loader 都注释掉，然后跑一下 `npm run start:render`，你会发现速度变慢！

![image.png](images\071809bce9ea4c719fca6026de4d7c06~tplv-k3u1fbpfcp-watermark.jpg)

与 `exclude` 相反的是 `include`，你可通过这两个属性 `exclude + include` 的完美结合，从而降低 loader 执行的频率，毕竟 loader 做转换也需要消耗一定时间。通过这种方式在一定程度上能提高 js 模块的打包速度。

这时候小伙伴就说了，我看 `webpack.render.base.js` 中，这个 `file-loader` 没有添加这个 `exclude` 属性，我要不也添加一下吧？

```js
// webpack/webpack.render.base.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
```

这个就不需要添加了，为什么呢？首先它不像 js 那样有事先打包编译过的文件（可以不用做二次编译），实际上，你所有的图片资源文件，在打包过程中，都需要经过 `file-loader` 去进行转换，将其打包到 dist 目录下，不然就会报错。这时候你加不加意义不大。

> 这时就会有小伙伴提问了，那我如果用了一张第三方包内部的图片文件呢？比如我就是 `import Avatar from 'node_module/a/dist/images/avatar.[hash].png'`，那这时候会有问题吗？对于此问题，我想，你动手实践后，方可自己解答。

**总之，并不是每一个 loader 都需要添加 `exclude/include`，具体要看场景和哪种资源类型，记住一点，合理使用 loader，确实能降低 webpack 编译的速度。**

### 🔨 优化三：寻找平衡，以 url-loader 替代 file-loader

通过官方文档得知，我们能通过 [file-loader](https://www.webpackjs.com/loaders/file-loader/) 与 [url-loader](https://www.webpackjs.com/loaders/url-loader/) 完成对 Webpack 编译图片资源的配置。

> Webpack 官网明确说明：`url-loader`  功能类似于  [`file-loader`](https://github.com/webpack-contrib/file-loader)，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。

你可以这么理解，`url-loader` 功能是基于 `file-loader` 之上，只是在 options 配置处，多了一个 `limit` 属性，这就很有意思了，下面我们通过动手实践，改写一下我们的小册配置。

先去安装 `url-loader`

```bash
npm install --save-dev url-loader
```

然后将 `webpack/webpack.render.base.js` 改成下面这样

```js
// webpack/webpack.render.base.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            // 👇 换成 url-loader
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
```

这里我们设置 `limit = 2048`，意味着当图片小于 2kb 时，图片会自动转成 base64 格式，以字符串形式一起打包到 js 文件中，从而减少图片请求的数量，进而提升性能。而大于 2kb 的图片，`url-loader` 处理不了，转手甩给 `file-loader` 去处理。（所以说 url-loader 是基于 file-loader 之上）

我们来对比一下，将 `file-loader` 改成 `url-loader` 之后的一些变化，由于我们本地是采用 `webpack-dev-server` 起的服务，所以在开发环境下的 dist 目录是看不到编译后的文件，因为编译后的文件都保存到了内存当中。所以我们跑 `npm run build:render` 来看看对比

- **采用 file-loader**

此时会有很多图片资源被打包到 `dist/images` 文件夹下，共 12 张图片

![image.png](images\dde539f31cb643208a13bbee6e837726~tplv-k3u1fbpfcp-watermark.jpg)

我们去 `index.[hash].js` 文件中，查找一下 `base64` 关键字，只能找到 20 条记录

![image.png](images\7dafbf4555f842d6ab6c354a52b071e4~tplv-k3u1fbpfcp-watermark.jpg)

- **url-loader**

很明显，dist 目录下的 `dist/images` 文件夹，一下子少了好多图片，现在只有 4 张图片

![image.png](images\db31f0ba81b044848d277df0687ea339~tplv-k3u1fbpfcp-watermark.jpg)

我们去 `index.[hash].js` 文件中，查找一下 `base64` 关键字，找到 28 条记录

![image.png](images\ffea1733fb3f492fbed86ef5291d12d8~tplv-k3u1fbpfcp-watermark.jpg)

当然也不是一定说 `url-loader` 牛逼过 `file-loader`，这更是一个取舍过程。

- 比如你设置 limit 过大，就会导致图片转成 base64 后，加入到打包好到 js 文件中，这无异增大 js 的体积。
- 比如你通过 url-loader 一次性将图片都转成 base64 打包进 js 文件，这些图片无法做到按需加载

**总之，决定权在你手中，你需要找到资源大小与请求数量之间的一个平衡。**

### 🔨 优化四：resolve 查找文件后缀的配置

以 `webpack/webpack.render.base.js` 为例，我们摘抄一下 resolve 的代码片段

```js
// webpack/webpack.render.base.js

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
```

解读一下这段代码，`resolve` 配置 Webpack 如何寻找模块所对应的文件。我们配置了 [extensions](https://webpack.js.org/configuration/resolve/#resolveextensions)，表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。

我们配置中，配置了 `extensions: ['.js', '.jsx', '.ts', '.tsx']`，意味着当遇到 `import A from './A'` 时，会先寻找 `A.js`、找不到就去找 `A.jsx`，之后依次找 `A.ts`、再到 `A.tsx`，最后还是找不到，就会报错。

这是合理的，但是总会有一些小伙伴心生歹念，看到可以这么写，然后就想，我能不能这么配呢？

```js
// webpack/webpack.render.base.js

module.exports = {
  resolve: {
    extensions: ['.less', '.png', '.jpg', '.gif', '.js', '.jsx', '.ts', '.tsx'],
  },
};
```

这样在引入文件时，我都不用写后缀了，多爽啊，但你想想，你要写成这鬼样，每次你引入文件时，你都需要通过 fs 文件系统去一次次的查找匹配，查找 `.less` 时，调用 Node 底层的能力，查找也耗时，发现找不到 `.less` 后缀的文件，再去找 `.png` 后缀的文件，以此类推，写的越多，调用底层次数越多，查找更耗时，导致 Webpack 的编译速度更慢。

这里就不贴图演示了，小伙伴们可以私下修改 `extensions` 的配置，对比一下时长。

### 🔨 优化五：合理利用 Plugins 进行代码压缩

可以这么理解，Plugins 相当于 Webpack 的生命周期函数，通过 Plugins ，我们能在 Webpack 执行到某个周期的时候，去做一些事情。在构建生成线上代码时，为了保证文件体积小，用户加载速度能快一些，我们需要对代码进行压缩。

- **CSS 部分的代码压缩**

接下来我们通过 [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) 插件对 CSS 代码进行压缩。让我们先来安装，记住了，这里需要安装 4.0.0 版本

> ⚠ 来自官方说明：For webpack v3 or below please use `optimize-css-assets-webpack-plugin@3.2.0`. The `optimize-css-assets-webpack-plugin@4.0.0` version and above supports webpack v4.

```bash
npm install optimize-css-assets-webpack-plugin@4.0.0 --save-dev
```

根据官方提供的文档，我们来修改一下 `webpack/webpack.render.prod.js` 配置

```js
// webpack/webpack.render.prod.js

const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  plugins: [new OptimizeCssAssetsPlugin({})],
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
```

同时我们还能采用 [mini-css-extract-plugin](https://v4.webpack.docschina.org/plugins/mini-css-extract-plugin/) 插件将 CSS 提取到单独的文件中。它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。让我们来安装它

```bash
npm install mini-css-extract-plugin@^1.0.0 --save-dev
```

请注意啊，这里不要成 @2.x 版本，不然就会报这个问题: [TypeError: Invalid value used in weak set](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/779)

然后根据官方文档配置，来修改一下 `webpack/webpack.render.prod.js` 配置

```js
// webpack/webpack.render.prod.js

const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
```

- **JS 部分的代码压缩**

`webpack.UglifyjsWebpackPlugin` 是官方维护的插件，但它是单线程压缩代码，意味着每个 js 文件需要排队，依次进行压缩。但压缩代码的时候它又很耗时，它得先将代码转成 AST 抽象语法树，再用一些规则去分析处理 AST，巴拉巴拉一顿操作之后再进行压缩。

每个文件都需要这么整，这谁顶得住，所以我们需要探寻一条新的道路，通过查询，有两个新的插件能去实现

- [ ✨ terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)
- [webpack-parallel-uglify-plugin](https://www.npmjs.com/package/webpack-parallel-uglify-plugin)

到底用哪个呢？通过对比下载量，并且看官方说明，`terser-webpack-plugin` 为 Webpack 明媒正娶，专门维护的插件，那么我们就用此插件进行优化，先来安装下

```bash
npm install terser-webpack-plugin --save-dev
```

老规矩，看文档，修改 `webpack/webpack.render.prod.js`，部分代码省略

```js
/* eslint-disable @typescript-eslint/no-require-imports */
const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
```

让我们来对不对比，下面这张图是为使用自带的 `UglifyJsPlugin`，打包时长在 16s 左右

![image.png](images\177b58d419ea4bd78e33e90395e6e4ab~tplv-k3u1fbpfcp-watermark.jpg)

通过 `terser-webpack-plugin` 之后，在第一次构建打包相对较久，但之后的构建打包，由于我们设置了 `cache` 以及 `parallel` 属性，时间变得更快，经过三次构建，时长均在 10s 左右

![image.png](images\e5e03354902c46b7b99c3914f38f8d57~tplv-k3u1fbpfcp-watermark.jpg)

那么就会有小伙伴疑惑了，为啥你不在 `webpack.render.dev.js` 中也做代码压缩呢？你要知道，**做任何事都需要成本的**，你压缩代码也需要耗费时间，我们之所以在生产环境做代码压缩是因为我们期望用户加载速度能快一些，`有舍才有的`，我们开发人员忍住构建时压缩代码的等待时间，就能让用于加载资源速度能更快一些。

### 🔨 优化六：HappyPack 加速构建

运行在 NodeJS 上的 Webpack 是单线程模型，对于单线程来说，每一件事情都需要挨个处理，要知道 Webpack 构建可是对大量文件做解析处理的，一个一个的来，岂不是要把人逼疯？

那么能否让 Webpack 同一时刻处理多个任务，发挥多核 CPU 电脑优势，从而提高我们的构建速度？肯定有人研究过这个问题，并且找到了解决方案，该方案就是：[happypack](https://www.npmjs.com/package/happypack)

先来安装一下

```bash
npm install happypack --save-dev
```

然后我们修改一下 `webpack/webpack.render.base.js` 文件

```js
// webpack/webpack.render.base.js

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 👇 引入 happypack
const HappyPack = require('happypack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        // },
        loader: 'HappyPack/loader?id=visResumeMookHappyPack',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'visResumeMookHappyPack',
      threads: 8,
      loaders: [
        {
          loader: 'babel-loader',
        },
      ],
    }),
  ],
};
```

然后我们来试试，看看打包的时长

![image.png](images\1d321de9ef6747789f9e45e4bb905653~tplv-k3u1fbpfcp-watermark.jpg)

giao ！ 反倒是时间被拉长了？这...于是我就去搜索，看看网上有没有什么方案，无意中发现有人遇到过着累问题，我丢，这坑爹了，开启多线程，CPU 上升，如果此时 CPU 满了的话，整体速度会变慢。

![image.png](images\4d730daa7b874e0382a3f0210fb24ca1~tplv-k3u1fbpfcp-watermark.jpg)

我们可以通过 [speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin) 插件来看看 Webpack 处理的时长，先来安装一下

```
npm install --save-dev speed-measure-webpack-plugin
```

然后修改一下配置

```js
// webpack/webpack.render.base.js

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 👇 引入 happypack
const HappyPack = require('happypack');
// 👇 引入速度分析插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        // },
        loader: 'HappyPack/loader?id=visResumeMookHappyPack',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'visResumeMookHappyPack',
      threads: 8,
      loaders: [
        {
          loader: 'babel-loader',
        },
      ],
    }),
  ],
});
```

此时我们可以在终端中看到相关的一些信息

![image.png](images\433a568ff59f4a9597a09c76f6568566~tplv-k3u1fbpfcp-watermark.jpg)

天啊，这就很蛋疼了，用了 happypack 之后反而变慢了。

**总之，这个插件大家自行衡量，这边小册就不采用此方案进行处理，深入去了解为什么，是一件很有意思的事，包括你可以顺道扩宽一下单线程/多线程、进程与线程的相关知识。**

### 🔨 优化七：第三方包打成 dll.js 文件

我们在项目中，会引用一些第三方包。比如

```js
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
```

还有很多第三方库没列举出来，那么对于这种第三方包，不需要每一次打包都重新构建，可以将它作为一个稳定的版本，在第一次时将第三方打包即可，之后每次打包都用上一次的即可。

接下来，我们需要分两步执行

- 将第三方包打成一个文件，只生成一次
- 使用第三方模块时，是从 dll 文件，而非从 node_modules

先来实现第一步，在 webpack 文件夹下，新增 `dll` 相关的配置，新增 `webpack.dll.base.js`、`webpack.dll.prod.js`，然后编写一下相关代码

> 小伙伴不要奇怪怎么没有 dev 环境下，因为开发环境下从 `node_module` 取，并没啥毛病

> 我们之所以把第三方包打成一个文件，是因为每次打包构建，这些第三方包又要打一次，比较耗时而已，如果你能接受，其实不用 dll 也是可行的。

```js
// webpack/webpack.dll.base.js

const path = require('path');
module.exports = {
  entry: {
    // 👇 我这里将 lodash 也放在 reacts 中了，实际上是可以拆分的
    reacts: ['react', 'react-dom', 'redux', 'react-redux', 'lodash'],
  },
  output: {
    library: '[name]',
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/dll'),
  },
};
```

```js
// webpack/webpack.dll.prod.js

const webpackMerge = require('webpack-merge');
const dllBaseConfig = require('./webpack.dll.base.js');

module.exports = webpackMerge.merge(dllBaseConfig, {
  mode: 'production',
});
```

此时我们去 `package.json` 中添加一下打包成 dll 的脚本命令

```json
{
  "scripts": {
    "build:dll": "webpack --config ./webpack/webpack.dll.prod.js"
  }
}
```

然后我们在终端中执行一下 `npm run build:dll`，可以看到在 dist 目录下，存在此文件夹

![image.png](images\72e910e26741485da2db9bfb9d5a8173~tplv-k3u1fbpfcp-watermark.jpg)

我们点进去看看，可以看到有 `react` 源码、`react-dom` 源码等，这时候我们将第三方打到一个文件 `reacts.dll.js`，但我们还没使用它，该如何使用？往 HTML 上加文件。

如何在静态模版 HTML 中添加静态资源？可以通过 [add-asset-html-webpack-plugin](https://www.npmjs.com/package/add-asset-html-webpack-plugin) 插件进行处理，让我们来安装一下

```js
npm install add-asset-html-webpack-plugin --save-dev
```

然后前往 `webpack/webpack.render.base.js` 中添加一下代码，部分代码省略

```js
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  plugins: [
    new AddAssetHtmlWebpackPlugin({
      // 👇 引入刚才的 reacts.dll.js 文件
      filepath: path.resolve(__dirname, '../dist/dll/reacts.dll.js'),
    }),
  ],
};
```

我们启动一下项目，看看有没有添加 `reacts.dll.js` 文件进来。

```
npm run start:main
npm run start:render
```

打开控制台，看看有没有引入呢？

![image.png](images\49e54b23315c4027ad15ca7d87294549~tplv-k3u1fbpfcp-watermark.jpg)

第一步我们实现了，已经生成好了 dll 文件，但好像并没什么用，我们的第三方仍然还是从 `node_modules` 取的，所以接下来我们要借助 `webpack.DLLPlugin` 进行实现。

我们先来修改 `webpack/webpack.dll.base.js` 文件

```js
// webpack/webpack.dll.base.js

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    reacts: ['react', 'react-dom', 'redux', 'react-redux', 'lodash'],
  },
  output: {
    library: '[name]',
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/dll'),
  },
  plugins: [
    // 👇 新增变量
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dist/dll/[name].manifest.json'),
    }),
  ],
};
```

然后我们再到 `webpack/webpack.render.base.js` 中，修改一下代码，部分代码省略

```js
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/dll/reacts.manifest.json'),
    }),
  ],
};
```

当我们使用第三方包时，会先在 `reacts.manifest.json` 找第三方模块的映射关系，如果存在映射关系，就不需要打包进来，它直接从全局变量拿，因为我们通过 `webpack.DllPlugin` 定义了全局变量，拿的是 `reacts.dll.js`，那如果没有映射关系，就会从 `node_modules` 中拿过来打包。

此时我们来完整打包一下

```bash
// 删除dist目录
rm -rf dist
// 第三方包生成一个文件
npm run build:dll
// 构建 Electron
npm run build:main
// 构建 React
npm run build:render
```

我们可以看到，在 `dist/dll` 目录下，存在着 `reacts.dll.js` 和 `reacts.manifest.json`

![image.png](images\186db9bb83e24ea1b1d5dde743e0c812~tplv-k3u1fbpfcp-watermark.jpg)

感兴趣的可以点进去看看 `reacts.manifest.json` 到底是个啥东西

最后我们来看看通过 dll 之后的打包时长有多少

![image.png](images\2326333970ad4e0d872d21e08a1152c2~tplv-k3u1fbpfcp-watermark.jpg)

![image.png](images\4134c4f9774647ddb33bb4182dd2b017~tplv-k3u1fbpfcp-watermark.jpg)

## 最后

其实提高 Webpack 的打包速度还有很多，上面只是常见的几种方式，更多优化技巧小伙伴们可以私下翻阅一些资料进行知识的补充。好记性不如烂笔头，看完一定要动手实战，才能进步。
