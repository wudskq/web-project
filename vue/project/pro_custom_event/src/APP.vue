<template>
<div>
    <h1>我是APP组件</h1>
    <School :reviceSchoolName="reviceSchoolName"/>
    <hr> 
    <!-- 自定义绑定事件 -->
    <!-- <Student v-on:wudskq="reviceStudentName"/>  -->
    <!-- <Student @:wudskq="reviceStudentName"/>  -->
    <Student ref="id_1" @event1="demo"/> 
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
    methods: {
        //props子传父
        reviceSchoolName(SchoolName){
            console.log("App收到了学校名称:",SchoolName);
        },
        reviceStudentName(StudentName){
            // console.log('demo被调用了!',name);
            console.log("App-reviceStudentName收到了学生姓名:",StudentName);
        },
        demo(StudentName){
            // console.log('demo被调用了!',name);
            console.log("App-demo收到了学生姓名:",StudentName);
        }
    },
    mounted() {
        this.$refs.id_1.$on('wudskq',this.reviceStudentName);
    },
}
</script>

<style>
body{
    background-color: antiquewhite;
}
</style>