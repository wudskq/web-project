<template>
        <div class="school">
            <h1>标题:{{msg}}</h1>
            <h2 @click="showName">学生姓名:{{name}}</h2>
            <h2>学生性别:{{sex}}</h2>
        </div>
</template>

<script>
// import {mixin} from './mixin.js'
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue',
            name:'张三',
            sex:'男'
        }
    },
    // mixins:[mixin]
}
    
</script>

<style>

</style>