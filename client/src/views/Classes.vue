<template>
  <section class="section classes">
      <div class="container">
        <div class="section__description">
          <div class="section__description-info">
            <h2 class="color-primary">Classes</h2>
            <p>Etiam rhoncus. Maecenas tempus</p>
          </div>
        </div>
        <ClassesList />
    </div>
  </section>
</template>

<script>
import ClassesList from "../components/ClassesList";

export default {
  name: "Classes",
  components: {
      ClassesList
  }
};
</script>

<style scoped lang="scss">

</style>