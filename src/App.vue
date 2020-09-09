<template>
  <div id="app">
     <!-- <HelloWorld/> -->
     <Number/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Number from './components/number'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Number
  }
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
