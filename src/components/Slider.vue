<template>
  <div id="islider"></div>
</template>

<script>
import ISlider from '../assets/js/iSlider'

export default {
  data () {
    return {
      slider: null
    }
  },
  mounted () {
    this.$nextTick(()=>{
/*http测试*/
      this.$http.get('/static/data/mock.json')
      .then((data) =>{
        console.log(data)
      })
      .catch(function(response) {
			console.log(response)
		})
    /*http测试结束*/
        let imgs = [{
          content:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3346141595,3322700820&fm=80&w=179&h=119&img.JPEG'
        },{
          content:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3346141595,3322700820&fm=80&w=179&h=119&img.JPEG'
        }]
        let self = this
        this.slider = new ISlider({
          dom: self.$el,
          data: imgs,
          isVertical: false,
          isLooping: true,
          isDebug: false,
          isAutoplay: true
        })
    })

  }
}
</script>

<style>
#islider {
  height: 135px;
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
  height: auto;
}
</style>
