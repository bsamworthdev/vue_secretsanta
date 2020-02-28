<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/santa.png">
    <title></title>
    <Intro msg="Secret Santa"/>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
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
  margin-top: 60px;
}
</style>
