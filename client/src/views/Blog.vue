<template>
  <section class="section blog">
    <div class="container">
      <BlogPostsList />
    </div>
  </section>
</template>

<script>
import fetchData from '../mixins/fetchData';
import BlogPostsList from '../components/Blog/BlogPostsList';

export default {
  name: 'Blog',
  components: {
    BlogPostsList
  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: '',
      posts: null
    };
  },
  async mounted() {
    this.http('http://localhost:1337/posts')
      .then(data => {
        this.posts = data;
        this.loading = false;
      })
  }
};
</script>

<style scoped lang="scss"></style>
