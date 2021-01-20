<template>
  <section class="section about">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">About Us</h2>
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
      <BaseLoadingSpinner v-if="trainersLoadingStatus" />
      <div class="trainer__list container" v-else>
        <hooper ref="plans" :settings="hooperSettings">
          <slide v-for="trainer in trainers" :key="trainer.id">
            <TrainersMiniProfile :trainer="trainer" />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TrainersMiniProfile from "../components/Trainers/TrainersMiniProfile";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  name: "About",
  components: {
    TrainersMiniProfile,
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      limit: 50,
      hooperSettings: {
        wheelControl: false,
        infiniteScroll: true,
        breakpoints: {
          300: {
            itemsToShow: 1
          },
          800: {
            itemsToShow: 3
          },
          1280: {
            itemsToShow: 6,
            pagination: "fraction"
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["trainersLoadingStatus", "trainersErrorStatus", "trainers"])
  },
  async mounted() {
    await this.$store.dispatch("fetchTrainers", { start: 0, limit: this.limit, page: 1 });
  }
};
</script>

<style scoped lang="scss">
.trainer {
  &__list {
    overflow: hidden;
  }
}
</style>
