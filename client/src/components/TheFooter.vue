<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="stories">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi earum repudiandae ut dolor perspiciatis aut quod voluptate quas laudantium. Perspiciatis repellat vitae rerum earum culpa, deleniti totam labore tenetur.</p>
        </div>
        <nav class="pages">
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
        </nav>
        <div class="contacts">
          <h2>Contacts</h2>
          <ul class="contacts__list">
            <li class="contacts__item">
              <i class="fas fa-phone-alt" aria-hidden="true"></i>
              Telephone: +180 09 435 9876
              </li>
            <li class="contacts__item">
              <i class="fas fa-fax" aria-hidden="true"></i>
              Fax/phone: +180 09 435 9876
              </li>
            <li class="contacts__item">
              <i class="fas fa-envelope" aria-hidden="true"></i>
              E-mail: info@laforza.com</li>
            <li class="contacts__item">
              <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
              Address: LaForza training center</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyrights">
      <div class="container">
        <div class="copyrights">
          <p>Copyright &copy; 2020 Rafał Pyska, based on LaForza theme</p>
          <ul class="social-links__list">
            <li class="social-links__item">

            </li>
            <li class="social-links__item">

            </li>
            <li class="social-links__item">

            </li>
            <li class="social-links__item">

            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "TheFooter"
};
</script>

<style scoped lang="scss">
  .footer {
    font-family: 'Play', sans-serif;
    color: var(--white);
    background-color: var(--footer-bgc);
    font-size: .8rem;
    padding-top: 4rem;
    &__info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      justify-items: end;
      grid-gap: 2rem;
    }
    &__copyrights {
      margin-top: 4rem;
      padding: 1.5rem 0;
      background-color: var(--footer-copyrights-bgc);
    }
  }
  .pages {
    display: flex;
    &__list {
      display: flex;
      flex-direction: column;
      list-style-type: square;
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
  .contacts {
    &__list {
      display: flex;
      flex-direction: column;
    }
    &__item:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>
