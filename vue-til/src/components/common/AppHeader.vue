<template>
  <header>
    <header>
      <div>
        <template v-if="isLogin">
          <div>
            <span>{{ $store.state.username }}</span>
            <a href="javascript:;" @click="logoutUser">Logout</a>
          </div>
        </template>
        <template v-else>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link>
        </template>
      </div>
    </header>
  </header>
</template>

<script>
// import Demo from '../../demo/basic/Demo'
// import Demo from '@/demo/basic/Demo'
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLogin']),
  },

  methods: {
    logoutUser() {
      this.$store.commit('SET_ClearUserName');
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style></style>
