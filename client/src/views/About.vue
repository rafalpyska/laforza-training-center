<template>
  <section class="section about">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Client Stories</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <trainers-mini-profile 
          v-for="trainer in trainers"
          :key="trainer.id"
          :trainer="trainer"
        />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TrainersMiniProfile from '../components/TrainersMiniProfile'
export default {
  name: 'About',
  components: {
    TrainersMiniProfile
  },
  computed: {
    ...mapGetters([
      'loadingStatus',
      'errorStatus',
      'trainers'
    ]),
  },
  async mounted() {
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
