<template>
  <section class="section classes container">
    <div class="section__description">
      <div class="section__description-info">
        <h2 class="section__title color-primary">Classes</h2>
        <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
      </div>
    </div>
    <app-loading-spinner v-if="loadingStatus" />
    <classes-list
      v-else
      v-for="course in classes"
      :key="course.id"
      :course="course"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import ClassesList from '../components/Classes/ClassesList';

export default {
  name: 'Classes',
  components: {
    AppLoadingSpinner,
    ClassesList
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'classes'])
  },
  async created() {
    if (this.classes && this.classes.length > 0) return;
    try {
      await this.$store.dispatch('fetchClasses');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss"></style>
