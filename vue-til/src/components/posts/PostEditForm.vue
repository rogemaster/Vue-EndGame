<template>
  <div class="contents">
    <h1>Edit Post</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p class="validation-text">
            <span v-if="!isContentsValid" class="warning">
              Maximum Length is 50
            </span>
          </p>
        </div>
        <button class="btn" type="submit">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },

  computed: {
    isContentsValid() {
      return this.contents.length < 200;
    },
  },

  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },

  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error;
      }
    },
  },
};
</script>

<style scoped>
.form textarea {
  margin-bottom: 0;
}
.form .validation-text {
  margin-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.form .validation-text.reverse {
  flex-direction: row;
}
.btn {
  color: white;
}
.log {
  width: 420px;
}
</style>
