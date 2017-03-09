<template>
<div class="contend-padded">
  <img :src="src" style="width:100%;height:12rem;"> <h3>{{title}}</h3>
  <div v-html="desc"></div>
</div>
</template>
<script>
import api from '../api/api'
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,一开始没有生成实例的时候不能用this.$http
      vm.fetchPageData(vm);
    })
  },
  methods: {
    fetchPageData(vm) {
      api.indexGetDetail(vm.$route.params.id,(res)=>{
        console.log(res)
          vm.title = res.stuffTitle;
          vm.desc = res.stuffDesc;
          vm.src = res.stuffImage;
        })
  },
  data() {
    return {
      title:'',
      desc:'',
      src:''
    }
  },
  computed: {

  }

}}
</script>
