<template>
  <div>
    <main>
      <SectionOne/>
      <Study/>
    </main>
    <hr/>
    <Footer/>
  </div>
</template>

<script>
import SectionOne from '@/components/SectionOne.vue';
import Study from '@/components/Study.vue';
import Footer from '@/components/subComponents/Footer.vue';

export default {
  name: 'Main',
  components: {
    SectionOne,
    Study,
    Footer,
  },
};
</script>

<style scoped>

</style>
