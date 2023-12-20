---
title: vite 的支持
date: 2022-8-21 18:51
tags:
  - vite
---

# 3.vite 的支持

## 3.1 vite 对 css 的支持

- vite 可以直接支持 css 的处理

  - 直接导入 css 即可；

- vite 可以直接支持 css 预处理器，比如 less

  - 直接导入 less；

  - 之后安装 less 编译器；

  ```bash
   npm install less -D
  ```

- vite 直接支持 postcss 的转换：

- 只需要安装 postcss，并且配置 postcss.config.js 的配置文件即可；

  ```bash
   npm install postcss postcss-preset-env -D
  ```

## 3.2 Vite 对 TypeScript 的支持

- vite 对 TypeScript 是原生支持的，它会直接使用 ESBuild 来完成编译：
- 只需要直接导入即可；
- 如果我们查看浏览器中的请求，会发现请求的依然是 ts 的代码：
- 这是因为 vite 中的服务器 Connect 会对我们的请求进行转发；
- 获取 ts 编译后的代码，给浏览器返回，浏览器可以直接进行解析；
- 注意：在 vite2 中，已经不再使用 Koa 了，而是使用 Connect 来搭建的服务器

## 3.3Vite 对 vue 的支持

- vite 对 vue 提供第一优先级支持：

  - Vue 3 单文件组件支持：@vitejs/plugin-vue
  - Vue 3 JSX 支持：@vitejs/plugin-vue-jsx
  - Vue 2 支持：underfin/vite-plugin-vue2

- 安装支持 vue 的插件：

  ```bash
  npm install @vitejs/plugin-vue -D
  ```

- 在 vite.config.js 中配置插件：

  ```js
  import vue from '@vitejs/plugin-vue'

  module.exports = {
    plugins: [vue()]
  }
  ```
