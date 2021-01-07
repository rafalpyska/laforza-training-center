<template>
  <section class="section schedule">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Schedule</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="section__description">
        <div class="section__description-info">
          <p class="section__description-info-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eligendi perspiciatis similique quis dolorem aut, temporibus odio
            autem quae cupiditate cumque debitis molestias provident sapiente
            vitae. Dolore mollitia quos necessitatibus. Dolore mollitia quos
            necessitatibus debitis molestias provident sapiente vitae. Dolore
            mollitia quos necessitatibus
          </p>
          <p class="section__description-info-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eligendi perspiciatis similique quis dolorem aut, temporibus odio
            autem quae cupiditate cumque debitis molestias provident sapiente
            vitae. Dolore mollitia quos necessitatibus.
          </p>
          <p class="section__description-info-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            eligendi perspiciatis similique quis dolorem aut, temporibus odio
            autem quae cupiditate cumque debitis molestias provident sapiente
            vitae. Dolore mollitia quos necessitatibus.
          </p>
        </div>
        <figure class="section__description-image-container">
          <img
            src="../assets/images/placeholder.png"
            alt=""
            class="section__description-image image"
          />
          <figcaption class="section__description-image-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus deleniti iusto ipsum accusantium itaque officia.
            Autem veritatis totam quidem, aliquam soluta consequuntur atque, nam
            qui at est nihil animi.
          </figcaption>
        </figure>
      </div>
      <AppLoadingSpinner v-if="loadingStatus" />
      <ScheduleList v-else :trainers="trainers" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import ScheduleList from '../components/Schedule/ScheduleList';

export default {
  name: 'Schedule',
  components: {
    ScheduleList,
    AppLoadingSpinner
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'trainers'])
  },
  async created() {
    if (this.trainers && this.trainers.length > 0) return;
    await this.$store.dispatch('fetchTrainers');

  }
};
</script>

<style scoped lang="scss"></style>
