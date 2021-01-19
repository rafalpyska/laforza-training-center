<template>
  <section class="section stories">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Client Stories</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="section__description">
        <p>
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
          nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
          odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
        <p>
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
          nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
          odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
      </div>
    </div>
    <BaseActionStrip>
      <template v-slot:first-column>
        <p class="action-strip__name">Client Stories</p>
      </template>
      <template v-slot:last-column>
        <BaseButton btnType="send-story">
          Send story
        </BaseButton>
      </template>
    </BaseActionStrip>
    <div class="stories__list-wrapper">
      <div class="stories__list container">
        <BaseLoadingSpinner v-if="loading" />
        <hooper v-else ref="plans" :settings="hooperSettings">
          <slide v-for="story in stories" :key="story.id">
            <ClientStory
              :story="story"
            />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
  </section>
</template>

<script>
import fetchData from "../mixins/fetchData";
import ClientStory from "../components/ClientStory";
import { 
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper';

export default {
  name: "Stories",
  components: {
    ClientStory,
    Hooper,
    Slide,
    HooperPagination
  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: "",
      stories: null,
      hooperSettings: {
        itemsToShow: 3,
        wheelControl: false,
        breakpoints: {
          300: {
            itemsToShow: 1
          },
          800: {
            itemsToShow: 2
          },
          1280: {
            itemsToShow: 3,
            pagination: 'fraction'
          }
        }
      }
    };
  },
  async mounted() {
    this.http(`${process.env.VUE_APP_API_URL}/stories`).then(data => {
      this.stories = data;
      this.loading = false;
    });
  }
};
</script>

<style scoped lang="scss">
.stories {
  padding: 0;
  &__info,
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 4rem;
    overflow: hidden;
  }
  &__info {
    font-size: 0.8rem;
    margin-bottom: 4rem;
    @media (max-width: 1280px) {
      padding: 0 5rem;
    }
  }
  &__list {
    padding: 5rem 0;
    &-wrapper {
      @media (max-width: 1280px) {
        padding: 0 5rem;
      }
      @media (max-width: 768px) {
        padding: 4rem 3rem;
      }
      background-color: var(--stories-list-bgc);
    }
  }
}
.section {
  &__info {
    padding-top: 4rem;
    @media (max-width: 1280px) {
      padding: 4rem 5rem 0 5rem;
    }
    @media (max-width: 768px) {
      padding: 4rem 3rem 0 3rem;
    }
  }
  &__description {
    @media (max-width: 1280px) {
      padding: 0 5rem 0 5rem;
    }
    @media (max-width: 768px) {
      padding: 0 3rem 3rem 3rem;
    }
  }
}
</style>
