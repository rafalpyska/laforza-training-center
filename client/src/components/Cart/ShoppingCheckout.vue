<template>
  <div class="checkout-component">
    <!-- <p class="is-false" v-if="error">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
      {{ error.message }}
    </p>
    <p class="is-true" v-if="success">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
      {{ success }}
    </p> -->
    <ValidationObserver
      ref="form"
      v-slot="{ handleSubmit, invalid, errors }"
      class="checkout__form"
      name="checkout-form"
      @submit.prevent="handleSubmit(submit)"
    >
      <ul class="checkout__errors-list">
        <li
          class="checkout__errors-item"
          v-for="(error, index) in errors"
          :key="index"
        >
          <i
            v-if="error.length"
            class="fas fa-exclamation-triangle"
            aria-hidden="true"
          ></i>
          {{ error[0] }}
        </li>
      </ul>
      <div class="input__fieldset checkout__input-fieldset">
        <ValidationProvider name="Name" rules="min:3" tag="div">
          <label class="visuallyhidden" for="user-checkout-name">
            Name
          </label>
          <input
            v-model="form.name"
            class="input checkout__name"
            id="user-checkout-name"
            name="user-checkout-name"
            type="text"
            placeholder="Your name *"
            required
          />
        </ValidationProvider>
        <ValidationProvider name="Address" rules="required" tag="div">
          <label class="visuallyhidden" for="user-checkout-address"
            >Your full address</label
          >
          <input
            v-model="form.address"
            class="input checkout__address"
            id="user-checkout-address"
            name="user-checkout-address"
            type="text"
            placeholder="Your full address *"
          />
        </ValidationProvider>
      </div>
      <div class="input__fieldset checkout__input-fieldset">
        <ValidationProvider name="City" rules="required" tag="div">
          <label class="visuallyhidden" for="user-checkout-city"
            >Your city</label
          >
          <input
            v-model="form.addres"
            class="input checkout__city"
            id="user-checkout-city"
            name="user-checkout-city"
            type="text"
            placeholder="Your city *"
          />
        </ValidationProvider>
        <ValidationProvider
          name="Postal Code"
          :rules="{ regex: `[0-9]{2}\-[0-9]{3}`, required: true }"
          tag="div"
        >
          <label class="visuallyhidden" for="contact-subject"
            >Postal Code</label
          >
          <input
            v-model="form.postalCode"
            class="input checkout__postal-code"
            id="user-checkout-postal-code"
            name="user-checkout-postal-code"
            type="text"
            placeholder="Your postal code *"
          />
        </ValidationProvider>
      </div>
      <label class="visuallyhidden" for="contact-submit">Continue</label>
      <input
        id="user-checkout-submit"
        class="input input__submit"
        name="user-checkout-submit"
        type="submit"
        value="Continue"
        :disabled="invalid"
      />
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  name: 'Checkout',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        name: '',
        address: '',
        postalCode: '',
        city: '',
        courses: '',
        amount: '',
        user: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    // async submit() {
    //   if(this.form.name && this.form.address && this.form.city) {
    //     await this.order(this.form)
    //   }
    // }
  },
};
</script>

<style scoped lang="scss">
.checkout {
  &__errors {
    &-item {
      margin-bottom: 0.5rem;
      color: red;
    }
  }
  &__input-fieldset {
    & > div:not(:last-child) {
      margin-right: 1.25rem;
    }
  }
}
</style>
