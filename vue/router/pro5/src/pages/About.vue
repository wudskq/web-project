<template>
    <div>
	<h2>我是About的内容</h2>
	</div>
</template>

<script>
	export default {
		name:'About',
		//组件内路由
		//通过路由规则进入该组件时被调用
		beforeRouteEnter (to, from, next) {
			 if (to.meta.isAuth) { //判断是否需要鉴权
               if (localStorage.getItem('school') === 'atguigu') {
                    next()
				} else {
					alert('学校名不对，无权限查看！')
				}
            }
		},
		//通过路由规则离开该组件时被调用
		beforeRouteLeave (to, from, next) {
			// ...
			next();
		}
	}
</script>