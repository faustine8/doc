## 3. 进阶

### 3.1.区分打包环境

#### Webpack 区分环境打包

通过环境变量区分

```shell
webpack --env.production
```

webpack.config.js 中判断 env

---

通过配置文件区分

- webpack.dev.conf.js
- webpack.prod.conf.js

执行打包时，指定配置文件

```shell
# dev 环境构建
webpack --config webpack.dev.conf.js
# prod 环境构建
webpack --config webpack.prod.conf.js
```

#### Webpack 通过环境变量区分打包

命令行中设置环境变量

```shell
# Webpack 4
webpack --env.production 
# Webpack 5
webpack --env production
```

---

webpack.config.js

• 读取环境变量 env.production
• 根据环境变量指定不同的配置

详情：<https://www.webpackjs.com/guides/environment-variables/>

#### Webpack 通过配置文件区分打包

通过配置文件区分环境

- webpack.dev.conf.js(mode: development) 
- webpack.prod.conf.js(mode: production)
- webpack.base.conf.js(公共配置)

webpack-merge

- 将多个配置合并在一起
- <https://www.npmjs.com/package/webpack-merge>

![配置文件合并](./assets/README-1663419016278.png)

#### Webpack DefinePlugin



### 3.2.自定义 plugin

webpack 是基于插件机制的。

#### 自定义 plugin

Webpack 插件是一个具有 `apply` 方法的 JavaScript 对象。 
`apply` 方法会被 webpack compiler 调用，并且在整个编译生命周期都可以访问 compiler 对象。

原理: 通过在生命周期的钩子中挂载函数，来实现功能扩展

详情: <https://webpack.docschina.org/concepts/plugins/>

#### 生命周期与钩子

##### 生命周期

- 生命周期就是整个生命过程中的关键节点
- 人: 出生 -> 入学 -> 毕业 -> 结婚 -> 生子 -> 死亡 • 程序:初始化 -> 挂载 -> 渲染 -> 展示 -> 销毁

##### 钩子

- 钩子是提前在可能增加功能的地方，埋好(预设)一个函数
- 生命周期中的函数

钩子是站点，在钩子中，可以挂载一些功能。

![钩子示意图](./assets/README-1663419264701.png)

#### Webpack 常用钩子

> [参考文档](https://www.webpackjs.com/api/compiler-hooks/)

| 钩子            | 描述              | 类型                |
|---------------|-----------------|-------------------|
| `environment` | 环境准备好           | `SyncHook`        |
| `compile`     | 编译开始            | `SyncHook`        |
| `compilation` | 编译结束            | `SyncHook`        |
| `emit`        | 打包资源到 output 之前 | `AsyncSeriesHook` |
| `afterEmit`   | 打包资源到 output 之后 | `AsyncSeriesHook` |
| `done`        | 打包完成            | `SyncHook`        |

#### 插件与钩子

![插件与钩子](./assets/README-1663419426194.png)

#### 自定义 plugin 的语法



### 3.3.自定义 loader

Loader 本质上就是一个 ESM 模块，它导出一个函数，在函数中对打包资源进行转换。

案例：声明一个读取 markdown(`.md`)文件内容的 loader

- marked(将 markdown 语法转成 html)
- loader-utils(接受 loader 的配置项)

#### 自定义 loader 的语法

```js

```

#### loader 机制

![loader机制](./assets/README-1663419572685.png)

![loader机制2](./assets/README-1663419603854.png)

### 3.4.代码分离(Code Splitting)

为什么？

- 如果把所有代码都打包到一起，可能最终的代码非常大。从而影响加载时间.
- 而且，很多代码是初始加载时，不需要的。因此，我们可以根据代码使用的紧急程度，将代码分割打包后，按需加载.

![打包构建过程](./assets/README-1663419682568.png)

![代码分离](./assets/README-1663419719142.png)

![代码分离](./assets/README-1663419749080.png)

---

怎么分离？

- 多入口打包: 配置 `entry` 加载多个入口文件
- 提取公用模块: `optimization.splitChunks.chunks: all`
- 动态导入:按需加载 | 预加载

#### 多入口打包

- `entry`(后面写成对象): `{ index: './src/index.js', about: './src/about.js' }`
- `output.filename`(不能写成固定名称，否则报错): `[name].bundle.js`
- `HtmlWebpackPlugin`(不同页面加载各自的 `bundle`) `chunks: ['index'], chunks: ['about']`

#### 提取公共模块

如果多个页面都用到了一个公共文件(例如:jQuery)，每个页面都将公共文件打包一次是不合理的。更好的办法是将公共文件提取出来。

例如: 京东的商品页超过 1000000 个，如果打包的 1000000 个文件都包含 jQuery，打包文件会超过 80G(88KB * 1000000)

`optimization.splitChunks.chunks: 'all'`： 将公共文件提取出来，单独打包

![提取公共模块前](./assets/README-1663420028730.png)

![提取公共模块后](./assets/README-1663420050743.png)

#### 动态导入

懒加载

- 默认不加载，事件触发后才加载
- `webpackChunkName: '加载名称'`

预加载

- 先等待其他资源加载，浏览器空闲时，再加载
- `webpackPrefetch: true`
- 缺点:在移动端有兼容性问题

### 3.5.源码映射(Source Map)



### 3.6.删除冗余代码(Tree Shaking)



### 3.7.缓存



### 3.8.模块解析(resolve)



### 3.9.排除依赖(externals)



### 3.10.模块联邦




## 4.项目

### 4.1.常规操作(项目部署)



### 4.2.Webpack 中使用 Bootstrap



### 4.3.Webpack 在 Vue 中的应用



### 4. Webpack 在 React 中的应用




