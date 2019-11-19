<template>
  <div>
    <form @submit="submitSelection">

      <h5>Select the Date:</h5>
      <div class='datePicker'>
          <label>Start Date:</label>
          <input v-model="startDate">
          <label>End Date:</label>
          <input  v-model="endDate">
      </div>

      <div>
        <button>Submit</button>
      </div>

    </form>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  name: 'SimpleForm',
  data() {
    return {
      startDate: '01/01/2004',
      endDate: '01/01/2009',
      type: 'Non-Combat Event',
      typeOfEvents: ['Non-Combat Event', 'Criminal Event', 'Friendly Action',
        'Explosive Hazard', 'Enemy Action', 'Other', 'Suspicious Incident',
        'Threat Report', 'Friendly Fire', 'criminal event', 'CRIMINAL EVENT',
        'EXPLOSIVE HAZARD'],
      attackType: 'ENEMY',
      attackTypes: ['ENEMY', 'NEUTRAL', 'FRIEND'],

    };
  },
  computed: {
    lastDay() {
      return moment().subtract(1, 'days').format('M/D/YYYY');
    },
  },
  methods: {
    ...mapActions([
      'getFormData',
    ]),
    submitSelection(evt) {
      evt.preventDefault();
      this.startDate = moment(this.startDate).format('M/D/YYYY h:mm:ss A');
      this.endDate = moment(this.endDate).format('M/D/YYYY h:mm:ss A');
      const payload = {
        startDate: this.startDate,
        endDate: this.endDate,
        type: this.type,
        attackType: this.attackType,
      };
      console.log(payload);
      this.getFormData({ payload });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.datePicker {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

label {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 30px;
}

input {
  height: 50px;
  font-size: 30px;
}

button {
  padding: 10px;
  border-radius: 12px;
  background-color: #3C3B6E;
  border-color: #3C3B6E;
  color: #FFF;
  text-transform: uppercase;
}
</style>
