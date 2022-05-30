<template>
       <div>
        <h3>学校名称:{{schoolName}}</h3>
        <h3>学校地址:{{schoolAddress}}</h3>
        <button @click="show">点我弹出学校名称</button>
        </div>    
</template>

<script>
export default {
    name:'school',
    data() {
            return {
                schoolName: '名称',
                schoolAddress: '地址'
            }
        },
   methods: {
            show() {
                alert(this.schoolName)
            }
    }
}
</script>

<style>

</style>