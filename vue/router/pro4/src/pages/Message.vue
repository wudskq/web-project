<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id" >
				<router-link :to="{
					name:'MessageDetails',
					query:{
						id:m.id,
						title:m.title
					}
				}">
				    {{m.title}} 
				</router-link>&nbsp;&nbsp;
				<button @click="showHistory(m)">push查看</button>
				<button @click="noShowHistory(m)">replace查看</button>
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
		},
		methods: {
			showHistory(m){
				this.$router.push({
					name:'MessageDetails',
					query:{
						id:m.id,
						title:m.title
					}
				});
				console.log(this);
				// console.log('查看时记录历史记录');
			},
			noShowHistory(m){
				this.$router.replace({
					name:'MessageDetails',
					query:{
						id:m.id,
						title:m.title
					}
				});
				// console.log('查看时只记录一条历史记录');
			}
		},
		mounted() {
			console.log(this);
		},
	}
</script>