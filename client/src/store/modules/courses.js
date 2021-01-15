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
    SET_CLASSES_LOADING(state, loadingStatus) {
      return (state.classesLoading = loadingStatus);
    },
    SET_CLASSES_ERROR(state, error) {
      return (state.classesError = error);
    },
    SET_COURSES(state, classes) {
      state.classes = classes;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('SET_CLASSES_LOADING', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/classes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_COURSES', data);
          commit('SET_CLASSES_LOADING', false);
        })
        .catch(error => {
          commit('SET_CLASSES_ERROR', error);
        });
    }
  }
};
