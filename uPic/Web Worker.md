# Web Worker

## 什么是web worker

> JS 是单线程运行的。
>
> JS的主要用途是与用户交互，操作DOM。
>
> 因为 JavaScript 是单线程的，在某一时刻内只能执行特定的一个任务，并且会阻塞其它任务执行。

### Web Worker

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。

在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。

```
Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。
```

#### 注意：

- 同源限制
  - 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- DOM 限制
  - Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用`document`、`window`、`parent`这些对象。但是，Worker 线程可以`navigator`对象和`location`对象。
- 通信联系
  - Worker 线程不能执行`alert()`方法和`confirm()`方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制
  - Worker 线程无法读取本地文件，即不能打开本机的文件系统（`file://`），它所加载的脚本，必须来自网络。

## 为什么使用web worker?

因为js是单线程，如果存在大数据运算的时候会影响用户使用体验，出现卡顿的情况。
使用web workers 可以开启一个线程，在运算的同时，不影响用户体验。

## 什么情况下使用web worker?

存在大数据运算的时候。

## 如何使用web worker? 

https://github.com/GitHubJiKe/esbuild-vue2-template/tree/web-work