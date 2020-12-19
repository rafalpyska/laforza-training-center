import { createStore } from 'vuex';

export default createStore({
  state: {
    classes: null,
    loading: true
  },
  mutations: {
    loading(state) {
      return (state.loading = false);
    },
    SET_COURSES(state, classes) {
      state.classes = classes;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      return await fetch('http://localhost:1337/classes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('loading');
          commit('SET_COURSES', data);
        }) // TODO: handle errors (catch)
        .catch(reason => console.log(reason));
    }
  },
  modules: {}
});
