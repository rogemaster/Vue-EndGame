import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// component 웹팩 다이나믹 임포트 기능 코드스플리팅 처리
export default new VueRouter({
  // mode : history mode, hash mode(default)
  mode: 'history',
  routes: [
    // redirect router 처리
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },

    // Call Back Router 처리
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
