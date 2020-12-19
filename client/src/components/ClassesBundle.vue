<template>
  <div class="courses__bundle">
		<h2 class="courses__bundle-name">{{ bundle.name }}</h2>
		<div class="courses__bundle-price-container">
			<p class="courses__bundle-price">{{ bundle.price }} $</p>
			<p class="courses__bundle-reccuring-payment">per month</p>
		</div>
		<AppDivider />
		<ul class="courses__bundle-list">
			<li class="courses__bundle-item" v-for="course in bundle.bundleList" :key="course.id">{{ course.name }}</li>
		</ul>
		<AppButton type="sign-up">
			Sign Up
		</AppButton>
  </div>
</template>

<script>
import AppButton from '../components/AppButton'
import AppDivider from '../components/AppDivider'

export default {
	name: "ClassesBundle",
	components: {
		AppButton,
		AppDivider
	},
	props: {
    bundle: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss">
	.courses {
	&__bundle {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--courses-bundle-bgc);
		padding: 3.5rem 2.5rem;
		&:hover {
			background-color: var(--color-primary);
		}
		&:hover > .btn {
			background-color: var(--white);
			color: var(--color-primary);
		}
		&-name {
			text-transform: uppercase;
		}
		&-price {
			font-weight: bold;
			font-size: 2em;
			&-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 7rem;
				height: 7rem;
				margin: 1rem 0;
				border: 4px solid var(--color-primary);
				border-radius: 50%;
			}
		}
		&-list {
			flex: 1;
			text-align: center;
			margin-bottom: 2rem;
		}
		&-item {
			text-transform: uppercase;
			padding: .35rem;
		}
	}
}
</style>