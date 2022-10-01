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

