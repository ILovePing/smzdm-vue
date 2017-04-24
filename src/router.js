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
  component: resolve => require(['./views/youhui.vue'],resolve)
},{
  name:'itemDetail',
  path:'/itemDetail/:id',
  component: resolve => require(['./components/ItemView.vue'],resolve)
},{
  name:'my',
  path:'/my',
  children:[
    {
      name:'test',
      path:'/test',
      component: resolve => require(['./views/test.vue'],resolve)
    }
  ],
  component: resolve => require(['./views/My.vue'],resolve)
},{
  name:'set',
  path:'/set',
  component: resolve => require(['./views/set.vue'],resolve)
},{
  name:'pushSet',
  path:'/pushSet',
  component: resolve => require(['./views/subSet/pushSet.vue'],resolve)
}];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  replace:true,
  mode:'history'
})



export default router;
