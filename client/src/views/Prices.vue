<template>
  <section class="section prices">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">Prices</h2>
            <p>Etiam rhoncus. Maecenas tempus</p>
          </div>
        </div>
        <div class="section__courses-bundles-container">
          <div class="courses__bundle">
            <h2 class="courses__bundle-name">Basic</h2>
            <div class="courses__bundle-price-container">
              <p class="courses__bundle-price">$50</p>
              <p class="courses__bundle-reccuring-payment">per month</p>
            </div>
            <AppDivider />
            <ul class="courses__bundle-list">
                <li class="courses__bundle-item">Boxing</li>
                <li class="courses__bundle-item">Swiming Pool</li>

            </ul>
            <AppButton type="sign-up">
              Sign Up
            </AppButton>
          </div>
            <div class="courses__bundle">
              <h2 class="courses__bundle-name">Basic</h2>
              <div class="courses__bundle-price-container">
                <p class="courses__bundle-price">$50</p>
                <p class="courses__bundle-reccuring-payment">per month</p>
              </div>
              <AppDivider />
              <ul class="courses__bundle-list">
                  <li class="courses__bundle-item">Boxing</li>
                  <li class="courses__bundle-item">Swiming Pool</li>
                  <li class="courses__bundle-item">Muai thay</li>

              </ul>
              <AppButton type="sign-up">
                Sign Up
              </AppButton>
            </div>
            <div class="courses__bundle">
              <h2 class="courses__bundle-name">Basic</h2>
              <div class="courses__bundle-price-container">
                <p class="courses__bundle-price">$50</p>
                <p class="courses__bundle-reccuring-payment">per month</p>
              </div>
              <AppDivider />
              <ul class="courses__bundle-list">
                  <li class="courses__bundle-item">Boxing</li>
                  <li class="courses__bundle-item">Swiming Pool</li>
                  <li class="courses__bundle-item">Muai thay</li>
                  <li class="courses__bundle-item">Yoga</li>

              </ul>
              <AppButton type="sign-up">
                Sign Up
              </AppButton>
            </div>
            <div class="courses__bundle">
              <h2 class="courses__bundle-name">Basic</h2>
              <div class="courses__bundle-price-container">
                <p class="courses__bundle-price">$50</p>
                <p class="courses__bundle-reccuring-payment">per month</p>
              </div>
              <AppDivider />
              <ul class="courses__bundle-list">
                  <li class="courses__bundle-item">Boxing</li>
                  <li class="courses__bundle-item">Swiming Pool</li>
                  <li class="courses__bundle-item">Muai thay</li>
                  <li class="courses__bundle-item">Yoga</li>
                  <li class="courses__bundle-item">Fitness</li>
              </ul>
              <AppButton type="sign-up">
                Sign Up
              </AppButton>
            </div>
        </div>

        <!-- <CoursesBundle v-for="course in courses" :key="course.id" :course="course"/> -->
    </div>
  </section>
</template>

<script>
// import CoursesBundle from '../components/CoursesBundle.vue';
import AppButton from '../components/AppButton'
import AppDivider from '../components/AppDivider'

export default {
  name: "Prices",
  components: {
    AppButton,
    AppDivider
  }
};
</script>

<style scoped lang="scss">
  .section {
    &__courses {
      &-bundles-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 2rem;
        font-size: .9em;
      }
    }
  }
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
          margin: 1em 0;
          border: 4px solid var(--color-primary);
          border-radius: 50%;
        }
      }
      &-list {
        flex: 1;
        text-align: center;
        margin-bottom: 2em;
      }
      &-item {
        text-transform: uppercase;
        padding: .35em;
      }
    }

  }
</style>
