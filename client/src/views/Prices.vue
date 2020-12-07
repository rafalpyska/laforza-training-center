<template>
  <section class="section prices">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">Prices</h2>
            <p>Etiam rhoncus. Maecenas tempus</p>
          </div>
        </div>
        <div class="section__courses-bundles-container">
          <CoursesBundle v-for="course in courses" :key="course.id" :course="course"/>
        </div>
    </div>
  </section>
</template>

<script>
import CoursesBundle from '../components/CoursesBundle.vue';


export default {
  name: "Prices",
  components: {
    CoursesBundle
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
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
    &__courses {
      &-bundles-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 2rem;
        font-size: .9em;
      }
    }
  }
</style>
