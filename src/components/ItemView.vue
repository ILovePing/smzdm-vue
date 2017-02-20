<template>
<div>
  <img :src="src"> {{pageTitle}}-{{pageSubTitle}} asdfas
</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.fetchPageData(vm);
    })
  },
  methods: {
    fetchPageData(vm) {
      console.log(vm.$route.params.pageId);
    }
  },
  data() {
    return {

    }
  },
  computed: {

  }

}
</script>
