<template>
<div>
    <!--传统方式 -->
    <h1 v-text="msg" id="id_1"></h1>
     <button ref="btn" @click="showDom">点击输出上方dom元素</button>
    <!-- vue方式 -->
    <h1 v-text="msg1" ref="id_2"></h1>
    <button @click="showDom1">点击输出上方dom元素</button>
    <school ref="sch"/>
</div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App',
    data(){
        return{
            msg:'欢迎学习Vue',
            msg1:'欢迎学习Vue1'
        }
    },
    components:{
        School
    },
    methods: {
        showDom(){
            const data = document.querySelector('#id_1');
            console.log(data);
        },
        showDom1(){
            console.log(this.$refs.id_2);
            console.log(this.$refs.btn);
            console.log(this.$refs.sch);
        }
    }
}
</script>

<style>

</style>