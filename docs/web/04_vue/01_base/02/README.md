# Vue.js 基础语法

##  Vue 实例

Vue 实例是通过 Vue 函数创建的对象，是使用 Vue 功能的基础。

```js
var vm = new Vue({
  // 选项对象
});
```

## 基础选项

### el 选项

- 用于选取一个 DOM 元素作为 Vue 实例的挂载目标。
- 只有挂载元素内部才会被 Vue 进行处理，外部为普通 HTML 元素。
- 代表 MVVM 中的 View 层(视图)。

值可以是 CSS 选择器格式的字符串或 HTMLElement 实例，但不能为 `<html>` 或 `<body>`。

```js
var vm = new Vue({
  el: '#app'
});
```

```js
var app = document.querySelector('#app')
var vm = new Vue({
  el: app
});
```

---

挂载完毕后，可以通过 `vm.$el` 进行访问。

```js
var vm = new Vue({
  el: '#app'
});

console.log(vm.$el);
```

未设置 `el` 的 Vue 实例，也可以通过 `vm.$mount()` 进行挂载，参数形式与 `el` 规则相同。

```js
var vm = new Vue({});
vm.$mount('#app');
```

### 插值表达式

挂载元素可以使用 Vue.js 的模板语法，模板中可以通过插值表达式为元素进行动态内容设置，写法为 `{{ }}`。

```html
<div id="app">
  <ul>
    <li>计算结果为：{{ 1 + 2 + 3}}</li>
    <li>比较结果为：{{ 2 > 1 ? 2 : 1}}</li>
  </ul>
</div>
```

注意点:

- 插值表达式只能书写在标签内容区域，可以与其它内容混合。
- 内部只能书写 JavaScript 表达式，不能书写语句。

### data 选项

用于存储 Vue 实例需要使用的数据，值为对象类型。

```js
var vm = new Vue({
  el: '#app',
  data: {
    title: '标题内容'
  }
});
```

data 中的数据可以通过 `vm.$data.数据` 或 `vm.数据` 访问。

```js
var vm = new Vue({
  el: '#app',
  data: {
    title: '标题内容'
  }
});

console.log(vm.$data.title);
console.log(vm.title);
```

- `data` 中的数据可以直接在视图中通过插值表达式访问。
- `data` 中的数据为响应式数据，在发生改变时，视图会自动更新。

```html
<div id="app">
  <p>{{title}}</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    title: '标题内容'
  }
});

vm.title = '新的标题内容';
```

`data` 中存在数组时，索引操作与 `length` 操作无法自动更新视图，这时可以借助 `Vue.set()` 方法替代操作。

> 这里这是什么意思？如果要调用方法修改 `data` 中的数组的时候必须要调用 `Vue.set()` 方法修改吗？

```js
var vm = new Vue({
  el: '#app',
  data: {
    contentArr: ['内容1', '内容2', '内容3']
  }
});

Vue.set(vm.contentArr, 0, '生效的新内容');
```

### methods 选项

用于存储需要在 Vue 实例中使用的函数。

```html
<div id="app">
  <p>{{fn(value1}}</p>
  <p>{{fn(value2}}</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    value1: 'a-b-c',
    value2: 'e-f-g'
  },
  methods: {
    fn (value) {
      return value.split('-').join('');
    }
  }
});
```

- `methods` 中的方法可以通过 `vm.方法名` 访问。
- 方法中的 `this` 为 `vm` 实例，可以便捷的访问 `vm` 数据等功能。

## 指令

指令的本质就是 HTML 自定义属性

Vue.js 的指令就是以 `v-` 开头的自定义属性

### 内容处理

####  v-once 指令

使元素内部的插值表达式只生效一次。

```html
<div id="app">
  <p>此内容会随数据变化自动更改：{{content}}</p>
  <p v-once>此内容不会随数据变化自动更改：{{content}}</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '内容文本'
  }
});
```

####  v-text 指令

元素内容整体替换为指定纯文本数据。

```html
<div id="app">
  <p v-text="content">这段内容会被覆盖</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '内容文本'
  }
});
```

####  v-html 指令

元素内容整体替换为指定的 HTML 文本。

```html
<div id="app">
  <p v-html="content">这段内容会被覆盖</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '内容文本'
  }
});
```

> 这俩的区别就像之前学的 innerHTML 和 innerText

### 属性绑定

####  v-bind 指令

`v-bind` 指令用于动态绑定 HTML 属性。

```html
<div id="app">
  <p v-bind:title="title">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    title: '这是title属性内容'
  }
});
```

> bind 后面那个 title 是什么意思？是标签的属性。=> `<p title='这是title属性内容'>标签内容</p>`

Vue.js 还为 `v-bind` 指令提供了简写方式。

```html
<div id="app">
  <p :title="title">标签内容</p>
</div>
```

如果需要一次绑定多个属性，还可以绑定对象。

```html
<div id="app">
  <p v-bind="attrObj">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    attrObj: {
      id: 'box',
      title: '示例内容'
    }
  }
});
```

与插值表达式类似，`v-bind` 中也允许使用表达式。

```html
<div id="app">
  <p :class="'demo' + 3">标签内容</p>
  <p :class="prefix + num">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    prefix: 'demo',
    num: 5
  }
});
```

####  Class 绑定

`class` 是 HTML 属性，可以通过 `v-bind` 进行绑定，并且可以与 `class` 属性共存。

```html
<div id="app">
  <p v-bind:class="cls">标签内容</p>
  <p class="a" :class="cls">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    cls: 'x'
  }
});
```

对于 `class` 绑定， Vue.js 中还提供了特殊处理方式。

```html
<div id="app">
  <p :class="{b: isB, c: isC, 'class-d': true}">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    isB: true,
    isC: false
  }
});
```

对于 `class` 绑定， Vue.js 中还提供了特殊处理方式。

```html
<div id="app">
  <p :class="['a', {b: isB}, 'c']">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    isB: true
  }
});
```

####  Style 绑定

`style` 是 HTML 属性，可以通过 `v-bind` 进行绑定，并且可以与 `style` 属性共存。


```html
<div id="app">
  <p :style="styleObj">标签内容</p>
  <p style="width:100px" :style="styleObj">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    styleObj: {
      width: '200px',
      height: '100px',
      border: '1px solid #ccc'
    }
  }
});
```

当我们希望给元素绑定多个样式对象时，可以设置为数组。

```html
<div id="app">
  <p :style="[styleObj1, styleObj2]">标签内容</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    styleObj1: {
      height: '100px',
      width: '200px'
    },
    styleObj2: {
      border: '1px solid #ccc',
      color: 'blue'
    }
  }
});
```

### 渲染指令

#### v-for 指令

用于遍历数据渲染结构，常用的数组与对象均可遍历。

```html
<div id="app">
  <ul>
    <li v-for="item in arr">{{item}}</li>
  </ul>
  <ul>
    <li v-for="val in obj">{{val}}</li>
  </ul>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    arr: ['内容1', '内容2', '内容3'],
    obj: {
      content1: '内容1',
      content2: '内容2',
      content3: '内容3'
    }
  }
});
```

使用 `v-for` 的同时，应始终指定唯一的 key 属性，可以提高渲染性能并避免问题。

> ????

```html
<div id="app">
  <ul>
    <li v-for="item in items" :key="item.id">{{value}}</li>
  </ul>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    items: [
      {
        id: 1,
        content: '内容1'
      },
      {
        id: 2,
        content: '内容2'
      }
    ]
  }
});
```

通过 `<template>` 标签设置模板占位符，可以将部分元素或内容作为整体进行操作。

```html
<div id="app">
  <template v-for="item in items">
    <span>标签内容</span>
    <span>标签内容</span>
  </template>
</div>
```

#### v-show 指令

用于控制元素显示与隐藏，适用于显示隐藏频繁切换时使用。

```html
<div id="app">
  <p v-show="true">这个元素会显示</p>
  <p v-show="false">这个元素会隐藏</p>
</div>
```

注意: `<template>` 无法使用 `v-show` 指令。

#### v-if 指令

用于根据条件控制元素的创建与移除。

```html
<div id="app">
  <p v-if="false">这个元素不会创建</p>
  <p v-else-if="true">这个元素会创建</p>
  <p v-else>这个元素不会创建</p>
</div>
```

给使用 `v-if` 的同类型元素绑定不同的 `key`。

出于性能考虑，应避免将 `v-if` 与 `v-for` 应用于同一标签。

### 事件处理

> `v-on` 指令

用于进行元素的事件绑定。

```html
<div id="app">
  <p>{{content}}</p>
  <button v-on:clieck="content='新内容'">按钮</button>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '默认内容'
  }
});
```

Vue.js 还为 `v-on` 指令提供了简写方式。

```html
<div id="app">
  <p>{{content}}</p>
  <button @clieck="content='新内容'">按钮</button>
</div>
```

> 总结：属性绑定简写使用 `:`, 事件绑定简写使用 `@`

事件程序代码较多时，可以在 `methods` 中设置函数，并设置为事件处理程序。

```html
<div id="app">
  <p>{{content}}</p>
  <button v-on:clieck="fn">点击修改内容</button>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '默认内容'
  },
  methods: {
    fn() {
      this.content = '新内容';
    }
  }
});
```

设置事件处理程序后，可以从参数中接收事件对象。

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '默认内容'
  },
  methods: {
    fn(event) {
      console.log(event);
    }
  }
});
```

在视图(页面)中可以通过 `$event` 访问事件对象。


```html
<div id="app">
  <p>{{content}}</p>
  <button @clieck="fn(content, $event)">按钮</button>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '默认内容'
  },
  methods: {
    fn(content, event) {
      console.log(content);
      console.log(event);
    }
  }
});
```

### 表单处理

#### 表单输入绑定

`v-model` 指令

用于给 `<input>`、`<textarea>` 及 `<select>` 元素设置双向数据绑定。

首先我们来体验一下双向数据绑定的效果。

#### 输入框绑定

输入框分为单行输入框 `input` 与多行输入框 `textarea`。


```html
<div id="app">
  <p>input 内容为：{{value1}}</p>
  <input type="text" v-model="value1">

  <p>textarea 内容为：{{value2}}</p>
  <textarea v-model="value2"></textarea>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    value1: '',
    value2: ''
  }
});
```

#### 单选按钮绑定

单选按钮的双向数据绑定方式如下:

```html
<div id="app">
  <p>radio 数据为：{{value3}}</p>
  <input type="radio" id="one" value="1" v-model="value3">
  <label for="one">选项一</label>
  <input type="radio" id="two" value="2" v-model="value3">
  <label for="two">选项二</label>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    value3: ''
  }
});
```

#### 复选框绑定

复选框绑定分为单个选项与多个选项两种情况，书写方式不同。

```html
<div id="app">
  <p>单个checkbox选中的数据为：{{value4}}</p>
  <input type="checkbox" id="item" value="选项内容" v-model="value4">
  <label for="item">选项</label>

  <p>多个checkbox选中的数据为：{{value5}}</p>
  <input type="checkbox" id="one" value="选项一内容" v-model="value5">
  <label for="one">选项一</label>
  <input type="checkbox" id="two" value="选项二内容" v-model="value5">
  <label for="two">选项二</label>

</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    value4: '',
    value5: []
  }
});
```

#### 选择框绑定

选择框绑定分为单选绑定与多选绑定两种情况，书写方式不同。

```html
<div id="app">
  <p>单选 select 数据为：{{value6}}</p>
  <select v-model="value6">
    <option value="">请选择</option>
    <option value="1">选项一</option>
    <option value="2">选项二</option>
    <option value="3">选项三</option>
  </select>

  <p>多选 select 数据为：{{value7}}</p>
  <select v-model="value67" multiple>
    <option value="1">选项一</option>
    <option value="2">选项二</option>
    <option value="3">选项三</option>
  </select>

</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    value6: '',
    value7: []
  }
});
```
v-model 指令小结

- `input` 输入框: 绑定字符串值。
- `textarea` 输入框: 绑定字符串值。
- `radio`: 绑定字符串值。
- `checkbox`: 单个绑定布尔值，多个绑定数组。
- `select`: 单选绑定字符串，多选绑定数组。

## 修饰符

修饰符是以点开头的指令后缀，用于给当前指令设置特殊操作。

### 事件修饰符

####  `.prevent` 修饰符

用于阻止默认事件行为，相当于 `event.preventDefault()`。

####  `.stop` 修饰符

用于阻止事件传播，相当于 `event.stopPropagation()`。

Vue.js 中允许修饰符进行连写，例如: `@click.prevent.stop`。

####  `.once` 修饰符

用于设置事件只会触发一次。

### 按键修饰符

#### 按键码

按键码指的是将按键的"按键码"作为修饰符使用以标识按键的操作方式。

#### 特殊按键

特殊按键指的是键盘中类似 `esc`、`enter`、`delete` 等功能按键，为了更好的兼容性，应首选内置别名。

### 系统修饰符

系统按键指的是 `ctrl`、`alt`、`shift` 等按键。

- 单独点击系统操作符无效。
- 系统按键通常与其他按键组合使用。

#### `.ctrl` 修饰符


#### `.alt` 修饰符

#### `.shift` 修饰符

### 鼠标修饰符

用于设置点击事件由鼠标哪个按键来完成。

#### `.left` 修饰符
#### `.right` 修饰符
#### `.middle` 修饰符

### `v-model` 修饰符

#### `.trim` 修饰符

用于自动过滤用户输入内容首尾两端的空格。

#### `.lazy` 修饰符

用于将 `v-model` 的触发方式由 `input` 事件触发更改为 `change` 事件触发。

> input 就是获取焦点就触发; change 是内容改变才触发？

#### `.number` 修饰符

用于自动将用户输入的值转换为数值类型，如无法被 `parseFloat()` 转换，则返回原始内容。

