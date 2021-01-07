export default {
  state: {
    bundles: []
  },
  getters: {
    bundles(state) {
      return state.bundles;
    }
  },
  mutations: {
    SET_BUNDLES(state, bundles) {
      state.bundles = bundles;
    }
  },
  actions: {
    async fetchBundles({ commit }) {
      commit('setLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/bundles`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BUNDLES', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  }
};
