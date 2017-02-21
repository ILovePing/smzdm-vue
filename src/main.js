// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios';
Vue.prototype.$http = axios;
// import 'bootstrap/dist/css/bootstrap.css'

// Vue.use(VueResource)

router.beforeEach((to,from,next)=>{
    console.log(to.path+'   '+from.path)
    next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
