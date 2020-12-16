<template>
  <TheHeader />
  <router-view/>
  <ActionStrip>
    <template v-slot:first-column>
      <img src="./assets/images/logos/footer-logo.png" alt="LaFORZA Training Center Logo">
    </template>
    <template v-slot:last-column>
      <a href="#home" class="go-top">
        <i class="fas fa-chevron-up go-top__icon"></i>
      </a>
    </template>
  </ActionStrip>
  <TheFooter />
</template>

<script>
  import TheHeader from "@/components/TheHeader.vue";
  import ActionStrip from "@/components/ActionStrip.vue";
  import TheFooter from "@/components/TheFooter.vue";

  export default {
    components: {
      TheHeader,
      ActionStrip,
      TheFooter
    }
  };
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');

  #app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-secondary);
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
  .image {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
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
      font-size: .85rem;
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

  .go-top {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--white);
    &:hover {
      background-color: white;
    }
    &:hover &__icon {
      color: var(--color-primary);
    }
    &__icon {
      font-size: .65rem;
      color: white;
    }
  }
  .action-strip__name {
    font-size: 1rem;
  }
</style>
