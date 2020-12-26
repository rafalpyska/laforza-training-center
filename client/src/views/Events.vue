<template>
  <section class="section events">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="section__title color-primary">Events</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="events__info">
        <div class="events__info-description">
          <p class="events__info-description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi perspiciatis similique quis dolorem aut, temporibus odio autem quae cupiditate cumque debitis molestias provident sapiente vitae. Dolore mollitia quos necessitatibus.</p>
          <p class="events__info-description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi perspiciatis similique quis dolorem aut, temporibus odio autem quae cupiditate cumque debitis molestias provident sapiente vitae. Dolore mollitia quos necessitatibus.</p>
          <p class="events__info-description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi perspiciatis similique quis dolorem aut, temporibus odio autem quae cupiditate cumque debitis molestias provident sapiente vitae. Dolore mollitia quos necessitatibus.</p>  
        </div>
        <figure class="events__info-image">
          <img src="" alt="" class="image">
          <figcaption></figcaption>
        </figure>
      </div>
      <events-calendar />
    </div>
  </section>
</template>

<script>
import EventsCalendar from '../components/Events/EventsCalendar';
export default {
  name: 'Events',
  components: {
    EventsCalendar
  }
};
</script>

<style scoped lang="scss">
  .events {
    &__info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
      grid-gap: 2rem;
      margin-bottom: 2rem;
      &-description {
        grid-column: span 2;
        &-paragraph {
          &:not(:last-of-type) {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>
