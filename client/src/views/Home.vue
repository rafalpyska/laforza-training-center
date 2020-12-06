<template>
  <section class="section home">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">We help peaople find themselves</h2>
            <p>Many every day looking in the mirror and promise to begin to engage in their  health tomorrow. We will give you the incentive to start</p>
          </div>
          <div class="section__description-encouragement">
            <div class="encouragement-box">
              <p><span class="bold">Start</span> to engage in sports right now!</p>
            </div>
          </div>
        </div>
        <div class="section__content">
          <div class="course course__info">
            <h2 class="course__heading">Boxing</h2>
            <p class="course__description">is improving technique that allows to change the body shape and weight and permanently fix the result achieved. it includes physical training combined with properly chosen diet and exercise.</p>
            <a href="#" class="btn btn__more">More</a>
          </div>
          <div class="course__image-container">
            <img src="../assets/images/home/boxing.jpg" class="course__img" alt="boxing">
          </div>
          <div class="course course__hours">
            <h2 class="course__heading">Course days</h2>
            <p class="course__description">in the cost of employment includes a free consultation train and a sauna with a swimming pool</p>
            <p class="course__description">monday - friday 08:00 - 16:00</p>
            <p class="course__description">saturday 09:30 - 15:30</p>
            <p class="course__description">sunday 09:30 - 15:30</p>
          </div>
          <div class="course__image-container">
            <img src="../assets/images/home/gym.jpg" class="course__img" alt="gym">
          </div>
          <div class="course course__hours">
            <h2 class="course__heading">Course days</h2>
            <p class="course__description">in the cost of employment includes a free consultation train and a sauna with a swimming pool</p>
            <p class="course__description">monday - friday 08:00 - 16:00</p>
            <p class="course__description">saturday 09:30 - 15:30</p>
            <p class="course__description">sunday 09:30 - 15:30</p>
          </div>
          <div class="course course__info">
            <h2 class="course__heading">Gym</h2>
            <p class="course__description">is improving technique that allows to change the body shape and weight and permanently fix the result achieved. it includes physical training combined with properly chosen diet and exercise.</p>
            <a href="#" class="btn btn__more">More</a>
          </div>
          <div class="course course__hours">
            <h2 class="course__heading">Course days</h2>
            <p class="course__description">in the cost of employment includes a free consultation train and a sauna with a swimming pool</p>
            <p class="course__description">monday - friday 08:00 - 16:00</p>
            <p class="course__description">saturday 09:30 - 15:30</p>
            <p class="course__description">sunday 09:30 - 15:30</p>
          </div>
          <div class="course__image-container">
            <img src="../assets/images/home/mma.jpg" class="course__img" alt="mma">
          </div>
          <div class="course course__info">
            <h2 class="course__heading">Mma</h2>
            <p class="course__description">is improving technique that allows to change the body shape and weight and permanently fix the result achieved. it includes physical training combined with properly chosen diet and exercise.</p>
            <a href="#" class="btn btn__more">More</a>
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
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 4rem;
      &-info {
        grid-column: 1/3;
        margin-right: 4em;
      }
      &-encouragement {
        flex: 1 1 40%;
      }
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 25rem;
    }
  }
  .encouragement-box {
    padding: 2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-primary);
  }

  .course {
    padding: 3.5rem 2.5rem;
    &__info {
      color: black;
      background-color: var(--white);
    }
    &__heading {
      font-size: 1.75em;
      text-transform: uppercase;
    }
    &__description {
      font-size: .9em;
      margin: 1em 0;
      text-transform: uppercase;
    }
    &__img {
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }

    &__hours {
      background-color: var(--color-primary);
      &:first-of-type {
        order: 31;
      }
    }
  }
</style>
