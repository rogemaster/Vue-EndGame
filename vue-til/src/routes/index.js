import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

// component 웹팩 다이나믹 임포트 기능 코드스플리팅 처리
const router = new VueRouter({
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
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },

    // Call Back Router 처리
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// 특정 페이지별 권한 설정
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return; // 다음 next() 함수가 실행되지 않도록 방지
  }
  next();
});

export default router;
