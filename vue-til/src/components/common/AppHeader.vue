<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
        <span v-if="isLogin">by {{ $store.state.username }}</span>
      </router-link>
      <div class="navigations">
        <template v-if="!isLogin">
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link>
        </template>
        <template v-else>
          <a href="javascript:;" class="logout-button">Logout</a>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* Use the color you like! */
  /* background-color: #3CA776; */
  /* background-color: #2e3e37; */
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.add-button {
  background: #3ca776;
  color: white;
  padding: 4px 23px;
  border-radius: 4px;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
