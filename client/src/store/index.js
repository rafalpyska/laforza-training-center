import { createStore } from "vuex";

export default createStore({
  state: {
    courses: []
  },
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses;
    }
  },
  actions: {
    fetchCourses({ commit }) {
      return fetch('http://localhost:8081/api/classes')
        .then(response => response.json())
        .then(data => {
          commit('SET_COURSES', data.data.classes);
        })
    }
  },
  modules: {}
});
