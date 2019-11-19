<template>
  <div>
    <section>
      <div class="picParagraph">
      </div>
      <div class='paragraphDiv'>
        <h1>About this Project</h1>
        <p align="left">
          I served in the Iraq war from August of 2006 until March of 2007 as a
          U.S. Marine. I was stationed at Camp Fallujah running convoys into the
          city of Fallujah supporting the Marine infantry in and around the city.
          Over the course of those 7 months, I ran about 80 or so convoys and was
          a member of quite a few others. In the summer of 2019, I did a project
          focusing on Vietnam and deaths there. I finally found a dataset, on
          Kaggle, that covered the Iraq war.
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
