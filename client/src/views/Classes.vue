<template>
  <section class="section classes container">
    <div class="section__info">
      <div class="section__info-titles-container">
        <h2 class="section__title color-primary">Classes</h2>
        <p class="section__subtitle">Etiam rhoncus. Maecenas tempus</p>
      </div>
    </div>
    <BaseLoadingSpinner v-if="classesLoadingStatus" />
    <ClassesList
      v-else
      v-for="course in classes"
      :key="course.id"
      :course="course"
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ClassesList from "../components/Classes/ClassesList";

export default {
  name: "Classes",
  components: {
    ClassesList
  },
  computed: {
    ...mapGetters(["classesLoadingStatus", "classesErrorStatus", "classes"])
  },
  async created() {
    if (this.classes && this.classes.length > 0) return;
    await this.$store.dispatch("fetchClasses");
  }
};
</script>

<style scoped lang="scss"></style>
