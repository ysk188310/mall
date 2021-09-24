<template>
  <div>
      <NavBar class="shopcar">
          <div slot="center">购物车({{length}})</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
export default {
   components:{
       NavBar
   },
   computed:{
      ...mapGetters({
         length:'cartLength'
      })
    }
}
</script>

<style scoped>
.shopcar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>