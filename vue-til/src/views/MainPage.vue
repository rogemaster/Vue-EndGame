<template>
  <div>
    <h1>Today I Learned</h1>
    <div v-if="isLoading">Loading</div>
    <ul v-else>
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :item="postItem"
      />
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';

export default {
  components: {
    PostListItem,
  },

  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
      console.log(data.posts);
    },
  },
};
</script>

<style></style>
