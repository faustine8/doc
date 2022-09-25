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

需要注意模板内容的渲染位置:

```html
<div id="app">
  <com-a>
    这里只能访问父组件的数据
    {{ parValue }}
  </com-a>
</div>
```

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

我们可以在 `<slot>` 中为插槽设置默认值，也称为后备内容。

```js
const ComA = {
  tmplate: `
    <div>
      <p>组件 A: </p>
      <slot>这是默认文本</slot>
    </div>
  `,
  data() {
    return {
      value: '子组件数据'
    }
  }
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
      <slot :value="value">这是默认文本</slot>
    </div>
  `,
  data() {
    return {
      value: '子组件数据'
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

如果只存在默认插槽，同时又需要接收数据，可以进行简写:

```html
<div id="app">
  <com-a v-slot:default="dataObj">
    {{ dataObj.value }}
  </com-a>
</div>
```

```html
<div id="app">
  <com-a v-slot="dataObj">
    {{ dataObj.value }}
  </com-a>
</div>
```

还可以通过 ES6 的解构操作进行数据接收。

```html
<div id="app">
  <com-a v-slot="{ value }">
    {{ value }}
  </com-a>
</div>
```

## 内置组件

### 动态组件

动态组件适用于多个组件频繁切换的处理。

`<component>` 用于将一个'元组件'渲染为动态组件，以 `is` 属性值决定渲染哪个组件。

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

`is` 属性会在每次切换组件时，Vue 都会创建一个新的组件实例。

```js
const ComA = { template: `<div>A组件的内容: <input type="text"></div>` };
const ComB = { template: `<div>B组件的内容: <input type="text"></div>` };
const ComC = { template: `<div>C组件的内容: <input type="text"></div>` };
```

### keep-alive 组件

主要用于保留组件状态或避免组件重新渲染。

```html
<keep-alive>
  <component :is="currentCom"></component>
</keep-alive>
```

`include` 属性用于指定哪些组件会被缓存，具有多种设置方式。

```html
<keep-alive include="ComA,ComB,ComC">
  <component :is="currentCom"></component>
</keep-alive>
```

```html
<keep-alive include="['ComA','ComB','ComC']">
  <component :is="currentCom"></component>
</keep-alive>
```

```html
<keep-alive include="/Com[ABC]/">
  <component :is="currentCom"></component>
</keep-alive>
```

`exclude` 属性用于指定哪些组件不会被缓存。

```html
<keep-alive exclude="ComD/">
  <component :is="currentCom"></component>
</keep-alive>
```

`max` 属性用于设置最大缓存个数。

```html
<keep-alive max="5">
  <component :is="currentCom"></component>
</keep-alive>
```

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
