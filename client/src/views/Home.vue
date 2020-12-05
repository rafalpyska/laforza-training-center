<template>
  <section class="section home">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2>We help peaople find themselves</h2>
            <p>Many every day looking in the mirror and promise to begin to engage in their  health tomorrow. We will give you the incentive to start</p>
          </div>
          <div class="section__description-encouragement">
            <div class="encouragement-box">
              <p><span class="bold">Start</span> to engage in sports right now!</p>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
  .section {
    &__description {
      display: flex;
      justify-content: space-between;
      &-info {
        flex: 1 1 70%;
        flex-direction: column;
        justify-content: center;
        margin-right: 4em;
      }
      &-encouragement {
        flex: 1 1 40%;
      }
    }
  }
  .encouragement-box {
    padding: 2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-primary);
  }
</style>
