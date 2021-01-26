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
    isAuthenticated(state) {
      return state.isUserLoggedIn;
    }
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
    LOGOUT(state) {
      state.status.isUserLoggedIn = false;
      state.user = null;
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async register({ commit }, credentials) {
      try {
        return await AuthenticationService.register(credentials);
      } catch (error) {
        commit('SET_ERROR', error.response.data.message)
      }
    },
    async login({ dispatch, commit }, credentials) {
      try {
        const data = await AuthenticationService.login(credentials);
        return dispatch('loginAttempt', { token: data.jwt, user: data.user });
      } catch (error) {
        commit('SET_ERROR', error.response.data.message)
      }
    },
    logout({ commit }) {
      AuthenticationService.logout();
      commit('LOGOUT');
    },
    loginAttempt({ commit }, { token, user }) {
      commit('SET_TOKEN', token);
      commit('SET_USER', user)
    }
  }
};
