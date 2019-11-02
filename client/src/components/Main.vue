<template>
  <div>
    <main>
      <SectionOne/>
    </main>
  </div>
</template>

<script>
import SectionOne from '@/components/SectionOne.vue';

export default {
  name: 'Main',
  components: {
    SectionOne,
  },
};
</script>

<style scoped>
main {
  border: 2px solid black;
}

</style>
