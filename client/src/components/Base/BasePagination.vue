<template>
  <div class="pagination">
      <BaseButton :disabled="pagination.page === 1" @click="moveBack" btnType="load-more" class="previous">Previous</BaseButton>
      <BaseButton @click="loadMore" btnType="load-more">Next</BaseButton>
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
  data() {
    return {
      start: 3,
      page: 1
    }
  },
  methods: {
    async loadMore() {
      // should I store fetched records in data, in order not to fetch all
      // the time over again when a user would like to move back?
      if(this.pagination.start <= this.pagination.limit) {
        await this.$store.dispatch(this.next, { start: this.start, page: this.page });
      }
    },
    async moveBack() {
      if(this.pagination.start !== 0) {
        await this.$store.dispatch(this.previous, { start: this.start, page: this.page });
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