<template>
	<div class="todo-footer">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" 
			@change="choice" 
			:checked="doneTotal === todos.length"
			v-show="todos.length!=0"
			/>
		</label>
		<span>
			<span v-show="todos.length!=0">已完成{{doneTotal}}</span>
			<span v-show="todos.length!=0">/全部{{todos.length}}</span>
		</span>
		<button class="btn btn-danger" v-show="todos.length!=0" @click="clear">清除已完成任务</button>
	</div>
</template>

<script>
    var num = 0;
	import pubsub from 'pubsub-js'
	export default {
		name:'MyFooter',
		props:['todos'],
		computed:{
			doneTotal(){
				let count = 0;
				this.todos.forEach(element => {
					if(element.done === true){
						count++;
					}
				});
				return count;
			}
		},
		methods: {
			//清除已完成的数据
			clear(){
				pubsub.publish('clearData');
			},
			//全选与取消全选
			choice(){
				if(num === 0){
					pubsub.publish('choiceAll')
					num+=1;
				}else if (num === 1){
					// this.noChoice();
					pubsub.publish('noChoice')
					num-=1;
				}
			}
			
		}
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>