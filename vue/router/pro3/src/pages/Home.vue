<template>
    <div>
	<h2>我是Home的内容</h2>
	<router-link  :to="{name:'aboutPage'}" active-class="active">news</router-link>
	&nbsp;
	<!-- 开启历史记录replace模式 -->
	<router-link replace to="/home/message" active-class="active">message</router-link>
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