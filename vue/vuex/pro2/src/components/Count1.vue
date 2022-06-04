<template>
     <div>
         选择要加的数
         <select v-model.number="value">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
         </select>
         当前值为:{{data}}
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
            data: 0,
            value:1
        }
    },
    methods: {
        Incremental(){
            this.data = this.data + this.value
        },
        Decrement(){
            this.data = this.data - this.value
        },
        Oddnumber(){
            if(this.data %2 !== 0){
                this.data = this.data + this.value
            }
        },
        Waitadd(){
            setInterval(()=>{
                this.data = this.data + this.value
            },2000);
        }
    },
}
</script>

<style>

</style>