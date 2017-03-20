<template>
    <router-link tag="div" class="item" :to="url">
      <img :src="imgsrc">
      <h3>{{this.name}}</h3>
    </router-link>
</template>

<script>
// import
export default {
  props:{
    url:'',
    name:'',
    icon:'',
    title:''
  },
  computed:{
    imgsrc:function(){
      return `static/img/${this.icon}.png`
    }
  }
}
</script>
<style>
.item img{
  width:1.63rem;
  height: 1.81rem;
}
  .item{
    width:2.8rem;
    height:4rem;
    text-align: center;
  }
  .item:nth-child(-n+5){
    margin-top:.4rem;
  }
  .item h3{
    font-size: .543rem;
    color: #3e3e3e;
    margin-top: .2rem;
    font-weight: normal;
  }
</style>
