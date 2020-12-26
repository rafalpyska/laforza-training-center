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
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--events-calendar-border);
        padding: 1rem;
      }
    }
  }
</style>