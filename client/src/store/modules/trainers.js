export default {
  state: {
    trainersLoading: true,
    trainersError: null,
    trainers: [],
    pagination: {
      page: 1,
      start: 0,
      limit: 3,
      total: 0,
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
    page(state) {
      return state.pagination.page;
    },
    start(state) {
      return state.pagination.start;
    },
    limit(state) {
      return state.pagination.limit
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
    SET_PAGINATION_PAGE_NEXT(state, page) {
      return (state.pagination.page += page);
    },
    SET_PAGINATION_START_PREV(state, start) {
      return (state.pagination.start -= start)
    },
    SET_PAGINATION_PAGE_PREV(state, page) {
      return (state.pagination.page -= page);
    },
    SET_PAGINATION_TOTAL(state, total) {
      return (state.pagination.total = total);
    }
  },
  actions: {
    async fetchTrainers({ commit, getters }) {
      commit('SET_TRAINERS_LOADING', true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/users?_start=${getters.start}&_limit=${getters.limit}`,
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
            commit('SET_PAGINATION_TOTAL', data || 0);
          })
          .catch(error => {
            console.log(error)
          })
        })
        .catch(error => {
          commit('SET_TRAINERS_ERROR', error);
        });
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
  }
};
