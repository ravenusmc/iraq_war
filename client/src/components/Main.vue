<template>
  <div>
    <main>
      <SectionOne/>
      <hr/>
      <StatArea/>
      <Study/>
    </main>
    <hr/>
    <Footer/>
  </div>
</template>

<script>
import StatArea from '@/components/subComponents/StatArea.vue';
import SectionOne from '@/components/SectionOne.vue';
import Study from '@/components/Study.vue';
import Footer from '@/components/subComponents/Footer.vue';

export default {
  name: 'Main',
  components: {
    StatArea,
    SectionOne,
    Study,
    Footer,
  },
};
</script>

<style scoped>

</style>
