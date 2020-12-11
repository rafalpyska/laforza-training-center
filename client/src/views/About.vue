<template>
  <section class="section about">
      <div class="container">
        <ClientStory />
    </div>
  </section>
</template>

<script>
import ClientStory from '../components/ClientStory'
export default {
  name: "About",
  components: {
    ClientStory
  }
};
</script>

<style scoped lang="scss">
  
</style>