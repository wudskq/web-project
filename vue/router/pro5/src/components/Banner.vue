<template>
<div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">前进或后退几步</button>
</div>
</template>

<script>
export default {
    name:'Banner',
    // beforeDestroy() {
	// 	console.log('Banner组件即将被销毁');
	// },
    methods: {
        back(){
            this.$router.back()
        },
        forward(){
               this.$router.forward()
        },
        go(){
            this.$router.go(2);
        }
    },
}
</script>

<style>

</style>