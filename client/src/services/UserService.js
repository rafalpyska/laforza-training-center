import Api from '@/services/Api';
import authenticationHeaders from './AuthenticationHeaders';

class UserService {
  async getUser() {
    return await Api()
      .get('/users/me', { headers: authenticationHeaders() })
      .then(response => response.data);
  }
}

export default new UserService();
