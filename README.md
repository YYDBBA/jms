# jms

>全栈旅行项目 Vue全家桶+Node.js+MongoDB

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 注意细节
将DB文件导入本地数据库，本项目前后端分离，根目录和server目录都要npm install一下，这个时候就可以启动项目了。

## 1.聊天功能
用到socket.io，API不难。

## 2.上传图片功能
用到两个第三方库，formidable、silly-time；
前者处理提交的图片，上传到本地服务器，后者重命名图片，以时间作为标准，使得命名唯一。

## 3.分页功能
element ui分页组件功能很全，这里用到最全的那一个，和MongoDB搭配使用很友好


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
