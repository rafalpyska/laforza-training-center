<template>
  <div class="go-top">
      <div class="container">
          <div class="go-top-wrapper">
              <div class="go-top__logo-container">
                <img src="../assets/images/logos/footer-logo.png" alt="LaFORZA Training Center Logo">
              </div>

            <div class="arrow">
                <a href="#home" class="go-top__link">

                </a>
            </div>
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
        background-color: var(--color-primary);
        &-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
        }
        &__logo-container {
            grid-column: 1/3;
        }
        &__link {
            display: block;
        }
    }
    .arrow {
       justify-self: end;
        width: 25px;
        height: 25px;
        border: 1px solid var(--white);
        &-icon {
            fill: #fff;
            width: 50px;
            height: 50px;
        }
    }
</style>