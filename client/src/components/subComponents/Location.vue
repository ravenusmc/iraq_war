<template>
  <div>
    <section>
      <div>
          <h1 class='titleArea'>Deaths by Command Region</h1>
      </div>
      <div>
        <div id='mapArea'>
          <div class='Baghdad_div'>
            <h1 class='regionFix'>{{ MNDBaghdadDeaths }}</h1>
          </div>
          <div class='West_div'>
            <h1 class='regionFix'>{{ MNDWestDeaths }}</h1>
          </div>
          <div class='MND-N_div'>
            <h1 class='regionFix'>{{ MNDNDeaths }}</h1>
          </div>
          <div class='MND-NE_div'>
            <h1 class='regionFix'>{{ MNDNEDeaths }}</h1>
          </div>
          <div class='MND-C_div'>
            <h1 class='regionFix'>{{ MNDCDeaths }}</h1>
          </div>
          <div class='MND-SE_div'>
            <h1 class='regionFix'>{{ MNDSEDeaths }}</h1>
          </div>
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
            <h3 v-if='gettingResponseRegion'>Getting Response...</h3>
          </div>

          <h3 v-if="regionResponse">Response Received</h3>

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
import { mapActions, mapGetters, mapMutations } from 'vuex';
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
      'regionResponse',
      'gettingResponseRegion',
      'MNDBaghdadDeaths',
      'MNDWestDeaths',
      'MNDNDeaths',
      'MNDNEDeaths',
      'MNDCDeaths',
      'MNDSEDeaths',
    ]),
  },
  methods: {
    ...mapActions([
      'buildInitialDeathsByRegionArea',
      'fetchDeathsByRegion',
    ]),
    ...mapMutations([
      'setRegionResponse',
      'setGettingResponseRegion',
    ]),
    submitYear(evt) {
      evt.preventDefault();
      this.getting_response = true;
      const payload = {
        year: this.year,
      };
      this.fetchDeathsByRegion({ payload });
      this.setGettingResponseRegion(true);
      this.setRegionResponse(false);
    },
  },
  // mounted() {
  //   const payload = {
  //     year: this.year,
  //   };
  //   this.buildInitialDeathsByRegionArea({ payload });
  // },
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
  align-items: center;
}

select {
  font-size: 20px;
}

button {
  margin-top: 10px;
  padding: 10px;
  border-radius: 12px;
  background-color: #027A3B;
  border-color: #027A3B;
  color: #FFF;
  text-transform: uppercase;
}

button:hover {
  background-color: #FFF;
  border-color: #027A3B;
  color: #027A3B;
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
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
}

.Baghdad_div {
  position: relative;
  top: 42%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.West_div {
  position: relative;
  top: 30%;
  right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.MND-N_div {
  position: relative;
  top: -20%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.MND-NE_div {
  position: relative;
  top: -8%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.MND-C_div {
  position: relative;
  top: 5%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.MND-SE_div {
  position: relative;
  top: 5%;
  left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.regionFix {
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
}

/* Media Query Area */
@media only all and (max-width: 900px){

  .formAndGraphArea {
    grid-template-columns: 1fr;
  }

}

</style>
