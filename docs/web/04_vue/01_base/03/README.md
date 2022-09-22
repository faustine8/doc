# Vue 进阶语法

## 自定义指令

指令用于简化 DOM 操作，相当于对基础 DOM 操作的一种封装。

当我们希望使用一些内置指令不具备的 DOM 功能时，可以进行自定义指令设置。

### 自定义全局指令

"全局指令"指的是可以被任意 Vue 实例或组件使用的指令。

```js
Vue.directive('focus', {
  inserted(el) { // 在形参中可以直接获取 添加了当前指令的元素
    el.focus();
  }
});
```

```html
<div id="app">
  <input type="text" v-focus>
</div>
```

---

在 `inserted` 函数中，还可以使用 `binding` 参数接收指令的修饰符和值等信息。

```html
<input type="text" v-focus.a.b="100 + 1">
```

```js
// 自定义全局指令
Vue.directive('focus', {
  inserted(el, binding) {
    console.log(binding);
    el.focus();
  }
});
```

```json
{
  "name": "focus",
  "rawName": "v-focus.a.b",
  "value": 101, // 指令值的最终计算结果
  "expression": "100 + 1", // 指令值的表达式
  "modifiers": {
    "a": true, // 修饰符信息
    "b": true
  },
  "def": {}
}
```

### 自定义局部指令

指的是可以在当前 Vue 实例或组件内使用的指令。

```js
new Vue({
  // ... 省略其他代码
  directives: {
    focus: {
      inserted (el) {
        el.focus();
      }
    }
  }
});
```

```html
<div id="app">
  <input type="text" v-focus>
</div>
```

## 过滤器

过滤器用于进行文本内容格式化处理。

过滤器可以在插值表达式和 `v-bind` 中使用。

### 全局过滤器

可以将一个数据传入到多个过滤器中进行处理。

```html
<div id="app">
  <div>{{ content | filterA | filterB }}</div>
</div>
```

一个过滤器可以传入多个参数。

```html
<div id="app">
  <div>{{ content | filterContent(par1, par2) }}</div>
</div>
```

### 局部过滤器

局部过滤器只能在当前 Vue 实例中使用。

```js
new Vue({
  // ... 省略其他代码
  filters: {
    过滤器名称: function (value) {
      // 代码逻辑
      return '处理结果';
    }
  }
});
```

## 计算属性

Vue.js 的视图不建议书写复杂逻辑，这样不利于维护。

```html
<div id="app">
  <div>{{ Math.max.apply(null, arr) }}</div>
  <div>{{ Math.max.apply(null, arr) }}</div>
  <div>{{ Math.max.apply(null, arr) }}</div>
</div>
```

封装函数是很好的方式，但有时重复的计算会消耗不必要的性能。

```js
var vm = new Vue({
  el: '#app',
  data: {
    arr: [1,2,3,4,5]
  },
  methods: {
    getSum() {
      var sum = 0;
      for (var i = 0; i < this.arr.length; i++) {
        sum += this.arr[i];
      }
      return sum;
    }
  }
});
```

```html
<div id="app">
  <div>{{ getSum() }}</div>
  <div>{{ getSum() }}</div>
  <div>{{ getSum() }}</div>
</div>
```

---

如何提高执行效率?

计算属性使用时为属性形式，访问时会自动执行对应函数。

```js
var vm = new Vue({
  el: '#app',
  data: {
    arr: [1,2,3,4,5]
  },
  computed: {
    result () {
      var sum = 0;
      for (var i = 0; i < this.arr.length; i++) {
        sum += this.arr[i];
      }
      return sum;
    }
  }
});
```

```html
<div id="app">
  <div>{{ result }}</div>
  <div>{{ result }}</div>
  <div>{{ result }}</div>
</div>
```

### methods 与 computed 区别

- `computed` 具有缓存型，`methods` 没有。
- `computed` 通过属性名访问，`methods` 需要调用。
- `computed` 仅适用于计算操作。 

---

准备一个数组，根据数组数据创建列表。

要求: 当数据大于 10 时创建 `li`，否则不创建。

思考以下三种实现方式:

- `v-if` 与 `v-for` 结合
- `v-for` 与 `methods` 结合 
- `v-for` 与 计算属性结合

### 计算属性的 setter

计算属性默认只有 `getter`，Vue.js 也允许给计算属性设置 `setter` 。

```js
var vm = new Vue({
  computed: {
    getResult: {
      // getter
      get: function () {
        // 逻辑代码
      },
      // setter
      set: function (newValue) {
        // 逻辑代码
      }
    }
  }
});
```

## 侦听器

侦听器用于监听数据变化并执行指定操作。

```js
new Vue({
  el: '#app',
  data: {
    value: ''
  },
  watch: {
    value (newValue, oldValue) {
      // 逻辑代码
    }
  }
});
```

为了监听对象内部值的变化，需要将 `watch` 书写为对象，并设置选项 `deep: true`，这时通过 `handler` 设置处理函数。

```js
new Vue({
  el: '#app',
  data: {
    obj: {
      content1: '内容1',
      content2: '内容2'
    }
  },
  watch: {
    obj: {
      deep: true,
      handler(val, oldVal) {
        console.log(val, oldVal);
      }
    }
  }
});
```

- 注意: 当更改(非替换)数组或对象时，回调函数中的新值与旧值相同，因为它们的引用都指向同一个数组 、对象。
- 注意: 数组操作不要使用索引与 `length`，无法触发侦听器函数。

## Vue DevTools

Vue DevTools 是 Vue.js 官方提供的用来调试 Vue 应用的工具。

注意事项:

- 网页必须应用了 Vue.js 功能才能看到 Vue DevTools
- 网页必须使用 Vue.js 而不是 Vue.min.js
- 网页需要在 `http` 协议下打开，而不是使用 `file` 协议本地打开。

## Vue.js 生命周期

Vue.js 生命周期指的是 Vue 实例的生命周期。

Vue 实例的生命周期，指的是实例从创建到运行，再到销毁的过程。

### Vue.js 生命周期函数

通过设置生命周期函数，可以在生命周期的特定阶段执行功能。

生命周期函数也称为生命周期钩子。

#### 创建阶段

- `beforeCreate`: 实例初始化之前调用。
- `created`: 实例创建后调用。
- `beforeMount`: 实例挂载之前调用。
- `mounted`: 实例挂载完毕。

特点: 每个实例只能执行一次。

#### 运行阶段

- `beforeUpdate`: 数据更新后，视图更新前调用。
- `updated`: 视图更新后调用。

特点: 按需调用。

#### 销毁阶段

- `beforeDestroy`: 实例销毁之前调用。
- `destroyed`: 实例销毁后调用。

特点: 每个实例只能执行一次。

