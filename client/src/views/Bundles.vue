<template>
  <section class="section prices">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">Bundles</h2>
            <p>Etiam rhoncus. Maecenas tempus</p>
          </div>
        </div>
        <div class="section__courses-bundles-container">
          <ClassesBundle v-for="course in courses" :key="course.id" :course="course"/>
        </div>
    </div>
  </section>
</template>

<script>
import ClassesBundle from '../components/ClassesBundle.vue';


export default {
  name: "Bundles",
  components: {
    ClassesBundle
  },
  data() {
    return {
      loading: false,
      error: ''
    }
  },
  computed: {
  // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    courses() {
      return this.$store.state.classes;
    }
  },
  async mounted() {
    this.error = '';
    this.loading = true;
    try {
      await this.$store.dispatch('fetchClasses');
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
}
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
