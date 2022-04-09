<template>
  <div>
    <div class="main list-container contents">
      <h1>Today I Learned</h1>
      <div v-if="isLoading">Loading</div>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        />
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
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
      console.log(data);
      this.isLoading = false;
      this.postItems = data.posts;
      console.log(data.posts);
    },
  },
};
</script>

<style scoped>
.list-container {
  padding-top: 13px;
}
.list-container.sticky {
  margin-top: 76px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
ul > li {
  position: relative;
  flex-grow: 1;
  width: 320px;
  height: 250px;
  margin: 7px;
  padding: 10px 20px;
  background: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
}
.post-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.post-contents {
  height: 160px;
  overflow-y: auto;
  font-size: 18px;
}
.post-time {
  position: absolute;
  bottom: 4px;
  right: 5px;
  font-size: 14px;
  color: #9e9e9e;
}
.icon {
  font-size: 1.3rem;
  cursor: pointer;
  color: #364f6b;
  padding-right: 0.4rem;
}
.icon:hover {
  color: #3fc1c9;
}
.icon:active {
  color: #fc5185;
}
.ion-md-create {
  padding-left: 0.1rem;
}
</style>
