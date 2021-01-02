<template>
  <section class="section trainer">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Trainers</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <AppLoadingSpinner v-if="loadingStatus" />
      <TrainersList
        v-else
        v-for="course in classes"
        :key="course.id"
        :course="course"
      />
      <button
        @click="
          () =>
            this.$router.push({
              path: `/trainers?page=${this.$route.query + 1}`,
              query: { page: 1 }
            })
        "
        class="btn btn__load-more"
      >
        Load more
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import TrainersList from '../components/Trainers/TrainersList';

export default {
  name: 'Trainers',
  components: {
    AppLoadingSpinner,
    TrainersList
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'classes'])
  },
  async created() {
    if (this.trainers && this.trainers.length > 0) return;
    try {
      await this.$store.dispatch('fetchClasses');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss"></style>
