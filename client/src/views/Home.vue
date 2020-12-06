<template>
  <section class="section home">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">We help peaople find themselves</h2>
            <p>Many every day looking in the mirror and promise to begin to engage in their  health tomorrow. We will give you the incentive to start</p>
          </div>
          <div class="section__description-encouragement">
            <div class="encouragement-box">
              <p><span class="bold">Start</span> to engage in sports right now!</p>
            </div>
          </div>
        </div>
        <CoursesHome v-for="course in courses" :key="course.id" :course="course"/>
    </div>
  </section>
</template>

<script>
import CoursesHome from "../components/CoursesHome";

export default {
  name: "Home",
  components: {
    CoursesHome
  },
  computed: {
    courses() {
       return this.$store.state.courses;
    }
  },
  mounted() {
    this.$store.dispatch('fetchCourses');
  }
};
</script>

<style scoped lang="scss">
  .section {
    &__description {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 4rem;
      &-info {
        grid-column: 1/3;
        margin-right: 4em;
      }
      &-encouragement {
        flex: 1 1 40%;
      }
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 25rem;
    }
  }
  .encouragement-box {
    padding: 2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-primary);
  }

  .course {
    padding: 3.5rem 2.5rem;
    &__info {
      color: black;
      background-color: var(--white);
    }
    &__heading {
      font-size: 1.75em;
      text-transform: uppercase;
    }
    &__description {
      font-size: .9em;
      margin: 1em 0;
      text-transform: uppercase;
    }
    &__img {
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }

    &__hours {
      background-color: var(--color-primary);
      &:first-of-type {
        order: 31;
      }
    }
  }
</style>
