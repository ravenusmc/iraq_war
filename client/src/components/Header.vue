<template>
  <div>
    <header>
      <div class='headerDiv'>
        <h1>Iraq War Study</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

header {
  background-image: url('../assets/img/flags.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.headerDiv {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
}

</style>
