<template>
  <section class="section stories">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">Client Stories</h2>
          <p>Etiam rhoncus. Maecenas tempus</p>
        </div>
      </div>
      <div class="stories__info">
        <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
        <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
      </div>
    </div>
    <ActionStrip>
      <template v-slot:first-column>
        <p class="action-strip__name">Client Stories</p>
      </template>
      <template v-slot:last-column>
        <AppButton type="send-story">
          Send story
        </AppButton>
      </template>
    </ActionStrip>
    <div class="stories__list-wrapper">
      <div class="stories__list container">
        <ClientStory />
        <ClientStory />
        <ClientStory />
        <ClientStory />
        <ClientStory />
        <ClientStory />
      </div>
    </div>
  </section>
</template>

<script>

import ClientStory from '../components/ClientStory'
import ActionStrip from "@/components/ActionStrip.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  name: "Stories",
  components: {
    ClientStory,
    ActionStrip,
    AppButton
  }
};
</script>

<style scoped lang="scss">
  .stories {
    &__info, &__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 4rem;
    }
    &__info {
      font-size: .8rem;
      margin-bottom: 4rem;
    }
    &__list {
      padding: 4rem 0;
      &-wrapper {
        // background-color: var(--stories-list-bgc);
      }
    }
  }
</style>
