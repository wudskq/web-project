<template>
     <div>
         <h1>计数组件</h1>
         选择要加的数
         <select v-model.number="value">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
         </select>
         当前值为: {{data}}
         <button @click="Incremental(value)">点击加一</button>
         <button @click="Decrement(value)">点击减一</button>
         <button @click="Oddnumber(value)">点击当前数为奇数时加</button>
         <button @click="Waitadd(value)">等待一段时间后增加</button>
         <h1>共享的人员数据</h1>
         <ul>
             <li v-for="p in personList" :key="p.id">
                 {{p.name}}
             </li>
         </ul>
     </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            value:1
        }
    },
    //计算属性
    computed:{
        ...mapState('numberOptions',['data']),
        ...mapState('personOptions',['personList']),
    },
    methods: {
        ...mapActions('numberOptions',{Incremental:'incre',Decrement:'decr'}),
        ...mapMutations('numberOptions',{Oddnumber:'Odd',Waitadd:'Wait'})
        // Incremental(){
        //     this.$store.dispatch('incre',this.value);
        // },
        // Decrement(){
        //      this.$store.dispatch('decr',this.value);
        // },
        // Oddnumber(){
           
        // },
        // Waitadd(){
           
        // }
    },
}
</script>

<style>

</style>