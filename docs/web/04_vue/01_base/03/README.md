# Vue 进阶语法

## 自定义指令

指令用于简化 DOM 操作，相当于对基础 DOM 操作的一种封装。

当我们希望使用一些内置指令不具备的 DOM 功能时，可以进行自定义指令设置。

### 自定义全局指令

指的是可以被任意 Vue 实例或组件使用的指令。

```js
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
});
```

```html
<div id="app">
  <input type="text" v-focus>
</div>
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





