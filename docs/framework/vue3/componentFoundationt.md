# 11. 组件化基础

组件允许我们将 UI 划分为独立的、可重用的部分来思考。组件在应用程序中常常被组织成层层嵌套的树状结构：

![img](../../images/components.7fbb3771.png)

这和我们嵌套 HTML 元素的方式类似，Vue 实现了自己的组件数据模型，使我们可以在每个组件内封装自定义内容与逻辑。



## 11.1 注册组件

注册组件分成两种： 

- 全局组件：在任何其他的组件中都可以使用的组件； 
- 局部组件：只有在注册的组件中才能使用的组件；

`注册全局组件：`

- 全局组件需要使用我们全局创建的app来注册组件； -
-  通过component方法传入组件名称、组件对象即可注册一个全局组件了； 之后，我们可以在App组件的template中直接使用这个全局组件：



```vue
 <div id="app"></div>

  <template id="my-app">
    <component-a></component-a>
  </template>

  <template id="component-a">
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
    <button @click="btnClick">按钮点击</button>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: "#my-app",
    };

    const app = Vue.createApp(App);

    // 使用app注册一个全局组件app.component()
    // 全局组件: 意味着注册的这个组件可以在任何的组件模板中使用
    app.component("component-a", {
      template: "#component-a",
      data() {
        return {
          title: "我是标题",
          desc: "我是内容, 哈哈哈哈哈",
        };
      },
      methods: {
        btnClick() {
          console.log("按钮的点击");
        },
      },
    });
    app.mount("#app");
  </script>
```



`注册局部组件：`



```vue
<div id="app"></div>

<template id="my-app">
  <h2>{{message}}</h2>
  <component-a></component-a>
</template>

<template id="component-a">
  <h2>我是组件A</h2>
  <p>我是内容, 哈哈哈哈</p>
</template>

<script src="../js/vue.js"></script>
<script>

  const ComponentA = {
    template: "#component-a"
  }


  const App = {
    template: '#my-app',
    components: {
      // key: 组件名称
      // value: 组件对象
      ComponentA: ComponentA
    },
    data() {
      return {
        message: "Hello World"
      }
    }
  }

  const app = Vue.createApp(App);
  // app.component("ComponentA", ComponentA);
  app.mount('#app');
</script>
```



## 11.2 组件名称

在通过app.component注册一个组件的时候，第一个参数是组件的名称，定义组件名的方式有两种： 
- 方式一：使用kebab-case（短横线分割符） 
- 当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case， 例如\<my-component-name> ：  
- 方式二：使用PascalCase（驼峰标识符） 
- 当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说\<my-component-name>和\<MyComponentName>  都是可接受的；