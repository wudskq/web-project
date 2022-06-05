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

//模块化拆分
const personOptions = {
    namespaced: true,
    actions: {

    },
    mutations: {
        //直接执行数据添加操作
        ADD_PERSON(state, value) {
            // console.log(value);
            state.personList.unshift(value)
        }
    },
    state: {
        //人员数据
        personList: [
            { id: 1, name: '张三' }
        ]
    }
}

const numberOptions = {
    namespaced: true,
    actions: {
        incre(context, value) {
            // console.log('actions被调用了');
            context.commit('Incre', value);
        },
        decr(context, value) {
            // console.log('actions被调用了');
            context.commit('Decr', value);
        },
        odd(context, value) {
            // console.log('actions被调用了');
            context.commit('Odd', value);
        },
        wait(context, value) {
            // console.log('actions被调用了');
            context.commit('Wait', value);
        },
    },
    mutations: {
        Incre(state, value) {
            // console.log('mutations被调用了', context, value);
            state.data = state.data + value;
        },
        Decr(state, value) {
            // console.log('mutations被调用了', context, value);
            state.data = state.data - value;
        },
        Odd(state, value) {
            // console.log('mutations被调用了', context, value);
            if (value % 2 !== 0) {
                state.data = state.data + value;
            }
        },
        Wait(state, value) {
            // console.log('mutations被调用了', context, value);
            setInterval(() => {
                state.data = state.data + value;
            }, 2000);
        },
    },
    state: {
        //数据的和
        data: 0,
    }
}


//创建store对象并暴露
export default new Vuex.Store({
    modules: {
        personOptions,
        numberOptions
    }
});