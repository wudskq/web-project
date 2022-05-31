import Vue from 'vue'
import App from './APP'
//引入插件
import Plugins from './plugins.js'

//加载插件
Vue.use(Plugins)

new Vue({
    el: '#root',
    render: h => h(App)
});