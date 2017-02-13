// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import routes from './router'

// import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  replace:true
})

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
