<template>
  <div id="app">
     
     <!-- <HelloWorld/> -->
     <!-- <Number/> -->
     <!-- <lineCharts/> -->
     <!-- <TestVuex/> -->
     <antvx/>
     <!-- <vuedraggable/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Number from './components/number'
import lineCharts from './components/lineCharts'
import TestVuex from './components/testVuex'
import vuedraggable from './components/vueDraggable'
import antvx from './components/antvx6/antvx'
 
export default {
  name: 'App',
  data(){
    return{}
  },
  components: {
    HelloWorld,
    lineCharts,
    Number,
    TestVuex,
    vuedraggable,
    antvx
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
