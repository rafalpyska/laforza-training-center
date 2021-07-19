<template>
  <section class="section trainer">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Trainers</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <BaseLoadingSpinner v-if="trainersLoadingStatus" />
      <template v-else>
        <TrainersList
          v-for="trainer in trainers"
          :key="trainer.id"
          :trainer="trainer"
        />
        <BasePagination
          :pagination="pagination"
          :next="'paginationLoadMore'"
          :previous="'paginationPrevious'"
        />
        <router-view :key="$route.fullPath" />
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TrainersList from '../components/Trainers/TrainersList';

export default {
  name: 'Trainers',
  components: {
    TrainersList,
  },
  computed: {
    ...mapGetters([
      'trainersLoadingStatus',
      'trainersErrorStatus',
      'trainers',
      'pagination',
      'pageNumber',
      'pagesTotal',
    ]),
  },
  async created() {
    await this.$store.dispatch('fetchTrainers', {
      page: Number(this.$route.params.page),
      start: (Number(this.$route.params.page) - 1) * this.pagination.limit,
      limit: this.pagination.limit,
    });
  },
};
</script>

<style scoped lang="scss">
.previous {
  margin-right: 1rem;
}
</style>
