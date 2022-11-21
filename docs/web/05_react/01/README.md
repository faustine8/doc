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

#### 全局外联样式

> 所有组件中,都可以直接使用.

在 style.css 文件中定义样式

```css
body {
    background-color: orange;
}

.box {
    width: 100px;
    height: 100px;
    background-color: seagreen;
}
```

在 index.js 中导入样式

```js
import './style.css';
```

在组件中使用样式

```js
<div className={'box'}>外联样式</div>
```

#### 组件级别的外联样式

只有某一个组件可以使用.

> 定义组件级外联样式的命名规范: `组件名.module.css`

定义组件级样式 Test.module.css

```css
.item {
    background-color: red;
    width: 100px;
    height: 100px;
}
```

使用组件级样式

```js
import style from './Test.module.css';

<p className={style.item}>Test中的p，使用自己的样式</p>
```

#### JS 中整合 CSS

```shell
# 安装插件
npm i styled-components
```

```js
import styled from "styled-components";

// 自定义标签
const SectionDiv = styled.div.attrs({
    // 添加自定义属性
    className: 'box1 box2'
})`
  width: 100px;
  height: 100px;
  background-color: hotpink;
`

function Test() {
  return(
    <div>
      <SectionDiv />
    </div>
  )
}

export default Test
```

### 创建组件

#### 1.创建函数组件

```js
function App() {
  return(
    <div>创建组件</div>
  )
}

export default App;
```

#### 2.创建类组件

定义

```js
import React, { Component, Fragment } from "react";

class About extends Component{
    render() {
        return(
            <Fragment>这是About组件中的内容</Fragment>
        )
    }
}

export default About

```

使用

```js
import About from "./About";

function App() {
  return(
    <div>
      <About />
    </div>
  )
}

export default App;
```

注意:

1. 必须继承 `Component` 类
2. 组件名称的首字母必须大写, 在 React 当中可以用于区分组件和普通的标记
3. 定义的时候,必须要有一个根元素. 如果不希望嵌套组件过多导致 `<div>` 层级过深, 可以使用 `<Fragment>` 标签作为根元素.

> 导入了 `Fragment` 时, 在使用的时候可以简写为 `<></>`.(语法糖)

### 向组件传递数据

1. 在组件身上添加属性,然后传递数据

```js
// 组件定义-类组件
import React, {Component} from "react";

class Header extends Component {
  // 在类组件中，存在一个 props 属性，外部所传递进来的数据，都可以通过它访问
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    )
  }
}

export default Header
```

```js
// 使用组件
<Header name={"Jack"} age={100}/>
```

```js
// 组件定义-函数式组件
import React from "react";

function About(props) { // 函数声明时,添加一个形参,用于接收"使用组件时传递的参数"
  return(
    <div>
      <p>{ props.a }</p>
      <p>{ props.b }</p>
    </div>
  )
}

export default About
```

```js
// 使用组件
<About a={10} b={100}/>
```

2. 传递对象

> 使用较多. 将数据进行统一管理, 然后利用 `...` 展开操作, 直接传递给对应的组件.

```js
// 类组件-定义
class Header extends Component{
  // 在类组件中，存在一个 props 属性，外部所传递进来的数据，都可以通过它访问
  render() {
    const { name, age } = this.props
    return(
      <div>
        <p>{ name }</p>
        <p>{ age }</p>
      </div>
    )
  }
}

// 使用
const obj = {
  name: 'john',
  age: 19
}
<Header {...obj}/>
```

```js
// 函数式组件-定义
function About({ name, age }) {
  return(
    <div>
      <p>{ name }</p>
      <p>{ age }</p>
    </div>
  )
}

// 使用
<About {...obj}/>
```

总结:

- 函数式组件: 在函数组件内部,可以接收到外部的数据,内部直接访问即可.
- 类组件: 在类组件内部,存在一个 props 属性, 外部传递的数据都存放在其中, 我们可以直接使用.

### 设置 props 默认值

1. 针对函数式组件, 如果想要设置默认的 props 属性值, 则直接通过 `组件名.defaultProps = {}` 来设置

```js
About.defaultProps = {
  name: 'john',
  age: 10
}
```

2. 针对类组件, 可以直接定义 `static defaultProps = {}` 来管理, 需要设置默认值的属性

```js
class Header extends Component{

  static defaultProps = {
    name: 'john',
    age: 15
  }

  render() {
    // 在类组件中，存在一个 props 属性，外部所传递进来的数据，都可以通过它访问
    const { name, age } = this.props
    return(
      <div>
        <p>{ name }</p>
        <p>{ age }</p>
      </div>
    )
  }
}
```

### 验证 props 数据类型

为什么要对 `props` 中的属性进行类型校验呢?

安装插件

```shell
npm i prop-types
```

完整代码如下:

```js
import React from "react";
import PropTypes from 'prop-types'

// 第一部分: 组件. 返回 JSX, 最终会被渲染成真实的 DOM
function About({ name, age }) {
  return(
    <div>
      <p>{ name }</p>
      <p>{ age }</p>
    </div>
  )
}

// 第二部分: 数据默认值设置
About.defaultProps = {
  name: 111,
  age: 10
}

// 第三部分: 数据类型校验
About.propTypes = {
  name: PropTypes.string.isRequired, // string 且必填
  age: PropTypes.number
}

export default About
```

### 向组件传递 JSX

总结: 在子组件中接收父组件传递的 JSX 数据, 利用 props 的 children 属性

```js
// 类组件方式
class Header extends Component{
  render() {
    return(
      <div>
        { this.props.children }
      </div>
    )
  }
}

// 函数式组件方式
function About(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
```

```js
// 父组件中使用
<Header>
  <p>Header组件中的 p 标签</p>
  <span>Header组件中的 span 标签</span>
</Header>
<About>
  <p>About组件中的 p 标签</p>
</About>
```

### 组件布局实例










