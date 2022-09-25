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

> 在模板内部可以正常的使用插值表达式和指令。

使用：

```html
<div id="app">
  <my-com-a></my-com-a>
</div>
```

注意: 组件必须只有一个根元素。

#### data 选项

`data` 选项用于存储组件的数据，与根实例不同，组件的 `data` 选项必须为*函数*，数据设置在返回值对象中。

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

---

为什么组件中的 `data` 要采用方法的解构进行设置 ？

> 因为一个组件并不一定在一个页面中只有单个这个组件，一般情况下一个组件表示的是一个功能的封装，如果这个功能在页面中需要复用，就可以调用多次组件结构，
> 这时，为了确保多个组件实例的数据是相互独立的，而不是共用的，这时就需要通过作用域进行隔离。函数的内部是有独立的作用域的，
> 当我们在函数内部声明一个数据以后，函数多次调用，内部就形成了多个独立的作用域，内部的数据与其他作用域的数据也不会产生相互的影响。

这种实现方式是为了确保每个组件实例可以维护一份被返回对象的独立的拷贝，不会相互影响。

> 实在不能理解，就记住语法就行了。

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
    MyComponentB: {
      template: '<h3>{{ title }}</h3>',
      data() {
        return { title: 'b 组件内容示例' }
      }
    },
  }
});
```

> 组件命名时，如果是烤串风格，必须要加 `''`, 如果是大驼峰的风格，可以不加引号。
> 
> 在视图页面使用组件的时候，必须要是用烤串风格 `<my-component-b>`。

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

### 为什么需要组件通信？

在前面的例子当中，我们将根实例中的功能通过一个又一个的组件来实现，这些组件就可以称为 "根实例的子组件"，相应的根实例相对于组件来说就是 "父组件"；
那么子组件如何获取父组件(也就是根实例)中的数据呢？ 此外，组件与组件之间都是相互独立的功能，组件与组件之间也都是相互独立的。

- 子组件如何获取父组件中的数据 ?
- 父组件如何得知子组件的数据变更 ?
- 如果是更加复杂的组件关系呢(比如：组件中又嵌套组件) ?

在组件间传递数据的操作，称为组件通信。

组件通信根据参与的组件不同，拥有不同的设值方式。

### 父组件向子组件传值

通过子组件的 `props` 选项接收父组件的传值。

```js
Vue.component('my-component', {
  props: ['title'],
  template: '<h3> {{ title }} </h3>'
});
```

注意: `props` 不要与(组件中的) `data` 存在同名属性。

> 因为在使用的时候，组件中的 `props` 中的属性和 `data` 中的属性使用方式一样，如果同名了会出现覆盖。

父组件设置方式如下:

```js
new Vue({
  el: '#app',
  data: {
    item: {
      title: '父组件中的数据'
    }
  }
});
```

```html
<div id="app">
  <!--可以直接通过标签属性传值。但是这种方式只能传递静态的属性值-->
  <my-component title="示例内容1"></my-component>
  <!--属性绑定。注意如果动态数据绑定要使用字符串的时候，里面的内容要使用 '' 包裹起来-->
  <my-component :title="'示例内容1'"></my-component>
  <!--属性绑定的时候，一般都是采用动态的数据-->
  <my-component :title="item.title"></my-component>
</div>
```

> 子组件使用时候的这三种传值的方式，在 VueDevTools 中都不能修改组件中的值；但是第三种方式，如果父组件的 `data` 中的数据变更了，子组件中的数据也会跟着改变。

#### Props 命名规则

建议 `prop` 命名使用 `camelCase`，父组件绑定时使用 `kebab-case`。

> 因为 `props` 的代码写在 JS 中，JS 中命名不支持烤串风格，如果非要使用烤串风格的话，需要加 `''` 包裹，比较麻烦；
> 在父组件中传值的代码写在 HTML 当中，HTML 当中的属性是不区分大小写的，如果使用驼峰的话，最终只会识别成全小写的形式，最后会导致属性名不匹配。

```js
Vue.component('my-component', {
  props: ['myTitle'], // camelCase
  template: '<h3>{{ myTitle }}</h3>'
})
```

```html
<div id="app">
  <!--属性名使用烤串风格-->
  <my-component my-title="示例内容1"></my-component>
  <my-component :my-title="'示例内容1'"></my-component>
  <my-component :my-title="item.title"></my-component>
</div>
```

#### 父组件向子组件传值练习

练习常见操作:

- 通过 `v-for` 创建组件

```js
Vue.component('demoItem', {
  props: ['itemTitle', 'itemContent'],
  template: `
        <div>
          <h3>{{ itemTitle }}</h3>
          <p>{{ itemContent }}</p>
        </div>
      `
});

new Vue({
  el: '#app',
  data: {
    // 准备给子组件使用的数据
    items: [
      {title: '示例标题1', content: '示例内容1'},
      {title: '示例标题2', content: '示例内容2'},
      {title: '示例标题3', content: '示例内容3'}
    ]
  }
});
```

```html
<div id="app">
  <!--通过 v-for 遍历 items, 创建组件并生成内容-->
  <demo-item
      v-for="item in items"
      :key="item.title"
      :item-title="item.title"
      :item-content="item.content"
  ></demo-item>
</div>
```

> 在此案例中我们还绑定了 `:key`, 尝试在 `props` 中使用 `key` 接收参数，可以发现并接收不到。因为 Vue 知道，`key` 仅仅用作提高渲染效率使用。
> 同时，也会警告你 `key` 是保留属性，不能用作组件的 `prop`。

组件通信除了可以绑定数据对象的属性外，还可以直接接收整个对象，传入的时候就可以直接传入整个对象了。

#### 单向数据流

父子组件间的所有 `prop` 都是单向下行绑定的。(都是父组件向子组件传值，父组件的值发生变化后，子组件也会发生变化，但是子组件不能反向影响父组件。)

> 通过 DevTools 也能看出来，在子组件中并不能修改数据。

---

如果子组件要处理 `prop` 数据，应当存储在 `data` 中后操作。

```js
Vue.component('my-component', {
  props: ['initialTitle'],
  template: '<h3>{{ myTitle }}</h3>',
  data() {
    return {
      myTitle: this.initialTitle
    }
  }
});
```

此时我们可以修改子组件中的 `data` 中的数据，修改后视图页面会随之发生改变；但是不会影响父组件的 `data` 和子组件中 `props` 中的数据。

> 其实也就相当于通过 `props` 中的数据初始化组件的 `data` 属性，后续操作的都是 `data` 属性中的内容，不再跟 `props` 有任何关系了。

测试案例：

```js
Vue.component('my-component', {
  props: ['initialTitle'],
  template: `<div>{{ title }} <button @click="fn">按钮</button></div>`,
  data() {
    return {
      title: this.initialTitle
    }
  },
  methods: {
    fn() {
      // this 代表当前 VueComponent
      this.title = '这是新的标题' // 可以成功修改
      this.initialTitle = '这是新初始化的标题' // 可以成功修改，但是 Vue 警告应该避免修改，而且父组件中的 data.title 不会改变
    }
  }
});

new Vue({
  el: '#app',
  data: {
    title: '这是示例标题'
  }
});
```

```html
<div id="app">
  <my-component :initial-title="title"></my-component>
</div>
```

总结：如果要修改父组件传递到子组件中的数据，应该将数据放到子组件的 `data()` 中或者 `computed` 中。

---

注意，如果 `prop` 为数组或对象时，子组件操作将会影响到父组件的状态。

> 因为父组件向子组件传递的是对象或者数组的时候，其实传递的是对象或者数组的引用，所以操作子组件的 `prop` 可能会影响到父组件中数据的状态。

```js
Vue.component('my-component', {
  props: ['obj'],
  template: `<button @click="fn">按钮</button>`,
  methods: {
    fn() {
      this.obj.name = 'jack' // 此时既修改了 `props` 中的 obj 的数据，同时也修改了父组件中 `data` 中的 obj 的数据
    }
  }
});

new Vue({
  el: '#app',
  data: {
    obj: {
      name: 'john',
      age: 18
    }
  }
});
```

```html
<div id="app">
  <my-component :obj="obj"></my-component>
</div>
```

如果想要避免这种影响的话，第一种方式就是通过子组件中的 `data` 接收父组件传递进来的数据；第二种方式就是避免直接整体传入一个对象。

#### Props 类型

Prop 可以设置类型检查，这时需要将 `props` 更改为一个带有验证需求的对象，并指定对应类型。

> 之前数组的方式只能单一的设置接收值的名称。因此，此处与前面最大的区别就是此次在每一个属性名后面跟了这个属性的类型。  

```js
// 子组件
Vue.component('MyComponentA', {
  props: {
    parStr: String,
    parArr: Array,
    parAny: null // 父组件传过来的值可以是任意类型，此处写 null 和 undefined 都可以表示任意类型
  },
  template: `
    <div>
      {{ parStr }}
      {{ parArr }}
      {{ parAny }}
    </div>
  `
});
```

父组件传值方式如下：

```js
new Vue({
  el: '#app',
  data: {
    str: '示例内容',
    arr: [1, 2, 3],
    any: '任意类型均可'
  }
})
```

```html
<div id="app">
  <my-component-a
    :par-str="str"
    :par-arr="arr"
    :par-any="any"
  ></my-component-a>
</div>
```

> 如果父组件中传递的数据不满足类型的话，Vue.js 会警告类型出现了错误。

---

prop 还可以同时指定多个类型，通过数组方式保存即可。

```js
Vue.component('MyComponentA', {
  props: {
    parData: [String, Number]
  },
  template: `
    <div>
      {{ parData }}
    </div>
  `
});
```

> 此处表示父组件传递过来的数据，需要是 String 或者 Number 其中一个类型。

#### Props 验证

在对 `props` 中的 prop 设置了类型检测后，还需要设置后续的验证的的设置的话，就需要将 prop 也设置为对象结构。

- 当 prop 需要设置多种规则时，可以将 prop 的值设置为选项对象。
- 之前的类型检测功能通过 `type` 选项设置。

```js
Vue.component('MyComponentA', {
  props: {
    parNum: { type: Number },
    parData: { type: [String, Number] }
  },
  template: `
    <div>
      {{ parNum }}
      {{ parData }}
    </div>
  `
});
```

`required` 用于设置数据为必填项。

```js
Vue.component('MyComponentA', {
  props: {
    parNum: {
      type: Number,
      required: true
    }
  },
  template: `
    <div>
      {{ parNum }}
    </div>
  `
});
```

> 如果没有 `required` 属性，没有传递这个参数，仅仅是组件中这个属性没有值；此时父组件如果没有传递这个参数，Vue.js 就会报错。

---

`default` 用于给可选项指定默认值，当父组件未传递数据时生效。

```js
Vue.component('MyComponentA', {
  props: {
    parNum: {
      type: Number,
      default: 100
    }
  },
  template: `
    <div>
      {{ parNum }}
    </div>
  `
});
```

> 如果一个属性设置了 `required` 就可以不设置 `default`, 因为他们不能同时起作用。

注意: 当默认值为数组或对象时，必须为工厂函数返回的形式。

> 还是因为作用域和引用传递的关系，如果不通过函数包裹，可能多个组件最终操作的是同一个数组。
> 和组件中的 `data` 要通过函数包裹是同样的原因。

```js
Vue.component('MyComponentA', {
  props: {
    parArr: {
      type: Array,
      default: function () {
        return [1, 2, 3];
      }
    }
  },
  template: `
    <div>
      {{ parArr }}
    </div>
  `
});
```

---

`validator` 用于给传入的 `prop` 设置校验函数，`return` 值为 `false` 时 Vue.js 会发出警告。

> 前面的检测是针对类型，或者是否传入值的检测，此处的 `validator` 是针对传入的具体内容的检测。

```js
Vue.component('MyComponentA', {
  props: {
    parStr: {
      type: String,
      validator: function (value) { // value 就是父组件传入的值
        return value.startsWith('zmn');
      }
    }
  },
  template: `
    <div>
      {{ parStr }}
    </div>
  `
});
```

注意: 验证函数中无法使用实例的 `data`、`methods` 等功能。

> 因为 `prop` 的验证是在组件实例对象创建之前进行的验证，所以无法通过 `this` 使用组件中的 `data`, `methods` 等功能。
> 通过在 `validator` 函数中打印 `this` 可以发现，在 `validator` 函数中的 `this` 其实是 `Window` 对象。

#### 非 Props 属性

当父组件给子组件设置了属性，但此属性在 `props` 中不存在，这时会自动绑定到子组件的根元素上。

```js
Vue.component('MyComponentA', {
  template: `<p>子组件内容</p>`
});
```

```html
<div id="app">
  <my-component-a
    demo-attr="示例属性"
    title="示例title"
    style="height: 200px"
    class="colorBlue"
  ></my-component-a>
</div>
```

因此，父组件可以直接在视图页面对子组件进行一些设置，而不需要通过 `props` 属性接收参数后，再绑定给组件的根元素。

> 同时也要注意，这一规则仅适用于 `template` 中的根元素，嵌套的元素不能在视图页面使用的时候直接设置属性。

---

- 如果组件根元素已经存在了对应属性，则会替换组件内部的值。
- `class` 与 `style` 是例外，当内外都设置时，属性会自动合并。

```js
// 内部设置
Vue.component('MyComponentA', {
  template: `<p title="原始title" class="fl" style="width: 200px;">子组件内容</p>`
});
```

> 使用时的代码同上。此时的视图页面渲染结果就是：`style` 会层叠; `title` 会被父组件使用的地方传入的参数覆盖。

---

- 如果不希望继承父组件设置的属性，可以设置 `inheritAttrs: false`，但只适用于普通属性，`class` 与 `style` 不受影响。

> 这个参数存在的目的就是防止父组件在使用的时候覆盖 `template` 内部设置的一些属性。

```js
Vue.component('MyComponentA', {
  inheritAttrs: false,
  template: `<p title="原始title" class="fl" style="width: 200px;">子组件内容</p>`
});
```

> 添加了这个参数后，父组件中通过"非 props 属性"传入的普通数据会被忽略；但是样式和 class 仍然会产生层叠。

### 子组件向父组件传值

子向父传值需要通过自定义事件实现。

---

测试案例：商品为子组件，购物车为父组件。父组件需要统计商品个数，就需要在子组件个数变化时传值给父组件。

父组件使用代码如下：

```html
<body>
  <div id="app">
    <h3>购物车</h3>
    <product-item
        v-for="product in products"
        :key="product.id"
        :title="product.title"
    ></product-item>
    <p>商品总个数为：{{ totalCount }}</p>
  </div>
  <script>
    new Vue({
      el: '#app',
      data: {
        products: [
          {id: 1, title: '苹果一斤'},
          {id: 2, title: '香蕉一根'},
          {id: 3, title: '橙子一个'}
        ],
        totalCount: 0
      }
    });
  </script>
</body>
```

子组件定义如下：

```js
Vue.component('ProductItem', {
  props: ['title'],
  template: `
      <div>
      <span>商品名称： {{ title }}, 商品个数： {{ count }}</span>
      <button @click="countIns">+1</button>
      </div>
    `,
  data() {
    return {count: 0}
  },
  methods: {
    countIns() {
      this.count++;
    }
  }
});
```

当子组件的商品个数发生变化时，如何将数据传递给购物车这个父组件？

子组件数据变化时，通过 `$emit()` 触发自定义事件。

> `$emit()` 是 Vue 实例的方法，方法实参可以传递一个名称，可以触发指定的名称的自定义事件。

```js
Vue.component('ProductItem', {
  // ...
  methods: {
    countIns() {
      this.$emit('count-change'); // 此处只是代表"触发"这个功能，在父组件中使用子组件的时候需要在使用的时候监听这个事件
      this.count++;
    }
  }
});
```

> 自定义事件名称建议使用 kebab-case。

父组件监听子组件的自定义事件，并设置处理程序。

```html
<div id="app">
  ...
  <product-item
      ...
      @count-change="totalCount++"
  ></product-item>
  ...
</div>
```

总结一下代码的执行流程：点击 `+1` 按钮 => 子组件执行 `countIns` 函数，函数内容 `$emit()` 方法出发了 `count-change` 事件 => 父组件在使用子组件的时候监听了这个事件，所以触发事件监听的代码：`totalCount++` => 父组件中的 `data.totalCount` 值 +1 => 数据双向绑定导致视图页面上的 "商品总个数" 的值 +1。

此时，子组件数据发生变化时，只是能够告诉父组件子组件数据发生了变化，但是父组件并不知道子组件的值变成了多少。
那么如何让父组件知道子组件的值具体变成了多少呢？请看下一节。

#### 自定义事件传值

子组件触发事件时可以向父组件传值。

> 简单来说就是通过 `$emit()` 方法的第二个参数，向父组件传递参数。这个参数可以是任意数据类型。

```js
Vue.component('ProductItem', {
  template: `
    <div>
      <span>商品名称： {{ title }}, 商品个数： {{ count }}</span>
      <button @click="countIns">+1</button>
      <button @click="countIns5">+5</button>
    </div>
  `,
  methods: {
    countIns() {
      this.$emit('count-change', 1);
      this.count++;
    },
    countIns5() {
      this.$emit('count-change', 5);
      this.count += 5;
    }
  }
});
```

父组件在监听事件时需要接收子组件传递的数据。

> 简单来说就是可以直接通过 `$event` 在事件绑定函数中接收，也可以通过 `method` 上声明形参接收。

接收方式一：

```html
<product-item
    @count-change="totalCount += $event"
></product-item>
```

接收方式二：

```html
<product-item
    @count-change="onCountChange"
></product-item>
```

```js
new Vue({
  // ...
  methods: {
    onCountChange(productCount) {
      this.totalCount += productCount;
    }
  }
});
```

#### 组件与 v-model

`v-model` 用于组件时，需要通过 `props` 与自定义事件相结合的方式实现。

```html
<div id="app">
  <p>输入框内容为：{{ iptValue }}</p>
  <com-input v-model="iptValue"></com-input>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    iptValue: ''
  },
  components: {
    ComInput
  }
});
```

直接这样将父组件的 `iptValue` 绑定给子组件是不能绑定成功的，需要在子组件内部通过 `props` 接收处理。

```js
// 子组件
const ComInput = {
  props: ['value'], // 这里的名字固定，就是 value. 因为 v-model 绑定的属性就是 value, 所以此处的名字必须要写 value 才能正确接收父组件绑定的数据。
  template: `
    <input
      type="text"
      :value="value" // 前面的 value 表示当前绑定的属性叫 value; 后面的 value 表示使用的是 props 中的 value 的值
      @input="$emit('input', event.target.value)" // 当输入框输入内容的时候，通知父组件，并将当前输入框输入的内容传递给父组件
    >
  `
}
```

将处理函数定义在 `methods` 中的写法：

```js
// 子组件
const ComInput = {
  props: ['value'],
  template: `<input type="text" :value="value" @input="onInput">`,
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
// 如果处理逻辑比较复杂，推荐使用这种方式。
```

所以在父组件设置的时候很简单，就和普通的输入框绑定是一样的写法，直接使用 `v-model` 就可以了；
在子组件中要使用 `props` 接收数据，并通过 `$emit()` 将子组件的数据传递给父组件。

> 其实可以理解为： `v-model="a"` 就相当于 `v-bind:value="a"`, 就是说 `v-model` 本质上也是属性绑定，只不过这个属性名固定为 `value`。

### 非父子组件传值

非父子组件指的是兄弟组件或完全无关的两个组件。

####  兄弟组件传值

兄弟组件可以通过父组件进行数据中转.

> 通过父组件进行数据中转，只是兄弟组件间传值的一种实现方式。

```js
// 根实例
new Vue({
  el: '#app',
  data: {
    value: '' // 用于数据中转
  }
});
```

```html
<div id="app">
  <!--子组件内部数据变化的时候，将数据传递给父组件中的 value-->
  <com-a @value-change="value = $event"></com-a>
  <!--将父组件的 value 绑定给子组件的 value 属性-->
  <com-b :value="value"></com-b>
</div>
```

希望将 a 中的数据传递到 b 中。

```js
// 子组件A：发送数据
Vue.component('ComA', {
  template: `
    <div>组件A的内容： {{ value }}
    <button @click="$emit('value-change', value)">发送</button>
    </div>
  `,
  data() {
    return {
      value: '这是组件A中的数据'
    }
  }
});

// 子组件B：接收数据
Vue.component('ComB', {
  props: ['value'],
  template: `
    <div>组件B接收到： {{ value }}</div>
  `
});
```

代码执行流程：点击 A 组件的 `发送` 按钮 => 通过 `$emit()` 方法触发父组件中的 `value-change` 事件 => 使用子组件的时候监听了 `value-change` 事件，会将子组件传递上来的数据赋值给父组件的 `value` => 组件 B 通过 `value` 属性绑定的父组件的 `value` 发生变化，会影响 B 组件中的 `props` 中的 `value` 的值 => 组件 B 中 `props` 的值改变会影响 B 组件中 `template` 中差值表达式使用的值。

####  EventBus

当组件嵌套关系复杂时，根据组件关系传值会较为繁琐。

组件为了数据中转，`data` 中会存在许多与当前组件功能无关的数据。

- EventBus (事件总线)是一个*独立*的*事件中心*，用于管理不同组件间的传值操作。
- EventBus 通过一个新的 Vue 实例来管理组件传值操作，组件通过给实例注册事件、调用事件来实现数据传递。

> 为什么要使用一个新的 Vue 实例来管理组件的传值操作？ 因为如果根实例(`#app`)里面功能很复杂，这个 Vue 实例就会很大，如果再因为数据中转操作去频繁操作这个对象的话，
> 会带来很大的性能消耗；如果通过一个新的 Vue 实例，这个实例本身是空的，功能比较少，带来的性能消耗也会相对小一些。

```js
// EventBus.js
var bus = new Vue();
```

---

发送数据的组件触发 `bus` 事件，接收的组件给 `bus` 注册对应事件。

以前面的购物车案例为例：

首先在视图页面中引入 EventBus.js

```html
<script src="EventBus.js"></script>
```

> 注意要先引入 vue.js 再引入 EventBus.js

```js
// 商品组件
Vue.component('ProductItem', {
  template: `
    <div>
      <span>商品名称：苹果，商品个数：{{ count }}</span>
      <button @click="countIns">+1</button>
    </div>`,
  data () {
    return { count: 0 }
  },
  methods: {
    countIns () {
      // 给 bus 触发自定义事件，传递数据
      bus.$emit('countChange', 1);
      this.count++;
    }
  }
});
```

> 接下来在需要的组件中(购物车计数器组件)，注册对自定义事件的监听，并接收数据即可。

给 bus 注册对应事件通过 `$on()` 操作。

```js
// 计数组件
Vue.component('ProductTotal', {
  template: `<p>总个数为： {{ totalCount }}</p>`,
  data () {
    return { totalCount: 0 }
  },
  created () { // created: 实例创建完毕，可以使用 data 等功能
    // 给 bus 注册事件监听，并接收数据
    bus.$on('countChange', (productCount) => {
      this.totalCount += productCount; // 箭头函数本身没有 this, 使用的是 created 函数的 this, 也就是当前组件实例
    });
  }
});
```

最后创建根实例执行代码即可。

```js
new Vue({
  el: '#app'
});
```

### 其他通信方式

> 这里的这两种方式仅作了解。

#### $root

`$root` 用于访问当前组件树根实例，设置简单的 Vue 应用时可以通过此方式进行组件传值。

> 通过这个属性可以直接访问根实例(`#app`), 那么就可以疯狂的往上面传值和从上面取值，这样不太利于项目的维护。

```html
<div id="app">
  <p>父组件数据：{{ count }} </p>
  <com-a></com-a>
  <com-b></com-b>
</div>
```

```js
const ComA = {
  template: `
    <div>
      组件A: {{ $root.count }} // 直接访问根实例中的数据
      <button @click="clickFn">按钮</button>
    </div>
  `,
  methods: {
    clickFn () {
      this.$root.count++; // 直接修改根实例中的数据
    }
  }
};

const ComB = {
  template: `
    <div>
      组件B: {{ $root.count }}
      <button @click="clickFn">按钮</button>
    </div>
  `,
  methods: {
    clickFn () {
      this.$root.count++;
    }
  }
};

new Vue({
  el: '#app',
  data: { count: 0 },
  components: {
    ComA,
    ComB
  }
});
```

组件 A 和组件 B 内部的按钮都会修改根实例内部的 `count` 属性的值。

---

除了 `$root` , Vue.js 中还提供了 `$parent` 与 `$children` 用于便捷访问父子组件。

> Vue3 好像已经没有 `$children` 了。

#### $refs

`$refs` 用于获取设置了 `ref` 属性的 HTML 标签或子组件。

- 给普通 HTML 标签设置 `ref` 属性，`$refs` 可以获取 DOM 对象。

```html
<div id="app">
  <input type="text" ref="inp">
  <button @click="fn">按钮</button>
</div>
```

如果希望在 Vue 中对这个 DOM 元素进行操作，可以这样写：

```js
new Vue({
  el: '#app',
  methods: {
    fn() {
      this.$refs.inp.focus();
    }
  }
});
```

- 给子组件设置 `ref` 属性，渲染后可通过 `$refs` 获取子组件实例。

```html
<div id="app">
  <com-a ref="comA"></com-a>
</div>
```

```js
const ComA = {
  template: `<p>组件A: {{ value }}</p>`,
  data() {
    return {
      value: '这是组件 A 的数据'
    }
  }
};

new Vue({
  el: '#app',
  components: {
    ComA
  },
  mounted() {
    this.$refs.comA.value = '修改子组件数据' // 通过打印可以看出 this.$refs.comA 就是 ComA 那个组件对象
  }
});
```

> 注意：这个操作要到 mounted 阶段及以后操作，不能提前，比如：created 阶段就不行。
