<template>
  <div id="home-head">
    <div class="search-filter">

      <span>筛选</span>
    </div>
    <div class="search-input">
      <input type="text" id=""/>
      <i class="icon icon-search"></i>
    </div>
    <div class="concered">
      <span>关注</span>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style>
#home-head{
  height: 1.85rem;
  background: rgb(235,76,72);
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 99;
}
.search-filter,.concered{
  flex-grow:1;
}
.search-input{
  flex-grow:5;
}
.search-filter span,
.concered span{
  text-align: center;
  width: 100%;
  display: inline-block;
  line-height: 1.85rem;
  color: #fff;
  font-size: 0.543rem;
}
.search-input input{
  border-radius: 0;
  height: 1.36rem;
  margin-top: .2rem;
  padding-left: 1.3rem;
}
.search-input::before{
  content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      top: 0.2rem;
      display: inline-block;
      border-top: .45rem solid rgb(235,76,72);
      border-right: .45rem solid transparent;
}
.search-input::after{
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: 0;
      bottom: 0.2rem;
      display: inline-block;
      border-bottom: .45rem solid rgb(235,76,72);
      border-left: .45rem solid transparent;
}
</style>
