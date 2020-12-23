<template>
  <section class="section trainer">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Trainers</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <app-loading-spinner
          v-if="loadingStatus"
      />
      <trainers-list
        v-else
        v-for="trainer in trainers"
        :key="trainer.id"
        :trainer="trainer"
      />
      <button @click="() => this.$router.push({ path: `/trainers?page=${this.$route.query + 1}`, query: { page: 1 }})" class="btn btn__load-more">Load more</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import TrainersList from '../components/TrainersList';

export default {
  name: 'Trainers',
  components: {
    AppLoadingSpinner,
    TrainersList
  },
    computed: {
    ...mapGetters([
      'loadingStatus',
      'errorStatus',
      'trainers'
    ]),
  },
  async created() {
    if(this.trainers && this.trainers.length > 0) return;
    try {
      await this.$store.dispatch('fetchTrainers');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss"></style>
