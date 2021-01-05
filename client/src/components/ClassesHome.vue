<template>
  <div class="section__course">
    <div
      :class="
        `course course__info course__info-${this.course.name.toLowerCase()}`
      "
    >
      <h2 class="course__heading">
        <i :class="`course__icon ${course.icon}`" aria-hidden="true"></i>
        {{ course.name }}
      </h2>
      <p class="course__description">{{ course.summary }}</p>
      <AppButton to="/classes" btnType="more">
        More
      </AppButton>
    </div>
    <div class="course__image-container">
      <ImageItem
        :source="`${course.image.url}`"
        :alt="`${course.image.alternativeText}`"
      />
    </div>
    <div class="course course__hours">
      <h2 class="course__heading">Course days</h2>
      <p class="course__description">{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton';
import ImageItem from './ImageItem';
export default {
  name: 'ClassesHome',
  components: {
    AppButton,
    ImageItem
  },
  props: {
    course: {
      type: Object,
      required: true
    },
    idx: {
      type: Number
    }
  },
  data() {
    return {
      url: process.env.VUE_APP_API_URL
    };
  }
};
</script>

<style lang="scss">
.section {
  &__course {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: auto;
    font-size: 0.8rem;
    @media (max-width: 992px) {
      margin-bottom: 3rem;
    }
  }
}
.course {
  padding: 3.5rem 2.5rem;
  &__info {
    color: black;
    background-color: var(--white);
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
    &-boxing {
      order: 3;
      @media (max-width: 992px) {
        order: 0;
      }
    }
    &-mma {
      order: 2;
      @media (max-width: 992px) {
        order: 0;
      }
    }
  }
  &__heading {
    font-family: 'Play', sans-serif;
    font-size: 1.75em;
    text-transform: uppercase;
  }
  &__icon {
    color: var(--color-primary);
  }
  &__description {
    font-size: 0.9em;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  &__hours {
    background-color: var(--color-primary);
  }
}
</style>
