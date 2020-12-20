<template>
  <div class="action-strip">
    <div class="container">
      <div class="action-strip-wrapper">
        <div class="action-strip__first-column">
          <slot name="first-column"></slot>
        </div>
        <div class="action-strip__last-column">
          <slot name="last-column"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionStrip'
};
</script>

<style scoped lang="scss">
.action-strip {
  background-color: var(--color-primary);
  padding: 0.5rem 0;
  text-transform: uppercase;
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  &__first-column {
    grid-column: 1/3;
  }
  &__last-column {
    justify-self: end;
  }
}
</style>
