<template>
  <section class="section prices">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Bundles</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <!-- TODO: Return only certain selected fields in relation (Strapi) - Bundles are conntected with Classes, and all classes fields are return with Bundles-->
      <div class="section__courses-bundles-container">
        
        <app-loading-spinner
          v-if="loading"
        />
        <classes-bundle
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
import fetchData from '../mixins/fetchData';
import ClassesBundle from '../components/Bundles/ClassesBundle';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';

export default {
  name: 'Bundles',
  components: {
    ClassesBundle,
    AppLoadingSpinner
  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: '',
      bundles: null
    };
  },
  async created() {
    if(this.bundles && this.bundles.length > 0) return;
    // TODO: Fetching and caching data
    await this.http('http://localhost:1337/bundles')
      .then(data => {
        this.bundles = data;
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
      })
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
