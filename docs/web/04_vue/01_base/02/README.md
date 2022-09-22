# Vue.js 基础语法

##  Vue 实例

Vue 实例是通过 `Vue` 函数创建的对象，是使用 Vue 功能的基础。

```js
var vm = new Vue({
  // 选项对象
});
```

## 基础选项

对 Vue 实例进行基础功能配置。

### el 选项

- 用于选取*一个* DOM 元素作为 Vue 实例的挂载目标。
- 只有挂载元素内部才会被 Vue 进行处理，外部为普通 HTML 元素。
- 选中的元素代表 MVVM 中的 View 层(视图)。

> 挂载目标: 需要将 Vue 实例挂载到某一个标签元素上，这个元素内部就可以使用 Vue 的功能了。

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

> 无论使用哪种元素获取，一定要保证最后选取的是单个元素; 选取的元素不能是 `html` 和 `body` 元素。

---

挂载完毕后，可以通过 `vm.$el` 访问选中的元素。

```js
var vm = new Vue({
  el: '#app'
});

console.log(vm.$el);
```

未设置 `el` 的 Vue 实例，也可以通过 `vm.$mount()` 进行挂载，参数形式与 `el` 规则相同。

> 没有设置 `el` 属性的 Vue 实例不会生效，因为他没有挂载到元素上。

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

- 插值表达式只能书写在标签内容区域，可以与其它内容混合。(只能处理标签内容, 不能处理标签属性)
- 内部只能书写 JavaScript 表达式，不能书写语句(否则会出现模板解析错误)。(只能写表达式，不能写函数、变量声明)

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

> Vue.js 将 data 内部的属性直接挂载到了 Vue 实例对象当中。

```js
var vm = new Vue({
  el: '#app',
  data: {
    title: '标题内容'
  }
});

console.log(vm.$data.title);
console.log(vm.title); // 更常用
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

```js
var vm = new Vue({
  el: '#app',
  data: {
    contentArr: ['内容1', '内容2', '内容3']
  }
});

Vue.set(vm.contentArr, 0, '生效的新内容'); // 参数：要操作的数组, 索引值, 要设置的新内容
```

> 如果 `data` 中的数据是数组时，通过索引修改数据内容 `vm.contentArr[1] = '新的内容'` 和通过 `vm.contentArr.length = 0` 将数组清空，
> 这类通过索引操作或者需要访问 `length` 属性的操作无法自动更新视图，必须要调用 `Vue.set()` 方法修改。

> 数组的其他方法调用不受影响，能够正常自动更新视图，如：`vm.contentArr.pop()`, `vm.contentArr.push('新的内容')`

### methods 选项

用于存储需要在 Vue 实例中使用的函数。

> 可以将一些复杂的逻辑操作设置在 methods 中，实现将视图和数据处理逻辑分离。

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

```js
var vm = new Vue({
  el: '#app',
  data: {
    prefix: '处理的结果为：',
    title1: 'a-b-c-d-e',
    title2: 'x-y-z'
  },
  methods: {
    fn(value) {
      this.fn1(); // this 代表当前 vm 实例
      this.fn2();
      return this.prefix + value.split('-').join('');
    },
    fn1() {
      console.log('执行了 fn1 的代码');
    },
    fn2() {
      console.log('执行了 fn2 的代码');
    }
  }
});
```

## 指令

> Vue 中最常用的功能，用于在视图中进行设值操作，可以让视图与数据进行更好的结合。

指令的本质就是 HTML 自定义属性。

Vue.js 的指令就是以 `v-` 开头的自定义属性。

### 内容处理

####  v-once 指令

使元素内部的*插值表达式*只生效一次。(视图不再随着数据的变化而变化)

> 差值表达式只占元素内部内容的一部分；一个元素内部可以同时存在多个插值表达式。

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

元素内容*整体替换*为指定*纯文本数据*。

> 整体替换的意思是如果元素原本有内容，会使用新的内容将原本的内容覆盖掉。

> 只能是纯文本，而不能生成 HTML 的解构文本。

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

> 为什么这里 `v-text` 后面有值，而 `v-once` 后面没有呢？ 因为 `v-text` 需要用后面的值覆盖元素内部原来的内容，而 `v-once` 只需要标记一下就可以了。

####  v-html 指令

元素内容*整体替换*为指定的 *HTML 文本*。

```html
<div id="app">
  <p v-html="content">这段内容会被覆盖</p>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    content: '<span>内容文本</span>'
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

> bind 后面那个 title 是什么意思？是要绑定的属性名称, `=` 后面的值是要绑定的数据。=> `<p title='这是title属性内容'>标签内容</p>`

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

视图渲染结果如下：

```html
<p id="box" title="示例内容">标签内容</p>
```

---

除了可以绑定这些固有属性外，还可以绑定一些自定义属性

```js
var vm = new Vue({
  el: '#app',
  data: {
    attrObj: {
      class: 'clearFix',
      'data-title': '这是 data-title 的内容'
    }
  }
});
```

视图渲染结果如下：

```html
<p data-title="这是 data-title 的内容" class="clearFix">这是 p 标签的内容</p>
```

---

与插值表达式类似，`v-bind` 中也允许使用表达式。

> 同时与插值表达式类似, `v-bind` 值也不允许书写语句，如：声明函数或者变量。

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

> 因为本来就可以给 HTML 元素赋予多个 `class`。

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

视图渲染结果为：

```html
<p class="a x">标签内容</p>
```

---

对于普通的 `class` 属性，我们可以写多个值，用 `,` 分隔

```html
<p class="a b c">标签内容</p>
```

但使用 `class` 属性绑定的时候却不能直接这样写

```html
<!--这是错误的写法-->
<p :class="cls1 cls2 cls3"></p>
```

对于 `class` 绑定， Vue.js 中还提供了特殊处理方式，允许使用使用对象结构。(用于设置多个 class 属性)

```html
<div id="app">
  <p :class="{b: isB, c: isC, 'class-d': true}">标签内容</p>
</div>
```

> 对象中 key 是 class 的名字, value 是一个 bool 值, 表明对应的类名是否生效; 类名如果是横线连接的，需要使用 '' 包裹起来。

```js
var vm = new Vue({
  el: '#app',
  data: {
    isB: true,
    isC: false
  }
});
```

对于 `class` 绑定， Vue.js 中还提供了特殊处理方式，还可以绑定数组结构。

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

> 因为 `style` 的数据都是 `key:value` 的形式，所以在绑定 `style` 的时候，我们传入的基本形式就是一个对象; 
> 对象的 `key` 就是我们要设置的样式名称, value 就是我们要设置的样式的值。

```html
<div id="app">
  <p :style="styleObj">标签内容</p>
  <p style="width:100px" :style="styleObj">标签内容</p>
</div>
```

> 示例中, `width:100px` 是固定的值，后续绑定的值中的 `width` 属性会覆盖掉这个相同的属性, 所以最终元素的显示宽度是 200px;

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

> 使用场景：有多个元素，他们有一部分相同的样式属性，可以将这部分样式提取出来；
> 设置的时候就可以使用数组的形式进行设置，数组中一个对象是公共的样式，一个对象是自己特有的样式。

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
    <li v-for="(item, index) in arr">内容：{{item}}, 索引：{{index}}</li>
  </ul>
  <ul>
    <li v-for="val in obj">{{val}}</li>
    <li v-for="(val, key, index) in obj">属性值：{{val}}, 属性名: {{key}}, 索引值: {{index}}</li>
  </ul>
</div>
```

> 这里括号里面 val, key, index 所代表的数据与她的命名无关，与他所在的位置有关。
> `()` 中的第一个不论叫什么名字他都代表属性值, 同样的第二个不论叫什么他都代表属性名。

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

如果没有一个数组或者对象作为数据基础，就是想通过循环创建元素，也可以使用基于单个数值的方式：

```html
<li v-for="(item, index) in 5">
  这是第{{ item }}个元素，索引值为：{{ index }}
</li>
```

---

使用 `v-for` 的同时，应始终指定唯一的 `key` 属性，可以提高渲染性能并避免问题。

> 因为 Vue 处于性能的考虑，会尽量少的改动页面元素达到新的页面效果，所以如果后面的 input 不跟 item 绑定的时候，item 的顺序变了，后面的 input 不会变。
> 与 input 绑定的方式就是通过 `:key=""` 来指定，注意指定的值要始终唯一; index 就不可以，因为如果数组元素的顺序变了，他的索引也就变了。
> 
> 如果数组中元素的内容一样的话，最好使用对象数组的方式，使用数组中对象的 id 进行绑定。

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

> 不能理解就记住：每个 for 循环的 item, 必须设置 key 属性, 这个 key 属性要保证唯一且始终不变。

---

通过 `<template>` 标签设置模板占位符，可以将部分元素或内容作为整体进行操作。

```html
<div id="app">
  <template v-for="item in items">
    <span>标签内容</span>
    <span>标签内容</span>
  </template>
</div>
```

如果需要对两个 `<span>` 标签循环三次，又不想 `<span>` 元素外部被一个 `div` 包裹，就可以使用 `template` 标签。
示例代码最终的效果就是：

```html
<div id="app">
  <span>标签内容</span>
  <span>标签内容</span>
  <!-- ... -->
  <span>标签内容</span>
  <span>标签内容</span>
</div>
```

`<template>` 标签最终并不会真正的视图标签，只是用来表示一个区域; 可以利用它对被他包裹起来的内容进行循环操作。

> 需要注意：`<template>` 元素不是一个真正的元素，所以不能对他设置 `:key` 属性。

#### v-show 指令

用于控制元素显示与隐藏，适用于显示隐藏频繁切换时使用。

```html
<div id="app">
  <p v-show="true">这个元素会显示</p>
  <p v-show="false">这个元素会隐藏</p>
</div>
```

隐藏的时候，视图页面上还是有这个元素的，只是添加了 `style="display: none;"` 属性。

> 注意: `<template>` 无法使用 `v-show` 指令。

#### v-if 指令

用于根据条件控制元素的创建与移除。

```html
<div id="app">
  <p v-if="false">这个元素不会创建</p>
  <p v-else-if="true">这个元素会创建</p>
  <p v-else>这个元素不会创建</p>
</div>
```

> 执行过程会从上往下依次查找, 如果条件为 false, 会继续往后找; 如果某一个条件为 true, 则执行创建视图元素并结束整轮操作，不再往后查找; 
> 如果所有条件都为 false 时，最终就会创建 `v-else` 的元素. 这个的执行流程和 JS 是类似的。

> `v-show="false"` 时视图元素会正常创建，只不过是添加了隐藏的样式; `v-if="false"` 时视图元素就直接不会创建; 

> 如果需要频繁切换显示隐藏的话，使用这个指令显然是不合适的，因为他会频繁地添加和删除 DOM 元素，这个操作很费性能; 
> 使用 `v-show` 指令就好很多，因为只需要给 DOM 元素修改 `display` 属性的值而已。

---

给使用 `v-if` 的同类型元素绑定不同的 `key`。

> 如果 `v-if` 和 `v-else-if` 的内部，有相同元素的时候，就需要给 `v-if` 和 `v-else-if` 绑定不同的 key. 
> (原因很简单：还是因为 Vue 处于性能考虑，在数据变动的时候尽量少改动页面导致的问题，为了解决这个问题，我们需要将 `v-if` 元素内部的元素与 `v-if` 元素绑定)

```html
<div id="app">
  <div v-if="type==='username'" :key="'username'">
    用户名输入框：<input type="text">
  </div>
  <div v-else-if :key="'email'">
    邮箱输入框：<input type="text">
  </div>
</div>
```

---

出于性能考虑，应避免将 `v-if` 与 `v-for` 应用于同一标签。

> 因为在 Vue 中，如果 `v-if` 与 `v-for` 用在同一个标签上时，`v-for` 的优先级高于 `v-if`;
> 如果这个时候 `v-if="false" v-for="true"`, 他就会先执行 `v-for` 循环，循环结束后再判断 `v-if="false"` 就会再删除 for 循环出来的元素，
> 这样这个 for 循环所做的就是无用功，白白浪费了性能。

所以，如果有这种需求的时候，应该让 `v-if` 在更外层。

```html
<div id="app">
  <ul v-if="false">
    <li v-for="item in items">{{item}}</li>
  </ul>
</div>
```

### 事件处理

> `v-on` 指令

用于进行元素的事件绑定。

```html
<div id="app">
  <p>{{content}}</p>
  <button v-on:click="content='新内容'">按钮</button>
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
  <button @click="content='新内容'">按钮</button>
</div>
```

> 总结：属性绑定简写使用 `:`, 事件绑定简写使用 `@`

---

事件程序代码较多时，可以在 `methods` 中设置函数，并设置为事件处理程序。

```html
<div id="app">
  <p>{{content}}</p>
  <button v-on:click="fn">点击修改内容</button>
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

---

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

---

在视图(页面)中可以通过 `$event` 访问事件对象。

> 在 `@click` 以及其他事件处理指令中，在视图页面调用的函数，有一个默认参数，就是 event 对象, 所以可以直接调用 `fn`, 然后在 `fn(event)` 函数的定义中就能获取到 event 对象；
> 如果在事件处理指令中调用的函数，既要使用 event 对象还需要传入别的参数，函数声明的时候就需要 `fn(content, event)`, 调用的时候需要 `fn('content', $event)` 这样写。

```html
<div id="app">
  <p>{{content}}</p>
  <button @click="fn(content, $event)">按钮</button>
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

```html
<body>
<div id="app">
  <p>元素内容为：{{ value }}</p>
  <input type="text" v-model="value">
</div>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      value: ''
    }
  });
</script>
</body>
```

可以发现 `p` 标签的内容会随着输入框的输入变化而变化; 通过 JS 代码更新数据 `vm.vlue = 100` 也会导致视图页面上的两个元素的内容发生变化。

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

> 将多个 `type="radio"` 的一组元素的 `v-model` 绑定为同一个值; 最终选中哪个元素，那个元素的 `value` 就会传入 `v-model` 绑定的值当中。

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

> 单个选项的复选框使用场景：签订不平等协议。

> 单个选项的复选框和多个选项的复选框的主要区别点在于：单个选项的值是一个单值, 多个选项的复选框的值需要是一个数组(因为如果选中多个值，多个值需要同时保存)。

- 单个选项的复选框，被选中后的绑定的值并不是 `<input>` 标签的 `value` 属性的值，而是 `true` 和 `false`. 表单提交时，提交的仍然是 `<input>` 标签中的 `value` 属性的值。
- 多个选项的复选框，被选中的值需要保存在一个数组中，绑定的值是 `<input>` 标签的 `value` 属性的值。

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
  <select v-model="value7" multiple>
    <option value="1">选项一</option>
    <option value="2">选项二</option>
    <option value="3">选项三</option>
  </select>

</div>
```

> 多选选择框需要添加 `multiple` 属性; 选择的时候, 如果要多选需要按住 command 键.

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

> 默认事件行为，如：`<a>` 标签，默认点击的时候会跳转。

```html
<a @click.prevent="fn" href="https://kaiwu.lagou.com/">链接</a>
```

这样，当点击这个 `<a>` 标签的时候, 只会执行 `fn` 函数，并不会跳转页面。

还可以不执行函数，仅仅阻止默认行为：

```html
<a @click.prevent href="https://kaiwu.lagou.com/">链接</a>
```

####  `.stop` 修饰符

用于阻止事件传播，相当于 `event.stopPropagation()`。

```html
<div id="app">
  <div @click="fn1">
    <button @click.stop="fn2">按钮</button>
  </div>
</div>
```

此时点击按钮就只会触发 `fn2`, 而不会触发 `fn1`

---

Vue.js 中允许修饰符进行连写，例如: `@click.prevent.stop`。

```html
<div id="app">
  <div @click="fn1">
    <a @click.prevent.stop="fn2" href="https://kaiwu.lagou.com/">链接</a>
  </div>
</div>
```

此时 `<a>` 标签既不会页面跳转，也不会产生事件冒泡，触发 `fn2`.

####  `.once` 修饰符

用于设置事件只会触发一次。

```html
<button @click.once="fn">按钮2</button>
```

`fn` 函数只有第一次按钮点击的时候才会执行。

> 更多的修饰符内容：<https://cn.vuejs.org/guide/essentials/event-handling.html>

### 按键修饰符

#### 按键码

按键码指的是将按键的"按键码"作为修饰符使用以标识按键的操作方式。

```html
<div id="app">
  <input type="text" @keyup="fn">

  <!-- 直接在事件后拼接 keycode 的方式 -->
  <input type="text" @keyup.49="fn">

  <!-- 使用字母的时候，一般直接拼接字母 比较直观 -->
  <input type="text" @keyup.a="fn">

  <!-- 特殊按键 推荐使用内置别名的方式 -->
  <input type="text" @keyup.esc="fn">

  <!-- 按键修饰符也可以连写。当前表示 a 或者 b 或者 c 都会触发 fn，而不是同时按 a+b+c 才触发 fn -->
  <input type="text" @keyup.a.b.c="fn">
</div>
```

#### 特殊按键

特殊按键指的是键盘中类似 `esc`、`enter`、`delete` 等功能按键，为了更好的兼容性，应首选内置别名。

> 不要使用 `@keyup` 后面拼接数字的方式，直接使用 `@keyup.esc` 更加直观，而且兼容性也更加好。

更多按键修饰符详情：<https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers>

### 系统修饰符

系统修饰符是用来进行"系统按键"的修饰处理操作。

> 系统按键指的是 `ctrl`、`alt`、`shift` 等按键。

- 单独点击系统操作符无效。
- 系统按键通常与其他按键组合使用。

#### `.ctrl` 修饰符

```html
<div id="app">
  <!-- ctrl 的 keycode 是 17; 但是当前案例会被当成普通的按键修饰符：单独按 ctrl 或者 q 都会触发 fn 方法 -->
  <!-- <input type="text" @keyup.17.q="fn"> -->

  <!-- 这样才会被当成系统修饰符，同时按 ctrl + q 才会生效 -->
  <input type="text" @keyup.ctrl.q="fn" v-model="inputValue">
</div>
```

> 注意 macOS 在这里也是 control + Q, 不是使用 command + Q

#### `.alt` 修饰符

#### `.shift` 修饰符

更多系统修饰符信息：<https://cn.vuejs.org/guide/essentials/event-handling.html#system-modifier-keys>

### 鼠标修饰符

用于设置点击事件由鼠标哪个按键来完成。

#### `.left` 修饰符

鼠标左键点击

#### `.right` 修饰符

鼠标右键点击

#### `.middle` 修饰符

鼠标中键点击

```html
<div id="app">
  <button @click.left="fn">按钮1</button>
  <button @click.right="fn">按钮2</button>
  <button @click.middle="fn">按钮3</button>
</div>
```

> 一般使用 `@click` 就可以了，默认是使用左键点击。

### `v-model` 修饰符

#### `.trim` 修饰符

用于自动过滤用户输入内容首尾两端的空格。

> 一般输入框可能会需要用到，因为用户输入的内容不可控。

```html
<input type="text" v-model.trim="inputValue">
```

#### `.lazy` 修饰符

用于将 `v-model` 的触发方式由 `input` 事件触发更改为 `change` 事件触发。

> input 是只要输入内容就更新，即便还在输入都实时更新; change 是内容输入完毕后，失去焦点时进行内容检测，如果内容确实发生了变化，在进行数据双向绑定的数据更新。

```html
<input type="text" v-model.lazy="inputValue">
```

> 懒就懒在，内容不变就懒得动。

#### `.number` 修饰符

用于自动将用户输入的值转换为数值类型，如无法被 `parseFloat()` 转换，则返回原始内容。

```html
<input type="text" v-model.number="inputValue">
```
