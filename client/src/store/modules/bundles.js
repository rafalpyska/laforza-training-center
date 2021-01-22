export default {
  state: {
    bundlesLoading: true,
    bundlesError: null,
    bundles: []
  },
  getters: {
    bundlesLoadingStatus(state) {
      return state.bundlesLoading;
    },
    bundlesErrorStatus(state) {
      return state.bundlesError;
    },
    bundles(state) {
      return state.bundles;
    }
  },
  mutations: {
    SET_BUNDLES_LOADING(state, loadingStatus) {
      return (state.bundlesLoading = loadingStatus);
    },
    SET_BUNDLES_ERROR(state, error) {
      return (state.bundlesError = error);
    },
    SET_BUNDLES(state, bundles) {
      state.bundles = bundles;
    }
  },
  actions: {
    async fetchBundles({ commit }) {
      commit("SET_BUNDLES_LOADING", true);
      return await fetch(`${process.env.VUE_APP_API_URL}/bundles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          commit("SET_BUNDLES", data);
          commit("SET_BUNDLES_LOADING", false);
        })
        .catch(error => {
          commit("SET_BUNDLES_ERROR", error);
        });
    }
  }
};
