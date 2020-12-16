<template>
  <section class="section contact container">
    <div class="contact__form">
      <div class="contact__info">
        <h2 class="color-primary">We will be happy to answer</h2>
        <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
      </div>
      <form class="contact__form" action="">
        <div class="contact__fieldset">
          <label class="visuallyhidden" for="contact-company">Full name</label>
          <input class="input contact__company" id="contact-full-name" name="contact-company" type="text" placeholder="Full name *">
          <label class="visuallyhidden" for="contact-email">Your email address</label>
          <input class="input contact__email" id="contact-email" name="contact-email" type="email" placeholder="Your email" required>
        </div>  
        <div class="contact__fieldset">
          <label class="visuallyhidden" for="contact-subject">Subject</label>
          <input class="input contact__subject" id="contact-subject" name="contact-subject" type="text" placeholder="Subject" required>
          <label class="visuallyhidden" for="contact-company">Phone</label>
          <input class="input contact__company" id="contact-phone" name="contact-phone" type="text" placeholder="Phone">
        </div>

        <label class="visuallyhidden" for="contact-message">Type your message here</label>
        <textarea class="input contact__message" name="contact-message" id="contact-message" placeholder="Your message" required></textarea>
        <label class="visuallyhidden" for="contact-submit">Submit your message</label>
        <input id="contact-submit" class="input input__submit" name="contact-submit" type="submit" value="Send Message">
      </form>
    </div>
    <div class="contact__details">
      <div class="contact__info">
        <h2 class="color-primary">Head office</h2>
        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.</p>
      </div>
      <AppDivider />
      <div class="contact__info">  
        <h2 class="color-primary">Branch office</h2>
        <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.</p>
      </div>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25215.625657884106!2d144.956637!3d-37.81456500000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e793770d3%3A0x9e44d6ad0d76ba7c!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1435061406583" height="400" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
import AppDivider from '../components/AppDivider'

export default {
  name: "Contact",
  components: {
    AppDivider
  }
};
</script>

<style scoped lang="scss">
  .contact {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    font-size: .8rem;
    &__info {
      margin-bottom: 2rem;
    }
    &__form {
      grid-column: 1/3;
    }
  }
  .map {
    width: 100%;
    border: none;
  }
</style>