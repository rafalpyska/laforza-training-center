import { getCookie } from '@/helpers/cookies';

export default function authenticationHeaders() {
  let token = getCookie('jwt');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}