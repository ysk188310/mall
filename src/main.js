import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import Toast from '@/components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body)
new Vue({
        render: h => h(App),
        router,
        store,
    }).$mount('#app')
    // LiuJunb