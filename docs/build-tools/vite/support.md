# 3.vite的支持

## 3.1 vite对css的支持

- vite可以直接支持css的处理 

  - 直接导入css即可； 

- vite可以直接支持css预处理器，比如less 

  - 直接导入less； 

  - 之后安装less编译器；

   ```bash
    npm install less -D
    ```

    

- vite直接支持postcss的转换： 

- 只需要安装postcss，并且配置 postcss.config.js 的配置文件即可； 

   ``` bash  
    npm install postcss postcss-preset-env -D
   ```



## 3.2 Vite对TypeScript的支持

-  vite对TypeScript是原生支持的，它会直接使用ESBuild来完成编译： 
- 只需要直接导入即可； 
- 如果我们查看浏览器中的请求，会发现请求的依然是ts的代码： 
- 这是因为vite中的服务器Connect会对我们的请求进行转发； 
- 获取ts编译后的代码，给浏览器返回，浏览器可以直接进行解析； 
-  注意：在vite2中，已经不再使用Koa了，而是使用Connect来搭建的服务器

## 3.3Vite对vue的支持

- vite对vue提供第一优先级支持： 

  - Vue 3 单文件组件支持：@vitejs/plugin-vue 
  - Vue 3 JSX 支持：@vitejs/plugin-vue-jsx 
  - Vue 2 支持：underfin/vite-plugin-vue2 

- 安装支持vue的插件： 

  ```bash
  npm install @vitejs/plugin-vue -D
  ```

  

- 在vite.config.js中配置插件：

  ```js
  import vue from '@vitejs/plugin-vue';
  
  module.exports = {
      plugins:[
          vue()
      ]
  }
  ```