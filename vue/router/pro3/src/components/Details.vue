<template>
  <div>
      <!-- <h4>消息编号:{{$route.query.id}}</h4>
      <h4>消息内容:{{$route.query.title}}</h4> -->
      <h4>消息编号:{{$route.params.id}}</h4>
      <h4>消息内容:{{$route.params.title}}</h4>
  </div>
</template>

<script>
export default {
   name: 'Details',
   mounted() {
       console.log(this);
   }, 
}
</script>

<style>

</style>