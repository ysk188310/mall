<template>
  <div class="tabcontrol">
     <div v-for="(item,index) in titles" :key='index' class="tabcontrol-item" :class="{active: index==currentIndex}"
     @click="btnCurrent(index)"
     >
      <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
   props:{
       titles:{
           type:Array,
           default(){
               return []
           }
       }
   },
   data() {
       return {
           currentIndex:0
       }
   },
   methods: {
       btnCurrent(index){
           this.currentIndex=index;
           this.$emit('tabClick',index)
       },

   },
}
</script>

<style scoped>
.tabcontrol{
    display: flex;
    text-align: center;
    position: sticky;
    top: 44px;
    background-color: #fff;
    margin-bottom: 10px;
}
.tabcontrol-item{
    flex: 1;
    height: 30px;
    width: 30px;
    line-height: 30px;
    
}
.active{
    color: var(--color-tint);
}
.active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
   
}
</style>