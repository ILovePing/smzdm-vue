<template>
  <div>
  <div class="bar search-extend">
   <span class="icon icon-menu"></span>
  </div>
  <div class="bar l2rem">
        <div class="searchbar">
          <a class="searchbar-cancel">取消</a>
          <img src="img/1.jpg">
          <div class="search-input">
            <label class="icon icon-search" for="search"></label>
            <input type="search" id='search' placeholder='输入关键字...'/>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'SearchBox'
}
</script>
<style>
.search-extend{
  width:2rem;
  padding:0;
  line-height: 2.2rem;
  text-align: center;
  background: rgb(223, 223, 224);
}
.l2rem{
  left: 2rem!important;
}
</style>
