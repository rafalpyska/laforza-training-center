<template>
  <section class="section home">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">We help peaople find themselves</h2>
          <p>
            Many every day looking in the mirror and promise to begin to engage
            in their health tomorrow. We will give you the incentive to start
          </p>
        </div>
        <div class="section__description-encouragement">
          <div class="encouragement-box">
            <p>
              <span class="bold">Start</span> to engage in sports right now!
            </p>
          </div>
        </div>
      </div>
      <ClassesHome
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </section>
</template>

<script>
import ClassesHome from '../components/ClassesHome';

export default {
  name: 'Home',
  components: {
    ClassesHome
  },
  computed: {
    // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    loading() {
      return this.$store.state.loading;
    },
    courses() {
      return this.$store.state.classes;
    }
  },
  mounted() {
    this.$store.dispatch('fetchClasses');
  }
};
</script>

<style scoped lang="scss"></style>
