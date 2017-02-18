<template>
  <div>
    <img :src="src">
    {{pageTitle}}-{{pageSubTitle}}
  </div>
</template>
<script>
  export default{
    props:{
      src:'',
      pageTitle:'',
      pageSubTitle:''
    },

  }
</script>
