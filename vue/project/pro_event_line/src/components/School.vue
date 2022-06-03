<template>
        <div class="demo">
            <h1>标题:{{msg}}</h1>
            <h2 >学校名称:{{name}}</h2>
            <h2>学校地址:{{address}}</h2>
            <button @click="sendSchoolName">把学校名给student组件</button>
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
    methods: {
        sendSchoolName(){
            //定义全局事件总线触发
            this.$bus.$emit('hello',this.name);
        }
    },
    // mounted() {
    //     console.log(this.x);
    // },
}
</script>

// 范围样式生效
<style scoped>
.demo{
    background-color: pink;
}
</style>