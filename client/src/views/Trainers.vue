<template>
  <section class="section trainer">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Trainers</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <TrainersList />
    </div>
  </section>
</template>

<script>
import TrainersList from '../components/TrainersList';
export default {
  name: 'Trainers',
  components: {
    TrainersList
  }
};
</script>

<style scoped lang="scss"></style>
