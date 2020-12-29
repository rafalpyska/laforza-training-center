<template>
  <div class="schedule__list"></div>
</template>

<script>
export default {
  name: 'ScheduleList',
  props: {
    trainers: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
