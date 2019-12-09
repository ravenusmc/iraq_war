<template>
  <div>
    <section>
      <div>
        <h1 class='statPageTitle'>Basic Stat Area</h1>
      </div>
      <!-- This is the stats section that gives total deaths by year -->
      <section class='statArea'>
        <div>
          <h4>Coalition Deaths by Year</h4>
          <li v-for="(value, deaths) in CoalitionDeathsByYear" v-bind:key="deaths">
            {{ deaths }}: {{ value }}
          </li>
        </div>
        <div>
          <h4>Iraqi Forces Deaths by Year</h4>
        </div>
        <div>
          <h4>Civilian Deaths by Year</h4>
        </div>
        <div>
          <h4>Enemy Deaths by Year</h4>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'StatArea',
  computed: {
    ...mapGetters([
      'CoalitionDeathsByYear',
    ]),
  },
  methods: {
    ...mapActions([
      'buildDataArea',
    ]),
  },
  mounted() {
    this.buildDataArea();
  },
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
</style>
