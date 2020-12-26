<template>
  <section class="section home">
    <div class="container">
      <div class="section__description">
        <div class="section__description-info">
          <h2 class="color-primary">We help peaople find themselves</h2>
          <p>
            Many every day looking in the mirror and promise to begin to engage
            in their health tomorrow. We will give you the incentive to start
          </p>
        </div>
        <div class="section__description-encouragement">
          <div class="encouragement-box">
            <p>
              <span class="bold">Start</span> to engage in sports right now!
            </p>
          </div>
        </div>
      </div>
      <app-loading-spinner v-if="loadingStatus" />
      <classes-home
        v-for="(course, index) in classes"
        :key="course.id"
        :course="course"
        :idx="index"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ClassesHome from '../components/ClassesHome';
import AppLoadingSpinner from '../components/Base/AppLoadingSpinner';

export default {
  name: 'Home',
  components: {
    ClassesHome,
    AppLoadingSpinner
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
