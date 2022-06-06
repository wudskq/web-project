<template>
    <div>
	<h2>我是Home的内容</h2>
	<router-link  to="/home/news" active-class="active">news</router-link>
	&nbsp;
	<router-link  to="/home/message" active-class="active">message</router-link>
	<router-view></router-view>
	</div> 
</template>

<script>
	export default {
		name:'Home',
		// beforeDestroy() {
		// 	console.log('Home组件即将被销毁');
		// },
	}
</script>