<template>
  <section class="section contact">
    <div class="container">
      <div class="contact__container">
        <div class="contact__form">
          <div class="contact__info">
            <h2 class="color-primary">We will be happy to answer</h2>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. Nullam quis ante.
            </p>
          </div>
          <form class="contact__form" action="">
            <fieldset class="input__fieldset">
              <label class="visuallyhidden" for="contact-company"
                >Full name</label
              >
              <input
                class="input contact__company"
                id="contact-full-name"
                name="contact-company"
                type="text"
                placeholder="Full name *"
                required
              />
              <label class="visuallyhidden" for="contact-email"
                >Your email address</label
              >
              <input
                class="input contact__email"
                id="contact-email"
                name="contact-email"
                type="email"
                placeholder="Your email *"
                required
              />
            </fieldset>
            <fieldset class="input__fieldset">
              <label class="visuallyhidden" for="contact-subject"
                >Subject</label
              >
              <input
                class="input contact__subject"
                id="contact-subject"
                name="contact-subject"
                type="text"
                placeholder="Subject *"
                required
              />
              <label class="visuallyhidden" for="contact-company">Phone</label>
              <input
                class="input contact__company"
                id="contact-phone"
                name="contact-phone"
                type="text"
                placeholder="Phone"
              />
            </fieldset>

            <label class="visuallyhidden" for="contact-message"
              >Type your message here</label
            >
            <textarea
              class="input contact__message"
              name="contact-message"
              id="contact-message"
              placeholder="Your message"
              required
            ></textarea>
            <label class="visuallyhidden" for="contact-submit"
              >Submit your message</label
            >
            <input
              id="contact-submit"
              class="input input__submit"
              name="contact-submit"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
        <div class="contact__details">
          <div class="contact__info">
            <h2 class="color-primary">Head office</h2>
            <p>
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero.
            </p>
            <ul class="contact__info-list">
              <li class="contact__info-item">
                <i
                  class="fas fa-map-marked-alt contact__icon"
                  aria-hidden="true"
                >
                  <span class="visuallyhidden">Address</span>
                </i>
                <p>
                  LaForza training center
                  <span>USA California 900 Samoset Drive. DE1-023-45-67</span>
                </p>
              </li>
              <li class="contact__info-item">
                <i class="fas fa-mobile-alt contact__icon" aria-hidden="true">
                  <span class="visuallyhidden">Contact number</span>
                </i>
                + 180 09 345 9876
              </li>
              <li class="contact__info-item">
                <i
                  class="fas fa-envelope-open-text contact__icon"
                  aria-hidden="true"
                >
                  <span class="visuallyhidden">E-mail</span>
                </i>
                info@domain.com
              </li>
              <li class="contact__info-item">
                <i class="fas fa-lock-open contact__icon" aria-hidden="true">
                  <span class="visuallyhidden">Opening hours</span>
                </i>
                Mon - Sat 8.00 - 19.00
              </li>
            </ul>
          </div>
          <BaseDivider />
          <div class="contact__info">
            <h2 class="color-primary">Branch office</h2>
            <p>
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero.
            </p>
            <ul class="contact__info-list">
              <li class="contact__info-item">
                <i
                  class="fas fa-map-marked-alt contact__icon"
                  aria-hidden="true"
                >
                  <span class="visuallyhidden">Address</span>
                </i>
                <p>
                  LaForza training center
                  <span>USA California 900 Samoset Drive. DE1-023-45-67</span>
                </p>
              </li>
              <li class="contact__info-item">
                <i class="fas fa-mobile-alt contact__icon" aria-hidden="true">
                  <span class="visuallyhidden">Contact number</span>
                </i>
                + 180 09 345 9876
              </li>
              <li class="contact__info-item">
                <i
                  class="fas fa-envelope-open-text contact__icon"
                  aria-hidden="true"
                >
                  <span class="visuallyhidden">E-mail</span>
                </i>
                info@domain.com
              </li>
              <li class="contact__info-item">
                <i class="fas fa-lock-open contact__icon" aria-hidden="true">
                  <span class="visuallyhidden">Opening hours</span>
                </i>
                Mon - Sat 8.00 - 19.00
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="map">
        <iframe
          class="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25215.625657884106!2d144.956637!3d-37.81456500000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e793770d3%3A0x9e44d6ad0d76ba7c!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1435061406583"
          height="400"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped lang="scss">
.contact {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 2rem;
    font-size: 0.8rem;
    @media (max-width: 640px) {
      grid-gap: 0;
      row-gap: 2rem;
    }
  }
  &__info {
    margin-bottom: 2rem;
    &-list {
      margin-top: 1rem;
    }
    &-item {
      display: flex;
    }
  }
  &__form {
    grid-column: 1/3;
  }
  &__icon {
    width: 20px;
    margin-top: 0.2rem;
    margin-right: 0.5rem;
    text-align: center;
  }
  &__details {
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
  }
}
.map {
  grid-column: 1/-1;
  &-iframe {
    width: 100%;
    border: none;
  }
}
</style>
