<template>
  <div style="margin-top:19px;">
    <router-link class="set" to="set"><img src="/static/img/login_set.png" /></router-link>

  <div class="login-header">
    <router-link tag="div" class="login-wrapper" to="/loginView">
      <div class="login-wrapper-left"><img src="/static/img/login_avatar_default.png"></div>
      <div class="login-wrapper-right">
        <div class="right-top-text">
          <span>{{this.$store.state.isLogin?this.$store.state.name:'请先登录'}}</span>
          <span class="icon icon-right"></span>
        </div>
        <div class="right-bottom-text">
          <span>SMZDM参与值友互动、签到抽大奖</span>
        </div>
      </div>
    </router-link>
  </div>
  <div class="activity">
    <div class="activity-left">
      <div class="activity-item">
        <i class="iconfont iconfont-lucky_house"></i>
        <span class="">幸运屋</span>
        <p>高端贱货  幸运抽奖</p>
      </div>
      <div class="activity-item">
        <i class="iconfont iconfont-my_gift"></i>
        <span class="">我的礼包</span>
        <p>金币礼包  值等你来</p>
      </div>
      <div class="activity-item">
        <i class="iconfont iconfont-ticket"></i>
        <span class="">优惠券</span>
        <p>必领好券  实时汇总</p>
      </div>
      <div class="activity-item">
        <i class="iconfont iconfont-git_change"></i>
        <span class="">礼品兑换</span>
        <p>多款礼品卡值等你兑</p>
      </div>
    </div>
    <div class="activity-right">
      <div class="activity-item">
        <img src="/static/img/iconfont-signIn.png" style="width:73px;"/>
        <p style="font-size:14px;margin:0;text-align:center;">·规则说明·</p>
      </div>
    </div>
  </div>
  <i class="iconfont-daily-award"></i>
  <div class="func-wrap">
      <div class="fuc-box">
        <span class="func-box-tit">收藏</span>
      </div>
      <div class="fuc-box">
        <span class="func-box-tit">爆料</span>
      </div>
      <div class="fuc-box">
        <span class="func-box-tit">众测</span>
      </div>
      <div class="fuc-box">
        <span class="func-box-tit">原创</span>
      </div>
      <div class="fuc-box">
        <span class="func-box-tit">闲置</span>
      </div>
      <div class="fuc-box">
        <span class="func-box-tit">百科</span>
      </div>
  </div>
  <!-- 标签页开始-->
  <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button">系统消息</a>
    <a href="#tab2" class="tab-link button">我的消息</a>
    <a href="#tab3" class="tab-link button">收到的评论</a>
    <a href="#tab4" class="tab-link button">发出的评论</a>
  </div>
  <div class="content-block">
    <div class="tabs">
      <div id="tab1" class="tab active">
        <div class="content-block">
          <p>登录后查看消息</p>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="content-block">
          <p>登录后查看消息</p>
        </div>
      </div>
      <div id="tab3" class="tab">
        <div class="content-block">
          <p>登录后查看消息</p>
        </div>
      </div>
      <div id="tab4" class="tab">
        <div class="content-block">
          <p>登录后查看消息</p>
        </div>
      </div>
    </div>
  </div>

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
.buttons-tab .button.active{
  color:#ff0000;
  border-color: #ff0000;
}
.tab p{
  text-align: center;
  font-size: 14px;
}
.buttons-tab .button{
  font-size: 14px;
}
.func-wrap{
  display: flex;
  flex-wrap: wrap;
  @include px2rem(padding-bottom,10px);
  background: {
    color: #eee;
  }
  .fuc-box{
    @include px2rem(width,124px);
    @include px2rem(height,56px);
    background: {
      color: #fff;
    }
    @include px2rem(line-height,56px);
    text-align: center;
    @include px2rem(margin-left,10px);
    @include px2rem(margin-top,10px);
  }
}
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
    @include px2rem(font-size,14px);
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
.activity{
  display: flex;
  @include px2rem(margin,20px);
  .activity-left{
    flex-grow: 2;
    display: flex;
    flex-wrap: wrap;
    border-right: 1px solid #ddd;
    @include px2rem(margin-right,25px);
    .activity-item{
          @include px2rem(height,50px);
          @include px2rem(width,130px);
        span{
          @include px2rem(font-size,18px);
          @include px2rem(padding-left,10px);
        }
        p{
          margin: 2px;
          @include px2rem(font-size,13px);
          color: #8f8f8f;
        }
    }
  }
  .activity-right{
    flex-grow: 1;
    .activity-item{
      text-align: center;
    }
  }

}

.iconfont{
  @include px2rem(width,15px);
  @include px2rem(height,15px);
  display: inline-block;
  vertical-align: middle;
  &.iconfont-lucky_house{
    background-image: url(/static/img/iconfont-lucky_house.png);
    background-size: contain;
  }
  &.iconfont-my_gift{
    background-image: url(/static/img/iconfont-my_gift.png);
    background-size: contain;
  }
  &.iconfont-ticket{
    background-image: url(/static/img/iconfont-ticket.png);
    background-size: contain;
  }
  &.iconfont-git_change{
    background-image: url(/static/img/iconfont-git_change.png);
    background-size: contain;
  }
}
.iconfont-daily-award{
  background-image: url(/static/img/iconfont-daily-award.png);
  @include px2rem(width,414px);
  display: inline-block;
  @include px2rem(height,40px);
      background-size: contain;
}
</style>
