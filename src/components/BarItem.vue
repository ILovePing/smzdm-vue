<template>
  <router-link :to="path" class="tab-item">
    <span class="iconfont" :class="iconClass"></span>
    <span class="tab-label">{{label}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `iconfont-${this.icon}`
    }
  }
}
</script>
<style scoped>
.iconfont{
  width: 16px;
  height: 16px;
  display: inline-block;
}
.iconfont-home{
  background: url(/static/img/home.png)
}
.iconfont-article{
  background: url(/static/img/article.png)
}
.iconfont-me{
  background: url(/static/img/me.png)
}
.iconfont-price{
  background: url(/static/img/price.png)
}
.iconfont-item{
  background: url(/static/img/stuff.png)
}
</style>
