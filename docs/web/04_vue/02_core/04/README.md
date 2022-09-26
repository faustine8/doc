# Vue CLI

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，称为脚手架工具。

统一项目的架构风格。

初始化配置项目依赖。

提供单文件组件。

操作方式: 命令行工具。

## 安装

```shell
# 安装
npm install -g @vue/cli
# 升级
npm update -g @vue/cli
```

## 项目搭建

```shell
# 创建项目
vue create project-demo
# 选择 Preset (Default 即可)
# 选择包管理器 (npm 即可)

# 创建完成

# 运行项目
npm run serve
```

## 目录与文件

文件目录介绍

```
└─ 根目录
    ├─ public         预览文件目录
    └─ src
        ├─ assets     静态资源目录
        └─ components 项目组件目录
        └─ App.vue    根组件
        └─ main.js    入口文件
```

### 单文件组件

单文件组件可以将组件的功能统一保存在以 `.vue` 为扩展名的文件中。

## 打包与部署

### 打包

打包就是将 Vue CLI 项目编译为浏览器可识别的文件。

命令:

```shell
npm run build
```

### 部署

部署指的是将 Vue 项目 dist 目录部署到服务器上。

安装静态文件服务器: `npm install –g serve`

在 dist 下通过 `serve` 命令部署

> 这是比较远古的方式了。

