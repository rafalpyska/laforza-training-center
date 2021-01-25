<template>
  <div class="register-component">
    <form class="register__form" name="register-form">
      <label class="visuallyhidden" for="contact-company"
        >Username</label
      >
      <input
        v-model="form.username"
        class="input register__username"
        id="contact-full-name"
        name="user-username"
        type="text"
        placeholder="Your username"
        required
      />
      <label class="visuallyhidden" for="contact-email"
        >Your email address</label
      >
      <input
        v-model="form.email"
        class="input register__email"
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
        class="input register__password"
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
        class="input register__submit"
        name="user-register"
        type="submit"
        value="Register"
      />
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "RegisterUser",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    submit() {
      this.register(this.form)
    }
    //     error.response.data.message.forEach(err => {
    //       err.messages.forEach((e) => {
    //         this.error = e.message;
    //       })
    //     })
  
  }
};
</script>

<style scoped lang="scss">

</style>
