<template>
  <section class="section stories">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="section__title color-primary">Client Stories</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="stories__info">
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
    <app-action-strip>
      <template v-slot:first-column>
        <p class="action-strip__name">Client Stories</p>
      </template>
      <template v-slot:last-column>
        <app-button type="send-story">
          Send story
        </app-button>
      </template>
    </app-action-strip>
    <div class="stories__list-wrapper">
      <div class="stories__list container">
        <app-loading-spinner v-if="loading" />
        <client-story
          v-else
          v-for="story in stories"
          :key="story.id"
          :story="story"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import fetchData from '../mixins/fetchData';
import ClientStory from '../components/ClientStory';
import AppActionStrip from '@/components/Base/AppActionStrip.vue';
import AppButton from '@/components/AppButton.vue';
export default {
  name: 'Stories',
  components: {
    AppLoadingSpinner,
    ClientStory,
    AppActionStrip,
    AppButton
  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: '',
      stories: null
    };
  },
  async mounted() {
    this.http('http://localhost:1337/stories').then(data => {
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
      background-color: var(--stories-list-bgc);
    }
  }
}
.section {
  &__description {
    padding-top: 4rem;
    @media (max-width: 1280px) {
      padding: 4rem 5rem 0 5rem;
    }
  }
}
</style>
