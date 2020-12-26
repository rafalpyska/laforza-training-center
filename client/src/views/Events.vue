<template>
  <section class="section events">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="section__title color-primary">Events</h2>
          <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
        </div>
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

<style scoped lang="scss"></style>
