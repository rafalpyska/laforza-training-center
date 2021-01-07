export default {
  state: {
    trainersLoading: true,
    trainersError: null,
    trainers: []
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
    }
  },
  mutations: {
    SET_TRAINERS(state, trainers) {
      state.trainers = trainers;
    },
    setTrainersLoading(state, loadingStatus) {
      return (state.trainersLoading = loadingStatus);
    },
    setTrainersError(state, error) {
      return (state.trainersError = error);
    }
  },
  actions: {
    async fetchTrainers({ commit }, start = 0, limit = 50) {
      commit('setTrainersLoading', true);
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
          commit('SET_TRAINERS', data);
          commit('setTrainersLoading', false);
        })
        .catch(error => {
          commit('setTrainersError', error);
        });
    }
  }
};
