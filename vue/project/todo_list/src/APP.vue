<template>
<div class='app'>
    <Header></Header>
    <List></List>
    <Footer></Footer>
</div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
    name:'App',
    components:{
        Header,
        Footer,
        List
    }
}
</script>

<style scoped>
.app{
    margin:20px auto;
    width: 600px;
    height: 300px;
    border: 1px solid whitesmoke;
}
</style>