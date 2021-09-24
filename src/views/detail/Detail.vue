<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @tabNavBar='tabNavBar' ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" @contentScroll='contentscroll'
  :probetype=3
  >
   <detail-swiper :itemImages='detailSwiper'></detail-swiper>
   <detail-base-info :goods='goods'></detail-base-info>
   <detail-shop-info :shop='shop'></detail-shop-info>
   <detail-goods-info :detailInfo='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
   <detail-goods-params :goodsParams='goodsParams' ref="goodsParams"></detail-goods-params>
   <detail-goods-rate :goodsRate="goodsRate" ref="goodsRate"></detail-goods-rate>
   <detail-recommend :recommendList='recommendList' ref="goodsRecommend"></detail-recommend>
  </scroll>
      <back-top @click.native="tabTop" v-show="isShowBackTop" ></back-top>
      <detail-shop-car @cartClick='cartClick'></detail-shop-car>  
      <!-- <toast :message='message' :show='show'></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childCompts/DetailNavBar.vue'
import DetailSwiper from './childCompts/DetailSwiper.vue'
import DetailBaseInfo from './childCompts/DetailBaseInfo.vue'
import DetailShopInfo from './childCompts/DetailShopInfo.vue'
import DetailGoodsInfo from './childCompts/DetailGoodsInfo.vue'
import DetailGoodsParams from './childCompts/DetailGoodsParams.vue'
import DetailRecommend from './childCompts/DetailRecommend.vue'
import DetailGoodsRate from './childCompts/DetailGoodsRate.vue'
import DetailShopCar from './childCompts/DetailShopCar.vue'
import {getDetail,Goods,Shop,GoodsParams,GoodsRate,getRecommend} from 'network/detail.js'
import Scroll from 'components/common/scroll/Scroll.vue'
import {debounce} from 'common/utils/utils.js'
import {backTopMixins} from 'common/mixin'
import {mapActions} from 'vuex'
// import Toast from 'components/common/toast/Toast.vue'

export default {
  name:'Detail',
     data() {
        return {
         iid:null,
         detailSwiper:[],
         goods:{},
         shop:{},
         detailInfo:{},
         goodsParams:{},
         goodsRate:{},
         recommendList:[],
         itemImgListenter:null,
         scrollContent:[0],
         currentIndex:0,
        //  message:'',
        //  show:false
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailGoodsParams,
        DetailGoodsRate,
        DetailRecommend,
        Scroll,
        DetailShopCar,
        // Toast 
    },

            created() {  
       this.iid=this.$route.params.iid
       console.log(this.iid);
        getDetail(this.iid).then(res=>{
          console.log(res);
          const data=res.result
          this.detailSwiper=data.itemInfo.topImages;
          // 商品信息
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          // 店铺信息
          this.shop=new Shop(data.shopInfo)
          // 商品详情
          this.detailInfo=data.detailInfo;
          // 商品参数
          this.goodsParams=new GoodsParams(data.itemParams.info,data.itemParams.rule)
          // 商品评价
          if(data.rate.cRate !=0){
          this.goodsRate=new GoodsRate(data.rate.list[0])
          }
        },
        // 获取推荐信息
        getRecommend().then(res=>{
          this.recommendList=res.data.list;
        })
        )
     },
     mixins:[backTopMixins],
     destroyed() {
     this.$bus.$off('itemImageLoad',this.itemImgListenter)
     },
      mixins:[backTopMixins],
     methods: {
       ...mapActions(['addCart']),
       imageLoad(){
        this.$refs.scroll.refresh()
        this.scrollContent.push(this.$refs.goodsParams.$el.offsetTop);
        this.scrollContent.push(this.$refs.goodsRate.$el.offsetTop);
        this.scrollContent.push(this.$refs.goodsRecommend.$el.offsetTop);
        this.scrollContent.push(Number.MAX_VALUE)
       },
       contentscroll(position){
       this.isShowBackTop=-position.y>1000?true:false
       let positionY=-position.y;
       let length=this.scrollContent.length
       for(let i=0;i<length-1;i++){
         if(this.currentIndex !== i && (positionY >= this.scrollContent[i] && positionY < this.scrollContent[i+1])){
           this.currentIndex=i;
           this.$refs.nav.currentIndex=this.currentIndex;
           console.log(this.$refs.nav);
         }
       }
     
       },
       tabNavBar(index){
       this.$refs.scroll.scrollToUp(0,-this.scrollContent[index],200)
       },
      //  将商品添加到vuex
       cartClick(){
        const product={
          image:this.detailSwiper[0],
          desc:this.goods.desc,
          newPrice:this.goods.realPrice,
          iid:this.iid,
          title:this.goods.title
        }
       this.addCart(product).then(res=>{
         console.log(res);
        //  this.show=true
        //  this.message=res
        this.$toast.show(res,1500)
       })

       }
       
     },
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
 /* .content{
   position: absolute;
   top: 44px;
   bottom: 1px;
   left: 0;
   right: 0;
   overflow: hidden;
  } */
 .content{
    height: calc(100% - 93px);
  }
</style>