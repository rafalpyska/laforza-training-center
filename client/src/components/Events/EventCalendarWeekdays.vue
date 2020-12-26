<template>
  <ol class="events-calendar__days-of-week-list">
    <li
      v-for="weekday in weekdays"
      :key="weekday"
      class="events-calendar__days-of-week-item"
    >
      {{ weekday }}
    </li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: 'CalendarWeekdays',

  computed: {
    weekdays() {
      return WEEKDAYS
    }
  }
}
</script>

<style scoped lang="scss">
  .events-calendar {
    &__days-of-week {
      &-list {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-rows: minmax(5rem, 1fr);
        background-color: var(--color-primary);
        text-align: center;
        text-transform: uppercase;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        @media (max-width: 992px) {
          display: none;
          order: 2;
        }
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
    }
  }
</style>