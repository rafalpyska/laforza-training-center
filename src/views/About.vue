<template>
  <section class="section about">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Client Stories</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <BaseLoadingSpinner v-if="trainersLoadingStatus" />
      <div class="trainer__list" v-else>
        <TrainersMiniProfile
          v-for="trainer in trainers"
          :key="trainer.id"
          :trainer="trainer"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TrainersMiniProfile from "../components/Trainers/TrainersMiniProfile";
export default {
  name: "About",
  components: {
    TrainersMiniProfile
  },
  data() {
    return {
      limit: 50
    };
  },
  computed: {
    ...mapGetters(["trainersLoadingStatus", "trainersErrorStatus", "trainers"])
  },
  async mounted() {
    await this.$store.dispatch("fetchTrainers", { limit: this.limit });
  }
};
</script>

<style scoped lang="scss">
.trainer {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: 1fr;
  }
}
</style>
