# Virtual DOM

- 了解什么是虚拟 DOM，以及虚拟 DOM 的作用
- Snabbdom 的基本使用
- Snabbdom 的源码解析

## 什么是 Virtual DOM

- Virtual DOM(虚拟 DOM)，是由普通的 JS 对象来描述 DOM 对象
- 真实 DOM 成员

```js
let element = document.querySelector('#app')
let s = ''
for (var key in element) {
    s += key + ','
}
// 真实 DOM
console.log(s)
```

使用 Virtual DOM 来描述真实 DOM

```js{}
{
    sel: 'div',
    data: {},
    children: undefined,
    text: "Hello Virtual DOM",
    elm: undefined,
    key: undefined
}
```

### 为什么要使用 Virtual DOM

- 前端开发刀耕火种的时代
- MVVM 框架解决视图和状态同步问题
- 模板引擎可以简化视图操作，没办法跟踪状态
- 虚拟 DOM 跟踪状态变化
- 参考 github 上 virtual-dom 的动机描述
  - 虚拟 DOM 可以维护程序的状态，跟踪上一次的状态
  - 通过比较前后两次状态差异更新真实 DOM

---

案例演示: 通过演示对比效果

## 虚拟 DOM 的作用

- 维护视图和状态的关系
- 复杂视图情况下提升渲染性能
- 跨平台
  - 浏览器平台渲染DOM
  - 服务端渲染 SSR(Nuxt.js/Next.js)
  - 原生应用(Weex/React Native)
  - 小程序(mpvue/uni-app)等

## 虚拟 DOM 库

### Snabbdom

- Vue.js 2.x 内部使用的虚拟 DOM 就是改造的 Snabbdom
- 大约 200 SLOC (single line of code)
- 通过模块可扩展
- 源码使用 TypeScript 开发
- 最快的 Virtual DOM 之一 

### virtual-dom

## Snabbdom 基本使用

### 创建项目

安装 parcel

```shell
# 创建项目目录
md snabbdom-demo
# 进入项目目录
cd snabbdom-demo
# 创建 package.json
npm init -y
# 本地安装 parcel
npm install parcel-bundler -D
```

配置 scripts

```json
"scripts": {
  "dev": "parcel index.html --open",
  "build": "parcel build index.html"
}
```

目录结构

### 导入 Snabbdom

#### Snabbdom 文档

看文档的意义

- 学习任何一个库都要先看文档
- 通过文档了解库的作用
- 看文档中提供的示例，自己快速实现一个 demo
- 通过文档查看 API 的使用

Snabbdom 文档

- <https://github.com/snabbdom/snabbdom>
- 当前版本 v2.1.0

---

#### 导入

安装 Snabbdom

```shell
npm intall snabbdom@2.1.0
```

导入 Snabbdom

Snabbdom 的两个核心函数 `init` 和 `h()`

- `init()` 是一个高阶函数，返回 `patch()`
- `h()` 返回虚拟节点 VNode，这个函数我们在使用 Vue.js 的时候见过

文档中导入的方式

```js
import { init } from 'snabbdom/init'
import { h } from 'snabbdom/h'
const patch = init([])
```

实际导入的方式

parcel/webpack 4 不支持 package.json 中的 `exports` 字段

```js
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'
```

### Snabbdom 中的模块

#### 模块的作用

- Snabbdom 的核心库并不能处理 DOM 元素的属性/样式/事件等，可以通过注册 Snabbdom 默认提供的模块来实现
- Snabbdom 中的模块可以用来扩展 Snabbdom 的功能
- Snabbdom 中的模块的实现是通过注册全局的钩子函数来实现的

#### 官方提供的模块

- attributes
- props
- dataset
- class
- style
- eventlisteners

#### 模块的使用步骤

- 导入需要的模块
- `init()` 中注册模块
- `h()` 函数的第二个参数处使用模块
