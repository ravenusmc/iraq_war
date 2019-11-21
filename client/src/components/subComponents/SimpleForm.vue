<template>
  <div>
    <form @submit="submitSelection">

      <h3>Enter the Date:</h3>
      <div class='datePicker'>
          <label>Start Date:</label>
          <input v-model="startDate">
          <label>End Date:</label>
          <input  v-model="endDate">
      </div>

      <h3>What do you want to see on the graph:</h3>
      <div class='deathSelector'>
        <input type="checkbox" name="Coalition forces killed" v-model="checkedNames"
        value="Coalition forces killed">Coalition Forces<br>
        <input type="checkbox" name="Iraq forces killed" v-model="checkedNames"
        value="Iraq forces killed">Iraqi Forces<br>
        <input type="checkbox" name="Civilian kia" v-model="checkedNames"
        value="Civilian kia">Civilians Killed<br>
        <input type="checkbox" name="Enemy kia" v-model="checkedNames"
        value="Enemy kia">Enemy Killed<br>
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
    submitSelection(evt) {
      evt.preventDefault();
      this.startDate = moment(this.startDate).format('M/D/YYYY h:mm:ss A');
      this.endDate = moment(this.endDate).format('M/D/YYYY h:mm:ss A');
      const payload = {
        startDate: this.startDate,
        endDate: this.endDate,
        deathSelector: this.checkedNames,
      };
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
  background-color: #A5B8C8;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
}

.datePicker {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.deathSelector {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

label {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 20px;
}

input {
  height: 50px;
  font-size: 20px;
}

button {
  padding: 10px;
  border-radius: 12px;
  background-color: #3C3B6E;
  border-color: #3C3B6E;
  color: #FFF;
  text-transform: uppercase;
}

button:hover {
  padding: 12px;
  border-radius: 14px;
  background-color: #3C3B6E;
  border-color: #3C3B6E;
  color: #FFF;
  text-transform: uppercase;
}
</style>
