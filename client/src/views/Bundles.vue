<template>
  <section class="section prices">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Bundles</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <!-- TODO: Return only certain selected fields in relation (Strapi) - Bundles are conntected with Classes, and all classes fields are return with Bundles-->
      <div class="section__courses-bundles-container">
        <BaseLoadingSpinner v-if="bundlesLoadingStatus" />
        <ClassesBundle
          v-else
          v-for="bundle in bundles"
          :key="bundle.id"
          :bundle="bundle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ClassesBundle from '../components/Bundles/ClassesBundle';

export default {
  name: 'Bundles',
  components: {
    ClassesBundle
  },
  computed: {
    ...mapGetters(['bundlesLoadingStatus', 'bundlesErrorStatus', 'bundles'])
  },
  async created() {
    if (this.bundles && this.bundles.length > 0) return;
    await this.$store.dispatch('fetchBundles');
  }
};
</script>

<style scoped lang="scss">
.section {
  &__courses {
    &-bundles-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
      gap: 2rem;
      font-size: 0.9em;
    }
  }
}
</style>
