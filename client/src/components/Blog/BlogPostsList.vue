<template>
  <div class="container">
    <app-loading-spinner v-if="loadingStatus" />
    <div class="blog__post-list" v-for="post in posts" :key="post.id" v-else>
      <div class="blog__post-list-image-container">
        <image-item
          :source="`http://localhost:1337${post.image.formats.large.url}`"
          :alt="`${post.image.alternativeText}`"
        />
        <blog-post-date :post="post" />
      </div>
      <div class="blog__post-list-shortened">
        <h2 class="blog__post-list-heading">{{ post.title }}</h2>
        <p class="blog__post-list-paragraph">{{ post.summary }}</p>
        <div class="blog__post-list-controls">
          <app-button type="load-more">
            <router-link
              :to="{ name: 'BlogPost', params: { slug: post.slug } }"
              class="blog__post-list-controls-read-more"
              >Read More</router-link
            >
          </app-button>
          <p
            class="blog__post-list-posted-by"
            v-for="author in post.authors"
            :key="author.id"
          >
            {{ author.username }}
          </p>
        </div>
      </div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import AppLoadingSpinner from '../Base/AppLoadingSpinner';
import { mapGetters } from 'vuex';
import fetchData from '@/mixins/fetchData';
import ImageItem from '../ImageItem';
import BlogPostDate from './BlogPostDate';
import AppButton from '../AppButton';

export default {
  name: 'BlogPostsList',
  components: {
    AppLoadingSpinner,
    ImageItem,
    BlogPostDate,
    AppButton
  },
  mixins: [fetchData],
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'posts'])
  },
  async created() {
    try {
      await this.$store.dispatch('fetchBlogPosts');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss">
.blog__post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin-bottom: 2rem;
  font-size: 0.8rem;
  &:hover .blog__post-date {
    background-color: var(--color-primary);
  }
  &:nth-of-type(odd) .blog__post-list-image-container {
    order: 2;
    @media (max-width: 992px) {
      order: 0;
    }
  }
  &-image-container {
    position: relative;
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
  }
  &-shortened {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--blog-post-list-shortened-bgc);
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
  }
  &-heading {
    margin-bottom: 0.75rem;
  }
  &-paragraph {
    flex: 1;
  }
  &-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.75rem;
    &-read-more:link,
    &-read-more:visited {
      color: white;
    }
  }
}
</style>
