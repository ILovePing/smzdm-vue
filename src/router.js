export default  [{
    path: '/',
    redirect: '/home',
  },{
  path: '/home',
  component: resolve => require(['./views/Home.vue'],resolve)
  },{
  path:'/price',
  component: resolve => require(['./components/LogTime.vue'],resolve)
},{
  path:'/home/itemDetail:id',
  component: resolve => require(['./components/ItemView.vue'],resolve)
}
]
