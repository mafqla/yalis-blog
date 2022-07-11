#  Babel.js配置

## 1.什么是Babel

- Babel是一个工具链，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的 JavaScript； 
- 包括：语法转换、源代码转换等；



## 2.Babel命令行使用

- babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用。 

- 如果我们希望在命令行尝试使用babel，需要安装如下库： 

  - @babel/core：babel的核心代码，必须安装； 

  - @babel/cli：可以让我们在命令行使用babel；

  - ```bash
    npm install @babel/cli @babel/core -D
    ```

    

- 使用babel来处理我们的源代码： 

- src：是源文件的目录； 

- --out-dir：指定要输出的文件夹dist；

  - ```bash
    npm install @babel/cli @babel/core -D
    ```

## 3.插件的使用

- 比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：

  - ```bash
    npm install @babel/plugin-transform-arrow-functions -D 
    npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions
    ```

    

- 查看转换后的结果：我们会发现 const 并没有转成 var 

  - 这是因为 plugin-transform-arrow-functions，并没有提供这样的功能； 

  - 我们需要使用 plugin-transform-block-scoping 来完成这样的功能； 插件的使用 

  - ```bash
    npm install @babel/plugin-transform-block-scoping -D 
    npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping
    ,@babel/plugin-transform-arrow-functions
    ```

## 4.Babel的原理

  - 从一种源代码（原生语言）转换成另一种源代码（目标语言），这是什么的工作呢？ 
  - 就是编译器，事实上我们可以将babel看成就是一个编译器。 
  - Babel编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码； 
  - Babel也拥有编译器的工作流程： 
    - 解析阶段（Parsing） 
    - 转换阶段（Transformation） 
    - 生成阶段（Code Generation）



> 执行原理



::: mermaid
flowchart LR;
	id1{{原生源代码}}-->id2(词法分析);
	id2-->id3(token数组);
	id3-->id4(语法分析);
	id4-->id5(AST抽象语法树);
	id5-->id6(遍历);
	id6-->id7(访问);
	id7-->id8(应用插件);
	id8-->id9(新的AST);
	id9-->id10{{目标代码}}
:::

## 5.babel-loader

在实际开发中，我们通常会在构建工具中通过配置babel来对其进行使用的，比如在webpack中。 

- 那么我们就需要去安装相关的依赖： 

  - ```bash
    npm install babel-loader @babel/core
    ```

    

- 果之前已经安装了@babel/core，那么这里不需要再次安装； 

- 我们可以设置一个规则，在加载js文件时，使用我们的babel：

  - ```js
    module:{
        rules:[
            {
                test:/\.m?js$/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
    ```

  - 指定使用的插件才会生效

  - ```js
    module:{
        rules:[
            {
                test:/\.m?js$/,
                use:{
                    loader:"babel-loader";
                    options:{
                    plugins:[
                    	"@babel/plugin-transform-block-scoping",
                    	"@babel/plugin-transform-arrow-functions"
                    ]
                }
                }
            }
        ]
    }
    ```

##  6.babel-preset

- 如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个 preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。 

- 比如常见的预设有三个： 

  - env 

  - react 

  - TypeScript 

- 安装preset-env： 

  - ```bash
    npm install @babel/preset-env
    ```

```js
{
    test:/\.m?js$/,
    use:{
        loader:"babel-loader",
        options:{
            presets:[
                ["@babel/preset-env"]
            ]
        }
    }
}
```

## 7.Babel的配置文件

- 像之前一样，我们可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写
  - babel.config.json（或者.js，.cjs，.mjs）文件； 
  - babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；
- 它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）；
- .babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的； 
- babel.config.json（babel7）：可以直接作用于Monorepos项目的子包，更加推荐

