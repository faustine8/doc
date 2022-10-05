# TypeScript

## 简介与相关概念

### 前言

为什么要使用 TypeScript 呢?

- TypeScript 提供类型系统
- TypeScript 能大大提高代码的可靠程度

### 相关概念

强类型与弱类型

静态类型与动态类型

> JS 既是弱类型又是动态类型;

### 简介

TypeScript 是 JavaScript 的超集.

> TS = JS + ES6 + 类型系统; TS 最终都会被编译成 JS

## 安装与编译

```shell
npm i typescript -D
```

向已有项目添加 TS 支持

```shell  
vue add @vue/typescript
```

在 `<script lang="ts">` 标签中声明使用 TS.

---

```shell
tsc --init
```

创建 tsconfig.json 文件, 拥有这个文件后再使用 `tsc` 命令就可以编译项目下所有的 `.ts` 文件.

## 语法

类型注解

```ts
const str: string = '100'
const num: number = 10
const bool: boolean = true
```

`any` 可以表示任意类型.




