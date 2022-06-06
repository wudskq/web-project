<template>
  <div>
      <!-- <h4>消息编号:{{$route.query.id}}</h4>
      <h4>消息内容:{{$route.query.title}}</h4> -->
      <!-- <h4>消息编号:{{$route.params.id}}</h4>
      <h4>消息内容:{{$route.params.title}}</h4> -->
      <h4>消息编号:{{id}}</h4>
      <h4>消息内容:{{title}}</h4>
      <!-- <h5>{{a}}</h5>
      <h5>{{b}}</h5> -->
  </div>
</template>

<script>
export default {
   name: 'Details',
   props:['id','title'],
   mounted() {
       console.log(this);
   }, 
}
</script>

<style>

</style>