<template>
  <header class="header">
    <!-- fixed-height="100vh" on slider-->
    <vueper-slides
      fade
      autoplay
      :pause-on-hover="pauseOnHover"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      :parallax="parallax"
      :parallax-fixed-content="parallaxFixedContent"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="parallaxFixedContent ? slide.title : ''"
        :content="parallaxFixedContent ? slide.content : ''"
      />
    </vueper-slides>
    <nav class="navigation" :class="{ 'navigation--expanded' : isExpanded }">
      <ul class="navigation__list container">
        <li class="navigation__item">
          <router-link to="/" id="home" class="navigation__link">
            <img
              src="@/assets/images/logos/logo-1.png"
              class="navigation__logo"
              alt="LaFORZA Training Center Logo"
            />
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/" id="home" class="navigation__link"
            >Home</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/about" class="navigation__link"
            >About us</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/classes" class="navigation__link"
            >Classes</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/bundles" class="navigation__link"
            >Bundles</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/trainers" class="navigation__link"
            >Trainers</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/schedule" class="navigation__link"
            >Schedule</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/events" class="navigation__link"
            >Events</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/stories" class="navigation__link"
            >Stories</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/blog" class="navigation__link">Blog</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/contact" class="navigation__link"
            >Contact</router-link
          >
        </li>
      </ul>
      <button class="navigation__toggle" aria-expanded="false" aria-controls="navigation__toggle" @click="navigationToggle()">
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </nav>
  </header>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'TheHeader',
  components: {
    VueperSlides,
    VueperSlide
  },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    parallax: 1,
    parallaxFixedContent: true,
    slides: [
      {
        title: 'Little effort',
        content: 'And You will succeed with us',
        image: require('@/assets/images/hero.jpg')
      },
      {
        title: 'Change your life',
        content: 'And find themselves',
        image: require('@/assets/images/hero-2.jpg')
      },
      {
        title: 'Little effort',
        content: 'And You will succeed with us',
        image: require('@/assets/images/hero-3.jpg')
      }
    ],
    isExpanded: false
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    navigationToggle() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped lang="scss">
.router-link-active {
  color: var(--color-primary);
}
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 1170px;
  margin: 0 auto;
}
.header {
  background-color: var(--header-bgc);
  color: var(--white);
  &__box {
    padding: 2rem;
    background-color: var(--color-primary);
    text-transform: uppercase;
  }
}
.navigation {
  display: flex;
  align-items: center;
  font-family: 'Play', sans-serif;
  font-size: 0.75rem;
  background-color: var(--navigation-bgc);
  @media (max-width: 1280px) {
    padding: 0 5rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  &__logo {
    display: block;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &__item {
    text-transform: uppercase;
    &:not(:first-child) {
      @media (max-width: 768px) {
        display: none;
      }
    }
    &:not(:first-child) .navigation__link {
      padding: 0 1rem;
    }
    &:first-child .navigation__link {
      border-top: none;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    transition: 0.2s all linear;
  }
  &__link:link,
  &__link:visited {
    color: var(--white);
  }
  &__link:hover,
  &__link:active,
  & .router-link-active {
    border-top: 3px solid var(--color-primary);
    color: var(--color-primary);
  }
  &__toggle {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.15rem;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  &--expanded {
    & .navigation__item {
      display: block;
      padding: .5rem 0;
    }
    & .navigation__list {
      flex-direction: column;
    }
  }
}
</style>
