import Toast from './Toast.vue'
const obj = {

}
obj.install = function(Vue) {
    // 1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
        // 2.创建组件对象
    const toast = new toastConstructor();
    // 3.将组建对象挂载到某一个元素上
    toast.$mount(document.createElement('div'))
        // 4.toast.$el对应的是div
    document.body.appendChild(toast.$el)
    console.log(toast.$el);
    // 5.挂载到vue原型对象上
    Vue.prototype.$toast = toast;

}
export default obj;