import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from './store/index.js'

Vue.config.productionTip = false;

const vm = new Vue({
    render: h => h(App),
    store: Store
}).$mount('#app')

console.log(vm);