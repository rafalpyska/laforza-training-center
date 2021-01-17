<template>
  <div class="events__info" :class="{ 'events__info--visible': isVisible }" :style="{ right: width }">
    <div class="events__info-header">
      {{ event.title }}
    </div>
    <div class="events__info-body">
      <p>Start date: {{ event.startDate }}</p>
      <p>Start hour: {{ event.startHour }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsInfo',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    event: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .events {
    &__info {
      display: none;
      &-header {
        padding: 2rem 1rem;
        background-color: var(--color-primary);
      }
      &-body {
        padding: 1rem;
        background-color: white;
      }
      &--visible {
        display: block;
        position: absolute;
        top: 0;
        z-index: 1;
      }
    }
  }
</style>