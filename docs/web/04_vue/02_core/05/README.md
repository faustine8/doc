# 项目笔记

## 搭建项目架构

### 项目准备

```shell
# 创建项目
vue create edu-boss-fed
# 选择手动
# 选择 Babel,Router,Vuex,CSS Pre-processors,Linter,
# 不使用 history 模式
# 使用 Scss
# 使用 ESLint+Standard
# 使用 ESLint on commit + save
# 使用单独文件保存 config
# 不作为预设
```

#### 目录结构说明

```
.
├── README.md               说明⽂档
├── .browserslistrc         指定项⽬的⽬标浏览器范围，会被 @babel/preset-env 和 Autoprefixer ⽤来确定要转移的 JS 特性与 CSS 前缀
├── .editorconfig           编辑器配置⽂件，⽤来维护跨编辑器（或 IDE）的统⼀代码⻛格
├── .eslintrc.js            ESLint 配置⽂件
├── .gitignore              Git 的忽略配置⽂件
├── babel.config.js         Babel 配置⽂件
├── jsconfig.json
├── lint-staged.config.js
├── node_modules            第三方包存储目录
├── package-lock.json       第三⽅包的说明⽂件，记录包的依赖信息等内容
├── package.json            记录包安装时的版本号
├── public                  静态资源⽬录，内部的静态资源都会被简单的复制，⽽不经过 webpack
│     ├── favicon.ico
│     └── index.html
├── src
│     ├── App.vue     根组件，最终被渲染到 index.html 中的 #app
│     ├── assets      资源⽬录，存储图⽚等资源
│     │     └── logo.png
│     ├── components  组件⽬录
│     │     └── HelloWorld.vue
│     ├── main.js     ⼊⼝⽂件
│     ├── router      路由模块⽬录
│     │     └── index.js
│     ├── store       容器模块⽬录（Vuex）
│     │     └── index.js
│     └── views       路由⻚⾯组件⽬录
│         ├── AboutView.vue
│         └── HomeView.vue
└── vue.config.js
```

#### 调整初始目录

Vue CLI 初始化的项⽬中有许多示例⽂件，应予以删除；同时根据需求增加或修改其他⽂件与⽬录。

要删除默认的初始化⽂件

- `src/assets/logo.png`
- `src/components/HelloWorld.vue`
- `src/views/About.vue`
- `src/views/Home.vue`

新增以下⽬录：

- `src/services` ⽬录，⽤于存放接⼝功能模块
- `src/styles` ⽬录，⽤于存放全局样式
- `src/utils` ⽬录，⽤于存放⼯具模块


### 代码规范与风格指南

规范的代码具有更好的阅读性、更好的可维护性，更利于多⼈协作开发。

常⻅的"代码标准":

- JavaScript Standard Style
- Airbnb JavaScript Style Guide

如果希望团队开发者都遵守同⼀个代码规范，不能只靠⼝头约定，⽽是要通过⼯具进⾏约束，ESLint 是⾮常流⾏的代码校验⼯具。

---

#### `eslint-plugin-vue`

Vue 官⽅提供的 ESLint 插件。

⽤于查找 `<template>`、 `<script>`、 `.vue` ⽂件中的：

- 语法错误
- Vue.js 指令的错误⽤法
- 违反 Vue ⻛格指南的代码

#### `@vue/eslint-config-standard`

官⽅⽂档：<https://standardjs.com/readme-zhcn.html>

是⼀种⽆需配置，可便捷的统⼀代码⻛格的⽅式，具体⻅官⽅⽂档细则。

主要注意，代码不能有分号。

---

设置完毕后，在 `npm run serve` 的服务器启动时保存代码会⾃动对代码进⾏ lint，也可以通过 `npm run lint` 命令执⾏ ESLint 的代码校验与修复。

#### ⾃定义校验规则

ESLint 官⽹ -> ⽤户指南 -> 规则 中提供了每种规则的⽤法以及⽀持的选项。

ESLint 中⽂官⽅⽂档：<https://cn.eslint.org/>

⾸先得到规则名称(常⻅于报错时，示例为代码添加 ; 报错)

```
ERROR  Failed to compile with 1 error  

[eslint] 
/Users/faustine/Code/github/vue-demo-projects/edu-boss-fed/src/router/index.js
  13:3  error  Extra semicolon  semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

ESLint 配置⽂件的 `rules` 属性可以对规则进⾏⾃定义设置，例如关闭分号的报错。

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'off', // 关闭加分号报错
    'semi': ['error', 'always'], // 开启不加分号报错
  }
}
```

修改 ESLint 配置⽂件后，需要重启(静态⽂件服务器)⽣效。

注意: 如果修改规则后，重启却不⽣效，可以将 `node_modules/.cache` 的规则缓存⽬录删除后重启即可。

### 样式与布局

#### Element 组件库

Element 是饿了么官⽅提供的组件库，⾮常适合开发后台管理系统等相关类型的项⽬。

官⽹：<https://element.eleme.cn/>

GitHub 仓库：<https://github.com/ElemeFE/element>

```shell
# 安装
npm i element-ui -S
```

在 `main.js` 中导⼊

element-ui 中有许多组件，引⼊是可以采⽤两种⽅式，完整引⼊或按需引⼊，不同的引⼊⽅式根据组件的使⽤数量决定，最终影响打包后的⽂件体积。这⾥的项⽬采⽤完整引⼊⽅式。

```js
// 引入 Element
import ElementUI from 'element-ui'
// 引入 Element 的主题文件
import 'element-ui/lib/theme-chalk/index.css'

// 将 Element 注册为 Vue 插件
Vue.use(ElementUI)
```


---

子组件什么时候应该放到 `components` 目录中呢？答：如果单独不能形成一个页面，只是页面中的一个小功能区域，这种情况就可以放到 components 目录中。

那什么时候和 `index.vue` 同级来写呢？答：如果组件是一个独立页面，能够独当一面，就可以直接和 `index.vue` 同级别书写。

## Vuex

虽然完成了登录功能，但实际上现在的后台不登录也能访问(访问对应 URL), 这种"有⻔⽆墙"的情况好像让我们实现的登录功能变得毫⽆意义。

为了让登录变得有意义：

1. 应当在⽤户登录成功后给⽤户⽣成⼀个标记(令牌), 并将这个令牌保存起来。
2. 在⽤户访问任意需要登录的⻚⾯(组件)时都去**验证令牌**；
3. 从⽽识别⽤户是否登录或是否有权访问对应功能。
   1. 成功时，访问组件。
   2. 失败时，进⾏提示。
   
如何能够让 `login` 组件中的数据可以被任意其他组件访问呢？这时可以使⽤ Vue 官⽅的状态管理⼯具 Vuex。

---

Vuex 是⼀个专为 Vue.js 应⽤程序开发的状态管理模式。

Vuex ⽂档：<https://vuex.vuejs.org/zh/>

- Vuex 是专⻔为 Vue.js 设计的状态管理库
- 采⽤集中式的⽅式存储需要共享的数据
- 本质就是⼀个 JavaScript 库
- ⽤来解决复杂组件通信，数据共享的问题

简单来说，Vuex ⽤来统⼀存储需要在多个组件间共享的状态(数据)，状态可以被任意组件操作，使组件通信变得易如反掌。

如何判断是否需要使⽤ Vuex？

- 多个视图依赖于同⼀状态。
- 来⾃不同视图的⾏为需要变更同⼀状态。

### 安装与基本使用

```shell
npm i vuex -S
```

> 使⽤ Vue CLI 创建项⽬时可以在项⽬选项中选择 Vuex，这时就⽆需单独安装了。

创建 Vuex 实例 `store`，`store` 通常称为"容器"。

```js
// store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 创建⼀个 Vuex 容器实例，⽤来存储需要在组件中共享的状态
const store = new Vuex.Store({
  state: {
    count: 0
  }
});

export default store;
```

在根 Vue 实例中引⼊ Vuex 作为插件。

```js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

> 我们的项⽬通过 Vue CLI 创建时选择了 Vuex，所以创建与引⼊已经被 Vue CLI ⾃动完成了。

通过 `Vue.use()` 引⼊ Vuex 后，Vuex 的功能被注⼊到根实例下的所有⼦组件中，可通过 `$store` 访问内部功能。

### State

容器中的 `state` ⽤于存储需要在组件间共享的数据，特点如下：

- 容器中的数据可以被任意组件访问。
- 容器中的数据为响应式数据。

> 在浏览器中查看 Vue DevTools 的 Vuex 选项卡可以看到 Vuex 管理的状态。

### Mutation

> 更改 Vuex 的 `store` 中的状态的唯⼀⽅法是提交 `mutation`。Vuex 中的 `mutation` ⾮常类似于事件：每个 `mutation` 都有⼀个字符串的事件类型(type)和⼀个回调函数 (handler)。这个回调函数就是我们实际进⾏状态更改的地⽅，并且它会接受 state 作为第⼀个参数 -- 官方文档。

简单来说，如果要修改 Vuex 中的 `state`，必须提前定义 Mutation 函数，需要时再进⾏提交(触发)。

Mutation 接收 `state` 对象为第⼀个参数，⽤于操作 `state` 内的数据。

```js
export default new Vuex.Store({
  state: {
    user: 100
  },
  getters: {
  },
  mutations: {
    etUser (state) {
       state.user++
    }
  },
  actions: {
  },
  modules: {
  }
})
```

在组件中通过 `vm.$store.commit('Mutation名称')` 提交 Mutation，执⾏操作。

```js
// login/index.vue
methods: {
 async onSubmit () {
   console.log(this.$store.state.user)
   this.$store.commit('setUser')
   console.log(this.$store.state.user)
   ...
  }
}
```

Mutation 还接收 `提交载荷(payload)`作为第⼆个参数，指的是 `commit()` 传⼊的额外数据，常在需要根据上下⽂数据修改 `state` 时使⽤。

```js
// store/index.js
mutations: {
  setUser (state, payload) {
  state.user = payload
  }
}

// login/index.vue
methods: {
  async onSubmit () {
    this.$store.commit('setUser', '示例内容')
    ...
  }
}
```

Mutation 的设置⽅式使 Vuex 的状态修改有迹可循，易于维护。

假想⼀下，如果 `state` 可以通过赋值修改，⼀旦出错将⽆从下⼿。

除此以外，Vue DevTools 还提供了⽤于 Vuex 更⾼级的调试⽅式 Time Travel。

**Mutation 必须为同步函数**

由于 DevTools 提供了 Mutation ⽇志功能，为了确保功能正常，内部不能存在异步任务，否则 DelTools 将⽆法得知 Mutation 的准确调⽤顺序。
如果需要进⾏异步操作，则需要使⽤ Vuex 的 Action。

> 如果不使用 action, 直接在 mutation 中多次调用异步方法(如: setTimeout), 会不被识别，还是会直接按照代码书写顺序执行。

### Action

> 将含有异步的操作放到 `action` 中，将同步功能放到 `mutation` 当中，将同步和异步的代码分成两部分，这样才能让代码正常的调试。

Action 类似于 mutation，不同在于：

- Action 提交的是 `mutation`，⽽不是直接变更状态。
- Action 可以包含任意异步操作。

Action 函数接受⼀个与 `store` 实例具有相同⽅法和属性的 `context` 对象，因此你可以调⽤ `context.commit` 提交⼀个 mutation。

```js
// store/index.js
actions: {
  addAction (context) {
    setTimeout(function () {
      context.commit('setUser')
    }, 1000)
  }
}
```

> 这就是将需要异步的操作(`setTimeout`)放在 `actions` 中，将同步的操作(`setUser`)放在 `mutations` 中。
> 此时，如果在组件中多次调用异步功能，能够按照时间顺序正常执行和正常呗 Vuex 监控。

Action 通过 `vm.$store.dispatch` ⽅法触发，参数1为 `action` 名称，参数2为 `payload`.

```js
// login/index.vue
methods: {
  async onSubmit () {
    this.$store.dispatch('addAction')
    ...
  }
}
```

> Vuex 核⼼概念还有 Getter 与 Module 功能，可通过⽂档学习。

---

在声明周期钩子中，都不建议直接书写业务逻辑，建议仅仅调用封装好的方法。
具体功能如何实现，在 `methods` 里面去处理。如果后期需要修改，只需要到 `methods` 中去找具体的功能就可以了。

---

```html
<el-dropdown-item
    divided
    @click.native="handleLogout"
>退出</el-dropdown-item>
```

表示将点击事件绑定到根元素上。

这里的 `<el-dropdown-item>` 并不是原生的标签，Element 的所有自定义标签，最终渲染到页面上都是一个个的 `class` 属性的值。
通过元素审查可以发现，最终这个标签渲染到页面上实际上是一个 `<li>`, `.native` 修饰符的意思是"将当前事件绑定到根元素上", 
在页面上就是这个最终渲染出来的拥有 `el-dropdown-item` 的 class 属性的 `<li>` 标签元素。

---

新增或保存接口,调用不成功的时候,看看是不是添加了 `id` 属性? 


