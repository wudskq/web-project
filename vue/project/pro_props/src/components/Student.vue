<template>
        <div class="school">
            <h1>标题:{{msg}}</h1>
            <h2>学生姓名:{{name}}</h2>
            <h2>学生性别:{{sex}}</h2>
            <h2>学生年龄{{age+1}}</h2>
        </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue'
        }
    },
    //接收参数(简单接收)
    // props:['name','sex','age']
    //限定类型接收
    // props:{
    //     name: String,
    //     sex: String,
    //     age: Number
    // }
    props:{
        name:{
            type:String,
            required: true //代表该参数为必要的
        },
        sex:{
            type:String,
            required: false //代表该参数为必要的
        },
        age:{
            type:Number,
            required: false //代表该参数为必要的
        }
    }
}
</script>

<style>

</style>