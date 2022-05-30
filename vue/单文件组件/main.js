import Vue from 'vue'
import APP from './App.vue'


new Vue({
    el: '#root',
    components: {
        APP
    },
    //模版解析器
    render: h => h(APP)
});