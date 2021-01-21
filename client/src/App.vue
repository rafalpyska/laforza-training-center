<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>

<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-secondary);
}
.vueperslide {
  &__title {
    font-family: "Play", sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
    @media (max-width: 468px) {
      font-size: 1.25rem;
    }
  }
  &__content {
    font-family: "Play", sans-serif;
    text-transform: uppercase;
    font-size: 1.25em;
    @media (max-width: 800px) {
      font-size: 0.85rem;
    }
    @media (max-width: 468px) {
      font-size: 0.65rem;
    }
  }
}
.vueperslides {
  &__arrow {
    font-size: 0.85rem;
    @media (max-width: 1440px) {
      font-size: 0.7rem;
    }
    @media (max-width: 468px) {
      font-size: 0.5rem;
    }
  }
  &--fixed-height {
    height: 100vh;
  }
}
.container {
  max-width: 1170px;
  margin: 0 auto;
}
.row {
  display: flex;
}
.image {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
}
.section {
  font-size: 0.9rem;
  padding: 4rem 0;
  color: var(--white);
  background-color: var(--color-secondary);
  flex: 1;
  @media (max-width: 1280px) {
    padding: 4rem 5rem;
  }
  @media (max-width: 768px) {
    padding: 4rem 3rem;
  }
  &__info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2.5rem;
    font-size: 0.75rem;
    &-titles-container {
      grid-column: 1/3;
      margin-right: 4em;
      @media (max-width: 992px) {
        grid-column: 1/-1;
        margin-right: 0;
      }
    }
    &-encouragement {
      @media (max-width: 992px) {
        grid-column: 1/-1;
        margin-top: 2rem;
      }
    }
  }
  &__title {
    text-transform: uppercase;
  }
  &__subtitle {
    color: var(--section-subtitle);
    text-transform: uppercase;
  }
  &__description {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    margin: 2rem 0;
    font-size: 0.85rem;
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-column: span 2;
      &-paragraph {
        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }
      }
    }
    &-image {
      height: 15rem;
      &-description {
        font-size: 0.75rem;
      }
    }
  }
}

.encouragement-box {
  padding: 1.5rem 1rem;
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
    font-size: 0.65rem;
    color: white;
  }
}
.action-strip__name {
  font-size: 1rem;
}
.logo__bottom {
  width: 200px;
  height: auto;
  @media (max-width: 1222px) {
    width: 155px;
  }
  @media (max-width: 768px) {
    width: 135px;
  }
}
</style>
