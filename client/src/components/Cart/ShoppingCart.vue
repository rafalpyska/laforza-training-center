<template>
  <div class="shopping-cart">
    <h3 class="shopp-cart__title" v-if="cartItemCount < 1">
      Your basket is empty!
    </h3>
    <article class="shopping-cart__item" v-for="item in cart" :key="item.id">
      <!-- TODO: conditional 'with' span wheter course or bundle is selected-->
      <h3 class="shopping-cart__title">
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
      <button class="shopping-cart__remove-item" @click="removeCourseFromCart(item.id)">
        <span class="visuallyhidden">Remove from cart"</span>
        <i class="far fa-trash-alt"></i>
      </button>
    </article>
    <BaseDivider v-if="cartItemCount > 0" />
    <p v-if="cart.length > 0">Total: ${{ cartTotalItemPrice }}</p>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'
export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters(["cart", "cartTotalItemPrice", "cartItemCount"])
  },
  methods: {
    removeCourseFromCart(id) {
      this.$store.dispatch("removeCourseFromCart", id);
    }
  }
};
</script>

<style scoped lang="scss">
.shopping-cart {
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
  &__remove-item {
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
