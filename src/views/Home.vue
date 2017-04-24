<template>
  <div>
    <search-box></search-box>
    <div style="margin-top:59px;margin-bottom: 2.264rem;" class="content pull-to-refresh-content infinite-scroll infinite-scroll-bottom" data-distance="100" data-ptr-distance="55">
      <!-- 默认的下拉刷新层 -->
      <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
      </div>
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
        <div class="active-line" :class="lineAnimationObj" :style="{left:this.basicdata.lineLeft}"></div>
        <span class="alternative-bar" :class="{active:this.basicdata.pageNo===1}" @click.stop.prevent="changePage">
          编辑精选
        </span>
        <span class="alternative-bar" :class="{active:this.basicdata.pageNo===2}" @click.stop.prevent="changePage">
          关注动态
        </span>
      </div>
            <div class="alternative-content-wrapper" :class="pageAnimationObj" :style="trans">
          <div class="jx" >
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
          <div class="myCare">
            <p>哈哈哈哈哈哈</p>
          </div>
        </div>
          </div>
      <!-- 加载提示符 -->
          <div class="infinite-scroll-preloader">
              <div class="preloader"></div>
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
    mounted:function(){
      this.$nextTick(function(){
        let that = this;
        $.init()
        /*sui 绑定下拉刷新和无限滚动*/
        $(document).on('refresh', '.pull-to-refresh-content',function(e) {
          // 模拟2s的加载过程
        setTimeout(function() {
          // console.log(vm)
          that.loadMoreHint.lastIndex = 20
          that.$store.dispatch('getItemList',that.loadMoreHint.lastIndex)
          // 加载完毕需要重置
          $.pullToRefreshDone('.pull-to-refresh-content');
          }, 2000);
        })
      // 注册'infinite'事件处理函数
      $(document).on('infinite', '.infinite-scroll-bottom',function() {
        console.log(123123123)
          // 如果正在加载，则退出
          // if (this.loadMoreHint.loading) return;
          // // 模拟1s的加载过程
          // setTimeout(function() {
          //     // 重置加载flag
          //     this.loadMoreHint.loading = false;
          //     if (this.loadMoreHint.lastIndex >= this.loadMoreHint.maxItems) {
          //         // 加载完毕，则注销无限加载事件，以防不必要的加载
          //         $.detachInfiniteScroll($('.infinite-scroll'));
          //         // 删除加载提示符
          //         $('.infinite-scroll-preloader').remove();
          //         return;
          //     }
          //     // 添加新条目
          //     this.$store.dispatch('getItemList',this.loadMoreHint.lastIndex)
          //     // 更新最后加载的序号
          //     this.loadMoreHint.lastIndex += this.loadMoreHint.itemsPerLoad
          //     //容器发生改变,如果是js滚动，需要刷新滚动
          //     $.refreshScroller();//?
          // }, 1000);
      });
      /**/

    })
    },
    created:function(){
      this.$store.dispatch('getItemList',this.loadMoreHint.lastIndex)
    },
    activated(){
      this.$store.state.fullScreen = false;
    },
    computed:{
      stuffs:function(){
        return this.$store.state.homeDataList
      },
      trans:function(){
        return {
          transform:'translate3d('+this.basicdata.moveX+'px,0,0)',
          display:'flex',
        }
      },
      lineAnimationObj:function(){
        return {
          'active-line-move2right':this.basicdata.lineMove && this.basicdata.pageNo === 2,
          'active-line-move2left':this.basicdata.lineMove && this.basicdata.pageNo === 1
        }
      },
      pageAnimationObj:function(){
        return {
          'page1-swipe':this.basicdata.animation && this.basicdata.pageNo === 1,
          'page2-swipe':this.basicdata.animation && this.basicdata.pageNo === 2
        }
      },
    },
    methods:{
      touchstart(event){
         let touch = event.targetTouches[0] //touches数组对象获得屏幕上所有的touch，取第一个touch
  　　   this.basicdata.start =  this.basicdata.end = {x:touch.pageX,y:touch.pageY} //取第一个touch的坐标值
  　　   this.basicdata.isScrolling = 1 //这个参数判断是垂直滚动还是水平滚动
         this.basicdata.tracking = true//追踪滑动轨迹开始
         this.basicdata.poswidth = 0
         this.basicdata.posheight = 0
         this.basicdata.lineMove = false
         this.basicdata.lineLeft = this.basicdata.pageNo===1?'0':'50%'
         this.basicdata.animation = false
         this.basicdata.scrollComputed = false
         this.basicdata.moveX = this.basicdata.pageNo===1?0:-document.documentElement.clientWidth
      },
      touchmove(event){
        if(this.basicdata.tracking){
          let touch = event.targetTouches[0];
　　       this.basicdata.poswidth = touch.pageX-this.basicdata.end.x
           this.basicdata.posheight = touch.pageY-this.basicdata.end.y
           if(!this.basicdata.scrollComputed){
               this.basicdata.isScrolling = Math.abs(this.basicdata.poswidth) < Math.abs(this.basicdata.posheight) ? 1:0
               this.basicdata.scrollComputed = !this.basicdata.scrollComputed
           }
            if(this.basicdata.isScrolling === 0){
              event.preventDefault();
              this.basicdata.end = {x:touch.pageX,y:touch.pageY};
              if(this.basicdata.pageNo===1){//精彩推荐页面
                (this.basicdata.moveX + this.basicdata.poswidth) <= 0 ?
                    this.basicdata.moveX += this.basicdata.poswidth : null
              }else if(this.basicdata.pageNo===2){//关注动态页面
                (this.basicdata.moveX + this.basicdata.poswidth) <= -document.documentElement.clientWidth ?
                    null : this.basicdata.moveX += this.basicdata.poswidth
              }
            }
        }
      },
      touchend(e){
        this.basicdata.tracking = false//追踪滑动轨迹结束
        //开始动画
        if(Math.abs(this.basicdata.pageNo === 1?this.basicdata.moveX:(document.documentElement.clientWidth+this.basicdata.moveX)) * 2  > document.documentElement.clientWidth){
          //开始滑动动画,换页,不换页的话不做任何
          this.basicdata.pageNo === 1?
            this.basicdata.pageNo = 2 :
              this.basicdata.pageNo = 1
            this.basicdata.lineMove = true
        }
        this.basicdata.animation = true
      },
      changePage(e){
        if(e.target.classList.length === 2){//已经是active状态了，不需要切换页面
          return
        }else{
            this.basicdata.pageNo === 1?
            this.basicdata.pageNo = 2 :
            this.basicdata.pageNo = 1
            this.basicdata.lineMove = true
            this.basicdata.animation = true
        }

      },
      refreshContent(e){
        setTimeOut(()=>{
          console.log(`refresh content`)
          $.pullToRefreshDone('.pull-to-refresh-content')
        },2000)
      }

    },
    data(){
      return {
        basicdata:{
          isScrolling:0,
     			poswidth:0,
          posheight:0,
          start: {},
          end: {},
          pageNo: 1,
          moveX:0,
          scrollComputed:false,
          lineLeft:'0',
          lineMove:false,
          tracking: false,
     			animation: false,
          // transitionEnding: false,
     		},
        loadMoreHint:{
          loading : false,// 加载flag
          maxItems : 100,  // 最多可加载的条目
          itemsPerLoad : 20,// 每次加载添加多少条目
          lastIndex : 20,
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

  }
</script>
<style>
.page1-swipe{
  animation:swipe1 600ms ease 0s 1 forwards;
  -webkit-animation:swipe1 600ms ease 0s 1 forwards;
  -o-animation:swipe1 600ms ease 0s 1 forwards;
  -moz-animation:swipe1 600ms ease 0s 1 forwards;
}
.page2-swipe{
  animation:swipe2 600ms ease 0s 1 forwards;
  -webkit-animation:swipe2 600ms ease 0s 1 forwards;
  -o-animation:swipe2 600ms ease 0s 1 forwards;
  -moz-animation:swipe2 600ms ease 0s 1 forwards;
}
@keyframes swipe1 {
  100%{
    transform:translate3d(0,0,0);
  }
}
@keyframes swipe2 {
  100%{
    transform:translate3d(-100%,0,0);
  }
}
.content{
  width:100%;
  overflow-x: hidden;

}
.jx,.myCare{
  width: 100%;
  flex-shrink: 0;
  height: 100%;
}
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
  background: #fff;
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
.active-line-move2right{
  -webkit-animation: moveline2right 1s ease 300ms 1 forwards;
  -o-animation: moveline2right 1s ease 300ms 1 forwards;
  -moz-animation: moveline2right 1s ease 300ms 1 forwards;
  animation: moveline2right 1s ease 300ms 1 forwards;
}
.active-line-move2left{
  -webkit-animation: moveline2left 1s ease 300ms 1 forwards;
  -o-animation: moveline2left 1s ease 300ms 1 forwards;
  -moz-animation: moveline2left 1s ease 300ms 1 forwards;
  animation: moveline2left 1s ease 300ms 1 forwards;
}
@keyframes moveline2right {
  0%{
    left:0
  }
  100%{
    left: 50%
  }
}
@keyframes moveline2left {
  0%{
    left:50%
  }
  100%{
    left: 0
  }
}
.alternative-bar-container .active-line{
  border-bottom:2px solid #c9524a;
  height:2px;
  position: absolute;
  bottom: 0;
  width:50%;
  z-index: 2;
}
.alternative-bar-container .active-line::before{
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
.alternative-bar-container .active-line::after{
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
