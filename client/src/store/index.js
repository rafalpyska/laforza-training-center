import { createStore } from 'vuex';

export default createStore({
  state: {
    classes: null,
    posts: null,
    post: null,
    trainer: null,
    loading: true,
    error: null
  },
  mutations: {
    setLoading(state, loadingStatus) {
      return (state.loading = loadingStatus);
    },
    setError(state, error) {
      return (state.error = error);
    },
    SET_COURSES(state, classes) {
      state.classes = classes;
    },
    SET_BLOG_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_ONE_BLOG_POST(state, post) {
      state.post = post;
    },
    SET_TRAINERS(state, trainers) {
      state.trainers = trainers;
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('setLoading', true)
      return await fetch('http://localhost:1337/classes', {
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
    },
    async fetchBlogPosts({ commit }) {
      commit('setLoading', true)
      return await fetch('http://localhost:1337/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BLOG_POSTS', data);
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    async fetchOneBlogPost({ commit }, postSlug) {
      commit('setLoading', true)
      return await fetch(`http://localhost:1337/posts?slug=${postSlug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_ONE_BLOG_POST', data);
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    async fetchTrainers({ commit }) {
      commit('setLoading', true)
      return await fetch('http://localhost:1337/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_TRAINERS', data);
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  },
  getters: {
    classes (state) {
      return state.classes
    },
    posts (state) {
      return state.posts
    },
    post (state) {
      return state.post
    },
    trainers (state) {
      return state.trainers
    },
    loadingStatus (state) {
      return state.loading
    },
    errorStatus (state) {
      return state.error
    }
  },
  modules: {}
});
