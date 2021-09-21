<template>
  
   <div class="wrapper" ref="wrapper">
   <div class="content">
       <slot></slot>
   </div>
   </div>
 
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
    probetype:{
        type:Number,
        default(){
            return 1
        }
    },
    pullUpLoad:{
        type:Boolean,
        default(){
            return false
        }
    }
    },
    data() {
        return {
            scroll:null 
        }
    },
   mounted() {
   this.scroll=new BScroll(this.$refs.wrapper,{    
   observeDOM:true,
   click:true,
   probeType:this.probetype,
   pullUpLoad:this.pullUpLoad
   }),
   this.scroll.on('scroll',(position)=>{
      this.$emit('contentScroll',position)
   })
  if(this.pullUpLoad){
   this.scroll.on('pullingUp',()=>{
   this.$emit('pullingUp')  
   })
  }
   },
   methods: {
       scrollToUp(x,y,time){
       this.scroll&& this.scroll.scrollTo(x,y,time)
       },
       scrollFinishPullUp(){
         this.scroll&&this.scroll.finishPullUp()
       },
       refresh(){
           this.scroll&&this.scroll.refresh();
       },
    //    scrollY(x,y,time){
    //        this.scroll&&this.scroll.scrollTo(x,y,time)
    //    }
   },
}
</script>

<style scoped>
</style>