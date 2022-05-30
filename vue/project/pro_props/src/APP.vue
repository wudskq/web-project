<template>
<div>
    <Student name="张三" :age=18 sex="男"/> 
    <hr>
     <Student name="李四" :age="18" /> 
 
</div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        Student
    }
}
</script>

<style>

</style>