<template>
  <header class="header">
    <!-- <div class="wrapper">
        <h1>{{ currentRouteName }}</h1>
        <div class="header__box"><span>Start</span> to engage in sports right now</div>
    </div> -->
    <vueper-slides
        fade
        autoplay
        :pause-on-hover="pauseOnHover"
        @autoplay-pause="internalAutoPlaying = false"
        @autoplay-resume="internalAutoPlaying = true">
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content" />
    </vueper-slides>
    <nav class="navigation">
        <ul class="navigation__list container">
            <li class="navigation__item">
                <router-link to="/" id="home" class="navigation__link">
                    <img src="../assets/images/logos/logo-1.png" class="navigation__logo" alt="LaFORZA Training Center Logo">
                </router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/" id="home" class="navigation__link">Home</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/about" class="navigation__link">About us</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/classes" class="navigation__link">Classes</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/prices" class="navigation__link">Prices</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/trainer" class="navigation__link">Trainer</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/schedule" class="navigation__link">Schedule</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/events" class="navigation__link">Events</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/stories" class="navigation__link">Stories</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/blog" class="navigation__link">Blog</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/details" class="navigation__link">Details</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/contact" class="navigation__link">Contact</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>
<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "TheHeader",
  components: {
    VueperSlides, 
    VueperSlide
  },
data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
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
  ]
}),
  computed: {
      currentRouteName() {
          return this.$route.name;
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
            padding: 2em;
            background-color: var(--color-primary);
            text-transform: uppercase;
            
        }
    }

    .navigation {
        font-size: .75rem;
        background-color: var(--navigation-bgc);
        &__logo {
            display: block;
        }
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__item {
            text-transform: uppercase;
        }
        &__link:link,
        &__link:visited {
            color: var(--white);
        }
        &__link:hover,
        &__link:active,
        & .router-link-active {
            color: var(--color-primary);
        }
    }
</style>
