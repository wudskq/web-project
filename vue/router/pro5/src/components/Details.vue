<template>
  <div>
      <h4>消息编号:{{id}}</h4>
      <h4>消息内容:{{title}}</h4>
  </div>
</template>

<script>
export default {
   name: 'Details',
   props:['id','title'],
   mounted() {
     
   }, 
}
</script>

<style>

</style>