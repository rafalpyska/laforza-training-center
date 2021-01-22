<template>
  <div class="events__info">
    <div class="events__info-header">
      {{ event.title }}
    </div>
    <div class="events__info-body">
      <p class="">
        <i class="far fa-calendar-alt events__info-icon" aria-hidden="true"></i>
        <span class="bold">Start date: </span>
        {{ event.startDate }}
      </p>
      <p class="">
        <i class="far fa-clock events__info-icon" aria-hidden="true"></i>
        <span class="bold">Start hour: </span>
        {{
          event.startHour
            .split(":")
            .splice(0, 2)
            .join(":")
        }}
      </p>
      <p class="">
        <i class="far fa-clipboard events__info-icon" aria-hidden="true"></i>
        <span class="bold">Description: </span>
        {{ event.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsInfo",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.events {
  &__info {
    display: block;
    position: absolute;
    left: 167px;
    top: 0;
    z-index: 1;
    min-width: 16rem;
    @media (max-width: 992px) {
      left: 0;
    }
    &-header {
      padding: 2rem 1rem;
      color: white;
      background-color: var(--color-primary);
    }
    &-body {
      padding: 1rem;
      background-color: white;
      color: black;
    }
    &-icon {
      margin-right: 0.25rem;
    }
  }
}
</style>
