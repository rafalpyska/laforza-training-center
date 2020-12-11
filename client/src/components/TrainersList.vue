<template>
	<div class="trainer">
		<div class="trainer__image-container">
			<img src="http://dummyimage.com/750x750" class="image" alt="placeholder">
		</div>
		<div class="trainer__info">
			<h3 class="trainer__heading">Boxing <span>BRUCE LUIS / EMILIAN SALVATORE</span></h3>
			<p class="trainer__description">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet</p>
		</div>
		<div class="trainer__general-info">
			<h3 class="trainer__heading">Get help</h3>
				<ul class="trainer__schedule-list">
					<li class="trainer__schedule-item"><i class="far fa-star"></i>Gain confidence</li>
					<li class="trainer__schedule-item"><i class="far fa-star"></i>Strength development</li>
					<li class="trainer__schedule-item"><i class="far fa-star"></i>Development speed</li>
					<li class="trainer__schedule-item"><i class="far fa-star"></i>Increase dexterity</li>
					<li class="trainer__schedule-item"><i class="far fa-star"></i>Increase stamina</li>
					<li class="trainer__schedule-item"><i class="far fa-star"></i>An athletic body</li>
				</ul>
			<AppButton type="enroll">
				Enroll
			</AppButton>
		</div>
	</div>
</template>

<script>
import AppButton from './AppButton'
  export default {
    name: "TrainersList",
    components: {
        AppButton
    }
  };
</script>
<style scoped lang="scss">
  .trainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr) max-content;
    grid-auto-rows: minmax(10rem, 20rem);
		gap: 2rem;
		font-size: .85rem;
		&__img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
		&__info {
			color: white;
		}
		&__heading {
			text-transform: uppercase;
		}
		&__description {
			margin: 1rem 0;
		}
		&__general-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 0 2rem;
			text-align: center;
			text-transform: uppercase;
			border: 2px solid var(--class-general-info-border); 
		}
		&__schedule-item {
			margin: .35rem 0;
			&:last-child {
				margin-bottom: 1rem;
			}
		}
  }
</style>