<template>
  <div id="modal-open" :class="{ show, 'modal-wrapper': true }">
    <div class="modal">
      <header class="modal__header">
        <span
          @click="show = false"
          title="Close"
          class="modal-close"
          aria-label="close"
        >
          <i class="fas fa-times"></i>
        </span>
        <slot name="header">
          <i class="far fa-check-circle modal-success-icon"></i>
          <h2 class="modal__heading">Great!</h2>
        </slot>
      </header>
      <div class="modal__body">
        <slot name="body">
          You have successfully added '{{ title }}' course, with
          {{ subtitle }}, to your cart! Check our other courses!
        </slot>
      </div>
      <footer class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 22rem;
  background: #ffffff;
  border-radius: 0.25rem;
  font-family: "Raleway", sans-serif;
  font-size: 0.85rem;
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em;
    color: white;
    background-color: var(--color-primary);
  }
  &__body {
    color: white;
    background-color: var(--footer-copyrights-bgc);
    padding: 2em;
  }
  &-success-icon {
    font-size: 3rem;
  }

  &__heading {
    font-family: "Play", sans-serif;
  }
  &-wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 6;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
  }
}

.show {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
}
</style>
