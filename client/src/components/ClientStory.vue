<template>
  <div class="client-story">
    <div class="client-story__content">
      <blockquote cite="client-id">
        <p class="client-story__paragraph">
          {{ story.opinion }}
        </p>
      </blockquote>
      <div class="client-story__quote-symbol" aria-hidden="true">
        <span><i class="fas fa-quote-right"></i></span>
      </div>
    </div>
    <figure class="story__user">
      <img
        src="https://dummyimage.com/40x40"
        class="story__user-profile-image"
        alt="user placeholder"
      />
      <figcaption class="story__user-name">
        {{ story.author.username }}
        <span class="story__user-name-description">Happy client</span>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: "ClientStory",
  props: {
    story: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.client-story {
  margin-right: 2rem;
  &__paragraph {
    color: var(--client-story-text-color);
  }
  &__quote-symbol {
    position: absolute;
    top: -2rem;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--color-primary);
    padding: 0.5rem;
    font-size: 1.5rem;
  }
  &__content {
    font-family: "Play", sans-serif;
    position: relative;
    // temporary width
    padding: 3rem 2rem;
    background-color: var(--client-story-bgc);
    font-size: 0.8rem;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 3rem;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-top-color: var(--client-story-bgc);
      border-bottom: 0;
      border-left: 0;
      margin-left: -10px;
      margin-bottom: -20px;
    }
  }
}
.story__user {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.6rem;
  &-profile-image {
    margin-right: 1.5rem;
  }
  &-name {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    &-description {
      font-weight: normal;
      font-size: 0.75rem;
    }
  }
}
</style>
