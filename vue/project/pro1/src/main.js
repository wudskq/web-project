import Vue from 'vue/dist/vue.js'
// import Vue from 'vue'
import App from './App.vue'

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