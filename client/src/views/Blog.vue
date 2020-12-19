<template>
  <section class="section blog">
    <div class="container">
      <BlogPosts />
    </div>
  </section>
</template>

<script>
import BlogPosts from "../components/BlogPosts";

  export default {
    name: "Blog",
    components: {
      BlogPosts
    }
  };
</script>

<style scoped lang="scss">

</style>
