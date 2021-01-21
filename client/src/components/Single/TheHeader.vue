<template>
  <header class="header">
    <!-- fixed-height="100vh" on slider-->
    <div class="header__content container">
      <div class="header__info">
        <div class="header__info-route">
          <h1>{{ currentRouteName }}</h1>
        </div>
        <div class="encouragement-box">
          Start to engage in sports right now!
        </div>
      </div>
    </div>
    <TheNavigation />
  </header>
</template>
<script>
import TheNavigation from "./TheNavigation.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavigation
  },
  computed: {
    currentRouteName() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--header-bgc);
  color: var(--white);
  position: relative;
  &__content {
    padding: 4rem 0;
    @media (max-width: 1280px) {
      padding: 4rem 2rem;
    }
  }
  &__info {
    display: flex;
    flex-wrap: wrap;
    font-size: .85rem;
    &-route {
      margin-right: auto;
    }
  }
}
</style>
