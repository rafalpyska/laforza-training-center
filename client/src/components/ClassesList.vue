<template>
    <div class="class">
        <div class="class__image-container">
            <img src="http://dummyimage.com/750x750" class="image" alt="placeholder">
        </div>
        <div class="class__info">
            <h3 class="class__heading">Boxing <span>BRUCE LUIS / EMILIAN SALVATORE</span></h3>
            <p class="class__description">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante etiam sit amet</p>
            <AppButton type="enroll">
                Enroll
            </AppButton>
        </div>
        <div class="class__general-info">
            <h3 class="class__heading">Course days</h3>
            <h3 class="class__heading">Number of persons</h3>
            <h3 class="class__heading">The Occupation</h3>
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
		font-size: .8rem;
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
			font-size: .9em;
			margin: 2rem 0;
			text-align: center;
			text-transform: uppercase;
			border: 2px solid var(--class-general-info-border); 
		}
		&__img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
  }
</style>