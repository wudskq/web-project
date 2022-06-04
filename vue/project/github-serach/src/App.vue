<template>
  <div id="app">
    <Serach/>
    <Data/>
  </div>
</template>

<script>
import Serach  from './components/Serach.vue'
import Data from './components/Data.vue'
export default {
  name: 'App',
  components: {
   Serach,
   Data
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
