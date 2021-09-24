<template>
   <div>
    <cart-nav-bar></cart-nav-bar>
    <cart-list></cart-list>
   <cart-bottom-bar></cart-bottom-bar>
   </div>
</template>
<script>
import CartBottomBar from './childCompts/CartBottomBar.vue'
import CartList from './childCompts/CartList.vue'
import CartNavBar from './childCompts/CartNavBar.vue'
export default {
    name:'Cart',
    components:{
        CartNavBar,
          CartList,
        CartBottomBar,
    },
   
      
    
}
        
</script>
<style scoped>

</style>