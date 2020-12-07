import { createStore } from "vuex";

export default createStore({
  state: {
    courses: [],
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
    fetchCourses({ commit }) {
      return fetch('http://localhost:8081/api/classes')
        .then(response => response.json())
        .then(data => {
          commit('loading');
          commit('SET_COURSES', data.data.classes);
        }) // TODO: handle errors (catch)
    }
  },
  modules: {}
});
