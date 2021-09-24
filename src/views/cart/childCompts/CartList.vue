<template>
  <div class="cartList">
      <scroll class="content" ref="scroll">
       <cart-list-item v-for="(item,index) in cartListData" :key="index" :item-info='item'></cart-list-item>
      </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
  components: { 
      Scroll, 
  CartListItem },
  computed:{
      ...mapGetters(['cartListData'])
  },
  activated() {
      this.$refs.scroll.refresh()
  },


}
</script>

<style scoped>
.cartList{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
}
.content{
    height: 100%;
}

</style>