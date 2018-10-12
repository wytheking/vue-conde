import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import home from './components/Home'
import themeDetails from './components/themeDetails'
import userData from './components/userData'
import noob from './components/Noob'
import about from './components/About'
import login from './components/login'
import api from './components/Api'
import forgetPassword from './components/forgetPassword'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/topic/:id',
    component: themeDetails
  },
  {
    path: '/user/:name',
    component: userData
  },
  {
    path: '/getstart',
    component: noob
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/api',
    component: api
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/search_pass',
    component: forgetPassword
  }
];

const router = new VueRouter({
  routes
})

export default router;
