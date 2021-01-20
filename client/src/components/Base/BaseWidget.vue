<template>
  <article class="widget">
    <h3 class="widget__heading">
      <slot name="heading">Widget</slot>
    </h3>
    <div class="widget__content">
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "BaseWidget"
}
</script>

<style scoped lang="scss">
  .widget {
    &__heading {
      padding: .5rem 1rem;
      text-transform: uppercase;
      background-color: var(--widget-heading-bgc);
    }
    &__content {
      display: flex;
      flex-direction: column;
      padding: .5rem 1rem;
      background-color: var(--widget-content-bgc);
    }
  }
</style>