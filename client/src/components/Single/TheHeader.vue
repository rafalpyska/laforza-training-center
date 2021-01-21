<template>
  <header class="header">
    <!-- fixed-height="100vh" on slider-->
    <div class="header__content container">
      {{ currentRouteName }}
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
