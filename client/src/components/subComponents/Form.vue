<template>
  <div>
    <form @submit="submitSelection">
      <h5>Select the Date:</h5>
      <div class='datePicker'>
          <label>Start Date</label>
          <input :value="startDate" :min="lastDay">
          <label>End Date</label>
          <input :value="endDate">
          <!-- <input type="date" :value="selectedDate.start" :min="firstDay"
          :max="lastDay" @input="setCustomStartDate">
          <label>End Date</label>
          <md-input type="date" :value="selectedDate.end" :max="lastDay"
          @input="setCustomEndDate"></md-input> -->
        <!-- <md-datepicker v-model="firstDate" md-immediately />
        <md-datepicker v-model="lastDate" md-immediately /> -->
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Form',
  data() {
    return {
      startDate: '01/01/2004',
      endDate: '01/01/2009',
    };
  },
  computed: {
    lastDay() {
      return moment().subtract(1, 'days').format('M/D/YYYY');
    },
  },
  methods: {
    submitSelection(evt) {
      evt.preventDefault();
      this.startDate = moment(this.startDate).format('M/D/YYYY h:mm:ss A');
      this.endDate = moment(this.endDate).format('M/D/YYYY h:mm:ss A');
      console.log(this.startDate);
      console.log(this.endDate);
      // const queryData = {
      //   firstDate: this.firstDate,
      //   lastDate: this.lastDate,
      //   shift: this.shift,
      //   offense: this.offense,
      // };
      // eventBus.$emit('dataSubmitted', queryData);
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 100px;
}

.datePicker {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin-left: 3%;
  margin-right: 3%;
}
</style>
