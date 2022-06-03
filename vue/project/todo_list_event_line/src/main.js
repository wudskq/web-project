import Vue from 'vue'
import App from './App'
//引入插件
import Plugins from './plugins.js'

//加载插件
Vue.use(Plugins)
Vue.config.productionTip = false

var vm = new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
});