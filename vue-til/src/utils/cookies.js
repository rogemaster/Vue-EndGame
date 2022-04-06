import { getUserFormCookie, getAuthFormCookie } from '@/utils/cookies';

function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `til_user=${value}`;
}

function getAuthFormCookie() {
  document.cookie.replace(
    /(?:(:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFormCookie() {
  return document.cookie.replace(
    /(?:(:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFormCookie,
  getUserFormCookie,
  deleteCookie,
};