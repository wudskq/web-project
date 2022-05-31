<template>
        <div class="school">
            <h1>标题:{{msg | filte}}</h1>
            <h2 >学生姓名:{{name}}</h2>
            <h2>学生性别:{{sex}}</h2>
        </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue',
            name:'张三',
            sex:'男'
        }
    },

}
    
</script>

<style>

</style>