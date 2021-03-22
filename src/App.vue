<template>
  <div id="app">
     <!-- <HelloWorld/> -->
     <!-- <Number/> -->
     <!-- <lineCharts/> -->
     <TestVuex/>
     <vuedraggable/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Number from './components/number'
import TestVuex from './components/testVuex'
import vuedraggable from './components/vueDraggable'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Number,
    TestVuex,
    vuedraggable
    // lineCharts
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
