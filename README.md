# nuxt2

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```
Vue SSR 官网传送门 [Vue.js SSR](https://ssr.vuejs.org/zh/guide/)

Nuxt官网传送门 [Nuxt.js docs](https://github.com/nuxt/nuxt.js).



> 参考

[精读前后端渲染之争](https://github.com/dt-fe/weekly/blob/master/03.%E7%B2%BE%E8%AF%BB%E5%89%8D%E5%90%8E%E7%AB%AF%E6%B8%B2%E6%9F%93%E4%B9%8B%E4%BA%89.md)

[服务器端渲染VS浏览器端渲染](https://www.cnblogs.com/aliwa/p/8505284.html)

[B站的前端之路](https://juejin.im/post/5a473a2df265da431441098c)

...

发展之路

-> 传统的ASP、Java、PHP后端渲染

-> jQuery、Angular、React、Vue (前端渲染)SPA单页应用流行

-> 同构渲染


# 1 服务端渲染的原理以及性能问题

后端渲染HTML的情况下，浏览器会直接接收到经过服务器计算之后的呈现给用户的最终的HTML字符串，这里的计算就是服务器经过解析存放在服务器端的模板文件来完成的，在这种情况下，浏览器只进行了HTML的解析，以及通过操作系统提供的操纵显示器显示内容的系统调用在显示器上把HTML所代表的图像显示给用户。


## 路线:
web客户端发送URL -> 服务端获得请求并对请求字符串分析 -> 服务端请求相关接口数据 -> 服务器初始渲染（比如Tomcat把jsp编译成servlet） -> 服务端返回已经有正确内容html -> 客户端请求相关的js/css文件 -> 等待文件下载完成 -> 等待js加载并初始化完成 -> 客户端把剩下的少量内容渲染完成
### 优势
1. 首屏显示快，服务端渲染不需要先下载一堆 js 和 css 后才能看到页面（首屏性能）
2. 友好的SEO
3. 服务端渲染不用关心浏览器兼容性问题（随着浏览器发展，这个优点逐渐消失）
4. 对于电量不给力的手机或平板，减少在客户端的电量消耗很重要

### 劣势
1. 模板维护成本高
2. 客户端数据共享成本高
3. 前后端协同开发很麻烦

# 2 前端渲染原理以及性能问题
前端渲染就是指浏览器会从后端得到一些信息（JSON数据、模板文件、直接的合法html字符串等）,由浏览器端负责将这些信息排列成最终可读的html字符串，形成html字符串之后再进行显示。代表是现在流行的 SPA 单页面应用

## 路线:
web客户端发送url -> 服务端返回一个html模板 -> 浏览器下载html里面的js/css文件 -> 等待相关js/css等文件下载完成 -> 等待js加载并初始化解析完成 -> 由js向后端请求api数据（ajax） -> 等待后端返回业务数据 -> 形成html字符串，浏览器渲染页面

### 优势
1. 局部刷新。无需每次都进行完整页面请求
2. 懒加载。如在页面初始时只加载可视区域内的数据，滚动后再加载其它数据
3. 天生的关注分离设计。服务器来访问数据库提供接口，JS 只关注数据获取和展现

### 劣势
1. 需要等待资源加载完成再进行渲染，数据量大的时候会导致白屏，影响用户体验
2. 异步获取内容的网站，不利于seo
3. 网络环境差的情况下，加载时间就会变得很长

# 3 解决问题
> seo

- 预渲染：改善少数营销页面。使用预渲染方式，在构建时简单地生成针对特定路由的静态HTML文件。
- 服务器渲染SSR：页面异步获取内动的网站。

> 首屏空白

- 使用骨架屏
- 使用loading页面

## Vue 服务端渲染官方配置


![wap.yy.com](https://github.com/raylhx/nuxt-yy-demo/blob/master/static/img/vue_process1.png?raw=true)


## Nuxt.js

Nuxt.js 是一个基于Vue.js的通用应用框架,主要关注的是应用的UI渲染,预设了利用Vue.js开发服务端渲染的应用所需要的各种配置。通俗地说就是：开箱即用框架，省去了繁杂的配置。

## 有很多好处,比如：
基于 Vue.js
自动代码分层
强大的路由功能，支持异步数据
静态文件服务
ES6/ES7 语法支持
打包和压缩 JS 和 CSS
HTML头部标签管理
本地开发支持热加载
支持各种样式预处理器： SASS、LESS、 Stylus等等
支持HTTP/2 推送

## 缺陷
不能很好地直接地控制、扩展应用程序的结构
如果出了bug，有时候会一脸懵逼

Nuxt.js 应用一个完整的服务器请求到渲染（或用户通过 `<nuxt-link>`切换路由渲染页面）的流程：

1. 调用nuxtServerInit方法
请求打入时，调用nuxtServerInit方法（Vuex），可以将服务器的一些数据保存，或者执行一些异步操作，并等待数据解析后返回。
2. 执行Middleware层
三步操作
检查nuxt.config.js中全局router middleware字段的配置，并调用相应的中间件方法
匹配并加载与请求相对应的布局layout
匹配页面page以及子组件
3. 调用validate()方法
Validate()在动态路由对应的页面组件中配置一个校验方法用于校验动态路由参数的有效性。
动态路由参数如果是无效的则Nuxt.js 停止渲染当前页面并显示404错误页面
4. 调用 fetch 及 asyncData 方法
fetch() asyncData()方法都会在组件家在之前被调用
asyncData用来异步的进行组件数据的初始化工作，fetch异步获取数据后修改Vuex中的状态。

个人使用体验：
- 省去了复杂的vue server、webpack配置过程，可以开箱即用
- 根据文件夹自动生成路由表
- Nuxt不用考虑异步数据的问题（asyncData() fetch()方法）
- 本地开发支持热加载

开发步骤

0. 选一个demo目标
选择了https://wap.yy.com/的YY移动端页面
1. nuxt项目生成
目录结构...
2. 插件安装
加入flexible.js
加入postcss-px2rem
3. layout布局
由于页面比较简单，只定义一个default页面以及error页面
default引入header、footer公共组件
error页面是自定义的404页面
4. 页面路由
根据官方文档的路由规范，设计目录结构
目录结构如下
自动生成的vue-router路由如下
5. server端api编写
由于页面数据比较少，所以只有两个接口，都是使用模拟数据
/nav
/list/:id

6. 部署
- 服务器 项目打包 -> 配置Nginx -> PM2配置

- github pages 应用静态化 -> 修改路由 -> 访问 (-> 使用Travis CI进行部署) 由于比较穷...就用了第二个方法
https://zhuanlan.zhihu.com/p/33350221

# 4 SSR使用场景
是否真的需要使用SSR取决于内容到大时间对应用程序的重要程度，使用服务端渲染前需要全面评估
## 不需要使用 SSR

1. 后台系统(CMS、MIS、DashBoard) 大多使用SPA的模式，比如统一后台管理系统
2. 功能型页面，比如个人中心、我的收藏
3. 仅在 App 的 WebView 中展现，不作为开放 Web 存在的页面

## 可以考虑使用SSR
1. 偏重内容型网站
2. 首屏渲染时间要求比较高的