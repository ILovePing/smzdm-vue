<template>
  <div class="">
    <bar-back title="登录"></bar-back>
    <div class="content">
  <div class="list-block">
    <ul>
      <!-- Text inputs -->
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">用户名</div>
            <div class="item-input">
              <input v-model="username" type="text" placeholder="手机号/邮箱">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input v-model="password" type="password" placeholder="密码">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="content-block">
      <p><a @click.prevent="login" href="#" class="button button-big button-danger">登录</a></p>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import $ from 'zepto';
import BarBack from '../components/BarBack';
  export default {
    activated(){
      this.$store.state.fullScreen = true;
      this.username = this.password = '';
    },
    components: {
      BarBack
    },
    methods:{
      async login(){
        await this.$store.dispatch('login',this.usernmae,this.password)
        if(this.$store.state.logFeedback.ret_code === 0){
          this.$store.state.name = this.username
          this.$store.state.isLogin = true;
          history.back()
        }else{
          $.toast(this.$store.state.logFeedback.ret_msg)
        }
      }
    },
    data(){
      return {
        username:'',
        password:''
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/css/common";
.list-block{
  @include px2rem(margin-top,44px+19px);
}
input:-webkit-autofill {
     -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;//关于解决输入框背景颜色
     -webkit-text-fill-color: rgba(0,0,0,1)!important;//关于接输入框文字颜色
 }
.content-block{
  p{
      margin: .5rem 0;
  }
  .button-danger{
    padding: 0;
    background: #f6383a;
    color: #fff;
  }
}
</style>
