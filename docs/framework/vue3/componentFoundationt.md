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
  - 当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也 就是说  \<my-component-name>和\<MyComponentName>  都是可接受的；

## 11.3 组件的使用方法

`App.vue`导入子组件

> 子组件名称为Header.vue、Main.vue、Footer.vue;



> style 标签 增加scoped 会导致样式穿透，所以子组件template内添加div解决。

`示例：`

```vue
<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header';
  import Main from './Main';
  import Footer from './Footer';

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>

</style>

```



## 11.4父子组件之间的通信方式

- 父子组件之间如何进行通信呢？ 

  - 父组件传递给子组件：通过props属性； 
  - 子组件传递给父组件：通过$emit触发事件；

  示意图：

  ::: mermaid
  flowchart LR;
  id1["Patent(父组件)"]--Pass props-->id2["child(子组件)"]
  id2--$emit Events-->id1
  :::

  

- 什么是Props呢？

  - Props是你可以在组件上注册一些自定义的attribute； 
  - 父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值；

- Props有两种常见用法：

  - 方式一：**字符串数组**，数组中的字符串就是attribute的名称； 
  - 方式二：**对象类型**，对象类型我们可以在指定attribute名称的同时，指定它需要传递的类型、是否是必须的、 默认值等等；

- Props数组的用法 

- 使用示例：props: ['title', 'content']

  `父组件App.vue:`

  ```vue
  <template>
    <div>
      <show-message title="呵呵呵" content="我是呵呵呵呵"></show-message>
  
    </div>
  </template>
  
  <script>
    import ShowMessage from './ShowMessage.vue';
  
    export default {
      components: {
        ShowMessage,
      }
  </script>
  
  <style scoped>
  
  </style>
  ```

  `子组件ShowMessage.vue:`

  ```vue
  <template>
    <div>
      <h2>{{title}}</h2>
      <p>{{content}}</p>
    </div>
  </template>
  
  <script>
    export default {
      props: ['title', 'content']
  
  </script>
  
  <style scoped>
  
  </style>
  ```

- Props的对象用法

  - 数组用法中我们只能说明传入的attribute的名称，并不能对其进行任何形式的限制，接下来我们来看一下对象的 写法是如何让我们的props变得更加完善的。 
  - 当使用对象语法的时候，我们可以对传入的内容限制更多： 
    - 比如指定传入的attribute的类型； 
    - 比如指定传入的attribute是否是必传的； 
    - 比如指定没有传入时，attribute的默认值；
  - type支持的类型？ 
    - String 
    - Number 
    - Boolean 
    - Array pObject 
    - Date 
    - Function 
    - Symb

  `示例：`

  ```vue
  <script>  
  export default {
      props: {
        // 指定类型
        title: String,
        // 指定类型,同时指定是否必选、默认值
        content: {
          type: String,
          required: true,
          default: "123"
        },
        counter: {
          type: Number
        },
        info: {
          type: Object,
          // 对象或数组默认值必须从工厂函数获取
          default() {
            return {name: "why"}
          }
        },
        messageInfo: {
          type: String
        },
        //自定义验证函数
        validator(value){
         //这个值必须匹配下列字符串中的一个
         return ['suceess','warning', 'danger'].includes(value)
        }
      }
    }
  </script>
  ```

- Prop 的大小写命名(camelCase vs kebab-case) 

  - HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符； 
  - 这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短 横线分隔命名) 命名；

- 什么是非Prop的Attribute呢？ 

  - 当我们传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为 非Prop的 Attribute； 
  - 常见的包括class、style、id属性等； 
  - Attribute继承 p当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中：

- 如果我们不希望组件的根元素继承attribute，可以在组件中设置 **inheritAttrs: false：** 

  - 禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素； 

  - 我们可以通过 $attrs来访问所有的 非props的attribute； 

    ```vue
    <template>
      <div>
        <h2 :class="$attrs.class"></h2>
      </div>
    </template>
    
    <script>
      export default {
        inheritAttrs: false,
      }
    </script>
    
    <style scoped>
    
    </style>
    ```

    

- 多个根节点的attribute 

  - 多个根节点的attribute如果没有显示的绑定，那么会报警告，我们必须手动的指定要绑定到哪一个属性上：



## 11.5子组件传递给父组件

- 什么情况下子组件需要传递内容到父组件呢？ 

  - 当子组件有一些事件发生的时候，比如在组件中发生了点击，父组件需要切换内容； 

  - 子组件有一些内容想要传递给父组件的时候； 

- 我们如何完成上面的操作呢？ 

  - 首先，我们需要在子组件中定义好在某些情况下触发的事件名称,使用**emits定义**； 

  - 其次，在父组件中以v-on的方式传入要监听的事件名称，并且绑定到对应的方法中； 

  - 最后，在子组件中发生某个事件的时候，根据事件名称触发对应的事件

  `父组件：`

  ```vue
  <template>
    <div>
      <h2>当前计数: {{counter}}</h2>
      <counter-operation @add="addOne" 
                         @sub="subOne"
                         @addN="addNNum">
      </counter-operation>
    </div>
  </template>
  
  <script>
    import CounterOperation from './CounterOperation.vue';
  
    export default {
      components: {
        CounterOperation
      },
      data() {
        return {
          counter: 0
        }
      },
      methods: {
        addOne() {
          this.counter++
        },
        subOne() {
          this.counter--
        },
        addNNum(num, name, age) {
          console.log(name, age);
          this.counter += num;
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  ```

  `子组件：`

  ```vue
  <template>
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  
      <input type="text" v-model.number="num">
      <button @click="incrementN">+n</button>
    </div>
  </template>
  
  <script>
    export default {
      // emits: ["add", "sub", "addN"],
      // 对象写法的目的是为了进行参数的验证
      emits: {
        add: null,
        sub: null,
        addN: (num, name, age) => {
          console.log(num, name, age);
          if (num > 10) {
            return true
          }
          return false;
        }
      },
      data() {
        return {
          num: 0
        }
      },
      methods: {
        increment() {
          console.log("+1");
          this.$emit("add");
        },
        decrement() {
          console.log("-1");
          this.$emit("sub");
        },
        incrementN() {
          this.$emit('addN', this.num, "why", 18);
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  ```

- 自定义事件的参数和验证

  - 自定义事件的时候，我们也可以传递一些参数给父组件： 
  - 在vue3当中，我们可以对传递的参数进行验证



## 11.6 非父子组件的通信

- 在开发中，我们构建了组件树之后，除了父子组件之间的通信之外，还会有非父子组件之间的通信。 
- 这里我们主要有两种方式： 
  - Provide/Inject；
  - Mitt全局事件总线

### 11.6.1 Provide(提供)和Inject(注入)

- Provide/Inject用于非父子组件之间共享数据： 

  - 比如有一些深度嵌套的组件，子组件想要获取父组件的部分内 容； 
  - 在这种情况下，如果我们仍然将props沿着组件链逐级传递下 去，就会非常的麻烦； 

- 对于这种情况下，我们可以使用 Provide 和 Inject ： 

  - 无论层级结构有多深，父组件都可以作为其所有子组件的依赖 提供者； 
  - 父组件有一个 provide 选项来提供数据； 
  - 子组件有一个 inject 选项来开始使用这些数据； 

- 实际上，你可以将依赖注入看作是“long range props”，除了： 

  - 父组件不需要知道哪些子组件使用它 provide 的 property 

  - 子组件不需要知道 inject 的 property 来自哪里

![img](../../images/provide-inject.3e0505e4.png)

###  11.6.2 Provide(提供)和Inject(注入)基本使用

`结构如下:`

::: mermaid
flowchart LR;
id1["App.vue"]-->id2["Home.vue"]
id2-->id3["HomeContent.vue"]
:::



`示例：`

`App.vue:`

```vue
<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import { computed } from 'vue';

  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: "why",
        age: 18,
      }
    }
    }
  }
</script>
```



`HomeContent.vue:`

```vue
<template>
  <div>
    HomeContent: {{name}} - {{age}} - {{length.value}}
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length"],
  }
</script>

<style scoped>

</style>
```



- 如果Provide中提供的一些数据是来自data，那么要使用provide()函数对象，否者会报错。

  `例:`

  ```vue
  <script>   
  provide() {
        return {
          name: "why",
          age: 18,
          length: computed(() => this.names.length) // ref对象 .value
        }
      },
      data() {
        return {
          names: ["abc", "cba", "nba"]
        }
      }
  </script>
  ```

  

- 在**provide**中引入的 **this.names.length** 本身并不是响应式的； 

- 如果我们需要数据变成响应式的， 需要使用响应式的一些API来完成这些功能，比如说computed函数；  

  > 注意：我们在使用length的时候需要获取其中的value ,这是因为computed返回的是一个ref对象，需要取出其中的value来使用；



### 11.6.3  全局事件总线mitt库

- Vue3从实例中移除了 \$on、\$off 和 $once 方法，所以我们如果希望继续使用全局事件总线，要通过第三方的库

  - Vue3官方有推荐一些库，例如 **mitt** 或 **tiny-emitte**r； 

- 首先，我们需要先安装这个库： 

  ```bash
  npm install mitt
  ```

  

- 其次，我们可以封装一个工具eventbus.js：

  ```js
  import mitt from 'mitt';
  
  const emitter = mitt();
  export default emitter;
  ```

- 使用事件总线工具

  - 在项目中可以使用它们： 

    - 我们在Home.vue中监听事件； 

      ```vue
      <script>
        import emitter from './utils/eventbus';
      
        export default {
          created() {
            emitter.on("why", (info) => {
              console.log("why:", info);
            });
          }
        }
      </script>
      ```

      

    - 我们在App.vue中触发事件；

      ```vue
      <script>
        import emitter from './utils/eventbus';
      
        export default {
          methods: {
            btnClick() {
              console.log("about按钮的点击");
              emitter.emit("why", {name: "why", age: 18});
            }
          }
        }
      </script>
      ```



- Mitt的事件取消

  ```js
  //取消emitter中所有的监听
  emitter.all.clear()
  
  //定义一个函数
  function onFoo(){}
  emitter.on('foo',onFoo)	//监听
  emitter.off('foo',onFoo)//取消
  ```

  