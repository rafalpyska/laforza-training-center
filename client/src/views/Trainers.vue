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
      <!-- <button
        @click="
          () =>
            this.$router.push({
              path: `/trainers`,
              query: { page: 1 }
            })
        "
        class="btn btn__load-more"
      >
        Load more
      </button> -->
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
    ...mapGetters(['trainersLoadingStatus', 'trainersErrorStatus', 'trainers'])
  },
  async created() {
    if (this.trainers && this.trainers.length > 0) return;
    await this.$store.dispatch('fetchTrainers');
  },
  mounted() {
    let posts = this.trainers;
    console.log(posts);
  }
};
</script>

<style scoped lang="scss"></style>
