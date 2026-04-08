## 前言

本章节将会给大家分享 [re-redux-model](https://github.com/SugarTurboS/rc-redux-model) 的出现缘由以及设计过程，当然还有核心源码的解读，如果你对本章节内容兴趣不大，可以快速阅读或跳过。

本文的整体思路：

- 为什么要写 rc-redux-model
- 我期望做成什么样
- 知识储备
- 核心源码解读

## A. 为什么要写 rc-redux-model

### 1. 出现缘由

前面给大家不断强调，**React 是单向数据流的形式**，它不存在数据向上回溯的技能，要么就是向下分发，要么就是自己内部管理。

![image.png](images\ec1c1df7d3594a7cae3e702aaddbfdd1~tplv-k3u1fbpfcp-watermark.jpg)

> 在 react 中，有 props 和 state，当我想从父组件给子组件传递数据时，可通过 props 进行数据传递，如果我想在组件内部自行管理状态，那可以选择使用 state。

很快，我遇到了一个问题，那就是兄弟组件之间如何进行通信？答案是在父组件中管理 state，通过 props 下发给各子组件，子组件通过回调方式，进行通信。

这会存在什么问题？如果你想共享数据，你得把所有需要共享的 state 集中放到组件顶层，然后分发给所有子组件。为此，需要一个库来作为更加牛逼、专业的顶层 state 发给各组件，于是，我引入了 redux。

### 2. 体验不佳

[redux](https://github.com/reduxjs/redux) 可以说是较成熟，生态圈较完善的一个库了，搭配  [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)  这个 chrome 插件，让你开发更加快乐。然，世间万物，皆有利弊。

本身我使用 redux 不会有所谓的“痛点”，**因为 redux 默认只支持同步操作，让使用者自行选择处理异步，对于异步请求 redux 是无能为力的**。这么说吧，它保证自己是纯粹的，脏活累活丢给别人去干。

于是我的痛点在于：如何处理异步请求，为此我使用了 redux-saga 去解决异步问题，但是在使用  `redux` + `redux-saga` 中，我发现，这会让我的 **[重复性]** 工作变多(逐步晋升 CV 工程师)，因为它在我项目中，会存在啰嗦的样板代码。

举个例子：异步请求，获取用户信息，我需要创建  `saga/user.js`、`reducers/user.js`、以及 `action/user.js`，为了统一管理 const，我可能还会有一个  `const/user.js`，然后在这些文件之间来回切换。（什么玩意？）

```js
// const/user.js
const FETCH_USER_INFO = 'FETCH_USER_INFO';
const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
```

```js
// actions/user.js
export function fetchUserInfo(params, callback) {
  return {
    type: FETCH_USER_INFO,
    params,
    callback,
  };
}
```

```js
// sagas/user.js
function* fetchUserInfoSaga({ params, callback }) {
  const res = yield call(fetch.callAPI, {
    actionName: FETCH_USER_INFO,
    params,
  });
  if (res.code === 0) {
    yield put({
      type: FETCH_USER_INFO_SUCCESS,
      data: res.data,
    });
    callback && callback();
  } else {
    throw res.msg;
  }
}
```

```js
// reducers/user.js
function userReducer(state, action) {
  switch (action.type) {
    case FETCH_USER_INFO_SUCCESS:
      return Immutable.set(state, 'userInfo', action.data);
  }
}
```

这种样板代码，简直就是 CV 操作，只需复制一份，修改一下文件名、参数等，就能实现一个请求流程。对我个人而言，这会让我不够专注，分散管理 const、action、saga、reducer 一套流程，需要不断的跳跃思路。随着文件数量变多，我是真的不喜欢如此`繁琐`的流程，有没有好的框架能帮我把这些事都做完呢？

### 3. dva 速心丸？

> dva，基于 redux 和 redux-saga 的数据流方案，让你在一个 model 文件中写所有的  `action、state、effect、reducers`等，为了简化开发体验，内置了 react-router 和 fetch\*\*。

我是如何看待 dva 的？从官方声明来看，dva 是基于  `redux` + `redux-saga`  的方案，只是在你写的时候，都写在一个 model 文件，然后它帮你做一些处理；其次它是一个框架，而不是一个库，是否意味着：我在项目开始之前，我就需要确定项目的架构是不是用 dva，如果开发一半，我想换成 dva 这种状态管理的写法，而去引入 dva ，是否不合理？再或者，我只是做一些 demo、写点个人小项目，但我又想像写 dva 的数据状态管理 model 那种方式，引入 dva 是不是反而变得笨重呢？

### 4. 自己所需

出发点为：在于解决繁琐重复的工作，store 文件分散，state 类型和赋值错误的问题，为此，我期望为跟我一样困惑的小伙伴，提供一个写状态管理较为 **[舒服]** 的书写方式，无缝兼容原有项目，只需要安装这个包，就能引入一套数据管理方案，写起来又舒服简洁。

## B. 如何实现 rc-redux-model

### 01. 初建雏形

由于之前有阅读过 `redux` 的源码，同时也大致阅读过 `redux-thunk` 的源码，并且查阅了一些与 redux 相关文章，在有了一些知识储备之后，开始着手编写相关代码。（下面我会介绍部分知识点）

> 如果你对 redux 源码存在疑惑，你不妨看看这篇 [【KT】轻松搞定 Redux 源码解读与编程艺术](https://juejin.cn/post/6844904183426973703)

在参考了 dva 对 model 的参数说明，进行参数定义，由于我没有 redux-saga ，所以是没有  `effect`  这个属性的，于是初步得到我的 model 参数

![image.png](images\51a302b2e11b48f0b4a9e0f31c9c6bec~tplv-k3u1fbpfcp-watermark.jpg)

下面是一个 `model` 的类型约束

```ts
export interface RModel {
  namespace: string; // 命名空间
  state: {
    [key: string]: any;
  };
  action?: {
    [key: string]: ({
      dispatch,
      getState,
      currentAction,
      commit,
      call,
    }) => void;
  };
  reducers?: {
    [key: string]: any;
  };
}
```

按照我的设想，我会存在多个 model 文件，聚集在一起之后，得到的是一个数组 :

```js
// model.js
import aModel from './aModel';
import bModel from './bModel';
import cModel from './cModel';

export default [aModel, bModel, cModel];
```

我所希望的是：通过传入  `RModel[]`，实例化 `RcReduxModel`，得到的实例带有经过处理后的 reducers

- reducers：所有 `model.reducers` 集合，这样我可以无障碍的用在  `store.combineReducers`中，可以兼容你现有的项目，因为只要你用了 redux， 那么你肯定得通过  `combineReducers API`  去集合所有的 reducers

```js
// createStore.js

// 👇 导入聚集所有 model，得到的是一个数组
import models from './models';
import RcReduxModel from 'rc-redux-model';

const reduxModel = new RcReduxModel(models);

const reducerList = combineReducers(reduxModel.reducers);
return createStore(reducerList);
```

因为我想像写 model 那样，所有东西都在一个文件中，自然而然，这个 action 集到 model 里边之后，如何处理异步就成了我需要解决的一个问题

### 02. 异步处理

我可以将 `redux-thunk`  或  `redux-saga`  集成进去，但感觉没必要。出于对这两个库的学习，以及在使用上带给我的 **[体验]**，我在想，能不能自行处理？于是，我去将  `redux-thunk`  的源码看了一遍。

> redux-thunk 中判断你的 action 是 function 还是 object，从而判断你的 action 是同步还是异步

怎么理解呢？大家肯定都有写过同步 action 或者异步 action

- 同步：通过 dispatch 发起一个 action，去修改 redux 的 state 值

- 异步：通过 dispatch 发起一个 action，由于 redux 没有异步能力，所以借助 redux-thunk 的能力，redux-thunk 发现你发起的 action 并不是一个 object，而是一个 function，它就会去帮你把请求发出，当请求处理完后，得到数据，你再发起一个同步的 action 去修改 redux 的 state 值

最后得出了一个解决方案：**在  `rc-redux-model`  中，每一个 action 都是异步的，也就是你发起的每一个 action，都是函数**。

```js
aModel = {
  state: {
    a: '',
  },
  action: {
    // 这两个 action 都是 function
    firstAction: ({ getState, dispatch }) => {},
    secondAction: ({ getState, dispatch }) => {},
  },
};
```

即使你想要发起一个同步 action，去修改 state 的值，我也会将其作为异步进行处理，也就是你修改 state 值，你需要这么写

```js
// component.js

// 👇 1. 发起一个 action 用于修改 state 值
this.props.dispatch({
  type: 'aModel/setStateA',
  payload: '666',
});
```

```js
// aModel.js

aModel = {
  namespace: 'aModel',
  state: {
    a: '111',
  },
  action: {
    // 👇 2. 这是异步action，在这里你可以做异步请求，也可以做同步处理
    // 总之，异步或同步，都需要经过这里的“转发”，再去修改 state 值
    setStateA: ({ currentAction, dispatch }) => {
      dispatch({
        type: 'aModel/CHANGE_STATE_A',
        payload: currentAction.payload,
      });
    },
  },
  reducers: {
    ['CHANGE_STATE_A'](state, payload) {
      return {
        ...state,
        a: payload,
      };
    },
  },
};
```

明确了这两点，接下来就只需要开发即可。开发接下来我会讲到，我们继续往下看

### 03. 提高体验

由于每个 action，都需要小伙伴们自己去写，极度麻烦，以下面这个例子说明

我想要修改 state 中的 a 值，需要自己写 action、reducers

```js
// aModel.js

aModel = {
  namespace: 'aModel',
  state: {
    a: '111',
  },
  action: {
    // 👇 2. 这是异步action，在这里你可以做异步请求，也可以做同步处理
    // 总之，异步或同步，都需要经过这里的“转发”，再去修改 state 值
    setStateA: ({ currentAction, dispatch }) => {
      dispatch({
        type: 'aModel/CHANGE_STATE_A',
        payload: currentAction.payload,
      });
    },
  },
  reducers: {
    ['CHANGE_STATE_A'](state, payload) {
      return {
        ...state,
        a: payload,
      };
    },
  },
};
```

假设我现在有 20 个 state，意味着我得在 model.action 中，写对应的 20 个修改 state 的 action，然后在 model.reducers 中同样写 20 个相对应的 reducer，那么就会使得该文件代码量极大，那跟一开始写 redux 区别在哪？看起来只是将 state、action、reducers 放在一个文件而已。**并没有真正的解决繁琐重复的工作**。

于是我想到了解决方案：提供一个默认的 action，大家都通过这个 action
去修改 state 值。但这会有个问题，所有修改 state 的 action，都走同一个  `action.type`，那么在  [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)  中，是很难发现这个 action 触发，具体是为了修改哪个 state 值。

如何解决此问题呢？最终的解决方案就是：**为每一个 state ，自动注册对应的 action 和 reducer， 同时再提供了一个默认的 action(setStore)**

> ✨  例 : state 有 n 个值，那么最终会自动注册 n+1 个 action，用户只需要记住并调用默认的这个 action(setStore) 即可

![image.png](images\16444ad9771242c9a09aa9f911933d2c~tplv-k3u1fbpfcp-watermark.jpg)

用户只需要调用默认提供的  `setStore`  即可，然后根据 key 进行判断，从而转发到对应到 action 上

```js
this.props.dispatch({
  type: '[model.namespace]/setStore',
  payload: {
    key: `${model.state.key}`,
    values: `${your values}`
  },
})
```

由于 `setStore` 每次都只能修改一个 state 值，如果在同一时刻，想修改 m 个 state 值，就得发 m 个 action，于是我又添加了一个 `setStoreList`

```js
this.props.dispatch({
  type: '[model.namespace]/setStoreList',
  payload: [
    {
      key: `${model.state.key}`,
      values: `${your values}`
    },
    {
      key: `${model.state.key}`,
      values: `${your values}`
    }
  ]
})
```

### 04. 数据不可变

在函数式编程语言中，数据是不可变的，[(这也是官方说的)](http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7-immutability)，所有的数据一旦产生，就不能改变其中的值，如果要改变，那就只能生成一个新的数据。由于现在很多项目都会使用  `seamless-immutable`，那么在业务中的 `model.state` 中，使用了 Immutable 包裹了 state，然后调用默认提供的 action，最后会报错，懂的都懂 !

那么该怎么办呢？内部支持 Immutable ，提供一个配置参数 `openSeamlessImmutable`，默认为 false，如果你业务中的 state 是 Immutable，而在 model 中不设置此配置，那么会报错。

```js
// 使用 seamless-immutable

import Immutable from 'seamless-immutable';

export default {
  namespace: 'appModel',
  state: Immutable({}),
  openSeamlessImmutable: true, // 必须开启此配置
};
```

### 05. 处理类型不一致

这也是我有时候犯的错误，特别是在没有 TypeScript 的情况下，我们有时在  `model.state`  中定义好某个值的类型，但在改的时候却将其改为另一个类型，比如

```js
export default {
  namespace: 'userModel',
  state: {
    name: '', // 这里定义 name 为 string 类型
  },
};
```

但在修改此 state value 时，传递的确是一个非 string 类型的值

```js
this.props.dispatch({
  type: 'userModel/setStore',
  payload: {
    key: 'name',
    values: {}, // 这里 name 变成了object
  },
});
```

这其实是不合理的，在 rc-redux-model 中，会针对需要修改的  `state[key]`  做类型检测处理

![image.png](images\98b7d90ef77c4f43b7a739dde95a1a92~tplv-k3u1fbpfcp-watermark.jpg)

同时做 `state[key]` 字段的处理

```js
export default {
  namespace: 'userModel',
  state: {
    name: '', // 这里只定义 state 中存在 name
  },
};
```

此时想修改 state 中的另一属性值

```js
this.props.dispatch({
  type: 'userModel/setStore',
  payload: {
    key: 'testName',
    values: '1', // 这里想修改 testName 属性的值
  },
});
```

极度不合理，因为你在 state 中并没有声明此属性， rc-redux-model 会默认帮你做检测

![image.png](images\297af08ca0b94602b30009c52791d0b8~tplv-k3u1fbpfcp-watermark.jpg)

### C. 核心源码解读

上诉更多的是对中间件的思考和功能的设计，接下来我们结合代码，来看看一款 redux 中间件该如何开发。在此之前，我希望你能对 redux 有一定的了解，我给你们准备了几篇文章，都是我在开发中间件前看的文章内容，如果你感兴趣，可以点击下方链接查看

- [轻松搞定 Redux 源码解读与编程艺术](https://juejin.cn/post/6844904183426973703)
- [redux 从设计到源码——美团技术团队](https://tech.meituan.com/2017/07/14/redux-design-code.html)
- [redux 之洋葱模型的源码分析与感悟](https://cloud.tencent.com/developer/news/41333)
- [深入浅出 Event Sourcing 和 CQRS](https://cloud.tencent.com/developer/news/41333)
- [✨ redux 官方教程（推荐）](http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts)

> 最起码上面 Part B 部分中的 action、reducer 等你都得明白吧？你得知道一个 action 是怎样的，reducer 是怎样的，不然下面你理解时会非常困难。

看完之后，我们需要掌握几个最基础且重要的词汇：`函数式编程`、`compose`、`洋葱模型`，不要急，我们一个个来过知识点。

#### 函数式编程

1. 函数是第一等公民

怎么理解，在 JS 中，函数可以当作是变量传入，也可以赋值给一个变量，甚至于，函数执行的返回结果也可以是函数。

```js
const func = function () {};

// 1. 当作参数
function demo1(func) {}

// 2. 赋值给另一个变量
const copy_func = func;

// 3. 函数执行的返回结果是函数
function demo2() {
  return func;
}
```

2. 数据是不可变的(Immutable)

在函数式编程语言中，数据是不可变的，所有的数据一旦产生，就不能改变其中的值，如果要改变，那就只能生成一个新的数据。

所以我们在 redux 中强调了，不能直接修改 state 的值，**[代码必需先复制原来的 object/array，然后更新它的复制体。Redux 期望所有状态更新都是使用不可变的方式](http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7-immutability)。**

> 额外补充一下，下边的两句话引用来自 `Dan Abramov` 的博客: [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/) 在 react 中，我们从 `this.props.xxx` 中读取数据。为什么我们可以得到最新的实例？其实不是因为 props 改变了，在 react 中，props 是不可变(immutable)的，他们永远不会改变。然而，this 是可变(mutable)的。这就是 react 类组件 this 存在的意义。

3. 函数只接受一个参数

怎么理解，大伙估计都写了很久的多参数，看到这个懵了啊，我也懵了，但是这就是规矩，无规矩，不成方圆 ～

所以当你看**中间件**的代码时，你就不会奇怪了，比如这行代码 ～

```ts
const middleware = (store) => (next) => (action) => {};
```

换成我们能够理解的形式，那就是 :

```ts
const middleware = (store) => {
  return (next) => {
    return (action) => {};
  };
};
```

这里有人就疑问了，这不就是依赖了三个参数吗，那能不能这样写啊？

```js
const middleware = (store, next, action) => {};
```

可以，但这是规矩，是函数式编程就是要求只能有一个参数，懂 ?

#### 组合 compose

说说组合 compose，这个是个啥玩意，我们来看一段代码 :

```js
const compose = (f, g) => {
  return (x) => {
    return f(g(x));
  };
};

const add = function (x) {
  return x + 2;
};

const del = function (x) {
  return x - 1;
};

// 使用组合函数，🧬 基因突变，强强联合
const composeFunction = compose(add, del)(100);
```

猜一下，执行 composeFunction 打印什么？答对的，给自己鼓个掌 👏

好了，我已经把最为强大的忍术：函数式编程术语之 compose 组合函数，教给你了～ 你多看几遍，之后你看 redux 的源码你就有种醍醐灌地的感觉。

#### 洋葱模型

洋葱模型是本质上是一层层的处理逻辑，而在函数式编程世界里，意味着用函数来做处理单元。先不说其他，我们先上一个例子，帮助大家理解～

```js
let middleware = [];
middleware.push((next) => {
  console.log('A');
  next();
  console.log('A1');
});
middleware.push((next) => {
  console.log('B');
  next();
  console.log('B1');
});
middleware.push((next) => {
  console.log('C');
});

// 这里的 run 不用 care
let func = run(middleware);
func();
```

猜猜打印顺序是个啥 ？没错，打印结果为 : A -> B -> C -> B1 -> A1

当程序运行到 `next()` 的时候会暂停当前程序，进入下一个中间件，处理完之后才会仔回过头来继续处理。

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6c7365ec7224aae815de0b4ddaa72fb~tplv-k3u1fbpfcp-zoom-1.image" width=200 />

我们看这张图，很有意思，会有两次进入同一个中间件的行为，而且是在所有第一次的中间件执行之后，才依次返回上一个中间件。你品，你细品～

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09c6b76fffb64795bcd663f883bb3a75~tplv-k3u1fbpfcp-zoom-1.image" width=200 />

如果你能看懂上面这段中间件的代码，那么我稍微改写一下，你也应该看得懂

```js
function f1(store) {
  return function (next) {
    return function (action) {
      console.log('step1 中间件1 开始');
      next(action);
      console.log('step2 中间件1 结束');
    };
  };
}

function f2(store) {
  return function (next) {
    return function (action) {
      console.log('step3 中间件2 开始');
      next(action);
      console.log('step4 中间件2 结束');
    };
  };
}

function f3(store) {
  return function (next) {
    return function (action) {
      console.log('step5 中间件3 开始');
      next(action);
      console.log('step6 中间件3 结束');
    };
  };
}

function reducer(state, action) {
  if (action.type === 'INIT_STORE') {
    console.log('我是大帅哥');
  }
  return {};
}

var store = Redux.createStore(reducer, Redux.applyMiddleware(f1, f2, f3));

store.dispatch({ type: 'INIT_STORE' });
```

这时候想必大家还是有些难以理解，大概解读一下，在这个示例代码中，洋葱模型运行过程就是：

派发 action → 经过 `applyMiddleware API` 的组合 -> action 传入 f1 副作用 → 打印 step1 → 执行 f1 的 next（这个 next 指向 f2 副作用）→ 打印 step3 → 执行 f2 的 next（这个 next 指向 f3 副作用）→ 打印 step5 → 执行 f3 的 next（这个 next 指向`store.dispatch`）→ 执行完毕 -> 打印我是大帅哥 -> 返回到 f3 副作用打印 step6 → 返回到 f2 打印 step4 → 返回到 f1 副作用打印 step2 -> dispatch 执行完毕。

有人就会好奇了，这里的 `next` 到底是什么东西，其实他就是 `store.dispatch`，有点饶？我们来梳理一下。

如果你还不太能理解，请放轻松，先把上边我给的几个链接文章看一看，并且去搜索相关知识，自己补充补充知识。如果你能看懂上面这段中间件的 store 例子，那么请深呼吸一口气，接下来我们再深入一点。看看 `applyMiddleware` 的源码，不要怀疑，这真的是 redux 的源码。

```ts
export default function applyMiddleware(...middlewares) {
  return (createStore) =>
    (reducer, ...args) => {
      const store = createStore(reducer, ...args);
      let dispatch: Dispatch = () => {};

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args),
      };

      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
}
```

短短十几行代码，将我们上边说的知识点都包含了。不要怀疑，这就是源码，先试着理解一下。

首先，传入了一个中间件数组 `middlewares`，我们将它进行剥皮，并给中间件 middleware 都以我们定义的 middlewareAPI 作为参数注入，所以我们每一个中间件的上下文是 dispatch 和 getState，为什么？为什么要注入这两个玩意？因为

- getState：每一层洋葱都可以获取到当前的状态。
- dispatch：为了可以将操作传递给下一个洋葱。

那它是如何给每一个 middleware 注入的呢？看这段代码：

```ts
const chain = middlewares.map((middleware) => middleware(middlewareAPI));
```

遍历 middlewares，然后每一个中间件都注入 `store.getState` 和 `store.dispatch`，那经过这样处理之后，chain 是个什么东西？

很好理解，上面说过了函数式编程的要点：函数只接受一个参数，再复习一下这段代码

```ts
const middleware = (store, next, action) => {};
```

是否有些眼熟，改写成我们熟知的函数式编程，就变成下面这样了

```ts
const middleware = (store) => (next) => (action) => {};
```

也就是说，chain 其实是一个 `(store) => (next) => (action) => {}` 函数的数组，也就是中间件剥开后返回的函数组成的数组。

我们再看看这行代码

```ts
dispatch = compose(...chain)(store.dispatch);
```

`compose` 应该不陌生了，组合函数，这里的代码改成我们常见的样子，就是下面这种形式

```ts
function compose(...chain) {
  return (store.dispatch) => {
    return chain.reduce((a, b) => (store.dispatch) => a(b(store.dispatch)))
  }
}
```

我们以 store.dispatch 作为参数进行注入～ 通过 compose 对中间件数组内剥出来的高阶函数进行组合形成一个调用链。调用一次，中间件内的所有函数都将被执行。

知识量有点多，如果觉得有点乱，我们再来捋一捋。

- 抛出第一个问题？`dispatch 是用来干嘛的？`

dispatch 是用来分发 action 的`，good，那么，我们可以得到第一个函数

```js
(store.dispatch) => (action) => {}
```

- 这里抛出第二个问题，为了在每一个中间件中，都需要得到实时的 store 数据，怎么搞？

那就不需要只传 `store.dispatch`，再给它传一个 `store.getState`，那么，我们可以得到修改后的函数

```js
(store.dispatch, store.getState) => (action) => {}
```

- 第三个问题，为了让下一个中间件，具备 dispatch 的能力，该怎么办？

那就把 store.dispatch 传给下一个中间件，让它具备 `dispatch` 能力，那么，我们可以得到修改后的函数

```js
(store.dispatch, store.getState) => (store.dispatch) => (action) => {}
```

- 第四个问题，为了能够让每一个中间件持有最终的 dispatch，如何处理？

redux 开发者利用了闭包的特性，将内部的 dispatch 与外部进行强绑定，也就是这段代码

```js
// 这是我们意yin的代码
let dispatch = () => {};

middlewares.map((middleware) =>
  middleware({
    getState,
    dispatch() {
      return dispatch;
    },
  })
);
```

```js
// 映射到 redux 中的真实源码
let middlewareAPI = {
  getState: store.getState,
  dispatch: (action, ...args) => dispatch(action, ...args),
};

// 其实你把 middlewareAPI 写到 middleware 里边，就等价于上边那玩意了
const chain = middlewares.map((middleware) => middleware(middlewareAPI));
dispatch = compose(...chain)(store.dispatch);
```

所以最终我们对一个中间件形式就是：

```ts
middleware = (store.dispatch, store.getState) => (store.dispatch) => (action) => {}

// 改一下名称
middleware = (store.dispatch, store.getState) => (next) => (action) => {}
```

- 问题五，dispatch 在这里边扮演了什么角色？

- 绑定了各个中间件的 next，说了 next 实际上就是 store.dispatch
- 暴露一个接口用来接收 action

> 你可以这么理解，中间件其实就是我们自定义了一个 dispatch，然后这个 dispatch 会按照洋葱模型进行 pipe

**有个疑惑: 为什么在 middlewareAPI 中，dispatch 不是直接写成 store.dispatch, 而是用的匿名函数的闭包引用？**

```ts
// 为什么不这么写....
let middlewareAPI = {
  getState: store.getState,
  dispatch: (action) => store.dispatch(action),
};
```

**其实写成匿名函数的闭包引用是为了每一个中间件都取的是最新的 dispatch**，假设我们现在执行某一个中间件 m1，然后 dispatch 了 action1，当此 action1 执行完毕，接着应该执行下一个中间件 m2，在下一个中间件中，dispatch 应当是最新的引用，不然这个 action2 走的是没有经过任何中间件修饰的 store.dispatch，这显然是不行的。所以要写成匿名函数的闭包引用。

### 结合 rc-redux-model 源码

上面看完之后，最为重要的是你需要知道，一个中间件的组成

```js
const middleware = (store.dispatch, store.getState) => (next) => (action) => {}
```

记住这一点，那么接下来就好办了，因为我们做的是一个 redux 中间件，在使用上是

```js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import models from './models';
import RcReduxModel from 'rc-redux-model';

const reduxModel = new RcReduxModel(models);

// 👉 利用 combineReducers 把我们写的 reducers 搞进去
const reducerList = combineReducers(reduxModel.reducers);
// 👉 利用 applyMiddleware 将我们写的中间件搞进去
return createStore(reducerList, applyMiddleware(reduxModel.thunk));
```

接下来，我们开始写代码

#### D. 开始实现 RcReduxModel 类

下面这张图是 UML 图，我们可以来看一下，共有 3 个成员变量及 1 个私有方法。

![image.png](images\b3eed17f36714742975252bdf6bd18f3~tplv-k3u1fbpfcp-watermark.jpg)

- models：你传进来的 models 经过一系列处理之后的最终 models
- reducers：所有 model 下的 reducers，整合在一起，用于 redux.combineReducers
- thunk：自己实现的 thunk 中间件，对 dispatch 的增强，用于 redux.applyMiddleware
- start()：主逻辑，该方法下的主要工作为
  - 自动为每一个 state 值注册 action
  - 自动注册每一个 model 的 reducers
  - 实现 dispatch 对中间件的增强

在此之前，我们来看一下一个 model 的类型声明

```ts
export interface RModel {
  namespace: string; // 命名空间
  openSeamlessImmutable?: boolean;
  state: {
    [key: string]: any;
  };
  action?: {
    [key: string]: ({
      dispatch,
      getState,
      currentAction,
      commit,
      call,
    }) => void;
  };
  reducers?: {
    [key: string]: any;
  };
}
```

下面是伪代码，具体请看线上代码：👉 [index.ts](https://github.com/SugarTurboS/rc-redux-model/blob/master/core/index.ts)

```ts
class RcReduxModel {
  public models: {
    [key: string]: RModel;
  };
  public thunk: any;
  public reducers: any;

  public constructor(models: RModel[]) {
    this.models = {};
    this.reducers = {};
    this.thunk = [];
    this.start(models);
  }

  private start(models: RModel[]) {
    // step1. 自动为每一个 state 都注册一个 action，并且提供默认修改 state 的 action
    // returns 返回经过处理之后的 model 集合
    let autoActionAndReducerModel = models.map((model: RModal) => {
      return registerAutoAction(model);
    });

    // step2. 每一个 model 中的 reducers 只是一个对象，而在 redux 中，reducer 是一个方法
    // 该方法的写法为：(state, action) => newState; 所以我们需要改造成符合 redux 的写法
    // 才能支持 redux.combineReducers 去使用，让我们修改一下
    autoActionAndReducerModel.forEach((model: RModal) => {
      this.reducers[model.namespace] = this.registerReducers(model); // 该方法返回的是一个函数
    });

    // step3. 中间件增强，核心之处：(dispatch, getState) => (next) => (action) => {}
    // 注入自定义的 callAPI、commit 等功能，具体看下面代码
    this.thunk = middleware(autoActionAndReducerModel);

    // step4. 检测 model 是否有重复，并将处理之后的 model 赋值给成员变量
    autoActionAndReducerModel.forEach((model: RModal) => {
      this.registerModel(model, models);
    });
  }
}
```

上面就是整个 `RcReduxModel` 类的核心要点，相比结合注释，大家都能理解，接下来我将一步步带大家实现对应的方法

- registerAutoAction()：自动为每一个 state 都注册一个 action，并且提供默认修改 state 的 action
- registerReducers()：将 model 中的 reducer 对象变为 (state, action) => newState 函数
- middleware()：中间件 (dispatch, getState) => (next) => (action) => {}
- registerModel()：所有 model 的集合

#### registerAutoAction()

该方法接收的是一个 model，上面说了一个 model 都具备什么属性，如果你拿到了一个 model，你期望为每一个 state 提供对应的 action，该如何实现呢？

```js
// 生成自动注册修改 state 的 action.type
const generateReducerActionType = (namespace: string, key: string): string => {
  return `SET_${namespace.toUpperCase()}_${key.toUpperCase()}`;
};

export default function (model: RModel): RModel {
  let nextAction: any = {};
  let nextReducers: any = {};

  const {
    namespace,
    state = {},
    action = {},
    reducers = {},
    openSeamlessImmutable,
  } = model;

  // step1. 如果没有 state，那就不需要自动注册了
  if (Object.keys(state).length === 0) return model;

  // step2. 如果存在 state 值，那就遍历 stateKey
  Object.keys(state).forEach((stateKey: string) => {
    const actionTypeToReducer = generateReducerActionType(namespace, stateKey);

    // step3. 给每一个 state 都自动生成一个能修改 state 的 action
    if (!nextAction[`set${stateKey}`]) {
      nextAction[`set${stateKey}`] = autoAction(actionTypeToReducer);
    }

    // step4. 注册了 action，对应的 reducer 应该要有一个 action.type 映射，好修改 state 值
    if (!nextReducers[`${actionTypeToReducer}`]) {
      nextReducers[`${actionTypeToReducer}`] = autoReducers(
        stateKey,
        openSeamlessImmutable
      );
    }
  });

  // step5. 如果有太多的 state，用户记不住注册的 action
  // 所以这里提供两个默认的 action
  nextAction['setStore'] = autoSetStoreAction(namespace);
  nextAction['setStoreList'] = autoSetStoreListAction(namespace);

  // step6. 如果存在重复，以用户定义的为主
  nextAction = { ...nextAction, ...action };
  nextReducers = { ...nextReducers, ...reducers };
  return {
    ...model,
    action: nextAction,
    reducers: nextReducers,
  };
}
```

自动注册 action 的代码就这么点，但核心在于 [autoAction](https://github.com/SugarTurboS/rc-redux-model/blob/master/core/registerAutoAction.ts#L10) 的实现和 [autoReducers](https://github.com/SugarTurboS/rc-redux-model/blob/master/core/registerAutoAction.ts#L25) 的实现。

这边给大家留一个悬念，我怕你们懒得去看源码，所以我这里就不贴代码了，实现也很简单，小伙伴们快[👉 点击这里](https://github.com/SugarTurboS/rc-redux-model/blob/master/core/registerAutoAction.ts) 去看源码啊！

#### registerReducers()

该方法接收的是一个 model，那么我们如何将 model.reducers 对象，变成我们期望的 (state, action) => newState 呢？

```ts
function registerReducers(model: RModel) {
  const { namespace, state, reducers } = model;

  invariant(reducers, `model's reducers must be defined, but got undefined`);

  const reducersActionTypes = Object.keys(reducers);

  return (storeState: any, storeAction: any) => {
    const newState = storeState || state;
    const reducersActionKeys = storeAction.type.split('/');
    // step1. 因为我们规定每一个 action type 都必须是 [namespace]/[actionName] 这种格式
    const reducersActionModelName = reducersActionKeys[0];
    const reducersActionSelfName = reducersActionKeys[1];

    // step2. 如果命名空间对不上，直接返回数据
    if (reducersActionModelName !== namespace) return newState;

    // step3. 如果自动注册的 reducer type 存在当前这个 actionName，就会触发执行，将 state 值修改
    // 其实真正修改的在于上面的 autoReducers 方法，一定要去看这个方法
    if (reducersActionTypes.includes(reducersActionSelfName)) {
      return reducers[reducersActionSelfName](newState, storeAction.payload);
    }
    return newState;
  };
}
```

#### middleware()

该方法接收的是一个 model 集合，也就是 `RModel[]`，接下来我们如何实现一个中间件？

中间件的核心之处 `(dispatch, getState) => (next) => (action) => {}`

```ts
const getCurrentModel = (actionModelName: string, models: Array<RModel>) => {
  if (models.length === 0) return null;
  const findModel = models.filter(
    (model: RModel) => model.namespace === actionModelName
  );
  if (findModel.length > 0) return findModel[0];
  return null;
};

const actionToReducer = (
  currentModel: RModal,
  actionModelName: string,
  next: any
) => {
  return (reducerAction: any) => {
    if (currentModel && currentModel.reducers) {
      if (currentModel.reducers[reducerAction.type]) {
        next({
          type: `${actionModelName}/${reducerAction.type}`,
          payload: reducerAction.payload,
        });
      }
    }
  };
};

const callAPI = (dispatch: any) => async (service: any, params: any) => {
  let result = {};
  try {
    result = await service(params);
  } catch (error) {
    return Promise.reject(params);
  }

  return Promise.resolve(result);
};

export default function (models: RModel[]) {
  return ({ dispatch, getState }: any) =>
    (next: any) =>
    (action: any) => {
      // step1. 因为我们规定每一个 action type 都必须是 [namespace]/[actionName] 这种格式
      const actionKeyTypes = action.type.split('/');
      invariant(actionKeyTypes.length <= 2, `dispatch action only accept [namespace/actionName], but got ${action.type}`);
      const actionModelName = actionKeyTypes[0];
      const actionSelfName = actionKeyTypes[1];

      // step2. 得到当前的 model
      const currentModel = getCurrentModel(actionModelName, models);
      if (currentModel) {
        // step3. 当前这个 action 对象中是否存在当前发的这个 action
        const currentModelAction = currentModel.action ? currentModel.action[actionSelfName] : null;
        invariant(currentModelAction, `[${actionSelfName}] does not exist [${actionModelName}]!`);

        // step4. 如果当前这个 action 存在并且是一个函数 （autoAction 返回的是一个 Function，所以一定要去看这个方法）
        if (currentModelAction && typeof currentModelAction === 'function') {
          const commitActionToReducer = actionToReducer(currentModel, actionModelName, next);
          // step5. 发起一个 同步 action，也就是发一个到 reducer 的 action
          // 当 reducer 接收到 action.type 与我们发过来的一致时，就进行 state 值修改
          return currentModelAction({
            dispatch,
            getState,
            currentAction: action,
            commit: commitActionToReducer,
            call: callAPI(dispatch),
          });
        }
      }

      // step6. 执行下一个中间件，因为 applyMiddleware 可能不仅是集成我们的中间件
      // 意味着当前这个 action 也许不是我们所期望的 action，我们不这个中间件不处理了
      return next(action);
    };
}
```

#### registerModel()

该方法就是检测 model 是否有重复

```ts
function registerModel(model: RModal, models: RModal[]) {
  invariant(model.namespace, `model's namespace is undefined`);
  invariant(typeof model.namespace === 'string', `model's namespace should be string, but got ${typeof model.namespace}`);
  
  const duplicateModel = models.filter((mod: RModal) => mod.namespace === model.namespace);
  invariant(duplicateModel.length <= 1, `model's namespace should be unique, but now got the same namespace length = ${duplicateModel.length}, with the same namespace is ${model.namespace}`);
  
  if (!this.models[model.namespace]) {
    this.models[model.namespace] = model;
  }
}
```

#### 总结

上述就是整个 [rc-redux-model](https://github.com/SugarTurboS/rc-redux-model) 核心代码，实现不难，我还是期望小伙伴们都能去看源码，当然我的代码写的也不一定是最佳的，希望能给你带来一些思路。

如果你能捋清楚并且看懂源码，那么我们可以实现一个例如著名的 [redux-logger](https://github.com/LogRocket/redux-logger)，我们练手实现它的简易版本，实现起来大同小异，只需要将未修改前的 redux 和修改之后的 redux 打印出来，再把修改的 action 打印出来，一个最小化的 redux 数据打印中间件就完成了。

## 最后

该篇幅特别长，我很想拆成两篇去写，但最后想想还是算了，这篇文章主要是从我为什么要做一个中间件，到我期望做成怎么样，再到做之前的知识储备，及最终的做成什么样。

希望我的一些思考和实现能给你带来一些收获。最后如果你觉得该中间件还行，能给你一些帮助，那我不知廉耻的求个小星星 ✨ [rc-redux-model](https://github.com/SugarTurboS/rc-redux-model) 

