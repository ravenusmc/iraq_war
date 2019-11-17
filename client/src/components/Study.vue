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
import { mapGetters } from 'vuex';
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
        height: 600,
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
};
</script>

<style scoped>
</style>
