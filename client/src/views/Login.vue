<template>
  <section class="section register">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Login</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <UserLogin />
    </div>
  </section>
</template>
<script>
import UserLogin from '@/components/User/UserLogin';
export default {
  name: 'Login',
  components: {
    UserLogin,
  },
};
</script>

<style scoped lang="scss"></style>
