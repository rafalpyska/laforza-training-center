import { createStore } from 'vuex';
import blog from './modules/blog';
import cart from './modules/cart';
import courses from './modules/courses';
import trainers from './modules/trainers';
import bundles from './modules/bundles';
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    blog,
    cart,
    courses,
    trainers,
    bundles
  }
});
