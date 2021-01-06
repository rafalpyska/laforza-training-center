<template>
  <section class="shortcut">
    <div class="container">
      <div class="shortcut__container">
        <div class="shortcut__item shortcut__news">
          <h2 class="text-uppercase shortcut__heading shortcut__heading--news">News</h2>
          <div class="shortcut__news-container">
            <img src="../assets/images/90x90-placeholder.png" alt="" class="src">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus tenetur corporis eos voluptatibus impedit, provident sed aliquid.</p>
          </div>
          <div class="shortcut__news-controls">
            <AppButton btnType="prev" ref="prev" @click="goTo('prev')">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <span class="visuallyhidden">Previous training plan</span>
            </AppButton>
            <AppButton btnType="next" ref="next" @click="goTo('next')">
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
              <span class="visuallyhidden">Next training plan</span>
            </AppButton>
            <span>Admin</span>
            <span>Date</span>
          </div>
        </div>
        <div class="shortcut__item shortcut__partners">
          <h2 class="text-uppercase shortcut__heading shortcut__heading--partners">Partners</h2>
          <div class="shortcut__partners-logo-container">
            <img src="../assets/images/partners/1.png" class="shortcut__partners-logo" alt="" />
            <img src="../assets/images/partners/2.png" class="shortcut__partners-logo" alt="" />
            <img src="../assets/images/partners/3.png" class="shortcut__partners-logo" alt="" />
            <img src="../assets/images/partners/4.png" class="shortcut__partners-logo" alt="" />
            <img src="../assets/images/partners/5.png" class="shortcut__partners-logo" alt="" />
            <img src="../assets/images/partners/6.png" class="shortcut__partners-logo" alt="" />
          </div>
        </div>
        <div class="shortcut__item shortcut__training-plan-items-container">
          <div class="shortcut__training-plan-items shortcut__items-2" data-current="1" ref="items">
            <div class="shortcut__training-plan-item shortcut__training-plan shortcut__training-plan-item-1">
              <h2 class="text-uppercase shortcut__heading">
                $40 Month
                <span class="color-primary">/ First Plan</span>
              </h2>
              <ul class="shortcut__training-plan-list">
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-user-shield shortcut__training-plan-icon" aria-hidden="true"></i>
                  Personal trainer-nutritionist
                </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-mobile-alt shortcut__training-plan-icon" aria-hidden="true"></i>
                  Personal mobile application
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-heartbeat shortcut__training-plan-icon" aria-hidden="true"></i>
                  Private doctor monitoring
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-thumbs-up shortcut__training-plan-icon" aria-hidden="true"></i>
                  Full access to other pursuits
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-stopwatch shortcut__training-plan-icon" aria-hidden="true"></i>
                  1 month gym + swimming pool
                  </li>
              </ul>
            </div>
            <div class="shortcut__training-plan-item shortcut__training-plan shortcut__training-plan-item-2">
              <h2 class="text-uppercase shortcut__heading">
                $40 Month
                <span class="color-primary">/ Second Plan</span>
              </h2>
              <ul class="shortcut__training-plan-list">
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-user-shield shortcut__training-plan-icon" aria-hidden="true"></i>
                  Personal trainer-nutritionist
                </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-mobile-alt shortcut__training-plan-icon" aria-hidden="true"></i>
                  Personal mobile application
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-heartbeat shortcut__training-plan-icon" aria-hidden="true"></i>
                  Private doctor monitoring
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-thumbs-up shortcut__training-plan-icon" aria-hidden="true"></i>
                  Full access to other pursuits
                  </li>
                <li class="shortcut__training-plan-list-item">
                  <i class="fas fa-stopwatch shortcut__training-plan-icon" aria-hidden="true"></i>
                  1 month gym + swimming pool
                  </li>
              </ul>
            </div>             
          </div>
          <div class="schortcut__training-plan-controls">
            <AppButton btnType="sign-up">
              Sign up
            </AppButton>
            <AppButton btnType="prev" ref="prev" @click="goTo('prev')">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <span class="visuallyhidden">Previous training plan</span>
            </AppButton>
            <AppButton btnType="next" ref="next" @click="goTo('next')">
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
              <span class="visuallyhidden">Next training plan</span>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'Shortcut',
  components: {
    AppButton
  },
  methods: {
    goTo(direction) {
      let strip = this.$refs.items;
      let items = strip.querySelectorAll('.shortcut__training-plan-item');

      let current = parseInt(strip.getAttribute('data-current'), 10);
      if(direction === 'next') {
        if(current >= items.length) return;
        current++;
      } else {
        if(current <= 1) return;
        current--;
      }
      strip.setAttribute('data-current', current);
    }
  }
};
</script>

<style scoped lang="scss">
.shortcut {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: auto;
  }
  &__item {
    padding: 3.5rem 2.5rem;
    &:last-child {
      padding: 0;
    }
  }
  &__heading {
    font-family: 'Play', sans-serif;
    margin-bottom: .75rem;
    &--news {
      color: var(--shortcut-news-heading-color);
    }
    &--partners {
      color: var(--shortcut-partners-heading-color);
    }
  }
  &__news {
    color: var(--shortcut-news-text-color);
    background-color: var(--shortcut-news-bgc);
    &-container {
      display: flex;
      font-size: .75rem;
    }
  }
  &__partners {
    background-color: var(--shortcut-news-bgc);
    &-logo {
      &-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
        grid-auto-rows: auto;
        align-items: center;
        justify-items: center;
        grid-row-gap: 2rem;
      }
      height: auto;
    }
  }
  &__training-plan {
    &-items {
      &-container {
        overflow: hidden;
        background-color: var(--shortcut-training-plans-bgc);
      }
      display: flex;
      flex-wrap: nowrap;
      transition: transform 300ms;
      @for $i from 1 through 20 {
        &[data-current="#{$i}"]{ transform: translateX(-100% * ($i - 1)); }
      }
    }
    &-list {
      font-size: .75rem;
    }
    &-item {
      padding: 3.5rem 2.5rem;
      min-width: 100%;
    }
    &-icon {
      width: 20px;
      text-align: center;
      margin-right: .25rem;
    }
  }
}
.btn {
  &--prev {
    border: 2px solid black;
  }
  &--next {
    border: 2px solid black;
    border-left: none;
  }
}
</style>
