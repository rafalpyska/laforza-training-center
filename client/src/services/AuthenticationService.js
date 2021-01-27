import Api from '@/services/Api';
import { setCookie, deleteCookie } from '@/helpers/cookies';

class AuthenticationService {
  async register(credentials) {
    return await Api().post('/auth/local/register', credentials)
  }
  async login(credentials) {
    return await Api().post('/auth/local', credentials)
    .then(response => {
      if (response.data.jwt) {
        setCookie('jwt', response.data.jwt)
        localStorage.setItem('credentials', JSON.stringify(response.data.user));
      }
      return response.data;
    })
  }
  logout() {
    deleteCookie('jwt');
    localStorage.removeItem('credentials');
  }
}

export default new AuthenticationService();