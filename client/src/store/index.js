import { createStore } from 'vuex';

export default createStore({
  state: {
    classes: null,
    loading: true
  },
  mutations: {
    loading(state, loadingStatus) {
      return (state.loading = loadingStatus);
    },
    SET_COURSES(state, classes) {
      state.classes = classes;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('loading', true)
      return await fetch('http://localhost:1337/classes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_COURSES', data);
          commit('loading', false)
        }) // TODO: handle errors (catch)
        .catch(reason => console.log(reason));
    }
  },
  getters: {
    classes (state) {
      return state.classes
    },
    loadingStatus (state) {
      return state.loading
    }
  },
  modules: {}
});
