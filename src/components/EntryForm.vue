<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>

      <div v-for="(line, index) in lines" :key="index" class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-10">
            <input
              v-model="line.name"
              label="participantName"
              type="tel"
              placeholder="Name..."
              value=""
            />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
          <input
              v-model="line.email"
              label="participantEmail"
              type="tel"
              placeholder="Email..."
              value=""
            />
      </div>

      <div class="col-lg-2">
        <div class="block float-right">
          <input type="button" round @click="removeLine(index)" value="Delete" />
          <input type="button" round v-if="index + 1 === lines.length" @click="addLine" value="Add"/>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ParticipantLine',
  props: {
    msg: String
  },
  data() {
    return {
      lines: [],
      blockRemoval: true
    }
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine() {
      let checkEmptyLines = this.lines.filter(line => line.name === null)

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
         return
      } 

      this.lines.push({
        name: null,
        email: null
      })
    },

    removeLine(lineId) {
      if (!this.blockRemoval) {
         this.lines.splice(lineId, 1)
      }
    }
  },
  mounted() {
    this.addLine()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
