<template>
  <div class="go-top">
      <div class="container">
          <div class="row">
            <img src="../assets/images/logos/footer-logo.png" alt="LaFORZA Training Center Logo">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoTop"
};
</script>

<style scoped lang="scss">
    .go-top {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: var(--color-primary);
        &__link {
            display: block;
            wifth: 100%;
            height: 100%;
        }
    }
    .arrow {
        width: 25px;
        height: 25px;
        border: 1px solid var(--white);
    }
</style>