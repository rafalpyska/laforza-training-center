<template>
  <nav class="navigation" :class="{ 'navigation--expanded': isNavExpanded }">
    <div class="navigation__wrapper container">
      <router-link to="/" id="home" class="navigation__logo-container">
        <img
          src="@/assets/images/logos/logo-black.png"
          class="navigation__logo"
          alt="LaFORZA Training Center Logo"
        />
      </router-link>
      <!-- set aria expanded 
            close on click     -->
      <button
        class="navigation__toggle"
        aria-expanded="false"
        ref="toggle"
        aria-controls="navigation__toggle"
        @click="navigationToggle()"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="navigation__list container">
        <li class="navigation__item">
          <router-link to="/" id="home" class="navigation__link"
            >Home</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/about" class="navigation__link"
            >About us</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/classes" class="navigation__link"
            >Classes</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/bundles" class="navigation__link"
            >Bundles</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link
            :to="{
              name: 'Trainers',
              params: { page: pagination.pageNumber }
            }"
            class="navigation__link"
            >Trainers</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/schedule" class="navigation__link"
            >Schedule</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/events" class="navigation__link"
            >Events</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/stories" class="navigation__link"
            >Stories</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/blog" class="navigation__link">Blog</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/contact" class="navigation__link"
            >Contact</router-link
          >
        </li>
      </ul>
      <button class="navigation__cart">
        <router-link to="/cart" class="navigation__link">
          <i
            class="fas fa-shopping-cart navigation__cart-icon"
            aria-hidden="true"
          ></i>
          Cart
          <span v-if="cartItemCount > 0">{{ cartItemCount }}</span>
        </router-link>
      </button>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNavigation",
  data: () => ({
    isNavExpanded: false,
    isMiniCartVisible: false
  }),
  watch: {
    $route() {
      this.isNavExpanded = false;
    }
  },
  computed: {
    ...mapGetters(["pagination", "cartItemCount"]),
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    navigationToggle() {
      this.isNavExpanded = !this.isNavExpanded;
      this.$refs.toggle.setAttribute("aria-expanded", this.isNavExpanded);
    }
  }
};
</script>

<style scoped lang="scss">
.router-link-active {
  color: var(--color-primary);
}

.header {
  background-color: var(--header-bgc);
  color: var(--white);
  position: relative;
  &__box {
    padding: 2rem;
    background-color: var(--color-primary);
    text-transform: uppercase;
  }
}
.navigation {
  font-family: "Play", sans-serif;
  font-size: 0.75rem;
  background-color: var(--navigation-bgc);
  padding: 0 2rem;
  min-height: 3rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  &__logo {
    display: block;
    border-top: none;
    width: 200px;
    height: auto;
    @media (max-width: 1222px) {
      width: 160px;
    }
    @media (max-width: 768px) {
      width: 145px;
    }
    &-container {
      &.router-link-exact-active {
        border-top: none;
      }
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    transition: 0.1s all;
    @media (max-width: 1222px) {
      display: none;
      padding: 2rem 0;
      width: 100%;
    }
  }
  &__item {
    text-transform: uppercase;
    width: auto;
    @media (max-width: 1222px) {
      display: none;
      width: 100%;
    }
    & .navigation__link {
      padding: 0 1rem;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    transition: 0.1s all linear;
  }
  &__link:link,
  &__link:visited {
    color: var(--white);
  }
  &__link:hover,
  &__link:active,
  &__link.router-link-exact-active {
    border-top: 3px solid var(--color-primary);
    color: var(--color-primary);
  }
  &__cart {
    margin-left: auto;
    color: white;
    text-transform: uppercase;
    border: none;
    background: none;
    @media (max-width: 1222px) {
      order: 1;
    }
    &-icon {
      margin-right: 0.25rem;
    }
  }
  &__toggle {
    align-self: center;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.15rem;
    display: none;
    margin-left: 2rem;
    @media (max-width: 1222px) {
      display: flex;
      order: 2;
    }
  }
  &--expanded {
    & .navigation__list {
      display: flex;
      order: 3;
    }
    & .navigation__item {
      display: block;
      &:not(:first-of-type) {
        padding: 0.5rem 0;
      }
    }
    & .navigation__link {
      border-top: none;
    }
    & .navigation__toggle {
      order: 2;
    }
    & .navigation__cart {
      order: 1;
    }
  }
}
</style>
