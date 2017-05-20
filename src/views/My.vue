<template>
  <div style="margin-top:19px;">
    <router-link class="set" to="set"><img src="/static/img/login_set.png" /></router-link>

  <div class="login-header" v-if="!this.$store.state.isLogin">
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
  <div class="login-info" v-if="this.$store.state.isLogin">
      <div class="login-avatar"><img src="/static/img/login_avatar.png"></div>
      <div class="login-info-red">
        <div class="login-info-name">
          <span class="username">rick1994</span>
          <span class="level">LV3</span>
        </div>
      </div>
      <div class="login-info-white">
        <div class="share_link">
          <img src="/static/img/share_link.png" />
          <span>分享有礼</span>
        </div>
        <div class="my-property">
          <span class="my-grey-title">我的资产</span>
          <span class="redFont">2</span>金币
          <span class="redFont">0</span>碎银子
          <span class="redFont">319</span>积分
        </div>
        <div class="my-fans">
          <span class="my-grey-title">值友关注</span>
          <span class="redFont">0</span>粉丝
          <span class="redFont">0</span>关注
        </div>
      </div>
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
  <div class="func-wrap" v-if="!this.$store.state.isLogin">
      <div class="fuc-box"  v-for="(item,index) in funcTit">
        <span  class="func-box-tit">{{item}}</span>
      </div>
  </div>
  <div class="func-wrap" v-else>
      <div class="fuc-box"  v-for="(item,index) in funcTit">
        <span  class="func-box-tit-login"><span class="redFont">{{funcNum[index]}}</span>{{item}}</span>
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
        funcTit:[
          '收藏','爆料','众测','原创','闲置','百科'
        ],
        funcNum:[
          13,0,0,0,0,0
        ]
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
.redFont{
  color: #f04e4e;
}
.login-info{
  position: relative;
  .login-avatar{
    img{
      @include px2rem(height,60px);
      @include px2rem(width,60px);
      border: 2px solid #fff;
      @include px2rem(border-radius,60px);
      position: absolute;
        @include px2rem(top,22px);
        @include px2rem(left,20px);
      z-index: 999;
    }
  }
  .login-info-red{
    position: relative;
    @include px2rem(height,56px);
    background: {
      color: #f04848;
    }
    .login-info-name{
      position: absolute;
      bottom: 0;
      @include px2rem(left,100px);
      color: #fff;
      .level{
        background: linear-gradient(to bottom right, #f16e3a, #ec3838);
        font-size: 13px;
        padding: 0 4px;
      }
    }
  }
  .login-info-white{
    position: relative;
    @include px2rem(height,100px);
    @include px2rem(padding-top,30px);
    @include px2rem(padding-left,22px);
    border-bottom: 2px solid #dbdbdb;
    background: {
      color: #fff;
    }
    font-size: 16px;
    .my-grey-title{
      font-size: 14px;
      color: #b0acac;
    }
    .share_link{
      position: absolute;
      @include px2rem(right,14px);
      top: -1px;
      color: #fff;
      @include px2rem(border-bottom-right-radius,4px);
      @include px2rem(border-bottom-left-radius,4px);
      background: #f04848;
      @include px2rem(padding-right,8px);
      @include px2rem(padding-left,8px);
      img{
        @include px2rem(height,16px);
          @include px2rem(width,16px);
          vertical-align: text-top;
      }
    }
    .redFont{
      padding: 0 5px 0 8px;
    }
  }
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
    .func-box-tit-login{
      font-size: 16px;
      .redFont{
          @include px2rem(padding-right,28px);
      }
    }
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
          font-size: 14px;
          @include px2rem(padding-left,10px);
        }
        p{
          margin: 2px;
        font-size: 13px;
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
