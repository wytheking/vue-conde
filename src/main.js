// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import '../static/reset.less' // 引入重置样式
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router';
//require('../static/reset.less');  // 引入重置样式 在这里引入报错，在App.vue中引入

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
