<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">LOGIN</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
// import { validateEmail } from '@/utils/validation/vue';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },

  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님 환영 합니다.`;
        this.initForm();
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },

    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
