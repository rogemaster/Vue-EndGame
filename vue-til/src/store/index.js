import Vue from 'vue';
import Vuex from 'vuex';
import { getUserFormCookie, getAuthFormCookie } from '@/utils/cookies';
import { loginUser } from '@/api/index';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFormCookie() || '',
    token: getAuthFormCookie() || '',
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

  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('SET_UserName', data.user.username);
      commit('SET_Token', data.token);

      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data;
    },
  },
});
