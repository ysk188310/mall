<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
<div class="info-title">{{goods.title}}</div>
<div class="price">
 <div class="newprice">{{goods.newPrice}}</div>
 <div class="oldprice">{{goods.oldPrice}}</div>
 <div class="discount">{{goods.discount}}</div>
</div>
<div class="columns">
 <div v-text="goods.columns[0]"></div>
 <div v-text="goods.columns[1]"></div>
 <div v-text="goods.services[goods.services.length-1].name"></div>
 </div>
 <div class="services">
  <div v-text="goods.services[0].name"></div>
  <div v-text="goods.services[1].name"></div>
  <div v-text="goods.services[2].name"></div>
 </div>
  </div>
</template>

<script>
export default {
   props:{
       goods:{
           type:Object,
           default(){
               return {}
           }
       },
   },
   created() {
       console.log(Object.keys(this.goods).length);
   },
}
</script>

<style scoped>
.base-info{
    margin-top: 10px;
    padding: 6px;
     color: #999;
     border-bottom: 5px solid #f2f5f8;
}
.price{
    display: flex;
    margin-top: 2px;
}
.newprice{
    color: var(--color-high-text);
    font-size: 24px;
}
.oldprice{
    line-height: 35px;
    font-size: 14px;
    color: #ccc;
   margin:0 8px;
    text-decoration: line-through;
}
.discount{
    margin-top: 8px;
    background-color: red;
    height: 18px;
    padding: 0 5px;
    text-align: center;
    border-radius: 10px;
}
.columns{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
}
.services{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
</style>