<template>
    <div class="page page-current">
  <nav class="bar bar-tab">
    <bar-item path="/home" icon="home" label="首页"></bar-item>
    <bar-item path="/price" icon="cart" label="好价"></bar-item>
    <bar-item path="/stuff" icon="gift" label="好物"></bar-item>
    <bar-item path="/article" icon="share" label="好文"></bar-item>
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
</template>

<script>
  import BarItem from './components/BarItem.vue'
  import $ from 'zepto'
  export default {
    components: {
       BarItem
     },

  }
</script>

<style>

</style>
