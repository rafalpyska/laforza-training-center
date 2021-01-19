<template>
  <span class="event-calendar__next-month" @click="selectNext">
    <i class="fas fa-arrow-circle-right event-calendar__next-icon"></i>
  </span>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "EventsCalendarNextMonth",
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    }
  }
};
</script>

<style scoped lang="scss">
.event-calendar__next {
  &-month {
    grid-area: next;
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
