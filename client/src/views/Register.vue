<template>
  <section class="section register">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Register</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <UserRegister />
    </div>
  </section>
</template>
<script>
import UserRegister from '@/components/User/UserRegister'
export default {
  name: "Register",
  components: {
    UserRegister
  }
};
</script>

<style scoped lang="scss">

</style>
