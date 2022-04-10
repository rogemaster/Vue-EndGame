<template>
  <div class="contnets">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUserNameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">PW: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          class="btn"
          :class="!isUserNameValid || !password ? 'disabled' : null"
          type="submit"
          :disabled="!isUserNameValid || !password"
        >
          LOGIN
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
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

<style scoped>
.btn {
  color: white;
}
</style>
