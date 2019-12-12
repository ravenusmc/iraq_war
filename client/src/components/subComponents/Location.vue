<template>
  <div>
    <section>
      <div>
        <h1 class='titleArea'>Deaths by Command Region</h1>
      </div>
      <div>
        <div id='mapArea'>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Location',
};
</script>

<style scoped>
.titleArea {
  text-align: center;
  text-transform: uppercase;
}

#mapArea {
  margin-left: 5%;
  margin-right: 5%;
  background-image: url('../../assets/img/MND_regions.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  border: 2px solid red;
}
</style>
