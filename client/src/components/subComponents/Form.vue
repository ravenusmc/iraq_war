<template>
  <div>
    <form @submit="submitYears">
      <h5>Select the Date:</h5>
        <md-datepicker v-model="firstDate" md-immediately />
        <md-datepicker v-model="lastDate" md-immediately />
         <v-btn type="submit" color='yellow red--text'>
           Submit
         </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  methods: {
  },
};
</script>

<style scoped>
form {
  margin-bottom: 100px;
}
</style>
