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

#### npm scripts 中任务的执行方式

并行 / 串行

- 并行执行(parallel): `任务1 & 任务2` 任务之间没有先后顺序，同时执行可以提高执行效率
- 串行执行(series): `任务1 && 任务2` 任务之间有先后顺序，先执行前一个任务，后执行下一个

> & (并行执行)在 Windows 下不起作用

#### npm-run-all 插件

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
# === 将 less 转成 css ===
# 安装 less
npm i less -g
# 转换
lessc input.less output.css

# === 压缩 css 文件 ===
# 安装 minify 压缩插件
npm i minify -g
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

```shell
# 初始化项目
npm init --yes
# 安装 Babel
npm install -g babel-core babel-cli
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




