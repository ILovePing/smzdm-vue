<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">{{username}}</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{pageCount}} 篇文章</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
      	username:this.$store.state.username,
      	pageCount:this.$store.state.totalPageCount
      }
    }
  }
</script>
