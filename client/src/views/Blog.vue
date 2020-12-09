<template>
  <section class="section blog">
    <div class="container">
      <BlogPost />
    </div>
  </section>
</template>

<script>
import BlogPost from "../components/BlogPost";

  export default {
    name: "Blog",
    components: {
      BlogPost
    }
  };
</script>

<style scoped lang="scss">

</style>
