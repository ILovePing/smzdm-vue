import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/home',
},{
  name:'home',
  path: '/home',
  component: resolve => require(['./views/Home.vue'],resolve),
  // children:[]
},{
  name:'price',
  path:'/price',
  component: resolve => require(['./components/LogTime.vue'],resolve)
},{
  name:'itemDetail',
  path:'/itemDetail/:pageId',
  component: resolve => require(['./components/ItemView.vue'],resolve)
}];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  replace:true
})



export default router;
