<template>
    <hr role="separator" aria-orientation="horizontal" class="divider">
</template>

<script>
export default {
  name: 'AppDivider'
}
</script>

<style lang="scss">
  .divider {
			// border-color: var(--divider-color);
			display: block;
			width: 3rem;
			height: 0;
			transition: inherit;
			border-top: 1px solid var(--divider-color);
			margin: 1rem 0;
    }
</style>
