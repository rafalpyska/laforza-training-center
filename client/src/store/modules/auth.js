import AuthenticationService from '@/services/AuthenticationService';
import UserService from '@/services/UserService';
import { getCookie } from '@/helpers/cookies';

const jwt = getCookie('jwt');

export default {
  namespaced: true,
  state: {
    token: jwt || null,
    user: null,
    isUserLoggedIn: false,
    loginError: null,
    registerError: null,
    registerSuccessMessage: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.isUserLoggedIn;
    },
    registerError(state) {
      return state.registerError;
    },
    loginError(state) {
      return state.loginError;
    },
    registerSuccessMessage(state) {
      return state.registerSuccessMessage;
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
      state.isUserLoggedIn = false;
      state.user = null;
      state.token = null;
    },
    SET_REGISTER_SUCCESS_MESSAGE(state, message) {
      state.registerSuccessMessage = message
    },
    SET_REGISTER_ERROR(state, error) {
      state.registerError = error
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error
    },
    CLEAR_LOGIN_ERRORS(state) {
      state.loginError = null;
    }
  },
  actions: {
    async register({ commit }, credentials) {
      try {
        const response = await AuthenticationService.register(credentials)
        if(response.status === 200) {
          commit("SET_REGISTER_SUCCESS_MESSAGE", "Your account was created successfuly!")
        }
        return response;
      } catch (error) {
        commit('SET_REGISTER_ERROR', error.response.data.message[0].messages[0])
      }
    },
    async login({ dispatch, commit }, credentials) {
      try {
        const data = await AuthenticationService.login(credentials);
        dispatch('loginAttempt', { token: data.jwt, user: data.user });
      } catch (error) {
        commit('SET_LOGIN_ERROR', error.response.data.message[0].messages[0])
      }
    },
    async getUser({ dispatch, state }) {
      try {
        const data = await UserService.getUser()
        if(state.jwt !== null) {
          dispatch('loginAttempt', { token: jwt, user: data })
        }   
      } catch (error) {
        console.log(error)
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
