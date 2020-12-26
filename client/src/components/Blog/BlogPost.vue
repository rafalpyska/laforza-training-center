<template>
  <div class="container">
    <app-loading-spinner v-if="loadingStatus" />
    <section class="section blog" v-else>
      <div class="container">
        <div class="blog__post-wrapper">
          <div class="blog__post">
            <div class="blog__post-image-container">
              <image-item
                :source="
                  `http://localhost:1337${post[0].image.formats.large.url}`
                "
                :alt="`${post[0].image.alternativeText}`"
              />
              <blog-post-date :post="post[0]" />
            </div>
            <div class="blog__post-shortened">
              <h2 class="blog__post-heading">{{ post[0].title }}</h2>
              <p
                class="blog__post-posted-by"
                v-for="author in post[0].authors"
                :key="author.id"
              >
                Published by: {{ author.username }}
              </p>
              <p class="blog__post-paragraph">
                {{ post[0].content }}
              </p>
            </div>
          </div>
          <aside class="blog__post-sidebar">
            <div class="blog__post-category">
              <h2 class="blog__post-category-heading">Categories</h2>
              <ul class="blog__post-category-list">
                <li
                  class="blog__post-category-item"
                  v-for="category in post[0].categories"
                  :key="category.id"
                >
                  #{{ category.name }}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from '../Base/AppLoadingSpinner';
import ImageItem from '../ImageItem';
import BlogPostDate from './BlogPostDate';

export default {
  name: 'BlogPost',
  components: {
    AppLoadingSpinner,
    ImageItem,
    BlogPostDate
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'post'])
  },
  async created() {
    try {
      await this.$store.dispatch('fetchOneBlogPost', this.slug);
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss">
.blog__post {
  grid-column: 1/3;
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;
    font-size: 0.8rem;
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      column-gap: 0;
    }
  }
  background-color: var(--blog-post-bgc);
  &:hover .blog__post-date {
    background-color: var(--color-primary);
  }
  &-image-container {
    position: relative;
    grid-column: 1/3;
    height: 18rem;
  }
  &-shortened {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--blog-post-shortened-bgc);
  }
  &-heading {
    font-family: 'Play', sans-serif;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  &-paragraph {
    flex: 1;
    white-space: pre-wrap;
  }
  &-posted-by {
    margin-bottom: 2rem;
  }
  &-sidebar {
    padding: 2rem;
    background-color: var(--blog-post-sidebar-bgc);
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
  }
  &-category {
    &-list {
    }
    &-item {
    }
  }
}
</style>
