<template>
  <div>
    <section>
      <div class="picParagraph">
      </div>
      <div class='paragraphDiv'>
        <h1>About this Project</h1>
        <p>
          I served in the Iraq war from August of 2006 until March of 2007 as a
          U.S. Marine. I was stationed at Camp Fallujah running convoys into the
          city of Fallujah supporting the Marines there. I've been meaning to do
          a project about the Iraq war for quite some time now. I finally found a
          dataset on Kaggle that will allow me to do this.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SectionOne',
};
</script>

<style scoped>

section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 3%;
  margin-right: 3%;
}

.picParagraph {
  background-image: url('../assets/img/convoy.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}

/* Media Query area */
@media only all and (max-width: 900px){

  section {
    grid-template-columns: 1fr;
  }

}


</style>
