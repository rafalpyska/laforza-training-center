<template>
  <section class="trainers-mini-profile">
    <splide>
      <splide-slide>
        <img src="http://dummyimage.com/40x40">
      </splide-slide>
      <splide-slide>
        <img src="http://dummyimage.com/40x40">
      </splide-slide>
      <splide-slide>
        <img src="http://dummyimage.com/40x40">
      </splide-slide>
    </splide>
  </section>
</template>
<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/splide/dist/css/themes/splide-default.min.css'
  export default {
    name: "TrainersMiniProfile",
    components: {
      Splide,
      SplideSlide
    }
  };
</script>
<style scoped lang="scss">

</style>