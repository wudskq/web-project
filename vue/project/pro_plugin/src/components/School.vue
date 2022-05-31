<template>
        <div class="school">
            <h1>标题:{{msg}}</h1>
            <h2 >学校名称:{{name}}</h2>
            <h2>学校地址:{{address}}</h2>
        </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue',
            name:'学校',
            address:'中国'
        }
    },
}
</script>

<style>

</style>