# cnode

> A Vue.js project

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

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


在vue-cli构建的vue工程中使用jquery需要设置webpack，具体操作方法如下：
1：首先安装jquery
  npm install jquery --save

2：在webpack.base.conf.js里加入
  var webpack = require("webpack")

3：在module.exports的最后加入
  plugins: [
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.ProvidePlugin({
       jQuery: "jquery",
       $: "jquery",
       "window.jQuery":"jquery"   // 配置全局
   })
  ]

4：在main.js中引入
  import $ from 'jquery'

5.最后 npm run dev就可以了
