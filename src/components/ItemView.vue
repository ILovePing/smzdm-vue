<template>
  <div>
    <img :src="src">
    {{pageTitle}}-{{pageSubTitle}}
  </div>
</template>
<script>
  export default{
    props:{
      src:'1',
      pageTitle:'1',
      pageSubTitle:'1'
    },
    computed:{

    }

  }
</script>
