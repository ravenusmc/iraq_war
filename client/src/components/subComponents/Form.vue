<template>
  <div>
    <form @submit="submitYears">
      <h5>Select the Date by Year:</h5>
      <label>Year One:</label>
       <input type="number" v-model='yearOne' name="yearOne" placeholder="Enter First Year">&nbsp;
       <label>Year Two:</label>
       <input type="number" v-model="yearTwo" name="yearTwo" placeholder="Enter Second Year">
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
</style>
