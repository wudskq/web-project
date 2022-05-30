<template>
        <div class="school">
            <h1>标题:{{msg}}</h1>
            <h2 @click="showName">学校名称:{{name}}</h2>
            <h2>学校地址:{{address}}</h2>
        </div>
</template>

<script>
//引入混合
// import {mixin} from './mixin.js'
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue',
            name:'学校',
            address:'中国'
        }
    },
    // mixins:[mixin]
}
</script>

<style>

</style>