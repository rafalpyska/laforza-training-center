import { createStore } from 'vuex';
import blog from './modules/blog';
import cart from './modules/cart';
import courses from './modules/courses';
import trainers from './modules/trainers';
export default createStore({
  state: {
    loading: true,
    error: null
  },
  getters: {
    loadingStatus(state) {
      return state.loading;
    },
    errorStatus(state) {
      return state.error;
    }
  },
  mutations: {
    setLoading(state, loadingStatus) {
      return (state.loading = loadingStatus);
    },
    setError(state, error) {
      return (state.error = error);
    }
  },
  actions: {},
  modules: {
    blog,
    cart,
    courses,
    trainers
  }
});
