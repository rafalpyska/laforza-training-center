<template>
<BaseLoadingSpinner v-if="classesLoadingStatus && bundlesLoadingStatus" />
  <section class="section home" v-else>
    <div class="container">
      <div class="section__info">
        <div class="section__info-titles-container">
          <h2 class="section__title color-primary">
            We help people find themselves
          </h2>
          <p class="section__subtitle">
            Many every day looking in the mirror and promise to begin to engage
            in their health tomorrow. We will give you the incentive to start
          </p>
        </div>
        <div class="section__info-encouragement">
          <div class="encouragement-box">
            <p>
              <span class="bold">Start</span> to engage in sports right now!
            </p>
          </div>
        </div>
      </div>
      
      <ClassesHome
        v-for="(course, index) in classes"
        :key="course.id"
        :course="course"
        :idx="index"
      />
    </div>
    <Shortcut />
  </section>
  
</template>

<script>
import { mapGetters } from 'vuex';
import ClassesHome from '../components/ClassesHome';
import Shortcut from '../components/Shortcut';

export default {
  name: 'Home',
  components: {
    ClassesHome,
    Shortcut
  },
  computed: {
    ...mapGetters([
      'classesLoadingStatus',
      'classesErrorStatus',
      'classes',
      'bundlesLoadingStatus',
      'bundlesErrorStatus',
    ])
  },
  async created() {
    if (this.classes && this.classes.length > 0) return;
    await this.$store.dispatch('fetchClasses');
  }
};
</script>

<style scoped lang="scss"></style>
