<template>
  <div class="events-calendar">
    <event-calendar-weekdays/>

    <ol class="events-calendar__days">
      <event-calendar-month-day-item
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
        :events="events"
      />
    </ol>

    <div class="events-calendar-footer">
      <event-calendar-previous-month
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
      <event-calendar-date-indicator
        :selected-date="selectedDate"
      />
      <event-calendar-next-month
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import EventCalendarMonthDayItem from "./EventCalendarMonthDayItem";
import EventCalendarDateIndicator from "./EventCalendarDateIndicator";
import EventCalendarPreviousMonth from "./EventCalendarPreviousMonth";
import EventCalendarNextMonth from "./EventCalendarNextMonth";
import EventCalendarWeekdays from "./EventCalendarWeekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);


export default {
  name: 'EventsCalendar',
  components: {
    EventCalendarMonthDayItem,
    EventCalendarDateIndicator,
    // EventCalendarDateSelector,
    EventCalendarWeekdays,
    EventCalendarNextMonth,
    EventCalendarPreviousMonth
  },
  mixins: [fetchData],
  data() {
    return {
      loading: false,
      error: '',
      events: [],
      selectedDate: dayjs()
    };
  },
  computed: {
    days() {
      return [
      ...this.previousMonthDays,
      ...this.currentMonthDays,
      ...this.nextMonthDays
      ]
    },
    today() {
      return dayjs().format("YYYY-MM-DD")
    }, 
    month() {
      return Number(this.selectedDate.format("M"));
    },
    year() {
      return Number(this.selectedDate.format("YYYY"));
    },
    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentMonth: true
        };
      });
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );
      // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMondayDayOfMonth + index}`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false
          };
        }
      );
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false
        };
      });
    }
  },
  methods: {
    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    },
    getWeekday(date) {
      return dayjs(date).weekday();
    }
  },
  async created() {
    if (this.events && this.events.length > 0) return;
    // TODO: Fetching and caching data
    await this.http('http://localhost:1337/events')
      .then(data => {
        this.events = data;
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
      });
  }
};
</script>

<style scoped lang="scss">
  .events-calendar {
    font-family: 'Play', sans-serif;
    position: relative;
    background-color: var(--grey-200);
    border: solid 1px var(--grey-300);
    &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(5rem, 1fr);
  }
    &-footer {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-areas: "previous . date date date . next";
      align-items: center;
      padding: 1rem;
      text-align: center;
      background-color: var(--events-calendar-footer);
    }
  }

  .day-of-week {
    color: var(--grey-800);
    font-size: 18px;
    background-color: var(--color-primary);
  }

  
</style>