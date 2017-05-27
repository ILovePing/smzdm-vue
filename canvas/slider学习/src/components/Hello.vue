<template>
  <div class="hello">
    <!-- Slider -->
    <slider :pages="pages" :sliderinit="sliderinit"></slider>
  </div>
</template>

<script>
import Slider from '../components/Slider';
export default {
  name: 'hello',
  components:{
    Slider
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pages:[
        {
          title: 'slide1',
          style:{
            background:'#000',
          },
        },
        {
          title: 'slide2',
          style:{
            background:'#ff0000',
          },
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
        autoplay:1000,//自动滚动[ms]
        loop:true,//循环滚动
        direction:'horizon',//方向设置，垂直滚动
        infinite:1,//无限滚动前后遍历数
        slidesToScroll:1,//每次滑动项数
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
