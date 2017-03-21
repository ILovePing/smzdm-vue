<template>
  <div>
    <search-box></search-box>
    <div style="padding-top:1.85rem;">
      <!-- Slider -->
      <slider :pages="pages" :sliderinit="sliderinit">
      <!-- slot  -->
      </slider>
      <div class="alternative-section"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      >
        <div class="alternative-bar-container">
        <span class="alternative-bar active">
          编辑精选
        </span>
        <span class="alternative-bar">
          关注动态
        </span>
      </div>
      <!-- 八个功能区块 -->
        <div class="box">
          <func-view v-for="item in funcviews"
            :name="item.name"
            :url="item.url"
            :icon="item.icon">
          </func-view>
        </div>
        <!--精选列表 无线滚动 -->
        <div class="priceList">
          <card-view v-for="stuff in stuffs"
            :id="stuff.stuffId"
            :time="stuff.createtime"
            :commentCounts="stuff.commentNo"
            :title="stuff.stuffTitle"
            :priceTag="stuff.stuffPriceText"
            :thumbnailImgUrl="stuff.stuffImage"
            :source="stuff.stuffSource"
            :good="stuff.good"
            :bad="stuff.bad">
          </card-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'zepto';
  import SearchBox from '../components/SearchBox';
  import Slider from '../components/Slider';
  import FuncView from '../components/FuncView';
  import CardView from '../components/CardView';
  export default {
    components: {
      SearchBox,
      Slider,
      FuncView,
      CardView
    },
    created:function(){
      this.$store.dispatch('getItemList')
    },
    activated(){
      this.$store.state.fullScreen = false;
    },
    computed:{
      stuffs:function(){
        return this.$store.state.homeDataList
      }
    },
    methods:{
      touchstart(e){
        if(this.basicdata.transitionEnd){
          return
        }
        
      },
      touchmove(e){

      },
      touchend(e){

      }

    },
    data(){
      return {
        basicdata:{
     			poswidth:'0',
          posheight:'0',
          start: {},
          end: {},
          tracking: false,
     			animation: false,
          transitionEnding: false,
     		},
        pages:[
          {
            title: '',
            style:{
             background:'url(static/img/2.png)'
            }
          },
          {
           title: '',
           style:{
            background:'url(static/img/1.jpg)'
            }
          },
          {
            title: 'slide3',
            style:{
              background:'#4bbfc3',
            },
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 100,//滑动判定距离
          thresholdTime: 1000,//滑动判定时间
          autoplay:3000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizon',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        },
        funcviews:[{
          url:'/home',
          name:'白菜专区',
          icon:'baicai',
          // title:'白菜专区'
        },{
          url:'/home',
          name:'发现',
          icon:'faxian'
        },{
          url:'/home',
          name:'众测',
          icon:'zhongce'
        },{
          url:'/home',
          name:'原创',
          icon:'yuanchuang'
        },{
          url:'/home',
          name:'海淘',
          icon:'haitao'
        },{
          url:'/home',
          name:'签到',
          icon:'qiandao'
        },{
          url:'/home',
          name:'排行榜',
          icon:'paihangbang'
        },{
          url:'/home',
          name:'领券',
          icon:'lingquan'
        },{
          url:'/home',
          name:'新锐品牌',
          icon:'xinrui'
        },{
          url:'/home',
          name:'汽车',
          icon:'qiche'
        }
        ]
      }
    },
    ready(){

    }
  }
</script>
<style>
.bar-tab~.content{
  bottom:0;
}
.priceList{
  background:#EBEBEB;
  height: 100%;
}
.box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  overflow: hidden;
  padding:.1rem 1rem;
}
.alternative-bar-container{
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-top: -1rem;
  z-index: 98;
}
.alternative-section{
  padding-bottom: 2.264rem;
}
.alternative-bar{
  width:50%;
  display:inline-block;
  height: 1.35rem;
  background: linear-gradient(top,rgba(255,255,255,.7),rgba(255,255,255,1));
  background: -webkit-linear-gradient(top,rgba(255,255,255,.7),rgba(255,255,255,1));
  position: relative;
  line-height: 1.35rem;
  text-align: center;
  font-size: .724rem;
}
.alternative-bar-container .active{
  border-bottom:2px solid #c9524a;
  color: #c9524a;
}
.alternative-bar-container .active::before{
  content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      bottom: -2px;
      display: inline-block;
      border-top: 2px solid rgb(255,255,255);
      border-right: 4px solid transparent;
}
.alternative-bar-container .active::after{
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: 0;
      bottom: -2px;
      display: inline-block;
      border-top: 2px solid rgb(255,255,255);
      border-left: 4px solid transparent;
}

</style>
