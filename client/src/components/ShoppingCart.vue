<template>
  <div class="mini-cart" :class="{ 'mini-cart--visible': isMiniCartVisible }">
    <p class="mini-cart__product-title"></p>

    <p v-for="item in cart" :key="item.id">
      {{ item.course.name }} - {{ item.trainer }} {{ item.quantity }} x ${{
        item.course.price
      }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ShoppingCart',
  props: {
    isMiniCartVisible: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartTotalItemPrice'])
  }
};
</script>
<style scoped lang="scss">
.mini-cart {
  display: none;
  padding: 2rem;
  text-align: end;
  background-color: var(--color-secondary);
  color: white;
  &--visible {
    display: flex;
  }
}
</style>
