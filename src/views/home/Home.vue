<template>
   <div id="home">
       <NavBar class="home-bar">
          <div slot="center">购物街</div>
       </NavBar>
        <tab-control :titles="['流行','新款','精选']"
       @tabClick='tabClick'
       ref="tabcontrol2"
      class="tabcontrol"
      v-show="isTabcontrolShow"
       ></tab-control>
        <scroll class="content" ref="scroll" :probetype="3"
        @contentScroll='contentScroll'
        :pullUpLoad='true'
        @pullingUp='loadMore'
        >
       <home-swiper :banners='banners'
       @swiperImageLoad='swiperImageLoad'
       ></home-swiper>
       <home-recommend :recommends='recommends'></home-recommend>
       <home-fashion></home-fashion>
       <tab-control :titles="['流行','新款','精选']"
       @tabClick='tabClick'
       ref="tabcontrol1"
       ></tab-control>
           <goods-list :goodslist="showGoods"></goods-list>
      </scroll>
      <BackTop v-show="isShowBackTop" @click.native="tabTop"></BackTop>
   </div>
</template>
<script>
import {getHomeMultidata,getHomeGoods} from 'network/home.js'

import HomeSwiper from './childCompts/HomeSwiper.vue'
import HomeRecommend from './childCompts/HomeRecommend.vue'
import HomeFashion from './childCompts/HomeFashion.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import {itemImgListenterMixins,backTopMixins} from 'common/mixin.js'

export default {
    name:'Home',
    data() {
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            tabControlHeight:0,
            isTabcontrolShow:false,
            saveY:0,
            itemImgListenter:null
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomeFashion,
        TabControl,
        GoodsList,
        Scroll,
    },
    mixins:[itemImgListenterMixins,backTopMixins],
    computed:{
    showGoods(){
        return this.goods[this.currentType].list
    }
    },
    created() {
   this.getHomeMultidata();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
    },
    mounted() {
       
    },
    methods: {
        swiperImageLoad(){
       this.tabControlHeight= this.$refs.tabcontrol1.$el.offsetTop
        },
    tabClick(index){
       switch(index){
           case 0:
           this.currentType='pop';
           break;
           case 1:
           this.currentType='new';
           break;
           case 2:
           this.currentType='sell';
           break;
       }
       this.$refs.tabcontrol1.currentIndex=index
       this.$refs.tabcontrol2.currentIndex=index
    },
        // 网络请求相关
    getHomeMultidata(){
         getHomeMultidata().then(res=>{
        //  console.log(res);
         this.banners=res.data.banner.list;
         this.recommends=res.data.recommend.list;
     })
    },
    getHomeGoods(type){
        const page=this.goods[type].page+1
     getHomeGoods(type,page).then(res=>{
        //  console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.scrollFinishPullUp();
     })
    },
    // 回到顶部
    contentScroll(position){
       this.isShowBackTop=-position.y>1000?true:false;
       this.isTabcontrolShow=-position.y>this.tabControlHeight?true:false;
       this.scrollY=position.y
    },
    // 上拉加载更多
    loadMore(){
       this.getHomeGoods(this.currentType);
    },
    },
    // 离开时保存的距离
    deactivated(){
   this.saveY=this.$refs.scroll.scroll.y
   //关闭goodsListItem的img事件
   this.$bus.$off('itemImageLoad',this.itemImgListenter)
    },
    // 进入时
    activated() {
   this.$refs.scroll.scrollToUp(0,this.saveY,0)
   this.$refs.scroll.refresh()
    },
}
</script>
<style scoped>
#home{
    position: relative;
    height: 100vh;
    padding-top: 44px;
}
.home-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color:var(--color-tint);
    z-index: 9;
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
.tabcontrol{
    position: relative;
    top: 0;
    z-index: 9;
}
</style>