<template>
  <div id="islider"></div>
</template>

<script>
import iSlider from '../assets/js/iSlider'
// import ISliderDot from '../assets/js/iSliderDot'
import axios from 'axios'
  export default {
  data () {
    return {
      slider: null
    }
  },
  mounted () {
    this.$nextTick(()=>{
/*http测试*/
      axios.get('/static/data/mock.json')
      .then((data) =>{
        console.log(data)
      })
      .catch(function(response) {
			console.log(response)
		})
    /*http测试结束*/
        let imgs = [{
          content:'/static/img/1.jpg'
        },{
          content:'/static/img/2.jpg'
        },{
          content:'/static/img/3.jpg'
        },{
          content:'/static/img/4.jpg'
        }]
        let self = this
        this.slider = new iSlider({
          dom: self.$el,
          data: imgs,
          isVertical: false,
          isLooping: true,
          isDebug: false,
          isAutoplay: true,
          plugins:['dot']
        })
    })

  }
}
</script>

<style>
#islider {
  height: 6.75rem;
  width: 100%;
  overflow: hidden;
  position: relative;
}
#islider  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#islider li {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-pack: start;
  list-style: none;
}
#islider li img {
  width: 100%;
  height: 100%;

}
</style>
