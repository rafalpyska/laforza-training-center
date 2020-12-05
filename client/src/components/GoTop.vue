<template>
  <div class="go-top">
      <div class="container">
          <div class="row">
            <h2>LaFORZA</h2>
            <div class="arrow"></div>
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
    }
    .arrow {
        width: 25px;
        height: 25px;
        border: 1px solid var(--white);
    }
</style>