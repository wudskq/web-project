import Vue from 'vue/dist/vue'
// import Vue from 'vue'
import App from './App.vue'

//入口文件
Vue.config.productionTip = false

new Vue({
    //模版解析器
    // render: h => h(App),
    template: `
    <div>
    <App></App>
    </div>
    `,
    components: {
        App
    }
}).$mount('#app')