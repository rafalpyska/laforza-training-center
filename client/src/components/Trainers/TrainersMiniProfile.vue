<template>
  <div class="trainer-mini-profile">
    <figure class="trainer-mini-profile__info">
      <img
        :src="`${trainer.avatar.url}`"
        alt=""
        class="trainer-mini-profile__info-image image"
      />
      <figcaption class="trainer-mini-profile__info-description">
        <p class="trainer-mini-profile__info-description-username">
          {{ trainer.username }}
        </p>
        <p
          class="trainer-mini-profile__info-description-class"
          v-for="course in trainer.classes"
          :key="course.id"
        >
          {{ course.name }}
        </p>
      </figcaption>
    </figure>
    <div class="trainer-mini-profile__socials">
      <a
        v-for="social in trainer.socials"
        :key="social.id"
        :href="`${social.facebook}`"
        class="href trainer-mini-profile__socials-link"
      >
        <i
          class="fab fa-facebook-f trainer-mini-profile__socials-icon"
          aria-hidden="true"
        >
          <span class="visuallyhidden">Facebook</span>
        </i>
      </a>
      <a
        v-for="social in trainer.socials"
        :key="social.id"
        :href="`${social.twitter}`"
        class="href trainer-mini-profile__socials-link"
      >
        <i
          class="fab fa-twitter trainer-mini-profile__socials-icon"
          aria-hidden="true"
        >
          <span class="visuallyhidden">Twitter</span>
        </i>
      </a>
      <a
        v-for="social in trainer.socials"
        :key="social.id"
        :href="`${social.instagram}`"
        class="href trainer-mini-profile__socials-link"
      >
        <i
          class="fab fa-instagram trainer-mini-profile__socials-icon"
          aria-hidden="true"
        >
          <span class="visuallyhidden">Instagram</span>
        </i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrainerMiniProfile',
  components: {},
  props: {
    trainer: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.trainer-mini-profile {
  &__info {
    background-color: var(--trainers-mini-profile-info-bgc);
    &-image {
      height: 10rem;
      object-position: 50% 15%;
    }
    &-description {
      padding: 1rem 0;
      text-align: center;
      &-class {
        color: var(--color-primary);
      }
    }
  }
  &__socials {
    background-color: var(--trainers-mini-profile-socials-bgc);
    padding: 0.5rem 0;
    text-align: center;
    &-link {
      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }
    }
    &-icon {
      color: white;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
