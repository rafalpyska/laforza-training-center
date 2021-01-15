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
    SET_BUNDLES_LOADING(state, loadingStatus) {
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
      commit('SET_BUNDLES_LOADING', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/bundles`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BUNDLES', data);
          commit('SET_BUNDLES_LOADING', false);
        })
        .catch(error => {
          commit('setBundlesError', error);
        });
    }
  }
};
