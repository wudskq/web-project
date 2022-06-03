import Vue from 'vue'
import App from './APP'
//引入插件
import Plugins from './plugins.js'

//加载插件
Vue.use(Plugins)

//创建全局共享对象,作为全局事件总线
// const EventLineObj = Vue.extend('', {});
// const Obj = new EventLineObj();
// //Vue原型对象
// Vue.prototype.x = Obj

var vm = new Vue({
    el: '#root',
    render: h => h(App),
    //借助生命周期钩子函数完成全局事件总线处理
    beforeCreate() {
        Vue.prototype.$bus = this
    },
});