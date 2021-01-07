export default {
  state: {
    classesLoading: true,
    classesError: null,
    classes: []
  },
  getters: {
    classesLoadingStatus(state) {
      return state.classesLoading;
    },
    classesErrorStatus(state) {
      return state.classesError;
    },
    classes(state) {
      return state.classes;
    }
  },
  mutations: {
    setClassesLoading(state, loadingStatus) {
      return (state.classesLoading = loadingStatus);
    },
    setClassesError(state, error) {
      return (state.classesError = error);
    },
    SET_COURSES(state, classes) {
      state.classes = classes;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('setClassesLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/classes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_COURSES', data);
          commit('setClassesLoading', false);
        })
        .catch(error => {
          commit('setClassesError', error);
        });
    }
  }
};
