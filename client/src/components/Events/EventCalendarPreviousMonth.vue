<template>
  <span class="event-calendar__previous-month" @click="selectPrevious">
    <i class="fas fa-arrow-circle-left event-calendar__previous-icon"></i>
  </span>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'EventCalendarPreviousMonth',

  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, 'month');
      this.$emit('dateSelected', newSelectedDate);
    }
  }
};
</script>

<style scoped lang="scss">
.event-calendar__previous {
  &-month {
    grid-area: previous;
    cursor: pointer;
    &:hover {
      color: var(--color-primary);
    }
  }
  &-icon {
    font-size: 1.25rem;
  }
}
</style>
