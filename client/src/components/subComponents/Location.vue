<template>
  <div>
    <section>
      <div>
        <h1 class='titleArea'>Deaths by Command Region</h1>
      </div>
      <div>
        <div id='mapArea'>
        </div>
      </div>
      <div class='formAndGraphArea'>
        <form @submit="submitYear">

          <div>
              <h1>Select the Year:</h1>
              <select v-model="year" name="year">
                <option v-for="year in years" v-bind:key="year"
                :value="year">
                  {{ year }}
                </option>
              </select>
          </div>

          <div class='button_area'>
            <button>Submit</button>
          </div>

        </form>
        <GraphCard
         :typeOne='typeOne'
         :data='deathsByRegion'
         :options='regionChartOptions'>
        </GraphCard>
      </div>

    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GraphCard from '@/components/charts/GraphCard.vue';

export default {
  name: 'Location',
  components: {
    GraphCard,
  },
  data() {
    return {
      typeOne: 'BarChart',
      year: 2005,
      years: [2005, 2006, 2007, 2008, 2009],
      regionChartOptions: {
        title: 'Deaths in Iraq by Region',
        legend: { position: 'top' },
        height: 500,
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      'deathsByRegion',
    ]),
  },
  methods: {
    ...mapActions([
      'buildInitialDeathsByRegionArea',
      'fetchDeathsByRegion',
    ]),
    submitYear(evt) {
      evt.preventDefault();
      const payload = {
        year: this.year,
      };
      this.fetchDeathsByRegion({ payload });
    },
  },
  mounted() {
    const payload = {
      year: this.year,
    };
    this.buildInitialDeathsByRegionArea({ payload });
  },
};
</script>

<style scoped>
.button_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formAndGraphArea {
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

select {
  font-size: 20px;
}

button {
  margin-top: 20px;
  padding: 10px;
  border-radius: 12px;
  background-color: #3C3B6E;
  border-color: #3C3B6E;
  color: #FFF;
  text-transform: uppercase;
}

button:hover {
  background-color: #FFF;;
  border-color: #3C3B6E;
  color: #3C3B6E;
  text-transform: uppercase;
}

.titleArea {
  text-align: center;
  text-transform: uppercase;
}

#mapArea {
  margin-left: 5%;
  margin-right: 5%;
  background-image: url('../../assets/img/MND_regions.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
}
</style>
