<template>
  <div class="toast" v-show="isshow">
     {{message}}
  </div>
</template>

<script>
export default {
// props:{
//     message:{
//         type:String,
//         default(){
//             return ''
//         }
//     },
//     isshow:{
//         type:Boolean,
//         default(){
//           return  false
//         }
//     }
// }
 data() {
     return {
         message:'',
         isshow:false
     }
 },
methods: {
    show(message='默认文字',delay=2000){
       this.isshow=true
       this.message=message
       setTimeout(()=>{
           this.isshow=false
           this.message=''
         },delay)
    }
},
}
</script>

<style scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 8px;
    background-color: rgba(0, 0, 0, .72);
    color: #fff;
    z-index: 9;
}
</style>