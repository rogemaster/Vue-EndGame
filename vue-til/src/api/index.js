import axios from 'axios';

// API 공통화 = instance 생성 후 공통 사용
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

console.log('호출 API::', instance);

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
