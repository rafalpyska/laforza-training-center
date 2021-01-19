<template>
  <li
    class="events-calendar-day"
    :class="{
      'events-calendar-day--not-current': !day.isCurrentMonth,
      'events-calendar-day--today': isToday
    }"
    ref="day"
  >
    <span
      class="events-calendar__label-day"
      :class="{
        'events-calendar__label-day-today': isToday
      }"
    >
      {{ label }}
    </span>
    <template v-for="event in events" :key="event.id">
      <span
        class="events-calendar__label-event"
        v-if="event.startDate == day.date"
        >{{ event.title }}, start:
        {{
          event.startHour
            .split(":")
            .splice(0, 2)
            .join(":")
        }}
      </span>
      <EventsInfo
        v-if="event.startDate == day.date"
        :event="event"
        :offsetLeft="elementWidth"
      />
    </template>
  </li>
</template>

<script>
import dayjs from "dayjs";
import EventsInfo from "./EventsInfo";
export default {
  name: "EventsCalendarMonthDayItem",
  components: {
    EventsInfo
  },
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
      type: Array,
      required: true
    }
  },
  data() {
    return {
      elementWidth: 0
    };
  },
  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    }
  }
};
</script>

<style scoped lang="scss">
.events-calendar {
  &-day {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--events-calendar-odd-event-cell-bgc);
    color: black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
    @media (max-width: 992px) {
      align-items: flex-start;
    }
    &--not-current {
      background-color: var(--events-calendar-even-event-cell-bgc);
      color: var(--grey-300);
    }
    & .events__info--visible {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
    }
  }
  &__label {
    &-day {
      &-today {
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
