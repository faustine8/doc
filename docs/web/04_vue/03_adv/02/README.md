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
















