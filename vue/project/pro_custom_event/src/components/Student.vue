<template>
        <div class="demo">
            <h1>标题:{{msg | filte}}</h1>
            <h2 >学生姓名:{{name}}</h2>
            <h2>学生性别:{{sex}}</h2>
          <button @click="sendStudentName">点击按钮发送学生名称给APP</button>
          <!-- <button @click="demo">自定义事件二</button> -->
          <button @click="unbindAll">解绑自定义事件</button>
        </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我正在学习Vue',
            name:'张三',
            sex:'男'
        }
    },
    methods: {
        sendStudentName(){
            //触发Student组件实例上的wudskq事件
            this.$emit('wudskq',this.name)
               //触发Student组件实例上的wudskq事件
            this.$emit('event1',this.name)
        },
        unbind(){
            //适用于一个自定义事件
            this.$off('wudskq');
        },
        unbindAll(){
            //解绑多个事件
            this.$off(['wudskq','event1']);
            //解绑所有自定义事件
            // this.$off()
        },
        demo(){
              //触发Student组件实例上的wudskq事件
            this.$emit('event1',this.name)
        }
    },

}
</script>

<style scoped>
.demo{
    background-color: aquamarine;
}
</style>