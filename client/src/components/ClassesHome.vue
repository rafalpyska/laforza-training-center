<template>
	<div class="section__course">
		<div :class="`course course__info course__info-${this.course.name.toLowerCase()}`">
			<h2 class="course__heading">
				<i :class="`course__icon ${this.course.icon}`" aria-hidden="true"></i>
				{{this.course.name}}
				</h2>
			<p class="course__description">{{this.course.summary}}</p>
			<!-- <a href="#" class="btn btn__more">More</a> -->
			<AppButton type="more">
				More
			</AppButton>
		</div>
		<div class="course__image-container">
			<img :src="require('../assets/images/home/' + this.course.image)" class="image" alt="boxing">
		</div>
		<div class="course course__hours">
			<h2 class="course__heading">Course days</h2>
			<p class="course__description">{{this.course.description}}</p>
		</div>
	</div>
</template>

<script>
import AppButton from './AppButton'
export default {
	name: "ClassesHome",
	components: {
		AppButton
	},
	props: {
		course: {
				type: Object,
				required: true
		}
	}
}
</script>

<style lang="scss">
	.section {
			&__course {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-auto-rows: auto;
					font-size: .8rem;
			}
	}
	.course {
		padding: 3.5rem 2.5rem;
		&__info {
			color: black;
			background-color: var(--white);
			&-boxing {
				order: 3;
			}
			&-mma {
				order: 2;
			}
		}
		&__heading {
			font-family: 'Play', sans-serif;
			font-size: 1.75em;
			text-transform: uppercase;
		}
		&__icon {
			color: var(--color-primary);
		}
		&__description {
			font-size: .9em;
			margin: 1rem 0;
			text-transform: uppercase;
		}
		&__hours {
			background-color: var(--color-primary);
		}
	
	}
</style>