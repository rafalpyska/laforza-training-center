<template>
  <div class="trainer-mini-profile">
    <figure class="trainer-mini-profile__info">
      <img src="../assets/images/480x425.png" alt="" class="trainer-mini-profile__info-image">
      <figcaption class="trainer-mini-profile__info-description">
        <p>{{ trainer.username }}</p>
        <p v-for="course in trainer.classes" :key="course.id">{{ course.name }}</p>
      </figcaption>
    </figure>
    <div class="trainer-mini-profile__socials">
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
    width: 10rem;
    &__info {
      background-color: var(--trainers-mini-profile-info-bgc);
      &-description {
        padding: 2rem 0;
        text-align: center;
      }
    }
    &__socials {
      background-color: var(--trainers-mini-profile-socials-bgc);
      text-align: center;
    }
  }
</style>
