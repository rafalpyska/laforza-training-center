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
import { mapGetters } from "vuex";
import TrainersList from "../components/Trainers/TrainersList";

export default {
  name: "Trainers",
  components: {
    TrainersList
  },
  data() {
    return {
      meta: {
        start: 0,
        limit: 3,
        currentPage: 1,
        pageCount: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      "trainersLoadingStatus",
      "trainersErrorStatus",
      "trainers",
      "pagination",
      "pageNumber",
      "pagesTotal"
    ])
  },
  async created() {
    await this.$store.dispatch("fetchTrainers", {
      limit: this.pagination.limit,
      start: (Number(this.$route.params.page) - 1) * this.pagination.limit,
      page: Number(this.$route.params.page)
    });
  }
};
</script>

<style scoped lang="scss">
.previous {
  margin-right: 1rem;
}
</style>
