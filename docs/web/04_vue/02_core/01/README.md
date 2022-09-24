# Vue.js 组件

组件用于封装页面的部分功能，将功能的结构、样式、逻辑代码封装为整体。

提高功能的复用性与可维护性，更好的专注于业务逻辑。

组件使用时为自定义 HTML 标签形式，通过组件名作为自定义标签名。

```html
<div id="app">
  <!--普通 HTML 标签-->
  <p>p 标签内容</p>
  <!--Vue.js 组件-->
  <my-com></my-com>
</div>
```

## 组件注册

### 全局注册

全局注册的组件在注册后可以用于任意实例或组件中。

```js
Vue.component('组件名', {/* 选项对象 */})
```

注意: 全局注册必须设置在根 Vue 实例创建之前。

> 根 Vue 实例，就是 `new Vue({ el: '#app' })` 对象。

### 组件基础

本质上，组件是可复用的 Vue 实例，所以它们可与 `new Vue` 接收相同的选项，例如 `data`、`methods` 以及生命周期钩子等。

仅有的例外是像 `el` 这样根实例特有的选项。

#### 组件命名规则

组件具有两种命名规则:

- `kebab-case: 'my-component'`
- `PascalCase: 'MyComponent'`

```js
Vue.component('my-component-a', {/* 选项对象 */})
Vue.component('MyComponentB', {/* 选项对象 */})
```

注意: 无论采用哪种命名方式，在 DOM 中都只有 `kebab-case` 可以使用。

#### template 选项

template 选项用于设置组件的结构，最终被引入根实例或其他组件中。

```js
Vue.component('MyComponentA', {
  template: `
    <div>
      <h3>组件 A 的标题内容</h3>
    </div>
  `
})
```

注意: 组件必须只有一个根元素。

#### data 选项

`data` 选项用于存储组件的数据，与根实例不同，组件的 `data` 选项必须为函数，数据设置在返回值对象中。

```js
Vue.component('MyComA', {
  template: `
    <h3>{{ title }}</h3>
  `,
  data: function () {
    return {
      title: '示例内容'
    }
  }
})
```

这种实现方式是为了确保每个组件实例可以维护一份被返回对象的独立的拷贝，不会相互影响。

### 局部注册

局部注册的组件只能用在当前实例或组件中。

```js
new Vue({
  // ...
  components: {
    'my-component-a': {
      template: '<h3>{{ title }}</h3>',
      data() {
        return { title: 'a 组件内容示例' }
      }
    },
    'my-component-b': {
      template: '<h3>{{ title }}</h3>',
      data() {
        return { title: 'b 组件内容示例' }
      }
    },
  }
});
```

单独配置组件的选项对象:

```js
const MyComponentA = {/* ... */}
const MyComponentB = {/* ... */}

new Vue({
  el: '#app',
  components: {
    'my-component-a': MyComponentA,
    'my-component-b': MyComponentB
  }
});
```

ES6 的对象属性简写:

```js
new Vue({
  el: '#app',
  components: {
    MyComponentA,
    MyComponentB
  }
});
```

## 组件通信

子组件如何获取父组件中的数据 ?

> 什么事父子组件 ？

父组件如何得知子组件的数据变更 ?

如果是更加复杂的组件关系呢 ?

在组件间传递数据的操作，称为组件通信。

### 父组件向子组件传值

通过子组件的 `props` 选项接收父组件的传值。

```js
Vue.component('my-component', {
  props: ['title'],
  template: '<h3> {{ title }} </h3>'
});
```

注意: `props` 不要与 `data` 存在同名属性。

父组件设置方式如下:

#### Props 命名规则

建议 `prop` 命名使用 `camelCase`，父组件绑定时使用 `kebab-case`。

#### 父组件向子组件传值练习

练习常见操作:

- 通过 v-for 创建组件

#### 单向数据流

父子组件间的所有 `prop` 都是单向下行绑定的。

如果子组件要处理 `prop` 数据，应当存储在 `data` 中后操作。

注意，如果 `prop` 为数组或对象时，子组件操作将会影响到父组件的状态。

### 子组件向父组件传值



### 非父子组件传值



### 其他通信方式




## 组件插槽



## 内置组件


