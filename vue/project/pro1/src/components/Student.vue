<template>
        <div>
        <h3>学生名称:{{studentName}}</h3>
        <h3>学生地址:{{studentAddress}}</h3>
        </div>
</template>

<script>
export default {
    name:'Student',
    data() {
            return {
                studentName: '名称',
                studentAddress: '地址'
            }
    }
}
</script>

<style>

</style>