<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <main>
      <SectionOne/>
      <hr/>
      <StatArea/>
      <hr/>
      <Location/>
      <Study/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import StatArea from '@/components/subComponents/StatArea.vue';
import Location from '@/components/subComponents/Location.vue';
import SectionOne from '@/components/SectionOne.vue';
import Study from '@/components/Study.vue';
import Footer from '@/components/subComponents/Footer.vue';

export default {
  name: 'Main',
  components: {
    StatArea,
    Location,
    SectionOne,
    Study,
    Footer,
  },
};
</script>

<style scoped>

</style>
