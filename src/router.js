export default  [{
    path: '/',
    redirect: '/home',
  },{
  path: '/home',
  component: resolve => require(['./Home.vue'],resolve)
  },{
  path:'/price',
  component: resolve => require(['./components/LogTime.vue'],resolve)
}]
