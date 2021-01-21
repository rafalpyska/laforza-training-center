<template>
  <div>
    <TheHeader />
    <slot></slot>
    <BaseActionStrip class="action-strip--bottom">
      <template v-slot:first-column>
        <img
          src="@/assets/images/logos/footer-logo.png"
          class="logo__bottom"
          alt="LaFORZA Training Center Logo"
        />
      </template>
      <template v-slot:last-column>
        <a ref="gotop" href="#home" class="go-top" aria-label="Scroll to Top">
          <i class="fas fa-chevron-up go-top__icon"></i>
        </a>
      </template>
    </BaseActionStrip>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Single/TheHeader.vue";
import TheFooter from "@/components/Single/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style lang="scss"></style>
