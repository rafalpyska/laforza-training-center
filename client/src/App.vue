<template>
  <TheHeader />
  <router-view/>
  <GoTop />
  <TheFooter />
</template>

<script>
  import TheHeader from "@/components/TheHeader.vue";
  import GoTop from "@/components/GoTop.vue";
  import TheFooter from "@/components/TheFooter.vue";

  export default {
    components: {
      TheHeader,
      GoTop,
      TheFooter
    }
  };
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

  #app {
    font-family: 'Play', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

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
        font-size: 2.75em;
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

  .section {
    &__description {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 4rem;
      &-info {
        grid-column: 1/3;
        margin-right: 4em;
      }
      &-encouragement {
        flex: 1 1 40%;
      }
    }
  }
  .encouragement-box {
    padding: 2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-primary);
  }
</style>
