<template>
  <div>
    <section>
      <div class="picParagraph">
      </div>
      <div class='paragraphDiv'>
        <h1 class='initialHeading'>About this Project</h1>
        <p align="left">
          I served in the Iraq war from August of 2006 until March of 2007 as a
          U.S. Marine. I was stationed at Camp Fallujah running convoys into the
          city of Fallujah supporting the Marine infantry in and around the city.
          Many of the vehicles in my convoys were like the LVS's in the picture to
          the left. At times, a lot of my vehicles even had a lot barriers on them
          again like the ones from the photo on the left. Over the course of those
          7 months, I ran about 80 or so convoys and was a member of quite a few
          others. In the summer of 2019, I did a project focusing on Vietnam and
          deaths there. I finally found a dataset, on Kaggle, that covered
          the Iraq war.
        </p>
        <p align="left">
          Please note, that the data that this project uses is quite expansive
          and thus it may take a few seconds, up to 10-15, to see the graphs
          initially pop up. That's one reason why I have the basic stats section
          below so that people can read about those stats as the graphs load.
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

.initialHeading {
  text-transform: uppercase;
}

/* Media Query area */
@media only all and (max-width: 900px){

  section {
    grid-template-columns: 1fr;
  }

}


</style>
