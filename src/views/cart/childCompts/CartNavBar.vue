<template>
  <div>
      <NavBar class="shopcar">
          <div slot="center">购物车</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
   components:{
       NavBar
   }
}
</script>

<style scoped>
.shopcar{
    background-color: pink;
}
</style>