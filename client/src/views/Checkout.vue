<template>
  <section class="section register">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Checkout</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <ShoppingCheckout />
    </div>
  </section>
</template>
<script>
import ShoppingCheckout from '@/components/Cart/ShoppingCheckout.vue';
export default {
  name: "Login",
  components: {
    ShoppingCheckout
  }
};
</script>

<style scoped lang="scss">

</style>
