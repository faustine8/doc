# 综合案例 TodoMVC

TodoMVC 是一个经典项目，让开发者快速实践到框架开发方式。

官网地址: <http://todomvc.com/>

功能完备不冗余，多样实现引深思。

## 准备工作

```shell
# 从 github 克隆项目模板。
git clone https://github.com/tastejs/todomvc-app-template.git
# 进入项目目录，安装项目依赖
cd 项目目录
npm install
# 安装 Vue.js
npm install vue@^2.6.12
```

什么时候使用 `computed` 什么时候使用 `methods` ?

举例来说，案例中的事项个数，每次新增减少都会变更，用 `computed` 更好; 
后面单词的单复数，总共只有两个值，不会频繁计算，用 `method` 更好。
