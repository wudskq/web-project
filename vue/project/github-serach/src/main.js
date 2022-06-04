import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios) // 安装插件

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //挂载全局事件总线
    //借助生命周期钩子函数完成全局事件总线处理
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')