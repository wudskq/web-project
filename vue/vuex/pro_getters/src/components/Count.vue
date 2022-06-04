<template>
     <div>
         选择要加的数
         <select v-model.number="value">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
         </select>
         当前值为: {{$store.state.data}}
         放大10倍后的值为: {{$store.getters.bigSum}}
         <button @click="Incremental">点击加一</button>
         <button @click="Decrement">点击减一</button>
         <button @click="Oddnumber">点击当前数为奇数时加</button>
         <button @click="Waitadd">等待一段时间后增加</button>
     </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            value:1
        }
    },
    methods: {
        Incremental(){
            this.$store.dispatch('incre',this.value);
        },
        Decrement(){
             this.$store.dispatch('decr',this.value);
        },
        Oddnumber(){
            if(this.$store.state.data %2 !== 0){
              this.$store.dispatch('odd',this.value);  
            }
        },
        Waitadd(){
            setInterval(()=>{
                 this.$store.dispatch('wait',this.value);
            },2000);
        }
    },
}
</script>

<style>

</style>