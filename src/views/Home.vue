<template>
  <div >
    <search-box style="padding-bottom:2rem;"></search-box>
    <!-- Slider -->
    <slider></slider>
    <!-- 八个功能区块 -->
    <div class="box">
    <func-view v-for="(url,title) in funcviews" :title="title" :url="url" ></func-view>
    </div>
    <card-view v-for="page in pages" :pageId="page.pageId" :date="page.date" :commentCounts="page.commentCounts"
      :pageTitle="page.pageTitle" :pageSubTitle="page.pageSubTitle" :thumbnailImgUrl="page.thumbnailImgUrl"
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
        funcviews:{
          'ceshi1':'/ceshi1',
          'ceshi2':'/ceshi2',
          'ceshi3':'/ceshi3',
          'ceshi4':'/ceshi4',
          'ceshi5':'/ceshi5',
          'ceshi6':'/ceshi6',
          'ceshi7':'/ceshi7',
          'ceshi8':'/ceshi8'
        }
      }
    },
    ready(){
      $.init()
    }
  }
</script>
<style>
.box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 10rem;
  padding: .5rem;
  background-color: #fff;
}
</style>
