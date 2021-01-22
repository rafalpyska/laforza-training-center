<template>
  <section class="section cart">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Shopping cart</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="cart__item" v-for="item in cart" :key="item.id">
        <!-- TODO: conditional 'with' span wheter course or bundle is selected-->
        <h3 class="mini-cart__product-title">
          <span class="color-primary text-uppercase">{{
            item.course.name
          }}</span>
          <span v-if="item.trainer !== undefined"> with </span>
          <span v-if="item.trainer === undefined"> Bundle </span>
          <span
            v-if="item.trainer !== undefined"
            class="color-primary text-uppercase"
            >{{ item.trainer }}</span
          >
        </h3>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: ${{ item.course.price }}</p>
        <button class="cart__remove" @click="removeCourseFromCart(item.course)">
          <span class="visuallyhidden">Remove from cart"</span>
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      <BaseDivider v-if="cart.length > 0" />
      <p v-if="cart.length > 0">Total: ${{ cartTotalItemPrice }}</p>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  props: {},
  computed: {
    ...mapGetters(["cart", "cartTotalItemPrice"])
  },
  methods: {
    removeCourseFromCart(course) {
      this.$store.dispatch("removeCourseFromCart", course);
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  &__item {
    padding: 1rem 2rem;
    background-color: var(--courses-bundle-bgc);
    color: white;
    margin-bottom: 0.25rem;
    & > .cart__remove {
      color: white;
    }
    &-image {
      &-container {
        width: 5rem;
        height: 5rem;
      }
    }
  }
  &__remove {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.1s all;
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
