## Yeoman

### Yeoman 的基本概念 

-  Yeoman 是一款脚手架工具
  -  可以帮助开发人员创建项目的基础结构代码
-  yo 是 Yeoman 的命令行管理工具
  -  可以在命令行运行 yeoman 的命令
-  生成器(Generator): Yeoman 中具体的脚手架
  -  针对不同项目有不同的脚手架(例如:网站，APP，小程序等)

### Yeoman 使用说明

```shell
# 全局安装 yo
sudo npm install -g yo
# 安装 generator
sudo npm install -g generator-webapp
# 通过 yo 运行 generator
mkdir project-name
cd project-name
yo webapp
# 启动应用
npm run start
```

## 自动化构建

### 自动化构建概述

#### 什么是构建

源代码 ==转换==> 生产代码

#### 为什么构建(构建内容)

- 一些代码需要编译(CSS，JS)， 保证浏览器的兼容性;
  - 将 Less 或 Sass 转换成 CSS 
  - 将 ES6+ 的新语法转成 ES5
- 有些代码需要压缩(CSS，JS，HTML，图片等);
  - 压缩之后的代码体积更小，加载更快，节省带宽
- 有些代码需要做格式化校验，统一代码风格

#### 构建初体验

将 less 转成 css

```shell
# 安装 less 插件
sudo npm i less -g
# 通过 lessc 命令转换
lessc input.less output.css
```

#### 什么是自动化构建

自动化构建是指将手动构建任务，通过命令自动执行的过程。

npm scripts 实现自动化构建的最简方式

### npm scripts

npm 允许在 package.json 文件中，使用 scripts 字段定义脚本

#### npm scripts 自定义脚本命令

1. 声明命令 (package.json)

```json
{
  "scripts": {
    "foo": "node bar.js"
  }
}
```

2. 执行命令 (命令行)

```shell
npm run foo
# 等同于
node bar.js
```

##### 自动化构建样式文件

手动: 

```shell
lessc input.less output.css
```

自动:

在 package.json 中定义构建任务

```json
{
  "scripts": {
    "style": "lessc input.less output.css"
  }
}
```

命令行中执行命令

```shell
npm run style
```

#### npm scripts 中任务的执行方式

并行 / 串行

- 并行执行(parallel): `任务1 & 任务2` 任务之间没有先后顺序，同时执行可以提高执行效率
- 串行执行(series): `任务1 && 任务2` 任务之间有先后顺序，先执行前一个任务，后执行下一个

> `&` (并行执行)在 Windows 下不起作用

#### npm-run-all 插件

> 用于解决 Windows 下不支持平行执行问题的插件

```shell
# 在项目中安装
npm i npm-run-all -D

# 并行执行: 其中 -p 是 parallel 的缩写
npm-run-all -p script1 script2 script3
# 或简写为:
run-p script1 script2 script3

# 串行执行: 其中 -s 是 series 的缩写
npm-run-all -s script1 script2 script3
# 或简写为:
run-s script1 script2 script3
```

### 构建样式文件实战

```shell
# 运行项目时, 需要一个 serve 插件
sudo npm i serve -g
```

```shell
# === 1. 将 less 转成 css ===
# 安装 less
sudo npm i less -g
# 转换
lessc input.less output.css

# === 2. 压缩 css 文件 ===
# 安装 minify 压缩插件
sudo npm i minify -g
# 压缩
minify output.css > output.min.css
```

构建命令:

```json
{
  "scripts": {
    "style": "lessc styles/main.less styles/main.css && minify styles/main.css styles/main.mini.css"
  }
}
```

### 构建脚本文件实战

Babel 插件可以将 ES6+ 新语法转成 ES5

Babel 转换规则: `babel-preset-es2018` 只能将 ES2018 转换成 ES2017, 以此类推; `babel-preset-env` 包含了 ES5+ 的所有的转换规则.

Babel 转换命令:

```shell
# 单个文件
babel input.js --out-file output.js 
# 或:
babel input.js -o output.js

# 整个目录
babel src --out-dir dist
# 或:
babel src -d dist
```

```shell
# 初始化项目
npm init --yes
# 安装 Babel
sudo npm install -g babel-core babel-cli
# 安装转码规则
npm install -D babel-preset-env
# 配置转换规则
.babelrc
# 在 npm scripts 中添加转换命令
babel src -d dist
# 执行转换命令
```

### 代码格式校验

使用 ESLint

```shell
# 初始化项目
npm init --yes
# 安装 ESLint
npm i eslint -g
#初始化配置文件 
eslint --init

#检查 JS 代码格式
#单个文件
eslint path/filename.js
#整个目录
eslint path/dirname
```

StyleLint

对 CSS 代码格式进行检查

```shell
# 使用 StyleLint
# 初始化项目
npm init --yes
# 安装 StyleLint
npm i stylelint -g 
# 安装检测标准
npm i stylelint-config-standard -g
# 创建配置文件
.stylelintrc.json

# 检查 CSS 代码格式
# 单个文件
stylelint path/filename.css
#整个项目
stylelint **/*.css
```

## Gulp

Gulp 与 npm scripts

- Gulp 与 npm scripts 都能够实现自动化构建
- Gulp 语法简单
  - Gulp 语法就是 JavaScript 语法
  - npm scripts 语法接近 shell 脚本
- Gulp 生态完善，构建效率高

### Gulp 基本使用

```shell
# 全局安装 gulp 客户端
npm install -g gulp- cli
# 初始化项目
npm init --yes
# 安装 gulp 包
npm install gulp -D
# 新建 gulpfile 文件 
gulpfile.js
# 在 gulpfile.js 中，创建 gulp 任务
# 执行 gulp 任务
gulp <task-name>
```

### Gulp 组合任务

- 并行执行: `gulp.parallel(task1, task2, task3)`
- 串行执行: `gulp.series(task1, task2, task3)`

Gulp 构建组合任务

`gulp.series( 任务1, gulp.parallel( 任务2, 任务3 ), 任务4 )`

### Gulp 文件操作

Gulp 是基于 流 的构建系统

### Gulp 构建样式文件

源代码 => 转换/压缩/重命名 => 目标代码

Gulp 构建样式文件所需插件:

```shell
# 将 less 文件，转成 css 文件
npm i gulp-less -D
# 压缩 CSS 代码
npm i gulp-clean-css -D
# 对文件进行重命名
npm i gulp-rename -D
```

#### CSS hack 与 Autoprefixer 保证 CSS 的兼容性

CSS hack

- CSS 代码存在兼容性问题
  - 同一段 CSS 代码，在不同浏览器上的呈现效果不同。
- 针对不同的浏览器写相应的 CSS 代码
  - 我们把针对不同的浏览器写相应的 CSS 代码的过程，叫做 CSS hack!

> CSS hack 的目的: 就是使你的 CSS 代码兼容不同的浏览器!

- Autoprefixer 插件给 CSS 属性(user-select)，添加浏览器特有的前缀
- Autoprefixer 使用 `caniuse.com` 的数据 来决定哪些属性需要加前缀

### Gulp 构建脚本文件

源代码 => 编译/压缩/重命名 => 目标代码

#### Gulp 构建脚本文件所需插件

- gulp-babel      => 将 ES6+ 新语法转成 ES5
- gulp-uglify     => 压缩 JS 代码
- gulp-rename     => 对文件进行重命名

### Gulp 构建页面(HTML)文件

Gulp 构建 HTML 文件所需插件

gulp-htmlmin => 压缩 HTML 文件

### Gulp 构建任务组合

#### Gulp 构建资源(图片)文件

Gulp 图片文件所需插件

gulp-imagemin => 压缩图片文件

### Gulp 文件清除

Gulp 清除文件所需插件

del 删除文件和目录

### Gulp 开发服务器

开发服务器构建插件

browser-sync 发布 web 服务

#### Gulp 使用 Bootstrap

Gulp 中安装 Bootstrap

- bootstrap 提供常用的页面效果
- jquery Bootstrap 的依赖包

#### Gulp 开发服务器中监视文件变化

### Gulp 在 Yeoman 中的应用

以 Webapp 生成器为例









