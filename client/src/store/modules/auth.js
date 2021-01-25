import AuthenticationService from '@/services/AuthenticationService';

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    error: null
  },
  getters: {

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      if(token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async register({ dispatch, commit }, credentials) {
      try {
        const response = await AuthenticationService.register(credentials);
        return dispatch('loginAttempt', { token: response.data.jwt, user: response.data.user });
      } catch (error) {
        commit('SET_ERROR', error.response.data.message)
      }
    },
    async login({ dispatch, commit }, credentials) {
      try {
        const response = await AuthenticationService.login(credentials);
        return dispatch('loginAttempt', { token: response.data.jwt, user: response.data.user });
      } catch (error) {
        commit('SET_ERROR', error.response.data.message)
      }
    },
    loginAttempt({ commit }, { token, user }) {
      commit('SET_TOKEN', token);
      commit('SET_USER', user)
    }
  }
};
