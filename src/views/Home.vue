<template>
  <div >
    <search-box style="padding-bottom:2rem;"></search-box>
    <!-- Slider -->
    <slider></slider>
    <!-- 八个功能区块 -->
    <div class="box">
    <func-view
      v-for="item in funcviews"
      :title="item.name"
      :url="item.url"
      :icon="item.icon"
    ></func-view>
    </div>
    <div class="priceList">
    <card-view
      v-for="stuff in stuffs"
      :id="stuff.id"
      :time="stuff.time"
      :commentCounts="stuff.commentCounts"
      :title="stuff.title"
      :priceTag="stuff.priceTag"
      :thumbnailImgUrl="stuff.thumbnailImgUrl"
      :source="stuff.source"
      :good="stuff.good"
      :bad="stuff.bad"



    ></card-view>
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
    data(){
      return {
        stuffs:[{
          id:'6378000',
          time:'14:56',
          commentCounts:12,
          title:'我的第一篇文章',
          priceTag:'123元()',
          thumbnailImgUrl:'http://tp-y.zdmimg.com/201609/24/57e6057892d757261.png_d200.jpg',
          source:'天猫商城',
          good:1,
          bad:1
        }],
        funcviews:[{
          url:'/article',
          name:'优惠',
          icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488191018604&di=94f1fdca636040fd8d5750be8889b613&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2015%2F0519%2F20150519091312742.jpg'
        },{
          url:'',
          name:'',
          icon:''
        },{
          url:'',
          name:'',
          icon:''
        },{
          url:'',
          name:'',
          icon:''
        },{
          url:'',
          name:'',
          icon:''
        },{
          url:'',
          name:'',
          icon:''
        }
        ]
      }
    },
    ready(){
      $.init()
    }
  }
</script>
<style scoped>
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
}
</style>
