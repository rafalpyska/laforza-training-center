<template>
  <section class="section classes container">
    <div class="section__description">
      <div class="section__description-info">
        <h2 class="color-primary">Classes</h2>
        <p>Etiam rhoncus. Maecenas tempus</p>
      </div>
    </div>
    <ClassesList v-for="course in courses" :key="course.id" :course="course" />
  </section>
</template>

<script>
import ClassesList from '../components/ClassesList';

export default {
  name: 'Classes',
  components: {
    ClassesList
  },
  data() {
    return {
      loading: false,
      error: ''
    };
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
};
</script>

<style scoped lang="scss"></style>
