import { createStore } from 'vuex';

export default createStore({
  state: {
    classes: [],
    posts: [],
    post: [],
    trainer: [],
    cart: [],
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
    },
    ADD_TO_CART(state, { course, quantity, trainer }) {
      let courseInCart = state.cart.find(item => {
        return item.course.name === course.name && item.trainer === trainer;
      });

      if (courseInCart) {
        courseInCart.quantity += quantity;
        return;
      }
      state.cart.push({
        course,
        quantity,
        trainer
      });
    }
  },
  actions: {
    async fetchClasses({ commit }) {
      commit('setLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/classes`, {
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
      commit('setLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BLOG_POSTS', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    async fetchOneBlogPost({ commit }, postSlug) {
      commit('setLoading', true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/posts?slug=${postSlug}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit('SET_ONE_BLOG_POST', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    async fetchTrainers({ commit }, start = 0, limit = 50) {
      commit('setLoading', true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/users?_start=${start}&_limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit('SET_TRAINERS', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    addCourseToCart({ commit }, { course, quantity, trainer }) {
      commit('ADD_TO_CART', { course, quantity, trainer });
    }
  },
  getters: {
    classes(state) {
      return state.classes;
    },
    posts(state) {
      return state.posts;
    },
    post(state) {
      return state.post;
    },
    trainers(state) {
      return state.trainers;
    },
    loadingStatus(state) {
      return state.loading;
    },
    errorStatus(state) {
      return state.error;
    },
    cart(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalItemPrice(state) {
      let total = 0;
      state.cart.forEach(item => {
        total += item.course.price * item.quantity;
      });
      return total;
    }
  },
  modules: {}
});
