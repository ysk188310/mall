<template>
  <div class="goods-item">
     <img v-lazy="showGoodsList" alt="" @load="imageLoad" @click="toDetail">
    <div class="goods-info">
         <p>{{goodslistitem.title}}</p>
        <span class="price">{{goodslistitem.price}}</span>
        <span class="collect">{{goodslistitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
     goodslistitem:{
         type:Object,
         default(){
             return {}
         }
     }
  },
   computed:{
 showGoodsList(){
        return this.goodslistitem.image ||this.goodslistitem.show.img
    },
 },
  methods: {
      imageLoad(){
        //   console.log('item');
        this.$bus.$emit('itemImageLoad')
      },
      toDetail(){
          this.$router.push(`/detail/${this.goodslistitem.iid}`)           
        //   this.$router.push(
        //       {
        //           path:'/detail',
        //           query:{
        //               iid:this.goodslistitem.iid
        //           }
        //       }
        //   )
      }
  },
}
</script>

<style scoped>
.goods-item{
    position: relative;
    padding-bottom: 40px;
    width: 48%;
    font-size: 15px;
    z-index: 9;
}
.goods-item img{
     width: 100%;
     border-radius: 6px;
}
.goods-info{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center; 
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>