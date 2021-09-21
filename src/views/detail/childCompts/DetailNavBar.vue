<template>
  <div>
      <nav-bar class="navbar">
          <div slot="left" @click="backHome" class="back">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
      <div slot="center" class="title">
          <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index===currentIndex}"
          @click="activeTitle(index)"
          >       
                  {{item}}
          </div>
      </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
   data() {
       return {
           titles:['商品','参数','评论','推荐'],
        //    isActive:false,
           currentIndex:0
       }
   },
   components:{
       NavBar
   },
   methods: {
       backHome(){
           this.$router.go(-1)
       },
       activeTitle(index){
       this.currentIndex=index
      this.$emit('tabNavBar',index)
       }
   },
}
</script>

<style scoped>

.back{
    margin-top: 6px;
}
.title{
    display: flex;
    font-size: 15px;
}
.title-item{
    flex: 1;
}
.active{
color: red;
}
</style>