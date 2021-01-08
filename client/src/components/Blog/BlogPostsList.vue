<template>
  <div class="container">
    <BaseLoadingSpinner v-if="postsLoadingStatus" />
    <div class="blog__post-list" v-for="post in posts" :key="post.id" v-else>
      <div class="blog__post-list-image-container">
        <ImageItem
          :source="`${post.image.formats.large.url}`"
          :alt="`${post.image.alternativeText}`"
        />
        <BlogPostDate :post="post" />
      </div>
      <div class="blog__post-list-shortened">
        <h2 class="blog__post-list-heading">{{ post.title }}</h2>
        <p class="blog__post-list-paragraph">{{ post.summary }}</p>
        <div class="blog__post-list-controls">
          <BaseButton
            btnType="load-more"
            :to="{ name: 'BlogPost', params: { slug: post.slug } }"
          >
            Read More
          </BaseButton>
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
import { mapGetters } from 'vuex';
import fetchData from '@/mixins/fetchData';
import ImageItem from '../ImageItem';
import BlogPostDate from './BlogPostDate';

export default {
  name: 'BlogPostsList',
  components: {
    ImageItem,
    BlogPostDate
  },
  mixins: [fetchData],
  data() {
    return {
      startPostsFrom: 0,
      numberOfPosts: 50
    };
  },
  computed: {
    ...mapGetters(['postsLoadingStatus', 'postsErrorStatus', 'posts'])
  },
  async created() {
    await this.$store.dispatch('fetchBlogPosts', {
      start: this.startPostsFrom,
      limit: this.numberOfPosts
    });
  }
};
</script>

<style scoped lang="scss">
.blog__post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  // grid-auto-rows: minmax(10rem, 24rem);
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
  }
}
</style>
