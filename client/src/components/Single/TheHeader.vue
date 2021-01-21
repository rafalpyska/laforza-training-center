<template>
  <header class="header">
    <!-- fixed-height="100vh" on slider-->
    <div class="header__content container">
      <div class="section__info">
        <div class="section__info-titles-container">
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
import TheNavigation from './TheNavigation.vue';

export default {
  name: "TheHeader",
  components: {
    TheNavigation
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
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
  }
}
</style>
