<template>
  <header class="header">
    <!-- fixed-height="100vh" on slider-->
    <vueper-slides
      autoplay
      :dragging-distance="70"
      prevent-y-scroll
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
    <TheNavigation />
  </header>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import TheNavigation from './TheNavigation.vue';

export default {
  name: "TheSliderHeader",
  components: {
    VueperSlides,
    VueperSlide,
    TheNavigation
  },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    parallax: 1,
    parallaxFixedContent: true,
    slides: [
      {
        title: "Little effort",
        content: "And You will succeed with us",
        image: require("@/assets/images/hero.jpg")
      },
      {
        title: "Change your life",
        content: "And find themselves",
        image: require("@/assets/images/hero-2.jpg")
      },
      {
        title: "Little effort",
        content: "And You will succeed with us",
        image: require("@/assets/images/hero-3.jpg")
      }
    ]
  }),
};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--header-bgc);
  color: var(--white);
  position: relative;
}

</style>
