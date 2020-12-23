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
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'loadingStatus',
      'errorStatus',
      'posts'
    ]),
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchBlogPosts');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss"></style>
