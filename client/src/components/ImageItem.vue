<template>
  <figure v-lazyload class="image__wrapper">
    <img
      class="image__item"
      src="../assets/images/placeholder.png"
      :data-url="source"
      :width="width"
      :height="height"
      :alt="alt"
    />
  </figure>
</template>
<script>
export default {
  name: 'ImageItem',
  props: {
    source: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
  inheritAttrs: false,
};
</script>
<style scoped lang="scss">
.image {
  &__wrapper {
    width: 100%;
    height: 100%;
  }
  &__item {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    opacity: 1;
    transition: opacity 0.1s ease-out;
    &[data-url] {
      opacity: 0;
    }
  }
}
</style>
