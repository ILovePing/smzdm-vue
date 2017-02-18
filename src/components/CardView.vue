<template>
  <router-link class="card" :to="'itemDetail/:pageId'">
 <div class="card-content">
   <div class="list-block media-list">
     <ul>
       <li class="item-content">
         <div class="item-media">
           <img :src="thumbnailImgUrl" width="44">
         </div>
         <div class="item-inner">
           <div class="item-title-row">
             <div class="item-title">{{pageTitle}}</div>
           </div>
           <div class="item-subtitle">{{pageSubTitle}}</div>
         </div>
       </li>
     </ul>
   </div>
 </div>
 <div class="card-footer">
   <span>{{date}}</span>
   <span>{{commentCounts>0?commentCounts:'暂无'}}评论</span>
 </div>
</router-link>
</template>

<script>
  export default{
    props:{
      pageId:'',
      date:'',
      commentCounts:0,
      pageTitle:'',
      pageSubTitle:'',
      thumbnailImgUrl:'',//取默认图片地址
    },
    computed:{

    }
  }
</script>
