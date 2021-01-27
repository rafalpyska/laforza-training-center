<template>
  <section class="section cart">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Shopping cart</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <ShoppingCart />
    </div>
  </section>
</template>
<script>
import ShoppingCart from '@/components/Cart/ShoppingCart.vue'
export default {
  name: "Cart",
  components: {
    ShoppingCart
  }
};
</script>
