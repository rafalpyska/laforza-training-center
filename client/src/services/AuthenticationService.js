import Api from '@/services/Api';

class AuthenticationService {
  register(credentials) {
    return Api().post('/auth/local/register', credentials)
  }
  login(credentials) {
    return Api().post('/auth/local', credentials)
    .then(response => {
      if (response.data.jwt) {
        localStorage.setItem('credentials', JSON.stringify(response.data));
      }
      return response.data;
    })
  }
  logout() {
    localStorage.removeItem('credentials');
  }
}

export default new AuthenticationService();
