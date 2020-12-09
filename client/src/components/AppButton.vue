<template>
 <!-- BUTTON TYPES: more, enroll, show-all, schedule, send-story, sign-up -->
  <button 
    class="btn" 
    :class="`btn__${type}`" 
    :disabled="disabled"
    >
      <slot></slot>
  </button>
</template>

<script>

export default {
  name: "AppButon",
  props: {
      type: String,
      disabled: Boolean
  }
};
</script>

<style scoped lang="scss">
	.btn {
		display: inline-block;
		padding: .5rem 1rem;
		background-color: transparent;
		font-weight: bold;
		border: none;
		cursor: pointer;
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
		&__sign-up, &__read-more, &__enroll {
			color: var(--white);
			background-color: var(--color-primary);
			&:hover,
			&:focus,
			&:active {
					background-color: var(--white);
					color: var(--color-primary);
			}
		}
	}
</style>
