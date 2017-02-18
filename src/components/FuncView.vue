<template>
    <div class="item" :url="url">
      {{title}}
    </div>
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
  }
</style>
