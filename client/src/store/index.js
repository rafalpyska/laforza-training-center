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
      return await fetch('http://localhost:8081/api/classes')
        .then(response => response.json())
        .then(data => {
          commit('loading');
          commit('SET_COURSES', data.data.classes);
        }) // TODO: handle errors (catch)
    }
  },
  modules: {}
});
