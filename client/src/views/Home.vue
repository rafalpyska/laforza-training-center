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
    // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    loading() {
      return this.$store.state.loading;
    },
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
  }
  .encouragement-box {
    padding: 2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-primary);
  }
</style>
