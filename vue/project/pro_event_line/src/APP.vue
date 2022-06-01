<template>
<div>
    <h1>我是APP组件</h1>
    <School></School>
    <hr>
    <Student></Student>
</div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:'App',
    components:{
        Student,
        School
    },
}
</script>

<style>
body{
    background-color: antiquewhite;
}
</style>