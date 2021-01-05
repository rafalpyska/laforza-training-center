export default {
  state: {
    trainers: []
  },
  getters: {
    trainers(state) {
      return state.trainers;
    }
  },
  mutations: {
    SET_TRAINERS(state, trainers) {
      state.trainers = trainers;
    }
  },
  actions: {
    async fetchTrainers({ commit }, start = 0, limit = 50) {
      commit('setLoading', true);
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
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  }
};
