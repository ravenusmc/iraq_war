<template>
  <div>
    <section>
      <div>
        <h1 class='statPageTitle'>Basic Stat Area</h1>
      </div>

      <section class='statArea'>
        <div>
          <h4>Average Coalition Deaths by Year</h4>
        </div>
        <div>
          <h4>Average Iraqi Forces Deaths by Year</h4>
        </div>
        <div>
          <h4>Average Civilian Deaths by Year</h4>
        </div>
        <div>
          <h4>Average Enemy Deaths by Year</h4>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StatArea',
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
