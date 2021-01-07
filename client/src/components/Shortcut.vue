<template>
  <div class="shortcut section">
    <div class="container">
      <div class="shortcut__container">
        <div class="slider shortcut__news">
          <div class="slider__slides-container" data-current="1" ref="news">
            <article
              class="slider__slide slider__slide-news"
              v-for="post in posts" :key="post.id"
            >
              <h2 class="text-uppercase shortcut__heading shortcut__heading--news">News</h2>
              <div class="shortcut__news-container">
                <img src="../assets/images/90x90-placeholder.png" alt="" class="shortcut__news-image">
                <p>{{ post.summary }}</p>
              </div>
            </article>
          </div>
          <div class="slider__controls">
            <AppButton btnType="prev" ref="prev" @click="goTo('prev', $refs.news, '.slider__slide-news')">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <span class="visuallyhidden">Previous training plan</span>
            </AppButton>
            <AppButton btnType="next" ref="next" @click="goTo('next', $refs.news, '.slider__slide-news')">
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
              <span class="visuallyhidden">Next training plan</span>
            </AppButton>
            <!-- <span v-for="author in post.authors" :key="author.id">{{ author.username }}</span>
            <span>{{ post.publishedAt }}</span> -->
          </div>
        </div>
        <div class="slider shortcut__item shortcut__partners">
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
        <div class="slider shortcut__training-plan">
          <div class="slider__slides-container" data-current="1" ref="plans">
            <article
              class="slider__slide slider__slide-plans" 
              v-for="bundle in bundles.slice().reverse()" :key="bundle.id"
            >
              <h2 class="text-uppercase shortcut__heading shortcut__heading--plans">
                ${{ bundle.price }}
                <span class="color-primary">/ {{ bundle.name }}</span>
              </h2>
              <p>Includes following classes:</p>
              <ul class="shortcut__training-plan-list">
                <li class="shortcut__training-plan-list-item" v-for="course in bundle.bundleList" :key="course.id">
                  <i class="fas fa-user-shield shortcut__training-plan-icon" aria-hidden="true"></i>
                  {{ course.name }}
                </li>
              </ul>
            </article>            
          </div>
          <div class="slider__controls">
            <AppButton btnType="sign-up">
              Sign up
            </AppButton>
            <AppButton btnType="prev" @click="goTo('prev', $refs.plans, '.slider__slide-plans')">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <span class="visuallyhidden">Previous training plan</span>
            </AppButton>
            <AppButton btnType="next" @click="goTo('next', $refs.plans, '.slider__slide-plans')">
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
              <span class="visuallyhidden">Next training plan</span>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppButton from '@/components/AppButton'
export default {
  name: 'Shortcut',
  components: {
    AppButton
  },
  data() {
    return {
      startPostsFrom: 0,
      numberOfPosts: 2
    }
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'bundles', 'posts'])
  },
  async created() {
    if (this.bundles && this.bundles.length > 0) return;
    try {
      await this.$store.dispatch('fetchBundles');
    } catch (e) {
      this.errorStatus = e;
    }
    try {
      await this.$store.dispatch('fetchBlogPosts', { start: this.startPostsFrom, limit: this.numberOfPosts });
    } catch (e) {
      this.errorStatus = e;
    }
  },
  methods: {
    goTo(direction, sliderItemsContainer, sliderItemsClass) {
      let strip = sliderItemsContainer;
      let items = strip.querySelectorAll(sliderItemsClass);

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
  margin-bottom: 4rem;
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: auto;
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
    &--plans {
      color: var(--shortcut-training-plans-heading-color);
    }
  }
  &__news {
    color: var(--shortcut-news-text-color);
    background-color: var(--shortcut-news-bgc);
    @media (max-width: 1232px) {
      grid-column: span 2;
    }
    &-container {
      display: flex;
      font-size: .75rem;
    }
    &-image {
      margin-right: .75rem;
      width: 90px;
      height: 90px;
    }
  }
  &__partners {
    background-color: var(--shortcut-news-bgc);
    padding: 3.5rem 2.5rem;
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
    background-color: var(--shortcut-training-plans-bgc);
    @media (max-width: 1232px) {
      grid-column: 1/-1;
    }
    &-list {
      font-size: .75rem;
      text-transform: uppercase;
    }

    &-icon {
      width: 20px;
      text-align: center;
      margin-right: .25rem;
    }
  }
}
.slider {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 992px) {
    grid-column: 1/-1;
  }
  &__slides-container {
    display: flex;
    flex-wrap: nowrap;
    flex: 1;
    transition: transform 300ms;
    @for $i from 1 through 20 {
      &[data-current="#{$i}"]{ transform: translateX(-100% * ($i - 1)); }
    }
  }
  &__slide {
    padding: 3.5rem 2.5rem 0 2.5rem;
    min-width: 100%;
    &-plans {
      color: white;
    }
  }
  &__controls {
    padding: 1rem 2.5rem 2.5rem;
  }
}
.btn {
  &--prev {
    border: 1px solid black;
  }
  &--next {
    border: 1px solid black;
    border-left: none;
  }
}
</style>
