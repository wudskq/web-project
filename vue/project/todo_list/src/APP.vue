<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!-- 父组件传输函数到子组件 -->
				<MyHeader :receive="receive"/>
				<MyList :todoData="todos" :reviceData="reviceData" :deleteData="deleteData"/>
				<MyFooter :todos="todos" 
				@clearTodoList="clearData"
				@choiceAll="choiceAll"
				@noChoice="noChoice"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'
	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data(){
			return{
				//使用空数组 解决第一次进来空数据null异常问题
				todos:JSON.parse(localStorage.getItem('todos')) ||[]
			}
		},
		//监视属性(todos数据变化就更新localStorge数据)
		watch:{
			todos:{
				//开启深度监视
				deep:true,
				handler(value){
				// console.log(value);
				localStorage.setItem('todos',JSON.stringify(value));
				}
			}
		},
		//组件通信(数据在哪,函数体在哪)
		methods: {
			//接收list的数据
			receive(result){
				console.log('我是app组件收到了数据',result);
				this.todos.unshift(result);
			},
			//接收item的ID
			reviceData(id){
				console.log('l我是app组件收到点击的itemid等于'+id)
				this.todos.forEach((todo)=>{
					//勾选状态取反
					if(todo.id===id){
						todo.done = !todo.done
					}
				});
			},
			//接收item的ID
			deleteData(id){
				// console.log(id);
				this.todos = this.todos.filter((todo)=>{
					return todo.id !== id;
				})
			},
			//清除已完成的数据
			clearData(){
				this.todos = this.todos.filter((todo)=>{
					return todo.done !== true;
				})
			},
			//全选
			choiceAll(){
				this.todos.forEach(element => {
				element.done = true});
			},
			//不选择
			noChoice(){
				this.todos.forEach(element => {
				element.done = false});
			}
		},
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
