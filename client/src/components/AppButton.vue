<template>
  <!-- BUTTON TYPES: more, enroll, show-all, schedule, send-story, sign-up -->
  <component
    :is="type"
    :to="to"
    class="btn"
    :class="`btn__${btnType}`"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AppButon',
  props: {
    to: {
      required: false
    },
    btnType: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    type() {
      if (this.to) {
        return 'router-link';
      }
      return 'button';
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: transparent;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.1s all linear;
  &__more {
    color: black;
    border: 1px solid black;
    &:hover,
    &:focus,
    &:active {
      background-color: black;
      color: var(--white);
    }
  }
  &__sign-up,
  &__read-more,
  &__enroll,
  &__schedule,
  &__load-more {
    color: var(--white);
    background-color: var(--color-primary);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--white);
      color: var(--color-primary);
    }
    &:hover > *,
    &:focus > *,
    &:active > * {
      color: var(--color-primary);
    }
  }
  &__send-story {
    color: white;
    border: 1px solid white;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--white);
      color: black;
    }
  }
}
</style>
