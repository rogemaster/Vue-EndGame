import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액상ㅎ수 초기화 함수
function createInstance() {
  // API 공통화 = instance 생성 후 공통 사용
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

//학습노트 조회
function fetchPosts() {
  return instance.get('/posts');
}

export { registerUser, loginUser, fetchPosts };
