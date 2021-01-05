export default {
  state: {
    classes: []
  },
  getters: {
    classes(state) {
      return state.classes;
    }
  },
  mutations: {
    SET_COURSES(state, classes) {
      state.classes = classes;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('setLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/classes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_COURSES', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  }
};
