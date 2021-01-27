<template>
  <div class="login-component">
    <p class="is-false" v-if="error">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
      {{ error.message }}
    </p>
    <ValidationObserver v-slot="{ handleSubmit, invalid }">
      <form class="login__form" name="login-form" @submit.prevent="handleSubmit(submit)">
        <label class="visuallyhidden" for="contact-email"
          >Your email address</label
        >
        <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors, failed, valid }">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            {{ errors[0] }}
          </span>
          <input
            v-model="form.identifier"
            class="input input__email"
            id="user-login-email"
            name="user-login-email"
            type="email"
            placeholder="Your email *"
            required
          />
        </ValidationProvider>
        <label class="visuallyhidden" for="contact-subject"
          >Password</label
        >
        <ValidationProvider name="Password" v-slot="{ errors, failed, valid }" rules="required">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle" aria-hidden="true"></i>
            {{ errors[0] }}
          </span>
          <input
            v-model="form.password"
            class="input input__password"
            id="user-login-password"
            name="user-login-password"
            type="password"
            placeholder="Your password *"
            required
          />
        </ValidationProvider>
        <label class="visuallyhidden" for="contact-submit"
          >Register</label
        >
        <input
          @click.prevent="submit"
          id="user-login-submit"
          class="input input__submit"
          name="user-login-submit"
          type="submit"
          value="Login"
          :disabled="invalid"
        />
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  name: "UserLogin",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        identifier: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      error: 'auth/loginError'
    })
  },
  created() {
    if(this.isAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    ...mapMutations({
      clearErrors: 'auth/CLEAR_LOGIN_ERRORS',
    }),
    async submit() {
      this.clearErrors();
      if(this.form.identifier && this.form.password) {
        await this.login(this.form)
          .then(() => {
            if(this.error === null) {
              this.$router.push('/profile');
            }
          })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .login-component {
    min-width: 12rem;
    max-width: 40rem;
  }
  .is-false {
    display: block;
    margin-bottom: .5rem;
    color: red;
  }
</style>
