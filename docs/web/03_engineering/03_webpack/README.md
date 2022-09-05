## 模块化

JavaScript 的模块化编程

### 模块化演变

#### ⽂件划分⽅式（1999）

具体做法就是将每个功能，各⾃单独放到不同的⽂件中，约定每个⽂件就是⼀个独⽴的模块，使⽤某个模块就是将这个⽂件引⼊到⻚⾯中，然后直接调⽤⽂件中的成员(变量/函数)。

这种⽅式的缺点⾮常明显，所有模块都在全局⼯作，没有私有空间，所有成员，都可以在模块外被访问和修改：

- 污染全局变量
- 命名冲突问题
- 依赖关系不好管理

#### 命名空间⽅式（2002）

虽然命名空间解决了命名冲突问题，但是，仍然有其⾃身的缺点：

- ⼤型项⽬还是不好维护
- 没有解决模块间依赖问题

#### IIFE（2004）

IIFE: Immediately Invoked Function Expression，意为⽴即调⽤的函数表达式。也就是说，声明函数的同时⽴即调⽤这个函数。
我看可以通过⾃执⾏函数实现数据的私有化隔离(函数上下⽂)。

IIFE 不污染全局环境，提供闭包环境，有了私有成员的概念，私有成员只能在模块成员内通过闭包的形式访问。

IIFE 除了提供闭包环境外，还解决了模块依赖管理的问题

例如：通过 IIFE 参数，可以传递依赖模块的内容

#### 模块化（2009）

2009 年，随着 Node.js 的发布，JS 才真正的迎来了模块化时代。

### 模块化规范

模块化规范产⽣的时间表

![模块化规范](./assets/README-1662386343053.png)

模块化规范对应的环境

![模块化规范对应的环境](./assets/README-1662386432133.png)

#### CommonJS

- 简介: CommonJS 规范是 Node.js ⽀持的模块规范。
- 代表产品: ⼩程序
- 语法:
  - `module` 表示当前模块
  - `module.exports` 是 module 的⼀个属性，⽤来导出模块内容(未导出部分是私有内容)
  - `require` ⽤来加载 `exports` 属性导出的内容

#### AMD

- 简介: Asynchronous Module Definition(异步模块规范), 专为浏览器⽽设计。⽤异步加载技术来定义模块和依赖，为了不造成⽹络阻塞。只有当依赖的模块加载完毕，才会执⾏回调。
- 代表产品: Require.js
- 语法:
  - `define` 来定义模块
  - `require` 来加载模块

```js
define(function () {
    return '值'
});

require(['模块名称'], function ('模块变量引⽤') {
    // 代码 
});
```

#### UMD

- 简介: Universal Module Definition。从名字就可以看出来 UMD 做的是⼤⼀统的⼯作，把前后端加载糅合在了⼀起，提供了⼀个前后端统⼀的解决⽅案。⽀持 AMD 和 CommonJS 模式。
- 代表产品: jQuery
- 语法:
  - 先判断是否⽀持 Node.js 模块格式(`exports` 是否存在), 存在则使⽤ CommonJS
  - 再判断是否⽀持 AMD (define 是否存在), 存在则使⽤ AMD ⽅式加载模块
  - 前两个都不存在，则将模块公开到全局(window 或 global)

```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    // ⽅法
    function myFunc() {
    };
    // 暴露公共⽅法
    return myFunc;
}));
```

#### CMD

- 简介: Common Module Definition 的缩写，也是⼀种异步模块定义规范。
- 代表产品: Sea.js
- 语法: `define` 来定义模块, `require` 来加载模块

```js
define(function () {
  return '值'
});

define(function (require, exports, module) {
});
```

#### ES Modules

- 简介: ES Modules 是 2015 年推出的，语⾔层⾯的模块化规范. (与环境⽆关 - 服务器、浏览器中都能使⽤)
- 代表产品: 现代框架(Vue、React)
- 语法: `export` 导出, `import` 引⼊
- 特点:
  - ESM ⾃动采⽤严格模式，忽略 'use strict'
  - 每个 ES Module 都是运⾏在单独的私有作⽤域中
  - ESM 是通过 CORS 的⽅式请求外部 JS 模块的
  - ESM 的 script 标签会延迟执⾏脚本

示例代码:

```js
// 定义⼀个模块（greeting.js）
const helloInLang = {
  en: 'Hello world!',
  es: '你好世界!'
};

const sayHello = function (lang) {
  return helloInLang[lang];
}

// 对外输出
export const greeting = {
  sayHello
};
```

```js
// 引⼊⼀个模块（index.js）
import {greeting} from "./greeting.js";

const res = greeting.sayHello("zh");

console.log(res);
```

使⽤模块时，分两种环境:

浏览器端

```html
<!-- 必须声明 type="module" -->
<script type="module" src="index.js"></script>
```

服务器端(必须在 package.json 中声明 `"type": "module"`)

```json
{
  "type": "module"
}
```

#### 常⻅问题

ES Modules 与 CommonJS 的异同

- ES Modules 中可以导⼊ CommonJS 模块
- CommonJS 中不能导⼊ ES Modules 模块
- CommonJS 始终只会导出⼀个默认成员
- 注意 `import` 不是解构导出对象

AMD 和 CMD 的主要区别

- AMD: 依赖前置, 下载完后, 执⾏加载，所有模块加载完毕进⼊回调. 
- CMD: 就近依赖, 下载完后，并不执⾏加载，回调函数中遇到 `require` 才执⾏加载

### 模块化打包工具

常⻅的前端打包⼯具有三个：Webpack, Parcel, Rollup

#### Webpack

<https://webpack.js.org/>

Webpack ⾃⼰实现了⼀套模块机制，⽆论是 CommonJS 模块的 `require` 语法，还是 ES6 模块的 `import` 语法，都能够被解析，并转换成指定环境的可运⾏代码。
随着 webpack 打包⼯具的流⾏，ES6 语法⼴泛使⽤，后来的开发者对于 AMD CMD 的感知越来越少。

#### Parcel

<https://parceljs.org/>

#### Rollup

<https://rollupjs.org/guide/en/>

## 概述

### 简介


### 核心概念


### 最佳实践

## 基础

### 打包 CSS


### 打包 HTML


### 打包 JS


### 打包图片


### 打包字体


### 资源模块 (Asset Modules)



### 开发服务器 (Dev Server)


## 进阶




## 项目实战

