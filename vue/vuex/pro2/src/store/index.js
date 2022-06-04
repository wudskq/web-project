//创建核心的vuex中的store
import Vuex from 'vuex'
import Vue from 'vue'
//安装VueX插件
Vue.use(Vuex);
//用于响应组件中的动作
const actions = {};
//用于加工数据
const mutations = {};
//用于存储共享数据
const state = {};
//创建store对象并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state
});