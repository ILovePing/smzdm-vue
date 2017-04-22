<template>
  <div>
  <img src="static/img/fakeTop.png" style="position:fixed;top:0;left:0;z-index:9999;"/>
    <div class="page page-current">
  <nav class="bar bar-tab" v-if="!this.$store.state.fullScreen">
    <bar-item path="/home" icon="home" label="首页"></bar-item>
    <bar-item path="/price" icon="price" label="好价"></bar-item>
    <bar-item path="/item" icon="item" label="好物"></bar-item>
    <bar-item path="/article" icon="article" label="好文"></bar-item>
    <bar-item path="/my" icon="me" label="我的"></bar-item>
  </nav>
  <div class="content">
    <transition name="fade" mode="out-in">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
  </div>
</div>
</div>
</template>

<script>
  import BarItem from './components/BarItem.vue'
  import $ from 'zepto'
  export default {
    components: {
       BarItem
     },
     data:function(){
       return {

       }
     }

  }
</script>

<style scoped>
.page-current{
  /*position:relative;*/

}
.bar-tab{
  height:2.264rem;
  background: #fff;
}
.bar-tab .tab-item{
  height:2.264rem;

}
.tab-item.active{
    color: #ff0000;
  border-bottom: 0.09rem solid;
}
</style>
