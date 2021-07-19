import Api from '@/services/Api';

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
    },
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
    },
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
      return (state.pagination.start += start);
    },
    SET_PAGINATION_PAGE_NEXT(state) {
      return (state.pagination.pageNumber += 1);
    },
    SET_PAGINATION_START_PREV(state, start) {
      return (state.pagination.start -= start);
    },
    SET_PAGINATION_PAGE_PREV(state) {
      return (state.pagination.pageNumber -= 1);
    },
    SET_PAGINATION_LIMIT(state, limit) {
      return (state.pagination.limit = limit);
    },
    SET_PAGINATION_TOTAL_ITEMS(state, { totalItems, limit }) {
      return (state.pagination.pagesTotal = Math.ceil(totalItems / limit));
    },
    SET_CURRENT_PAGE(state, pageNumber) {
      return (state.pagination.pageNumber = pageNumber);
    },
    SET_PAGINATION_START(state, start) {
      return (state.pagination.start = start);
    },
  },
  actions: {
    async fetchTrainers(
      { commit, dispatch, getters },
      {
        page = getters.pageNumber,
        start = getters.start,
        limit = getters.limit,
      },
    ) {
      commit('SET_TRAINERS_LOADING', true);
      return await Api()
        .get(`/trainers?_start=${start}&_limit=${limit}`)
        .then(respone => {
          commit('SET_TRAINERS', respone.data || []);
          commit('SET_TRAINERS_LOADING', false);
          dispatch('getTrainersCount', { page, start, limit });
        })
        .catch(error => {
          commit('SET_TRAINERS_ERROR', error);
        });
    },
    async getTrainersCount(
      { commit, getters },
      {
        page = getters.pageNumber,
        start = getters.start,
        limit = getters.limit,
      },
    ) {
      return await Api()
        .get('/trainers/count')
        .then(response => {
          commit('SET_CURRENT_PAGE', page);
          commit('SET_PAGINATION_START', start);
          commit('SET_PAGINATION_TOTAL_ITEMS', {
            totalItems: response.data,
            limit: limit,
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    paginationLoadMore({ commit, dispatch }, { start }) {
      commit('SET_PAGINATION_START_NEXT', start);
      commit('SET_PAGINATION_PAGE_NEXT');
      dispatch('fetchTrainers');
    },
    paginationPrevious({ commit, dispatch }, { start }) {
      commit('SET_PAGINATION_START_PREV', start);
      commit('SET_PAGINATION_PAGE_PREV');
      dispatch('fetchTrainers');
    },
  },
};
