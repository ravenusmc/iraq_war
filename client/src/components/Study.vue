<template>
  <div>
    <Form/>
    <GraphCard
     :typeOne='typeOne'
     :data='coalitionDeathData'
     :options='chartOptionsOne'>
   </GraphCard>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Form from '@/components/subComponents/Form.vue';
import GraphCard from '@/components/charts/GraphCard.vue';


export default {
  name: 'Study',
  components: {
    Form,
    GraphCard,
  },
  data() {
    return {
      typeOne: 'LineChart',
      chartOptionsOne: {
        title: 'Coalition Deaths',
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
    };
    this.buildInitialGraphs({ payload });
  },
};
</script>

<style scoped>
</style>
