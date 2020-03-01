<template>
  <div>
    <h1 id="participantsHeader">
      {{ msg }} 
      <b-button variant="success" @click="addLine">
        <font-awesome-icon icon="plus" /> Add
      </b-button>
    </h1>
    
    <b-form @submit.prevent="submitForm">
      <div v-for="(line, index) in lines" :key="index" class="row participantRow">
        <div class="col-lg-1">
            <label
              class="participantNumber"
              label="participantNumber"
            >({{ index+1 }})</label>
        </div>

        <div class="col-lg-4">
            <input
              class="participantName"
              v-model="line.name"
              label="participantName"
              type="text"
              placeholder="Name..."
              value=""
              :class="{'isEmpty': line.name === null && addLineClicked}"
            />
        </div>

        <div class="col-lg-3">
            <input
                class="participantEmail"
                v-model="line.email"
                label="participantEmail"
                type="text"
                placeholder="Email..."
                value=""
              />
        </div>

        <div class="col-lg-3">
          <div class="block float-left">
            <b-button variant="danger" @click="removeLine(index)" :disabled="lines.length == 1">
              <font-awesome-icon icon="times" /> Delete
            </b-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-align-center">
          <b-button  id="continueButton" type="submit" variant="success" size="lg" :disabled="lines.filter(line => line.name !== null && line.name !== '').length < 2">
            Continue
          </b-button>
        </div>
      </div>
    </b-form>
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
      blockRemoval: true,
      addLineClicked: false
    }
  },
  watch: {
    lines() {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine() {
      this.addLineClicked = true;
      let checkEmptyLines = this.lines.filter(line => (line.name === null || line.name === ''))

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
        return
      }

      this.lines.push({
        number: 1,
        name: null,
        email: null
      })
      this.addLineClicked = false;
    },
    removeLine(lineId) {
      if (!this.blockRemoval) {
         this.lines.splice(lineId, 1)
      }
    },
    submitForm() {
      this.errors = {};
      const axios = require('axios');
      axios.post('/submit', this.lines).then(response => {
        alert('Message sent!');
        console.log(response);
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
        }
      });
    },
  },
  mounted() {
    this.addLine()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #participantsHeader {
    padding-left: 80px;
  }
  .participantName, .participantEmail{
    width:90%;
  }
  .participantRow{
    margin-bottom:10px;
  }
  .isEmpty{
    background-color:pink;
  }
  .hidden{
    display:none;
  }
  #continueButton{
    margin-top:40px;
  }
</style>
