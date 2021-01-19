<template>
  <div class="event-calendar__date-indicator">{{ selectedMonth }}</div>
</template>

<script>
export default {
  name: "EventsCalendarDateIndicator",
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    }
  }
};
</script>

<style scoped lang="scss">
.event-calendar__date-indicator {
  grid-area: date;
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
  text-transform: uppercase;
}
</style>
