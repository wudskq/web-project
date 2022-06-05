<template>
  <div>
    <h1>人员列表</h1>
   <input type="text" placeholder="请输入名字" v-model="name"/>
   <button @click="addPerson">保存</button>
   <ul>
       <li v-for="p in personList" :key="p.id">
           {{p.name}}
       </li>
   </ul>
   <h1>共享的计算数据</h1>
   {{data}}
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapMutations, mapState} from 'vuex'
export default {
    name:'Person',
    data(){
        return {
            name:''
        }
    },
    //计算属性
    computed:{
        personList(){
            return this.$store.state.personOptions.personList
        },
        ...mapState('numberOptions',['data'])
      
    },
    methods: {
        //添加人员数据
        addPerson(){
        const personObj ={
            id: nanoid(),
            name: this.name}
        // console.log(personObj);
        this.$store.commit('personOptions/ADD_PERSON',personObj)
        this.name = '';
        }
    },
    mounted() {
        console.log(this);
    },
}
</script>

<style scopde>
li{
    list-style: none;
}
</style>