<template>
    <div class="class">
        <div class="class__image-container">
            <img src="http://dummyimage.com/750x750" class="image" alt="placeholder">
        </div>
        <div class="class__info">
          <h3 class="class__heading">Boxing <span class="class__trainer">BRUCE LUIS / EMILIAN SALVATORE</span></h3>
          <p class="class__description">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet</p>
          <AppButton type="enroll">
              Enroll
          </AppButton>
          <div class="class__socials">
            <a href="#" class="href class__socials-link">
              <i class="fab fa-facebook-f class__socials-icon" aria-hidden="true">
                <span class="visuallyhidden">Facebook</span>
              </i>
            </a>
            <a href="#" class="href class__socials-link">
              <i class="fab fa-twitter class__socials-icon" aria-hidden="true">
                <span class="visuallyhidden">Twitter</span>
              </i>
            </a>
            <a href="#" class="href class__socials-link">
              <i class="fab fa-instagram class__socials-icon" aria-hidden="true">
                <span class="visuallyhidden">Instagram</span>
              </i>
            </a>
          </div>
        </div>
        <div class="class__general-info">
          <div class="class__complexity">
            <h3 class="class__general-info-heading">The complexity</h3>
            <ul class="class__complexity-list">
              <li class="class__complexity-item"><i class="fas fa-star"></i></li>
              <li class="class__complexity-item"><i class="fas fa-star"></i></li>
              <li class="class__complexity-item"><i class="fas fa-star"></i></li>
              <li class="class__complexity-item"><i class="far fa-star"></i></li>
              <li class="class__complexity-item"><i class="far fa-star"></i></li>
            </ul>
          </div>
          <div class="class__persons-allowed">
            <h3 class="class__general-info-heading">Number of persons</h3>
            <div class="class__persons-allowed-number">
              <p>6</p>
            </div>
          </div>
          <div class="class__occupation">
            <h3 class="class__general-info-heading">The Occupation</h3>
            <div class="class__occupation-time">
              <p>90 min</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton'
  export default {
    name: "ClassesList",
    components: {
        AppButton
    }
  };
</script>
<style scoped lang="scss">
  .class {
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
    &__trainer {
      margin-left: .35rem;
      color: var(--color-primary);
      font-size: .85rem;
    }
		&__description {
			margin: 1rem 0;
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
			font-size: .7rem;
      margin: 2rem 0;
      padding: 0 2rem;
			text-align: center;
			text-transform: uppercase;
      border: 2px solid var(--class-general-info-border);
      &-heading {
        text-transform: uppercase;
        font-weight: normal;
        margin: .2rem 0;
		  }
    }
    &__complexity {
      &-list {
        display: flex;
        justify-content: center;
        font-size: 1rem;
      }
      &-item {
        color: var(--color-primary);
      }
    }
    &__persons-allowed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      &-number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: var(--color-primary);
        font-size: 1rem;
      }
    }
    &__occupation {
      &-time {
        background-color: black;
        padding: .25rem;
        font-size: 1rem;
      }
    }
  }
</style>