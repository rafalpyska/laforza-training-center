import { createStore } from 'vuex';

export default createStore({
  state: {
    classes: null,
    posts: null,
    post: null,
    loading: true
  },
  mutations: {
    loading(state, loadingStatus) {
      return (state.loading = loadingStatus);
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
    },
    async fetchBlogPosts({ commit }) {
      commit('loading', true)
      return await fetch('http://localhost:1337/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BLOG_POSTS', data);
          commit('loading', false)
        }) // TODO: handle errors (catch)
        .catch(reason => console.log(reason));
    },
    async fetchOneBlogPost({ commit }, postSlug) {
      commit('loading', true)
      return await fetch(`http://localhost:1337/posts?slug=${postSlug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_ONE_BLOG_POST', data);
          commit('loading', false)
        }) // TODO: handle errors (catch)
        .catch(reason => console.log(reason));
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
    loadingStatus (state) {
      return state.loading
    }
  },
  modules: {}
});
