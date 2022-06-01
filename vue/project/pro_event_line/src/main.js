import Vue from 'vue'
import App from './APP'
//引入插件
import Plugins from './plugins.js'

//加载插件
Vue.use(Plugins)

//Vue原型对象
Vue.prototype.x = [1, 2, 3]

var vm = new Vue({
    el: '#root',
    render: h => h(App)
});

console.log(vm);