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
        <ClassesBundle
          v-for="bundle in bundles"
          :key="bundle.id"
          :bundle="bundle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ClassesBundle from '../components/ClassesBundle.vue';

export default {
  name: 'Bundles',
  components: {
    ClassesBundle
  },
  data() {
    return {
      loading: false,
      error: '',
      bundles: null
    };
  },
  computed: {
    // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    courses() {
      return this.$store.state.classes;
    }
  },
  async created() {
    this.error = '';
    this.loading = true;
    try {
      return await fetch('http://localhost:1337/bundles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.bundles = data;
        }) // TODO: handle errors (catch)
        .catch(reason => console.log(reason));
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
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
