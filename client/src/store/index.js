import { createStore } from "vuex";

export default createStore({
  state: {
    courses: null,
    loading: true
  },
  mutations: {
    loading(state) {
      return state.loading = false;
    },
    SET_COURSES(state, courses) {
      state.courses = courses;
    }
  },
  actions: {
    async fetchCourses({ commit }) {
      return await fetch('http://localhost:1337/classes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          commit('loading');
          commit('SET_COURSES', data);
        }) // TODO: handle errors (catch)
    }
  },
  modules: {}
});
