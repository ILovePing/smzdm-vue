<template>
  <div class="">
    <bar-back title="设置"></bar-back>
    <div class="list-block">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">每日精选推送</div>
            <div class="item-input">
              <label class="label-switch">
                <input type="checkbox">
                <div class="checkbox"></div>
              </label>
            </div>
          </div>
        </div>
      </li>
      <li @click="toPushSet()">
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">推送设置</div>
            <div class="item-input">
              <span class="icon icon-right"></span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">签到提醒</div>
            <div class="item-input">
              <label class="label-switch">
                <input type="checkbox">
                <div class="checkbox"></div>
              </label>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">辅助设置</div>
            <div class="item-input">
              <span class="icon icon-right"></span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">移动网络图片设置</div>
            <div class="item-input">
              <span class="small-tip">标清</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">个人设置</div>
            <div class="item-input">
              <span class="icon icon-right"></span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">清除缓存</div>
            <div class="item-input">
              <span class="small-tip">3.93M</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">清除搜索历史</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">推荐“什么值得买”给好友</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">意见反馈</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-toggle"></i></div>
          <div class="item-inner">
            <div class="item-title label">关于什么值得买</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="content-block">
      <p><a href="#" class="button button-big button-danger">退出登录</a></p>
    </div>
  </div>
  </div>
</template>
<script>
import BarBack from '../components/BarBack';
  export default {
    activated(){
      this.$store.state.fullScreen = true;
    },
    components: {
      BarBack
    },
    methods:{
      toPushSet(){
        this.$router.push('/pushSet')
      }
    },
    data(){
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/css/common";
body{
  background: {
    color:#fff;
  }
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

.list-block{
  margin:0;
  @include px2rem(margin-top,44px+19px);
  .item-content{
        border-bottom: 1px solid #ddd;
        .small-tip{
          font-size: 14px;
          color: #cecece;
        }
  }
}
.content-block{
  margin:0;
}
.list-block .item-media+.item-inner{
  margin-left: 0;
}
.list-block{
  .item-title{
    &.label{
      width:auto;
      font-size: 16px;
    }
  }
  .item-input{
      width:auto;
  }
}
</style>
