// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

//학습노트 목록조회
function fetchPosts() {
  return posts.get('');
}

// 특정 학습노트 조회
function fetchPost(postId) {
  return posts.get(postId);
}

// 특정 학습노트 수정
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습노트 데이터 생성
function createPost(postData) {
  return posts.post('', postData);
}

// 학습노트 데이터 삭제
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
