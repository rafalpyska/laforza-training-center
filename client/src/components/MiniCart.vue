<template>
  <div class="mini-cart">
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
  name: 'MiniCart',
  props: {},
  computed: {
    ...mapGetters(['cart', 'cartTotalItemPrice'])
  }
};
</script>
<style scoped lang="scss">
.mini-cart {
  padding: 2rem;
  text-align: end;
  background-color: var(--color-secondary);
  color: white;
}
</style>
