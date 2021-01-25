<template>
  <div class="register-component">
    <form class="register__form">
      <label class="visuallyhidden" for="contact-email"
        >Your email address</label
      >
      <input
        v-model="form.identifier"
        class="input login__email"
        id="user-email"
        name="user-email"
        type="email"
        placeholder="Your email *"
        required
      />

      <label class="visuallyhidden" for="contact-subject"
        >Password</label
      >
      <input
        v-model="form.password"
        class="input login__password"
        id="user-password"
        name="user-password"
        type="password"
        placeholder="Your password *"
        required
      />
      <label class="visuallyhidden" for="contact-submit"
        >Register</label
      >
      <input
        @click.prevent="submit"
        id="user-register"
        class="input login__submit"
        name="user-register"
        type="submit"
        value="Login"
      />
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "LoginUser",
  data() {
    return {
      form: {
        identifier: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    submit() {
      this.login(this.form)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
