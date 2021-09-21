<template>
  <div class="recommend">
   <goods-list :goodslist='recommendList'></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
    props:{
    recommendList:{
        type:Array,
        default(){
            return []
        }
    }
    },
  components: {
       GoodsList 
       },

}
</script>

<style>

</style>