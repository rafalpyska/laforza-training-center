<template>
  <li
    class="events-calendar-day"
    :class="{
      'events-calendar-day--not-current': !day.isCurrentMonth,
      'events-calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
    <template v-for="event in events" :key="event.id">
      <span
        class="events-calendar__label-event"
        v-if="event.startDate == day.date"
        >{{ event.title }}, start:
        {{
          event.startHour
            .split(':')
            .splice(0, 2)
            .join(':')
        }}</span
      >
    </template>
  </li>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'EventsCalendarMonthDayItem',

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    },
    events: {
      type: Object,
      required: true
    }
  },
  computed: {
    label() {
      return dayjs(this.day.date).format('D');
    }
  }
};
</script>

<style scoped lang="scss">
.events-calendar {
  &-day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
    background-color: var(--events-calendar-odd-event-cell-bgc);
    color: black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    @media (max-width: 992px) {
      align-items: flex-start;
    }
    &--not-current {
      background-color: var(--events-calendar-even-event-cell-bgc);
      color: var(--grey-300);
    }
    &--today {
      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        color: #fff;
        border-radius: 50%;
        background-color: var(--color-primary);
      }
    }
  }
  &__label {
    &-event {
      color: var(--color-primary);
      text-align: center;
      @media (max-width: 992px) {
        color: white;
        margin-top: 0.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        background-color: rgba(248, 49, 49, 1);
      }
    }
  }
}
</style>
