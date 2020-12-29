<template>
  <TheHeader />
  <router-view />
  <AppActionStrip>
    <template v-slot:first-column>
      <img
        src="./assets/images/logos/footer-logo.png"
        alt="LaFORZA Training Center Logo"
      />
    </template>
    <template v-slot:last-column>
      <a
        @click="smoothScroll"
        ref="gotop"
        href="#home"
        class="go-top"
        aria-label="Scroll to Top"
      >
        <i class="fas fa-chevron-up go-top__icon"></i>
      </a>
    </template>
  </AppActionStrip>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/Single/TheHeader.vue';
import AppActionStrip from '@/components/Base/AppActionStrip.vue';
import TheFooter from '@/components/Single/TheFooter.vue';

export default {
  components: {
    TheHeader,
    AppActionStrip,
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
    font-size: 2rem;
  }
  &__content {
    text-transform: uppercase;
    font-size: 1.25em;
  }
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
  @media (max-width: 1280px) {
    padding: 4rem 5rem;
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
    font-size: 0.65rem;
    color: white;
  }
}
.action-strip__name {
  font-size: 1rem;
}
</style>
