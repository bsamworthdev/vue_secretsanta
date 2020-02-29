<template>
  <div class="container">
    <v-link href="/">Home</v-link>
    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    padding: 15px 30px;
    background: white;
    border:2px solid #C0C0C0;
    min-height:100%;
  }
</style>
