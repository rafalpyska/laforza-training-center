<template>
	<div class="trainer">
		<div class="trainer__image-container">
			<img src="http://dummyimage.com/750x750" class="image" alt="placeholder">
		</div>
		<div class="trainer__info">
			<h3 class="trainer__heading">Bruce Luis <span class="trainer__class">Boxing</span></h3>
			<p class="trainer__description">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet</p>
			<ul class="trainer__titles-list">
				<li class="trainer__titles-item"><i class="fas fa-star-half-alt trainer__schedule-icon" aria-hidden="true"></i>Gain confidence</li>
				<li class="trainer__titles-item"><i class="fas fa-star-half-alt trainer__schedule-icon" aria-hidden="true"></i>Strength development</li>
				<li class="trainer__titles-item"><i class="fas fa-star-half-alt trainer__schedule-icon" aria-hidden="true"></i>Development speed</li>
			</ul>
			<div class="trainer__socials">
				<a href="#" class="href trainer__socials-link">
					<i class="fab fa-facebook-f trainer__socials-icon" aria-hidden="true">
						<span class="visuallyhidden">Facebook</span>
					</i>
				</a>
				<a href="#" class="href trainer__socials-link">
					<i class="fab fa-twitter trainer__socials-icon" aria-hidden="true">
						<span class="visuallyhidden">Twitter</span>
					</i>
				</a>
				<a href="#" class="href trainer__socials-link">
					<i class="fab fa-instagram trainer__socials-icon" aria-hidden="true">
						<span class="visuallyhidden">Instagram</span>
					</i>
				</a>
			</div>
		</div>
		<div class="trainer__general-info">
			<h3 class="trainer__heading">Schedule</h3>
			<span class="visuallyhidden">Facebook</span>
				<ul class="trainer__schedule-list">
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>Gain confidence</li>
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>Strength development</li>
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>Development speed</li>
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>Increase dexterity</li>
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>Increase stamina</li>
					<li class="trainer__schedule-item"><i class="far fa-star trainer__schedule-icon" aria-hidden="true"></i>An athletic body</li>
				</ul>
			<AppButton type="schedule">
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
		&__class {
			margin-left: .35rem;
      color: var(--color-primary);
      font-size: .85rem;
		}
		&__description {
			margin: 1rem 0;
		}
		&__titles {
			&-list {
				font-size: .75rem;
				font-weight: 700;
			}
		}
		&__socials {
		margin-top: 1.25rem;
		font-size: 1.25rem;
			&-link {
				color: var(--class-social-icon-color);
				&:not(:last-child) {
					margin-right: 1rem;
				}
				&:hover {
					color: var(--color-primary);
				}
			}
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
			font-size: .75rem;
		}
		&__schedule {
			&-list {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
			}
			&-item {
				margin: .35rem 0;
				&:last-child {
					margin-bottom: 1rem;
				}
			}
			&-icon {
				margin-right: .35rem;
			}
		}
  }
</style>