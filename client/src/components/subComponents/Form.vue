<template>
  <div>
    <form @submit="submitSelection">

      <div class='datePicker'>
          <h5>Select the Date:</h5>
          <label>Start Date</label>
          <input v-model="startDate">
          <label>End Date</label>
          <input  v-model="endDate">
      </div>
      <div>
          <h5>Select the Event Type:</h5>
          <select v-model="type" name="type">
            <option v-for="type in typeOfEvents" v-bind:key="type" :value="type">{{ type }}</option>
          </select>
      </div>

      <div>
          <h5>Select the Event Type:</h5>
          <select v-model="attackType" name="attackType">
            <option v-for="attackType in attackTypes" v-bind:key="attackType" :value="attackType">
              {{ attackType }}
            </option>
          </select>
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
  name: 'Form',
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 100px;
}

.datePicker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;
}
</style>
