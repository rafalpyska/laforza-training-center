import Vue from "vue";
import Vuex from "vuex";
import blog from "./modules/blog";
import cart from "./modules/cart";
import courses from "./modules/courses";
import trainers from "./modules/trainers";
import bundles from "./modules/bundles";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    blog,
    cart,
    courses,
    trainers,
    bundles,
    auth
  }
});
