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

```js
// 子组件
Vue.component('MyComponentA', {
  props: {
    parStr: String,
    parArr: Array,
    parAny: null // parAny: undefined
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

> 名字能任意起吗 ?

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

#### Props 验证

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

注意: 当默认值为数组或对象时，必须为工厂函数返回的形式。

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

`validator` 用于给传入的 `prop` 设置校验函数，`return` 值为 `false` 时 Vue.js 会发出警告。

```js
Vue.component('MyComponentA', {
  props: {
    parStr: {
      type: String,
      validator: function (value) {
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

- 如果组件根元素已经存在了对应属性，则会替换组件内部的值。
- `class` 与 `style` 是例外，当内外都设置时，属性会自动合并。



- 如果不希望继承父组件设置的属性，可以设置 `inheritAttrs: false`，但只适用于普通属性，`class` 与 `style` 不受影响。



### 子组件向父组件传值



### 非父子组件传值

> 如：兄弟关系，或者完全没有关系的两个组件进行通信。


### 其他通信方式




## 组件插槽



## 内置组件


