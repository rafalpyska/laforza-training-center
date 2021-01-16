export default {
  state: {
    trainersLoading: true,
    trainersError: null,
    trainers: [],
    pagination: {
      pageNumber: 1,
      pagesTotal: null,
      start: 0,
      limit: 3,
      totalItems: 0,
    }
  },
  getters: {
    trainersLoadingStatus(state) {
      return state.trainersLoading;
    },
    trainersErrorStatus(state) {
      return state.trainersError;
    },
    trainers(state) {
      return state.trainers;
    },
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
  mutations: {
    SET_TRAINERS(state, trainers) {
      state.trainers = trainers;
    },
    SET_TRAINERS_LOADING(state, loadingStatus) {
      return (state.trainersLoading = loadingStatus);
    },
    SET_TRAINERS_ERROR(state, error) {
      return (state.trainersError = error);
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
  actions: {
    async fetchTrainers({ commit, getters }, { limit = getters.limit, start = getters.start, page = getters.pageNumber }) {
      commit('SET_TRAINERS_LOADING', true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/users?_start=${start}&_limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit('SET_TRAINERS', data || [] );
          commit('SET_TRAINERS_LOADING', false);
          return fetch(
            `${process.env.VUE_APP_API_URL}/users/count`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(response => response.json())
          .then(data => {
            commit('SET_CURRENT_PAGE', page);
            commit('SET_PAGINATION_START', start);
            commit('SET_PAGINATION_TOTAL_ITEMS', data || 0);
            commit('SET_TOTAL_PAGES', { totalItems: getters.pagination.totalItems, limit: limit });
          })
          .catch(error => {
            console.log(error)
          })
        })
        .catch(error => {
          commit('SET_TRAINERS_ERROR', error);
        });
    },
    paginationLoadMore({ commit, dispatch }, { start, pageNumber }) {
      commit('SET_PAGINATION_START_NEXT', start);
      commit('SET_PAGINATION_PAGE_NEXT', pageNumber);
      dispatch('fetchTrainers');
    },
    paginationPrevious({ commit, dispatch }, { start, pageNumber }) {
      commit('SET_PAGINATION_START_PREV', start);
      commit('SET_PAGINATION_PAGE_PREV', pageNumber);
      dispatch('fetchTrainers');
    },
  }
};
