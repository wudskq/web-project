import Vue from 'vue'
import App from './APP'


//全局混合
import { mixin } from './components/mixin.js'
Vue.mixin(mixin);


new Vue({
    el: '#root',
    render: h => h(App)
});