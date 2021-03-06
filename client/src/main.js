import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import LazyLoadDirective from "./directives/LazyLoadDirective";
import "./assets/styles/main.scss";
import "@/components/_globals";
import VueScreen from "vue-screen";

Vue.use(VueScreen);

Vue.directive("lazyload", LazyLoadDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
