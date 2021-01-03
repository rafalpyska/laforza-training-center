<template>
  <div class="select-trainer__container">
    <label class="bold" for="select-trainer">Select class:</label>
    <select
      class="select-trainer"
      v-model="selectedClass"
      @change="emitSelectedClass"
      name="select-trainer"
    >
      <option value="" selected disabled>Choose</option>
      <option>{{ course.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectClass',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedClass: ''
    };
  },
  methods: {
    emitSelectedTrainer() {
      this.$emit('selectedClass', this.selectedClass);
    }
  }
};
</script>

<style scoped lang="scss">
.select-trainer {
  padding: 0.5rem;
  background-color: var(--section-subtitle);
  color: white;
  width: 50%;
  &__container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
}
</style>
