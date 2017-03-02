<template>
<div class="contend-padded">
  <img :src="src" style="width:100%;height:12rem;"> <h3>{{pageTitle}}</h3>
  <div v-html="pageSubTitle"></div>
</div>
</template>
<script>

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,一开始没有生成实例的时候不能用this.$http
      vm.fetchPageData(vm);
    })
  },
  methods: {
    fetchPageData(vm) {
      vm.$http.get('http://localhost:3000/getPage?pageId='+vm.$route.params.pageId)
      .then((res) => {
        console.log(res)
        if(res.status == 200 && res.data){
          vm.pageTitle = res.data.stuffTitle;
          vm.pageSubTitle = res.data.stuffDesc;
          vm.src = res.data.stuffImage;
        }else{
          console.log(res.statusText)
        }
      }).catch((err) => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      pageTitle:'',
      pageSubTitle:'',
      src:''
    }
  },
  computed: {

  }

}
</script>
