<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hi and welcome to my Secret Santa app.
    </p>
    <b-button variant="success" href="/setup">Continue</b-button>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
