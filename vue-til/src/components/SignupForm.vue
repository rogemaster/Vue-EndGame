<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">PW: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">NICK: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button class="btn" type="submit">SIGN UP</button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',

      logMessage: '',
    };
  },

  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const { data } = await registerUser(userData);

      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },

    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped>
.form {
  width: 460px;
  height: 100%;
}
.form .validation-text {
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.btn {
  color: white;
}
.log {
  width: 460px;
}
</style>
