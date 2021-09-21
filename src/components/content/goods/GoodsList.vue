<template>
  <div class="goodslist">
      <goods-list-item v-for="(item,index) in goodslist" :key="index" :goodslistitem='item'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      GoodsListItem
  }
}
</script>

<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>