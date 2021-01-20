<template>
  <div class="shortcut">
    <div class="shortcut__container container">
      <div class="shortcut__item shortcut__news">
        <h2 class="text-uppercase shortcut__heading shortcut__heading--news">
          News
        </h2>
        <!-- TODO: Add auto play-->
        <hooper ref="news" :playSpeed="3000" :wheelControl="false">
          <slide v-for="post in posts" :key="post.id">
            <article class="shortcut__news-item-container">
              <div class="shortcut__news-container">
                <img
                  src="../assets/images/90x90-placeholder.png"
                  alt=""
                  class="shortcut__news-image"
                />
                <p>{{ ellipsify(post.summary, 150) }}</p>
              </div>
              <div class="shortcut__news-info-container">
                <p><span class="bold">Title:</span> {{ post.title }}</p>
                <p v-for="author in post.authors" :key="author.id">
                  <span class="bold">Published by:</span> {{ author.username }}
                </p>
                <p>
                  <span class="bold">Published on:</span> {{ post.publishedAt }}
                </p>
              </div>
            </article>
            <BaseButton
              btnType="more"
              :to="{ name: 'BlogPost', params: { slug: post.slug } }"
            >
              Read more
            </BaseButton>
          </slide>
        </hooper>
        <div class="slider__controls">
          <BaseButton
            btnType="slider"
            class="btn--slider-prev"
            @click.native="newsSlidePrev"
          >
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span class="visuallyhidden">Previous news</span>
          </BaseButton>
          <BaseButton
            btnType="slider"
            class="btn--slider-next"
            @click.native="newsSlideNext"
          >
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="visuallyhidden">Next news</span>
          </BaseButton>
        </div>
      </div>
      <div class="shortcut__item shortcut__partners">
        <h2
          class="text-uppercase shortcut__heading shortcut__heading--partners"
        >
          Partners
        </h2>
        <div class="shortcut__partners-logo-container">
          <img
            src="../assets/images/partners/1.png"
            class="shortcut__partners-logo"
            alt=""
          />
          <img
            src="../assets/images/partners/2.png"
            class="shortcut__partners-logo"
            alt=""
          />
          <img
            src="../assets/images/partners/3.png"
            class="shortcut__partners-logo"
            alt=""
          />
          <img
            src="../assets/images/partners/4.png"
            class="shortcut__partners-logo"
            alt=""
          />
          <img
            src="../assets/images/partners/5.png"
            class="shortcut__partners-logo"
            alt=""
          />
          <img
            src="../assets/images/partners/6.png"
            class="shortcut__partners-logo"
            alt=""
          />
        </div>
      </div>
      <div class="shortcut__item shortcut__training-plan">
        <hooper ref="plans" :playSpeed="3000" :wheelControl="false">
          <slide v-for="bundle in bundles.slice().reverse()" :key="bundle.id">
            <article class="training-plan">
              <h2
                class="text-uppercase shortcut__heading shortcut__heading--plans"
              >
                ${{ bundle.price }}
                <span class="color-primary">/ {{ bundle.name }}</span>
              </h2>
              <p>Includes following classes:</p>
              <ul class="shortcut__training-plan-list">
                <li
                  class="shortcut__training-plan-list-item"
                  v-for="course in bundle.bundleList"
                  :key="course.id"
                >
                  <i
                    class="fas fa-user-shield shortcut__training-plan-icon"
                    aria-hidden="true"
                  ></i>
                  {{ course.name }}
                </li>
              </ul>
            </article>
          </slide>
        </hooper>
        <div class="slider__controls">
          <BaseButton
            btnType="slider"
            class="btn--slider-prev"
            @click.native="plansSlidePrev"
          >
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span class="visuallyhidden">Previous training plan</span>
          </BaseButton>
          <BaseButton
            btnType="slider"
            class="btn--slider-next"
            @click.native="plansSlideNext"
          >
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="visuallyhidden">Next training plan</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ellipsify from "@/mixins/ellipsify";
import { Hooper, Slide } from "hooper";
import "@/assets/styles/hooper.css";
export default {
  name: "Shortcut",
  mixins: [ellipsify],
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      startPostsFrom: 0,
      numberOfPosts: 2
    };
  },
  computed: {
    ...mapGetters([
      "bundlesLoadingStatus",
      "bundlesErrorStatus",
      "bundles",
      "postsLoadingStatus",
      "postsErrorStatus",
      "posts"
    ])
  },
  async created() {
    if (this.bundles && this.bundles.length > 0) return;
    await this.$store.dispatch("fetchBundles");
    await this.$store.dispatch("fetchBlogPosts", {
      start: this.startPostsFrom,
      limit: this.numberOfPosts
    });
  },
  methods: {
    newsSlidePrev() {
      this.$refs.news.slidePrev();
    },
    newsSlideNext() {
      this.$refs.news.slideNext();
    },
    plansSlidePrev() {
      this.$refs.plans.slidePrev();
    },
    plansSlideNext() {
      this.$refs.plans.slideNext();
    }
  }
};
</script>

<style scoped lang="scss">
.shortcut {
  margin: 4rem 0;
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: auto;
  }
  &__heading {
    font-family: "Play", sans-serif;
    margin-bottom: 0.75rem;
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
  &__item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 3.5rem 2.5rem;
  }
  &__news {
    color: var(--shortcut-news-text-color);
    background-color: var(--shortcut-news-bgc);
    transition: 0.2s all;
    @media (max-width: 1232px) {
      grid-column: span 2;
    }
    &:hover {
      background-color: red;
    }
    &:hover .shortcut__news-item-container {
      color: white;
    }
    &:hover .shortcut__heading--news {
      color: white;
    }
    &-item-container {
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
    }
    &-container {
      display: flex;
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }
    &-info-container {
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
    }
    &-image {
      margin-right: 0.75rem;
      width: 90px;
      height: 90px;
    }
  }
  &__partners {
    background-color: var(--shortcut-news-bgc);
    transition: 0.2s all;
    &:hover {
      background-color: red;
    }
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
    transition: 0.2s all;
    &:hover {
      background-color: var(--color-primary);
    }
    @media (max-width: 1232px) {
      grid-column: 1/-1;
    }
    &-list {
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    &-icon {
      width: 20px;
      text-align: center;
      margin-right: 0.25rem;
    }
  }
}
.training-plan {
  display: flex;
  flex-direction: column;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}

.btn--slider {
  &-prev {
    border-color: #c4c4c4;
  }
  &-next {
    border-color: #c4c4c4;
    border-left: none;
  }
  &-white {
    border: 1px solid white;
  }
}
</style>
