import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  // API 공통화 = instance 생성 후 공통 사용
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
