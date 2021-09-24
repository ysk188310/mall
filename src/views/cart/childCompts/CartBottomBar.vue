<template>
   <div class="cart-bottom">
        <div class="checkedAll">
       <CheckButton   class="checkedAllImg"
        :isChecked='isSelectAll'
        @click.native='checkedClick'
    ></CheckButton>
       <span>全选</span>
        </div>
        <div class="sumPrice">
         合计:{{totalPrice}}
        </div>
        <div class="calcLength" @click='clacClick'>
            去计算:({{calcPrice}})
        </div>
    </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
// import {mapState} from 'vuex'
export default {
  components: { CheckButton },
 computed:{
        // ...mapState(['cartList']),
        // 合计
        totalPrice(){
            // 通过返回的使选中的商品，选中的商品通过reduce求和 
            return '￥'+ this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.newPrice * item.count
            },0).toFixed(2)
        },
        calcPrice(){
            // 返回的选中的商品的长度
           return this.$store.state.cartList.filter(item=>item.checked).length      
        },
        // 全选
        isSelectAll(){
            // 判断列表中是否有没选中的
            if(this.$store.state.cartList.length == 0)return false
            for(let item of this.$store.state.cartList){
            if(!item.checked){
               return false
            }
         }
         return true
        }
    },
    methods: {
        // 全选 
        checkedClick(){
        //    for(let item of this.$store.state.cartList){
        //        if(!item.checked){
        //            item.checked=true
        //        }else{
        //            item.checked=false
        //        }
        //    }

        // this.$store.state.cartList.forEach(item=>{
        //     if(!item.checked){
        //         item.checked=true
        //      }else{
        //           item.checked=false
        //      }
        // })
       if(this.isSelectAll){
             this.$store.state.cartList.forEach(item=>{
            item.checked=false
        })
       }else{
             this.$store.state.cartList.forEach(item=>{
                  item.checked=true
             })
       }
        },
        clacClick(){
           if(!this.isSelectAll){
           this.$toast.show('请选择一个商品')
           }
        }
    },
}
</script>

<style scoped>
 .cart-bottom{
     /* position: relative; */
     display: flex;
     /* bottom: 40px; */
     height: 40px;
     background-color: #eee;
     /* align-items: center; */
 }
 .checkedAll{
     height: 40px;
     width: 75px;
     display: flex;
     align-items: center;
 }
 .checkedAllImg{
     height: 20px;
    width: 20px;
     border: 1px solid #ccc;
     border-radius: 50%;
     /* background-color: red; */
     margin-left: 10px;
 }
 .sumPrice{
  flex: 1;
  line-height: 40px;
 }
.calcLength{ 
   background-color: red;
   width: 100px;
   line-height: 40px;
   text-align: center;
}
</style>