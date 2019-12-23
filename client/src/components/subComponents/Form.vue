<template>
  <div>
    <form @submit="submitSelectionTwo">

      <div class='datePicker'>
          <h3>Enter the Date:</h3>
          <label>Start Date:</label>
          <input v-model="startDate">
          <label>End Date:</label>
          <input  v-model="endDate">
      </div>
      <div>
          <h3>Select the Event Type:</h3>
          <select v-model="type" name="type">
            <option v-for="type in typeOfEvents" v-bind:key="type" :value="type">{{ type }}</option>
          </select>
      </div>

      <div class='deathSelector'>
        <h3>Select What to See:</h3>
        <input type="checkbox" name="Coalition forces killed" v-model="checkedNames"
        value="Coalition forces killed">Coalition Forces<br>
        <input type="checkbox" name="Iraq forces killed" v-model="checkedNames"
        value="Iraq forces killed">Iraqi Forces<br>
      </div>

      <div class='button_area'>
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
      checkedNames: [],
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
    submitSelectionTwo(evt) {
      evt.preventDefault();
      this.startDate = moment(this.startDate).format('M/D/YYYY h:mm:ss A');
      this.endDate = moment(this.endDate).format('M/D/YYYY h:mm:ss A');
      const payload = {
        startDate: this.startDate,
        endDate: this.endDate,
        type: this.type,
        deathSelector: this.checkedNames,
      };
      this.getFormData({ payload });
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 25px;
  background-color: #A5B8C8;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
}

.datePicker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;
}

.deathSelector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px;
  border-radius: 12px;
  background-color: #027A3B;
  border-color: #027A3B;
  color: #FFF;
  text-transform: uppercase;
}

button:hover {
  background-color: #FFF;
  border-color: #FFF;
  color: #027A3B;
  text-transform: uppercase;
}

/* Media Query Area */
@media only all and (max-width: 900px){

  form {
    grid-template-columns: 1fr;
  }

}
</style>
