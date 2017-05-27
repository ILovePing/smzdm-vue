<template>
<div class="slider-container">
  <div class="slider-wrapper" :style="styleobj" >
    <template v-for="(page,index) in pages">
    <div class="slider-item" :style="page.style">{{page.title}}</div>
    </template>
  </div>
</div>
</template>
<script>
export default{
  name:'Myslider',
  mounted(){
    let that = this;
    if(that.basicdata.autoplay){
      let intervaleg = setInterval(function(){
        that.basicdata.count++;
        if(that.basicdata.count > 3){
          that.basicdata.animation = false;
          that.basicdata.count = 1;
        }else{
          if(!that.basicdata.loop && that.basicdata.count == 3){
            clearInterval(intervaleg)
          }
          that.basicdata.animation = true;
        }
      },1000)
    }

  },
  methods:{
    next(){
      that.basicdata.count++;
      if(that.basicdata.count > 3){
        that.basicdata.animation = false;
        that.basicdata.count = 1;
      }
    }
  },
  computed:{
    // 动画执行obj
    styleobj() {
      let style = {};
      style['transform']='translate3D(-'+(this.basicdata.animation?((this.basicdata.count-1)*100):0)+'%,0,0)';
      style['animationTimingFunction'] = 'ease';
      style['animationDuration'] = (this.basicdata.animation?300:0) + 'ms';
      return style
    },
  },
  data(){
    return {
      basicdata:{
        count:1,
        animation:true,
        autoplay:true,
        loop:true
      },
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
    }
  }
}
</script>
<style scoped lang="scss">
.slider-container{
  overflow: hidden;
  width: 100%;
  height:400px;
  position: relative;
  margin:0 auto;
  z-index: 1;
  .slider-wrapper{
    display: flex;
    width: 100%;
    height: 100%;
    .slider-item{
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #fff;
      background: {
        color:#ff0000;
      }
    }
  }
}
</style>
