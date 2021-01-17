<template>
  <div class="pagination">
      <BaseButton :disabled="pagination.pageNumber === 1" @click="moveBack" btnType="load-more" class="previous">Previous</BaseButton>
      <BaseButton :disabled="pagination.pageNumber >= pagination.pagesTotal" @click="loadMore" btnType="load-more">Next</BaseButton>
  </div>  
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    pagination: {
      type: Object,
      required: true
    },
    next: {
      type: String,
      required: true
    },
    previous: {
      type: String,
      required: true
    }
  },
  methods: {
    async loadMore() {
      // should I store fetched records in data, in order not to fetch all
      // the time over again when a user would like to move back?
      if(this.pagination.start <= this.pagination.limit) {
        await this.$store.dispatch(this.next, { start: this.pagination.start, pageNumber: this.pagination.pageNumber })
          .then(() => {
            this.$router.push({ name: "Trainers", params: { page: this.pagination.pageNumber } })
          })
      }
    },
    async moveBack() {
      if(this.pagination.start !== 0) {
        await this.$store.dispatch(this.previous, { start: (Number(this.$route.params.page) - 1) * this.pagination.limit, pageNumber: this.pagination.pageNumber })
          .then(() => {
            this.$router.push({ name: "Trainers", params: { page: this.pagination.pageNumber } })
          })
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .previous {
    margin-right: 1rem;
  }
</style>