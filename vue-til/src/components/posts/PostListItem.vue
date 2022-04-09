<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-content">{{ postItem.contnets }}</div>
    <div class="post-time">
      {{ postItem.createdAt | formateDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async deleteItem() {
      if (confirm('학습노트를 삭제 하시겠습니까?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },

    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push({ path: `/post/${id}` });
    },
  },
};
</script>

<style></style>
