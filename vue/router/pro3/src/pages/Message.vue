<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id" >
				<!-- query传参数 第一种写法
				<router-link :to="`/home/message/details?id=${m.id}&title=${m.title}`">
				    {{m.title}}
				</router-link>&nbsp;&nbsp; -->
				<!-- query传参数 第二种写法 -->
				<router-link :to="{
					name:'MessageDetails',
					query:{
						id:m.id,
						title:m.title
					}
				}">
				    {{m.title}}
				</router-link>&nbsp;&nbsp;
				<!-- <router-link :to="{
					name:'MessageDetails',
					params:{
						id:m.id,
						title:m.title
					}
				}">
				    {{m.title}}
				</router-link>&nbsp;&nbsp; -->
			</li>
			<router-view></router-view>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data(){
			return {
				messageList:[
					{id:'01', title:'消息一'},
					{id:'02', title:'消息二'},
					{id:'03', title:'消息三'},
				]
			}
		}
	}
</script>