# Vue.js 组件

## 组件插槽

组件插槽可以便捷的设置组件内容。

```html
<div id="app">
  <com-a>
    示例内容
    <span>组件的主体内容</span>
  </com-a>
</div>
```

### 单个插槽

如果我们希望组件标签可以像 HTML 标签一样设置内容，那么组件的使用灵活度会很高。

```html
<div id="app">
  <p>示例内容1</p>
  <com-a>示例内容2</com-a>
</div>
```

但平常我们书写的组件，组件首尾标签中书写的内容会被抛弃。

```html
<div id="app">
  <com-a></com-a>
</div>
```

我们需要通过 `<slot>` 进行插槽设置。

```js
Vue.component('com-a', {
  template: `
    <div>
      <h3>组件标题</h3>
      <slot></slot>
    </div>
  `
});
```

```html
<div id="app">
  <com-a>
    示例内容
    <span>组件的主体内容</span>
  </com-a>
</div>
```

添加了 `<slot>` 标签之后，可以在组件标签内部添加任意的内容，这些内容最终会替换掉模板中的 `<slot>` 标签。
在标签内部可以写任意的文本内容，既可以是普通文本也可以是 HTML 标签。

---

需要注意模板内容的渲染位置:

```html
<div id="app">
  <com-a>
    这里只能访问父组件的数据
    {{ parValue }}
  </com-a>
</div>
```

> 为什么只能访问父组件的数据？ 因为当前代码就是写在父组件当中的。

在父组件的视图模板中，只能使用父组件的数据，不能访问子组件内部的数据。

```js
new Vue({
  el: '#app',
  data: { parValue: '父组件数据' },
  components: {
    ComA
  }
})
```

```js
const ComA = {
  tmplate: `
    <div>
      <p>组件 A: </p>
      <slot></slot>
    </div>
  `,
  data() {
    return {
      value: '子组件数据'
    }
  }
}
```

---

我们可以在 `<slot>` 中为插槽设置默认值，也称为后备内容。

```js
const ComA = {
  tmplate: `
    <div>
      <p>组件 A: </p>
      <slot>这是默认文本</slot>
    </div>
  `
}
```

```html
<div id="app">
  <!--使用的时候里面可以什么都不写-->
  <com-a></com-a>
</div>
```

### 具名插槽

如果组件中有多个位置需要设置插槽，据需要给 `<slot>` 设置 `name`，称为具名插槽。

子组件的视图结构如下：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

> `<slot>` 没有写名字的时候，默认名字是 `default`.

在父组件中使用如下：

```html
<com-a>
  <template v-slot:header>
    <h1>组件头部内容</h1>
  </template>
  <template v-slot:default>
    <p>组件主体内容第一段</p>
    <p>组件主体内容第二段</p>
  </template>
  <template v-slot:footer>
    <p>组件底部内容</p>
  </template>
</com-a>
```

> `v-slot` 指令只能在 `<template>` 标签中使用。

---

默认的 `<slot>` 也可以通过如下方式简写: `default` 可以不通过 `<template>` 标签进行指定。

```html
<com-a>
  <template v-slot:header>
    <h1>组件头部内容</h1>
  </template>
  
  <p>组件主体内容第一段</p>
  <p>组件主体内容第二段</p>
  
  <template v-slot:footer>
    <p>组件底部内容</p>
  </template>
</com-a>
```

> 所有没有被 `<template v-slot:xx>` 包裹的内容或者标签结构，最终都会被指定为 `default` 插槽的内容。

`v-slot:` 指令还可以简写为 `#`, 示例代码如下：

```html
<com-a>
  <template #header>
    <h1>组件头部内容</h1>
  </template>
  
  <p>组件主体内容第一段</p>
  <p>组件主体内容第二段</p>
  
  <template #footer>
    <p>组件底部内容</p>
  </template>
</com-a>
```

### 作用域插槽

用于让插槽可以使用子组件的数据。

组件将需要被插槽使用的数据通过 `v-bind` 绑定给 `<slot>`，这种用于给插槽传递数据的属性称为插槽 `prop`。

```js
const ComA = {
  template: `
    <div>
      <p>组件 A:</p>
      <slot :value="value" :num="num">这是默认文本</slot>
    </div>
  `,
  data() {
    return {
      value: '子组件数据',
      num: 100
    }
  }
}
```

组件绑定数据后，插槽中需要通过 `v-slot` 接收数据。

```html
<div id="app">
  <com-a>
    <template v-slot:default="dataObj">
      {{ dataObj.value }}
    </template>
  </com-a>
</div>
```

> `v-slot:default` 代表的是接收默认插槽的数据; 通过后面 dataObj 接收的是所有插槽 prop 的数据。

> 如果在子组件中绑定了多个值，最终都可以通过 dataObj 这一个对象接收到所有的数据；以当前为例，dataObj 接收的数据为 `{value: '子组件数据', num: 100}`。

---

如果只存在默认插槽，同时又需要接收数据，可以进行简写:

```html
<div id="app">
  <com-a v-slot:default="dataObj">
    {{ dataObj.value }}
  </com-a>
</div>
```

> 如果只存在默认插槽，可以省略 `<template>` 标签，直接将 `v-slot` 指令放在组件标签中。

```html
<div id="app">
  <com-a v-slot="dataObj">
    {{ dataObj.value }}
  </com-a>
</div>
```

> `v-slot:default` 也可以进一步简化为 `v-slot`

> 前面说 `v-slot:default` 可以简化为 `#default`, 现在又说 `v-slot:default` 可以简化为 `v-slot`, 但是 `v-slot:default` 绝对不能超级简化为 `#`。 

---

还可以通过 ES6 的解构操作进行数据接收。

```html
<div id="app">
  <com-a v-slot="{ value }">
    {{ value }}
  </com-a>
</div>
```

> 通过 `v-slot` 接收的 dataObj 也可以通过对象解构的方式，直接获取传递过来的所有数据。

## 内置组件

### 动态组件

动态组件适用于多个组件频繁切换的处理。

`<component>` 用于将一个'元组件'渲染为动态组件，以 `is` 属性值决定渲染哪个组件。

> 元组件就是指普通的组件。

```html
<div id="app">
  <component :is="ComA"></component>
</div>
```

用于实现多个组件的快速切换，例如选项卡效果。

```js
const ComA = { template: `<div>A组件的内容</div>` };
const ComB = { template: `<div>B组件的内容</div>` };
const ComC = { template: `<div>C组件的内容</div>` };
```

```js
new Vue({
  el: '#app',
  data: {
    titles: ['ComA', 'ComB', 'ComC'],
    currentCom: 'ComA'
  },
  components: {
    ComA, ComB, ComC
  }
});
```

```html
<div id="app">
  <button
    v-for="title in titles"
    :key="title"
    @click="currentCom = title"
  >{{ title }}</button>
  <component :is="currentCom"></component>
</div>
```

> `:is` 属性指定的谁，谁就显示(就是将 `<component>` 标签替换成整个组件)。`:is` 指定的内容是一个组件对象。

---

`is` 属性会在每次切换组件时，Vue 都会创建一个新的组件实例。

> 组件 A 切换到组件 B: 卸载组件 A => 创建组件 B => 挂载组件 B

```js
const ComA = { template: `<div>A组件的内容: <input type="text"></div>` };
const ComB = { template: `<div>B组件的内容: <input type="text"></div>` };
const ComC = { template: `<div>C组件的内容: <input type="text"></div>` };
```

> 通过输入框的状态可以发现，输入框的数据是无法被保留的。

### keep-alive 组件

> 前面讲通过动态组件切换的时候，会创建新的组件实例，会卸载的组件的数据也无法保留，keep-alive 组件就是解决这个问题的，让被卸载的组价活下去。

keep-alive 组件主要用于保留组件状态或避免组件重新渲染。

如果希望动态组件在切换时，不进行重新渲染，可以通过 `<keep-alive>` 包裹。代码如下：

```html
<keep-alive>
  <component :is="currentCom"></component>
</keep-alive>
```

> 通过 `<keep-alive>` 标签包围的动态组件，在切换时，就不会被卸载移除；下一次再切换回渲染过的页面时，会读取缓存中的结果。

---

- `include` 属性用于指定哪些组件会被缓存，具有多种设置方式。

```html
<keep-alive include="ComA,ComB,ComC">
  <component :is="currentCom"></component>
</keep-alive>
```

> 注意：`include` 这种写法的时候，每个组件名之间不要加空格。

```html
<keep-alive :include="['ComA','ComB','ComC']">
  <component :is="currentCom"></component>
</keep-alive>
```

> 通过 `v-bind:include` 的方式写的时候，可以使用数组、正则。

```html
<keep-alive :include="/Com[ABC]/">
  <component :is="currentCom"></component>
</keep-alive>
```

---

- `exclude` 属性用于指定哪些组件不会被缓存。

```html
<keep-alive exclude="ComD">
  <component :is="currentCom"></component>
</keep-alive>
```

只有 `exclude` 指定的组件不背缓存，其他的组件都会被缓存。

指定多个排除组件的时候也和 `include` 一样有三种书写方式。

---

- `max` 属性用于设置最大缓存个数。

```html
<keep-alive max="5">
  <component :is="currentCom"></component>
</keep-alive>
```

也就是只会缓存最近操作的 `max` 个动态组件，用于动态组件的选项比较多的情况。

### 过渡组件

用于在 Vue 插入、更新或者移除 DOM 时， 提供多种不同方式的应用过渡、动画效果。

#### transition 组件

用于给元素和组件添加进入/离开过渡:

- 条件渲染 (使用 v-if )
- 条件展示 (使用 v-show )
- 动态组件
- 组件根节点

---

组件提供了 6个 class，用于设置过渡的具体效果。

进入的类名:

- `v-enter`
- `v-enter-to`
- `v-enter-active`

离开的类名:

- `v-leave`
- `v-leave-to`
- `v-leave-active`


```html
<transition>
  <p v-if="showDemo">hello world</p>
</transition>
```

```css
.v-enter-active, v-leave-active {
  transition: all .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
```

##### 相关属性

给组件设置 `name` 属性，可用于给多个元素、组件设置不同的过渡效果，这时需要将 `v-` 更改为对应 `name-` 的形式。

例如: `<transition name="demo">` 的对应类名前缀为:

- `demo-enter`
- `demo-leave`
- ...

通过 `appear` 属性，可以让组件在初始渲染时实现过渡。

```html
<transition appear>
  <p v-if="showDemo">hello world</p>
</transition>
```

#### 自定义过渡类名

自定义类名比普通类名优先级更高，在使用第三方 CSS 动画库时非常有用。

用于设置自定义过渡类名的属性如下:

- `enter-class`
- `enter-active-class`
- `enter-to-class`
- `leave-class`
- `leave-active-class` 
- `leave-to-class`

- `appear-class`
- `appear-to-class`
- `appear-active-class`

Animate.css 是一个第三方 CSS 动画库，通过设置类名来给元素添加各种动画效果。

使用注意:

- `animate__` 前缀与 compat 版本
- 基础类名 `animated`

#### transition-group 组件

`<transition-group>` 用于给列表统一设置过渡动画。

- `tag` 属性用于设置容器元素，默认为 `<span>`。
- 过渡会应用于内部元素，而不是容器。
- 子节点必须有独立的 `key`，动画才能正常工作。

当列表元素变更导致元素位移，可以通过 `.v-move` 类名设置移动时的效果。
