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
    <button type="submit" :disabled="!isUserNameValid || !password">
      LOGIN
    </button>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
    ...mapActions(['LOGIN']),
  },

  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch('LOGIN', userData);
        this.$router.push({ path: '/main' });

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
