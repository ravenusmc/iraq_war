<template>
  <div>
    <section>
      <div>
        <h1 class='statPageTitle'>Deaths by Year By Group</h1>
      </div>
      <section class='statArea'>
        <div>
          <h4>Coalition Deaths by Year</h4>
          <li v-for="(value, deaths) in CoalitionDeathsByYear" v-bind:key="deaths">
            {{ deaths }}: {{ value }}
          </li>
        </div>
        <div>
          <h4>Iraqi Forces Deaths by Year</h4>
          <li v-for="(value, deaths) in IraqiForcesByyear" v-bind:key="deaths">
            {{ deaths }}: {{ value }}
          </li>
        </div>
        <div>
          <h4>Civilian Deaths by Year</h4>
          <li v-for="(value, deaths) in civilianDeathsByYear" v-bind:key="deaths">
            {{ deaths }}: {{ value }}
          </li>
        </div>
        <div>
          <h4>Enemy Deaths by Year</h4>
          <li v-for="(value, deaths) in enemyDeathsByYear" v-bind:key="deaths">
            {{ deaths }}: {{ value }}
          </li>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StatArea',
  computed: {
    ...mapGetters([
      'CoalitionDeathsByYear',
      'IraqiForcesByyear',
      'civilianDeathsByYear',
      'enemyDeathsByYear',
    ]),
  },
  // methods: {
  //   ...mapActions([
  //     'buildDataArea',
  //   ]),
  // },
  // mounted() {
  //   this.buildDataArea();
  // },
};
</script>

<style scoped>
.statPageTitle {
  text-transform: uppercase;
}

.statArea {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

/* Media Query area */
@media only all and (max-width: 900px){

  .statArea {
    grid-template-columns: 1fr;
  }

}
</style>
