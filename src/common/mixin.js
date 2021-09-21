import { debounce } from "./utils/utils";
import BackTop from 'components/content/backtop/BackTop.vue'
export const itemImgListenterMixins = {
    mounted() {
        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListenter = () => {
            newRefresh();
        }
        this.$bus.$on('itemImageLoad', this.itemImgListenter)
        console.log('我是混入的内容');
    }
}
export const backTopMixins = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        tabTop() {
            this.$refs.scroll.scrollToUp(0, 0, 500)
        },
    },
}