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
    <card-view
      v-for="page in pages"
      :pageId="page.pageId"
      :date="page.date"
      :commentCounts="page.commentCounts"
      :pageTitle="page.pageTitle"
      :pageSubTitle="page.pageSubTitle"
      :thumbnailImgUrl="page.thumbnailImgUrl"
    ></card-view>


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
        pages:[{
          pageId:'1',
          date:'2017/02/16 14:56',
          commentCounts:12,
          pageTitle:'我的第一篇文章',
          pageSubTitle:'今天我做了第一个小demo，yeah！',
          thumbnailImgUrl:'/static/img/page1.jpg',
        },{
          pageId:'2',
          date:'2017/02/16 14:56',
          commentCounts:12,
          pageTitle:'我的第二篇文章',
          pageSubTitle:'今天我做了第一个小demo，yeah！',
          thumbnailImgUrl:'/static/img/page1.jpg',
        },{
          pageId:'3',
          date:'2017/02/16 14:56',
          commentCounts:12,
          pageTitle:'我的第三篇文章',
          pageSubTitle:'今天我做了第一个小demo，yeah！',
          thumbnailImgUrl:'/static/img/page1.jpg',
        }
        ],
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
.box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  overflow: hidden;
}
</style>
