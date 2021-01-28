import AuthenticationService from '@/services/AuthenticationService';
import UserService from '@/services/UserService';
import { getCookie } from '@/helpers/cookies';

const jwt = getCookie('jwt');


export default {
  namespaced: true,
  state: {
    token: jwt || null,
    user: {},
    isUserLoggedIn: false,
    loginError: null,
    registerError: null,
    userError: null,
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
    userError(state) {
      return state.userError;
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
      state.user = {};
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
    SET_USER_ERROR(state, error) {
      state.userError = error;
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
        commit('SET_LOGIN_ERROR', error.response.data.message[0].messages[0]);
        dispatch('logout');
      }
    },
    async getUser({ dispatch, state, commit }) {
      try {
        const data = await UserService.getUser()
        if(state.jwt !== null) {
          dispatch('loginAttempt', { token: jwt, user: data })
        }   
      } catch (error) {
        commit('SET_USER_ERROR', error.response.data.message[0].messages[0]);
        dispatch('logout');
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
