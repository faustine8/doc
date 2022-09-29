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


```js
var router = {
  routes: {},
  route: function (path, callback) {
    this.route[path] = callback;
  },
  init: function () {
    var that = this;
    window.onhashchange = function () {
      history.pushState(null, null, path);
      that.routes[path] && that.routes[path]();
    };
  }
};
```

```js
var links = document.querySelectorAll('a');
var container = document.querySelector('#container');
links.forEach(function (ele) {
  ele.onclick = function (e) {
    var path = e.target.getAttribute('href');
    // 调用路由
    router.go(path);
    return false;
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

前进后退功能，首先需要在更改 `url` 时保存路由标记。

```js
go: function (path) {
  history.pushState({ path: path }, null, path);
  ...
}
```

通过 `popstate` 事件监听前进后退按钮操作，并检测 `state`。

```js
init: function () {
  var that = this;
}
```

调用初始化方法监听前进后退操作并处理。

```js
router.init();
```

## Vue Router

Vue Router 是 Vue.js 官方的路由管理器，让构建单页面应用变得易如反掌。

### 基本使用

直接下载/CDN

- 最新版本: <https://unpkg.com/vue-router/dist/vue-router.js>
- 指定版本: <https://unpkg.com/vue-router@3.4.9/dist/vue-router.js>

```shell
# npm
npm install vue-router
```

Vue Router 提供了用于进行路由设置的组件 `<router-link>` 与 `<router-view>`。

```html
<div id="app">
  <router-link to="/">首页</router-link>
  <router-link to="/category">分类</router-link>
  <router-link to="/user">用户</router-link>
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

路由中通过 `components` 属性进行设置不同视图的对应组件。

```js
var SideBar = { template: `<div>这是侧边栏功能</div>` }
```

```js
var routes = [
  {
    path: '/',
    component: {
      sidebar: SideBar,
      default: Index
    }
  }
]
```

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

`:` 部分对应的信息称为路径参数，存储在 `vm.$route.params` 中。

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

如果要响应路由的参数变化，可以通过 watch 监听 `$route`。

> 这里是什么意思？

```js
var User = {
  template: `<div>这是用户 {{ $route.params.id }} 的功能</div>`,
  watch: {
    $route (route) {
      console.log(route);
    }
  }
}
```

#### 路由传参处理

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
    props: true
  }
]
```

```js
var User = {
  template: `<div>这是用户 {{ $route.params.id }} 的功能</div>`
}
var Category = {
  props: ['id'],
  template: `<div>这是 {{ id }} 的功能</div>`
}
```

包含多个命名视图时，需要将路由的 `props` 设置为对象。

```js
var SideBar = { template: `<div>这是侧边栏功能</div>` }

var routes = [
  {
    path: '/category/:id',
    component: {
      sidebar: SideBar,
      default: Category
    },
    props: {
      sidebar: false, // 这里的 sidebar 对应的是 router-view 中的 name
      default: true
    }
  }
]
```

如果希望设置静态数据，可将 `props` 中的某个组件对应的选项设置为对象，内部属性会绑定给组件的 `props`。

```js
var SideBar2 = {
  props: ['a', 'b'],
  template: `<div>这是右侧边栏功能: {{ a }} {{ b }} </div>` 
}

var routes = [
  {
    path: '/category/:id',
    component: {
      sidebar: SideBar,
      sidebar2: SideBar2,
      default: Category
    },
    props: {
      sidebar: false, // 这里的 sidebar 对应的是 router-view 中的 name
      sidebar2: { a: '状态1', b: '状态2' },
      default: true
    }
  }
]
```

### 嵌套路由

实际场景中，路由通常由多层嵌套的组件组合而成，这时需要使用嵌套路由配置。

使用 `children` 来进行嵌套路由中的子路由设置。

```js
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

编程式导航，指的是通过方法设置导航。

`router.push()` 用来导航到一个新 URL。

```js
vm.$router.push('/user');
vm.$router.push({ path: '/user' });
vm.$router.push({ path: '/user/123' });
```

`<router-link>` 的 `to` 属性使用绑定方式时也可属性对象结构。

```html
<router-link :to="{ path: '/user/10' }">用户10</router-link>
```

#### 命名路由

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

在 `push()` 中通过 `name` 导航到对应路由，参数通过 `params` 设置。

```js
vm.$router.push({ name: 'school', params: { id: 20, demo: '其他数据' }});
```

也可以在 `<router-link>` 中使用。

```html
<router-link :to="{ name: 'school', params: { id: 1 }}">用户学校</router-link>
<router-link :to="{ name: 'school', params: { id: 2 }}">用户学校</router-link>
<router-link :to="{ name: 'school', params: { id: 3 }}">用户学校</router-link>
```

## 其他功能

### 重定向

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
    path: '/category',
    redirect: '/'
  }
]
```

> 重定向与跳转的区分 ？

### 别名

示例如下：

```js
var routes = [
  {
    path: '/user/:id/info/school/intro/:date',
    name: 'school',
    component: School,
    alias: '/:id/:date'
  }
]
```

```html
<router-link :to="{ name: 'school', params: { id: 1, date: 0101 } }">用户学校</router-link>
<router-link to="/10/0612">用户学校</router-link>
```

### 导航守卫

```js
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  next();
});
```

### History 模式

需要通过 Vue Router 实例的 `mode` 选项来设置，这样 URL 会更加美观，但同样需要后端支持避免问题。

```js
var router = new VueRouter({
  mode: 'history',
  routes: [
    // ...
  ]
});
```

