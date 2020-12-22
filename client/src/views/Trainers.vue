<template>
  <section class="section trainer">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Trainers</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <AppLoadingSpinner
          v-if="loading"
      />
      <TrainersList 
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
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import fetchData from '../mixins/fetchData';
import TrainersList from '../components/TrainersList';
export default {
  name: 'Trainers',
  components: {
    AppLoadingSpinner,
    TrainersList,
  },
  props: {

  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: '',
      trainers: null,
    };
  },
  async mounted() {
    this.http('http://localhost:1337/users')
      .then(data => {
        this.trainers = data;
        this.loading = false;
      })
  }
};
</script>

<style scoped lang="scss"></style>
