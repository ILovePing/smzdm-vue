<template>
  <div class="priceList">
    <div class="priceItem">
      <div class="thumbnail">
        <img src="http://tp-y.zdmimg.com/201609/24/57e6057892d757261.png_d200.jpg" />
      </div>
      <div class="desc">
        <div class="desc-top">
          <p class="main-title">当地民宿：途家网东南亚特价度假房活动</p>
          <span class="price-tag">23元起（3折）</span>
        </div>
        <div class="desc-bottom">
          <div class="src-and-time">
            <span class="source">天猫商城</span>
            <span class="slash">|</span>
            <span class="create-time">22:08</span>
          </div>
          <div class="worth-and-comment">
            <span class="comment-icon">···</span>
            <span class="comment-no">2</span>
            <span class="worth-icon">值</span>
            <span class="worth-value">90%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import $ from 'zepto'
  export default {
    components: {

    },
    data(){
      return {
      }
    }
  }
</script>
<style scoped>
.comment-icon{
  width: .67rem;
  height: .5rem;
  display: inline-block;
  border: 1px solid;
  border-radius: .23rem;
  line-height: .5rem;
  text-align: center;
  position: relative;
}
.comment-icon::before{
  content: "";
      width: 0rem;
      height: 0rem;
      position: absolute;
      top: .4rem;
      left: .18rem;
      border: .19rem solid transparent;
      border-top-color: #fff;
      z-index: 10;
}
.comment-icon::after{
  content: "";
  width: 0rem;
  height: 0rem;
  position: absolute;
  top: .41rem;
  left: 0.1rem;
  border: .22rem solid transparent;
  border-top-color: #8c8c8c;
}
.desc-bottom{
  /*height:0.54rem;*/
  margin-top: .5rem;
  color:#8c8c8c;
  font-size: 0.5rem;
  display: flex;
      justify-content: space-between;
}
p{
  margin:0;
}
.desc-top{
  font-size: .7rem;
}
.price-tag{
  color:#ff0000;
  white-space:nowrap;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  overflow: hidden;
  width: 100%;
  display: inline-block;
}
p.main-title{
  height:2.2rem;
  margin-top: .45rem;
}
.thumbnail,.desc{
  height: 5.43rem;
}
.thumbnail{
    width: 5.43rem;
}
.desc{
  padding-left: .5rem;
}
.thumbnail img{
  height:100%;
  width: 100%;
}
.priceList{
  background:#EBEBEB;
  height: 100%;
}
.priceItem{
  height:5.89rem;
  margin-top: .27rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 .54rem;
  justify-content: space-between;
}
</style>
