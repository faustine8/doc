# React 基础

## React 介绍

### React 是什么?

- React 是 facebook 推出的用于构建用户界面的前端 javascript 框 架
- <https://reactjs.org/>
- React 使用*组件*构建用户界面

### 组件是什么?

![组件](./assets/README-1668419864680.png)

一块区域，包含了 HTML CSS 及 JavaScript

### 组件开发的优势

- 将一个庞大复杂的应用程序拆分成多个独立单元
- 组件之间互相独立，有利于应用程序的维护
- 组件可以重用，一次编写多地复用

## React 开发环境搭建

安装脚手架

```shell
npx create-react-app reactproject
```

## JSX 入门

### JSX 语法

1. JSX 可以看作是 JS 语言的扩展，既不是字符串，也不是 HTML
2. 但是他具备了 JS 所有的功能，同时还可以被转为 HTML 在界面上进行展示。

- 动态显示数据 `{}`
- 调用方法 (自定义+内置)
- 支持表达式 (支持三元运算符)
- 支持模板字符串

```js
const name = 'JackyLove'
const flag = false
const obj = { name: 'jack', age: 18 }

function sayHello() {
  return 'Hello'
}

function App() {
  return (
    <div>
      {/*显示动态数据*/}
      <p>{name}</p>
      {/*显示普通字符串*/}
      <p>name</p>
      {/*调用自定义方法*/}
      <p>{sayHello()}</p>
      {/*调用内置方法*/}
      <p>{console.log('111')}</p>
      <p>{Math.random()}</p>
      {/*表达式*/}
      <p>{1 + 2 + 3}</p>
      {/*三元运算符*/}
      <p>{flag ? '已登录' : '执行登陆'}</p>
      {/*模板字符串*/}
      <p>{`hello, ${name}`}</p>
      {/*注释写法*/}
      <p>123{/*这里是注释的内容，页面渲染的时候不会展示注释的内容*/}</p>
      {/*对象展示，注意不能直接打印对象，需要转成 JSON 字符串*/}
      <p>{JSON.stringify(obj)}</p>
    </div>
  )
}
```

---

JSX 本身就是一个表达式 (既然是表达式,那运算后会有一个结果,所以可以把它赋值给一个变量; 同样,也可以当成参数传递)

```js
const name = <div>JackyLove</div>

function App() {
  return (
    <div>
      {name}
    </div>
  )
}
```

此时页面渲染结果为:

```html
<div>
    <div>JackyLove</div>
</div>
```

---

JSX 添加属性

- 字符串属性,直接用双引号包裹

```js
<p title="自定义标题">添加属性</p>
```

- 动态属性

```js
const age = '动态标题'

function App() {
  return (
    <div>
      <p title={age}>添加动态属性</p>
    </div>
  )
}
```

---

JSX 添加子元素

> 简单说: `return` 后面的就是 JSX

注意: JSX 的返回值中,只能有一个父元素.

JSX 中也区分单标签和双标签, 单标签需要正确关闭, 如: `<img />`

### JSX 事件操作


### 循环数据


### 设置内联样式


### 设置外联样式


### 创建组件


### 向组件传递数据


### 设置 props 默认值


### 验证 props 数据类型


### 向组件传递 JSX


### 组件布局实例










