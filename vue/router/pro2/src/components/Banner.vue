<template>
<div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
</div>
</template>

<script>
export default {
    name:'Banner',
    // beforeDestroy() {
	// 	console.log('Banner组件即将被销毁');
	// },
    mounted() {
        console.log('Banner组件挂在完毕',this);
    },
}
</script>

<style>

</style>