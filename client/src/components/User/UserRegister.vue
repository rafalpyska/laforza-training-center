<template>
  <div class="register-component">
    <p class="is-false" v-if="error">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
      {{ error.message }}
    </p>
    <p class="is-true" v-if="success">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
      {{ success }}
    </p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
      <form class="register__form" name="register-form" @submit.prevent="handleSubmit(submit)">
        <label class="visuallyhidden" for="contact-company"
          >Username</label
        >
        <ValidationProvider name="Username" v-slot="{ errors, failed, valid }" rules="min:3">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            {{ errors[0] }}
          </span>
          <input
            v-model="form.username"
            class="input register__username"
            id="user-register-username"
            name="user-register-username"
            type="text"
            placeholder="Your username"
            required
          />
        </ValidationProvider>
        <label class="visuallyhidden" for="contact-email"
          >Your email address</label
        >
        <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors, failed, valid }">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            {{ errors[0] }}
          </span>
          <input
            v-model="form.email"
            class="input register__email"
            id="user-register-email"
            name="user-register-email"
            type="email"
            placeholder="Your email *"
          />
        </ValidationProvider>
        <label class="visuallyhidden" for="contact-subject"
          >Password</label
        >
        <ValidationProvider name="Password" v-slot="{ errors, failed, valid }" rules="required|minmax:3,10">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            {{ errors[0] }}
          </span>
          <input
            v-model="form.password"
            class="input register__password"
            id="user-register-password"
            name="user-register-password"
            type="password"
            placeholder="Your password *"
          />
        </ValidationProvider>
        <label class="visuallyhidden" for="contact-submit"
          >Register</label
        >
        <input
          id="user-register-submit"
          class="input input__submit"
          name="user-register-submit"
          type="submit"
          value="Register"
          :disabled="invalid"
        />
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  name: "RegisterUser",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      error: 'auth/registerError',
      success: 'auth/registerSuccessMessage'
    })
  },
  created() {
    if(this.isAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    async submit() {
      if(this.form.username && this.form.email && this.form.password) {
        await this.register(this.form)
        this.form.username = this.form.email = this.form.password = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        })
      }
    } 
  }
};
</script>

<style scoped lang="scss">
  .is {
    &-false {
      display: block;
      margin-bottom: .5rem;
      color: red;
    }
    &-true {
      display: block;
      margin-bottom: .5rem;
      color:white;
    }
  }
</style>
