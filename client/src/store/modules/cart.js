export default {
  state: {
    cart: []
  },
  getters: {
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
  mutations: {
    ADD_TO_CART(state, { course, quantity, trainer, id }) {
      let courseInCart = state.cart.find(item => {
        return item.course.name === course.name && item.trainer === trainer;
      });

      if (courseInCart) {
        courseInCart.quantity += quantity;
        return;
      }
      state.cart.push({
        id,
        course,
        quantity,
        trainer
      });
    },
    REMOVE_COURSE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => {
        return item.id !== id;
      });
    }
  },
  actions: {
    addCourseToCart({ commit }, { course, quantity, trainer, id }) {
      commit("ADD_TO_CART", { course, quantity, trainer, id });
    },
    removeCourseFromCart({ commit }, id) {
      commit("REMOVE_COURSE_FROM_CART", id);
    }
  }
};
