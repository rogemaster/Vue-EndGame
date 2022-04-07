<template>
  <div>
    <h1>Create Post</h1>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="content">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
        </div>
        <button type="submit">Create</button>
      </form>
      <p>
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },

  computed: {
    ...mapActions(['']),
  },

  methods: {
    async submitForm() {
      const postData = {
        title: this.title,
        contents: this.contents,
      };
      const response = await this.$store.dispatch('', postData);
      console.log(response);
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  width: 100%;
}
.btn {
  color: white;
}
</style>
