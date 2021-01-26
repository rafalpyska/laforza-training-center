import AuthenticationService from '@/services/AuthenticationService';
const credentials = JSON.parse(localStorage.getItem('credentials'));
const initialState = credentials
  ? { 
      token: credentials.jwt, 
      user: credentials.user,
      isUserLoggedIn: true,
      loginError: null,
      registerError: null,
      registerSuccessMessage: null
    } 
  : {
      token:
      null,
      user: null,
      isUserLoggedIn: false,
      loginError: null,
      registerError: null,
      registerSuccessMessage: null,
    }
export default {
  namespaced: true,
  state: initialState,
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
        return dispatch('loginAttempt', { token: data.jwt, user: data.user });
      } catch (error) {
        commit('SET_LOGIN_ERROR', error.response.data.message[0].messages[0])
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
