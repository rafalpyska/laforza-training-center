<template>
  <!-- BUTTON TYPES: more, enroll, show-all, schedule, send-story, sign-up -->
  <component
    :is="type"
    :to="to"
    class="btn"
    :class="`btn--${btnType}`"
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
      required: false,
    },
    btnType: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ['addCourseToCart()'],
  computed: {
    type() {
      if (this.to) {
        return 'router-link';
      }
      return 'button';
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  min-width: 3.75rem;
  padding: 0.35rem 1rem;
  background-color: transparent;
  text-align: center;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.1s all linear;
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
  &--more {
    color: black;
    border: 1px solid black;
    &:hover,
    &:focus,
    &:active {
      background-color: black;
      color: var(--white);
    }
  }
  &--sign-up,
  &--read-more,
  &--enroll,
  &--schedule,
  &--load-more {
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
    &:disabled {
      background-color: var(--btn-disabled);
      &:hover {
        background-color: var(--btn-disabled);
      }
    }
  }
  &--send-story {
    color: white;
    border: 1px solid white;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--white);
      color: black;
    }
  }
  &--slider {
    border: 1px solid;
    padding: 0.35rem;
    min-width: 2.25rem;
    &-dark {
      border-color: black;
      &:hover {
        background-color: black;
        border-color: white;
      }
      & > i {
        color: black;
      }
      &:hover > i {
        color: white;
      }
    }
    &-light {
      border-color: white;
      &:hover {
        background-color: white;
        border-color: black;
      }
      & > i {
        color: white;
      }
      &:hover > i {
        color: white;
      }
    }
  }
}
</style>
