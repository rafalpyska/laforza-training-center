<template>
  <div class="mini-cart">
    <p v-for="item in cart" :key="item.id">{{ item.course.name }}{{ item.course.price }} {{ item.quantity }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MiniCart',
  props: {

  },
  computed: {
    ...mapGetters(['cart', 'cartTotalItemPrice'])
  },
};
</script>
<style scoped lang="scss">

</style>
