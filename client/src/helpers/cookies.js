let date = new Date();
date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
let expires = 'expires=' + date.toUTCString();

export const setCookie = (name, value, expiration = expires) => {
  document.cookie = `${name}=${encodeURIComponent(value)};${expiration};path=/`;
};

export const getCookie = name => {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
};

export const deleteCookie = name => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
