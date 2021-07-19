<template>
  <li class="class__complexity-item">
    <template v-for="(n, index) in max">
      <i
        :key="index"
        :class="
          `${
            rating >= n
              ? 'fas fa-star'
              : rating > n - 1
              ? 'fas fa-star-half'
              : 'far fa-star'
          }`
        "
      ></i>
    </template>
  </li>
</template>

<script>
export default {
  name: 'ClassesComplexityIndicator',
  props: {
    rating: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 5,
    },
  },
};
</script>

<style scoped lang="scss"></style>
