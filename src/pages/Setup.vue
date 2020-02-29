<template>
  <main-layout>
    <div id="app">
      <entry-form msg="Participants"/>
    </div>
  </main-layout>
</template>

<script>
import EntryForm from '../components/EntryForm.vue'
import MainLayout from '../layouts/Main.vue'

export default {
  name: 'Setup',
  components: {
    EntryForm,
    MainLayout
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
