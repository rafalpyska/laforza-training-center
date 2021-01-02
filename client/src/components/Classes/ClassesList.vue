<template>
  <div class="class">
    <div class="class__image-container">
      <ImageItem
        :source="`http://localhost:1337${course.image.url}`"
        :alt="`${course.image.alternativeText}`"
      />
    </div>
    <div class="class__info">
      <h3 class="class__heading">
        {{ course.name }}
        <template v-for="(trainer, index) in course.trainers" :key="trainer.id">
          <span class="class__trainer"
            >{{ trainer.username }}
            <template
              class="color-primary"
              v-if="index !== course.trainers.length - 1"
            >
              /
            </template>
          </span>
        </template>
      </h3>
      <p class="class__description">{{ course.description }}</p>
      <div class="select-trainer__container">
        <label class="bold" for="select-trainer">Select trainer:</label>
        <select class="select-trainer" v-model="selectedTrainer" name="select-trainer" id="">
          <option value="" selected disabled>Choose</option>
          <option v-for="trainer in course.trainers" :key="trainer.id" selected>
            {{ trainer.username }}
          </option>
        </select>
      </div>
      <div class="class__description-controls">
        <AppButton btnType="enroll" @click="addToCart()" :disabled="selectedTrainer === ''">
          Enroll
        </AppButton>
        <span class="class__description-price">
          ${{ course.price }} / month
        </span>
      </div>
    </div>
    <div class="class__general-info">
      <div class="class__complexity">
        <h3 class="class__general-info-heading">The complexity</h3>
        <ul class="class__complexity-list">
          <classes-complexity-indicator
            :rating="`${parseInt(course.complexity, 10)}`"
            :max="5"
          />
        </ul>
      </div>
      <div class="class__persons-allowed">
        <h3 class="class__general-info-heading">Number of persons</h3>
        <div class="class__persons-allowed-number">
          <p>{{ course.maxGroupSize }}</p>
        </div>
      </div>
      <div class="class__occupation">
        <h3 class="class__general-info-heading">The Occupation</h3>
        <div class="class__occupation-time">
          <p>{{ course.duration }} min</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton';
import ImageItem from '../ImageItem';
import ClassesComplexityIndicator from './ClassesComplexityIndicator';

export default {
  name: 'ClassesList',
  components: {
    AppButton,
    ImageItem,
    ClassesComplexityIndicator
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedTrainer: ''
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addCourseToCart', {
        course: this.course,
        quantity: 1,
        trainer: this.selectedTrainer
      })
    }
  }
}
</script>
<style scoped lang="scss">
.class {
  display: grid;
  grid-template-columns: repeat(2, 1fr) max-content;
  gap: 2rem;
  font-size: 0.85rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  &__img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  &__info {
    color: white;
  }
  &__heading {
    text-transform: uppercase;
  }
  &__trainer {
    color: var(--color-primary);
    font-size: 0.85rem;
    &:first-child {
      margin-left: 0.35rem;
    }
  }
  &__description {
    margin: 1rem 0;
    &-price {
      font-family: 'Play', sans-serif;
      font-size: 1rem;
      margin-left: 0.75rem;
    }
  }
  &__general-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    margin: 2rem 0;
    padding: 2rem;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid var(--class-general-info-border);
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
    &-heading {
      text-transform: uppercase;
      font-weight: normal;
      margin: 0.2rem 0;
    }
  }
  &__complexity {
    &-list {
      display: flex;
      justify-content: center;
      font-size: 1rem;
    }
    &-item {
      color: var(--color-primary);
    }
  }
  &__persons-allowed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: var(--color-primary);
      font-size: 1rem;
    }
  }
  &__occupation {
    &-time {
      background-color: black;
      padding: 0.25rem;
      font-size: 1rem;
    }
  }
}
.select-trainer {
  padding: .5rem;
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
