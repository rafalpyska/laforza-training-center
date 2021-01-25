<template>
  <section class="section register">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Register</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <RegisterUser />
    </div>
  </section>
</template>
<script>
import RegisterUser from '@/components/User/RegisterUser'
export default {
  name: "Register",
  components: {
    RegisterUser
  }
};
</script>

<style scoped lang="scss">

</style>
