<template>
    <router-link tag="div" class="item" :to="url">
      <!-- {{title}} -->
    </router-link>
</template>

<script>
export default {
  props:{
    url:'',
    title:'',
    img:''
  }
}
</script>
<style>

  .item{
    width:4rem;
    height:4rem;
    border: 1px solid;
    margin:.5rem;
  }
</style>
