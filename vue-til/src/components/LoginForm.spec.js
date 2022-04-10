// import { sum } from './math';

// describe('math.js', () => {
//   // describe: 연관된 테스트 케이스를 그룹화 하는 API
//   test('10 + 20 = 30', () => {
//     //하나의 테스트 케이스를 검증하는 API
//     const result = sum(10, 20);
//     // 결과값이 맞는지 검증 하는 API
//     expect(result).toBe(30);
//   });
// });

// vue components test 방법
// 1. 사용자의 인지 테스트
import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@te.com',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});
