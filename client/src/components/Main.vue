<template>
  <div>
    <main>
      <SectionOne/>
      <Study/>
    </main>
  </div>
</template>

<script>
import SectionOne from '@/components/SectionOne.vue';
import Study from '@/components/Study.vue';

export default {
  name: 'Main',
  components: {
    SectionOne,
    Study,
  },
};
</script>

<style scoped>

</style>
