<template>
  <section class="section blog">
    <div class="container">
      <BlogPostsList />
    </div>
  </section>
</template>

<script>
import BlogPostsList from '../components/Blog/BlogPostsList';

export default {
  name: 'Blog',
  components: {
    BlogPostsList
  }
};
</script>

<style scoped lang="scss"></style>
