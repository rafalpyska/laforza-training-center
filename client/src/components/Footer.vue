<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="stories">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi earum repudiandae ut dolor perspiciatis aut quod voluptate quas laudantium. Perspiciatis repellat vitae rerum earum culpa, deleniti totam labore tenetur.</p>
        </div>
        <div class="pages">
          <ul class="pages__list">
            <li class="pages__item">Home</li>
            <li class="pages__item">Intro</li>
            <li class="pages__item">Featured</li>
            <li class="pages__item">Plan</li>
            <li class="pages__item">Trainer</li>
            <li class="pages__item">Stories</li>
          </ul>
          <ul class="pages__list">
            <li class="pages__item">Home</li>
            <li class="pages__item">Intro</li>
            <li class="pages__item">Featured</li>
            <li class="pages__item">Plan</li>
            <li class="pages__item">Trainer</li>
            <li class="pages__item">Stories</li>
          </ul>
        </div>
        <div class="contacts">
          <ul class="contacts__list">
            <li class="contacts__item">Telephone: +180 09 435 9876</li>
            <li class="contacts__item">Fax/phone: +180 09 435 9876</li>
            <li class="contacts__item">E-mail: info@laforza.com</li>
            <li class="contacts__item">Adress: LaForza training center</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
  .footer {
    padding: 2rem;
    color: var(--white);
    background-color: var(--footer-bgc);
  }
  .pages {
    display: flex;
    &__list {
      display: flex;
      flex-direction: column;
    }
  }
  .contacts {
    &__list {
      display: flex;
      flex-direction: column;
    }
    &__item:not(:first-child) {
      padding: 1em 0;
    }
  }
</style>
