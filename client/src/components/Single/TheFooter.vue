<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="stories">
          <h2 class="footer__heading">Stories</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eligendi earum repudiandae ut dolor perspiciatis aut quod voluptate
            quas laudantium. Perspiciatis repellat vitae rerum earum culpa,
            deleniti totam labore tenetur.
          </p>
        </div>
        <nav class="pages">
          <!-- Align to the bullets of li -->
          <h2 class="footer__heading">Pages</h2>
          <div class="pages__list-wrapper">
            <ul class="pages__list">
              <li class="pages__item">
                <a href="#" class="pages__link">Home</a>
              </li>

              <li class="pages__item">
                <a href="#" class="pages__link">Intro</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Featured</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Plan</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Trainer</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Stories</a>
              </li>
            </ul>
            <ul class="pages__list">
              <li class="pages__item">
                <a href="#" class="pages__link">Home</a>
              </li>

              <li class="pages__item">
                <a href="#" class="pages__link">Intro</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Featured</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Plan</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Trainer</a>
              </li>
              <li class="pages__item">
                <a href="#" class="pages__link">Stories</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="footer__contact">
          <h2 class="footer__heading">Contact</h2>
          <ul class="footer__contact-list">
            <li class="footer__contact__item">
              <i
                class="fas fa-phone-alt footer__contact-icon"
                aria-hidden="true"
              ></i>
              Telephone: +180 09 435 9876
            </li>
            <li class="footer__contact__item">
              <i class="fas fa-fax footer__contact-icon" aria-hidden="true"></i>
              Fax/phone: +180 09 435 9876
            </li>
            <li class="footer__contact__item">
              <i
                class="fas fa-envelope footer__contact-icon"
                aria-hidden="true"
              ></i>
              E-mail: info@laforza.com
            </li>
            <li class="footer__contact__item">
              <i
                class="fas fa-map-marker-alt footer__contact-icon"
                aria-hidden="true"
              ></i>
              Address: LaForza training center
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyrights">
      <div class="container">
        <div class="copyrights">
          <p>Copyright &copy; 2020 Rafał Pyska, based on LaForza theme</p>
          <ul class="social-links__list">
            <li class="social-links__item"></li>
            <li class="social-links__item"></li>
            <li class="social-links__item"></li>
            <li class="social-links__item"></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
};
</script>

<style scoped lang="scss">
.footer {
  font-family: 'Play', sans-serif;
  color: var(--white);
  background-color: var(--footer-bgc);
  font-size: 0.8rem;
  padding-top: 4rem;
  &__heading {
    margin-bottom: 0.75rem;
  }
  &__info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    justify-items: end;
    grid-gap: 2rem;
    @media (max-width: 1280px) {
      padding: 0 5rem;
    }
  }
  &__contact {
    &__list {
      display: flex;
      flex-direction: column;
    }
    &__item:not(:last-child) {
      margin-bottom: 1rem;
    }
    &-icon {
      margin-right: 0.5rem;
    }
  }
  &__copyrights {
    margin-top: 4rem;
    padding: 1.5rem 0;
    background-color: var(--footer-copyrights-bgc);
    @media (max-width: 1280px) {
      padding: 1.5rem 5rem;
    }
  }
}
.pages {
  &__list {
    display: flex;
    flex-direction: column;
    list-style-type: square;
    &-wrapper {
      display: flex;
    }
    &:first-of-type {
      margin-right: 3rem;
    }
  }
  &__item {
    &::marker {
      color: var(--list-marker);
    }
  }
  &__link:link,
  &__link:visited {
    color: var(--white);
  }
  &__link:focus,
  &__link:hover,
  &__link:active {
    color: var(--color-primary);
  }
}
</style>
