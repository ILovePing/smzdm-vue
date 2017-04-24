<template>
  <div style="margin-top:19px;">
    <router-link class="set" to="set"><img src="/static/img/login_set.png" /></router-link>

  <div class="login-header">
    <router-link tag="div" class="login-wrapper" to="/">
      <div class="login-wrapper-left"><img src="/static/img/login_avatar_default.png"></div>
      <div class="login-wrapper-right">
        <div class="right-top-text">
          <span>请先登录</span>
          <span class="icon icon-right"></span>
        </div>
        <div class="right-bottom-text">
          <span>SMZDM参与值友互动、签到抽大奖</span>
        </div>
      </div>
    </router-link>
  </div>
  <router-view></router-view>
</div>
</template>
<script>
  export default {
    activated(){
        this.$store.state.fullScreen = false;
    },
    components: {

    },
    data(){
      return {
      }
    }
  }
</script>
<style lang="scss">
@import "../assets/css/common";
.login-header{
  width:100%;
  @include px2rem(height,132px);
  background:{
    color:#f04848;
  }
  position: relative;
}
.set{
  width: 21px;
  height: 21px;
  display: inline-block;
  position: absolute;
  z-index: 999;
  right: 12px;
  top: 27px;
    img{
      width:100%;
    }
}
.login-wrapper{
  display: flex;
  position: absolute;
  @include px2rem(bottom,20px);
  @include px2rem(left,20px);
  .login-wrapper-right{
    color: #fff;
    font-size: 14px;
    @include px2rem(padding-top,9px);
    @include px2rem(padding-left,14px);
    .right-top-text{
      font-size: 18px;
      .icon-right{
        @include px2rem("margin-left",-9px);
      }
    }
    .right-bottom-text{
      color:#f8c9c9;
    }
  }
}

</style>
