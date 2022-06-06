<template>
    <div>
	<h2>我是Home的内容</h2>
	<router-link :to="{name:'News'}" active-class="active">news</router-link>
	&nbsp;
	<!-- 开启历史记录replace模式 -->
	<router-link to="/home/message" active-class="active">message</router-link>
	<!-- 开启路由缓存 -->
	<keep-alive include="News">
		<router-view></router-view>
	</keep-alive>
	</div> 
</template>

<script>
	export default {
		name:'Home',
	}
</script>