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

#### 1.事件绑定

驼峰命名直接添加即可.

```js
const handler = () => {
  console.log('事件监听执行了')
}

<button onClick={handler}>点击触发事件</button>
```

> 注意: `{}` 里面直接写的就是事件函数名,不要 `()` 调用

#### 2.事件监听传参

方式一: 利用箭头函数内部调用事件函数时,传递参数

```js
const handler = (a, b) => {
  console.log(a, b)
}

<button onClick={() => {handler(1, 2)}}>点击触发事件</button>
```

> 为什么这里不直接用 `handler(1, 2)` 函数调用,还要写个箭头函数呢? 因为直接调用函数,相当于将函数的执行结果(`undefined`)赋值给了 `click` 事件, 而此处需要的是一个事件函数.

方式二: 利用 `bind()` 函数返回一个新的函数, 在事件发生时调用; 此时也可以传递参数.

```js
<button onClick={handler.bind(null, 100, 200)}>点击触发事件</button>
```

#### 3.获取事件对象

默认情况下, 不需要传递实参, 形参列表第一个参数, 默认就是事件对象.

利用箭头函数执行事件监听, 需要通过箭头函数将 ev 传递给事件监听函数.

```js
const handler = (ev) => {
  console.log(ev)
}

<button onClick={handler}>点击触发事件</button>
<button onClick={(ev) => {handler(ev)}}>点击触发事件</button>
<button onClick={handler.bind(null)}>点击触发事件</button>
```

利用 `bind` 方法时, 如果有参数传递, 则最后一个形参默认是事件对象; 如果没有参数传递, 则第一个形参是事件对象.

```js
// 可以使用最后一个形参,直接接收
const handler = (a, b, ev) => {
  console.log(a, b)
  console.log(ev)
}

<button onClick={handler.bind(null, 10, 20)}>点击触发事件</button>
```

### 循环数据

JSX 当中可以直接将数组中的数据解构

```js
const arr = [<p>1</p>, <p>22</p>, <p>333</p>]

function App() {
  return (
    <div>{arr}</div>
  )
}
```

循环对象数组

```js
const arr = [
  {
    name: 'jack',
    age: 40,
    salary: 10000
  },
  {
    name: 'john',
    age: 18,
    salary: 20000
  }
]

function App() {
  const ret = arr.map(item => {
    return <li>{item.name}</li>
  })
  return <ul>{ret}</ul>
}

export default App;
```

循环对象数组,完整代码如下:

```js
const arr = [
  {
    id: 1,
    name: 'jack',
    age: 40,
    salary: 10000
  },
  {
    id: 2,
    name: 'john',
    age: 18,
    salary: 20000
  }
]

function App() {
  const ret = arr.map(item => {
    return(
      <li key={item.id}>
        <span>{item.name} - </span>
        <span>{item.age} - </span>
        <span>{item.salary}</span>
      </li>
    )
  })
  return <ul>{ret}</ul>
}

export default App;
```

### 设置内联样式

设置样式的时候, 应该将键值对放入对象中(`{}`)进行管理.

```js
<div style={{width: '100px'}}>样式处理</div>
```

内联样式默认不支持伪类和媒体查询样式设置.

> 可以借助第三方包 `radium` 进行设置.

```js
import Radium from "radium";
// ...
export default Radium(App);
```

> 导入 Radium 函数, 将当前需要支持伪类操作的组件包裹之后再导出.

### 设置外联样式


### 创建组件


### 向组件传递数据


### 设置 props 默认值


### 验证 props 数据类型


### 向组件传递 JSX


### 组件布局实例










