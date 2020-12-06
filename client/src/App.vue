<template>
  <Header />
  <router-view/>
  <GoTop />
  <Footer />
</template>

<script>
  import Header from "@/components/Header.vue";
  import GoTop from "@/components/GoTop.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Header,
      GoTop,
      Footer
    }
  };
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

.container {
  max-width: 1170px;
  margin: 0 auto;
}
.row {
  display: flex;
}

.vueperslide {
  &__title {
      text-transform: uppercase;
      font-size: 3em;
  }
  &__content {
    text-transform: uppercase;
    font-size: 1.5em;
  }
}
.section {
  font-size: .90rem;
  padding: 4rem 0;
  color: var(--white);
  background-color: var(--color-secondary);
}

#app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--color-primary);

    &.router-link-exact-active {
      color: var(--color-primary);
    }
  }
}
</style>
