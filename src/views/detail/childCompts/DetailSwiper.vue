<template>
   <swiper class="detail-swiper">
       <swiper-item v-for="(item,index) in itemImages" :key="index">
        <img :src="item" alt="">
       </swiper-item>
   </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
 props:{
     itemImages:{
         type:Array,
         default(){
             return []
         }
     }
 },
 data() {
     return {
         
     }
 },
 components:{
     Swiper,
     SwiperItem
 }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;  
}

</style>