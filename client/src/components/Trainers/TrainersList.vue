<template>
  <div class="trainer">
    <div class="trainer__image-container">
      <ImageItem
        :source="`${trainer.avatar.url}`"
        :alt="`${trainer.avatar.alternativeText}`"
      />
    </div>
    <div class="trainer__info">
      <h3 class="trainer__heading">
        {{ trainer.username }}
        <span
          v-for="course in trainer.classes"
          :key="course.id"
          class="trainer__class"
          >{{ course.name }}</span
        >
      </h3>
      <p
        v-for="info in trainer.shortInfo"
        :key="info.id"
        class="trainer__description"
      >
        {{ info.shortInfo }}
      </p>
      <div class="trainer__socials">
        <a
          v-for="social in trainer.socialMedia"
          :key="social.id"
          :href="`${social.url}`"
          target="_blank"
          class="trainer__socials-link"
        >
          <i
            v-if="social.name === 'Facebook'"
            class="fab fa-facebook-f trainer__socials-link"
            aria-hidden="true"
          >
            <span class="visuallyhidden">{{ social.name }}</span>
          </i>
          <i
            v-if="social.name === 'Twitter'"
            class="fab fa-twitter trainer__socials-link"
            aria-hidden="true"
          >
            <span class="visuallyhidden">{{ social.name }}</span>
          </i>
          <i
            v-if="social.name === 'Instagram'"
            class="fab fa-instagram trainer__socials-link"
            aria-hidden="true"
          >
            <span class="visuallyhidden">{{ social.name }}</span>
          </i>
        </a>
      </div>
    </div>
    <div class="trainer__general-info">
      <h3 class="trainer__heading">Schedule</h3>
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
      <BaseButton btnType="schedule" @click.native="addToCart()">
        Enroll
      </BaseButton>
      <!-- <BaseModal
        ref="popup"
        :title="trainer.classes[0].name"
        :subtitle="trainer.username"
      >
        <template v-slot:body>
          <p>
            You have successfully added
            <span class="bold text-uppercase color-primary"
              >'{{ trainer.classes[0].name }}'</span
            >
            course with
            <span class="bold text-uppercase color-primary">{{
              trainer.username
            }}</span>
            to your cart!
          </p>
          <p>Check our other bundles and courses!</p>
        </template>
      </BaseModal> -->
    </div>
  </div>
</template>

<script>
import ImageItem from '../ImageItem';

export default {
  name: 'TrainersList',
  components: {
    ImageItem,
  },
  props: {
    trainer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addCourseToCart', {
        id:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
        course: this.trainer.classes[0],
        quantity: 1,
        trainer: this.trainer.username,
      });
      this.$store.commit('ADD_CART_TO_LOCAL_STORAGE');
      // this.$refs.popup.show = !this.$refs.popup.show;
    },
  },
};
</script>
<style scoped lang="scss">
.trainer {
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
    padding: 2rem;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid var(--class-general-info-border);
    font-size: 0.75rem;
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
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
