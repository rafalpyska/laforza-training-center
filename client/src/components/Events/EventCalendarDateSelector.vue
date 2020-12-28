<template>
  <div class="event-calendar-date-selector">
    <span @click="selectPrevious">﹤</span>
    <span @click="selectCurrent">Today</span>
    <span @click="selectNext">﹥</span>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'EventCalendarDateSelector',

  props: {
    currentDate: {
      type: String,
      required: true
    },
    selectedDate: {
      type: Object,
      required: true
    }
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, 'month');
      this.$emit('dateSelected', newSelectedDate);
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.$emit('dateSelected', newSelectedDate);
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, 'month');
      this.$emit('dateSelected', newSelectedDate);
    }
  }
};
</script>

<style scoped lang="scss">
.event-calendar-date-selector {
  display: flex;
  justify-content: space-between;
  width: 80px;
  color: var(--grey-800);
  & > * {
    cursor: pointer;
    user-select: none;
  }
}
</style>
