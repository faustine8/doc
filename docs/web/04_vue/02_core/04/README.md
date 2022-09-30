# Vue CLI

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，称为脚手架工具。

特点：

- 提供了统一项目的架构风格。
- 提供了初始化配置项目依赖。
- 提供了单文件组件的支持。

> 单文件组件：单个文件就是一个组件，我们可以将关于当前组件的所有结构、样式以及逻辑都写在内部，通过 VueCli 的处理，帮我们自动的处理为可运行的形式。
> 这样书写时可维护性比较高，处理之后又变成了可运行的文件，这对我们的项目是非常有帮助的。

操作方式: 命令行工具。

## 安装

```shell
# 安装
sudo npm i -g @vue/cli
# 升级
sudo npm update -g @vue/cli
```

## 项目搭建

```shell
# 创建项目
vue create project-demo
# 选择 Preset (Default 即可)
# 选择包管理器 (npm 即可)
# 创建完成

# 选择自定义方案的时候
# 空格 操作选择和取消勾选; 回车键 操作进入下一步

# 运行项目
npm run serve
```

---

如果保存为预设之后，下一次再创建项目的时候就可以选择了

```shell
? Please pick a preset: (Use arrow keys)
❯ demo-preset ([Vue 2] less, babel, router, eslint)
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
  Manually select features
```

预设信息保存在 Home 目录下的 `.vuerc` 文件中.

```json
{
  "useTaobaoRegistry": false,
  "packageManager": "npm",
  "presets": {
    "demo-preset": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-router": {
          "historyMode": false
        },
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        }
      },
      "vueVersion": "2",
      "cssPreprocessor": "less"
    }
  }
}
```

如果不想再要这个预设，最简单的方式是直接删除这个 `.vuerc` 文件就可以了。

## 目录与文件

文件目录介绍

```
.
├── public           预览文件目录
├── src
│    ├── App.vue     根组件
│    ├── assets      静态资源目录
│    ├── components  项目组件目录
│    └── main.js     入口文件
└── vue.config.js
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

