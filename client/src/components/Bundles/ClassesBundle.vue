<template>
  <div class="courses__bundle">
    <h2 class="courses__bundle-name">{{ bundle.name }}</h2>
    <div class="courses__bundle-price-container">
      <p class="courses__bundle-price">
        <span class="courses__bundle-price-currency">$</span>
        {{ bundle.price }}
      </p>
      <p class="courses__bundle-reccuring-payment">per month</p>
    </div>
    <BaseDivider />
    <ul class="courses__bundle-list">
      <li
        class="courses__bundle-item"
        v-for="course in bundle.bundleList"
        :key="course.id"
      >
        {{ course.name }}
      </li>
    </ul>
    <BaseButton btnType="sign-up" @click.native="addToCart()">
      Sign Up
    </BaseButton>
    <BaseModal ref="popup" :title="bundle.name">
      <template v-slot:body>
        You have successfully added
        <span class="bold text-uppercase color-primary"
          >'{{ bundle.name }}'</span
        >
        bundle to your cart! Check our other bundles and courses!
      </template>
    </BaseModal>
  </div>
</template>

<script>
export default {
  name: "ClassesBundle",
  props: {
    bundle: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addCourseToCart", {
        id:
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9),
        course: this.bundle,
        quantity: 1
      });
      this.$store.commit("ADD_CART_TO_LOCAL_STORAGE");
      this.$refs.popup.show = !this.$refs.popup.show;
    }
  }
};
</script>

<style lang="scss">
.courses {
  &__bundle {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--courses-bundle-bgc);
    padding: 3.5rem 2.5rem;
    font-size: 0.75rem;
    &:hover {
      background-color: var(--color-primary);
    }
    &:hover .courses__bundle-price-container {
      border-color: var(--price-cotnainer-border-hover);
    }
    &:hover > .btn {
      background-color: var(--white);
      color: var(--color-primary);
    }
    &-name {
      text-transform: uppercase;
    }
    &-price {
      &-container {
        font-family: "Play", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 7rem;
        height: 7rem;
        margin: 1rem 0;
        border: 5px solid var(--color-primary);
        border-radius: 50%;
      }
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &-currency {
      }
    }
    &-reccuring-payment {
      font-size: 0.65rem;
    }
    &-list {
      font-family: "Play", sans-serif;
      flex: 1;
      text-align: center;
      margin-bottom: 2rem;
    }
    &-item {
      text-transform: uppercase;
      padding: 0.1rem;
    }
  }
}
</style>
