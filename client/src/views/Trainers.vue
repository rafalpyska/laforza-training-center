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
      <TrainersList
        v-else
        v-for="trainer in trainers"
        :key="trainer.id"
        :trainer="trainer"
      />
      <BaseButton v-if="page > 1" @click="moveBack" btnType="load-more" class="previous">Previous</BaseButton>
      <BaseButton @click="loadMore" btnType="load-more">Next</BaseButton>
      <router-view/>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TrainersList from '../components/Trainers/TrainersList';

export default {
  name: 'Trainers',
  components: {
    TrainersList
  },
  computed: {
    ...mapGetters(['trainersLoadingStatus', 'trainersErrorStatus', 'trainers', 'pagination', 'page'])
  },
  async created() {
    if (this.trainers && this.trainers.length > 0) return;
    await this.$store.dispatch('fetchTrainers');
  },
  methods: {
    async loadMore() {
      // should I store fetched records in data, in order not to fetch all
      // the time over again when a user would like to move back?
      if(this.pagination.start <= this.pagination.limit) {
        await this.$store.dispatch('paginationLoadMore', { start: 3, page: 1 });
      }
    },
    async moveBack() {
      if(this.pagination.start !== 0) {
        await this.$store.dispatch('paginationPrevious', { start: 3, page: 1 });
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .previous {
    margin-right: 1rem;
  }
</style>
