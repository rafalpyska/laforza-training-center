<template>
  <div class="schedule__list">
    <!-- <ol class="schedule__header">
      <li v-for="(item, index) in scheduleHeader" :key="index" class="schedule__item">{{ item }}</li>
    </ol>
    
    <div>
      <div class="schedule__content" v-for="trainer in trainers" :key="trainer.id">
        {{trainer.username}} 
        <template v-for="item in trainer.schedule" :key="item.id">
          <span>{{ item.Monday }}</span>
          <span>{{ item.Tuesday }}</span>
          <span>{{ item.Wednesday }}</span>
          <span>{{ item.Thursday }}</span>
          <span>{{ item.Friday }}</span>
        </template>
      </div>
    </div> -->
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
    grid-auto-rows: minmax(5rem, 1fr);
    background-color: var(--color-primary);
    text-align: center;
    text-transform: uppercase;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    @media (max-width: 992px) {
      display: none;
      order: 2;
    }
  }
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(5rem, 1fr);
    align-items: center;
    justify-items: center;
    padding: 1rem;
    background-color: var(--events-calendar-odd-event-cell-bgc);
    color: black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
}
</style>
