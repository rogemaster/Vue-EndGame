import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },

  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },

  mutations: {
    SET_UserName(state, username) {
      state.username = username;
    },

    SET_ClearUserName(state) {
      state.username = '';
    },

    SET_Token(state, token) {
      state.token = token;
    },
  },
});
