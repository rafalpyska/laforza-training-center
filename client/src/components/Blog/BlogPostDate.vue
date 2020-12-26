<template>
  <div class="blog__post-date">
    <p class="blog__post-date-day">{{ day }}</p>
    <p class="blog__post-date-month">{{ monthName(month) }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogPostDate',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      day: this.post.publishedAt.split('-')[2],
      month: this.post.publishedAt.split('-')[1]
    };
  },
  methods: {
    monthName(month) {
      return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ][month - 1];
    }
  }
};
</script>

<style scoped lang="scss">
.blog__post-date {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 1rem;
  text-transform: uppercase;
  background-color: var(--blog-post-date-bgc);
  &-day {
    font-size: 1.4em;
  }
  &-month {
    font-size: 0.9em;
  }
}
</style>
