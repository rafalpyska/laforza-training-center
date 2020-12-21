<template>
  <div class="trainer">
    <div class="trainer__image-container">
      <img
        src="../assets/images/placeholder.png"
        class="image"
        alt="placeholder"
      />
    </div>
    <div class="trainer__info">
      <h3 class="trainer__heading">
        {{ trainer.username }} 
        <span v-for="course in trainer.classes" :key="course.id" class="trainer__class">{{ course.name }}</span>
      </h3>
      <p v-for="info in trainer.shortInfo" :key="info.id" class="trainer__description">
        {{ info.shortInfo }}
      </p>
      <div class="trainer__socials">
        <a v-for="social in trainer.socials" :key="social.id" :href="`${social.facebook}`" class="href trainer__socials-link">
          <i class="fab fa-facebook-f trainer__socials-icon" aria-hidden="true">
            <span class="visuallyhidden">Facebook</span>
          </i>
        </a>
        <a v-for="social in trainer.socials" :key="social.id" :href="`${social.twitter}`" class="href trainer__socials-link">
          <i class="fab fa-twitter trainer__socials-icon" aria-hidden="true">
            <span class="visuallyhidden">Twitter</span>
          </i>
        </a>
        <a v-for="social in trainer.socials" :key="social.id" :href="`${social.instagram}`" class="href trainer__socials-link">
          <i class="fab fa-instagram trainer__socials-icon" aria-hidden="true">
            <span class="visuallyhidden">Instagram</span>
          </i>
        </a>
      </div>
    </div>
    <div class="trainer__general-info">
      <h3 class="trainer__heading">Schedule</h3>
      <span class="visuallyhidden">Facebook</span>
      <ul class="trainer__schedule-list">
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >Gain confidence
        </li>
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >Strength development
        </li>
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >Development speed
        </li>
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >Increase dexterity
        </li>
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >Increase stamina
        </li>
        <li class="trainer__schedule-item">
          <i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i
          >An athletic body
        </li>
      </ul>
      <AppButton type="schedule">
        Enroll
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton';
export default {
  name: 'TrainersList',
  components: {
    AppButton
  },
  props: {
    trainer: {
      type: Object,
      required: true
    }
  },
  computed: {
  // TODO: ...mapState (spread operator doesn't work, despite installing babel plugin) / add spinner when data is loading
    loading() {
      return this.$store.state.loading;
    },
    courses() {
      return this.$store.state.classes;
    }
  },
  mounted() {
    this.$store.dispatch('fetchClasses');
  }
};
</script>
<style scoped lang="scss">
.trainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  // grid-auto-rows: minmax(10rem, 20rem);
  gap: 2rem;
  font-size: 0.85rem;
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
  &__class {
    margin-left: 0.35rem;
    color: var(--color-primary);
    font-size: 0.85rem;
  }
  &__description {
    margin: 1rem 0;
  }
  &__socials {
    margin-top: 1.25rem;
    font-size: 1.25rem;
    &-link {
      color: var(--class-social-icon-color);
      &:not(:last-child) {
        margin-right: 1rem;
      }
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  &__general-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid var(--class-general-info-border);
    font-size: 0.75rem;
  }
  &__schedule {
    &-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &-item {
      margin: 0.35rem 0;
      &:last-child {
        margin-bottom: 1rem;
      }
    }
    &-icon {
      margin-right: 0.35rem;
    }
  }
}
</style>
