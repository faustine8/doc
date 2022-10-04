# Vue Router

Vue Router 是 Vue.js 的官方插件，用来快速实现单页应用。

## 单页应用

SPA (Single Page Application) 单页面应用程序，简称单页应用。

指的是网站的 "所有" 功能都在单个页面中进行呈现。

> 传统网站就是多页面，如电商网站。

具有代表性的有后台管理系统、移动端、小程序等。

优点:

- 前后端分离开发，提高了开发效率。
- 业务场景切换时，局部更新结构。
- 用户体验好，更加接近本地应用。

缺点:

- 不利于 SEO。
- 初次首屏加载速度较慢。
- 页面复杂度比较高。

## 前端路由

> 路由其实指的是一种点对点的规则；后端路由指的是不同接口与处理函数之间的映射关系。

前端路由，指的是 URL 与内容间的映射关系。

URL、内容、映射关系。

###  Hash 方式

通过 `hashchange` 事件，监听 `hash` 变化，并进行网页内容更新。

> 就是改 `href=#/...` 中 `#` 后面的部分；其实借用的是 `#` 锚点链接会进行内容跳转但是不会进行页面跳转的特性。 

> 浏览器中的 `location.hash` 中存储了锚点的值，这个值称为 hash. 点击了锚点链接之后，会触发 `hashchange` 事件，因为 `location.hash` 被赋予了锚点链接中的 `href` 中设置的新值。

> 特点就是 URL 后面存在 `#` 号。

---

演示：

```html
<body>
  <div>
    <a href="#/">首页</a>
    <a href="#/category">分类页</a>
    <a href="#/user">用户页</a>
  </div>
  <div id="container">
    这是首页功能
  </div>
</body>
```

> `#` 是设置 hash 值的标记；后面的内容就是 hash 值的具体的内容。

```js
window.onhashchange = function () {
  // 获取 url 中的 hash
  var hash = location.hash.replace('#', '');
  var str = ''
  // 根据不同的 hash 值，更改网页内容
  switch (hash) {
    case '/':
      str = '这是首页功能';
      break;
    case '/category':
      str = '这是分类功能';
      break;
    case '/user':
      str = '这是用户功能';
      break;
  }
  document.getElementById('container').innerHTML = str;
};
```

封装以备复用。

```js
// 准备对象用于封装 hash 功能
var router = {
  // 路由存储位置：保存了 url 与内容处理函数的对应关系
  routes: {},
  // 定义路由规则的方法
  route: function (path, callback) {
    this.routes[path] = callback;
  },
  // 初始化路由的方法
  init: function () {
    var that = this;
    window.onhashchange = function () {
      // 当 hash 改变，我们需要得到当前新的 hash
      var hash = location.hash.replace('#', '');
      // 根据 hash 触发 routes 中存储的对应的 callback
      that.routes[hash] && that.routes[hash]();
    };
  }
};
```

> 为什么要在这里写 `var that = this` ?
> 在事件中，`this` 指向的是 window 对象，所以如果要 `this` 能够找到 router 对象，可以通过 `that` 将 `this` 的指向保存起来。

```js
var container = document.getElementById('container');
// 定义路由
router.route('/', function () {
  container.innerHTML = '这是首页功能';
});
router.route('/category', function () {
  container.innerHTML = '这是分类功能';
});
router.route('/user', function () {
  container.innerHTML = '这是用户功能';
});
// 初始化路由
router.init();
```

特点总结:

- Hash 方式兼容性好。
- 地址中具有 `#`，不太美观。
- 前进后退功能较为繁琐。

###  History 方式

History 方式采用 HTML5 提供的新功能实现前端路由。

```html
<body>
  <div>
    <a href="/">首页</a>
    <a href="/category">分类页</a>
    <a href="/user">用户页</a>
  </div>
  <div id="container">
    这是首页功能
  </div>
</body>
```

在操作时需要通过 `history.pushState()` 变更 URL 并执行对应操作。

> 调用 `history.pushState()` 方法可以传入一个地址，就可以将传入的这个地址设置当前浏览器页面的 URL，在更改浏览器上的 URL 地址的同时并不会进行页面跳转操作。

> 简单讲就是浏览器访问的页面变了，但是并没有开一个新的浏览器标签页。

```js
var router = {
  routes: {},
  route(path, callback) {
    this.route[path] = callback;
  },
  go(path) { // 用于触发指定路径的路由
    history.pushState(null, null, path); // 更改 URL
    this.routes[path] && this.routes[path](); // 调用对应路径的回调函数
  }
};
```

> `history.pushState()` 方法，参数一：与当前路径相关的状态对象(就是希望保存的一些数据);参数二：标题(浏览器基本不支持);参数三:希望修改成的 URL 地址。

```js
var links = document.querySelectorAll('a');
var container = document.querySelector('#container');
links.forEach(function (ele) {
  ele.onclick = function (e) {
    var path = e.target.getAttribute('href');
    // 调用路由
    router.go(path); // 将当前路由跳转到对应的 path 上
    return false; // 阻止 <a> 标签的默认跳转效果
  }
})
```

```js
// 定义路由规则
router.route('/', function () {
  container.innerHTML = '这是首页功能';
});
router.route('/category', function () {
  container.innerHTML = '这是分类功能';
});
router.route('/user', function () {
  container.innerHTML = '这是用户功能';
});
```

---

前进后退功能，首先需要在更改 `url` 时保存路由标记。

```js
go(path) {
  history.pushState({ path: path }, null, path);
  ...
}
```

通过 `popstate` 事件监听前进后退按钮操作，并检测 `state`。

> 问: 这个 `popstate` 到底监听的是前进还是后退呢？答: 前进和后退都会触发他; 我们其实不需要关心他到底是监听的前进还是后退,反正只要通过"前进/后退"按钮访问到了一个URL,就能够通过 `e.state` 获取到之前通过 `pushState()` 方法的第一个参数保存的数据。

```js
// router 对象中
init() { // 设置初始化方法，用来检测前进后退按钮的功能
  var that = this;
  window.addEventListener('popstate', function (e) {
    var path = e.state ? e.state.path : '/';
    that.routes[path] && that.routes[path]();
  });
}
```

调用初始化方法监听前进后退操作并处理。

```js
// 页面加载的时候直接调用
router.init();
```

## Vue Router

Vue Router 是 Vue.js 官方的路由管理器，让构建单页面应用变得易如反掌。

### 基本使用

直接下载/CDN

- 最新版本: <https://unpkg.com/vue-router/dist/vue-router.js>
- 指定版本: <https://unpkg.com/vue-router@3.4.9/dist/vue-router.js>

```shell
# npm 安装
npm install vue-router
```

Vue Router 提供了用于进行路由设置的组件 `<router-link>` 与 `<router-view>`。

```html
<div id="app">
  <!--router-link 用于设置跳转链接-->
  <router-link to="/">首页</router-link>
  <router-link to="/category">分类</router-link>
  <router-link to="/user">用户</router-link>
  <!--router-view 用于内容切换的显示区域-->
  <router-view></router-view>
</div>
```

定义路由中需要的组件，并进行路由规则设置。

```js
var Index = { template: `<div>这是首页功能</div>` }
var Category = { template: `<div>这是分类功能</div>` }
var User = { template: `<div>这是用户功能</div>` }
```

定义路由中需要的组件，并进行路由规则设置。

```js
var routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/user',
    component: User
  },
]
```

创建 Vue Router 实例，通过 `routes` 属性配置路由。

```js
var router = new VueRouter({
  routes: routes
});
```

创建 Vue 实例，通过 `router` 属性注入路由。

```js
var vm = new Vue({
  el: '#app',
  router: router
});
```

---

通过打印输出 Vue 对象可以看出，添加了VueRouter 之后，Vue 对象也多了一些 router 相关的属性：

- `$route`: 路由规则对象，存储了与当前路由相关的一些数据
- `$router`: 进行路由操作的功能对象

#### 命名视图

如果导航后，希望同时在同级展示多个视图(组件)，这时就需要进行命名视图。

```html
<div id="app">
  <router-link to="/">首页</router-link>
  <router-link to="/user">用户</router-link>

  <router-view name="sidebar"></router-view>
  <router-view></router-view>
</div>
```

> 当有多个 `<router-view>` 的时候，至多只能有一个可以是没有名称的; 没有名称的这个 `<router-view>` 有一个默认的名字叫 `default`.

路由中通过 `components` 属性进行设置不同视图的对应组件。

```js
var SideBar = { template: `<div>这是侧边栏功能</div>` }
```

```js
var routes = [
  {
    path: '/',
    components: {
      sidebar: SideBar,
      default: Index
    }
  }
]
```

> `components` 的值一个键值对的数据结构，key 是 `<router-view>` 的 `name`, value 是对应的组件的选项对象。

### 动态路由

当我们需要将某一类 URL 都映射到同一个组件，就需要使用动态路由。

定义路由规则时，将路径中的某个部分使用 `:` 进行标记，即可 设置为动态路由。

```js
var User = { template: '<div>这是用户的功能</div>' }

var routes = [
  {
    path: '/user/:id',
    component: User
  }
]
```

设置为动态路由后，动态部分为任意内容均跳转到同一组件。

```html
<div id="app">
  <router-link to="/user/1">用户1</router-link>
  <router-link to="/user/2">用户2</router-link>
  <router-link to="/user/3">用户3</router-link>
  
  <router-view></router-view>
</div>
```

`:` 部分对应的信息称为*路径参数*，存储在 `vm.$route.params` 中。

```js
var User = {
  template: `
    <div>
      这是用户 {{ $route.params.id }} 的功能
    </div>
  `
}
```

#### 侦听路由参数

> 如果动态路由的时候，仅仅是参数的变化，组件的实例虽然看起来在切换，但其实大部分的功能会被复用，而不是销毁组件实例再重建。
> 这是由于 Vue 考虑到渲染效率的问题，比起销毁再重建，复用显得更加高效。
> 由于大部分组件都是在复用，所以生命周期钩子就不会再重新调用了，那也就意味着我们在进行动态路由切换时，我们无法监控到路由的参数变化。

如果要响应路由的参数变化，可以通过 watch 监听 `$route`。

> 路由参数变化是什么意思? 路由参数指的是前面动态路由的路径参数; 响应他的变化指的是我们在路由的组件中要根据不同的路径参数，执行不同的操作。

```js
var User = {
  template: `<div>这是用户 {{ $route.params.id }} 的功能</div>`,
  watch: {
    // $route 是 Vue 实例内容的属性
    $route (route) { // route 参数就是最新的、变化后的路由信息; 通过这个最新的 route 对象，我们就可以从中获取到我们想要的数据了。
      console.log(route);
    }
  }
}
```

---

验证：动态路由时，路由切换只是数据(`{{ $route.params.id }}` 这部分内容)的变化，不会重新创建和销毁实例？

可以通过在组件后面添加一个 `<input>` 输入框，在里面输入内容，切换后发现输入框的内容并没有发生变化。

```js
var User = {
  template: `
    <div>
      这是用户 {{ $route.params.id }} 的功能
      <input type="text">
    </div>
  `
}
```

同样可以在组件中添加一个生命周期的钩子函数，点击按钮动态路由切换组件，也会发现这个生命周期的函数只会执行一次。

```js
var User = {
  template: `...`,
  created() { console.log('创建了组件的实例'); }
}
```

#### 路由传参处理

> 参数如果是由父组件传递或者通过其他组件传递，使用的时候是使用的 `$route.params.id` 来操作，如果变更了那就不好修改了。如果希望将组件应用在任意位置的话，需要进行解耦。
> (如果确实组件需要使用在多个地方的时候，才需要处理)。

这里通过路由的 `props` 设置数据，并通过组件 `props` 接收。

```js
var routes = [
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/category/:id',
    component: Category,
    props: true // 本次参数的传递不再由路由直接传递给组件，同时子组件也不再通过 $route.params 来接收了，而是通过 props 来传递。(也就是将 $route.params 的值传递给了 props)
  }
]
```

```js
var User = {
  template: `<div>这是用户 {{ $route.params.id }} 的功能</div>`
}
// 组件内部的接收方式也要做响应的调整
var Category = {
  props: ['id'], // 此处的通过 props 接收参数; 数组中的 id 名字要和 path 中 : 后面的名字保持一致
  template: `<div>这是 {{ id }} 的功能</div>` // props 中的数据可以像 data 中的数据一样使用了
}
```

操作步骤总结: 1.在路由规则中添加 `props: true`; 2.在子组件中使用 `props` 接收路径参数.

在 `Category` 组件中，可以像使用普通数据一样使用 `id` 数据，可以不用 `$route.params.id` 的方式使用 `id` 数据。
这样实现了我只管在模板中使用这个数据，而不需要关系这个数据到底是通过路由传递进来的还是通过父子组件传递进来的，这样实现了解耦。

> 以前为什么耦合？ `$route.params.id` 这种方式要使用 id 必须要通过路由的方式传进来，否则就取不到。也就是"数据和数据的传递方式"耦合了。

---

包含多个命名视图时，需要将路由(`routes`)的 `props` 设置为对象。(属性名和路由的 `components` 对象的属性名保持一致，属性值为是否开启使用 `props` 接收参数)

> 包含多个命名视图：指页面中有多个 `<router-view>` 标签。

```js
var SideBar = { template: `<div>这是侧边栏功能</div>` }

var routes = [
  {
    path: '/category/:id',
    components: {
      sidebar: SideBar, // name="sidebar" 的 <router-view> 标签所对应的组件是 SideBar 这个组件
      default: Category
    },
    props: {
      sidebar: false, // name="sidebar" 的 <router-view> 标签所对应的组件，不需要使用 props 传递路径参数. (默认值就是 false, 如果不需要使用 props 接收参数，也可以不写) // 这里的 sidebar 对应的是 router-view 中的 name 
      default: true // 默认组件开启使用 props 接收路径参数(注意：需要在组件中使用 props 属性接收参数)
    }
  }
]
```

---

如果希望设置静态数据，可将路由的 `props` 的某个组件对应的选项值设置为对象，这个对象内部属性就会绑定给子组件的 `props` 属性。

```js
var SideBar2 = {
  props: ['a', 'b'],
  template: `<div>这是右侧边栏功能: {{ a }} {{ b }} </div>` 
}

var routes = [
  {
    path: '/category/:id',
    components: {
      sidebar: SideBar,
      sidebar2: SideBar2,
      default: Category
    },
    props: {
      sidebar: false,
      sidebar2: { a: '状态1', b: '状态2' }, // 直接传递固定的参数
      default: true // 
    }
  }
]
```

### 嵌套路由

实际场景中，路由通常由多层嵌套的组件组合而成，这时需要使用嵌套路由配置。

使用 `children` 来进行嵌套路由中的子路由设置。

```js
var User = {
  template: `
        <div>
          <h3>这是 User 组件的功能</h3>
          <router-link to="/user/hobby">爱好功能</router-link>
          <router-link to="/user/info">用户信息</router-link>
          <router-view></router-view>
        </div>
      `
};

var UserHobby = {
  template: `<div> UserHobby 组件</div>`
};

var UserInfo = {
  template: `
        <div> 
          UserInfo 组件
          <router-link to="/user/info/school">学校信息</router-link>
          <router-link to="/user/info/age">年龄信息</router-link>
          <router-view></router-view>
        </div>`
};

var UserInfoAge = {
  template: `<div> UserInfoAge 组件</div>`
};

var UserInfoSchool = {
  template: `<div> UserInfoSchool 组件</div>`
};

var routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'hobby',
        component: UserHobby
      },
      {
        path: 'info',
        component: UserInfo,
        children: [
          {
            path: 'age',
            component: UserInfoAge
          },
          {
            path: 'school',
            component: UserInfoSchool
          }
        ]
      }
    ]
  }
]
```

### 编程式导航

编程式导航，指的是通过调用方法的方式设置导航。

`router.push()` 用来导航到一个新 URL。

```js
vm.$router.push('/user');
vm.$router.push({ path: '/user' });
vm.$router.push({ path: '/user/123' });
```

`<router-link>` 的 `to` 属性使用绑定方式时也可属性对象结构。

> 注意：之前的 to 是普通的标签属性，此处要使用 `v-bind:to` 绑定的方式; 

```html
<router-link :to="{ path: '/user/10' }">用户10</router-link>
```

> 使用属性绑定的方式，属性值可以和 `routes` 中的对象的结构一样; 此时点击这个 `<router-link>` 标签时，内部会调用调用 `$router.push()` 方法来导航到一个新的 URL。

> 注意：这里使用属性绑定设置路由的 URL，是为了能够在 to 属性中传入对象，可以传入更多的值；并不能替代 `routes`, `routes` 还是要写。 

#### 命名路由

> 当路由的地址比较长的时候，比如嵌套路由的时候，这时候通过命名处理是比较方便的。

设置路由时添加 `name` 属性。

```js
var School = {
  template: `<div>School 组件: {{ $route.params }} </div>` 
};

var routes = [
  {
    path: '/user/:id/info/school',
    name: 'school',
    component: School
  }
]
```

> 命名路由就是在 `routes` 中各一个路由对象添加一个 name 属性; 在使用 `push` 方法进行路由跳转的时候，就可以直接使用这个 `name`, 而不需要写一个很长的 `path`.

在 `push()` 中通过 `name` 导航到对应路由，参数通过 `params` 设置。

```js
vm.$router.push({ name: 'school', params: { id: 20, demo: '其他数据' }});
```

> `params` 用来设置动态路由的参数，他只能和 `name` 搭配使用; 使用 path 的时候，必须使用完整的具有完整参数的 URL, 不可以搭配 params 参数使用

> `params` 中可以传入任意多的参数，都可以通过 `$route.params` 获取到; 路径参数上只会取自己需要的。

也可以在 `<router-link>` 中使用。

> 在 `<router-link>` 中直接使用的时候，需要使用属性绑定的方式才能够传递 `name` 属性。(因为属性绑定的方式底层最终是调用的 push 方法)

```html
<router-link :to="{ name: 'school', params: { id: 1 }}">用户学校</router-link>
<router-link :to="{ name: 'school', params: { id: 2 }}">用户学校</router-link>
<router-link :to="{ name: 'school', params: { id: 3 }}">用户学校</router-link>
```

## 其他功能

### 重定向

> 重定向是指：当我们通过 VueRouter 访问 url1 的时候,实际上访问到了 url2,并匹配到了对应的路由。

示例如下:

```js
var routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/category/:id',
    component: Category
  },
  {
    path: '/category', // 不正确的访问地址，重定向到首页
    redirect: '/'
  }
]
```

比如: 我们要访问属性组件的时候，我们没有带 id 实际上就访问到了 `/category`, 这个 path 又被重定向到了 `/`, 所以我们实际上就访问到了 `/`.

> 重定向与跳转的区分 ？答：这是 Java 后端远古时期需要区分的概念，前端现在基本上都是跳转，不需要可以区分这两个概念了。

### 别名

别名是一种美化路由的方式。

当用户在访问 url1 的时候，url1 可能是一个别名，实际访问的 url 是 url2; 但是用户访问的这个值就叫 url1, 地址栏中显示的也是 url1,
这时我们可以把 url1 设置的简单一些, 这样看起来就像是访问了一个比较简短的地址。

示例如下：

```js
var routes = [
  {
    path: '/user/:id/info/school/intro/:date',
    name: 'school',
    component: School,
    alias: '/:id/:date' // 设置别名, 用户访问的时候可以直接使用这个结构访问
  }
]
```

```html
<!--访问别名的两种方式-->
<router-link :to="{ name: 'school', params: { id: 1, date: 0101 } }">用户学校</router-link>
<router-link to="/10/0612">用户学校</router-link>
```

> 用户写的很短，实际上在内部访问的是这个很长的 url

> 个人想法：第一种方式地址栏并不会显示缩短后的地址；第二种方式感觉又太容易跟别的 url 混淆了。感觉作用不大。

### 导航守卫

> 当导航的时候，也就是路由发生改变的时候，我们可以通过跳转或者取消的方式进行守卫的处理。

例如一个网站中存在很多的路由，某些路由需要用户登陆或者用户具有某些状态时才能够访问；如果此时用户访问，我们应该给予阻止或者给予跳转处理；
这时就可以通过导航守卫进行设置。

设置方法如下：

```js
// 通过 router 对象设置导航守卫功能
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  next();
});
```

示例的意思是：在每一条路由被触发之前，都可以执行的导航守卫功能。内部需要传入一个回调函数，这个回调函数接收了三个参数：

- `to`: 要跳转到的路由，是一个对象解构
- `frome`: 从哪个路由来的，也是一个路由信息对象

> 通过 `to` 和 `from` 可以判断从哪个路由来？有哪些状态？是否满足访问目标路由的状态？

- `next`: 通过 `to` 和 `from` 判断是否满足条件可以通过当前守卫的功能，如果通过那就调用 `next()`, 也就是可以进行下一步操作了; 如果没有调用 `next`, 那么意味着功能走到这里就停止了,无法继续完成导航了。

> 所以我们应该确保 `next` 在任何的导航守卫中，都应该被调用一次, 否则导航就停止了。

next 除了可以放行外，还可以传入一些参数。比如我们觉得用户不能继续进行导航操作的时候，我们可以在 `next` 中传入一个 `false`, 用来阻止本次导航。

如果我们并不是完全阻止，如果用户不满足条件，可以让他访问一个新的页面(比如访问需要登陆的页面，但是用户由没有登陆，就帮用户跳转到登陆页面), 就可以在 `next` 方法中传入一个 `/xx` 地址的字符串，或者传入一个对象 `{path: '/xx'}`。(此时 `next` 方法中传入的参数和 `<router-link>` 的 `to` 中传入的数据是相同的)

---

总结：

- `next` 可以且仅可以调用一次
- `next` 的参数不写和写 `false` 效果一样，但是写 false 语义更强，表示阻止本次导航
- `next` 中可以传入路由地址，标识终止当前导航，导航到新的 url 上

### History 模式

> 通过观察可以发现，导航栏中总是有 `#`，因为 VueRouter 默认是使用 `hash` 方式实现的，因为 hash 模式的兼容性更好；
> VueRouter 也提供了 `history` 模式。

使用 History 需要通过 Vue Router 实例的 `mode` 选项来设置，这样 URL 会更加美观，但同样需要后端支持避免问题。

```js
var router = new VueRouter({
  mode: 'history', // 使用 history 模式
  routes: [
    // ...
  ]
});
```
