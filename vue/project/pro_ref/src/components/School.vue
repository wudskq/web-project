<template>
<div class="school">
<h1>{{name}}</h1>
<h1>{{address}}</h1>
</div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
        name:'二中',
        address:'中国'
        }
    }
}
</script>

<style>
.school{
    background-color: pink;
}
</style>