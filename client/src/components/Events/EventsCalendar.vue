<template>
  <div class="events-calendar__wrapper">
    <BaseLoadingSpinner v-if="loading" />

    <div v-else class="events-calendar">
      <EventsCalendarWeekdays />

      <ol class="events-calendar__days-list">
        <EventsCalendarMonthDayItem
          v-for="day in days"
          :key="day.date"
          :day="day"
          :is-today="day.date === today"
          :isSelected="selectedDay"
          @click.native="handleEvent(day)"
          :events="events"
        />
      </ol>

      <div class="events-calendar-footer">
        <EventsCalendarPreviousMonth
          :selected-date="selectedDate"
          @dateSelected="selectDate"
        />
        <EventsCalendarDateIndicator :selected-date="selectedDate" />
        <EventsCalendarNextMonth
          :selected-date="selectedDate"
          @dateSelected="selectDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import EventsCalendarMonthDayItem from "./EventsCalendarMonthDayItem";
import EventsCalendarDateIndicator from "./EventsCalendarDateIndicator";
import EventsCalendarPreviousMonth from "./EventsCalendarPreviousMonth";
import EventsCalendarNextMonth from "./EventsCalendarNextMonth";
import EventsCalendarWeekdays from "./EventsCalendarWeekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: "EventsCalendar",
  components: {
    EventsCalendarMonthDayItem,
    EventsCalendarDateIndicator,
    EventsCalendarWeekdays,
    EventsCalendarNextMonth,
    EventsCalendarPreviousMonth
  },
  mixins: [fetchData],
  data() {
    return {
      // selected: null,
      selectedDay: null,
      loading: false,
      error: "",
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
      ];
    },
    today() {
      return dayjs().format("YYYY-MM-DD");
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
    },
    handleEvent(day) {
      if(this.selectedDay != day){
        this.selectedDay = day
      } else {
        this.selectedDay = ''
      }
    }
  },
  async created() {
    if (this.events && this.events.length > 0) return;
    // TODO: Fetching and caching data
    await this.http(`${process.env.VUE_APP_API_URL}/events`)
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
  display: flex;
  flex-direction: column;
  font-family: "Play", sans-serif;
  background-color: var(--grey-200);
  border-radius: 55px;
  border: solid 1px var(--grey-300);
  &__days-list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(5rem, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      order: 3;
    }
  }
  &-footer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "previous . date date date . next";
    align-items: center;
    padding: 1rem;
    text-align: center;
    background-color: var(--events-calendar-footer);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}

.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background-color: var(--color-primary);
}
</style>
