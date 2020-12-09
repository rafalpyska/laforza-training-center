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
          <ul class="contacts__list">
            <!-- TODO: Fontawesome doesn't work on Vue 3 - do something with icons -->
            <li class="contacts__item">Telephone: +180 09 435 9876</li>
            <li class="contacts__item">Fax/phone: +180 09 435 9876</li>
            <li class="contacts__item">E-mail: info@laforza.com</li>
            <li class="contacts__item">Address: LaForza training center</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer__copyrights">
        <div class="copyrights">
        <p>Copyright &copy; 2020 Rafał Pyska, based on LaForza theme</p>
        <ul class="social-links__list">
          <!-- TODO: Fontawesome doesn't work on Vue 3 - do something with icons -->
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
    padding: 2rem;
    color: var(--white);
    background-color: var(--footer-bgc);
    font-size: .85rem;
    &__info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      justify-items: end;
      grid-gap: 2rem;
    }
    &__copyrights {
      margin-top: 2rem;
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
