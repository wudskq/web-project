<template>
<div>
     <school></school>
    <student></student>
</div>
</template>

<script>
//引入组件
import school from './School.vue'
import student from './Student.vue'
export default {
    name:'root',
    //注册组件
    components:{
        school,
        student
    }
}
</script>

<style>

</style>