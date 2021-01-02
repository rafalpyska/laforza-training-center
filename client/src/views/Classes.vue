<template>
  <section class="section classes container">
    <div class="section__info">
      <div class="section__info-titles-container">
        <h2 class="section__title color-primary">Classes</h2>
        <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
      </div>
    </div>
    <AppLoadingSpinner v-if="loadingStatus" />
    <ClassesList
      v-else
      v-for="course in classes"
      :key="course.id"
      :course="course"
    />
    <MiniCart />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import MiniCart from '../components/MiniCart';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';
import ClassesList from '../components/Classes/ClassesList';

export default {
  name: 'Classes',
  components: {
    AppLoadingSpinner,
    ClassesList,
    MiniCart
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus', 'classes'])
  },
  async created() {
    if (this.classes && this.classes.length > 0) return;
    try {
      await this.$store.dispatch('fetchClasses');
    } catch (e) {
      this.errorStatus = e;
    }
  }
};
</script>

<style scoped lang="scss"></style>
