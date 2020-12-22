<template>
  <section class="section blog">
    <div class="container">
      <AppLoadingSpinner
          v-if="loadingStatus"
        />
      <BlogPostsList 
        v-else
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </section>
</template>

<script>

import AppLoadingSpinner from '../components/Base/AppLoadingSpinner'
import fetchData from '../mixins/fetchData';
import BlogPostsList from '../components/Blog/BlogPostsList';

export default {
  name: 'Blog',
  components: {
		AppLoadingSpinner,
		BlogPostsList
  },
  mixins: [fetchData],
  computed: {
    // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
    posts() {
      return this.$store.getters.posts;
    }
  },
  mounted() {
    this.$store.dispatch('fetchBlogPosts');
  }
};
</script>

<style scoped lang="scss"></style>
