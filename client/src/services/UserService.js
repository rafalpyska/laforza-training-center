import Api from '@/services/Api';
import authenticationHeaders from './AuthenticationHeaders';

class UserService {
  async getUserProfile() {
    return await Api().get('/user/me', { withCredentials: true, headers: authenticationHeaders() })
      .then(response => response.data);
    }
}


export default new UserService();