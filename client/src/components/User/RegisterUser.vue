<template>
  <div class="register-component">
    <ValidationObserver v-slot="{ handleSubmit, invalid }">
      <form class="register__form" name="register-form" @submit.prevent="handleSubmit(submit)">
        <label class="visuallyhidden" for="contact-company"
          >Username</label
        >
        <ValidationProvider name="Username" v-slot="{ errors, failed, valid }" rules="min:3">
          <span :class="`is-${valid}`">
            <i v-if="failed" class="fas fa-exclamation-triangle"></i>
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
            <i v-if="failed" class="fas fa-exclamation-triangle"></i>
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
            <i v-if="failed" class="fas fa-exclamation-triangle"></i>
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
          class="input register__submit"
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
import { mapActions } from 'vuex';
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
  .is-false {
    display: block;
    margin-bottom: .5rem;
    color: red;
  }
</style>
