<template>
  <div class="">
    <search-box></search-box>
    <!-- Slider -->
    <slider></slider>
  </div>
</template>
<script>
  // import $ from 'zepto';
  import SearchBox from './components/SearchBox';
  import Slider from './components/Slider';
  export default {
    components: {
      SearchBox,
      Slider
    },
    // ready(){
    //   $.init()
    // }
  }
</script>
<style>

</style>
