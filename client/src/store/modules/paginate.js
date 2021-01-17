export default function paginate({ dataModel }) {
  return {
    actions: {
      async fetchPage({ commit, dispatch }, query = {}) {
        const payload = { query };
        const fetchedItems = await dispatch(dataModel, payload);
        commit('SET_DATA', { fetchedItems })
      },
      paginationLoadMore({ commit, dispatch }, { start, page }) {
        commit('SET_PAGINATION_START_NEXT', start);
        commit('SET_PAGINATION_PAGE_NEXT', page);
        dispatch('fetchTrainers');
      },
      paginationPrevious({ commit, dispatch }, { start, page }) {
        commit('SET_PAGINATION_START_PREV', start);
        commit('SET_PAGINATION_PAGE_PREV', page);
        dispatch('fetchTrainers');
      },
    },
    mutations: {
      SET_DATA(state, { fetchedItems }) {
        state.fetchedItems = fetchedItems;
      },
      SET_PAGINATION_START_NEXT(state, start) {
        return (state.pagination.start += start)
      },
      SET_PAGINATION_PAGE_NEXT(state) {
        return (state.pagination.pageNumber += 1);
      },
      SET_PAGINATION_START_PREV(state, start) {
        return (state.pagination.start -= start)
      },
      SET_PAGINATION_PAGE_PREV(state) {
        return (state.pagination.pageNumber -= 1);
      },
      SET_PAGINATION_TOTAL_ITEMS(state, totalItems) {
        return (state.pagination.totalItems = totalItems);
      },
      SET_PAGINATION_LIMIT(state, limit) {
        return (state.pagination.limit = limit)
      },
      SET_TOTAL_PAGES(state, { totalItems, limit }) {
        return (state.pagination.pagesTotal = Math.ceil(totalItems/limit))
      },
      SET_CURRENT_PAGE(state, pageNumber) {
        return (state.pagination.pageNumber = pageNumber)
      },
      SET_PAGINATION_START(state, start) {
        return (state.pagination.start = start)
      }
    },
    getters: {
      pagination(state) {
        return state.pagination;
      },
      pageNumber(state) {
        return state.pagination.pageNumber;
      },
      pagesTotal(state) {
        return state.pagination.pagesTotal;
      },
      start(state) {
        return state.pagination.start;
      },
      limit(state) {
        return state.pagination.limit;
      }
    },
    state: {
      fetchedData: null,
      pagination: {
        pageNumber: 1,
        pagesTotal: null,
        start: 0,
        limit: 3,
        totalItems: 0,
      }
    }
  }
};
