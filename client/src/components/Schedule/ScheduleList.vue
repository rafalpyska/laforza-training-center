<template>
  <div class="schedule__list">
    <ol class="schedule__header">
      <li v-for="(item, index) in scheduleHeader" :key="index" class="schedule__item bold">{{ item }}</li>
    </ol>
    
    <div>
      <ul class="schedule__content-list">
        <template v-for="trainer in trainers" :key="trainer.id">
          <li class="schedule__content-item schedule__content-item--trainer bold">{{trainer.username}}</li>
          <template v-for="item in trainer.schedule" :key="item.id">
            <li class="schedule__content-item"><span class="schedule__content-item--day">Monday</span>{{ item.Monday }}</li>
            <li class="schedule__content-item"><span class="schedule__content-item--day">Tuesday</span>{{ item.Tuesday }}</li>
            <li class="schedule__content-item"><span class="schedule__content-item--day">Wednesday</span>{{ item.Wednesday }}</li>
            <li class="schedule__content-item"><span class="schedule__content-item--day">Thursday</span>{{ item.Thursday }}</li>
            <li class="schedule__content-item"><span class="schedule__content-item--day">Friday</span>{{ item.Friday }}</li>
          </template>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleList',
  props: {
    trainers: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      scheduleHeader: [
        'Trainer',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.schedule {
  &__header {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(3rem, 1fr);
    background-color: var(--color-primary);
    justify-items: center;
    align-items: center;
    padding: 1rem;;
    text-transform: uppercase;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    @media (max-width: 992px) {
      display: none;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  &__content {
    &-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: minmax(3rem, 1fr);
      background-color: var(--events-calendar-odd-event-cell-bgc);
      color: black;
    }
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 1rem;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      @media (max-width: 992px) {
        grid-column: 1/-1;
      }
      &--trainer {
        @media (max-width: 992px) {
          background-color: var(--color-primary);
          text-transform: uppercase;
          font-weight: bold;
        }
      }
      &--day {
        display: none;
        @media (max-width: 992px) {
          display: inline;
          font-style: italic;
        }
      }
    }
  }
}
</style>
