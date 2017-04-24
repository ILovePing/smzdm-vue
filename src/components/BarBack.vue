<template>
  <div class="back-container">
    <span @click="back()" class="icon icon-left"></span>
    <span  class="back-title">{{this.title}}</span>
  </div>
</template>

<script>
import $ from 'zepto';
export default {
  data(){
    return {

    }
  },
  beforeMount(){
    $.destroyPullToRefresh('.content')
  },
  props: {
    title:''
  },
  methods:{
    back(){
      history.back()
    }
  },
  computed: {

  }
}
</script>
<style scoped lang="scss">
@import "../assets/css/common";
.back-container{
  width: 100%;
  @include px2rem(height,44px);
  background:{
    color:#f04848;
  }
  position: fixed;
      top: 19px;
      left: 0;
      z-index: 999;
}
.icon-left{
  position: absolute;
  @include px2rem(line-height,44px);
  color:#fff;
  @include px2rem(left,15px);
  z-index: 999;
}
.back-title{
    @include px2rem(line-height,44px);
    text-align: center;
    color: #fff;
    width: 100%;
    display: inline-block;
}
</style>
