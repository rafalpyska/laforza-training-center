<template>
  <div class="select-trainer__container">
    <label class="bold" for="select-trainer">Select trainer:</label>
    <select
      class="select-trainer"
      v-model="selectedTrainer"
      @change="emitSelectedTrainer"
      name="select-trainer"
    >
      <option value="" selected disabled>Choose</option>
      <option v-for="trainer in course.trainers" :key="trainer.id">
        {{ trainer.username }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectTrainer',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedTrainer: '',
    };
  },
  methods: {
    emitSelectedTrainer() {
      this.$emit('selectedTrainer', this.selectedTrainer);
    },
  },
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
