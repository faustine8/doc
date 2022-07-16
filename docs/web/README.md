---
lang: zh-CN
title: Java
description: 前端技术栈积累
home: true
heroImage: https://cdn-statics.zmn.cn/_nuxt/img/logo_web.b793f2a.png
heroText: 大前端技术栈~
tagline: 💎
actions:


- text: HTML5
  link: /web/01_html5/01_html
  type: primary
- text: JavaScript
  link: /web/02_js/
  type: primary
- text: 前端工程化
  link: /web/03_modules/
  type: primary
- text: Vue
  link: /web/04_vue/
  type: secondary
- text: React
  link: /web/05_react/
  type: secondary
- text: 小程序与游戏开发
  link: /web/06_mobile/
  type: secondary

footer: faustine 2022

---

环境配置

```shell
# npm 配置淘宝代理
npm config set registry https://registry.npm.taobao.org
# 取消代理
npm config set registry https://registry.npmjs.org
# 查看 npm 代理
npm info underscore
```

安装 Less

```shell
sudo npm install -g less
# 检查是否安装成功
lessc -v
```

安装 yarn

```shell
sudo npm install -g yarn
# 配置下载源
yarn config set registry https://registry.npm.taobao.org -g
```

报错：

```text
This is a problem related to network connectivity.
```

运行 `npm config set proxy null` 
