<template>
  <div>
    <hr/>
    <h1>Examining All Deaths</h1>
    <SimpleForm/>
    <GraphCard
     :typeOne='typeOne'
     :data='deathData'
     :options='chartOptionsOne'>
    </GraphCard>
    <hr/>
   <h1>Examining Coalition Deaths</h1>
   <Form/>
   <GraphCard
    :typeOne='typeOne'
    :data='coalitionDeathData'
    :options='chartOptionsTwo'>
   </GraphCard>
   <hr/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Form from '@/components/subComponents/Form.vue';
import SimpleForm from '@/components/subComponents/SimpleForm.vue';
import GraphCard from '@/components/charts/GraphCard.vue';


export default {
  name: 'Study',
  components: {
    GraphCard,
    SimpleForm,
    Form,
  },
  data() {
    return {
      checkedNames: ['Coalition forces killed', 'Iraq forces killed',
        'Civilian kia', 'Enemy kia'],
      typeOne: 'LineChart',
      chartOptionsOne: {
        title: 'All Deaths in Iraq',
        legend: { position: 'top' },
        height: 500,
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
      chartOptionsTwo: {
        title: 'Coalition/Iraqi Forces Deaths in Iraq',
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
      'deathData',
      'coalitionDeathData',
    ]),
  },
  methods: {
    ...mapActions([
      'buildInitialGraphs',
    ]),
  },
  mounted() {
    const payload = {
      startDate: '1/1/2004 12:00:00 AM',
      endDate: '1/1/2009 12:00:00 AM',
      deathSelector: this.checkedNames,
    };
    this.buildInitialGraphs({ payload });
  },
};
</script>

<style scoped>
</style>
