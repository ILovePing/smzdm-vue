<template>
<div class="contend-padded">
  <img :src="a.stuffImage" style="width:100%;height:12rem;"> <h3>{{a.stuffTitle}}</h3>
    <button class="button button-round" @click="back()">返回</button>
  <div v-html="a.stuffDesc"></div>
</div>
</template>
<script>
import api from '../api/api'
export default {
  beforeRouteEnter(to, from, next) {
    next()
  },
  activated(){
    this.$store.dispatch('getItemDetail',this.$route.params.id)
    this.$store.state.fullScreen = true;
  },
  methods:  {
    fetchData(){
      this.$store.dispatch('getItemDetail',this.$route.params.id)
    },
    back(){
      // console.log(123)
      this.$router.go(-1)
    }
  },
  watch:{
    '$router':'fetchData'
  },
  data(){
    return {
      // init:false
    }
  },
  computed: {
    a:function(){
      let {stuffImage,stuffDesc,stuffTitle} = this.$store.state.itemDetail
      return {stuffImage,stuffDesc,stuffTitle};
    },
      // stuffImage:function(){
      //   return this.$store.state.itemDetail.stuffImage
      // },
      // stuffDesc:function(){
      //   return this.$store.state.itemDetail.stuffDesc
      // },
      // stuffTitle:function(){
      //   return this.$store.state.itemDetail.stuffTitle
      // }


  }

}
</script>
