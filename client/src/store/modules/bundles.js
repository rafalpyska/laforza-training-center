export default {
  state: {
    bundlesLoading: true,
    bundlesError: null,
    bundles: []
  },
  getters: {
    bundlesLoadingStatus(state) {
      return state.loading;
    },
    bundlesErrorStatus(state) {
      return state.error;
    },
    bundles(state) {
      return state.bundles;
    }
  },
  mutations: {
    setBundlesLoading(state, loadingStatus) {
      return (state.loading = loadingStatus);
    },
    setBundlesError(state, error) {
      return (state.error = error);
    },
    SET_BUNDLES(state, bundles) {
      state.bundles = bundles;
    }
  },
  actions: {
    async fetchBundles({ commit }) {
      commit('setBundlesLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/bundles`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BUNDLES', data);
          commit('setBundlesLoading', false);
        })
        .catch(error => {
          commit('setBundlesError', error);
        });
    }
  }
};
