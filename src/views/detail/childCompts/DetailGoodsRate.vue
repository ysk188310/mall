<template>
  <div v-if="Object.keys(goodsRate).length!==0">
     <div>用户评价</div>
     <div>更多</div>
     <img :src="goodsRate.image" alt="">
     <p class="content">
       {{goodsRate.content}}
     </p>
     <div>
       <span>{{goodsRate.time | showDate}}</span>
       <span>{{goodsRate.style}}</span>
     </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils/utils.js'
export default {
   props:{
     goodsRate:{
       type:Object,
       default(){
         return {}
       }
     }
   },
   filters:{
   showDate(val){
      const date=new Date(val*1000)
   return formatDate(date,'yyyy-MM-dd hh:mm:ss')
   }
   }
}
</script>

<style>

</style>