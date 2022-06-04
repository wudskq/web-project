<template>
      <div class="serach clearfix">
          <input id ="put_id1" placeholder="请输入搜索内容" v-model="data"/>
          <button id ="btn_1" @click="doSreach">点击搜索</button>
      </div>
</template>

<script>
export default {
    name: 'Serach',
    data(){
        return{
            data: ''
        }
    },
    methods: {
        //触发事件
        doSreach(){
            this.$bus.$emit('reviceData',this.data);
        }
    },
}
</script>

<style scoped>
.serach{
    margin: 20px;
    margin-left: 560px;
    width: 560px;
}
#put_id1{
    float: left;
}
#btn_1{
    float: left;
    margin-left: 10px;
    width: 70px;
    height: 21px;
}
.clearfix::before,
.clearfix::after {
            content: "";
            display: table;
}
        
.clearfix::after {
            clear: both;
}
        
.clearfix {
            *zoom: 1;
}
</style>