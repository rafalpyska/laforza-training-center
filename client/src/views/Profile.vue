<template>
  <section class="section profile">
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">Your profile</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <article class="user">
        <p>Hello, <span class="bold text-uppercase color-primary">{{ currentUser.username }}</span></p>
        <p>Your e-mail address: {{ currentUser.email }}</p>
        <div class="user__orders">
          <h3>Your order history:</h3>
        </div>
      </article>

    </div>
  </section>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if(Object.keys(this.currentUser).length === 0 && this.currentUser.constructor === Object) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped lang="scss">
  .user-profile {
    padding: 1rem 2rem;
    background-color: var(--courses-bundle-bgc);
    color: white;
    margin-bottom: 0.25rem;
  }
</style>
