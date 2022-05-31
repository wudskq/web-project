<template>
    <div>
    <input type="checkbox"/>
    <label for="">已完成{{number}}</label>/<label for="">全部{{allNumber}}</label>
    <button @click="clearList">清除已完成的任务</button>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
           
        }
    },
    props:{
        number:{
            type: String,
        },
        allNumber:{
            type:String,
          
        }
    },
    methods: {
        clearList(){
            alert(111)
        }
    },
}
</script>

<style scoped>
input{
    margin-top: 10px;
    margin-left: 20px;
}
button{
    margin-left:320px;
}
</style>