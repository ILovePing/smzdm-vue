<template>
  <div class="">
    <bar-back title="推送设置"></bar-back>

  </div>
</template>
<script>
import BarBack from '../../components/BarBack';
  export default {
    activated(){
      this.$store.state.fullScreen = true;
    },
    components: {
      BarBack
    },
    data(){
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../../assets/css/common";

</style>
